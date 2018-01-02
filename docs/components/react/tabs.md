[Back to Polythene Tabs main page](../tabs.md)

# Tabs component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Options](#options)
- [Usage](#usage)
  - [Tab options](#tab-options)
  - [Scrollable tabs](#scrollable-tabs)
  - [Getting the tabs state](#getting-the-tabs-state)
- [Appearance](#appearance)
  - [Mobile bottom menu](#mobile-bottom-menu)
  - [Scrollable tabs with custom arrow icons](#scrollable-tabs-with-custom-arrow-icons)
  - [Styling](#styling)
  - [Tab widths](#tab-widths)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->

<a name="options"></a>
## Options

[Tabs options](../tabs.md)


<a name="usage"></a>
## Usage

Tabs can show a text label, an icon, or the combination of the two. 
Because each tab are registered with the parent Tabs component, tabs cannot be passed as children but only as option parameter to Tabs.

#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/zoppbr7t/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { Tabs } from "polythene-react"

const tabOptions = [{
  //
}]

<Tabs tabs={tabOptions} />
~~~

#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/hd68eu6n/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import { renderer as h, Tabs } from "polythene-react"

const tabOptions = [{
  //
}]

h(Tabs, {
  tabs: tabOptions
})
~~~

<a name="tab-options"></a>
### Tab options

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
  { icon: { svg: { content: h.trust(iconHeartSVG) } } },
  { icon: { svg: { content: h.trust(iconAlarmSVG) } } },
  ...
];
~~~

Text labels and icons combined:

~~~javascript
[
  {
    label: "Favs",
    icon: { svg: { content: h.trust(iconHeartSVG) } }
  },
  {
    label: "Notifs",
    icon: { svg: { content: h.trust(iconAlarmSVG) } },
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

<a name="scrollable-tabs"></a>
### Scrollable tabs

To display more tabs than fit in the viewport, set `scrollable` to true. On no-touch devices 2 scroll buttons will automatically be added to navigate the tabs. The scroll buttons can be customized - see under Appearance below.

To create the container where the buttons are displayed behind (sliding doors), it must have CSS attributes:

* A width or maximum width: f.i. `max-width: 400px`
* Overflow on hidden on the x axis: `overflow-x: hidden`
* A height; this should be at least the tab button height (48px): `height: 48px` 

The container's `background-color` will automatically set the scroll button colors. The `color` will automatically set the scroll button icon color.

For example:

#### With JSX

~~~jsx
<div
  style={{
    maxWidth: "400px",
    color: "#fff",
    backgroundColor: "#444",
    overflowX: "hidden",
    height: "48px"
  }}
>
  <Tabs scrollable tabs={tabOptions} />
</div>
~~~

#### With hyperscript

~~~javascript
h("div",
  {
    style: {
      maxWidth: "400px",
      color: "#fff",
      backgroundColor: "#444",
      overflowX: "hidden",
      height: "48px"
    }
  },
  h(Tabs,
    {
      scrollable: true,
      tabs: tabOptions
    }
  )
)
~~~

<a name="getting-the-tabs-state"></a>
### Getting the tabs state

To read the currently selected tab, for instance to write the selected tab to a controller variable, use `onChange`:

~~~javascript
{
  onChange: ({ index }) => this.setState({ selectedTabIndex: index })
}
~~~

The `state` object contains data on the current tab:

* `index`: Array index of the selected tab
* `options`: the options that were passed to the tab button
* `el`: the tab button HTML Element


<a name="appearance"></a>
## Appearance

<a name="mobile-bottom-menu"></a>
### Mobile bottom menu

Use option `menu` to remove the minimum width settings from the tab buttons and compress padding and label font size.

~~~javascript
{
  menu: true,
  autofit: true,
  hideIndicator: true
}
~~~

<a name="scrollable-tabs-with-custom-arrow-icons"></a>
### Scrollable tabs with custom arrow icons

#### With JSX

~~~jsx
import React from "react"
import { Tabs } from "polythene-react"

const arrowBackSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
const arrowForwardSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>

const tabOptions = [
  { label: "Web" },
  { label: "Shopping" },
  { label: "Videos" },
  { label: "Images" },
  { label: "Books" },
  { label: "More" }
]

<div
  style={{
    maxWidth: "400px",
    color: "#fff",
    backgroundColor: "#444",
    overflowX: "hidden",
    height: "48px"
  }}
>
  <Tabs
    scrollable
    scrollIconBackward={{ svg: { content: arrowBackSVG } }}
    scrollIconForward={{ svg: { content: arrowForwardSVG } }}
    tabs={tabOptions}
  />
</div>
~~~

#### With hyperscript

~~~javascript
import { renderer as h, Tabs } from "polythene-react"

const arrowBackSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>"
const arrowForwardSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z\"/></svg>"

const tabOptions = [
  { label: "Web" },
  { label: "Shopping" },
  { label: "Videos" },
  { label: "Images" },
  { label: "Books" },
  { label: "More" }
]

h("div",
  {
    style: {
      maxWidth: "400px",
      color: "#fff",
      backgroundColor: "#444",
      overflowX: "hidden",
      height: "48px"
    },
  },
  h(Tabs,
    {
      scrollable: true,
      scrollIconBackward: { svg: { content: h.trust(arrowBackSVG) } },
      scrollIconForward: { svg: { content: h.trust(arrowForwardSVG) } },
      tabs: tabOptions
    }
  )
)
~~~

<a name="styling"></a>
### Styling

Below are examples how to change the Tabs appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

#### Themed component

~~~javascript
import { TabsCSS } from "polythene-css"

TabsCSS.addStyle(".themed-tabs", {
  color_light:               "#00BCD4",
  color_light_selected:      "#F44336",
  color_light_tab_indicator: "#F44336"
})

<Tabs className="themed-tabs" />
~~~

#### CSS

Change CSS using the [Tabs CSS classes](../../../packages/polythene-css-classes/tabs.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/tabs"
~~~

#### Style

Some style attributes can be set using option `style`. The tab button styles can be passed using `all.style`:

~~~jsx
<Tabs
  all={{
    style: {
      backgroundColor: "#EF6C00",
      color: "#fff"
    }
  }}
/>
~~~

or with hyperscript:

~~~javascript
h(Tabs, {
  all: {
    style: {
      backgroundColor: "#EF6C00",
      color: "#fff"
    }
  }
})
~~~

<a name="tab-widths"></a>
### Tab widths

* The minimum tab width is 72px. For larger screens (> 480px, as defined in the default theme) the minimum tabs width is 160px.
* To automatically fit the tabs in the view, use parameter `autofit`.
* To make all tabs the width of the largest tab, use parameter `largestWidth`.

To use a fixed width without `autofit`:

~~~javascript
Tabs.addStyle(".tabs-fixed-width", {
  tab_min_width:        100,
  tab_min_width_tablet: 100
});

h(Tabs,
  {
    className: "tabs-fixed-width",
    tabs: tabOptions
  }
)
~~~

or:

~~~css
.pe-tabs:not(.pe-tabs--small) .pe-tabs__tab {
  min-width: 100px;
}
~~~

<a name="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set
