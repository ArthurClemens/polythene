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

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgdgYA4BdEgMwEskYbQomALbI0AOgAWAFyHxi6KFMSLUIADzwuUANYACCeUQcAvAB0Q0qbhQB6G5nJSJAV3JgkI2GIDmXJ84AjMS4Iexg8KRgbbAQATydlRBtEAA9hbF4bDg8YMTBw811DeDNSKVjeCUREKXMAPlMoRrUyci5sKV0YN1LLazsHfzcPZVzffyCQsIiomPh4qqgkmClMKHxMeGgkuYXEgFohPwMeaLiEpcPjtvh9lbWNraWxACsYerUbVvapBqaoFoUH5dHrmPowWz2RwuYaITxjY6BYKhTDhGqzc6LZardabbZneYXRD7fIYwlYknhO44x7bV7vEB1T7fDp-Zr4LgAN10XHwpUoEFqjM+HM5dXkeCQYCkIVgqgALCgAIxK+UgAC+RAEwlEIHp8kgimUUlUhpWumAugAyogHGAJERdABJQ0AIWcUik0EdVokmHwEAA7rp1bpjLpdkSANyNRpmzpcQ02u0SK0ANQA4mHdOYWpzvLpA7ynGZTOYAEzysuFKpcbzSUsVqtlkC6TlcRCB10QFKNkC0XQDyu6SvV4XYTBOXR8scAWSVAFYxAvdKqJPsxAwAJy3MTl5gb8sMADCi7E8qVq-Ly63q4AbKulWIVffdFvl6+l1vL0qAMxiWhb1-N8P1-K1gK-S9gPfFdINfGD7zAJ870vAd-0AjcF1veU91-fYnwXBh4D3Bg92YTlNx3FccK3LcABly1oc9byVHd9hord9gXAAvIR9gfWhj1I2gf3lXQVxVMRaPEkCFytYTLxXBCJLEhTVzEhDJOk1VZPU7ixxsJkvnzBoQBjKB4x5N1MDAbR0yzcNcxgfNC2LCQ+1HFt9EQOsGzHTzCnbTtu17McByHMSAvHScJGnPtZ0Yx8AAlSOYX94CXLCuJvOilXLXR5VuZhdGK0rV3PJV8IqujUuAv8ksYzl9nLfSW0M5kTPMczLMTaBjyQBx7OzJyXKLfAS385sax8+spA8qbWyCrsez7cKR0ihamQnKcZxbedbzvaqlVIrCZLy1cmNOw6Lxkldrp-S6WPyiSToOirVye1d-xu46bw+-7ftOv93ry1rzHa4zvFM7roHNXqoFnRMhsc9RnILMaJpbKLvN8ubJrHNsO2W0KWzW4coq2mK4rnc7VSQsQ7wEkcpM4p9f0iln9l-XLYLAWgqsZqr2a5kWwKAsR2bfcTOTvPnysZ8rJeA5XeKXPDfzlvDrwXMSl0qtXxOfK1DoYdTdBN5KF0197rwYfLDvLYCHxN8s03LJUJHLJr-33MAfYPc9irvLmJfN-jN3LdcnwYMGQAhtHodjCzYc6ChbSUZM3AkAAxDt4HwbMAAoAEowzqC1Gl0XQeqTW0s+zIQxCkchnBWQv4cz+17OL8yq5r6BXRsvRw0b5vW6kdvrNs7ve+rlOrL6gbyAbpuW7b+H+rrmfK7n2AE0NRGwBXsf14PpHMx7pO+-nwfbPdT1oGzYAd6rpaUF0QvLUnZuYBDUvjD+FXIBughCFxdAPD0XooCOmflAYBwD4bv0tGjd+8Nb56E1C-eBWhtDvw4JsPARAsHAMQJyY0EILS6GgO4RMuDdDf3ILkAaZCQxELgfA9Uxcd7qnMjvSym8HD3ygU-LBb8P5f09Iwv+ZdiEgLAW6SB3oK7sPgQvKASCuj5lQYaARy9MEqOwToPBBDEBsNUVXUh5CNHUM0LZd+DDcjuDrqw2RnDuG8PYZZTuEhwFwPDLA4BYiS5lxzAYquoDfFCKUQE8xiDKEoLUd4lxYSgFaBsjKMh78x6mNcVw9hPCr673NIfXxIiDFBP-uXWRESFEP2gco8xaiNEJPhofZJjS0nSi5IgLJLcckpLcfkjx1895dFWEoMpgTNjOB6TmEA5gzFAIiE6KA2APRWnGbM5w6wjBaAIIsvuS937BIAWMyciAxDLNWeszZn82zTNmeYBZugOAQDAK3XpMy-4HN0Mw2ZJzy73CUGITkDzhrzPmUMneO9DBSFcHAmJr8ibHIkT-aRpzEVAMsqC+AXzwxAouTimZs9gGwvhXI7xjoADyAQXiIGlGIVEMA6xQELrIquwB9GNMxaopQKQpDcEQPnJB7L4FYACEK9+5hvELNFcAvqfooDeH+ZaIlpiug1BWWsqQGzznovLmylJjSCUgrBeGNVPzGlVxNVc7VuqJn4s1dcnVmy5VAOLpa8xFq3VcqtQERRsARVGvgVAbYQarXwIla8ww79QHeN8R6t1wDMAcCUOQWNhcSmGjyRGquvqI2vPeRQnlfqjAQBjXI9BUT6mWj+e-E1fzvlJqASmtNGas3QBzbm-NVrC2twAPockcLEcNuaq5RvLbM0BVaA0wN+baTJZzgWNs4Z6xprbEDprkbo6tc6nEOHrZsvIS8-7Np7Y0od5RR1jonRW6dQ9d2ULrUui5K7E3BtURurdoCd2zsofurdJqAOno-UA9UPq11ANvVOwuvp-RBi7ao89LbJHvBScXS+BjwNQqgAU-4Xi672lzkKgu4Y07nO8cR-OJcPGWQAILYGwJMwmnZjmVN0NQLBoDzBiEoIGMQoalDPM4yk7jIBMDPJLVXAwRgpUWE9P0KEQwnHwh8IiSYoRIwUnwHCCAUQjhOBuDYAAxF8QjEhZXBtWOQZVUg5P9oCFgHQTyBmOmldUeh8A4DvwAAqYkSC88tuhEaGZ4LofY1pzPTl0+YRDuhWDvuAWJ3jQZhPVLZXqGUUgkDPPcymWLnrkuQCEDEJYihLONLjeZqj+A4tVziwlxZrBGh4caI3IQEBtkTwDO8zwUgfA1AAKIjEUK6WITp8AZYFEKD1ugGPYEwxKIV9KZSw1UAuWgKBfx3g1FqEAggRCqDyOEA00AlAqDQBqdgIBNA6D4Cgag2pDtoAMyceAAABJY-L5CuDkGgcEkJtnYG0N4PIEAhA2Fezcd714mL8zcAzSH1weBiCOFAfUJByjYF1CyE06pWDqiAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import m from "mithril"
import { Search, Shadow } from "polythene-mithril"

