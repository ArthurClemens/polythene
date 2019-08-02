[Back to Polythene Tabs main page](../tabs.md)

# Tabs component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Scrollable tabs](#scrollable-tabs)
  - [Getting the tabs state](#getting-the-tabs-state)
  - [Route tabs](#route-tabs)
  - [Nested tabs](#nested-tabs)
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

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgTgEYAWAXRIDMBLJGG0FEwBbZGgB0ACwAuw+MXRRpiJahAAeeNygBrAASTyiTgF4AOiBnTcKAPS3M5aZICu5MElGxxAc27OXACNxbggHGDxpGFtsBABPZxVEW0QADxFsPltOTxhxMAiLPSN4c1JpOL5JRERpCwA+Mygm9TJybmxpPRh3Mqsbe0cA908VPL8A4NDwyOjY+ATqqGSYaUwofEx4aGT5xaSAWmF-Q14Y+MTlo5P2+APV9c3t5fEAKxgG9Vs2julG5qgrQov26vQs-RgdgcTlcI0QXnGJyCITCmAitTmFyWKzWGy2O3OC0uiAOBUxROxpIi91xTx2bw+IHqXx+nX+LXw3AAbnpuPgypQIHUmV9OVz6go8EgwNJQrA1CwUExWCAAL5EQQiMQgBkKSBKFTSNT61Z6YB6AAqmECMD0qr0Jj0e2JAG4miauuarTaAMIAZT9dodTqxSX9frdAO9MHD4kw+HwfoqSAAFBZxIlRPgDmsbRYiGamno9LmAPrCTCpUsAdz5zhQemV9CLJet5e0NbrkgbTaILcg23Ipa0PhkDYsAGIWNP8-2EBAhyOZKWpYgZQRxyAJ5xOEwAOwz4hzwfD7ij6SlsvaTlgTDSBeb7e7g8sWdQYsDhelzbkHSPsAAW+H7zkOP46CuiDSso+D-gArMqABsABMQF6J+oGOOBV4bNwt73uQcGIShIBNKqACUkbutApq4dAAASiBDH6ABqADiwYWK0XI+Hotb4M45hmBYSGvkJIAGIgZ4yIJwmiUUXLcIg1YAEIQKkMkgLQehaSJ4i0DpLB6bQQlFCo1pIAcgSYGAOg+JQLgbBpyzVtprm6fpejucZYl6KkcgoDA2DWYgGnYEYeDkFyiAmSKQXOHoPDwKUMUTvpaXeUUiV3BAQVgP4cQaUwMXdNIlA6CSfECTFtDiChPmrGVJJaMsrwQNoGn2RsxX8jFACyjZMOIDDDSwRBIYNADMLAMHuAAyjY1bBsG0KNSE1bQE1IXuPp6LB4gsLQrBEEwe0TQhtB7o2Q3DRNDDHUhtV7mdV3DQwt1EAAHPtM3ITtg2ve9e0sEwZ0sHohnA7BE17mN117sheh7t9b13Q9w3w0hO0MLVB3vWjP1IQtQ20B9o0TeIH20LBCEIQN10MKNe0k2dmONuTtAMCtRDk5T1O06w4h7rBpOw+jCNMAhyOrXDv2NtjwtTaLBOef9I1EEDIMIWD4306NX3TRjO0669o1MA9W3PUwX2wTNpunedl0g-tLAi2tembXNdMm2Nk0G3oABaegxbYzLfNxjQgJGHq8vqymQfALHsY6nEwNxvFdhpInFdUUnSJncniQpSmqep1VuYZHlecVZmBBZVk2XZEAOT1YnOa5BlGZ5FcZeJfnwAFuUhTFYWIBFUUxcycWSAlvDJWJqXpT3M9JQcOXWflhXFQ1EDlQclWSBpNV1UU2+781iCte1MWdfg3Uaf1R1rX9q2DUwK38+Tb8sAhY2E2bv9-Rqh9BgsFVp-3oDrL+-MIG0Hmo-LSgcH5IVhulJgf0HpLSQhNFBaUmBs1htOPce4-7YImnA7BFcPpIQYB9P6e0PrQxhoZJanNYKNg+kQJGtAtrcPYcdWBfCJbzXGsdBg81sFMDEXoH+QjpFGX0kwRg9MaE7UlqgzhekkIIRoXoL6EssFEGYTbXhypDF6SoQzOBiiJp-UUQ9QhxC6YOJwQoxsyCHqoIDkHMSIcWThwsFHaiXRaJQD9LUWUUAfAwEThxDQqceL73ztnSS54kk+SLipNSh9y6dyrj5GuddrK2Rvk5JS7cu65O7sVPuA9gqhXCogSK0UxKTzvNPLKGkF7pWKllVeuUN4xSKvVUqO8KoZ2qrVLeIyz7aAvm1KAHUm5dR8i3CwD9VYM2OkDFRRNaA0ztt9D6ujkbvSdm9PB+sbp3WVNdWhxzpoo34XpBC8Fdn7M+ocqmXs1aXN5n9cmb0RIfOmrzRs2zNlv2ea8k6UtjqqzuTCh5psAUTTwWczaByQXfIhdso5iC5b7SQiLM2Q0DxoIJSwPcXMSUvNRRSmhpsHqbQYPS4l8K-rYxBabQaNM9xos5VS7l4gpoTQpUSoV3CkLCMGqAo62MzqUxYEbQaxDNnY3GudWmOs9ykz1kNb+K0VbiBeZsr6T19IsDgdjE1jNao0yphy8QUNQHqz0stL5kjHqK0MgwZChrPUrQPK6lanNPYSydcLUaajYJrQQn9NRLAgV7ReQ7MF+0iG2s2l-RshkPoIRFkzbRG04EQzetLYGobn77SWtLK2b9RUCxEsS25HqAVq3hVTea2MAbXJbbBLGgtpqnL7XoeWLBFYPTrRtUdTqqblskRdLt4gQZc0LX845MaNp3VOuNQ1SMQFQw4cm6mF1Eb7Vuu9aNsb5o+vgoDPS00Lo7UMsQl1Pq-VgwhghCaE0j1uv0mwwyP7Hl7S0edWCwjhUXrumaiaFqja1VYO9L6DNzraztW9Dh6qJZ7M8tWoN8r80rRvU67REqkKs2YVtIVU1CalseTc3leD6OnPZeDE51ymXUPYzGoNNLZU8bI-dUlwNIMsFgnxwyyE+UIa0Zh46L6jnmyQ9cpmbCmXQa2XahCTASPAdObB59+1v2-uOih7+7HX2m2xhtYG7GQEg2ueZz2SNpzUv3dOHa+7qYGeFWDa241fMISFjOldpsUNbV0zO5aLqdYSe2tF8dL8KYnTwdjA8jzjY6O7Vcn2tzyG6zy8NBFhkm3JeKzm6tsXBofVS5VodyX4slopvm8LQ1It0PTVrMzxqyWNgTUdK2fn+sRr4x51FVqH18ec46i21n3Z2c9c6trqGCU2p609aVxqbYHLA+S7VuqtNfO1dQ02imjWyrO8ayLk3E3ErRn1wOwdQ7xIjoE2AXRHCUBUkUmJyc4lp0STFLOPkc6pOBwXPQGSS7ZIMl3Ce6gp56FWSAXqa0Bp0SRgw+Ae0bYHFx2Is24M7hHNJ7oq6wMDiDVE1jhtE06JrS5AcJCAAvZ7fifBvaoh9vQX2IDVgAGILmrI4RMbFYlcQSeMsSIOihg+khD4q0Osllzh7L2KbTkf3yJywO41O0X7V0+G-cGOWBciQpIEl+47i46OQT2aRO1rwA+gcD6bOfEvf8ZHJo3PTQAEFsDYGDMAFsGSGwpjIg6eoehqAtmLMINMOpvviCgEKaKxAY9x+LHoBPFhMD5kLO+bPxfDDGE3BCKEQxYQeHhGMXwSIphhGdJSfA8IIDRGOM4W4tgJy2FzIyPsRfi-FjWOQHwtRNyllrusHQFgs-FnVEHEAYTEC8-gHABsAAFUMywEoLj0L1G4vA9AHEtNaW0rfhAQAsGRLPbAyKD+L7npP-OC+x6H9n5-GZ-BIALxYP3Lg94PAwoD+8+Oeie+QEAwgsQywSgqEw+4B0YBYIeH+xeZg0g-eDY7+CBCB5oWAgQkEm4AAckpEUOqGAbgXoPgYQUvn7lDo0nEFQdADxNQfACWJIHeMUA5LaNACWNWBAFQbMoyHaI-jgcXngdaDQRYH6JgFFLfOJKqBQdnhwD7l0DgZgIARAMAQ2KVC4IgKIWIauOuPgN6D2EoeRGAbfh-vfgYeAemN9m-mAV-rKNIL-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-ZFzFgVz2Y-edzkLjz6TzzuxxpohdTUAqolEUAMJV+WdMLEAxDXg0gvgtQKDowSgykcQCx+AiegoYRegAe2AFETQkokEoRco-AaAkiCEKAIkaoGoIAQgogag+QEQeo0AygqgEgXz-evJolN8DYClkYGpnzVlv4Nlq+vrNzNobrX1HregE4OZ3rOrJARhE9hrIAJrtAaoHAIAzUaVAglrWoagnepw8gJAbg8gaAFe9gDk2AtkkBwgtgubtwAAAh4sKtW0fvACbdoLqCQBUMOWoKyEaKqGwKqEAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

Tabs can show a text label, an icon, or the combination of the two. 
Each tab is created with an option object.

```javascript
import m from "mithril"
import { Tabs } from "polythene-mithril"

const tabOptions = ...

m(Tabs,
  { tabs: tabOptions }
)
```

Text labels:

```javascript
[
  { label: "Favorites" },
  { label: "Notifs" },
  ...
]
```

Icons:

```javascript
[
  { icon: { svg: { content: m.trust(iconHeartSVG) } } },
  { icon: { svg: { content: m.trust(iconAlarmSVG) } } },
  ...
];
```

Text labels and icons combined:

```javascript
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
```

You can use [Button options](../button.md#options) here (Tab button options will be passed to the Button component). For example:

```javascript

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
```

To set shared options all at once, use option `all`:

```javascript
{
  all: { ink: false },
  tabs: [
    { label: "Favorites" },
    { label: "Notifs" }
  ]
}
```

Alternatively, write the tab options as `children`:

```javascript
m(Tabs, [
  {
    label: "One"
  },
  {
    label: "Two",
    disabled: true,
    icon: { svg: { content: m.trust(iconHeartSVG) } }
  },
  {
    label: "Three",
    selected: true,
  }
])
```


<a id="scrollable-tabs"></a>
### Scrollable tabs

To display more tabs than fit in the viewport, set `scrollable` to true. On no-touch devices 2 scroll buttons will automatically be added to navigate the tabs.

To create the container where the buttons are displayed behind (sliding doors), it must have CSS attributes:

* A width or maximum width: f.i. `max-width: 400px`
* Overflow on hidden on the x axis: `overflow-x: hidden`
* A height; this should be at least the tab button height (48px): `height: 48px` 

The container's `background-color` will automatically set the scroll button colors. The `color` will automatically set the scroll button icon color.

For example:

```javascript
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
```

<a id="getting-the-tabs-state"></a>
### Getting the tabs state

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKAAsKAAjHLpSAAL5EHj8QQganSSCyeRiRS6haaYCaAAqmB8ME0ys0+k0mzxAG5arUja1Fla7ZpPQBJZaJO1VTTUWqaE2aLA+RDwFA+y3+-CB-QpzS0TQAfk0xgAVJoAMqIGxgESaHO5OPGQvFkS5VVhiNRmNxv0BhJ21NyzPZkB5gCymDEJcQ1vLIE0lZAA6HZRpNqIDdNTdj8Z8ieTqYATN3c5oABJsBYQciRMsVnsHo8nuu1RguqDhx-ZqDuguLOQsezwC1e+0ACgASiDE1XSHaBjWuORvWABtDDEVskwSONaFA5V73DBtdDERwHxgh9H1ZNhEAAdzjQDgLwp9w1fBDkzad9ECEWiEnQqisJwzQ+D-H8YCIED8Ko1cQSEv9mIAhcBKozB7DECB2DEFtyHsRAJME8NMHFNlEELMU5HwRTlNUtToAAYREJZ3EQONRUQcUCB-YDIMY5jvRsuz8B-fw2wbJ9lQA1jw2VBsgqgNDXRfcDWgAQWwbBoIbQiSLIoD9GDUNJK44whEoYjjD49LBMyrUJTEJA8p7fMGM-eAhOMcSfMfIqsggPgIjmWQ8oap8uMqwc9C-HiAK6zQhskxh6vwxhajC74+CEPgIHsWQ-3wCAwHsVwxA8CoAFEBlkAAhSJfXwP9jB5PlxM0GLsH8kUY1siVwMUABmAB2FBpQANhVNUQF4ARFCyYIdWgOQFGEbB8U9a1KM0HwNPUdxKCW-TNAAYhYLH7xCoQoe2FZyHUbZZLmTQ8ehy1YYbBGwCRlHljjdHNxZnHanu3TJS4NAvpQWgVWYEBVA0bnqHVQG0D2OwLmkRwpDQYFQSW7AkeavgLClg54AAAU3IRaCEF6NfODh5rUbUSGKKHFAZA1lUYZUgA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

To read the currently selected tab, for instance to write the selected tab to a controller variable, use `onChange`:

```javascript
m(Tabs,
  {
    onChange: ({ index }) => vnode.state.selectedTabIndex = index,
    tabs: tabOptions
  }
)
```

The `state` object contains data on the current tab:

* `index`: Array index of the selected tab
* `options`: the options that were passed to the tab button
* `el`: the tab button HTML Element


<a id="route-tabs"></a>
### Route tabs

See example:

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKAAsKAAjHLpSAAL5EHj8QQganSSCyeRiRS6haaYCaAAqmB8MCImgAQvYxGJoJplZp9JpNniANy1WpG1qUB2IAAimEWbs01FqmhN0Zjml4AhQmmMAAkIAJjEQ4zHA3Jk8YLCIM4gsznNIsfABJZaJZP0OOquPAcuJxAFkAAZUQNjAIjLUHjeQgQY7bx7Tn7xHLlZr+Drmgbg5d2eXLeXMbbHYAsmG+4gaauh3n2ymQBY+HuyoeZ5a5wu5UeV83WxqO6m2AsIORIgPjyP8zPItPydH8-3jWdawSZMACYn2VWpGB9b5-U0dwKgtK0IzARxdFkAAlADEDdKpY2XVD2HIBZMMIoNsNw-VaLkN19HdQtjHLAB+IC8F7KdyzHYxkJjVDRUQcUCHvBIIxPUNFiEXR8HsMBEAAClUzAwDAG18AAShIzRVPLfAFKIlj3Rw8g8LEJjSw3eNuJMyD5wScsY2TTSwDjXSbXsWt2DmPThM0VDKxgCMo3s9chxjLAfEQeB3xLcChwSqF9WTPhTKDIQABk1HUJ8h0cRKyJi+MdD0ZNKOoy1bKK+MEPspsorczQ4oSncrwPFL4zS1wxEy7K5DygqGpjErk2i8rtF0Fgx0vMR9xveyYyaocWqHaahw60q0xA79f2nVbNH6jLNCyk9Ro0cbNEmsqZsq+agJEA6wOO8r1sauMkLjXQxEcQdTTCm0xIk-ApJdZDlS9FMUOgY0ADlMFZNh3DDSUI2m1HEAAd2TVT9P0UjtpChHWks6zbIjS6iI8CpCeCkTyZNCtLWtNo0vByHXXddCxEwmBVMpxiiN0pm8gqQGLtUwWbVJmMQbazAHQgdhBorch7EQW7NIlVlEG7MU5HwZMxC1nW2rBk3MOTa3JKghrlXFxtahh30oFQgBBbBsCxuMcfxwyidIyKhz4IytUoXGs0jNqI+MIQJTEJBY+MamwuMHz48jrIMwiOZZFjsOZoj5HUfRiVoGzk6YwTrUwu2HwIHwI7bvDyORDlWPaZy-nCd0tqYxrmaZeMQVY9ksNMCES9sHU002xtE8XRDof4wj+1HWgeX152y1OoTDV25i+6FdH2aquHIM98ak-UoGWQhqu-Kbtv53190weTsYb+h1-p8jA3bIT9CzE84V3RT3kopZSakNJaXltfZizsDJGWXJ5agJ5GARh9tgJ8nlag+RNM7EBUBe5yFUvgCAOEBr0zEAAUUfmIW0kQqz4EjjyPkRDCzFkzMQJBB5xYii5lXKUaAADMAA2eUAAOFUaoQBtkUFkYIOpoByAUMIbA+IwoPR8JpdQ7hAzLGTAAYhYBY6GtQhDaO2Cscg6hthOjmJoGxOj2Z6IMUYkcJjNCmJggEqxUBhHG0lFwNA0jaAqmYCAVQGhwnUHVAIRQew7AXGkCVRQwJQR+WwIYvOfALznA4AAARgkIWgQhxFFLSRwWeahtQkGKNoxQDIDTKkYMqIAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>



<a id="nested-tabs"></a>
### Nested tabs

See example:

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKAAsKAAjHLpSAAL5EHj8QQganSSCyeRiRS6haaYCaAAqmB8ME0ys0+k0mzxAG5arUja0+Jg1AAhexiMTQa326i1TQmjn4FCaYxzADuxiImiwPkQ8CjxgAcoh4yAbURQ+HOemQCxMKyaYnk6niwBZSKaABiZYgTTkNLzBdNRejpDLBATSct1Z7AGU+-hcsraowXd93W1fL7-YGs7G7ZoQ1Aw13Iz2AytIgOq2me2aIAfJ-mt4Xd8ZY+V1NMj0OT8YAOoP6aaMAiXqT6ezm6gatGsuh8OuxgADItlCHK4PY4H4AgLZtF4mgamIiZGog4oVI46EstgbAwGwYBqO4mipl4iZ4PgmhIZRbD2DAfDnpoch8BE5AclAZEsvg9iyJofqDj4MGUa0SGgYgmieu4vDoaoACO9iYEImgAKqtPIbDgZgdF7FAumaKyOn8ImKnEZoUAQAs5D2HRiSIE4XiYBK0DCfAWB8JAoktlZRkkcJrSrGwlnYJRCSUZg34QHwrEMdhKluepAAi9hWZgfoyWw9m6PRyHcWoeSINguizPgzlocVrIIPYLRuTJpmqNpSLfhw8AIQV0mUfYmgsPYnhudZ9heTF2A2GwbmOOpACiCRgKVcj4SRQkQGAYCYDhw1gPVnJucNNlbmVECcvqNGCa0xW7fAE2aJZmgQCw7BkTFlV4PZQmsV5aFLMZnKUcayYtghQjGLOYaQ9GvHAZoNZelAFpWuuAAUACUdpVCaBbztccjrsABZhosPhRqaEAtJKIKyQjS4BrAdCMDaBbKhD0NhroYiOFuhPXmGrJsNmUbo5j2N85D84k+ueOIEIJNs1DnPc7JKPGIKA6blDUN8CjSMwImvNa1rJPU56Pp+vT+tE0b6F+k9XhRmI9mIFeNuQ9AADCv5QO4iBRnGSOizLcuWuuAeWtbUPKmjrs2zrxhCGbUDbCTBLQHIsgJpHWua27kPxyYADMWfi3n7GWkIFPuW4x7Z0bMd11rBdy4kfKx2XYYAAYACTACTleU4GQjHravfSXwyqd43UMN6XNv91XVP+HR+irz2ca5AAZJvKsjr4eurmj0+aIwjdH3PjBowrzPXqztR33OsN7z4B-ZqjGP6FjhuxbArQywT1sSZk0eoPWAUYYCLgtiubMjMb5hgfmGAsStyA82tgLIWmgRafzFkbSWod7TB3ltnZBW5m4QJ8CnS0FZG65zdjrPWBtj7EyoeAyBy5YCrnbnnLKAZ2BiEds7LhbtPbe19v7bMgdsGEPwdZCREc55R1nmXZuuoM5tyYRuDRYYC4iAAKwlw7sbCui8h61wUTbJRhiVYJzkAkdR5i3Y9z7sY0BmQR6aDHjBCeU8HFa0sWXU+vjz5u0CfXa+U5b6zgfkBX+mgACC2AIr2m-ug2MwsP5Y1odYrUlAcyJiydo1WWoJRiCQAOTMiAFgEHLlaYw-j85FKyHFCIcxM7EEbjreGag9bBL8dbS+sdAnRKgHwROEBLooyQrtVwYgPAVFmgMWQ3pIgAEl8BFJ5HyGO8TElX1qCKVMOFq5cDQNKAA7CgAAnCqNUIBeACEUFkYIOp076keUnShFDVH6hwQ6fSLIfZRgAEy0GwAkNmPhMBgHUO4SggldwAGJnosCibUROCNPlpz1EJEQhdfmenIJ4KAUZaCoqgOitQmLvlCRbnY-FNgiVRjlGBTQtBWWsrJWi8hnzrTfwJUSlOFNgWgvBffLlvgeWaCadi1o38Jr4ABe4YVYK2aQFAlGBFAA2bVEKoUwrhcsDVLBaDGuNWSoQ3KTZSupa0PR9LCVqBJeay1VDrWvJpbY2VBZ+WOs0My2CbLA1RIOWKY5iggWyjlCqZgIBVAaBOdQdUDy0B7DsBcaQjgpBoGBKCQS2AYVNL4BYVNBx4AAAEgVCFoEIQuxbzgcETmobUJBijYE1AyA0ypGDKiAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>




<a id="appearance"></a>
## Appearance


<a id="mobile-bottom-menu"></a>
### Mobile bottom menu

Use option `menu` to remove the minimum width settings from the tab buttons and compress padding and label font size.

```javascript
m(Tabs,
  {
    menu: true,
    autofit: true,
    hideIndicator: true,
    tabs: tabOptions
  }
)
```


<a id="scrollable-tabs-with-custom-arrow-icons"></a>
### Scrollable tabs with custom arrow icons

```javascript
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
```


<a id="styling"></a>
### Styling

Below are examples how to change the Tabs appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
import { TabsCSS } from "polythene-css"

TabsCSS.addStyle(".themed-tabs", {
  color_light:               "#00BCD4",
  color_light_selected:      "#F44336",
  color_light_tab_indicator: "#F44336"
})

m(Tabs, {
  className: "themed-tabs"
})
```

<a id="css"></a>
#### CSS

Change CSS using the [Tabs CSS classes](../../../packages/polythene-css-classes/tabs.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/tabs"
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. The tab button styles can be passed using `all.style`:

```javascript
m(Tabs, {
  all: {
    style: {
      backgroundColor: "#EF6C00",
      color: "#fff"
    }
  }
})
```


<a id="tab-widths"></a>
### Tab widths

* The minimum tab width is 72px. For larger screens (> 480px, as defined in the default theme) the minimum tabs width is 160px.
* To automatically fit the tabs in the view, use parameter `autofit`.
* To make all tabs the width of the largest tab, use parameter `largestWidth`.

To use a fixed width without `autofit`:

```javascript
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
```

or 

```css
.pe-tabs:not(.pe-tabs--small) .pe-tabs__tab {
  min-width: 100px;
}
```


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


