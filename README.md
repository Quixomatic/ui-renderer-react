# React Renderer

This repository contains the source code for the React Renderer component, which is part of the `@quixomatic/ui-renderer-react` package.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the package, use npm or yarn:

```bash
npm install @quixomatic/ui-renderer-react
or
yarn add @quixomatic/ui-renderer-react
```

## Usage
Here's an example of how to use the React Renderer component in your project:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import UIRendererReact from '@quixomatic/ui-renderer-react';

const { createElement } = UIRendererReact;

const App = () => {
    return createElement('div', null, 'Hello, World!');
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## API
`createElement`

Creates a React element.

#### Parameters:

* `type` (string | React.Component): The type of the element.
* `props` (object): The properties of the element.
* `children` (ReactNode): The children of the element.

#### Returns:

* `ReactElement`: The created React element.

## Contributing

Contributions are welcome! Please read the contributing guidelines before getting started.

## License

This project is licensed under the MIT License. See the LICENSE file for details.