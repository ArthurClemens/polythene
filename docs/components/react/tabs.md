[Back to Polythene Tabs main page](../tabs.md)

# Tabs component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Tab options](#tab-options)
  - [Scrollable tabs](#scrollable-tabs)
  - [Getting the tabs state](#getting-the-tabs-state)
- [Appearance](#appearance)
  - [Mobile bottom menu](#mobile-bottom-menu)
  - [Scrollable tabs with custom arrow icons](#scrollable-tabs-with-custom-arrow-icons)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [Tab widths](#tab-widths)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Tabs options](../tabs.md)



<a id="usage"></a>
## Usage

Tabs can show a text label, an icon, or the combination of the two. 
Because each tab are registered with the parent Tabs component, tabs cannot be passed as children but only as option parameter to Tabs.

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKCUycjZsMU0YJ0LTcysbbycXeUzPbz8AoJCwiPhosqg4mDFMKHxMeGg4yenYgFpdTDAxcKiY2Z3EPbEt+cXl1dmhACsYaqULBqaxGrq35tb2406YJZrLYHH1EK5Bl4HCNAphghUJkcZnMFksVmtDlNjogttlEVjkbjgpdUTc1g8niAqi9vh9arUlPg2AA3TRsfCFSgQSpUl5M5lVaR4JD7AKwRQARhQtBAAF8iDx+IIQBTpJBZPIxIp1fNNMBNAAVTA+GCaWWafSaDbYgDctR1LX1RpNAGEAMpus0Wq1I2Lut12qC1Z0wf1CTD4fBu4pIAAUxiEMQE+C2CxNxiIetqmk0aYA+nxMAk8wB3dl2FCaCUS+jZ3PGgtqUvlkSV6u1qA5yCrch51TucSV4wAYgALOOM3XuxBe-3xHnhYh9gQhyBhywWBKAOwT4hThAzvtsAdiPP5tRMsCYMQz1frzc70eTzuaae95bkdR3sA-59dg-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-5XMFqtQ6gnaNSq6kPBWvGpUdT-extZNLhV-qY8yuWk0gY0cBSyqjZGya0qVs5zasLSVpawwymCFzcX4pyz03FP9JoIf2iS+FZXSXifC0ck5IHaPmzkTSRRZFYAtBsJQaS+ldEe30RxOJft+ImOEkYkOElLER3iTY2Oed-HuKKgfasVFPqAPgCNJWWxNsYLWndeAWwKtHYYQtK6WwypXRSmtp1dUqI9WZFsOCAAvFrNt3B23a7qLrEASwADEZwlhsFGJiei2KDabmYgSgdIcWPDtYtSc2-EF0W3t0cB2LvrNGrhqV25SpUVHMyOCIhTnbgO5tirO2Up7Z6vAfah2XsgCtq197pEoAOwAILYGwN6WMRELRVAti+RkLJPg5hzML1kzg4QwAAHJKhyuZKA3JEDVDrGLzQShMDaF0AYf4YgzCAm6CCRwzhwQDA8FCXw-hAjWkJPgcEEAwi7H2BYYcFg0yUnrOQdwFRCh5iTosdQ1R1GIE0CsOAlYAAKvpZjORnJoAASmcfYmgtiGmNKae3fAIAvEwKLsXfIRdq41-yV8WBghy4EAr1XL51cS7L9LyviBCiaLEEgao7P7A3nYGIQvApi-i9L1Liv8vjCQD4BEWYsga-q7ryGAfs+Pf6GANQBfs+9SaCwD4UCq4ZeSVyPKNfs-9Rb53xbEA7OxKIHIJETf0B2Kn-gLmEQ148jGVNNAXMJYICb-Sp7w-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-5aw5CRojCRQ9w4gG9cYCEJonYf-v2cdSYa4PYL4fiSgYSU6SWakZeLweQBdVVWZT4DOJ3QaNmauBKEqa0AgBA8OOUL2ejYMRFQweg7FRIZ42ScKQlbybScuVIVQfOS3pldUAaGUMmE0WrTvRqLoPgPlUEwRQudeb0SleOZGSYTgyxSJQYXSUJYI7xbscyApTk7xYEdASEScRpT6ZeQuUmAQKmFRQRCcbE3IPE0SeGWed02lSwd1laIGUBMGbMIE1SSE8YCyXUZE-LdcK+JqNfvLbGKhLmGsERIk2M+lak2VSoZk0Adk0cbk+fnvvk5Q7I6uGZAI4MaxcYMU5SKc3IyACwHsZcyYdcxmZAZU-c5DR88EX2dU6o7Psky3tMymB7qGT6fMx0zkV0x4xrug4UbUEnucGtb5EVEILoEsNfvGELpztzlbHqZzefa4GIB4BUBvf0LIFJJEMkfgPGIuRANyMYERLUCRGqCVRwNfooGqXoUKKBAjeRJKEjCgC2nKAqB4kqIoFkMEGy8Q5K0RR7lmC+D1QBUsJWFBYGLgUIERSRWsJoFqziAq5Kcq24mqzqRq7ULy2BGKFwGgDBNKHKMwCAKoBoDa9QIqAIIoM7iS-bkPdmcS6qCQI4FIGgACECMZNgAZFkBiRYF6xYPtfgDG8nt64gL69gP648NIMUAGYoLSKK+68qF68RRiUID66BH65qAGyAEG4oKG1YOG5G+Pom+cEW3wHG3wAm4W5zXwCWym2W2mxWxmyQFm8qLm7KPAUAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { Tabs } from "polythene-react"

const tabOptions = [{
  //
}]

<Tabs tabs={tabOptions} />
~~~

<a id="tab-options"></a>
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
  { icon: { svg: { content: iconHeartSVG } } },
  { icon: { svg: { content: h.trust(iconAlarmSVG_String) } } },
  ...
];
~~~

Text labels and icons combined:

~~~javascript
[
  {
    label: "Favs",
    icon: { svg: { content: iconHeartSVG } }
  },
  {
    label: "Notifs",
    icon: { svg: { content: h.trust(iconAlarmSVG_String) } },
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

Alternatively, write the tab options as `children`:

~~~jsx
<Tabs>
  {[
    {
      label: "One"
    },
    {
      label: "Two",
      disabled: true,
      icon: { svg: { content: iconHeartSVG } } 
    },
    {
      label: "Three",
      selected: true,
    }
  ]}
</Tabs>
~~~


<a id="scrollable-tabs"></a>
### Scrollable tabs

To display more tabs than fit in the viewport, set `scrollable` to true. On no-touch devices 2 scroll buttons will automatically be added to navigate the tabs. The scroll buttons can be customized - see under Appearance below.

To create the container where the buttons are displayed behind (sliding doors), it must have CSS attributes:

* A width or maximum width: f.i. `max-width: 400px`
* Overflow on hidden on the x axis: `overflow-x: hidden`
* A height; this should be at least the tab button height (48px): `height: 48px` 

The container's `background-color` will automatically set the scroll button colors. The `color` will automatically set the scroll button icon color.

For example:


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


<a id="getting-the-tabs-state"></a>
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



<a id="appearance"></a>
## Appearance


<a id="mobile-bottom-menu"></a>
### Mobile bottom menu

Use option `menu` to remove the minimum width settings from the tab buttons and compress padding and label font size.

~~~javascript
{
  menu: true,
  autofit: true,
  hideIndicator: true
}
~~~


<a id="scrollable-tabs-with-custom-arrow-icons"></a>
### Scrollable tabs with custom arrow icons

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

<Tabs className="themed-tabs" />
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

<a id="tab-widths"></a>
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


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set
