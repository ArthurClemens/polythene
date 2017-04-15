# Tabs

Displays a tab row.


## Usage

A tab row is created with an Array of tab buttons, each of which is an option object with either attributes:

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

The tab button option object will be passed to the [Button](../polythene-button) component, so you can use the button options too.

Pass the button Array to the tab component as a child node, or with option `content`:

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

To set all button options at once, use `tabsOpts`. For example to disable the ripple (ink) effect on all buttons:

~~~javascript
const myTabs = m(tabs, {
  tabsOpts: {
    ink: false
  }
}, tabButtons)
~~~

### Scrollable tabs

To display more tabs than fit in the viewport, set `scrollable` to true. On no-touch devices 2 scroll buttons will be added to navigate the tabs.

To create the frame where the buttons are displayed behind (sliding doors), the frame container must have CSS attributes:

* A width or maximum width: f.i. `max-width: 400px`
* Overflow on hidden on the x axis: `overflow-x: hidden`
* A height; this should be at least the tab button height (48px): `height: 48px` 

The container's `background-color` will automatically set the scroll button colors. The `color` will automatically set the scroll button icon color.

~~~javascript
const myTabs = m(tabs, {
  scrollable: true
}, tabButtons);

m("div", {
  style: {
    maxWidth: "400px",
    color: "#fff",
    backgroundColor: "#444",
    overflowX: "hidden",
    height: "48px"
  }
}, myTabs)
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



## Appearance

### Styling

Below are examples how to button appearance, either with a theme or with CSS.

#### Themed component

~~~javascript
tabs.theme(".themed-tabs", {
  color_light:               "#00BCD4",
  color_light_selected:      "#F44336",
  color_light_tab_indicator: "#F44336"
});

m(tabs, {
  class: "themed-tabs",
  // ... other options
}, tabButtons);
~~~

#### CSS

Change CSS using the CSS Classes at the bottom of this page.

#### Style

Some style attributes can be set using option `style`. The tab button styles can be passed using `tabsOpts.style`:

~~~javascript
m(tabs, {
  tabsOpts: {
    style: {
      backgroundColor: "#EF6C00",
      color: "#fff"
    }
  }
});
~~~

#### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


### Tab widths

Minimum tab width is 72px. For larger screens (> 480px, as defined in the default theme) the minimum tabs width is 160px.

To automatically fit the tabs in the view, use parameter `autofit`.

To make all tabs the width of the largest tab, use parameter `largestWidth`.

To use a fixed width without `autofit`:

~~~javascript
tabs.theme(".tabs-fixed-width", {
  tab_min_width:        100,
  tab_min_width_tablet: 100
});

m(tabs, {
  class: "tabs-fixed-width",
  // ... other options
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
| **style**     | optional | Object |       | For setting simple style attributes |
| **id**        | optional       | String | | HTML element id |
| **content**   | use `vnode.children` or `content` | Array of option objects | | Button row content; replaces `vnode.children` |
| **before**    | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-theme`); use "light" to locally inverse (sets class `pe-light-theme`) |

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
| **scrollIconBackward** | optional | [Icon](../polythene-icon) options object | | Overrides default arrow icon |
| **scrollIconForward** | optional | [Icon](../polythene-icon) options object | | Overrides default arrow icon |
| **centered** | optional | Boolean | false | Set to true to center the button row; this automatically sets `autofit` to `false` |
| **largestWidth** | optional | Boolean | false | Set to true to make all tabs the width of the largest tab |
| **selectedTab** | optional | Number | 0 | The Array index of the selected tab |
| **hideIndicator** | optional | Boolean | false | Set to true to hide the tab indicator |
| **noIndicatorSlide** | optional | Boolean | false | Set to true not let the tab indicator slide to the new position |

### Tab button options

Tab buttons use the same parameters as [button](../polythene-button), except for `wash` (disabled), `raised` and `z` (makes visually no difference).

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



## Composition

Tabs is composed from:

* [Button](../polythene-button)
* [Icon](../polythene-icon) (when `icon` is passed instead of `label`)
* [Icon Button](../polythene-icon-button) (for scroll buttons)



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
