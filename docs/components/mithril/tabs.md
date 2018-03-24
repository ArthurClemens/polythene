[Back to Polythene Tabs main page](../tabs.md)

# Tabs component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Scrollable tabs](#scrollable-tabs)
  - [Getting the tabs state](#getting-the-tabs-state)
- [Appearance](#appearance)
  - [Mobile bottom menu](#mobile-bottom-menu)
  - [Scrollable tabs with custom arrow icons](#scrollable-tabs-with-custom-arrow-icons)
  - [Styling](#styling)
  - [Tab widths](#tab-widths)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Tabs options](../tabs.md)



<a id="usage"></a>
## Usage

<a href="https://jsfiddle.net/ArthurClemens/dos13t3z/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

Tabs can show a text label, an icon, or the combination of the two. 
Each tab is created with an option object.

~~~javascript
import m from "mithril"
import { Tabs } from "polythene-mithril"

const tabOptions = ...

m(Tabs,
  { tabs: tabOptions }
)
~~~

Text labels:

~~~javascript
[
  { label: "Favorites" },
  { label: "Notifs" },
  ...
]
~~~

Icons:

~~~javascript
[
  { icon: { svg: { content: m.trust(iconHeartSVG) } } },
  { icon: { svg: { content: m.trust(iconAlarmSVG) } } },
  ...
];
~~~

Text labels and icons combined:

~~~javascript
[
  {
    label: "Favs",
    icon: { svg: { content: m.trust(iconHeartSVG) } }
  },
  {
    label: "Notifs",
    icon: { svg: { content: m.trust(iconAlarmSVG) } },
  },
  ...
]
~~~

You can use [Button options](../button.md#options) here (Tab button options will be passed to the Button component). For example:

~~~javascript

[
  {
    label: "Favorites",
    ink: false
  },
  {
    label: "Notifs",
    ink: false
  },
  ...
]
~~~

To set shared options all at once, use option `all`:

~~~javascript
{
  all: { ink: false },
  tabs: [
    { label: "Favorites" },
    { label: "Notifs" }
  ]
}
~~~


<a id="scrollable-tabs"></a>
### Scrollable tabs

To display more tabs than fit in the viewport, set `scrollable` to true. On no-touch devices 2 scroll buttons will automatically be added to navigate the tabs.

To create the container where the buttons are displayed behind (sliding doors), it must have CSS attributes:

* A width or maximum width: f.i. `max-width: 400px`
* Overflow on hidden on the x axis: `overflow-x: hidden`
* A height; this should be at least the tab button height (48px): `height: 48px` 

The container's `background-color` will automatically set the scroll button colors. The `color` will automatically set the scroll button icon color.

For example:

~~~javascript
const myTabs = m(Tabs,
  {
    scrollable: true,
    tabs: tabOptions
  }
)

m("div",
  {
    style: {
      maxWidth: "400px",
      color: "#fff",
      backgroundColor: "#444",
      overflowX: "hidden",
      height: "48px"
    }
  },
  myTabs
)
~~~

<a id="getting-the-tabs-state"></a>
### Getting the tabs state

<a href="https://jsfiddle.net/ArthurClemens/41kyvadm/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

To read the currently selected tab, for instance to write the selected tab to a controller variable, use `onChange`:

~~~javascript
m(Tabs,
  {
    onChange: ({ index }) => vnode.state.selectedTabIndex = index,
    tabs: tabOptions
  }
)
~~~

The `state` object contains data on the current tab:

* `index`: Array index of the selected tab
* `options`: the options that were passed to the tab button
* `el`: the tab button HTML Element



<a id="appearance"></a>
## Appearance


<a id="mobile-bottom-menu"></a>
### Mobile bottom menu

Use option `menu` to remove the minimum width settings from the tab buttons and compress padding and label font size.

~~~javascript
m(Tabs,
  {
    menu: true,
    autofit: true,
    hideIndicator: true,
    tabs: tabOptions
  }
)
~~~


<a id="scrollable-tabs-with-custom-arrow-icons"></a>
### Scrollable tabs with custom arrow icons

~~~javascript
const arrowBackSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>";
const arrowForwardSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z\"/></svg>";

const tabOptions = []

m("div",
  {
    style: {
      maxWidth: "400px",
      color: "#fff",
      backgroundColor: "#444",
      overflowX: "hidden",
      height: "48px"
    },
  },
  m(Tabs,
    {
      scrollable: true,
      scrollIconBackward: { svg: { content: m.trust(arrowBackSVG) } },
      scrollIconForward: { svg: { content: m.trust(arrowForwardSVG) } },
      tabs: tabOptions
    }
  )
)
~~~


<a id="styling"></a>
### Styling

Below are examples how to change the Tabs appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { TabsCSS } from "polythene-css"

TabsCSS.addStyle(".themed-tabs", {
  color_light:               "#00BCD4",
  color_light_selected:      "#F44336",
  color_light_tab_indicator: "#F44336"
})

m(Tabs, {
  className: "themed-tabs"
})
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Tabs CSS classes](../../../packages/polythene-css-classes/tabs.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/tabs"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. The tab button styles can be passed using `all.style`:

~~~javascript
m(Tabs, {
  all: {
    style: {
      backgroundColor: "#EF6C00",
      color: "#fff"
    }
  }
})
~~~


<a id="tab-widths"></a>
### Tab widths

* The minimum tab width is 72px. For larger screens (> 480px, as defined in the default theme) the minimum tabs width is 160px.
* To automatically fit the tabs in the view, use parameter `autofit`.
* To make all tabs the width of the largest tab, use parameter `largestWidth`.

To use a fixed width without `autofit`:

~~~javascript
import { TabsCSS } from "polythene-css"

TabsCSS.addStyle(".tabs-fixed-width", {
  tab_min_width:        100,
  tab_min_width_tablet: 100
});

m(Tabs,
  {
    className: "tabs-fixed-width",
    tabs: tabOptions
  }
)
~~~

or 

~~~css
.pe-tabs:not(.pe-tabs--small) .pe-tabs__tab {
  min-width: 100px;
}
~~~


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


