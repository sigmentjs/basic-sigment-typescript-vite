# Contributing to Sigment TypeScript Vite Starter

Thank you for your interest in contributing! This guide will help you get started.

## 🚀 Quick Start for Contributors

### Option 1: Contribute via Bolt
1. **[Open in Bolt](https://bolt.new/github/sigmentjs/basic-sigment-typescript-vite)** 
2. Make your changes in the Bolt environment
3. Test your changes using the built-in preview
4. Deploy or export to GitHub when ready

### Option 2: Local Development
```bash
# Fork and clone the repository
git clone https://github.com/sigmentjs/basic-sigment-typescript-vite.git
cd basic-sigment-typescript-vite

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎯 Areas for Contribution

### 🧩 New Components
- Add more Sigment component examples
- Create reusable UI components
- Build complex interactive demos

### 🎨 Styling & UX
- Improve responsive design
- Add dark/light theme toggle
- Enhance animations and transitions

### 📚 Documentation
- Add more code examples
- Improve setup instructions
- Create video tutorials

### 🔧 Developer Experience
- Add more development tools
- Improve build configuration
- Add testing setup

## 📁 Project Structure

```
src/
├── components/
│   ├── Counter.ts          # Reactive counter example
│   ├── CodeExamples.ts     # Syntax highlighted examples
│   ├── Hello.ts            # Custom element demo
│   ├── Home.ts             # Landing page
│   ├── Routes.ts           # Application routing
│   └── sigments/           # Custom Sigment elements
├── assets/css/             # Stylesheets
├── utils/                  # Utility functions
└── Main.ts                 # Application entry point
```

## 🔄 Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow existing code style
   - Add comments for complex logic
   - Test your changes thoroughly

3. **Test locally**
   ```bash
   npm run dev      # Development server
   npm run build    # Production build
   npm run preview  # Test production build
   ```

4. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Describe your changes clearly
   - Include screenshots if UI changes
   - Reference any related issues

## 🎨 Code Style Guidelines

### TypeScript
- Use TypeScript for all new files
- Define proper interfaces and types
- Avoid `any` type when possible

### Sigment Components
```ts
// Good: Clear function signature and return type
function MyComponent(): HTMLElement {
  const [state, setState] = signal(initialValue);
  
  return div({ class: 'my-component' },
    // Component content
  );
}

// Export as default
export default MyComponent;
```

### CSS
- Use CSS custom properties for theming
- Follow mobile-first responsive design
- Use semantic class names

## 🧪 Testing

Currently, the project focuses on manual testing:
- Test all routes and navigation
- Verify responsive design on different screen sizes
- Check browser compatibility

Future: We welcome contributions to add automated testing!

## 📝 Documentation

When adding new features:
- Update README.md if needed
- Add code examples to CodeExamples.ts
- Include inline comments for complex logic

## 🚀 Deployment

The project auto-deploys to Netlify:
- **Live URL**: https://lustrous-platypus-172c72.netlify.app/
- **Auto-deploy**: Pushes to main branch trigger deployments
- **Preview**: Pull requests get preview deployments

## 🤝 Community

- **Questions**: Open an issue with the "question" label
- **Bug Reports**: Use the bug report template
- **Feature Requests**: Use the feature request template
- **Discussions**: Use GitHub Discussions for general topics

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to the Sigment ecosystem! 🎉**