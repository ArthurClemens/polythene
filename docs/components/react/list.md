[Back to Polythene List main page](../list.md)

# List component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
- [List content variations](#list-content-variations)
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

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgRgDYBmAJgF0SAzASyRg1QUTAFtkaAHQALAC6j4xdFFmIVqEAB54vKAGsABNPKJuAXgA6IObNwoA9PczlZ0gK7kwScbEkBzXlc3ACNJXggnGDxZGHtsBABPVzVEe0QADzFsAXtubxhJMCirAxN4S1JZBIFpRERZKwA+CyhNMnJebFkDGE8KmztHZyDPbzUCgKDQ8Mjo2Pj4JNqoVJhZTCh8THhoVIWllIBaE0wwWTjE5JXjxFPZQ7WNrZ2VyQArGCbNe3bO2WbWr8uj0+lYBjAHE4XO5RogfBNAu5phFMFF6vNLstVutNttdhdFldEIcihjCViSVEHjjnrt3p8QI1vkD-i0Wpp8LwAG4GXj4CqUCANRnfTlcxpKPBIM7hWAaFgoWggAC+RGEYgkIHpSkgKjUsg0urWBmABgAMrw1kRzZbZAAVfiIa0ASV1BmVBjMBn2RIA3GyoEbugBVPDkC1rB1IT0GAAUptkgSQ1pgIUTsmTBj4SBE4ndAEpPQCDAZNBH7Y6WiWS+mkGZgLXEMqq9XU8FG-W243m1Bq1nKCp65pXdAW33emAvcAAAYDSHDGFeOHjfyIkJhFFomIEg4rNKZUTZRCxAAkwGzag1ysk2CgfmnPb7JcwXMw63IY9bvAAXogKlhyD8RArE-exGkfasPHKYBgE-EtjFMFADCsABiEDe2rZUILA-0oBaIMbUjR0ACk1CgXhuEQcgY1jQszEaUtQyo8so0QAwOysUioHIyjqIAIWcPQqJKLskz-ZCQAAZXfRM729CBjXwCAwBKC9cz-KwXzfZxDgYEocPw6BjRYx0AEEdBouiGM0Jjw1tVj2LEipzN4AwAGFoCgCByAZHo0ycqw+PINxA2kdjpEtAwAHc6iEzYAH5VMddSKi099DjYfTGlwgiTKQABxchTjYr1aKLRiwzytiOJAQrioMAA1DYABExBE-yMw0kA+N0IDorfMAIrvSQRqSnMNVS190pYLLcMM2BulM7BsEs8qWw5bli2rDaeS8VEYAAOQmqxKCigwvNUJo4NLTAjBMcwwVkWwISGaEPCXeFVymDcdyJQ58DhBT7BOM57BQ+wdDWEp3yA2QKgAfWCLB9CaSS6gMbY4CQgAFTEUizbyDAAJVuM4DEOQjugB0QIG+TAtpLUVNs-HaDD2qIjvEAUICiq6ML7Vn2cO46QEbJoAAlbgB8hrUTARosRAwoJgJnxWuwWsA5kXIEPXYVD5p9tvLAxgm86WjClqj6wTMSkKsAAxDo1HwXysIZw3SyqrieKogwwOugWqpcv33cNst7MdOqwDY-3+afb5y1D0t7DFd3VbTsU2c14WuZOnmDfjzOhc5rqxcZaTeDAPQEjjNzjAgcRrXt3h7ogdJrUkzBuGcXh83T9Wi+zkuKh1+IVn1xkA5NagrF2KxrSsWQoogeeJNcExgOICTuAgDxV6sPguU3jhJFEHBYzNosp8Z8tr+rISEnrM2II96takwaXrbvvtGyQ6dJJCBbD+vszzP2nEQb+rZExVwSEhWQwVgJx1flhO+Scw5ezIhRX2sdX6BwjkgYOODcE33wYgKOMc0HbXsInKe+YX5UNTizFOzM44a32sPPOZ1sDEi2OQPQhxZBz0nkg0sg92EizLo0SWwCZaOXllFRWys4y8MMIIlYfdmFqxEWwrWud0C63HsKSh4djSm3IObd+n8YKOU6nbEAjteDO1dsqShJCiJIG9lg6iRDX4mIrAQiyPiPZ+NYuQkOU8E62iTv3VhmitoxJaCTO4zUADyABZSQJhNhUVjOtJaK0wIQIwkpMAbgfCyH8PUAAomMFQfEEjOnwLkkAgphT5haPmX0OoG7YEdOQDQwRMDBEQIoEgUpEAyiMhoAALLQFAbAGAqjVCAdSGhChRG6XqdQUhuGHEhrIIpN5iT7IEY6E0LZBlVz8JQEK+AkIoW4I83CPYjn-UEgI3YBhXn7MObslRHyVhfN2ScuWbFYIYUuXoa5u9Nj3OmfC55LRJQjImYmKZaAAAcioVRcBADofQggUDUHVOIDQIMKkAyPjsbA5TtQkCghocEkIQrYChYUBuwNSbnDKfgTldxJCUpGRAGl+o6WiwSNwjQLIlkks1OS-6DcBWICpcK2lHwlAMrQEyxwLK2U6z5WcBVoh7A8oNfcJSoglUqpFSoMVVRJVoGlcqDgyogA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```jsx
import React from "react"
import { List, ListTile } from "polythene-react"

<List header={{ title: "Friends" }}>
  <ListTile title="Jennifer Barker" />
  <ListTile title="Ali Connors" />
</List>
```

The list header will be also rendered using a list tile.

<a id="list-content-variations"></a>
## List content variations

See [List Tile](list-tile.md) for layout variations, for example to add links, icons and images. 


<a id="variations"></a>
## Variations

> If there is a floating action button left-aligned with the avatar/icon in a list,
> align the subheader with the text content.
> [source](https://material.io/guidelines/components/subheaders.html#subheaders-list-subheaders)

In this situation we want to indent the list-header, and if we show borders, indent them too. We do so by adding the parameter `indent` to the header [List Tiles](../list-tile.md), and set `indentedBorder` to true. For example:

```jsx
import React from "react"
import { List, ListTile } from "polythene-react"

<List
  indentedBorder
  tiles={[
    <ListTile title="Jennifer Barker" indent />
  ]}  
/>
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

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgRgDYBmAJgF0SAzASyRg1QUTAFtkaAHQALAC6j4xdFFmIVqEAB54vKAGsABNPKJuAXgA6IObNwoA9PczlZ0gK7kwScbEkBzXlc3ACNJXggnGDxZGHtsBABPVzVEe0QADzFsAXtubxhJMCirAxN4S1JZBIFpRERZKwA+CyhNMnJebFkDGE8KmztHZyDPbzUCgKDQ8Mjo2Pj4JNqoVJhZTCh8THhoVIWllIBaE0wwWTjE5JXjxFPZQ7WNrZ2VyQArGCbNe3bO2WbWr8uj0+lYBjAHE4XO5RogfBNAu5phFMFF6vNLstVutNttdhdFldEIcihjCViSVEHjjnrt3p8QI1vkD-i0Wpp8LwAG4GXj4CqUCANRnfTlcxpKPBIM7hWAaFgoWggAC+RGEYgkIHpSkgKjUsg0urWBmABgAMrw1kRzZbZAAVfiIAzKgxmAz7IkAbhaRu6potawdSAAwgBlUPO13uzEpMOh71QH3QY06NYAEUw6yj1CsAEErNarAAhAsGKzB0tWNOVkAAUSsHATLQD9sdcckmHw+FDVSQAAorJJkuJ8IdU-dZI7S8AWgYDJAduQAPo6PxyJdSxBnAhL4KnPR+ShuTYoMsgADEAE5aGBMNxLwWWsqAJRNqBeVEwAwAaUQCWCEDOPgLYGBkqibF+ABKtxnJIwYQKI8QrCoJpsrIvrkG4ZwQOQfbYJQuDPqhUBznOMBuNgiC4fhECEQmpEGK4lqSI8qhRjOJEMT0iDSqo+AAJKbBkp6HAws6kcq9GkUxBTSE8SC-gkUYyTI8mIIpkjBLo+B9jJr7icq4niXJmwKX+faIERHFzhY6HJt02kZMp0jMaxiAsTxW58YJ+AZFJc68NwBgWZIeh-q6Zhunm5CUAA7mmECxYmIAGAAPqloGheFkVRSACVJVYVkGI4Z75clBjcDhBj8bWDBiZxDHufhiBcvqaamJgbjwLIfb6Q1pG+gYKyxT5TlugAspm0iSKIuh9o56QGAA1AYDDWuOGbrJISBQH4rgGIcq19VxjEuQU0Q9pmiB9qam7bgJQnpKew2jYtL7+ZGPF4LyQUhWFSk5WeuYxYlACq2AlOlmX-RFuXg4VJrFfYZ7wyllXkNVtX1SdTUmK1KjtdwnXdb1H1zoNL2PVGk2uDNmDpH29C8lTh0MMdXEqRd6yqDd3G8QQr3PYgI1U+94lzi6X1OoFwXuTDgNWLWZA4IgkMZXL2WRWeStgAjpolYrZAlOjmN1eL0lnR5siXTzt2efdgsHQwzrsxLBlGZxJhCbhVlGXZsDdHd3lU26nPc+5QcC49H0mLIHgkQO-Vzhy3IGNAillWYwAqSZ+BmQkyoAidyctubJ2TgIWcbZmmB09gfa6YESDWgtRFmEXxcMZoLZBqrSed4xTeIFnk6yEghn953-0j0PE8D1xkf8sAC2w3zXlR756Rz-PA1YFEAByGoVMOBBjrahwV6rIBlwPLX6jAWfWTvDHQMGOhgHop69a6jSna59Q22unbfmD1N6nhXi+G+ndlTb2fkeIS+AoHF0gIhO4SCTrSAgK1cgmBghIHQVxXQ0QAASBC5z2A7p3Z8sCuIUJvqKbklCDDswni6WybJ3z2QMLmbA2Aozf3bmWTiKdxTmxEfOPeMBD7iAFIlJo9CxQSM-NI4eVhR74MZG-XgH9GIQDXmca0VwDBuG+s4OKBh-pfj7DrFWuiDC+SDs+Bhoj+7iI-AfI+VgUFIX1PIyeBhNCKQAkBECdDXH2DFEw5xUTFHuKkZ4kA5ioBCivkw5OmAjAmHMGCWQtgIRDGhB4LwcJxj+ERCEMIEQPQUl8qICAsQThnHsOeew44SjrHIH4eoFRdxYH0E0UMdQDDbDgKeAACjGFYFUqrQTuAdG0xpakQG+JgKJETGHiWiRw2ZZw0wAHlxqSC9r5XCmyeF8IoUQcS+AIBgDcD4WQ-h6i1jGCoIsCR+I6SsIKYUz4Wh9RaDqBC2BHTkA0HuYIPFJT20nMmDQABWBUDAlSqnVOIDQhQohAr1OoKQlEz5WhaJIfF44L6OmInOPcH9DwQGPPgU855uBMoTBPYlxItjkD0BfXYBg2UEtkFcqAfKOVctkDyvlpLL4UoMFSg88D6UGHPAAFhVSywFJAg6ykEGgAAHIqFUXAQA6H0Nq6gaLNSNMeb5VqOxsAPO1CQDwig0DgkhMebAB5CgIXsJa+w9z8A+pglau+tr7UfCUFUSiGgWQqjVCAEQ6K0CWsODc0QkhrU8VomGwQjryDOusLkwYfqoAer8F60Qga7gpu9f6ytZxq1pozaG-UDqQCRs1DG5UHBlRAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```jsx
import React from "react"
import { List, ListTile } from "polythene-react"

const listData = ["A", "B", "C", "D", "E"]

class KeyboardList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: -1
    }
    this.handleKey = this.handleKey.bind(this)
  }
  
  handleKey(e) {
    const index = this.state.selectedIndex

    if (e.key === "ArrowDown") {
      e.preventDefault()
      const newIndex = Math.min(index + 1, listData.length - 1)
      this.setState({ selectedIndex: newIndex })
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      const newIndex = Math.max(0, index - 1)
      this.setState({ selectedIndex: newIndex })
    } else if (e.key === "Escape") {
      this.setState({ selectedIndex: -1 })
    }
  }
  
  render() {
    const selectedIndex = this.state.selectedIndex
    return (
      <div onKeyDown={this.handleKey}>
        <List
          border
          tiles={listData.map((title, index) =>
            <ListTile
              title={title}
              key={title}
              hoverable
              selected={index === selectedIndex}
              className="themed-list-tile"
              events={{
                onClick: () => this.setState({ selectedIndex: index })
              }}
            />
          )}
        />
      </div>
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

<List className="themed-list" />
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

```jsx
<List
  style={{
    backgroundColor: "#EF6C00",
    color: "#fff"
  }}
/>
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


