# Toolbar

Displays a horizontal bar containing a label and action items. 

See [Material Design Toolbars](https://material.io/guidelines/layout/structure.html#structure-toolbars) for examples of different usages.


## Usage

~~~javascript
import m from "mithril";
import toolbar from "polythene-toolbar";

const myToolbar = m(toolbar, {}, elements);
~~~

The toolbar content consists of a list of elements, for example:
~~~
[title, icon]
~~~
or:
~~~
[icon, title, icon, icon]
~~~

To show a toolbar with a label and 3 icon buttons:

~~~javascript
import toolbar from "polythene-toolbar";
import iconButton from "polythene-icon-button";
import gIconMenu from "mmsvg/google/msvg/navigation/menu";
import gIconRefresh from "mmsvg/google/msvg/navigation/refresh";
import gIconAdd from "mmsvg/google/msvg/content/add";

const btn = msvg => m(iconButton, {
  icon: {
    msvg
  }
});

const myToolbar = m(toolbar, {}, [
  btn(gIconMenu),
  m("span", "Title"),
  btn(gIconRefresh),
  btn(gIconAdd)
]);
~~~



## Appearance

### Title

A toolbar title can be inserted as toolbar element as shown above.

To create an indented title, use indentedTitle:

~~~javascript
import { iconButton, classes as toolbarClasses } from "polythene-toolbar";

m("div", {class: toolbarClasses.indentedTitle}, "Indented title"),
~~~

This positions the title as if it would be next to an icon.

### Shadow

~~~javascript
import toolbar from "polythene-toolbar";
import shadow from "polythene-shadow";

const toolbarRow = [
  // buttons and title
];

m("div",
  {
    style: { position: "relative" }
  },
  [
    m(toolbar, toolbarRow),
    m(shadow)
  ])
});
~~~

### Styling

Below are examples how to change the toolbar appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](../polythene-theme).

#### Themed component

~~~javascript
toolbar.theme(".themed-toolbar", {
  color_dark_background: "#00c853"
});

m(svg, {
  class: "themed-toolbar",
  // ... other options
});
~~~

#### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set

#### CSS

Change CSS using the CSS Classes at the bottom of this page.

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(toolbar, {
  style: {
    backgroundColor: "#EF6C00",
    color: "#fff",
    height: "72px"
  },
  // ... other options
});
~~~



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element** | optional | String | "div" | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to `pe-toolbar` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id** | optional | String | | HTML element id |
| **content** | either a bar or `content` must be passed | Mithril elements | | Alternative content; replaces `vnode.children` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### Toolbar appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **compact** | optional | Boolean | false | Set to `true` to create a more compact toolbar |



## CSS classes

| **Element**        |  **Key**          | **Class**       |
| ------------------ | ----------------- | --------------- |
| Toolbar component  | component         | `pe-toolbar` |
| Title              | title             | `pe-toolbar__title` |
  
| **Element**        |  **Key**          | **Class**       |
| ------------------ | ----------------- | --------------- |
| Compact toolbar    | compact           | `pe-toolbar--compact` |
| Indented title     | indentedTitle     | `pe-toolbar__title--indent` |

