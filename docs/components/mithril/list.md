[Back to Polythene List main page](../list.md)

# List component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
- [Variations](#variations)
  - [Sticky headers](#sticky-headers)
  - [Keyboard control](#keyboard-control)
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

[List options](../list.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKWgoWjbABsKAATABGEAAXyIPH4ghA1OkkFk8jEikNC00wE0ABk2AsiNbbWIACocRD2gCShs06s0+k0mzxAG5arUza0KIhMHIAKp4cg2hYupC+zQACglYiQ9pgvgzWc07CQvAEAEpfV9NJo+KmE87XfbgLVK5W826m82cz5W0R25WWJRZCgq6nPdAG72O04hwADLqg3oQ5xQwYeWGjBFI0I4rZzeJJPgpRBhAAkwEL8h16qE2Cg7mnPagzebmFZUZsQ7E5HsbcfT7abAAL0QIdjCwch3EQYwJ3VEsHyfRx4CHRtfyfHQ9BAkALGMOC-2gCMo2AqshEoew5CEVQNGg9sYODb4w00VRE1dAApeQoDYFhEHIFN8JjONayTRBU2MVioHYzjuIAIRsdQuOwzRjAAZUWWw1Hcf0IHNfAIDAeTjBfN9yG2FVjBLWj6MYuskAAQVUHjdAI2MuIE11hJAWy2E0ABhaAoAgcgaXtYxJK-KAwBETQ7FtTQAHdylk5YAH49JAAyVO2JVTPM6BzUswSAHFyEwMBEHsyM+Ocx1BLcwritKgA1JYABF+BSyS1NKmKo3CtShD6lK0psbYAGYspDMKctaazsGwFNkMMMRWTYRAYqHVMy30KpNGodsFurYxiIgGKhD8uR5J2lCFIkNzMHk5CnwWha0JYDDgXncFHCXaFVxGeFtzxbZ8ChTSLD2OwLgsABiCxLOwicnxUiCxAwgB9HwsEokAQ1aZtNQUkBFPKTRVjgIcAAVUViAt-M0ABZc4OE0bYHS04HTInRhYInfa9UoGLzonPa3KEVsUoACUjIHyHtCVOFi-ZNAQmkucuyseayCAD3WWQBdV5tq1rcc9dQyWuKQyKvCQDCADEmnkfAaW9HC-2bHx-Klj8vx-F2EddEFtvhn28pYtiOK452fcrYObNUCPI+jxBapKwOn0YFPvRVyODcdI3I8rMpMA9i0LczQjjFt5blkdzV08rN3yCLz9vzjv9ZaPIcLrz5sE9E8Tw9r7uqtdDyW5dhOk8g43mzTqeYMDzmOcz-Xhb53WHuug7ReIfHlLYMB1EiNMvJ0TW3U0a22F0FgIASe1FMwFgbDYEtTJb9XIC1uYdeIQOheMQUBYgHWClMQMUIAgLQpBbexhr6OBSuwVkUDGBCD4DgVM7tyzpyFobC0A986m3IEhPBzZWwzkUr4bQBDNCnnduqe8xDKwLD3gfT235iE1ynr7TgHcGEMSHkgXuYdpa8ITiPER-DE5FRKqPP8M8u5zyniWF+etlGpyXmrFeR1rz4hWOQdQ2wxDAO3p3Zsf89RbyCiACWhdw4WzljFBWSs0y6K0IYuYL8QDqOXgdD+EQv58ntCYl22c7S4M4ZQmxhDi6kPxhXe21cZF13dlxf2TdvZ5zbv7IJece6hwkokweTEY5sAKVHCRE8B5yJ9jBGRISxC5zzgXIuloYnlztlXXIHCu71ylqkr2BTMk8PCWUopiBBH5OIaI2OkzylSMnl3KpLsFEuwXpdTmOEZ7qlorUPgKCID2FkKmbSYB7CuDEB4CoABRAYshJKRHdPgNyPI+SwU0NNbAZlagikQGKCUOVFAAE4ADssoNRahAMWXUWRggGmgHIBQwhsD4ksg+bR2xLIGNdGEuuxV1DuBIssIckMWAktouqWoaKXEGPWJoNFKKKVIsBjJalcxaWMoxW3bFmgfC4vxfswlmhIYABYRVkq+SQUUiBxSSi4GgAAHKC9UzAQAUXULK6g2oBCKDBgcKQJAEKKDelYA52A8Uaz4KDBm8AAACSohC0CEMNS14MOAoLUPqEgxQkWKAZCaJV6ogA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```javascript
import m from "mithril"
import { List, ListTile } from "polythene-mithril"

m(List, {
  header: {
    title: "Friends"
  },
  tiles: [
    m(ListTile, {title: "Jennifer Barker"}),
    m(ListTile, {title: "Ali Connors"}),
  ]
})
```

The header will be also rendered using a list tile.

See [List Tile](list-tile.md) for layout variations, for example to add links, icons and images. For example:

```javascript
import m from "mithril"
import { List, ListTile, Icon } from "polythene-mithril"

m(List, {
  header: {
    title: "Friends"
  },
  tiles: [
    m(ListTile, {
      title: "Jennifer Barker",
      subtitle: "Starting post doc",
      front: m(Icon, {
        src: "images/jennifer.png",
        avatar: true,
        size: "large"
      }),
      element: m.route.Link, // Mithril 2.x only
      url: {
        href: "/friends/jennifer"
        config: m.route,  // Mithril 1.x only
      }
    })
  ]
})
```



<a id="variations"></a>
## Variations

> If there is a floating action button left-aligned with the avatar/icon in a list,
> align the subheader with the text content.
> [source](https://material.io/guidelines/components/subheaders.html#subheaders-list-subheaders)

In this situation we want to indent the list-header, and if we show borders, indent them too. We do so by adding the parameter `indent` to the header [List Tiles](../list-tile.md), and set `indentedBorder` to true. For example:

```javascript
import m from "mithril"
import { List, ListTile } from "polythene-mithril"

m(List, {
  indentedBorder: true,
  tiles: [
    m(ListTile, {
      title: "Jennifer Barker",
      indent: true
    })
  ]
})
```


<a id="sticky-headers"></a>
### Sticky headers

To create alternating sticky headers, the list header gets CSS property `position: sticky`. However this property [does not work in IE or Edge](http://caniuse.com/#feat=css-sticky), so its use is a bit limited.

If you do choose to use it, add some styles to the container that holds the lists:

```css
.scrollable-list {
  max-height: 15rem; /* some height */
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  /* prevent that the scrollbar gets obscured by the sticky headers (!) */
  position: relative;
  z-index: 1;
}
```


<a id="keyboard-control"></a>
### Keyboard control

Sometimes it is useful to enable selecting list values with the keyboard, for instance with autocomplete search suggestions.

Visually, tiles can be visually marked using List's `hoverable` and [List Tile's](../list-tile.md) `highlight` and `selected`.

To give a list keyboard control, it must first receive focus, either with a click or from a parent element that has focus. List Tile elements can receive focus because they have attribute `tabindex=0` by default.

To keep track of the selected element, wrap the list in a stateful component. The component will also handle key input.

In this example we are creating a list that accepts a click to create the first selection, then accepts arrow keys to move the selection up and down, and the Escape key to remove the selection.

A more elaborate example is given in [Search - Results list](search.md#result-list).

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKWgoWjbABsKAATABGEAAXyIPH4ghA1OkkFk8jEikNC00wE0ABk2AsiNbbWIACocRCadWafSaTZ4gDctTNrUtNoWLqQAGEAMqR92e72o2JRyP+76BzSqBYAEUwizj1GMAEFjPbjAAhYuaYzhivGTM1kAAUWMjBTtRDztdSaEmHw+EjxSQAApjEIYgJ8NsM2JthKkBXgLVNJpIGtyAB9VTucRr0WIcUENc+TBgdTuSj2ZYoSsgADEAE5aGBMCw78XauqAJStqBpgDSiEiHwIBsfB2zjQcP09KoLUXZdoHNa45DjBcoCXJdd33fAAEllkSK9thVWD1RTJdYLTEQbiQf9IjjN19GglC0Lg2BWjUfBEjjRDECEDC5Gw3CEhItC2BYTRB249QAM9fQvULchKAAd0zCAFLqEBNAAHw0zQJKkmTZJAZTVOMSDLSsa8jLUzQWAgchNCwhsVUI1CmJ0oRsF0VljUzPRMHseAxAgoSmLTOYFJw9iEjjABZHMRCEPYoEHNiOIAak0FV7SnbNFiEJAoHcOxNG2DKv1gpiuJ4xAxT4iKOK9MK6sE8rY2qvAOVE8ShEkmj9OvAt5JUgBVbBci0tyeukgyRpMi1NHM4wZvUmy7IcpyWqXbiPMQLzZB8lg-ICoKNuY81GoEmK4oSzAEkHegOQukqVTKlyKsWOQqpqggmrjc7IuC1r4HakSxN03qZOvBsyBwRAxu0sGpshshZrMiwkbAXIVvsxznNctp3u43jvour0CIB9UiO-JddDERxUMYtDWTYRAFKvQdLRzMRyBgd1IPomDXrQtMif4yLOIJz691qgSAepio6c0PhhxAQU30FpjLWgHr8BUqArwo5YqKkzUTqXJX2xLdXXIZvGmKA8h2PIK8DqBxAiFN1zZ0QEF00dHLMGu7BB0HCUxCQe0UoSPmvlt23zcdMM3Y92Obdj23Q-D5O05Fq9I8RkWmvdq206FrBggAOR1K9jDHAhJ0dGdXTVkvY5240fdTlvXOgZw2BPNno-xnNCeqqXibFr1I6z2OTeLlvz1w-Ary5+wk7nkvID4bBjzEZfyFXouu7xkQIC88hMB8JA94P6fbbUEIAAlr7Xo+0Ip9fXI-W+v4-9-Y5-vGL0mJ-3dCmYitQAzwVaAWbA2BkIQLEEzFmA8oKaHzILJWI5FIVnQUxQwEhlaji8HOYg15wyqBPJoMQEA2ij3FPaE4mh7DtRsIpTQPUeaDihk+bAbpqGaHYrxL+IAPyH1cpgvUm8IhzFkDgj2StqJARAu2ABrlGCqKXOosRZtCGKSEFAXksNSG4LQvgiRmB5wtXwfgnQehq4mDEGYEEPRwSOGcFCQYHhYSjECD6Ek7E+AQDCHsOwFwLA3gsFOZu6cbDuAqPYw8WANDGAQcAksIBIzlE0KsOAV4AAKCY5jWVspoaK5wODFQdOaAJEATItS0bBRg75vx8AShAC8gUdZgHsK4MQHgKgNgGLIUskQsL4GVjyPkojNAwOwC9WoIo6ESngooeUAB2FAayNRahALwAQigsjBANNAOQChhC8PrnaWo7l8RTkbkgAWS4jwnjPO0y8mgbwsC+WA65FyVjkHUDOdYmgbmXLEEXUF-zAXUKKaCu5XtHmaGeaeBeS8PkABZMU-KgIsmqkouBoAAByyg1MwEAqgNAEuoNqfZaAQkHCkCQRwUg0DAlBBebAp4sgQD4BYelFwAACSohC0CEAAZj5eU+ACU1D6hIMUXhigGQmnVIwdUQA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```javascript
import m from "mithril"
import stream from "mithril/stream"
import { List, ListTile } from "polythene-mithril"

const listData = ["A", "B", "C", "D", "E"]

const KeyboardList = {
  oninit: vnode => {
    const selectedIndex = stream(-1) // no selection at start
    
    const handleKey = e => {
      const index = selectedIndex()
      if (e.key === "ArrowDown") {
        e.preventDefault()
        const newIndex = Math.min(index + 1, listData.length - 1)
        selectedIndex(newIndex)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        const newIndex = Math.max(0, index - 1)
        selectedIndex(newIndex)
      } else if (e.key === "Escape") {
        selectedIndex(-1)
      }
    }

    vnode.state = {
      handleKey,
      selectedIndex,
    }
  },
  view: ({ state, attrs }) => {
    const selectedIndex = state.selectedIndex()
    return m("div",
      // The container catches all keyboard events
      { onkeydown: state.handleKey },
      m(List, 
        {
          border: true,
          tiles: listData.map((title, index) =>
            m(ListTile,
              {
                title,
                hoverable: true,
                selected: index === selectedIndex,
                events: {
                  onclick: () => state.selectedIndex(index)
                }
              }
            )
          )
        }
      )
    )
  }
}
```



<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the list appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
import { ListCSS } from "polythene-css"

ListCSS.addStyle(".themed-list", {
  color_light_background: "#F57C00",
  color_light_border:     "#F57C00",
  color_dark_background:  "#5D4037",
  color_dark_border:      "#5D4037",
  padding: 32
})

m(List, {
  className: "themed-list"
})
```

<a id="css"></a>
#### CSS

Change CSS using the [List CSS classes](../../../packages/polythene-css-classes/list.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/list"
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

```javascript
m(List, {
  style: {
    backgroundColor: "#EF6C00",
    color: "#fff"
  }
})
```

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of List content is reversed when the List is contained within an element that either:

* has attribute `dir="rtl"`
* has className `pe-rtl`


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


