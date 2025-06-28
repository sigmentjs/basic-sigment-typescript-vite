# Sigment App

[![npm version](https://img.shields.io/npm/v/create-sigment-app?color=blue\&label=npm%20package)](https://www.npmjs.com/package/create-sigment-app)
[![npm downloads](https://img.shields.io/npm/dm/create-sigment-app?color=green\&label=npm%20downloads)](https://www.npmjs.com/package/create-sigment-app)
[![Build Status](https://img.shields.io/github/actions/workflow/status/sigmentjs/sigment/ci.yml?branch=main\&label=build\&color=brightgreen)](https://github.com/sigmentjs?tab=repositories)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

A lightweight frontend starter built with **Sigment**, powered by **Vite** and written in **TypeScript**. Easily extendable with Express.js for backend needs.

---

## ✨ Features

* 🯉 **Sigment** — Fine-grained, signals-based reactivity
* ⚡ **Vite** — Fast dev server and production bundling
* 📜 **TypeScript** — Type-safe development
* 🌿 **Express-ready** — Optional backend support

---

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

---

## ⚡ Quick Start

### Option 1: Create a New App Instantly with `npx`

```bash
npx create-sigment-app my-app
cd my-app
npm run dev
```

### Option 2: Clone the Starter Template

```bash
git clone https://github.com/sigmentjs/basic-sigment-typescript-vite.git
cd basic-sigment-typescript-vite
npm install
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build locally

```bash
npm run preview
```

---

## 🖼️ Demo

Coming soon — or [try on StackBlitz](https://stackblitz.com) or [CodeSandbox](# Sigment App

[![npm version](https://img.shields.io/npm/v/create-sigment-app?color=blue\&label=npm%20package)](https://www.npmjs.com/package/create-sigment-app)
[![npm downloads](https://img.shields.io/npm/dm/create-sigment-app?color=green\&label=npm%20downloads)](https://www.npmjs.com/package/create-sigment-app)
[![Build Status](https://img.shields.io/github/actions/workflow/status/sigmentjs/sigment/ci.yml?branch=main\&label=build\&color=brightgreen)](https://github.com/sigmentjs?tab=repositories)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

A lightweight frontend starter built with **Sigment**, powered by **Vite** and written in **TypeScript**. Easily extendable with Express.js for backend needs.

---

## ✨ Features

* 🯉 **Sigment** — Fine-grained, signals-based reactivity
* ⚡ **Vite** — Fast dev server and production bundling
* 📜 **TypeScript** — Type-safe development
* 🌿 **Express-ready** — Optional backend support

---

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

---

## ⚡ Quick Start

### Option 1: Create a New App Instantly with `npx`

```bash
npx create-sigment-app my-app
cd my-app
npm run dev
```

### Option 2: Clone the Starter Template

```bash
git clone https://github.com/sigmentjs/basic-sigment-typescript-vite.git
cd basic-sigment-typescript-vite
npm install
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build locally

```bash
npm run preview
```

---

## 🖼️ Demo

Coming soon — or [try on StackBlitz](https://stackblitz.com) or [CodeSandbox](https://codesandbox.io/p/github/sigmentjs/basic-sigment-typescript-vite/main).

---

## 📚 Documentation

* [Official Sigment Docs](https://sigment.dev)

---

## 📄 License

[MIT](./LICENSE)
).

---

## 📚 Documentation

* [Official Sigment Docs](https://sigment.dev)

---

## 📄 License

[MIT](./LICENSE)
