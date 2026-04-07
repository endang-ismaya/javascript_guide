# JavaScript Guide Compilation

A comprehensive collection of JavaScript learning materials, examples, and exercises.

## Overview

This repository contains JavaScript guides and examples covering beginner to advanced topics, including:

- **DOM Manipulation** - AJAX, Fetch API, async/await, event handling
- **Core Concepts** - Arrays, functions, conditions, loops, hoisting, closures
- **Design Patterns** - Module, Singleton, Observer, Factory patterns
- **HTTP Requests** - Axios, Fetch, XMLHttpRequest examples
- **Iterators & Generators** - Custom iterators and generator functions
- **High-Order Functions** - Functional programming concepts
- **Modules** - ES6 import/export examples
- **jQuery** - Legacy jQuery examples and plugins
- **Projects** - Various JavaScript projects (TaskList, BookList, Timer, etc.)
- **Exercises** - Practice exercises for learning JavaScript

## Security Updates (2026-04-07)

All dependencies have been updated to fix security vulnerabilities:

- **axios**: v0.30.3 → v1.14.0 (fixed CSRF/SSRF vulnerabilities)
- **cross-fetch**: v3.0.4 → v4.1.0
- **eslint**: v6.8.0 → v9.39.4 (migrated to flat config)
- **prettier**: v1.19.1 → v3.2.5
- Replaced deprecated `babel-eslint` with `@babel/eslint-parser`
- Replaced deprecated `eslint-plugin-node` with `eslint-plugin-n`
- Removed unmaintained `xmlhttprequest` package

## Project Structure

```
├── _dom/               # DOM manipulation examples
├── _exercises/         # Practice exercises
├── _jquery/            # jQuery examples
├── _projects/          # Complete JavaScript projects
├── arrays/             # Array methods and operations
├── best_practice/      # Best practices guide
├── closure/            # Closure examples
├── conditions/         # Conditional statements
├── design-patterns/    # Design pattern implementations
├── export-import-modules/ # ES6 modules
├── functions/          # Function concepts
├── high-order-functions/ # HOF examples
├── hoisting/           # Hoisting examples
├── http-request/       # HTTP request examples
├── iife/               # IIFE patterns
├── iterator-generator/ # Iterators and generators
├── loops/              # Loop constructs
├── objects/            # Object manipulation
├── oop-classes-prototypes/ # OOP concepts
├── promise/            # Promise examples
├── scope/              # Scope examples
├── string/             # String operations
└── types/              # Type system examples
```

## Development

### Prerequisites

- Node.js 18+ (for native fetch support)
- npm

### Install Dependencies

```bash
npm install
```

### Run ESLint

```bash
npx eslint .
```

## License

MIT

## Author

Endang Ismaya
