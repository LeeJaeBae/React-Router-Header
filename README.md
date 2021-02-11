# React-router-header

---

React Header ui component for react with react-router.

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![bundle size][bundlephobia-image]][bundlephobia-url]

[npm-image]: http://img.shields.io/npm/v/react-router-header.svg?style=flat-square

[npm-url]: http://npmjs.org/package/react-router-header

[download-image]: https://img.shields.io/npm/dm/react-router-header.svg?style=flat-square

[download-url]: https://npmjs.org/package/react-router-header

[bundlephobia-url]: https://bundlephobia.com/result?p=react-router-header

[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/react-router-header

## Install

[![rc-checkbox](https://nodei.co/npm/react-router-header.png)](https://npmjs.org/package/react-router-header)

## Installation

``` shell
npm install --save react-router-header

or

yarn add react-router-header
```

## Development

```
npm install
npm start
```

## Usage

```js
import Routes, {useRouter} from 'react-router-header';

const Component = () => <></>;

const router = useRouter();


/**
 * @param Component
 * @param path
 * @param name
 * @param exact
 */
router.add(Component, "/path", "name", true)

export default () => <Routes.Router/>;
```

## Routes Class's static properties

<table class="table table-bordered table-striped">
  <thead>
  <tr>
    <th style="width: 100px;">name</th>
    <th style="width: 50px;">type</th>
    <th style="width: 50px;">default</th>
    <th>description</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>Router</td>
      <td>React.FC</td>
      <td>DefaultRouter</td>
      <td>return functional component with BrowserRouter</td>
    </tr>
    <tr>
      <td>Header</td>
      <td>React.FC</td>
      <td></td>
      <td>return functional component</td>
    </tr>
      <tr>
      <td>Components</td>
      <td>RoutesComponent[]</td>
      <td>[]</td>
      <td>Array for RoutesComponent's element</td>
    </tr>
  </tbody>
</table>

## Routes API

<table class="table table-bordered table-striped">
  <thead>
  <tr>
    <th style="width: 100px;">name</th>
    <th style="width: 50px;">return</th>
    <th style="width: 50px;">parameters</th>
    <th>description</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>add</td>
      <td>void</td>
      <td>Component:React.FC
          path:string,
          name:string,
          exact:boolean = false
</td>
      <td>set a component in Routes</td>
    </tr>
    <tr>
      <td>render</td>
      <td>void</td>
      <td>Function[]</td>
      <td>call functions in argument</td>
    </tr>
  </tbody>
</table>

# Version History

## 0.1.10

---
Build Type Declaration files.

---
## 0.2.0

---
Header's Prototype version is completed

---
## 0.2.1

---
small bug fix

---
## License

react-router-header is released under the MIT license.

## Contributor

<a href="https://github.com/LeeJaeBae/React-Router-Header/graphs/contributors">
  <img src="https://github.com/leejaebae.png?size=50">
  <img src="https://github.com/JeongJaeSoon.png?size=50">
</a>