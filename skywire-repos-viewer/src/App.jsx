import { useState, useEffect } from 'react'
import { Database, FileText, Code, Package, GitBranch, Layers, Network, Settings } from 'lucide-react'
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

## Summary

- **Total Dependencies**: ${repo === 'dmsg' ? '61' : '165'}
- **Repository**: ${repo}
- **Module Path**: github.com/skycoin/${repo}

## Dependencies List

| Package | Version |
|---------|----------|
| \`github.com/gin-gonic/gin\` | \`v1.10.1\` |
| \`github.com/sirupsen/logrus\` | \`v1.9.3\` |
| \`github.com/spf13/cobra\` | \`v1.8.1\` |
| \`github.com/stretchr/testify\` | \`v1.9.0\` |
| \`golang.org/x/crypto\` | \`v0.31.0\` |

*This is sample data. Install dependencies and run the dev server to load actual data.*`

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

              <div className="prose prose-invert max-w-none">
                <div className="markdown-content">
                  <ReactMarkdown>{content}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App