

# Sigment App

A lightweight frontend library application built with **[Sigment](https://www.npmjs.com/package/sigment)** — bundled with **Vite** and written in  **TypeScript**. Optionally, you can integrate an **Express.js** backend if needed.

---

## 🚀 Features

**A lightning-fast, reactive frontend** built with:  
🧩 [**Sigment**](https://www.npmjs.com/package/sigment) — Fine-grained, elegant reactivity  
⚡ **Vite** — Instant dev server + optimized production builds  
- 📘 **TypeScript** — type-safe development 
🌿 **Express-ready** — Drop-in backend support  


## 🌟 Why Sigment? 

```javascript
// Example Sigment component

import { signal } from 'sigment';

function Counter(): HTMLElement  {
  const [count, setCount] = signal(0);

  return div({id:"counter"},

    h2('Sigment Reactive Framework'),
    h3('Counter example'),
    button({ onClick: () => setCount(count() + 1) }, 'Increment'),
    p(() => `Count is: ${count()}`)
    
  )

}

export default Counter;


✔ Reactive DX: Signals-based reactivity
✔ Tiny footprint: <5kb runtime
✔ Zero JSX: Pure JavaScript templates

---

## ⚡ Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/sigmentjs/basic-sigment-typescript-vite.git
   cd basic-sigment-typescript-vite

2. **install**

   ```bash
   npm install

3. **run dev**

   ```bash
   npm run dev

5. **build**

   ```bash
   npm run build

4. **serve locally**

   ```bash
   npm run preview
