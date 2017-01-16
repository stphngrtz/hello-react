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

Das Beispiel, auf ES6 umgewandelt, sieht man in `employeeApp.js`, `employee.js` und `employeeTable.js`.

## Todo-List Beispiel
Das Todo-List Beispiel zeigt eine nicht auf verschiedene Dateien aufgeteilte React Anwendung, siehe `todoApp.js`. Darüber hinaus werden Stateless Components sowie der localStorage benutzt.
https://scotch.io/tutorials/create-a-simple-to-do-app-with-react

```
// stateless component
const Title = () => {
	return (
		<div>
			<h2>To-do List</h2>
		</div>
	);
};
```

## TODO
- Ziel ist eine Beispiel-Anwendung, mit verschiedenen Komponenten, verteilt auf 2-3 Seiten
- https://facebook.github.io/react/tutorial/tutorial.html
- https://scotch.io/tutorials/create-a-simple-to-do-app-with-react
- Redux

## Create React App
https://github.com/facebookincubator/create-react-app

Eine Entwicklungsumgebung muss nicht zwingend manuell aufgesetzt werden. Das "Create React App" - Projekt nimmt einem diese Tätigkeit ab. Siehe hierzu auch den offiziellen React Blog-Post.

https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html
