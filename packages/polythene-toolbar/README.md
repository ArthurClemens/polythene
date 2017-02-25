# Toolbar

Displays a horizontal bar containing a label and action items. 



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
import { toolbar } from "polythene-toolbar";
import { iconButton } from "polythene-icon-button";
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



## Variations

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
import { toolbar } from "polythene-toolbar";
import { shadow } from "polythene-shadow";

const toolbarRow = [
  // buttons and title
];

m("div",
  {
    style: {
      position: "relative"
    }
  }, [
    m(toolbar, toolbarRow),
    m(shadow)
  ])
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



