![Captura de Tela (110)](https://github.com/PauloAquarius0299/gym-typescript-project/assets/114706743/c4a79bf5-5b66-4eed-8bd5-bd5767b48ddc)

# 🏋️ Energizar Evolve Website
Criando uma interface ecommerce de academia e atividades fisicas, usando TypeScript, React, Vite e Tailwind Css
## 💪 Introdução 
A interface apresenta animação, cores vibrandes e fundo preto, contendo informações sobre a academia energizar evolve e planos de aula. Uma interface ituitiva e agradavel para os usuarios que queiram se escrever na academia. Pagina estilizada para estilo mobile
### 💡 Pre-Requisitos
Instalação do TypeScript com React e Vite, estilização com Tailwind css e instalação do framer-motion e hook-form
### 🛠️ Ferramentas
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
## 🏃 LINK
https://energizar-evolve.netlify.app/
![Captura de Tela (112)](https://github.com/PauloAquarius0299/gym-typescript-project/assets/114706743/55e560e1-2091-4865-b7e1-28ee40247a23)
![Captura de Tela (111)](https://github.com/PauloAquarius0299/gym-typescript-project/assets/114706743/b7eb9924-0074-4a37-9f2f-8288ac42605a)
![Captura de Tela (113)](https://github.com/PauloAquarius0299/gym-typescript-project/assets/114706743/e57ac75b-4522-40c2-8252-e4e321e64af8)
![Captura de Tela (114)](https://github.com/PauloAquarius0299/gym-typescript-project/assets/114706743/cf04ca57-7ce8-49f5-bb5d-feae81b14b20)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
