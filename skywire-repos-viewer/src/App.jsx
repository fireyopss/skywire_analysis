import { useState, useEffect } from 'react'
import { Database, FileText, Code, Package, GitBranch, Layers, Network, Settings, Search, ExternalLink } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

const dataTypes = [
  {
    id: 'external_dependencies',
    name: 'External Dependencies',
    icon: Package,
    description: 'All external Go module dependencies with versions'
  },
  {
    id: 'compilation_units',
    name: 'Compilation Units',
    icon: Layers,
    description: 'All Go packages/compilation units in the repository'
  },
  {
    id: 'dependency_compilation_mapping',
    name: 'Dependency Mapping',
    icon: Network,
    description: 'Which compilation units use which dependencies'
  },
  {
    id: 'compilation_unit_relationships',
    name: 'Unit Relationships',
    icon: GitBranch,
    description: 'Import/export relationships between compilation units'
  },
  {
    id: 'function_listings',
    name: 'Function Listings',
    icon: Code,
    description: 'All functions and methods with signatures'
  },
  {
    id: 'type_listings',
    name: 'Type Listings',
    icon: Database,
    description: 'All structs, interfaces, and type aliases'
  },
  {
    id: 'interface_usage_listings',
    name: 'Interface Usage',
    icon: Settings,
    description: 'How interfaces are used throughout the codebase'
  },
  {
    id: 'interface_definitions',
    name: 'Interface Definitions',
    icon: FileText,
    description: 'All interface definitions with their methods'
  }
]

const repositories = [
  { id: 'dmsg', name: 'DMSG', description: 'Distributed messaging protocol' },
  { id: 'skywire', name: 'Skywire', description: 'Mesh networking protocol' }
]

