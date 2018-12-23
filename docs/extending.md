# Extending Polythene using other libraries (or vice versa)

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [material-components-web (MDC-Web)](#material-components-web-mdc-web)
  - [Introduction](#introduction)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
  - [Combining MDC-Web and Polythene](#combining-mdc-web-and-polythene)

<!-- /MarkdownTOC -->


<a id="material-components-web-mdc-web"></a>
## material-components-web (MDC-Web)

NOTE: The code in this section can be found at https://github.com/ArthurClemens/polythene-mithril-material-components-web.

### Introduction

MDC-Web is a toolbox of Material Design components. Writing with MDC-Web is different than with Polythene; how components are shown and which behavior they show depends largely on the HTML you write. It is more HTML+CSS oriented than Polythene, which is more JavaScript-component based, using parameters to specify appearance and behavior.

So most [MDC-Web components](https://github.com/material-components/material-components-web) come in 3 separate parts: HTML, CSS and JavaScript.


<a id="html"></a>
### HTML

When working with Mithril, you can use [Mithril Template Converter](http://arthurclemens.github.io/mithril-template-converter/index.html) to convert HTML example code to Mithril hyperscript.


<a id="css"></a>
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


<a id="javascript"></a>
### JavaScript

Often, the component must get initialized by attaching it to a DOM element. We can use Mithril's `oncreate`. 

~~~javascript
import { MDCTextField } from "@material/textfield";
import "@material/textfield/dist/mdc.textfield.css";

const MCWTextField = {
  oncreate: ({ dom }) =>
    new MDCTextField(dom),
  view: () => 
    m(".mdc-text-field.mdc-text-field--outlined",
    [
      m("input.mdc-text-field__input[id='tf-outlined'][type='text']"),
      m(".mdc-notched-outline",
        [
          m(".mdc-notched-outline__leading"),
          m(".mdc-notched-outline__notch", 
            m("label.mdc-floating-label[for='tf-outlined']", 
              "Your Name"
            )
          ),
          m(".mdc-notched-outline__trailing")
        ]
      )
    ]
  )
};
~~~


<a id="combining-mcw-and-polythene"></a>
### Combining MDC-Web and Polythene

MCW components and Polythene components can easily be mixed.

A MCW Drawer component can contain any content, including a Polythene List:

~~~javascript
const MCWDrawer = {
  view: () => 
    m("aside.mdc-drawer.mdc-drawer--dismissible.menu-drawer", 
      m(".mdc-drawer__content",
        m("nav.mdc-list",
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
    )
};
~~~

And that drawer can be called from a Polythene Button:

~~~javascript
m(Button, {
  events: {
    onclick: () => {
      const drawer = MDCDrawer.attachTo(document.querySelector(".menu-drawer"));
      drawer.open = true;
      document.body.addEventListener("click", event => {
        drawer.open = false;
      });
    }
  }
}
~~~
