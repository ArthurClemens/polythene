# Known issues

## Firefox

### Ellipsis

Firefox will not display ellipsis to indicate longer texts.

### Scrollable tabs

Firefox 57 will show a scrollbar when scrolling the tabs (either using the mouse or scroll buttons).



## Internet Explorer

IE 11 needs polyfills for `Promise` and `Object.assign`. If you use polyfill.io, add to the HTML:

~~~html
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise,Object.assign" type="text/javascript"></script>
~~~

