# Three UIKit

A React application combining three.js, React Three Fiber, and UIKit for building interactive 3D user interfaces.

## Project Overview

This project leverages modern web technologies to create a 3D UI experience:
- **React 19** - Modern React with hooks and latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool with HMR support
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for three.js
- **UIKit** - Flexible UI component library

## Dependencies

### Production
- `react` (^19.1.1) - UI library
- `react-dom` (^19.1.1) - React DOM rendering
- `three` (^0.181.0) - 3D graphics engine
- `@react-three/fiber` (^9.4.0) - React renderer for three.js
- `@react-three/uikit` (^1.0.56) - UIKit components for three.js

### Development
- `typescript` (~5.9.3) - Type checking
- `vite` (^7.1.7) - Build tool
- `@vitejs/plugin-react` (^5.0.4) - React plugin for Vite
- `eslint` & related packages - Code linting
- TypeScript type definitions for React and Node

## Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production (includes TypeScript compilation)
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Package Manager

This project uses `pnpm` (v10.20.0) for dependency management.
