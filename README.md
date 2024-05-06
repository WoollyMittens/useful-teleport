# teleport.js: Teleport DOM elements

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

Move elements between containers based on screen size.

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

Or use imported as a component in existing projects.

```js
@import {Teleport} from "js/teleport.js";
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

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
