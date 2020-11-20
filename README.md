# moveit
A JavaScript library that allows you to drag any HTML element

***

## Setup
Include the library in your HTML
```html
<script type="text/javascript" src="dist/moveit.js"></script>
```

To draggable
```js
const moveit = new Moveit("#move-element", {});
```

## How to use
### 1st argument of constructor
**Target element**\
Selector string or HTML element object

### 2nd argument of constructor
**Object**\
Option of Moveit

|  Option  |  Type  |  Default  |  Description  |
| ---- | ---- |  ----  |  ----  |
|  handle  |  boolean  |  false  |  Create a handle.<br>If this flag is true, draggable only the handle,<br>draggable overall target element when false.  |
|  handleText  |  string  |  ""  |  Set the text in handle  |
|  handleWidth  |  string  |  "50px"  |  Set the handle's width  |
|  handleHeight  |  string  |  "30px"  |  Set the handle's height  |
|  handleBackground  |  string  |  "silver"  |  Set the handle's background color  |
|  handleTextColor  |  string  |  "black"  |  Set the color of text in handle  |
|  handleCursor  |  string  |  "move"  |  Set the cursor type when hovering handle  |
|  handleTextAlign  |  string  |  "center"  |  Set the align of text in handle  |
|  handleFontSize  |  string  |  "15px"  |  Set the font size of text in handle  |
