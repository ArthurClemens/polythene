[Back to Polythene Drawer main page](../drawer.md)

# Drawer component for Mithril

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

<a href="https://jsfiddle.net/ArthurClemens/srtye3sm/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

To show a Drawer as permanent side menu:

~~~javascript
import m from "mithril"
import { Drawer, List } from "polythene-mithril"

const navigationList = m(List, {
  tiles: [] // see Try Out example
})

m(Drawer, {
  content: navigationList,
  permanent: true
})
~~~


<a id="invoking-a-drawer"></a>
### Invoking a Drawer

A Drawer is composed from a Dialog, so it shares many options and behaviors, but invoking a drawer is different from calling a dialog. Because drawers may be used more locally then dialogs, showing and hiding a drawer involves managing a `show` state locally (for example in a component state).

Maintaining the show state gives you the control when the drawer may be closed (for example to create a persistent drawer).

Important: to keep local state in sync with the drawer component, you almost always need to add option `didHide`. This callback function notifies when the drawer has closed, so the local `show` state can be reset to `false`.

Using local state:

~~~javascript
import m from "mithril"
import { Drawer, List, ListTile, RaisedButton } from "polythene-mithril"

const navigationList = navItemClick =>
  m(List, {
    tiles: [] // see Try Out example
  })

const AppDrawer = {
  oninit: vnode => {
    vnode.state.show = false
  },
  view: ({ state }) => {
    const navItemClick = () => state.show = false
    return [
      // For simplicity use a regular button to show the drawer
      // usually this would be the app bar's menu button
      m(RaisedButton, {
        label: "Show",
        events: {
          onclick: () => state.show = true
        }
      }),
      m(Drawer, {
        content: navigationList(navItemClick),
        fixed: true, // global drawer on top of everything
        backdrop: true,
        show: state.show,
        didHide: () => state.show = false // sync state with component
      })
    ]
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

<a href="https://flems.io/#0=N4IgtglgJlA2CmIBcAWAnAOgIwHYA0IAzvAgMYAu8UyIAdgIYBuEA5veRAPa0C0sEhchgBWhEAQBmEBGKQBtUAzCIkIDAAtyYWOJClulWuRoAeQqQBOEAA7kABIQukAvAB0Qm8tcJIA9L4t6AHcWCCF9MF8AQQtydQBXCwBhBGVaQl9rTlgATzj4WnhfQoAPckz6UgBrehZ4DKzc-MKeSDirWF8oAXLGvPUC+Faw9Q6eQXpaKHpYbngRQncAPhNfcytbJddaM0sbe0cXd09vPwDg0PDOSJi4xJT4NIbs-sHi+DKK6tr6zJfmoakQgZbqCP5NAYtIGEcbkSbTWaFBbLVbrfZbWjbXTEMgcbiyEBYJAANgADCAAL54RT0ZQ0Ba6fRGArGVT+CBgLKxOzAOwAEUCQXgFjwdgASvQBFQAELxcjkbiigCSTNFABkeuqegAVaTwOwUuwSCzXOzuPoA4btaTubZMwQ8-mC4WiiVSqCy+WKuwq70awRawS6hAGuzOOwWyHwADc2w5XPsDGYbDxtH99mNpvcGGKTFY7C4vH4gncscxtHtB3IFngtLDdjAGEENdpZcrdhshHiYHr7hM1iWas4NZ7ne7dig2WHDjCdlp8HIovt8AoC8Sc+61gEEFIEFoLDsJDCouIUAnnEPEHihDAnDPlE5073u+6UHiRjscrssHoACNh-qC7nrMNYNrUDBzvwACO8T0BgdgAKr2AUHIbg2e6oYwKG0qKMECHYtCcM28Rnh8wq7nCqafrAP5gPo35-sO+G0Nun72DMEB4dYh4lIe9B2BEt6TgJ+LwDB7DwXy8T4fQcr6hAFiJPqk4gR2tB2DW1g1pCUDCrOe52Iw2TxLY7D6lh-DIcC+q7jR44qQBh7xEa8ShOwBHxDR-HWPQVjsIk8EAKIlKQ8C2PA66EHu9icKQpD0CuEmrAOpZ2vi9iIiw2ofPY4aNtW17kAAFGOPYANQdt444VaVACUZZpek9hRNY3HhsA2x2HY3AYeQSCGYRulhksPKdV1IlNQ46icEEArBMK9bNrWYBFRIMzEPVY1dQA8r+wgrkI9DAqwtBFYwg3zBMlCih16njV1hDTbNzoiltBqbXdVJjcw8BBP1RW8ld+oUrVw2jXdXXto9M1zUKFiLZRl1PbDwpFR9901uQiTqSt2Y+XU7iim9XW42oUAvTwTKGOQPBBIErXCoTdhyMT40rSjIrg-d3MCT+wIAHLzv17g3jMsDjJY8AFJTnBYRYPDk-N8PKN03YSzW0uQCxCsvQxFh1OrUu8BIswFvuOtK4TrP3dYwpgJMLL9QV8B4Nb43Q39U0wy9rsQzzE3U-1Sb5qm6YA2793qPCCApDuVT-aDzgjUDTbIy9q3rfAtUR+9vv++Nr4ABLQPACdgynHscxnsAbXY-gODkFYOIjdhBCMImPoURhuyDef+6TGBUyyTMs37PMrW6p6egqtA3TnXXQMLRBPRbcM8L+coz1bY-+z+v4kEvADKT3b-n93wFhRg+FzZ-3dwpD8NUZdJ83Zmp97StFc72c7zzX2-9zUEf4EBQH6pXF6Ode451JuoLATN3C6nIAgdwtU+751Jt0RgTNMrZTKD-fOABdfB3MiFvXRgabYFIGq0EbLed8xVJykG7CyDA-4oA5FFC1awH0sQEAiFuBAFgaC-j-CQbEJADqFgJAAViQOSKkNI6SqHyMoBkfCDAshoPXeMw57C8g5kkQ+h9QyZh7Oaf4UZKbAltBWdKjoDFGNDOGSMgxDGH2oe2X8LYqgAAVODRUPvbGi9YUAAA5SRtjsV42svj-FGA5oEsW9ZiTSIiY1B00T6CxOihzAAslQK8PZwxoFJGk8sDjD4YHoDAQ+5AcgICKmNbMosaKG2lvoOWq9GbiDGrde6HThRO0Ui7N6Ijqjk04NYIZ8QRl+3-BYXSFh+prRrrMrq-8up9LZgU+gABFGZFgcj9QAAYAAEVYQH4kk+Edgir2xKLTaAcR+oABJgCZOyfEl6iSaIUmsCUWqxyxoUm2B9CpVSal1IaU0tQFy1brCNsMbWis4anxviTDC0y1njXmYsrFfcNnoobDs-Zwojl2DORcq5wSbl3L3I8qAzy7BvI+X4nJ3ygmwDsBVLAfyAVzimLc+5DKmUsu8Wyr5St8mqzAHywFwLQVlnBdUqAtT6nwEaXdbMP59ZDARdLE2nAzYsC6RYNFWyuq2wsPbLufU7DOzQUaU2HB9z4regAL36lgR1uLhQAH1Aiq2vigYFfcLXEu6Hsg55LKU7Mgly2lWsRXqFee88VcTyB5IKdVOwvL-nys+oq3hRAJEUCkTQUkcieAoErfI6kdB5w0GDimQsfAehqL0BoowWjfAdkfNyHspizTgBGB0VKtjJq8l9LPOw6ZAzkGDMDesLjCgeLsTufE9YtmKwkOQa+fZCCMAPCUbQ6Q3CuGOPKKZ-ggi3owEEAAzBgYcLBfAACZSmkjWEei97hW5PPUOe9wb6Q0XpAHYAYrBNBAZACB394GfpBGlJwEoMHSR2HQyBuwcGwMrB8nECcMHclvqwBgNAaA7ChNIKSHgGAcBvtow+nAPBSMPukbRtAKAWN0bVFgN9ubsNkekXYYkGAH1JDfWJ0JImMApOw3YHAGA33Sf46ExgWBSTUdzdgMj8n+NvtgcSUgpGsAYewxx8zb7xYYFJFgFjpJ3W5L47mh9aon04BQApjAoTPPOYfbAUJSniR2BQN5lAvH+NYAfe6+DvgVjfpYFsHpd09z-hKEvMwR67AntgGe+DJwzi3qCPep9L732foS-B-9jLAPwZw3+yDLBoN1dA3+xDyHUPwfQ5hzz9WQB4fYOoQj8GnMUYfYXUL5HSDcawKZmjpG0CBdCWgbji3sNudzWgLTJnvMqe0+R7DhcsBbZM2ZhjumGNvoAGrSOozNuzZGeCXae+6sA6G+PqGrdt2TxJuNsbsA+ngD6AcwkB6xrjgPxuTbQDdo7aB1MOdi-Fw9iW0UTCWcOzLx7T2EBgwVm9d7H3Pv1uV0plWwPVbiDBvrEH4BQfINT1rCGIC-Q62hs7vWmcDYI1AIjzncBKZwLxwLWAVNYHFqR4kXHFOklc2+-jmAQPi0U8d2jxIsARfk5gY7lHZPA4V0plAsBpEYBQMF0LOBXMm9CfprAMWwNxdREepLfdiBTAyyj7LOO8dXsK4T0rJOP1k5R1VtuNXGdVca81sDNP2sofZz17DXP+yDeG2B4jNnTMkbVG+4HznJO2YB-JjTsAsDCYY2X7D9v3CO4S0lyh1CPgJgnPANanl7AAwg9HeAsdqjvTBrdMa7YOAhnDJ3jgSCXYdlVGpXSvEQbDTeitdMi6547wnwgR1XVMxGH6itada-84o-6ryIeu+GwYAKoIEqTJQYgp3lAne005bANLva4ZW+CJ5hbdwN1O8L4sjXzhp3wViPzxxd5TAxxgGsz373QgzUKQx2K0DdiED1hyBYAEIIEaRrgWA4xFRzpErP7Civ5-73Qj71D9RyAEKDz3wST0CtS5BFRUGijIFgCEAYD2zWBFRFSsGih7hz6JwjRMGszAHjT8EfCf5dQb5v7uBKi0BpZoo8wbq0D9TKHsGpYoaf6Er3SiELxTASFuzSFHxwgWA1hQCKHczKGqH2hNgmFaGf66Gz4GEAJGHDqHwshgQ2jJb5xWHT74hNgFBQD2EiFuziElCSH2phAIBLxzS7qLDeH+y+FqEYA7p7paFvREK1S1QcH0Ffx6jELwEN7Fo4iSL4g0AaZIBvpoCUj1pKAqBqDQiMhdqshqD4z6hbJJph5MoPofr-JlhdSyzCiGqezqDQC6S0D9ERhERhCFj9Q1g-gcBYRlj34pEUxn40x0z0FWo3ygjWA-jkomwfCTFR52oaakiMDqCTFdEpq5qlKMBBCTFjJVAsAmjvigJ2AADEEgpI3x3xyx2wNBzIH4WyPkMAe4LA-UvRJQkxwq1x-UYSpIfRlC2w5ycadKvAcJdgJSiJ-KWyGAtspqRK9s+se4kJOJkxsBnxHspq68m83ARKux+xQccwFJyJtA4iuI5aqgtaT2D6cilIBCBA-AtAVQsgCgDaSiI61osApyCx9QxgBAiQOgqgJwPg-g741gzxNBkQbQow0gpyO2xIvgupHQHadStsNAaItgNRii9RJp0gsILYYAspZkggugSpNAqpZwGpWpEQxpo6DpS0tIBpOmX6QZjYogug5p9RVpxgFIBCFIQAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

If we want to make a drawer that is optimized for 3 breakpoints, we need to pass it 3 behaviors. For example:

* Small screen: cover
* Medium screen: push or mini
* Large screen: standard or floating

One way to create this drawer is to create 3 separate Drawer instances and only show them at the appropriate breakpoint, either with CSS with show/hide classes or with a conditional in the JavaScript code that toggles with screen size changes.

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
const breakPointDrawerSmall = 650
const breakPointDrawerMedium = 900

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

~~~javascript
m(Drawer, {
  className: "small-screen-cover-drawer medium-screen-mini-drawer large-screen-floating-drawer",
  permanent: true,
  // ...
})
~~~

For small and medium screen sizes we still need a button to invoke the drawer.

You can find a full working example at the Try Out button.

<a id="appearance"></a>
## Appearance


<a id="navigation-style"></a>
### Navigation style

To create a "navigation style" list, pass option `navigation: true` to [List Tile](./list-tile.md) elements.



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

m(Drawer, {
  className: "themed-drawer",
  // ...
})
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
m(Drawer, {
  style: {
    backgroundColor: "#EF6C00",
    color:           "#fff"
  }
})
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

