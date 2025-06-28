# Sigment TypeScript Vite Starter

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://lustrous-platypus-172c72.netlify.app/)
[![Open in Bolt](https://img.shields.io/badge/Open%20in-Bolt-FF6B35?style=for-the-badge&logo=stackblitz)](https://bolt.new/github/sigmentjs/basic-sigment-typescript-vite)

A lightweight frontend starter built with **Sigment**, powered by **Vite** and written in **TypeScript**. Easily extendable with Express.js for backend needs.

## 🌐 Live Demo

**[View Live Application →](https://lustrous-platypus-172c72.netlify.app/)**

## 🚀 Quick Start Options

### Option 1: Open in Bolt (Recommended for Quick Testing)
[![Open in Bolt](https://img.shields.io/badge/Open%20in-Bolt-FF6B35?style=flat&logo=stackblitz)](https://bolt.new/github/sigmentjs/basic-sigment-typescript-vite)

### Option 2: Clone and Run Locally
```bash
# Clone this repository
git clone https://github.com/sigmentjs/basic-sigment-typescript-vite.git
cd basic-sigment-typescript-vite

# Install dependencies
npm install

# Start development server
npm run dev
```

### Option 3: Create New Project with Template
```bash
npx create-sigment-app my-app
cd my-app
npm run dev
```

## ✨ Features

* 🯉 **Sigment** — Fine-grained, signals-based reactivity
* ⚡ **Vite** — Fast dev server and production bundling
* 📜 **TypeScript** — Type-safe development
* 🌿 **Express-ready** — Optional backend support
* 🎨 **Syntax Highlighting** — Code examples with Prism.js
* 🧩 **Custom Elements** — Extensible Sigment components
* 📱 **Responsive Design** — Mobile-friendly UI

## 🌟 Why Sigment?

> Elegant, zero-JSX reactivity with less than 5KB runtime.

### 🔧 Example Sigment Component

```ts
import { signal } from 'sigment';

function Counter(): HTMLElement {
  const [count, setCount] = signal(0);

  return div({ id: "counter" },
    h2('Sigment Reactive Framework'),
    h3('Counter example'),
    button({ onClick: () => setCount(count() + 1) }, 'Increment'),
    p(() => `Count is: ${count()}`)
  );
}

export default Counter;
```

✅ Reactive DX: Signals-based reactivity  
✅ Tiny footprint: <5kb runtime  
✅ Zero JSX: Pure JavaScript templates  

## 📁 Project Structure

```
src/
├── components/
│   ├── Counter.ts          # Reactive counter with navigation
│   ├── CodeExamples.ts     # Syntax highlighted examples
│   ├── Hello.ts            # Custom sigment element demo
│   ├── Home.ts             # Landing page
│   └── sigments/           # Custom Sigment elements
├── assets/css/             # Stylesheets and themes
└── Main.ts                 # Application entry point
```

## 🔧 Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Start Express server (production)
- `npm run serve` - Start Express server (development)

## 🌐 Deployment

This project is automatically deployed to Netlify:
- **Production URL**: https://lustrous-platypus-172c72.netlify.app/
- **Auto-deploy**: Pushes to main branch trigger new deployments
- **SPA Support**: Configured with proper redirects for client-side routing

## 🤝 Contributing & Collaboration

### For Bolt Users
1. Click the "Open in Bolt" badge above
2. Make your changes in the Bolt environment
3. Deploy directly from Bolt or export to GitHub

### For GitHub Users
1. Fork this repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Development Workflow
```bash
# Start development
npm run dev

# Build and test
npm run build
npm run preview

# Deploy (automatic via Netlify)
git push origin main
```

## 📚 Documentation & Resources

- [🔗 Live Demo](https://lustrous-platypus-172c72.netlify.app/)
- [📖 Sigment Documentation](https://sigment.dev)
- [⚡ Vite Documentation](https://vitejs.dev)
- [📘 TypeScript Documentation](https://www.typescriptlang.org)

## 🎯 What's Included

- **Reactive Counter**: Demonstrates Sigment's signal-based reactivity
- **Custom Elements**: Shows how to create custom Sigment components
- **Code Examples**: Syntax-highlighted code samples with copy functionality
- **Navigation**: Back buttons and home navigation
- **Responsive Design**: Mobile-first CSS with modern styling
- **Production Ready**: Optimized build with Express.js server support

## 📄 License

[MIT](./LICENSE) - Feel free to use this project for learning and building!

---

**Built with ❤️ using Sigment, TypeScript, and Vite**