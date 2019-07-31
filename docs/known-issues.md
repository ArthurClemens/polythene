# Known issues

## Scrolling tabs

### Scrollbar visible (Firefox)

Firefox (57 and newer) will show a scrollbar when scrolling the tabs (either using the mouse or scroll buttons).


### Scroll position with right-to-left languages (Chrome)

Google Chrome does not handle scrolling well for RTL elements. When creating for right-to-left languages, don't use scrolling tabs at this time.


## CSS styling

### Ellipsis (Firefox)

Firefox will not display ellipsis to indicate longer texts.


## Internet Explorer 11

If you need to support IE 11, add polyfills for `Promise` and `Object.assign`. For example when using polyfill.io, add to the HTML:

```html
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise,Object.assign" type="text/javascript"></script>
```


