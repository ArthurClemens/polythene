[Back to Polythene Drawer main page](../drawer.md)

# Drawer component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Invoking a Drawer](#invoking-a-drawer)
  - [Types of drawer](#types-of-drawer)
  - [Responsive drawer](#responsive-drawer)
- [Appearance](#appearance)
  - [Navigation style](#navigation-style)
  - [Styling](#styling)
  - [RTL \(right-to-left\) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)
  - [Transitions](#transitions)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Drawer options](../drawer.md)



<a id="usage"></a>
## Usage

<a href="https://jsfiddle.net/ArthurClemens/25tL4aqr/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

To show a Drawer as permanent side menu:

~~~javascript
import React from "react"
import { Dialog, List } from "polythene-react"

const NavigationList = () =>
  <List>
    {/* see Try Out example */}
  </List
})

<Drawer permanent> 
  <NavigationList />
</Drawer>
~~~


<a id="invoking-a-drawer"></a>
### Invoking a Drawer

A Drawer is composed from a Dialog, so it shares many options and behaviors, but invoking a drawer is different from calling a dialog. Because drawers may be used more locally then dialogs, showing and hiding a drawer involves managing a `show` state locally (for example in a component state).

Maintaining the show state gives you the control when the drawer may be closed (for example to create a persistent drawer).

Important: to keep local state in sync with the drawer component, you almost always need to add option `didHide`. This callback function notifies when the drawer has closed, so the local `show` state can be reset to `false`.

Using local state:

~~~javascript
import React from "react"
import { Drawer, List, ListTile, Button } from "polythene-react"

const NavigationList = ({ navItemClick }) =>
  <List>
    {/* see Try Out example */}
  </List
})

class AppDrawer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  render() {
    return (
      <div>
        <Button
          raised
          label="Show"
          events={{
            onClick: () => this.setState({ show: true })
          }}
        />
        <Drawer
          show={this.state.show}
          didHide={() => this.setState({ show: false })}
        >
          <NavigationList
            navItemClick={() => this.setState({ show: false })}
          />
        </Drawer>
      </div>
    )
  }
}
~~~


<a id="types-of-drawer"></a>
### Types of drawer

The Material Design specification (version 2) describes 3 types of navigation drawer:

* Standard drawer
* Modal drawer
* Bottom drawer

The Polythene Drawer component offers the possibility to deviate from this, for example by combining options to create different drawers - for example a sliding drawer with a backdrop but no modal behavior.

<a id="standard-drawer"></a>
#### Standard drawer

Presented on the same plane as the content.
Can be permanently visible or dismissible. To be used on tablet and desktop only; use a modal drawer on mobile.

How to create this:

* Use option `permanent: true` to keep the drawer on the page; by default this creates a side menu with a height of 100%
* Use option `push: true` to make the drawer push the content next to it; structurally the drawer must be placed next to the content - for example in a flex container
* Optionally use:
  * `border: true` - to demarcate the drawer from the content
  * `mini: true` - instead of `push`, that will show a small part of the drawer (a strip of icons), and reveals the full menu when expanding (MD1); this assumes you have a navigation list with icons as "front"
  * `floating: true` - to display the drawer as a "floating" block (instead of full height) (MD1)

<a id="modal-drawer"></a>
#### Modal drawer

Presented floating on top of most of the UI. An overlay blocks interaction with the content below.

How to create this:

* Use option `cover: true`
* Use `modal: true` to prevent clicking on the background (technically: the touch layer, which does not have a color)
* Optionally use:
  * `fixed: true` - to show the drawer on top of all other content (except for dialogs and notifications); the drawer can be created at a deeper level than the root component by giving it a CSS style `position:fixed`
  * `backdrop: true` - to show a tinted backdrop
  * `shadowDepth` - a number between 0 and 5 to set the shadow depth; 1 is a good default value

<a id="bottom-drawer"></a>
#### Bottom drawer

Not implemented

#### Other options

* `anchor: "end"` - places the drawer at the right/opposite side


<a id="responsive-drawer"></a>
### Responsive drawer

Changing drawer type based on screen size

<a href="https://flems.io/#0=N4IgtglgJlA2CmIBcAWAHAOgGxoDQgGd4EBjAF3imRADsBDANwgHM6yIB7GgWlggLIYAVgRD4AZhASikAbVD0wiJCAwALMmFhiQJLhRplqAHgIkAThAAOZAAQFzJALwAdEBrJWCSAPQ-zdADuzBCCemA+AILmZGoAruYAwghKNAQ+VhywAJ6x8DTwPgUAHmQZdCQA1nTM8OmZOXkF3ObwFWVQ-GUNuWr58C1t5NwCdDRQdLBc8MIEbgB8xj5mljbzLjSmFtZ2Ds5uHl6+-kEhYRwR0bEJyfCp9Vm9-UXwpeVVNXUZj00DJATpToCb6NPrNf4EEZkMYTKYFWYLJYrHbrGgbYydBi2aCuEB0KxWRE+THzHREUjsLgyEAARiQWAADCAAL64BR0JTUWY6PSGfJGFR+CBgTIxWzAWwAEQCgXg5lwtgASnR+JQAEJxMhkLgKgCSvIVABkukaugAVKTwWzM2zicwXWxuHq-QbtNwbXkCcVSmVyhXK1VQDVanW2fWh40CU0CC0IBUAZQAagBxa22Jy2Z1g+AAbg2wtFdnoTFYlJokbsdodbgwRUYLDYnB4fAEbjzaJonrs1gIcTA6dsxis80NHFa-Z7fdsUCyY-soVsHPgZAVnvg5GXCUXnSs-AgJAgNGYtmIoQVRCg044J4gcQIYA4l4oIrnh4PnSgcUMtk1tlgdAAIzHK1lyvKZWlsMAanoRc+AARziOgMFsABVOx8mFbdIMPTCGAwjkFQQ-hbBoDgBHMOJL1eOUD2hMsf1gf8wD0P9ALHYiaD3H87EmCAiKsE9ihPOhbHCB8Z1Eql4AQthkMlOJiLoTUrQgCiIJncDsRoWxWisVowSgOUF0PWwGCyOIbDYK08L4dCAStA9GKnDTgJPOJbTiEI2BIuJGJEqw6EsNgEmQgBRYoSHgGx4C3AhDzsDgSBIOh11kpZh3bLs-y4ZgzVeOwMwxCAGHmYBJzAZkyq8PtKvK5klhJdsPX-AFbEiAlBIMKACCVIZBESC5MgKb9gA2DZbEktIyAo8gxwACj0jgvAASnFcaJvsCy5QW+0VvbDbbFifgMFGCgB1G7SDvsNQOECaUgjlJBbUmIh1om5l9utMbLtacZttWi6Dqyggbru31zAHI6CBOuiZhB277tlcxPom1oyASbS5rejaiqxEgWoIAA5JdcQC2oFmxg7cdEgniaUXEoHB7heQMMhuECAICTlCnLqunHEe53m+Y2-G6ABOn4Fxe9JlgEYLHgfJmY4PDzG4RmHohpROj7OXWkVyBOLV8HWPMWpdYVnhxCmRsjyNjX3SF4XMzlKDhrISnhfhwInGAL2BfMZkPb5ln+R94sGzLCs5sBp2rrUGEEGSfdKieubVqceZDrUY6iDIeNYej66EfBp7xBeq1mWWoOrsrwPHeFj8AAloEl4A0-TTOoZO5d86swu-ZL57YCIa1lptPx7GyTt7Fh2xAlCNRJJfN3q4mnxUVjwdMRpsWiZJtwQ8MHnN4m4wAwvYNtQ7E+NpxNwvbtpHuAAzUr4dm+Jv-ADiFxeNQffj+8A8KGAID7GOH9bBcCTlUVO6dO7Z2hrnXuFB+6g39k9aacQK5V3rk7ZkdcIFAkAggKAPsB4awISfdeq8cZqBpPMC0ZAEBLDoRvE+wA4S5XypQp2DVipsL5nwkqHshECNsMtT6dc64eipHYB8X4yCE0fFaDMM4SB9n5BgBCcpsjxmIOubU5gsYgAAMT4kJCACRGxFR9UlAAeQALIYF+oZIxxh2oCXXgqeRhglGGSsTQHkg1LTmGoABQCxAyT6PIE2akKAkBMlZOyTkKhw6libLwLo3J8CHwFLoWR3pww0GjCuWwFZYzwATCmNMGYsz9Cap2Ap+4qTnXWurcQZBvCDgIAwY8xQtBpFxIcY4gRRkYECAAZgwGOZgPgABMDJFnLF6W4Oe0BYi4jmSgVZfQWAaE2dskApkIDwECGqDgxRcQMlsNcrZtgtmIgCrEacuIHFzJpBgAAnJ82waASAMm4BgAA7HMwFEygXcA+RMgArICz5KBIXAsNDSOZtgaT3K+dC2wWAMATMSHM3FaBsXYCxaioFGA5lEtRWgBgNIGT-LRRgD5PzUWsroVgEgHz0W3Lhfc7gczZYYAZDSSFDIABeDiUVoomYaKZQKUC2HJWgBVUqJmwEwHMrAtgUAYGVci1FNIJlircOvJEvT5i4HWoeICxQnqmF6bYfpsBBkHC1FYEZYzJnTNNvMxZDJlnMFWfPKAGy3APKObs5g+yw2HOOac85ly3DXNuQq8NiwnmL1IW4SVPyJmNx1d8kgiKaTcsRZ8zAaBPllqpbKtFnyGVct1VSxl3z7mNxpPWrlNy+VfL5XMxM0L-nFpFV8-lY65lirANclFahuAoAbdgLAiKYW2AmdwCZq7IRrqhQitdeaC2fIHe2z5tLxUmsWAGi161RjmDtT0vpAzQGus8B6wI4ypkzN9Us+9Qb1lqAOTs+AeyyAAaOUweNFyrndruWmocbBM2vKlTSclcygXIswDSKlNJZYfKwAi8lDIZVzNRZ8ilKBZbko7YCrANJ9X3NsKRjtvzsAbpI2R2A0KMAoC1TqoFMrONoFZTSY1IBTWXstZdIg4w70OqdS69wbrX3vu9bMhZ36VlHODaGkA4bbCRujTp2N4GzmQaTdB1Nhz03wZedmglwr7m0bmRuqVdn0WsbRQyWANJSWQtJSJsT97UQfW+q8Qs054Bl18nYQu8dxiJz4FUUeHc1rX0ml6dgCAByF3YEwyp2IDRaUMkJSuHdsbGHKZaD2OWEA+2q-AHhG1KjwGyLV0ICAGsTSrIYH2xgimLCTMmUqzSaD1R8ANi9fWOt6eVnKYh8APZpMbFwD2QD+SgOAOAq6UCEspz0wneA0DKge3wdjahqWso0D7D1DMsgaQAF0Gmo03OYbS5WujYxuirOb2MMt1B9rIO7GBeTJUEOYnIc0AcKku2AaGUErBzTmtDhUh4itwNsBDj2m2Doo9eBJp2dWnpuF1DQG1bg8fC2G09Yb0NrUXPJwdVkmPq44+KPTq6BPHQgF7uYVoUAyfM95FTz0MNAps-emLlLTsWcS4mhztwejvxQSkPz3B+WuBC6pN3cYEvGf1yx7fP6rPq5y5APdDpcwxAC-V2rtIGB2mdJ19jO7y0XcYDh3NX7Y91rr3bMFwJOTgkIFCSocJ39tD4HJAY2J1BPlIDmZ8lkbJaBLmoHkJQ2T8l8kMNQCeBYxx2AlP7RI8Z4xpirP2J0PxszMwBA7LKhfwbF9LzaWpVf+hN4aVlACrQ6CVAAAocHivGKCjEBzoAZJlAp3e2j98H4Yf2w+ZYDiwNCifMipq2Gn73gf8V-YOMoLefsGZPmLIaUXkvGA6AwHztkBAWNLo1mloxc2is9Aq0ftzS3l1Ntv8eodCilS2M4SVQjMS0GCABbOQE5gripc5c5OuuE0m2WsEAdAAAilguYNkE9AAAYAACyBIkS+MI6OUExQ7Mf6T0AAJMAFvrPrvuDIvoxMyFYMUMtNgetHXAEufvGJftfmQLfvAPfhNDWMgTrCsBbNwAbBAB-uYCrogdjFIeAVgpAWODAf-soRweTkgQfmgRgVgbYHgQQbBLAIuOMCQYeOQSGmoFQTQT3nQfPgwSPiYQANRorMGsGmGXhzSkGWGxA2G0E74OEaz77awVQsFsEcEbBcGN4X5X5QA3537rQ1j-imwDDiGKxWwcA2zMAyFyGS4bRWAuxjD8hKGAFCyZHZGlFs5ipPQ0gqHQFygAD6AQ2sXS2yl0CB+RE0BB6BOiOB+BOhxhnh5hPAWm1htg1BARc+ZAe+B+U4rhNI7hERHRUR7YUSFI0eKgKADICSieySygqgEIQSWeeSGAZMVoMcBsvh4xEyCyLBn0M25gmRgQT02cMA+Qn0mQcUZYT0rQ-47AeEvuGwduTMuS7MnMhREMMcQIVg-4+hVsrwn0+mZAtRiyDAagn0YxqJDIDAgQn0wBlQzA9oX4UAT0Ji4gDIFJFJQJNAQO+g-I+RAUMAh4zAT0dxxQn0PhWJ2qaADI9xGwdcAxnQIk3hFh3JJ+fJHhMcZxAw6sSMXRkEgUIQNAbJkpki60JiD8cpcoz8r8XACpMJcJT0pEBQ6pI2Gw6xUeVI1ATmuxzId2+AfANAlQMg8gyeKSIAPe5Aduq2UwVgqQggIgOgCQ2gKghw3gfgX4VghJdJEQXpZQfYUA-gfUPpNkS0AZGe-BhR1AyINgex7pBx8ZasFwqZxA6ZmiQZ+AIZ1A4ZxwUZMZ4QyZ7QxZEQiZTZwwM4YApZfpGZlZIAWZBxuZRg9pzIQAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

If we want to make a drawer that is optimized for 3 breakpoints, we need to pass it 3 behaviors. For example:

* Small screen: cover
* Medium screen: push or mini
* Large screen: standard or floating

One way to create this drawer is to create 3 separate Drawer instances and only show them at the appropriate breakpoint, either using CSS with show/hide classes or with a conditional in the JavaScript code that toggles with screen size changes.

A simpler approach is to create a theme CSS for each breakpoint using Polythene's theme functions.

If we focus on the small screen first, we pass the theme options `cover` and `backdrop`, alongside a `mediaQuery` option:

~~~javascript
import { DrawerCSS } from "polythene-css"

const breakPointSmall = 480

DrawerCSS.addStyle(
  ".small-screen-cover-drawer",
  {
    cover: true,
    backdrop: true,
  },
  {
    mediaQuery: `@media all and (max-width: ${breakPointDrawerSmall}px)`
  }
)
~~~

We do the same for the other breakpoints:

~~~javascript
const breakPointDrawerSmall = 650;
const breakPointDrawerMedium = 900;

DrawerCSS.addStyle(
  ".medium-screen-mini-drawer",
  {
    mini: true,
    border: true,
  },
  {
    mediaQuery: `@media all and (min-width: ${breakPointDrawerSmall + 1}px) and (max-width: ${breakPointDrawerMedium}px)`
  }
)
DrawerCSS.addStyle(
  ".large-screen-floating-drawer",
  {
    permanent: true,
    floating: true,
    shadowDepth: 1,
    border_radius: 4
  },
  {
    mediaQuery: `@media all and (min-width: ${breakPointDrawerMedium + 1}px)`
  }
)
~~~

We pass the classnames to the Drawer. And because we need the drawer to be available all the time, we pass `permanent` to the Drawer instance:

~~~jsx
<Drawer
  className="small-screen-cover-drawer medium-screen-mini-drawer large-screen-floating-drawer"
  permanent
  // ...
/>
~~~

For small and medium screen sizes we still need a button to invoke the drawer.

You can find a full working example at the Try Out button.


<a id="appearance"></a>
## Appearance


<a id="navigation-style"></a>
### Navigation style

To create a "navigation style" list, pass option `navigation` to [List Tile](./list-tile.md) elements.



<a id="styling"></a>
### Styling

Below are examples how to change the Drawer appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { DrawerCSS } from "polythene-css"

DrawerCSS.addStyle(".themed-drawer", {
  color_light_background:          "rgba(69, 45, 157, 1)",
  color_light_text:                "#fff",
  color_light_backdrop_background: "rgba(69, 45, 157, .5)"
})

<Drawer
  className="themed-drawer"
  // ...
>
~~~

As demonstrated in [responsive drawer](#responsive-drawer) above, some behaviors can be set using a theme (replacing component options):

~~~javascript
DrawerCSS.addStyle(
  ".themed-mini-drawer",
  {
    mini:         true,
    border:       false,
    shadow_depth: 3,
  }
)
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Drawer CSS classes](../../../packages/polythene-css-classes/drawer.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/drawer"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
<Drawer
  style={{
    backgroundColor: "#EF6C00",
    color:           "#fff"
  }}
>
~~~


<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of Drawer content and animations are reversed when the Drawer is contained within an element that either:

* has attribute `dir="rtl"`
* has className `pe-rtl`



<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


<a id="transitions"></a>
### Transitions

See [Transitions](../../transitions.md)

