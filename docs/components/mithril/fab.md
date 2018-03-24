[Back to Polythene FAB main page](../fab.md)

# FAB: Floating Action Button component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Links](#links)
- [Appearance](#appearance)
  - [Styling](#styling)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[FAB options](../fab.md)



<a id="usage"></a>
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


<a id="links"></a>
### Links

See: [URLs and router links](../../handling-urls.md)



<a id="appearance"></a>
## Appearance

FAB's default colors are:

* Background: the app's primary color; change this by setting the `background-color` style
* Icon color: white; change this by setting the `color` style



<a id="styling"></a>
### Styling

Below are examples how to change the FAB appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
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

<a id="css"></a>
#### CSS

Change CSS using the [FAB CSS classes](../../../packages/polythene-css-classes/fab.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/fab"
~~~

<a id="style-option"></a>
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


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set