// Component for displaying external dependencies in a clean list view
function ExternalDependenciesView({ content }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  // Parse the markdown content to extract dependencies
  const parseDependencies = (markdownContent) => {
    const lines = markdownContent.split('\n')
    const categories = []
    let currentCategory = null
    let inTable = false
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      
      // Check for category headers (### 🌐 Web & Network Libraries)
      if (line.startsWith('### ')) {
        const match = line.match(/### (.+)/)
        if (match) {
          currentCategory = {
            name: match[1],
            icon: match[1].split(' ')[0],
            title: match[1].substring(match[1].indexOf(' ') + 1),
            packages: []
          }
          categories.push(currentCategory)
          inTable = false
        }
      }
      
      // Check for table headers
      if (line.includes('Package') && line.includes('Version') && line.includes('Description')) {
        inTable = true
        continue
      }
      
      // Skip table separator
      if (line.includes('|---')) {
        continue
      }
      
      // Parse table rows
      if (inTable && line.includes('|') && currentCategory && !line.includes('Package')) {
        const parts = line.split('|').map(part => part.trim()).filter(part => part)
        if (parts.length >= 3) {
          const pkg = parts[0].replace(/`/g, '')
          const version = parts[1].replace(/`/g, '')
          const description = parts[2]
          
          if (pkg && version && description) {
            currentCategory.packages.push({
              package: pkg,
              version: version,
              description: description
            })
          }
        }
      }
      
      // End table when we hit an empty line
      if (inTable && line === '') {
        inTable = false
      }
    }
    
    return categories
  }
  
  const dependencies = parseDependencies(content)
  const allCategories = ['all', ...dependencies.map(cat => cat.title.toLowerCase())]
  
  // Filter dependencies based on search and category
  const filteredDependencies = dependencies.map(category => ({
    ...category,
    packages: category.packages.filter(pkg => {
      const matchesSearch = searchTerm === '' || 
        pkg.package.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === 'all' || 
        category.title.toLowerCase().includes(selectedCategory)
      
      return matchesSearch && matchesCategory
    })
  })).filter(category => category.packages.length > 0)
  
  const totalDependencies = dependencies.reduce((sum, cat) => sum + cat.packages.length, 0)
  const filteredTotal = filteredDependencies.reduce((sum, cat) => sum + cat.packages.length, 0)
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-600">
        <h1 className="text-3xl font-bold text-white mb-2">External Dependencies</h1>
        <p className="text-slate-300">
          Total: <span className="text-blue-400 font-semibold">{totalDependencies}</span> dependencies
          {searchTerm || selectedCategory !== 'all' ? (
            <span> • Showing: <span className="text-green-400 font-semibold">{filteredTotal}</span></span>
          ) : null}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search dependencies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Categories</option>
          {dependencies.map((cat, idx) => (
            <option key={idx} value={cat.title.toLowerCase()}>
              {cat.title}
            </option>
          ))}
        </select>
      </div>

      {/* Dependencies List */}
      <div className="space-y-8">
        {filteredDependencies.map((category, categoryIdx) => (
          <div key={categoryIdx} className="space-y-4">
            {/* Category Header */}
            <div className="flex items-center space-x-3 pb-2 border-b border-slate-600">
              <span className="text-2xl">{category.icon}</span>
              <h2 className="text-xl font-semibold text-white">{category.title}</h2>
              <span className="text-sm text-slate-400">({category.packages.length})</span>
            </div>
            
            {/* Packages Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.packages.map((pkg, pkgIdx) => (
                <div key={pkgIdx} className="bg-slate-800 rounded-lg p-4 border border-slate-600 hover:border-slate-500 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-mono text-sm font-semibold text-blue-400 truncate" title={pkg.package}>
                        {pkg.package}
                      </h3>
                      <p className="text-xs text-green-400 font-mono mt-1">{pkg.version}</p>
                    </div>
                    <a
                      href={`https://${pkg.package}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors ml-2"
                      title="View on web"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{pkg.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredDependencies.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">No dependencies found</div>
          <div className="text-gray-500 text-sm">Try adjusting your search or filter criteria</div>
        </div>
      )}
    </div>
  )
}

function App() {
  const [selectedRepo, setSelectedRepo] = useState('dmsg')
  const [selectedDataType, setSelectedDataType] = useState('external_dependencies')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const loadContent = async (repo, dataType) => {
    setLoading(true)
    setError(null)
    
    try {
      // In a real app, this would be an API call
      // For now, we'll simulate loading the markdown files
      const response = await fetch(`/outputs/${repo}/markdown/${dataType}.md`)
      
      if (!response.ok) {
        throw new Error(`Failed to load ${dataType} for ${repo}`)
      }
      
      const text = await response.text()
      setContent(text)
    } catch (err) {
      setError(err.message)
      // For demo purposes, show some sample content
      setContent(generateSampleContent(repo, dataType))
    } finally {
      setLoading(false)
    }
  }

  const generateSampleContent = (repo, dataType) => {
    const repoName = repo.charAt(0).toUpperCase() + repo.slice(1)
    
    switch (dataType) {
      case 'external_dependencies':
        return `# ${repoName} External Dependencies

## 📊 Summary

- **Total Dependencies**: ${repo === 'dmsg' ? '61' : '165'}
- **Repository**: ${repo}
- **Module Path**: \`github.com/skycoin/${repo}\`

## 🏷️ Dependencies by Category

### 🌐 Web & Network Libraries
| Package | Version | Description |
|---------|---------|-------------|
| \`github.com/gin-gonic/gin\` | \`v1.10.1\` | High-performance HTTP web framework |
| \`github.com/go-chi/chi/v5\` | \`v5.2.2\` | Lightweight, idiomatic HTTP router |
| \`github.com/coder/websocket\` | \`v1.8.13\` | WebSocket implementation |
| \`golang.org/x/net\` | \`v0.41.0\` | Go network packages |

### 🔒 Security & Cryptography
| Package | Version | Description |
|---------|---------|-------------|
| \`golang.org/x/crypto\` | \`v0.39.0\` | Go cryptography packages |
| \`github.com/skycoin/noise\` | \`v0.0.0-20180327030543-2492fe189ae6\` | Noise protocol implementation |

### 🛠️ CLI & Utilities
| Package | Version | Description |
|---------|---------|-------------|
| \`github.com/spf13/cobra\` | \`v1.9.1\` | CLI library with commands, flags & config |
| \`github.com/sirupsen/logrus\` | \`v1.9.3\` | Structured logging library |
| \`github.com/fatih/color\` | \`v1.18.0\` | Color terminal output |

### 🧪 Testing & Development
| Package | Version | Description |
|---------|---------|-------------|
| \`github.com/stretchr/testify\` | \`v1.10.0\` | Testing toolkit with assertions & mocks |

### 📡 Data & Serialization
| Package | Version | Description |
|---------|---------|-------------|
| \`github.com/goccy/go-json\` | \`v0.10.5\` | High-performance JSON encoder/decoder |
| \`google.golang.org/protobuf\` | \`v1.36.6\` | Protocol Buffers implementation |
| \`gopkg.in/yaml.v3\` | \`v3.0.1\` | YAML support |

### 🏗️ Skycoin Ecosystem
| Package | Version | Description |
|---------|---------|-------------|
| \`github.com/skycoin/skycoin\` | \`v0.28.1-0.20241105130348-39b49a2d0a7f\` | Core Skycoin blockchain |
| \`github.com/skycoin/skywire\` | \`v1.3.29-rc7.0.20250623153831-0d7a5018d3d1\` | Skywire mesh network |

*This is enhanced sample data. Install dependencies and run the dev server to load actual categorized data.*`

      case 'compilation_units':
        return `# ${repoName} Compilation Units

## Summary

- **Total Compilation Units**: ${repo === 'dmsg' ? '64' : '94'}
- **Main Packages** (executables): ${repo === 'dmsg' ? '28' : '32'}
- **Library Packages**: ${repo === 'dmsg' ? '11' : '25'}
- **Internal Packages**: ${repo === 'dmsg' ? '8' : '15'}

## Main Packages (Executables)

- \`cmd/${repo}\`
- \`cmd/${repo}-server\`
- \`cmd/${repo}-discovery\`

## Library Packages

- \`pkg/${repo}\`
- \`pkg/direct\`
- \`pkg/disc\`

*This is sample data. Install dependencies and run the dev server to load actual data.*`

      default:
        return `# ${repoName} ${dataTypes.find(d => d.id === dataType)?.name}

## Overview

This section contains detailed analysis of ${dataTypes.find(d => d.id === dataType)?.description.toLowerCase()}.

*This is sample data. To view the actual analysis:*

1. Navigate to the project directory
2. Run \`npm install\`
3. Run \`npm run dev\`
4. The app will load the actual markdown files from the outputs directory

## Sample Data

This is placeholder content to demonstrate the interface. The actual data would be loaded from:
\`/outputs/${repo}/markdown/${dataType}.md\`

*Install dependencies and run the development server to see real data.*`
    }
  }

  useEffect(() => {
    loadContent(selectedRepo, selectedDataType)
  }, [selectedRepo, selectedDataType])

  const selectedDataTypeInfo = dataTypes.find(d => d.id === selectedDataType)
  const IconComponent = selectedDataTypeInfo?.icon || FileText

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-600 sticky top-0 z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <Database className="w-8 h-8 text-blue-400" />
                <h1 className="text-2xl font-bold text-white">Skywire Repos</h1>
              </div>
              <div className="hidden md:flex items-center space-x-4 text-sm text-gray-300">
                <span>Repository Analysis Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <div className="w-80 bg-black border-r border-gray-600 overflow-y-auto">
          {/* Repository Selection */}
          <div className="p-6 border-b border-gray-600">
            <h2 className="text-lg font-semibold text-white mb-4">Repository</h2>
            <div className="space-y-3">
              {repositories.map((repo) => (
                <button
                  key={repo.id}
                  onClick={() => setSelectedRepo(repo.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-200 border ${
                    selectedRepo === repo.id
                      ? 'bg-blue-600 text-white border-blue-500 shadow-lg'
                      : 'bg-gray-900 text-gray-200 border-gray-700 hover:bg-gray-800 hover:border-gray-600'
                  }`}
                >
                  <div className="font-semibold text-base">{repo.name}</div>
                  <div className="text-sm opacity-80 mt-1">{repo.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Data Type Selection */}
          <div className="p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Data Type</h2>
            <div className="space-y-2">
              {dataTypes.map((dataType) => {
                const IconComp = dataType.icon
                return (
                  <button
                    key={dataType.id}
                    onClick={() => setSelectedDataType(dataType.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-start space-x-3 border ${
                      selectedDataType === dataType.id
                        ? 'bg-blue-600 text-white border-blue-500'
                        : 'bg-gray-900 text-gray-200 border-gray-700 hover:bg-gray-800 hover:border-gray-600 hover:text-white'
                    }`}
                  >
                    <IconComp className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">{dataType.name}</div>
                      <div className="text-xs opacity-75 mt-1">{dataType.description}</div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden bg-black">
          <div className="h-full flex flex-col">
            {/* Content Header */}
            <div className="bg-black border-b border-gray-600 px-6 py-5">
              <div className="flex items-center space-x-3">
                <IconComponent className="w-7 h-7 text-blue-400" />
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {selectedDataTypeInfo?.name} - {repositories.find(r => r.id === selectedRepo)?.name}
                  </h2>
                  <p className="text-gray-300 text-sm mt-1">{selectedDataTypeInfo?.description}</p>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 bg-black">
              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
                </div>
              ) : error ? (
                <div className="bg-red-900 border border-red-600 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="text-red-300 text-xl">⚠️</div>
                    <div>
                      <div className="font-medium text-red-100">Error Loading Data</div>
                      <div className="text-red-200 text-sm mt-1">{error}</div>
                    </div>
                  </div>
                </div>
              ) : null}

              {selectedDataType === 'external_dependencies' ? (
                <ExternalDependenciesView content={content} />
              ) : (
                <div className="prose prose-invert max-w-none">
                  <div className="markdown-content">
                    <ReactMarkdown>{content}</ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App