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


# Projeto com Estrutura para ReactJS apps

## Estrutura de pastas

`assets`: Serve para armazenar imagens (imagens leves, se forem pesadas sempre prefira hospedar em uma CDN), ícones, etc.

`components`: Componentes reutilizáveis da aplicação. Componentes que são unidades para sua aplicação, um button, um dropdown, um modal, etc.

`hooks`: Essa pasta é utilizada para armazenar hooks que são genéricos, têm interação com hooks do React (useState, useEffect) e normalmente reutilizáveis e qualquer projeto, exemplos: useScreenSize, useLocalStorage, useSessionStorage, useUserActive.

`pages`: As pages são as páginas que usam vários componentes. É essa a página que o usuário vai ver.

`services`: Aqui ficam as configurações de HTTP clientes, normalmente utilizando axios.

`store`: Ficam as definições de state managers, context api, zustand, redux.

`types`: Armazena as tipagens de typescript (types e interfaces) que são comuns em várias áreas do projeto.

`utils`: Funções utilitárias como formatCurrency, formatPhone, convertTimezone, parsePhone (javascript puro).
