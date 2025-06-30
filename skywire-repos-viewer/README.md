# Skywire Repos Viewer

A modern React dashboard for viewing and exploring Go repository analysis data from the Skywire and DMSG projects.

## Features

- 🌟 **Modern Dark Theme UI** - Clean, professional interface optimized for code analysis
- 📊 **Multiple Data Views** - View external dependencies, compilation units, functions, types, and more
- 🔄 **Interactive Navigation** - Easy switching between repositories and data types
- 📖 **Markdown Rendering** - Beautiful rendering of analysis reports with syntax highlighting
- 🏆 **Real-time Loading** - Smooth loading states and error handling

## Data Types Available

### 📦 External Dependencies
View all external Go module dependencies with their versions in a clean table format.

### 🏗️ Compilation Units
Explore all Go packages/compilation units categorized by type (main, library, internal, examples).

### 🌐 Dependency Mapping
Understand which compilation units use which external dependencies.

### 🔗 Unit Relationships
Visualize import/export relationships between compilation units.

### ⚡ Function Listings
Browse all functions and methods with their complete signatures and visibility.

### 🏛️ Type Listings
Examine all structs, interfaces, and type aliases with detailed information.

### 🔧 Interface Usage
See how interfaces are used throughout the codebase (parameters, returns, fields, etc.).

### 📋 Interface Definitions
View all interface definitions with their method signatures.

## Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React Markdown** - Markdown rendering with syntax highlighting

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone and Install**
   ```bash
   cd /Users/tayyab/development/sythtask/skywire-repos-viewer
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   The app will automatically open at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
skywire-repos-viewer/
├── src/
│   ├── App.jsx          # Main application component
│   ├── index.css        # Tailwind CSS and custom styles
│   └── main.jsx         # React entry point
├── public/
│   └── outputs/         # Symlink to analysis data
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Data Loading

The app automatically loads analysis data from the `/outputs` directory which contains:

- `dmsg/markdown/` - DMSG repository analysis files
- `skywire/markdown/` - Skywire repository analysis files

Each directory contains 8 markdown files with different types of analysis data.

## Features in Detail

### Repository Selection
- Toggle between DMSG and Skywire repositories
- Each repository has its own complete set of analysis data

### Data Type Navigation
- 8 different analysis views available
- Icons and descriptions for each data type
- Smooth transitions between views

### Content Display
- Markdown rendering with custom dark theme styling
- Responsive layout that works on all screen sizes
- Custom scrollbars optimized for dark theme
- Loading states and error handling

### Styling
- Dark theme optimized for viewing code analysis
- Custom color palette with proper contrast
- JetBrains Mono font for code snippets
- Responsive design with mobile support

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Customization

The app is built with modularity in mind:

- **Colors**: Modify `tailwind.config.js` to adjust the color scheme
- **Data Types**: Edit the `dataTypes` array in `App.jsx` to add/remove analysis views
- **Repositories**: Modify the `repositories` array to support additional repos
- **Styling**: Custom CSS classes in `index.css` for markdown content

## Troubleshooting

### Data Not Loading
If you see "Failed to load" errors:
1. Ensure the outputs directory exists with markdown files
2. Check that the symlink in `public/outputs` points to the correct location
3. Verify the analysis tool has generated the markdown files

### Development Issues
- Make sure Node.js version is 18+
- Clear `node_modules` and run `npm install` again
- Check browser console for any JavaScript errors

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the Skywire ecosystem. Please refer to the main project license.