m(Search, {
  textfield: { label: "Search" },
  before: m(Shadow)
})
~~~

This creates a search field without any icons, with label "Search", and is little more than a [Text Field](../textfield.md) with a drop shadow. The field also needs search icons and buttons. More on that below.


<a id="search-box-type"></a>
### Search box type

The search box can be "inset" (default) or "full width".

An inset search box is presented in an area / box / tile with some surrounding space.

A full width search box is a little higher and visually corresponds to a toolbar, and in fact can be displayed in a toolbar.

~~~javascript
m(Search, {
  textfield: { label: "Search" },
  before: m(Shadow),
  fullWidth: true
})
~~~


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

~~~javascript
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
~~~

Not all button states need to be defined.


<a id="logic-storing-and-clearing-the-value"></a>
### Logic: storing and clearing the value

See also [Handling state](../../handling-state.md).

To add logic to the search field, we will wrap the search field in a component. We will store the Text Field state in our component state, and set the input value programmatically. For this we will use the Text Field's `value` and `onChange`:

* `value` - sets the text input value
* `onChange => ({ value, focus, setFocus })` - receives the latest state

Text Field attributes are passed with option `textfield`:

~~~javascript
textfield: {
  value: state.value,
  onChange: ({ value, focus, setFocus }) => (
    state.value = value,
    state.focus = focus,
    state.setFocus = setFocus
  )
}
~~~

