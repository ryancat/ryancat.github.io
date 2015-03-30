angular-selector
=============

### dependencies
angular ~1.2

### usage

**html**

```html
...
<link rel="stylesheet" href="angular-selector.css">

</head>
<body>

<div ng-controller="fooCtrl">
	<!-- ... -->
</div>
...
<script src="angular-selector.js"></script>
```

**js**

```js
angular
.module('foo', ['rc/angularSelector'])
.controller('fooCtrl', function ($scope) {

	// ...

});
```

### run the demo

```shell
bower install
npm install
grunt
```

then pop open index.html in a browser.

### run the tests

```
bower install
npm install
grunt test
```

### hack on it

```
bower install
npm install
grunt watch
```

### license

private
