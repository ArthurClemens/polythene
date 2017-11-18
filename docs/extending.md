# Extending Polythene using other libraries (or vice versa)

## material-components-web (MDC-Web)

MDC-Web is a toolbox of Material Design components. Writing with MDC-Web is different than with Polythene; how components are shown and which behavior they show depends largely on the HTML you write. It is more HTML+CSS oriented than Polythene, which is more JavaScript-component based, using parameters to specify appearance and behavior.

So most [MDC-Web components](https://github.com/material-components/material-components-web) come in 3 separate parts: HTML, CSS and JavaScript.

### HTML

When working with Mithril, you can use [Mithril Template Converter](http://arthurclemens.github.io/mithril-template-converter/index.html) to convert HTML example code to Mithril hyperscript.

### CSS

MDC-Web styles can co-exist with Polythene styles.

Easiest is to load all CSS:

~~~javascript
import "material-components-web/dist/material-components-web.css"
~~~

but it is more economical to import only the CSS you need:

~~~javascript
import "@material/button/dist/mdc.button.css"
import "@material/ripple/dist/mdc.ripple.css"
~~~

### JavaScript

To get component behavior, the component must be imported along with the base code:

~~~javascript
import * as mdc from "material-components-web"
import "@material/drawer"
~~~


### Combining MCW and Polythene

MCW components and Polythene components can easily be mixed.

A MCW Drawer component can contain any content, including a Polythene List:

~~~javascript
const MCWDrawer = {
  view: () => 
    m("aside.mdc-temporary-drawer.menu-drawer", 
      m("nav.mdc-temporary-drawer__drawer",
        m(List, {
          className: "drawer-menu",
          header: {
            title: "Polythene List"
          },
          all: {
            hoverable: true
          },
          tiles: [
            { title: "Inbox" },
            { title: "Important" },
            { title: "Sent" },
            { title: "Spam" },
            { title: "Trash" },
          ]
        })
      )
    )
}
~~~

And that drawer can be called from a Polythene Button:

~~~javascript
m(Button, {
  events: {
    onclick: () => {
      let drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector(".menu-drawer"))
      drawer.open = true
    }
  }
}
~~~

Exackage 