To clear the field:

* Set the value to empty string
* Call `setFocus` (to refocus after clicking the button, leaving the input field)

The back button clears the field and removes the focus, setting the search field to the initial state. Remove the ripple (`ink: false`) to prevent a ripple after the click (it would seem like the returned search button received the click).


<a id="complete-example"></a>
### Complete example

~~~javascript
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
~~~


<a id="result-list"></a>
### Result list

A search field is almost always combined with a list of search results.

This can be created by combining both search field and result list in a stateful wrapper component, where the wrapper keeps track of the current search string and generates corresponding results.

To add keyboard control - allowing to move from the search field into the results list and back - can be done by reusing the [keyboard list example](list.md#keyboard-control).

The basic setup is:

~~~javascript
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
~~~

An elaborate example is available as flems:

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKWgoWjbABsKAATABGEAAXyIPH4ghA1OkkFk8jEikNC00wE0AGVEDYwCIiJoAJKGgBC9jEYmgjqtIkw+AgAHdHQAZNgLUPhsQAFQ4iE06s0+k0mzxAG5ambWpawwsAMJWq2RhaxpAFq0JpMp1GxcsZqBsPgRWyaFaLTQsSh8TTGIQWSBrcg0+u1XNictCf34K3FJAACl7MQE+G2qgWxkdwFqmk0A4g5AA+qp3OIDz5MGB1O5KPZligeyAAMQsF8b2rqgCU9bHpcQE6nM4lIgC56kuBCrlG2wSkgG4Wtuu4IPuR5sCeYgHqKiDigQZ4XleN53g+j4AJy0GAmAsERb5QJ+I5QFmHKGjadoiFaABqADiVbGA0rLuJogacnYRiGMYSoACwibkZQoeIwmiRJIkgJorJsIggauhACRySAtCaLp4maOJkn8tgmB2K22kALIqgArEINmaCqYkiNsQgAOxEZcQhKgAHK5SpuXmtlCGJKqOUq9lEY58qOSqQgqmFKoxUR9nRZodlEYlADMQi0FFWWaClDlZVaBUZWFBVFelQiZWlVVJWAcXymFuk5Xlrk2VFYneVl2xxTZbnwN5bneT5rLuZ5DndURREhkqtAhVFKqeds01EdsNkAF58Aqel5iNtCJWJ6WxTVUUOUVVoHWFF2pQ5TmaNdjnHfVcUzc9hWpU5m3GRYdJvLxNQgPW9FsG6uFsZxybcTAvH8YJIjaUZinaIgMliEjCm5CpakaVpxm6fpx3Iy8pnmVyxmWfNsUABIjT5WXwHZnUbZFIYqkqmhiZcPmaLz-OOSFKp9ULIb0wVKpZTT82stsSo-Ypf30oDxgg9A5pg9AeZIDYkNccosN8QJ+BCcZJNKdJqGY8ZymqepmnaYThnE1jJlmSIFmU8tmjyqLKojZ1J0c45C2B77oUnQ54eJaHS2c-dAdRdHjlx45OUR-7kUp9nmeB5LQvhQrxhKwD7hA2rsCtJrUCWWDevQwbcPG6binm6j6PWyjOP2-jilOwZ5t0mTHsU4p1mc05jVCPKMX6WdItZcT89ZezDk2WAcpNfKC9idsvX71a+VCIvhXpay8ob4LM+CyfBV39tdn75fvURTZx12cLj-VSqVq+25H1-1puvVqBcIpuU5r7JUBUYp-yVKxVUIglSyxyr5MAKC-IhV5tvHK0CFTuSVC5OKbki4gBLobcutRMzq1aBQW0cgmJOBEAAMVUvAfAVY5wfiTFUOCUAdyg0YraRhVY+BCDEOQewCw5zVwYfaSGX54ICOgK6XCIixESKkdXFRl55H1n4dQhiWsdbkDUeIyRYhpGGm1kI3RiiDHV1rmAUxGiLEOLrhxBR3x9GV00No9Q7pPTQCrFuPhO5bZqXvHOS0ZlxEwATFw-QXwwlhL4HOF0yiPReigJueCySdzV3vJaQ294tGqM1LkvJah1D3hYKsPARAKnJMQKyY0IILSaGgM4MG1TNAxKHEIHWLSEwNNCckz88F1S0W8eaaxNgAlZOCRU7ukTomeiHPE7hjTNCpPSVAeZ3peF5LCQU9pxTDFQFmSY8pozKkaBqXUxAIyjk7maa0wpHS6KqEvPePpmRnBCOGVs8ZoTJmUNCfRWRIhdmLJucszQnDuE9huTuHZbpMkHJCc8857yzkyKEfaQFyLjm8HFGyRA94zGPKBR+CZUyEI+McdC5MmKwlwoRYkpFRzUUZMCdkw5zyTlFN4iUw0jjCVYrUBeCULSKUSKpUS4FO5QVePpeaa4cgYXJNZKsew5KHxUWSSEJ0UBsAehnGZPVt58B6DUAQJ5YT-k2EiQknh6rEBCCNSas1iw5BROUjqvVxhYIsAgGASRsrdXxPtTuQZer2Wup9e6z1pqxDmt9ZabV8BdX3iDcQDsobw0dgeVG2l8F4K6DEI4PhLKdxstWbEjZHKa1hKsByOiEA9hQD4pmyNNx81hriVOAg+aTG6BgPYeArQ1ytESMkJAKAtn0R7fGZMvyhDLs0AAQn0MmK1Nq5jsIAPy9LWZkDd943XroDXovJFaq3bLnJCx0AB5HwDxMJiEnMEFCUAFxEp3MAa5WLm1HLkAkMQ7BEBsMKVso5WAfBQZzSASFBqsVhK1n6LtcaM0BsdMm71FrG08L-WhvJl6N3JmXdG0jbRE0eoqMalNaaV1tAY161NibqOkdbRhpY7h4xkXgPAc8l5en4GtewkNo7EDjsnZoadmhZ1NnnbB55a7eNYc0AAMi0ye2JQgNP8b9VR1jYhGMEY1YqmjH4uPPKo6p5Jra1CQE7XxeDUHenLFbHoTAE6xCsQDWJiTI68gyb8-JqMimkjKfJQ5sJ7n4A-NPQMzACH4CaAAD4ZYfCh4gcWdzWtqX5gLWa9VrsK75ydJXdW2bGbVsJPh0WwBg-+vJUB1gtZow1vQ+49WpMhbsmz+WwnkTkOQe8qTGWGhpa1urw2Q0Ds611zQCGpN9bnH4-ZfLLSxovXR2NJbZt5NG4gcbD6pvQBm11oDNGFuSIPCyWwkQltddW71ibG3cJbc3PJ20MraMWoGX9+Mn56tHJO2d1JlzvvtMdWdy9cP4nDZu6Rx7xQXs0be7oD7m2ms-d2wDuQQPMBDNB8NncEOPvQ7x7D4xe3AeI6s6R9UcWUfPKx+t30-ogxXeeWz5Jvytkfk8WM0t1FaIQvxcw1h7Dky0ItZClhUH8CcIlwYtsmAxxVlfe+8UQh1CIEiDAOcGvPH0Qq35yFM4mhdv1j4eAqswX0T3OQAAIryKsLvqsyc2aE1JxhBSwWbQsICGOdwibwhAK1eZEJnYAAbkHcOeOcAASYAXuA2ZAeBANQIEGkgA-J+OPtnm4iCQ+JbACRUPJMtuIcvYlK-V4a-ua15AABK-o2CFuMDZWgABSINNyWcgs8VQnx8u5Ax8HL+DhloJRiCQI6A3kRHQZ9KzAPDUGP12o+TaMUrRPy+5RXOH8cYck3Pn4vipy-qPOERDAAAcjqJDYEVzTqgnGJvnZoBiHvC793Fia+uqMAQ2NyLmpk4oTClAsgEa8qhqW+WE+A1GIgEALS5AqW86mglK1GrysgbSIGHyXS3yu+CBlQQ+Eyo+7aPikKAA6vsG3mFpOnEsmPGvynYj4m6pqmEngMxN7khk3hhIgXwZoHuuwAetRnwGZPaDJveNQMwBUoIXIPgGOMatagkPeH1PasqjuOwWqhUJCt7lWHMIGIYRyiRtwXRooQQCocsIkFWJoQoZYaQQQKYZoMYd7tRpepIWINIcwW4WpIYdug3LkDpv4SYYFkEW4ROg7kSsehrmOKpkIJIdgHOMvoisvkkVISIHOMYZoAwe4AAKIJApFx4AB6ae7hAa6oxeD4bAxgwumgx6aR94UA0RvORyQg7Ak6p2c4CQiKfRkRrRQm7RYSshjA8EIunKpmBhAaJuPmluUu1uag7gkxuhrQmG+ASAAA0oblWCujws2qDLYX0cmJelYcoVGKoYkDevkiwPCu6mkTug3AAILkCUCBju6Bh1BKRZaKb667FPEPifHfFcKWitrGDAm5BSbOgFEJRbLurYC6AtKyCu7zGTqq6LoGLGFXEnFtpqGaAADUjkmgCagO3hvhQOXa5k2wjkqmx6fUqmJSxxhJjkNxFhgO5xNh+JyY2JxxbJiYUGeAHIdxc4DxAJO6D4rx7xAAqtgLkL8WKZEEmBKcYLKfUe0uCSAGqUpNCU6LCSqPCUIIibgWIKiUVuiZMckvRLydyXiXYTSWFEoJoAya1vSQaa1kyfiQ6WyTuGcc4RcQsDiUYWpDifyYpvAEKWwCKYqcqQ3AUUaOQOqQQQiUicaGaZVhYpadwfoVLt7nOF4VkTJtQGoGoYwFmQKRGfGFGfcf8UqYCcYAUWQDgIgPKdljGfWSAI2WAEmZoJqV2VCfuDCXCUSimSaemX5hiUSn6fvtYZccycmH1PyWLuWhUPes2nWnpusofk2lsneuQHwv7nqIaIsLaomXlq1gQY5hYJoNGGUPSieXMCYmRD4WUIOkJpoMvj4BADYOwiaXEtCV+eZDwcIpBmwp5uwmOuFtOnFtAMvgGF8feBsdsYbqpvzmEtQHFv1lLkrmwi+m+h+l+jAD+uYaRoBmDmEpec8glkhtGJENgAJrHm4TqE3qRoZthv6qVkRtMbmbMcuqActt5uaf5gGveBbpOlbuIsscjuRb6U4TOfgN7uTo0e0suvTkTucYYcPgJS0dEXFsLuRQWS+TJpSe4HYMNseqkmOOfgJcvkhpBUwbkESX6bwbhr2dedKUKZgCIQ2AAI6RppFejbKYAG5tCODxh2BmRYF3kKbQQ+78atC6CeALCnbDqYDuCYBqBKV37BBP4CAv5lDLgQTrjnkCVfnkCt6wEyVhKxVtKGUUnJFzhziX6PJ2kJAupTECUT5-ix6-hRJKXJLNVVVHKtoeXxheW3hsB+XxgBUQBBUhXjq6BRWRUxARbmg1WaDxWhZJVjapXpWZVHZYq2VYFeBIAsnOWMIeH9UOqx7e5tIa7UDNXyEHXPLnGel2GAnTnb4BlmbHFDV5LQB74frOqIqfVCGBbJjNVXVM7WbI4jFYo6VCaqbjFErlkTLvhq4+LPHYDYBcFsrtUYU3KHlCDvGwQE1cogRiInUtl5rGCQrwzmT2VTqRY0mSJjVvFBgfmG5xKBV8CoHxj2A419rwV8rxljZYGzWKGOhdnNni3eaKH1G2ZE3gHrCyAsUpKPpS50F2AMGyahBw2aAjFlkSEU3vFCDtZyCk1bKHmYBB6qY6B6BIbAigi9AQj-LQgeCwijCBCpgkjWq81hB7B2AXAWCPhvBS5q07iLCJ4VBIZnhYAaCD5HKag5blC9IRkQD3gAAKNYcwIWtcQdHAzp1oUu3mvN9RFSRt8EyNyqtQoivNt4FiAYYargn68VBRAwsgrokQToKuxgPIfINmmgWN2AniIopBkoXAaATkioSoGoWoIAvAAgposeWeXAJAx5xoigiQzYrQYl2YZaIAqwYMiA9uuqxgsh4k9AzsPkjoSoNkNkjoKoT1Ohh9sgk1uqgYIgXg1NF9vet9WUD9hktkj9z9D4mAflNtqAmgdAt999sDgDT99qxg4D9g-ANgtq590DHMbk8Dt9HMIDSDh9m0YVmD1Al9uDhkcDjkoDxgCGKEP90D4kgDTDt980BDB9Pg4YU1pDd9zDvkj9RE8o7DoStDWAl4pDV9kjwjL99uSw0htwvNywPDVDUCzDtACDNDIAp9DDMDekFDiDHDpWKkCAFQpDksN9XMWUrDQj1DhDPg7x3xshSUgDYkSojorj0jD4jW5A0wgYEAEA+APDSobjjkPkYkj9ADnjxgZE1qYg2jpDRECDNkFjSUV9BjIj4AfotgugrNZjAUFDaTmj9ooaCAFqPDKoaT6jjoWUhThDkA6BDuUDZDVD2DjoPktTB99TUA6QQYp28TTTFTaTYkRE-9ODtjnT+4sAHA6gyjzDYkFjwTHTGTfwfAcAjjjDbDhkV98oSzL9YAkQSwEjFDvDUTIAKw5A6g-TshUjacIz4zGT5z6g+zhzTTaTWUdzksHzmjjz7gCA1qUAlAgTAzYTET4TsUpzPz6BkQZj8oHzsLj98L9zL9kL5Q6zujgzjouzD4KL0LAziLSUcLXzhDjz6gfo6gdRwLHzDMj9tAYz6TyLNg6gkh-GsgkDTj7zmLETRLB9jzCAZK14qLpDPkCDtL7jdL3zjL+4fGOjJzz0Nz9L2LkrjCnIZjNkVj6UV980YLCrAejLugQL7Ldz8rErFzMAqwijPDWU6rtkaTwTELjLPBAr8gZjYk1rPkKTrr9rprWAcgVz0D4CjozUXLXr6gMAPriA14mAuLshYkYzHkjo8bSLir3rFqAr0b0DsbCbdzibOrZzjLla5AflOeeARzWzNj803LDzjLxjSAfITj8znLQDKoEL5Q2NVSszt9Qz4rxLrbMA6gkQfr6LmU+j3zjYkb6b1AFTIr07ELY7ugE7U7NLM7SbAeAT-G5Ag7NTj9YkYLsrub7Aug9j3SZjbkFji81T2rmjPTDTn939HblDmrYkWLxga2CwTraL57tzF7pzLA9g9oRFbLjDVDmrLTmje1sAZVEAQTmrmzizpzJ4EACwt7FtTT4kCzDblDGjhDvzbC97qogDz7IAOH-zgL5TKT8ogDWUITub47eTKT-D4UKTYHugzrrzj9DHhH77kQUGawgYJ76rsrmbK7RH87dH7H9HTHhDKBcwkQ1qfHqHT7xzinwnKBZg7bqHLTVToThHJZbASw+rPDWnREITxnpzunvzpDbkBHETOnrI+4E7srjnynubpLwVFLF9ynUCQzhHWAyJrelrmrW7D7pzvn8grep9MAIgeHnnYkWHB9WAXx77eTu7NkITPnUInSX9L40AeHf9WzcXGTx44gg7-sAnSU-9Pn6M9TqwPDznDHHMkn8XVXBzaLwTKXzDoHhDRXYgxH8ggL3HQmQYyjIHmrFTIX6MtHqHCUeDzbTb43qESXAzO7-9Hrl7XXE3onU3s3qo2303wn3X2A6nv9CDPk1HRE1rmj3XZr8AFrGnCDOz7H1Hl36MjrLHH71Hp7j9bklXqEfbA7pWZjkTZbsDP34gYbqbULZjy0ETNjtkF363v34babUPHzWUsPar83YPcgUGJXbksPgjrDT3CP4gA3vHuXfDa3TXAgpbsrlXAgi3sheX80gDeXubqgcwrXTPnnQXubzLxogHzT1nmHpzkhPIaLDXjbhHy4XekhEDovGDAztAITzPX3UvBAMvg7NzKvwn0v9gvNyrBrWDPkNjwrM3Iv6vevpq5AKQOjTkdL+DQDlbL9uvqztoDP0DD3jkObks5vLIev4PvrAPAzUCNLu7WUjXGTLvMAiJyx7vujd9aTb8vvMvBbRb4YOjAbWzdzWryfevNbFQBnAzM0eDET8PB9ew+ADYqEg7d9sDj9DvvPagPhug-AtXHXHXUvUYkQlAJbd3rDCztfOvoaZERFnPfDKTPks3ubvA2q2eyHMrKjdrXvZfGTM-E78r9XmjfzYjC-AnsXFXpzfLLSYnjHjbubR-BA6BPgZjorz0ITQP5-6BWG97zjZ-W-T-67BA97iLhH+49oKrU3FJg71VCU8MmpkJAL1wBYBNLWCzKjqr1ObgCI2b3VVsrxshT9UuCA1YKuULb2Bi2tvKzit0IHCdEB+fcRF-ym4fMG+QnXNqZFMgHNb2cpPvoZA5ZAMV+L9eiheBECmpXwTA1UBPwK7sDTs9gQzggytaBs2BD4Q7gnSYHLRletACQcYBSB68gmU-T3sEyn6aMIggYcLkHycZ49WGYfQjlbxt4n9bWEfF+oX2O6S9TmPfAdg4zMbutt21rT1sJ0oAHNhMugj3su2CYCCHwZrcTEgHsZBhxeLA-Fk7z8HmscuGnMwfX1AEv0zWywOwcENq7at5QYLAnsJ1e6CsmmYkWHiwJ8jdsD6PBSLjx2i7MNw+pzIivIF4Awsr6p3dxr4OMBEV4AaBMxqZxThncieRQ-tiVyB7zRy2D-TRgHxPqeDJ2tAGxiRE7aNDSASPSHgMwb71dlumQ2YShXmHUdFhcQvwe1nk5WDguew3NtHxtzuA4+IHBBvk0yHY8PBZ9Jpt9xs6P12mpzDEOUzSYPC5Wjw20I02ubidvhwnOwFGBghTd8eu3WHpoy9DeEoOTA4vo9A0GENxESwaPjYGNClsbmTAWEY4DT699ZCaQgwZ23MEPhSBMAu4cwLxHGBP6dCNvoTy+7hDSRX9FDrsMc6dcD68-GALzQNwUjnYczaYaTyG68DgOpzbkYGDj62Rd2WnVnpo0PaYQyIxggEU4yV6Og0Bj9DHtQ3Rpj198E9aUCgFshz1tQS9YQISANA-5N6aADUMwBADs9Q23ABejqEUCB0Dg8AAAAJzBwM0gRwFIDQBO0rAt4bAFeCyAdoLAtoi4PaIigLQ5QTgaeP6POAcAkiagfUCQGKD0VFADIE0OqEYDqggAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>




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

~~~javascript
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
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Search CSS classes](../../../packages/polythene-css-classes/search.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/search"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(Search, {
  style: {
    background: "#BBDEFB"
  }
})
~~~


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


