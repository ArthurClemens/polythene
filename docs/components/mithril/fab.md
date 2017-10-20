[Back to Polythene FAB main page](../fab.md)

# FAB: Floating Action Button component for Mithril


## Options

[FAB options](../fab.md)


## Usage

<a href="https://jsfiddle.net/ArthurClemens/zzjb2mfu/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import m from "mithril"
import { FAB } from "polythene-mithril"

const iconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>"

m(FAB, {
  icon: { svg: { content: m.trust(iconSVG) } }
})
~~~

### Links

See: [URLs and router links](../../handling-urls.md)


## Appearance

FAB's default colors are:

* Background: the app's primary color; change this by setting the `background-color` style
* Icon color: white; change this by setting the `color` style


### Styling

Below are examples how to change the FAB appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

#### Themed component

~~~javascript
import { FABCSS } from "polythene-css"

FABCSS.addStyle(".themed-fab", {
  color_light_background: "#2196f3",
  color_dark_background:  "#0097a7",
  color_light:            "#fff",
  color_dark:             "#B2ebf2"
})

m(FAB, {
  className: "themed-fab"
})
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-fab/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-fab";
~~~

#### Style option

Some style attributes can be set using option `style`. For example:

~~~javascript
m(FAB, {
  style: {
    backgroundColor: "#ef6c00",
    color: "#fff"
  }
})
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set
