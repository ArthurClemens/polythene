[Back to Polythene Search main page](../search.md)

# Search component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Search box type](#search-box-type)
  - [Icons and buttons](#icons-and-buttons)
  - [Logic: storing and clearing the value](#logic-storing-and-clearing-the-value)
  - [Complete example](#complete-example)
  - [Result list](#result-list)
- [Appearance](#appearance)
  - [Shadow](#shadow)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Search options](../search.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgdgYA4BdEgMwEskYbQomALbI0AOgAWAFyHxi6KFMSLUIADzwuUANYACCeUQcAvAB0Q0qbhQB6G5nJSJAV3JgkI2GIDmXJ84AjMS4Iexg8KRgbbAQATydlRBtEAA9hbF4bDg8YMTBw811DeDNSKVjeCUREKXMAPlMoRrUyci5sKV0YN1LLazsHfzcPZVzffyCQsIiomPh4qqgkmClMKHxMeGgkuYXEgFohPwMeaLiEpcPjtvh9lbWNraWxACsYerUbVvapBqaoFoUH5dHrmPowWz2RwuYaITxjY6BYKhTDhGqzc6LZardabbZneYXRD7fIYwlYknhO44x7bV7vEB1T7fDp-Zr4LgAN10XHwpUoEFqjM+HM5dXkeCQYCkIVgqgALCgAIxK+UgAC+RAEwlEIHp8kgimUUlUhpWumAugAyogHGAJERdABJQ0AIWcUik0EdVokmHwEAA7rp1bpjLpdkSANyNRpmzpcQ02u0SK0ANQA4mHdOYWpzvLpA7ynGZTOYAEzysuFKpcbzSUsVqtlkC6TlcRCB10QFKNkC0XQDyu6SvV4XYTBOXR8scAWSVAFYxAvdKqJPsxAwAJy3MTl5gb8sMADCi7E8qVq-Ly63q4AbKulWIVffdFvl6+l1vL0qAMxiWhb1-N8P1-K1gK-S9gPfFdINfGD7zAJ870vAd-0AjcF1veU91-fYnwXBh4D3Bg92YTlNx3FccK3LcABly1oc9byVHd9hord9gXAAvIR9gfWhj1I2gf3lXQVxVMRaPEkCFytYTLxXBCJLEhTVzEhDJOk1VZPU7ixxsJkvnzBoQBjKB4x5N1MDAbR0yzcNcxgfNC2LCQ+1HFt9EQOsGzHTzCnbTtu17McByHMSAvHScJGnPtZ0Yx8AAlSOYX94CXLCuJvOilXLXR5VuZhdGK0rV3PJV8IqujUuAv8ksYzl9nLfSW0M5kTPMczLMTaBjyQBx7OzJyXKLfAS385sax8+spA8qbWyCrsez7cKR0ihamQnKcZxbedbzvaqlVIrCZLy1cmNOw6Lxkldrp-S6WPyiSToOirVye1d-xu46bw+-7ftOv93ry1rzHa4zvFM7roHNXqoFnRMhsc9RnILMaJpbKLvN8ubJrHNsO2W0KWzW4coq2mK4rnc7VSQsQ7wEkcpM4p9f0iln9l-XLYLAWgqsZqr2a5kWwKAsR2bfcTOTvPnysZ8rJeA5XeKXPDfzlvDrwXMSl0qtXxOfK1DoYdTdBN5KF0197rwYfLDvLYCHxN8s03LJUJHLJr-33MAfYPc9irvLmJfN-jN3LdcnwYMGQAhtHodjCzYc6ChbSUZM3AkAAxDt4HwbMAAoAEowzqC1Gl0XQeqTW0s+zIQxCkchnBWQv4cz+17OL8yq5r6BXRsvRw0b5vW6kdvrNs7ve+rlOrL6gbyAbpuW7b+H+rrmfK7n2AE0NRGwBXsf14PpHMx7pO+-nwfbPdT1oGzYAd6rpaUF0QvLUnZuYBDUvjD+FXIBughCFxdAPD0XooCOmflAYBwD4bv0tGjd+8Nb56E1C-eBWhtDvw4JsPARAsHAMQJyY0EILS6GgO4RMuDdDf3ILkAaZCQxELgfA9Uxcd7qnMjvSym8HD3ygU-LBb8P5f09Iwv+ZdiEgLAW6SB3oK7sPgQvKASCuj5lQYaARy9MEqOwToPBBDEBsNUVXUh5CNHUM0LZd+DDcjuDrqw2RnDuG8PYZZTuEhwFwPDLA4BYiS5lxzAYquoDfFCKUQE8xiDKEoLUd4lxYSgFaBsjKMh78x6mNcVw9hPCr673NIfXxIiDFBP-uXWRESFEP2gco8xaiNEJPhofZJjS0nSi5IgLJLcckpLcfkjx1895dFWEoMpgTNjOB6TmEA5gzFAIiE6KA2APRWnGbM5w6wjBaAIIsvuS937BIAWMyciAxDLNWeszZn82zTNmeYBZugOAQDAK3XpMy-4HN0Mw2ZJzy73CUGITkDzhrzPmUMneO9DBSFcHAmJr8ibHIkT-aRpzEVAMsqC+AXzwxAouTimZs9gGwvhXI7xjoADyAQXiIGlGIVEMA6xQELrIquwB9GNMxaopQKQpDcEQPnJB7L4FYACEK9+5hvELNFcAvqfooDeH+ZaIlpiug1BWWsqQGzznovLmylJjSCUgrBeGNVPzGlVxNVc7VuqJn4s1dcnVmy5VAOLpa8xFq3VcqtQERRsARVGvgVAbYQarXwIla8ww79QHeN8R6t1wDMAcCUOQWNhcSmGjyRGquvqI2vPeRQnlfqjAQBjXI9BUT6mWj+e-E1fzvlJqASmtNGas3QBzbm-NVrC2twAPockcLEcNuaq5RvLbM0BVaA0wN+baTJZzgWNs4Z6xprbEDprkbo6tc6nEOHrZsvIS8-7Np7Y0od5RR1jonRW6dQ9d2ULrUui5K7E3BtURurdoCd2zsofurdJqAOno-UA9UPq11ANvVOwuvp-RBi7ao89LbJHvBScXS+BjwNQqgAU-4Xi672lzkKgu4Y07nO8cR-OJcPGWQAILYGwJMwmnZjmVN0NQLBoDzBiEoIGMQoalDPM4yk7jIBMDPJLVXAwRgpUWE9P0KEQwnHwh8IiSYoRIwUnwHCCAUQjhOBuDYAAxF8QjEhZXBtWOQZVUg5P9oCFgHQTyBmOmldUeh8A4DvwAAqYkSC88tuhEaGZ4LofY1pzPTl0+YRDuhWDvuAWJ3jQZhPVLZXqGUUgkDPPcymWLnrkuQCEDEJYihLONLjeZqj+A4tVziwlxZrBGh4caI3IQEBtkTwDO8zwUgfA1AAKIjEUK6WITp8AZYFEKD1ugGPYEwxKIV9KZSw1UAuWgKBfx3g1FqEAggRCqDyOEA00AlAqDQBqdgIBNA6D4Cgag2pDtoAMycOQJBXByDQOCSE2zsDaG8HkCAQgbCvZuAAAWvExX8oPrg8DEEcKA+oSDlGwLqFkJp1SsHVEAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```javascript
import m from "mithril"
import { Search, Shadow } from "polythene-mithril"

m(Search, {
  textfield: { label: "Search" },
  before: m(Shadow)
})
```

This creates a search field without any icons, with label "Search", and is little more than a [Text Field](../textfield.md) with a drop shadow. The field also needs search icons and buttons. More on that below.


<a id="search-box-type"></a>
### Search box type

The search box can be "inset" (default) or "full width".

An inset search box is presented in an area / box / tile with some surrounding space.

A full width search box is a little higher and visually corresponds to a toolbar, and in fact can be displayed in a toolbar.

```javascript
m(Search, {
  textfield: { label: "Search" },
  before: m(Shadow),
  fullWidth: true
})
```


<a id="icons-and-buttons"></a>
### Icons and buttons

The search component does not include any icons by itself - providing those is the responsibility of your application. 

To choose which icons to show, we first need to look at the possible states:

* `none` - no interaction, no input
* `focus` - input element has focus, no input
* `focus and dirty` - input element has focus, text has been entered
* `dirty` - input element has no longer focus, entered text is visible

Secondly, buttons may be placed `before` of `after` the input field.

The states are set in the `buttons` option. For example:

```javascript
buttons: {
  none: {
    before: m(searchButton)
  },
  focus: {
    before: m(searchButton),
    after: m(clearButton)
  },
  focus_dirty: {
    before: m(backButton),
    after: m(clearButton)
  },
  dirty: {
    before: m(backButton)
  }
}
```

Not all button states need to be defined.


<a id="logic-storing-and-clearing-the-value"></a>
### Logic: storing and clearing the value

See also [Handling state](../../handling-state.md).

To add logic to the search field, we will wrap the search field in a component. We will store the Text Field state in our component state, and set the input value programmatically. For this we will use the Text Field's `value` and `onChange`:

* `value` - sets the text input value
* `onChange => ({ value, focus, setFocus })` - receives the latest state

Text Field attributes are passed with option `textfield`:

```javascript
textfield: {
  value: state.value,
  onChange: ({ value, focus, setFocus }) => (
    state.value = value,
    state.focus = focus,
    state.setFocus = setFocus
  )
}
```

To clear the field:

* Set the value to empty string
* Call `setFocus` (to refocus after clicking the button, leaving the input field)

The back button clears the field and removes the focus, setting the search field to the initial state. Remove the ripple (`ink: false`) to prevent a ripple after the click (it would seem like the returned search button received the click).


<a id="complete-example"></a>
### Complete example

```javascript
import m from "mithril"
import stream from "mithril/stream"
import { Search, IconButton, Shadow } from "polythene-mithril"

const iconSearchSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/></svg>"
const iconBackSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>"
const iconClearSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>"
const iconMicSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z\"/></svg>"

const iconSearch = m.trust(iconSearchSVG)
const iconBack = m.trust(iconBackSVG)
const iconClear = m.trust(iconClearSVG)
const iconMic = m.trust(iconMicSVG)

const BackButton = {
  view: ({ attrs }) =>
    m(IconButton, {
      icon: { svg: { content: iconBack } },
      ink: false,
      events: { onclick: attrs.leave }
    })
}

const ClearButton = {
  view: ({ attrs }) =>
    m(IconButton, {
      icon: { svg: { content: iconClear } },
      ink: false,
      events: { onclick: attrs.clear }
    })
}

const SearchIcon = {
  view: () => 
    m(IconButton, {
      icon: { svg: { content: iconSearch } },
      // make this appear as Icon Button but without interactivity:
      inactive: true
    })
}

const MicIcon = {
  view: () =>
    m(IconButton, {
      icon: { svg: { content: iconMic } },
      // make this appear as Icon Button but without interactivity:
      inactive: true
    })
}

const MySearch = {
  oninit: vnode => {
    const value = stream("")
    const setInputState = stream()
    
    const clear = () =>
      setInputState()({ value: "", focus: true })

    const leave = () => value("")

    vnode.state = {
      value,
      setInputState,
      clear,
      leave,
    }
  },
  view: ({ state, attrs }) => {
    const value = state.value()
    return m(Search, Object.assign(
      {},
      {
        textfield: {
          label: "Search",
          onChange: ({ value, setInputState }) => (state.value(value), state.setInputState(setInputState)),
          value,
        },
        buttons: {
          none: {
            before: m(SearchIcon),
            after: m(MicIcon)
          },
          focus: {
            before: m(SearchIcon),
            after: m(MicIcon)
          },
          focus_dirty: {
            before: m(BackButton, { leave: state.leave }),
            after: m(ClearButton, { clear: state.clear })
          },
          dirty: {
            before: m(BackButton, { leave: state.leave }),
            after: m(ClearButton, { clear: state.clear })
          }
        },
        before: m(Shadow)
      }
    ))
  }
}
```


<a id="result-list"></a>
### Result list

A search field is almost always combined with a list of search results.

This can be created by combining both search field and result list in a stateful wrapper component, where the wrapper keeps track of the current search string and generates corresponding results.

To add keyboard control - allowing to move from the search field into the results list and back - can be done by reusing the [keyboard list example](list.md#keyboard-control).

The basic setup is:

```javascript
{
  oninit: vnode => {
    // ... logic
  },
  view: ({ state, attrs }) => {
    return m(".container",
      {
        // The container catches all keyboard events for both search field and result list
        onkeydown: state.handleKey
      },
      [
        m(SearchField),
        m(ResultList)
      ]
    )
  }
}
```

An elaborate example is available as flems:

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKWgoWjbABsKAATABGEAAXyIPH4ghA1OkkFk8jEikNC00wE0AGVEDYwCIiJoAJKGgBC9jEYmgjqtIkw+AgAHdHQAZNgLUPhsQAFQ4iE06s0+k0mzxAG5ambWpawwsAMJWq2RhaxpAFq0JpMp1GxcsZqBsPgRWyaFaLTQsSh8TTGIQWSBrcg0+u1XNictCf34K3FJAACl7MQE+G2qgWxkdwFqmk0A4g5AA+qp3OIDz5MGB1O5KPZligeyAAMQsF8b2rqgCU9bHpcQE6nM4lIgC56kuBCrlG2wSkgG4Wtuu4IPuR5sCeYgHqKiDigQZ4XleN53g+j4AJy0GAmAsERb5QJ+I5QFmHKGjadoiFaABqADiVbGA0rLuJogacnYRiGMYSoACwibkZQoeIwmiRJIkgJorJsIggauhACRySAtCaLp4maOJkn8tgmB2K22kALIqgArEINmaCqYkiNsQgAOxEZcQhKgAHK5SpuXmtlCGJKqOUq9lEY58qOSqQgqmFKoxUR9nRZodlEYlADMQi0FFWWaClDlZVaBUZWFBVFelQiZWlVVJWAcXymFuk5Xlrk2VFYneVl2xxTZbnwN5bneT5rLuZ5DndURREhkqtAhVFKqeds01EdsNkAF58Aqel5iNtCJWJ6WxTVUUOUVVoHWFF2pQ5TmaNdjnHfVcUzc9hWpU5m3GRYdJvLxNQgPW9FsG6uFsZxybcTAvH8YJIjaUZinaIgMliEjCm5CpakaVpxm6fpx3Iy8pnmVyxmWfNsUABIjT5WXwHZnUbZFIYqkqmhiZcPmaLz-OOSFKp9ULIb0wVKpZTT82stsSo-Ypf30oDxgg9A5pg9AeZIDYkNccosN8QJ+BCcZJNKdJqGY8ZymqepmnaYThnE1jJlmSIFmU8tmjyqLKojZ1J0c45C2B77oUnQ54eJaHS2c-dAdRdHjlx45OUR-7kUp9nmeB5LQvhQrxhKwD7hA2rsCtJrUCWWDevQwbcPG6binm6j6PWyjOP2-jilOwZ5t0mTHsU4p1mc05jVCPKMX6WdItZcT89ZezDk2WAcpNfKC9idsvX71a+VCIvhXpay8ob4LM+CyfBV39tdn75fvURTZx12cLj-VSqVq+25H1-1puvVqBcIpuU5r7JUBUYp-yVKxVUIglSyxyr5MAKC-IhV5tvHK0CFTuSVC5OKbki4gBLobcutRMzq1aBQW0cgmJOBEAAMVUvAfAVY5wfiTFUOCUAdyg0YraRhVY+BCDEOQewCw5zVwYfaSGX54ICOgK6XCIixESKkdXFRl55H1n4dQhiWsdbkDUeIyRYhpGGm1kI3RiiDHV1rmAUxGiLEOLrhxBR3x9GV00No9Q7pPTQCrFuPhO5bZqXvHOS0ZlxEwATFw-QXwwlhL4HOF0yiPReigJueCySdzV3vJaQ294tGqM1LkvJah1D3hYKsPARAKnJMQKyY0IILSaGgM4MG1TNAxKHEIHWLSEwNNCckz88F1S0W8eaaxNgAlZOCRU7ukTomeiHPE7hjTNCpPSVAeZ3peF5LCQU9pxTDFQFmSY8pozKkaBqXUxAIyjk7maa0wpHS6KqEvPePpmRnBCOGVs8ZoTJmUNCfRWRIhdmLJucszQnDuE9huTuHZbpMkHJCc8857yzkyKEfaQFyLjm8HFGyRA94zGPKBR+CZUyEI+McdC5MmKwlwoRYkpFRzUUZMCdkw5zyTlFN4iUw0jjCVYrUBeCULSKUSKpUS4FO5QVePpeaa4cgYXJNZKsew5KHxUWSSEJ0UBsAehnGZPVt58B6DUAQJ5YT-k2EiQknh6rEBCCNSas1iw5BROUjqvVxhYIsAgGASRsrdXxPtTuQZer2Wup9e6z1pqxDmt9ZabV8BdX3iDcQDsobw0dgeVG2l8F4K6DEI4PhLKdxstWbEjZHKa1hKsByOiEA9hQD4pmyNNx81hriVOAg+aTG6BgPYeArQ1ytESMkJAKAtn0R7fGZMvyhDLs0AAQn0MmK1Nq5jsIAPy9LWZkDd943XroDXovJFaq3bLnJCx0AB5HwDxMJiEnMEFCUAFxEp3MAa5WLm1HLkAkMQ7BEBsMKVso5WAfBQZzSASFBqsVhK1n6LtcaM0BsdMm71FrG08L-WhvJl6N3JmXdG0jbRE0eoqMalNaaV1tAY161NibqOkdbRhpY7h4xkXgPAc8l5en4GtewkNo7EDjsnZoadmhZ1NnnbB55a7eNYc0AAMi0ye2JQgNP8b9VR1jYhGMEY1YqmjH4uPPKo6p5Jra1CQE7XxeDUHenLFbHoTAE6xCsQDWJiTI68gyb8-JqMimkjKfJQ5sJ7n4A-NPQMzACH4CaAAD4ZYfCh4gcWdzWtqX5gLWa9VrsK75ydJXdW2bGbVsJPh0WwBg-+vJUB1gtZow1vQ+49WpMhbsmz+WwnkTkOQe8qTGWGhpa1urw2Q0Ds611zQCGpN9bnH4-ZfLLSxovXR2NJbZt5NG4gcbD6pvQBm11oDNGFuSIPCyWwkQltddW71ibG3cJbc3PJ20MraMWoGX9+Mn56tHJO2d1JlzvvtMdWdy9cP4nDZu6Rx7xQXs0be7oD7m2ms-d2wDuQQPMBDNB8NncEOPvQ7x7D4xe3AeI6s6R9UcWUfPKx+t30-ogxXeeWz5Jvytkfk8WM0t1FaIQvxcw1h7Dky0ItZClhUH8CcIlwYtsmAxxVlfe+8UQh1CIEiDAOcGvPH0Qq35yFM4mhdv1j4eAqswX0T3OQAAIryKsLvqsyc2aE1JxhBSwWbQsICGOdwibwhAK1eZEJnYAAbkHcOeOcAASYAXuA2ZAeBANQIEGkgA-J+OPtnm4iCQ+JbACRUPJMtuIcvYlK-V4a-ua15AABK-o2CFuMDZWgABSINNyWcgs8VQnx8u5Ax8HL+DhloJRiCQI6DPpWYB4agx+u1HybRilaJ+X3KK5w-jjDkm58-F8VOcIiGAAA5HUSGwIrmnVBOMTfOzQDEPeF37uLHL91TAIbNyLmpk4oTClAsgEa8qhq6+WE+A1GIgEALS5AqW86mglK1GrysgbSIGHyXS3yW+0BlQQ+Eyo+7aPikKAA6vsG3mFpOnEsmPGvynYj4m6pqmEngMxN7khk3hhDAZwZoHuuwAetRnwGZPaDJveNQMwBUjwXIPgGOMatagkPeH1PasqjuEwWqhUJCt7lWHMIGDoRyiRmwXRjIQQPIcsIkFWCodISYQQQQAYZoHod7tRpeiIWIGIXQY4WpDodug3LkDpl4foYFr4Y4ROg7kSsehrmOKpkICIdgHOAbpEIiokbEaISIHOHoZoNQe4AAKIJDxFx4AB6aeThAa6oxeD4bAxgwumgx6iRmg94UAYRvORyQg7Ak6p2c4CQiK3RIRTRQmLRYSEhjA8EIunKpm2hAaJuPmluUu1uag7gYxGhrQmG+ASAAA0oblWCujws2qDBYd0cmJeqYXIVGAoYkDevkiwPCu6vUTug3AAILkCUCBju6Bh1BKRZaKb65bH3EPhvEfFcKWitrGAAm5BSbOg5EJRbLurYC6AtKyCu4zGTqq6LoGJ6HnGHFtqKGaAADUjkmgCagObhHhQOXa5k2wjkqmx6fUqmJSBxeJjklxxhgOJx5hOJyYGJBxzJiYUGeAHI1xc4txvxO6D4TxLxAAqtgLkF8cKUkX8cYFKdUe0iCSAEqUpBCU6FCSqDCUIHCRgWIEiUViiWMckvRFyRydiZYZSWFEoJoLSa1jSTqa1vSTiTacyTuMcXYacQsJiboWpJiTyYpvAPyWwIKXKUmKKcYDkUaOQMqdgbCfCcaEaZVhYqaWwVoVLt7nOK4WkTJtQGoIoYwOmbySGfGGGTcT8fKVGSADkWQDgIgDKdlhGQqbWWQPGZoKqXWWAOCfuJCdCUSomQaSmX5qiUSl6TvmYWcQycmH1DyWLuWhUPes2nWnpusnvk2lsneuQHwv7nqIaIsLanGXlq1tgY5hYJoNGGUPSoeXMCYmRO4WUIOkJpoIkT4BADYOwgaXEhCe+eZOwcIpBmwp5uwmOuFtOnFtAIkQGO8feKsRsYbqpvzmEtQHFv1lLkrmwi+m+h+l+jAD+kYaRoBmDmEmec8glkhtGJENgAJrHo4TqE3qRoZthv6qVkRhMVmVMcugActt5saf5gGveBbpOlbuIgscjiRZ6bYZOfgN7uTrUe0suvTkTicTocPrxY0WEXFsLiRbmY+TJmSe4HYMNseqkmOCfrxZfsELfgIPfmUMuBBOuCebxe+eQK3hAZJWEtBOIYTu6iSU+akfEXOGfo8laQkC6uMZZboBalPvuL+FEvJckiFSMolQ6rHt7m0hrtQCFVIUdliica6ZYX8RORvj6WZgcZ5UctANvh+s6oiiVbwYFsmCFalUztZsjoMVippUJqpiMUSiWRMu+Grj4g8dgNgKwWyhFahTcnuUIC8bBNNVyiBGIl4DBHmsYJCvDOZGBXJgppSZIvGDYC8a+YbnEl6NsggfGPYONX2jBXyjGWNqgRAKxjvo6N2Q2U9d5jIdUbZrNUAesLIIxSko+lLpQXYNQbJqEJ1ZoIMcWcIctS8UIO1nIAtVsnuZgEHqpjoHoEhsCKCL0BCP8tCB4LCKMIEKmCSNanwBAGEHsHYBcBYI+G8FLkDTuIsInhUEhmeFgBoIPkcpqDluUL0iGRAPeAAAo1hzAha1z00cD2nWhS7ebU3VEVJw3wR9XKq1CiLU23gWIBhhquCfr8ZiA5EDCyCuiRBOgq7GA8h8g2aaCjXYCeIigEGShcBoBQJESygahaggC8ACCmix5Z5cAkAHnGiKCJDNitDCXZhlogCrBgyID266rGASHiT0DOw+SOhKg2Q2SOgqi5XqHx2yBsAACOuqgYIgXgjZqAmg1AOdGdUCedhktk+dhdD4mA5dGNtddA2dudfdzdBd9qxgnd9g-ANgtqqdddHMbkA92dHMbdw98dm0jgNdadYkjd-dhkW9Q9cdCGKEa9dd4kzdx92d80i9e94Y5dh99dW9Sovk+dRE8oF9oSxg9uuEU9vdekjoGdu9r9IA79dEZQtw1Nywn9OdJ9WUJ9tAg97db9pWn9Gdm9sDS9ydzSAQSAfIEhksWdXMWUZ9z9jkcDADLxHx2D8ozdYkSojoVDL9RdjW5A0wgYEAEA+A4D99+dPkYk+dUDdDD4ZE1qYgaDn9REg9NkuDSUv9xD9ovQugB1n9M9c939RDS99ooaCAFq4DKov9MDjoWUUjqj+4qw4DO9AUjoPkBjcdkAO56QQYp2wjPd2jv9YkRE2dWUs9KjVj+4sAHA6gJjJ9YkuD99lj-9fwfAcAZDR959hkGd8oITRdYAkQSwiDSjEDfDAeNg6gDjEhSDPDrjnj-9Kw5A6giTyTPdv9WU+TksVTxDRTV4CA1qUAlAbDjjXDPD3DsU6TIAdT14mAkQCj8oVTgz+dwzBTRdPTug8gKTIcuTYzD4EziFjjozSUQzNTS9dT6gfo6gVRrTVTDM+dtAHjf94zmTIh-Gsg3d2DlTP9eTXTdTCAZK145QkT1APkg9hzNDRztTmTRjWG-j+dG9NzczGTxT+49onICjNk+D6UjdtAHTxz8zmTugLTVz+TszCLIL6gMAqwoD4DWU0Ltkv9HDwL3TmT7BTzUzjjYkBLPkEj1LdzZLWAcg2Tdd4CjozUtzJLdTMATLiAvT-TPdYkHjHkjoIrXLjLFqTzArEhQror+TYrGLpLxTla5A5dOeeA0z80hD80azcddTKkCAFQCjgTQLqoKodz5QY1VS-zMTALXz6zlrMA6gkQLLX9y05r29KDerjY-LCjujIc7zXrhTPrug0r09-r2jgbdzrD-G5Arr+jALHTaTJL7AugPgTQl4CjbkuDi8ej8LxDtjSB8Ald1dNrDd2dgLKbvWCwFLLzubac+T9birLA9g9o+FlzR9W9yDXT7gmAagMArlEA7Djd0TwTPb8BCwJbKNPd4kQTJrnrPbDTZbrdyjir7gDT8gzTWjEjFDej1DJLvrjjD94UEjx7a7kzLzRLuD8TD4tbkQUGawgYWb0LybsrB7obCjZ7X7EjxD8BcwkQ1qT7M7lbyb6dXT8BZg1rM7O9EbFjXThZbASwyL4D-rRE+7aH8HywKEQ7PdbkzdFTN7xgbI+4Ybt9J9d9lbirmzmA2z4DIHCbz0hHIAWACJreeLjdDH5bJLLH8greydMAIgZbIHYkQbRdWA7xtbn7SbNk+7THLgnSVdL40AZbve2dEbxDx44grr-sL7SUbjcn6M1jxjwHV7+dZ7GnhnSTLz990n5HonD4mnYg67bCm7rD97QmQYJjm9jd2jXTjnh7adCU89HrZrfn6MknVLSbWUdL+bS9-nH7M7QXLdIXSXirjn2AUHadO9Pk+7y0BLFnqE2L8AuL0Hg9cTZnuXBX4g5LF7n9WUuX2b+dbkBnhXzr2nvDMT2rqn3H6MPLkrSBpHCUVTWUhDtk+XcXvXvLUrCjy0PDo3ULYXhXcgUG2nbko3T9Z9lXE3qE7nj7KnJ94kYXAgmrXbR3fLtXPd3X80zd3XaXtq1nV39HTHZzxoHbZHprO9xDIhPILzHM17QLiry4XeIhXd33k9jjtA+713TXz3BAwPrrsz0PJLQP9g1NjCELrThDbzwXXTKPTYjgKQN9TkRzC9Ldur-9ePNXzzn95XjkCrksuPcPqPfXzLCDR7BLcLbjP7S9lPcJCxEXOTfdv9b8jPLIqPKrar4YN9bLMT+T80sXcdePBrmDyHjjM089PD43ivnIDYqErrOdfd+dpPgPag7h0VfAdHdnQvuPUYkQlAGrpXZ9QTBvyPoaZE+FD3B3EjPkHrirvA2q2eU7N9oHxLOnXT-vpH6L5nS9DTWAYAwfC3zskDTHDzLSn7p7-3JLqfBASBPgfrRztDmgHXirvz-GNrSU+HXTpfp2BANrozKf6PKLR9KoEjpPqoCv-9pkSAznjTW7M70XbjDXTHXf531PjjMnfdvvE-JLI-Ev9g6rRPeHXPy-M-qw6Dhr4itfiXVTxvb7irpkpkSTJb0pjvhk1zLdWvnfto9opqr4p-qo3v9nxgNFEiKHg9+L7Ll-RdGXvNp-y0UPtAL-g+BSCo92GvvWnvfV97EMIggYPjmz2wZrcz6UXYfgTzWrYNj2pnElqryy6V9V2xDe3i61IYKNaWALAlvSywEQAkmwmeAXXV3YBsz6T-UgFOCQDpsgwv3c-ss3J5F0iuJXLLpgISgd9uBNwQgWwLo7wt5QHTDbiSyp6UsZWo3c-j5HtZx12CAnB9kJ0gbc9lBqkKALwAGYZ0cuNDRgfhXgCIEFGGHFOLl3MGKsnWLrGgdQEljQNtWxfYhizyTp2DtGhDEiGpyMFTcBuM3XLmezEiCCHwrg6bo42N6BDghxgGAO1iA44Dre29JjjAD55doBeddbtuFCUH-0Fg5QagSnVw4EdOGTHDEFo1-pwdGOXTOQMZ0F4nszOmg-+nYCjBoDm+63FLqN2IZeg3COHeIYVHlZQCl64iJYMkJsDGhpmszJgAMMcCS8HeEhCQUgLU71Ci6yvI1v3wkaccB+JLSunQkt6bcmuXAh8EH325KNFWQfGANTQNw7Ck+FbRgbt08739TuJLW4YGDSH2CReMTG7kxzTaYQyIpqcgITz9b7sbIU-fLkNRdo743a0oFALZB9ragA6wgQkAaHfzh00AGoZgMxyqTu1qAsI3UHTQOBSASAjgKQGgDxpWBbw2AK8FkA7QWBcRFwAAAIRQFoWUakecA4CxE1A+oEgMUBoqKAGQJodUIwHVBAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>




<a id="appearance"></a>
## Appearance


<a id="shadow"></a>
### Shadow

Add `before: m(Shadow)` to add a drop shadow to the search field.


<a id="styling"></a>
### Styling

Below are examples how to change the Search appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
import { SearchCSS } from "polythene-css"

SearchCSS.addStyle(".themed-search", {
  color_light_input_text: "#0D47A1",
  color_light_background: "#BBDEFB",
  color_dark_input_text:  "#eee",
  color_dark_background:  "#333"
})

m(Search, {
  className: "themed-search"
})
```

<a id="css"></a>
#### CSS

Change CSS using the [Search CSS classes](../../../packages/polythene-css-classes/search.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/search"
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

```javascript
m(Search, {
  style: {
    background: "#BBDEFB"
  }
})
```


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


