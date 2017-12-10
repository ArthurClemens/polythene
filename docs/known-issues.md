# Known issues

## Internet Explorer 11

IE 11 needs polyfills for `Promise` and `Object.assign`. If you use polyfill.io, add to the HTML:

~~~html
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise,Object.assign" type="text/javascript"></script>
~~~

### Notification

Content is not centered vertically, because IE 11 needs a specific height. But hardcoding the height would prohibit the content from growing. To mitigate, add a style with specific height to the content:

~~~javascript
Notification.show({
  title: "Some message",
  style: {
    height: "80px"
  }
})
~~~
