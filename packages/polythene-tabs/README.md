# Tabs

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/tabs">Demo</a>

Displays a tab row.


## Usage

A tab button is an option object with attributes:

* label
* icon
* icon and label


~~~javascript
const buttons = [
  { label: "New" },
  ...
];


const iconButtons = [
  {
    icon: { msvg: iconHeart }
  },
  ...
  }
];

const iconTextButtons = [
  {
    icon: { msvg: iconHeart },
    label: "Favs"
  },
  ...
];
~~~

Create a tab button row by passing the option object as a child node (or with option `content`):

~~~javascript
import m from "mithril";
import tabs from "polythene-tabs";

const tabButtons = [
  { label: "New" },
  { label: "Favorites" },
  { label: "Saved" }
];

const myTabs = m(tabs, {
  autofit: true
}, tabButtons)
~~~

Each tab is converted to a [Button](#button). The button options can be set with `tabsOpts`.

For example to disable the ripple (ink) effect:

~~~javascript
const myTabs = m(tabs, {
  tabsOpts: {
    ink: false
  }
}, tabButtons)
~~~

### Scrollable tabs

To display more tabs than fit in the viewport, set `scrollable` to true. On no-touch devices 2 scroll buttons will be added to navigate the tabs.

~~~javascript
const myTabs = m(tabs, {
  scrollable: true
}, tabButtons)
~~~

Optionally create custom arrow icons:

~~~javascript

import arrowBack    from "mmsvg/google/msvg/navigation/arrow-back";
import arrowForward from "mmsvg/google/msvg/navigation/arrow-forward";

const myTabs = m(tabs, {
  scrollable: true,
  scrollIconBackward: { msvg: arrowBack },
  scrollIconForward: { msvg: arrowForward }
}, tabButtons)
~~~


#### Scrollable tabs inside a toolbar

The toolbar must have the class `pe-toolbar--tabs`. This will fit the tab row in a row (class `pe-toolbar__bar`), and give the scroll buttons background color the same color as the toolbar background.


### Getting the tabs state

To read the currently selected tab, for instance to write the selected tab to a controller variable, use `getState`:

~~~javascript
m(tabs, {
  getState: state => vnode.state.selectedTabIndex = state.index
}, tabButtons)
~~~

The `state` object contains:

* `index`: Array index
* `data`: everything that was passed to the tab button
* `el`: the tab button HTML Element


### Styling

Set the selected button color and corresponding indicator either with a theme or CSS.


#### Custom theme

~~~javascript
component.theme(".tabs-custom_color", {
  color_light:               "#00BCD4",
  color_light_selected:      "#F44336",
  color_light_tab_indicator: "#F44336"
});

m(tabs, {
  class: "tabs-custom_color"
}, tabButtons)
~~~

#### CSS

~~~css
.pe-tabs {
  color: #00BCD4
}
.pe-tabs__tab.pe-button--selected {
  color: #F44336;
}
.pe-tab__indicator {
  background-color: #F44336;
}
~~~




### Tab widths

Minimum tab width is 72px. For larger screens (> 480px, as defined in the default theme) the minimum tabs width is 160px.

To automatically fit the tabs in the view, use parameter `autofit`.

To make all tabs the width of the largest tab, use parameter `largestWidth`.

To use a fixed width without `autofit`:

~~~javascript
component.theme(".tabs-fixed-width", {
  tab_min_width:        100,
  tab_min_width_tablet: 100
});

m(tabs, {
  class: "tabs-fixed-width"
}, tabButtons)
~~~

or 

~~~css
.pe-tabs:not(.pe-tabs--small) .pe-tabs__tab {
    min-width: 100px;
}
~~~

### Mobile bottom menu

Use option `menu` to remove the minimum width settings from the tab buttons and compress padding and label font size.

~~~javascript
m(tabs, {
  menu: true,
  autofit: true,
  hideIndicator: true
}, tabButtons)
~~~


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String | "div" | HTML element tag |
| **class**     | optional       | String |  | Extra CSS class appended to "pe-tabs" |
| **id**        | optional       | String | | HTML element id |
| **content**   | use `vnode.children` or `content` | Array of option objects | | Button row content; replaces `vnode.children` |
| **before**    | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### Tabs options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **buttons**   | -              | - |  | Deprecated; use `content` or `vnode.children` |
| **tabsOpts**  | optional       | Options Object | | Tab button options that will be applied to all tabs, see "Tab button options"  below |
| **getState**  | optional       | Function(state {Object}) | | Callback function that accepts the tabs state (Object with properties `index` {Boolean}, `data` {Object}, `el` {HTMLElement}) |

### Tabs appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **menu** | optional | Boolean | false | Set to `true` to make the tabs behave like a mobile navigation menu; this removes the minimum width settings from the tab buttons and compresses padding and label font size |
| **small** | optional | Boolean | false | Set to `true` to reduce the tab widths on larger screens |
| **autofit** | optional | Boolean | false | Set to true to let the buttons fill the button row |
| **scrollable** | optional | Boolean | false | Set to true to make the button row scrollable; this automatically sets `autofit` to `false`; on no-touch devices 2 scroll buttons will be added to navigate tabs |
| **activeSelected** | optional | Boolean | | Set to `true` to enabled clicks/taps on the selected tab button |
| **scrollIconBackward** | optional | [Icon](#icon) options object | | Overrides default arrow icon |
| **scrollIconForward** | optional | [Icon](#icon) options object | | Overrides default arrow icon |
| **centered** | optional | Boolean | false | Set to true to center the button row; this automatically sets `autofit` to `false` |
| **largestWidth** | optional | Boolean | false | Set to true to make all tabs the width of the largest tab |
| **selectedTab** | optional | Number | 0 | The Array index of the selected tab |
| **hideIndicator** | optional | Boolean | false | Set to true to hide the tab indicator |
| **noIndicatorSlide** | optional | Boolean | false | Set to true not let the tab indicator slide to the new position |

### Tab button options

Tab buttons use the same parameters as [button](#button), except for `wash` (disabled), `raised` and `z` (makes visually no difference).

These options can be grouped into `tabsOpts` and applied to all tabs.

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element** | optional | String | "a" (if `url` is passed) or "div" | HTML element tag |
| **events** | optional | Object | | Button events; options object containing one or more events like `onclick` |
| **class** | optional | String |  | Extra CSS class appended to "pe-button pe-tabs__tab" |
| **label** | required | String | | The button label |
| **url** | optional | Object with `href`, optionally `oncreate` | | URL location; for in-app route linking set `oncreate : m.route.link` |
| **ink** | optional | Boolean | true | Set to false to disable the ripple effect on click/tap |
| **disabled** | optional | Boolean | false | Disables the button |
| **selected** | optional | Boolean | false | Set to true to show the button as selected |



### Composition

Tabs is composed from:

* [Button](#button)
* [Icon](#icon) (when `icon` is passed instead of `label`)
* [Icon Button](#icon-button) (for scroll buttons)



## CSS classes

| **Element**            | **Key**             |  **Class**                     |
| ---------------------- | ------------------- | ------------------------------ |
| Component              | component           | `pe-tabs`                      |
| Tab row                | tabRow              | `pe-tabs__row`                 |
| Tab                    | tab                 | `pe-tabs__tab`                 |
| Tab content            | tabContent          | `pe-tabs__tab-content`         |
| Indicator              | indicator           | `pe-tabs__indicator`           |
| Scroll button          | scrollButton        | `pe-tabs__scroll-button`       |
| Scroll button at start | scrollButtonAtStart | `pe-tabs__scroll-button-start` |
| Scroll button at end   | scrollButtonAtEnd   | `pe-tabs__scroll-button-end`   |
| Scroll button offset element   | scrollButtonOffset  | `pe-tabs__scroll-button-offset`   |

| **State**                | **Key**            |  **Class**                   |
| ------------------------ | ------------------ | ---------------------------- |
| Centered tab row         | tabRowCentered     | `pe-tabs__row--centered`     |
| Indented tab row         | tabRowIndent       | `pe-tabs__row--indent`       |
| Tab has icon             | tabHasIcon         | `pe-tabs__tab---icon`        |
| Tabs are scrollable      | scrollable         | `pe-tabs--scrollable`        |
| Auto fit tabs            | isAutofit          | `pe-tabs--autofit`           |
| Small tabs               | smallTabs          | `pe-tabs--small`             |
| Is menu                  | isMenu             | `pe-tabs--menu`              |
| Tab is at start          | isAtStart          | `pe-tabs--start`             |
| Tab is at end            | isAtEnd            | `pe-tabs--end`               |
| Active tab is selectable | activeSelectable   | `pe-tabs__active-selectable` |


  
## Future

* Tab with More dropdown menu
