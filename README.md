# Getting started with React
Wie started man mit React? Von Scratch? Als Anfänger in der Web-Entwicklung? Mit diesem Repository will für mich etwas Licht ins Dunkle bringen.

## Dependencies
```
npm init -y
npm install --save react react-dom
npm install --save-dev webpack@beta webpack-dev-server@beta
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```

## Webpack Konfiguration
```
var path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015','react'] }
        }],
      },
    ],
  },
};
```

## Hello World Beispiel
`src/index.html` mit folgendem Code im Body:
```
<div id="content"></div>
<script src="/bundle.js"></script>
```
Und dazu die folgende `src/index.js`:
```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>hello-react</h1>,
  document.getElementById('content')
);
```

## Employee Beispiel
Das Employee Beispiel von Java Code Geeks ist ganz nett um erste Gehversuche mit React Komponenten zu machen.
https://www.javacodegeeks.com/2016/12/build-crud-application-react-spring-boot-user-authentication.html

Siehe ...
```
var Employee = React.createClass({
  ...
});
var EmployeeTable = React.createClass({
  ...
});
var App = React.createClass({
  ...
});
```

## TODO
- Ziel ist eine Beispiel-Anwendung, mit verschiedenen Komponenten, verteilt auf 2-3 Seiten
- https://facebook.github.io/react/tutorial/tutorial.html
- Redux
