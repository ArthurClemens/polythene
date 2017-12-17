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

### Notification

Content is not centered vertically, because IE 11 needs a specific height for the HTML element. But hardcoding the height would prohibit the content from growing, which is undesirable in most other cases. To mitigate this, add a style with specific height to the content:

~~~javascript
Notification.show({
  title: "Some message",
  style: {
    height: "80px"
  }
})
~~~
