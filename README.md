# teleport.js: Teleport DOM elements

Move elements between containers based on screen size.

Try the <a href="http://www.woollymittens.nl/default.php?url=useful-teleport">demo</a>.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="css/teleport.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/teleport.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/teleport.js'
], function(Teleport) {
	...
});
```

Or import into an MVC framework.

```js
var Teleport = require('js/teleport.js');
```

## How to start the script

```javascript
new Teleport({
	'element': document.querySelector('.teleport-search'),
	'breakpoints': [{
		'condition': '(max-width:767px)',
		'container': document.querySelector('.teleport-example nav'),
		'before': true
	}, {
		'condition': '(min-width:768px)',
		'container': document.querySelector('.teleport-example header'),
	}]
});
```

**element : {DOM node}** - The affected element.

**container : {DOM node}** - The target container that goes with this condition.

**condition : {CSS rule}** - The size interval for this condition.

**before : {DOM node}** - Insert the element before this element in the container.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens) and at [WoollyMittens.nl](https://www.woollymittens.nl/).
