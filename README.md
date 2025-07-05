# 🚀 Nuxt Rocket

**Nuxt Rocket** is an opinionated starting point for modern Nuxt 3 projects.

The idea is simple: eliminate repetitive setup, standardize the essentials, and create a solid foundation focused on performance, user experience, and long-term maintainability.

The focus goes beyond technical aspects — accessibility and UX best practices are priorities from the beginning. The project also values what game designers call "juice": visual microinteractions and instant feedback that make users feel like they’re using something well-crafted.

> ⚠️ **This project is in active development**: APIs, structure, and features may change without notice. Not production-ready.

## 🌱 Nuxt Rocket Principles

-   ⚡ Speed in development and loading
-   ♿ Accessibility considered from day one
-   🧃 UX with "juice", not just layout
-   🔧 Minimal standardization to help teams flow
-   🧼 Pragmatic simplicity, no over engineering

## ✅ Features

### 📦 Core

-   🧬 Componentization and SSR with [Nuxt 3](https://nuxt.com)
-   ✨ Utility-first styling and easy icons via [Uno CSS](https://unocss.dev/)
-   🗃️ Global state management with [Pinia](https://pinia.vuejs.org)
-   🧩 Handy utilities with [VueUse](https://vueuse.org/)
-   ⚙️ Simplified global config in `app.config.js`

### 🌈 UI/UX

-   🧃 Emotional design ("juice") with [Vue Rewards](https://vuejsexamples.com/add-micro-interactions-to-your-app-and-rewards-users-with-the-rain-of-confetti-emoji-or-balloons)
-   🎨 Customizable theme tokens (`primary`, `highlight`, etc.)

### 🛠️ Dev Experience

-   ✍️ Spell checker with [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
-   ⚙️ `.vscode/settings.json` with team standards
-   📁 Pre-configured folder structure
-   🧱 Layout system

### 🔍 SEO

-   🧠 Dynamic document titles with `titleTemplate`

## 🛠️ Setup

1.  Create a repository from this template and clone it to your machine.

2.  Choose your preferred package manager:

```bash
npm install
```

or

```bash
pnpm install
```

or

```bash
yarn install
```

or

```bash
bun install
```

3.  Configure your project in `app.config.js` — many built-in components read from this config, so you won’t need to edit each one individually if you want to change something. Just update this file.

4.  Customize `main.css` theme tokens to match your project.

5.  If you're using the **Code Spell Checker** extension, project-specific words can be added to `.vscode/words.txt`.

## 📌 TODO

### Core

-   [x] ✨ Atomic CSS classes
-   [x] 🌙 Dark mode support
-   [x] 🖼️ Icon support
-   [x] 🗃️ Global state management
-   [x] 🧩 Useful composables
-   [x] 🧃 Microinteractions
-   [ ] 🧱 Basic global components
-   [ ] 🌐 Internationalization (i18n) support
-   [ ] 🔍 Basic SEO

### Extras (Quality of Life & DX)

-   [x] 🧱 Layout system
-   [x] 🎨 Theme tokens (`primary`, `highlight`, etc.)
-   [ ] 🗃️ Default stores (`ui`, `settings`, etc.)
-   [ ] 🧹 Linter + Formatter
-   [ ] 📱 PWA support
-   [ ] 📄 Markdown & content support
-   [ ] 🧪 Test setup
-   [ ] 🔧 CI workflow
-   [ ] 🚀 Deployment config

---

Made with ☕ for those who prefer rocket-starts over endless boilerplates.
