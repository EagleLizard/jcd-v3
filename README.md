# Typescript React Webpack Sass

This project is a minimal starter project for Webpack projects using Typescript, React, and Sass imports.

## Prerequisites

NodeJS v14.x, use [nvm](https://github.com/nvm-sh/nvm) to manage NodeJS/npm versions.

## Overview

This project is a starter building from my older [react-webpack-sass](https://github.com/EagleLizard/react-webpack-sass) starter project template, with up to date improvements and now Typescript!

This project attempts to use the most up-to-date versions of the tech:

1. Typescript @ `^4.3.x`+
2. React/ReactDom @ `^17.x.x`+
3. Webpack @ `5.x.x`+
4. Sass @ `6.x.x`+

## Getting Started

Install dependencies:
```sh
npm i
```
To run in dev mode (opens in new Browser tab), run:
```sh
npm start
```
To run a production asset build, run:
```sh
npm run build
```
The build output is compiled into the `public/` directory.

## ESLint
The eslint configuration provided is my own preferred code style. It extends:
1. `eslint:recommended`
2. `plugin:@typescript-eslint/recommended`
3. `plugin:react/recommended`

And provides rule overrides to remove religious zealotry and other forms of code-style fascism 🙂 
In other words, it's a useful style guide - but not dogmatic.

## Notes on Sass/CSS usage
This project leverages Sass file loader imports over inline injection:
```tsx
// in /path/to/my-component-dir/my-component.tsx
import './my-component.scss'

export function MyComponent() {
  const textContent = 'Howdy 🤠';

  return (
    <div className="my-component">
      <div className="text-content">
        { textContent }
      </div>
    </div>
  );
}
```

Instead of build-time className renaming, style scoping is provided by coding convention to ensure css styles are applied to the correct component/component hierarchy:
```scss
// in /path/to/my-component-dir/my-component.scss
.my-component {
  padding: 10px;

  .text-content {
    font-size: 24px;
  }
}
```

The reason is that I'm opinionated about this! I won't go into detail here, but if you prefer injection this template doesn't prevent it - so modify to your use case.
