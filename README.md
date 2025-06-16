# 🚀 Nuxt Rocket

Template base para acelerar o setup de projetos Nuxt 3, com boas práticas e ferramentas essenciais já configuradas.

---

## ✅ Tecnologias e Ferramentas

-   [Nuxt 3](https://nuxt.com)
-   [TailwindCSS](https://tailwindcss.com)
-   Code Spell Checker (VSCode)

---

## 🛠️ Setup

Escolha seu gerenciador de pacotes preferido:

### Usando **npm**

```bash
npm install
npm run dev
```

### Usando **pnpm**

```bash
pnpm install
pnpm dev
```

### Usando **yarn**

```bash
yarn install
yarn dev
```

### Usando **bun**

```bash
bun install
bun dev
```

---

## ✍️ Code Spell Checker

Este projeto inclui suporte à extensão **Code Spell Checker** do VSCode.

### Adicione isto ao seu `settings.json`:

```json
"cSpell.customDictionaries": {
  "project": {
    "name": "project",
    "path": "./.cspell/words.txt",
    "addWords": true,
    "scope": "workspace"
  }
}
```

Renomeie a pasta `.cspell.example` para `.cspell` para listar palavras específicas do projeto.

---

## 📌 TODO

-   [x] Adicionar TailwindCSS
-   [ ] Estado global (store)
-   [ ] Composables úteis
-   [ ] Componentes básicos
-   [ ] Suporte a modo escuro
-   [ ] Suporte a internacionalização

---

Feito com ☕ por quem prefere rocket-starts ao boilerplate infinito.
