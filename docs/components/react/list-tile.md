[Back to Polythene List Tile main page](../list-tile.md)

# List Tile component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Links](#links)
- [Appearance](#appearance)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [RTL (right-to-left) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[List Tile options](../list-tile.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKCUycjZsMU0YJ0LTcysbbycXeUzPbz8AoJCwiPhosqg4mDFMKHxMeGg4yenYgFpdTDAxcKiY2Z3EPbEt+cXl1dmhACsYaqULBqaxGrq35tb2406YJZrLYHH1EK5Bl4HCNAphghUJkcZnMFksVmtDlNjogttlEVjkbjgpdUTc1g8niAqi9vh9arUlPg2AA3TRsfCFSgQSpUl5M5lVaR4JD7AKwRQAZhQtBAAF8iDx+IIQBTpJBZPIxIp1fNNMBNAAZNjzAAqHEQRE0AEl1ZpZZp9JoNtiANy1HUtfVG03mgDCAGV-XaHU6kbEA-63VBat6xGakBGhJh8Ph-cUkAAKYxCGICfBbVTzLZic3GS3AWqaTSQVbkAD6qnc4jrJbESBQVc7mmMAGIWP2y5XqwgIPXG82fHt1O5KPYlh3e-2AIwAdgALGvB1AqzXR3XluR1C2vO2u53FwPiEPd-WD0fJ2Bp7P51Xe2AAKxLpcANgATFuqxYaAxDrGA2AAL0QY820QDszyrX8l1qWUAEoo3daBdTYdU0xsGB-QANQAcRDepmXcTQAHd2TsQpf03EBtEQNgmzEOiGM0Zk2EQSiACEIASQpaE0YT6M0ejnmwTA7E0DljAAWS-IQAE5lPE31vyENcV3E3TNLXAAOXSl1-GA1y0nSl2E5SVLUqzfVXIR31-cSXN-FzHOc1zNBM-1PLcnyl1s8TwL4cyxJ-A0TJ898tPfTQVyEFdLIM+AgpMrZzIMpctglJKJVyoRfwlTRzOU38ti038opc980pUlzzPfEqyt-KrCpXEq8uKqLNOKnyDPA4wLGpV5yKqdCoA9TQAEFsGwEMMxQh0qm7bdNEZFlPi7TbWWcOEYAAOSVTkIEozQoG5RBqiHHbMG0XQDH+MQzEBboQUcZxwQGDwoV8fxAmdQl8HBCAwl2fYLB7CxCwuEskFyBZyHcCpCjrHwsA0ap-XKTQVjgDsAAUw1mTQgPITQACUzn2TQtkNY0WnjRBZNBl5MG2zs+S226Nv5assGCY6BFOyibvWnb+f2oWTuMVsEapAAxShZEtEQWJEVpfHllnrlaRB1QPSIqKhTRVA0bmBV5qtdoFg7hcQQpID4CJZlkcX4Jt2Nmets8dcKGapo4LByGNgApex5mw66QF9rt1abf1tZPR3jBNMpNB8CB8GNrBjd4dQCDxpYyb2AgzqgS17pB6SRCmTQZ0wSJLRgKSXsQcgYE0CAWEz1Zs9aBY1DUCiYlaS7zpsCA53wNkxCEa0WkouFND4NRI7JtgWDkeRWZncou99RB4DAje9fu+ZRz4bRkydA6i-uSOWhEafO8zvRR0QIRjDjzsWBVtiwAlA2mgL8MAHQXrYCBD0UEX0IS-WGADMYCJMSbFmPEJILtUiYGZNJGwWwgrYCgO4XIOC8EUzApBQoIcUa5BGrKX+VY8CGxsJEfQwAKwS09lWbC0AOycO4fBGA5F+HDg1LIDsvCoC4U7oREiDCuHcPlIwzsjh4D8JUfHR6C4TCQLehYIY0IsgQD4BYGaH1yC+n6LAVB2If6KM9gowRdonGexGr7S2nMbYWH5F4vmLI7YyxFsYSgYsqQeKloLI6ssQA62qL6J+Ji8hNBSIgTxESAnS2icE9ALs1ju3CQ4r2jMfZFM7P7YwgcwDB1YZoCOUcwAxxUcKA2CwMbXTKTwrGnTknzSQOwgRzju5SWqcUAAIgbJuBFj4QFGZEDstAhBIR6bKVx8F3EOPSVwrZktMlRIdqLD2Z5bZZIOXLFO2N0wEB2ccyJ9sYnO1dpqI58ElDe1LD0ipIAqk1NDnUp+0d7HOP-sBdhwD1SaNaORAZYi5ASLZDhJG+FiIuMhZQ1OIA8xsHsHwOhVQ1me3mCUR2HDIU3h0X2S8RBIUPifNPJYvoRzkApf2ZSBlaC0CBYI1Zv8NmvJ8TzbZAqrbbLuUEjFoSXlczFdkjFcSqTp2+vgG5uy9r7IeSYp5BS-E7XeQjT5KcA5B3gCHcOALGlcu4SC2QYKQHRh6Uw6FHDYWakkYivCcjUUOtaBBDFWKcV4oJfBU5MTcwEALIzYspZY5lL5cc4VfiVX+LVfcnJoSnQ4jvMWNYUqbYyrObEi5SsAFqw1lrHwOti6z2YdAI2JsZLmy0BmO8mgxBrBQkmvNezU0YsefknkOquZ6o6c4r5PyTW1PqSWC1MbnEJxEEnCthq04ZyzjnM2TcLqYELrPPWLAy74ArlXVmtd66N2bq0Nucg349z7hAAeVxh7ENbRnGAE88bPlnl4BeVol4rzXlADe7Bt7lG3CDfeiBD7H1Pl3c+g8r431nlJeEs9H66hfo4LuPgP66G-rOwR1rAHgtAW0cBz0zDQIsXAn6hj-qjHvqEWxyIMHJGwbgpGBChBEJIYxMhSMfVUOMDQmOmh6HNINrW1hAzIVSI0d6x17hRHqjhWIN10AZHIvkZC5R3q1FyaGZ2HQegdEAiBLRvwzszEWKsd9GxQNYiWu5SonlsbB1JpuVs2o1NzhjIAPLySELoJYHcszrSUHNBaI1qXrUPWAHFmoPAVAAKLWLELxSIVp8BZhAFyHkKFahoTVJq805BFCTmw1IEgLTRSYUULQaUWxVIoF-HKBUIBeACEUFkYIRXxFamENgHEsNotcaG5G+GLNBm0pnPS-AHZKUsCjAo0bWws1ttJit4btQVtrbWJoTb43zR6iHNNz982NxriW7UIUx9Wlii4GgertAtgGWlHKZgIBG0PeoIqTraAIbzxBsyGZ2BXDz0eNINRihTNWDnNgacxjTEA4sDi-AFgAdCCByDsHqoSDFEG4oWkrXfvKgB6tkxmPEDA9WKDhLEOSBQ7QDDlHUB4fuER+jmmFxD2mNR5z845O+CU+pxAWnshcexMiATtARPZSMFlEAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { ListTile } from "polythene-react"

<ListTile title="My title" />
~~~

To show the subtitle on 1 line:

~~~jsx
<ListTile
  title="My title"
  subtitle="My subtitle"
/>
~~~

To show a long subtitle running on 2 lines:

~~~jsx
<ListTile
  title="My title"
  highSubtitle="My loooooooooooong subtitle"
/>
~~~

To show an icon:

~~~javascript
import React from "react"
import { ListTile, Icon } from "polythene-react"

<ListTile
  title="My title"
  front={<Icon
    type="large"
    avatar={true}
    src="app/images/1.png"
  />}
/>
~~~

Or use an SVG as icon:

~~~javascript
const starsSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>

// ...
front={<Icon
  svg={{ content: starsSVG }}
/>}
~~~

<a id="links"></a>
### Links

Both primary and secondary content can be set as link. For a general principle, see: [URLs and router links](../../handling-urls.md).


To make the primary content a link:

~~~jsx
import React from "react"
import { List, ListTile, Icon } from "polythene-react"
import { withRouter } from "react-router-dom"

withRouter(({ history }) =>
  <List>
    <ListTile
      title="Jennifer Barker"
      subtitle="Starting post doc"
      front={<Icon
        src="images/jennifer.png"
        avatar={true}
        type="large"
      />}
      url={{
        href: "/friends/jennifer", // not required, but makes this a real link
        onClick: e => (
          e.preventDefault(),
          history.push("/friends/jennifer")
        )
      }}
    />
  </List>
)
~~~

To show secondary content at the right, including a link:

~~~jsx
import React from "react"
import { List, ListTile, Icon } from "polythene-react"
import { withRouter } from "react-router-dom"

const starsSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>

// ..withRouter, List
<ListTile
  title="My title"
  secondary={{
    icon: {
      size: "small",
      svg: { content: starsSVG }
    },
    url: {
      href: "/friends/jennifer"
      onClick: e => (
        e.preventDefault(),
        history.push("/friends/jennifer")
      )
    }
  })
/>
~~~

<a id="appearance"></a>
## Appearance

* Following Material Design specs, a list tile can have 1 to 3 lines (except when using `subContent`):
  * `title`: title on a single line
  * `subtitle`: subtitle on a single line
  * `highSubtitle`: subtitle runs over 2 lines
  * Use option `compact` to reduce the vertical padding
  * Use option `subContent` to show any other content below the title
* A title line can optionally have more than 1 line of text when using a custom theme, see below.
* A list tile can optionally have an icon.
* Text and icon are taken together as primary content. Primary content can optionally have a link.
* A list tile can optionally have secondary content, displayed to the right. Secondary content can contain any content, and conditionally have a link.
* Front content can be reduced in width with `compactFront`. Following the Material Design specs, this setting should be used for displaying a list of search results.
* Use option `navigation` to use a Material Design navigation style, as specified in [navigation drawers](https://material.io/guidelines/patterns/navigation-drawer.html).


<a id="styling"></a>
### Styling

Below are examples how to change the list tile appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~jsx
import { ListTileCSS } from "polythene-css"

ListTileCSS.addStyle(".themed-list-tile", {
  color_light_title:      "#424242",
  color_light_background: "#FFECB3",
  color_dark_title:       "#FFECB3",
  color_dark_background:  "#5D4037",
  font_size_title:        21
})

<ListTile className="themed-list-tile" />
~~~

To show a title running on maximum of 2 lines:

~~~jsx
ListTileCSS.addStyle(".list-tile-high-title", {
  title_line_count: 2
})

<ListTile
  className="list-tile-high-title"
  title="The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before."
/>
~~~

<a id="css"></a>
#### CSS

Change CSS using the [List Tile CSS classes](../../../packages/polythene-css-classes/list-tile.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/list-tile"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
<ListTile
  style={{
    color: "#fff",
    backgroundColor: "#EF6C00"
  }}
/>
~~~


<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of List Tile content is reversed when the List Tile is contained within an element that either:

* has attribute `dir="rtl"`
* has className `pe-rtl`

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


