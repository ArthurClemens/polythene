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

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKAAsKAAjHLpSAAL5EHj8QQganSSCyeRiRS6haaYCaAAqmB8ME0ys0+k0mzxAG5akbWqaLVaAMIAZR9NrtDtRsV9Ppd309MFDQkw+HwPuKSAAFMYhDEBPhtosrcYiCbappNNmAPp8TAJYsAd05dhQmgV9ALRctpbUVZrIjrDaITcga3IxdU7nEdeMAGJpZPc72EBAB0PxMXRYhxQRRyAxywWHKAOxT4gz-uDtjDsTFktqFlgTBiOfrzfbvfS6dQQt9ufFlbkdT3sB-l9vrOA5fuoS6IGKcj4L+ACsCoAGwAEwAZo77ATYoEXssbDXre5AwfBSEgLUyoAJThq60DGth0AABKIL0PoAGoAOKBsYDSsu4mjVvgdhGIYxgIc+AkgNoiAnuI-GCcJuSsmwiCVgAQhACRSSAtCaBpQlCLQWnSjptACbk8iWkg2w+JgYDqO4lD2MsalzJWmnOdpumaK5hkiZoCSSCgMDYJZiBqdguh4OQrKIEZ-IBXYmjsPABRRWOukpZ5uTxZcEABWAXiRGpcpRW0YiUOo+I8XxUW0EISFeQsJX4qocwPBAahqbZyyFVyUUALL1nKQgAJxDdKRAIf1ADM0oDTuAAy9ZVdB0G0CNCFVbQ40ITuXqaNBQjSrQipEHKu3jXBtA7vWg1DeNA1HQh1U7qdl1DQNN1EAAHHt02Idt-UvW9u3SnKp3Spo+lA9B407qNV07ohmg7l9r23fdQ1wwh20DdV+1vaj30IfNg20O9I3jUI720NBcFwX1V0DSNu3E6dGP1mTtADctRBkxTVM04qQg7tBJMw2j8NynBSMrbDP31ljQuTSL+PuX9w1EIDwNwaDY10yNn1Tej23ay9I1yvdm1PXKn3QdNJsnWdF3A3t0rC6tOkbbNtPG6NE365oABamhRRYdJvJxNQgOGbocrqingfATGsfa7EwJx3EdmpQmFWUEliBnMmiXJCnKaplUufpbkeYVJk+GZFlWTZEB2V1ImOc5ekGe55dpaJPnwH52VBVFIWIGFEVRXSMUiHFHCJSJyWpd308JdsWWWbl+WFXVEClds5UiGpVU1bkW8741iDNa1UXtfgnVqb1h2rb9K39XKy182Tr-SnBo0E6bP+-VVd6A1oIrV-vQbWn8+bgNoHNB+GkA73wQjDVKcpfr3UWghcayCUpylZjDScO4dy-yweNWBWDy7vQQgNd6v1drvShtDfSi0ObQXrO9IgiNaCbS4Wwo6MDeHizmmNI6A05pYLlKIzQ39BFSIMrpOURAsYvWodtCWKCOE6QQnBahmhPri0wUQJh1seEKkMTpSh9NYEKPGr9BR90CFENpg47B8j6xIPuig-2gcRLB3pGHYwkdKKtGolAH0FQJRQHcDABObFlApy4nvPOWdxKniSV5QuSkVIHzLh3SuXlq610stZa+DkFJt07rkruhVe790CsFUKiBwqRREhPG8U8MpqXnqlQqGUV7ZXXlFAqtVirbzKunSq1VN4jNPmoc+LUoBtUbh1LyzdjD3xVvTI6gMVGE1oNTW2X13q6KRm9R2r1cF62urdBUV0aHHKmsjPhOk4KwV2fsj6hzKae1Vpcnmv0yavSEh8qaPN6zbM2a-Z5rzjqSyOirO5MKHkmwBeNXBZyNoHJBd8iF2yjkINlntBCwtTaDT3Kggl0odycxJS81FFLqEm3uhtAa9LiXwt+ljEFJt+rUx3GizlVLuVCEmuNClRKhVcIQkI-qIDDpY1OhTaUht+pEM2VjMaZ0abax3CTXWg0v7LWVkIF5mzPqPV0tKWBWMTUM2qtTSmHKhCQxAWrHSS0vkSIegrfSA1EKGs9ctPcrrlocw9uLJ1QsRpqOgqtOCv01HSiBbtF59swV7UIbajan96z6XenBYWjNtHrVgeDV6UsgahqfntRaUtLav1FfzISxLbkeoBareFlM5pKKuUdFt0FMYCymqcvtmg5bSgVvdOt61R1OspuWiR50u1CGBpzQtfzjkxvWrdE6Y1DWI2AZDdhyaqbnQRntG6b1o2xrmj62CAMdJTXOttfSRCXU+r9aDcGcFxrjSPW63SrD9I-sebtLRZ1oJCOFRe26ZrxoWsNtVRUb1Pr0zOlrO1r12HqvFns9y1ag3yvzctG9TrtESoQizJhm0hWTQJqWx5NzeW4Po6c9lYMTnXKZVQ9jMag00tlTxsjd1SVA0g9KaCfH9KIT5QhrRmGjovqOWbJD1zGasKZdBrZdq4JyhI8B05sHn17W-b+o6KGv7sdfSbLG60gbseAcDa55mPaI0nNS-dk5tr7qpgZ4VoMrZjV83BQWM6V0mxQ5tXTM6louu1hJra0Xx3P3JsdXBWM9yPKNjo7tmX4VkJ1t7W5Vam3JaGkc-m4nYv9XeqlnNX0J0ysISW8m+bwuDUi7Q9NmszPGrJfWBNh1LZ+f6xGvjHnUVWofXx5zjrzbWbdnZz1zq2uoYJTanrj1pXGutgcsD5LtW6q0187VVCTaKaNbKs7xrIuTcTcS1GfWA5BxDvE8OgTYCtBsJQJSRSYlJzianRJUVM5eWzqk4H+dNAZOLtkvSndx5KEnpoVZIBuqrT6jRRG9D4C7WttsXHojTZg0uEc0nujLpA22P1UTWOG3jRoqtVk2wEIAC9nt+PcG9iiH3NBfYgJWAAYnOSsNh4wsViRxBJ4yRIg9yGDySEPCrQ6yaXOHsvoptOR3fIn0pLjU7RXtXT4bdwY+lKyBCIgSW7kuLjo5BOZpE9WvAd62x3ps58S9-xEdajc+NAAQWwNgQMwAmwZLrEmEidoqiaGoE2QsfAUxam+0IKAvJIrEBj3HwsmgE-GEwLmfMr5s-F50HodcwJQS9AhM4KEgwPCwlGIER0JJ8BQggGEPYdgLgWDHBYbMNIexF+L4WRY5B3AVHXMWGuSx1DGCz4WVUgcQBhMQLz+AcA6wAAVgxzDinOTQ3VzgcE0Nsc0lprSt74BAYwJEs+MBIoP4vuek-84L7Hof2fn9pi8EgAvxg-f2C3jsB8gP7z456J5ZAQB8ARBzCyDITD7gGRh5gh4f7F6GBiD951jv4IEIGmhYA+DgTrgAByCkuQqoYBuBmg+BhBS+fuUOjSkQVB0AXE1B8ARYIgN4eQdk1o0ARYlYEAVBsyNINoj+OBxeeBloNBxgPomAEUN8okyoFB2ezAPurQOBmAgBEAwBdYxU9giAohYhy4q4+AnoXYShpEYBt+H+9+Bh4BqY32b+YBX+EoYgv+GexgRBAhl42EN4++MAqgremgegLAK4IBth8eEBkA0B6wcBB4qBn+SYSBheYh6BmBme8RlBrBxBpBCh4ROBEhBBfctB9B5AjBdwLBkhbBdgnB5A3BmgvBYg-Bghcwwh5BGRw+BRUhy+shBAZBShhYKhdQahCBGhQBXgOhtR+hqh6BMxlQYgqeAAklhDhHOD6AEYgBMXoeYVYQgTscoaAR-l-g4RntgcPs4T-unnmMYGaIkKELzssNHJRDfnkV-lETAfqPAWcYkefsgUoakeflgf0dnigWIQgSEnWKaPEnWHwGmLUQsEmCEnRAxCxJHm0aCcPlkUvgLrITSECQvnkbgXidnuCSaG0JxNCbCfYPCSErHAlAnKiQSTgZiR4byGwCwLie0cXmieickTyYWCSZCeSTnpSdSbqGEhgWoFEvSSIUSYWMySAF6FSbeHwHPpydnooWqYMeiaMVoeMUWJMdsZYXfgcU-hAccXmKcaaamC4W4VccvhQBgKZOniaV8amG8TEXyHkegc-oKJ8WgWICCaCegQsCUBsbyXyWWAkAAOodjrj7S0DYAJB+mgl1zFJLL4BehAT3gUaESMkIGoT3hbgsDJliEQARTkDpD84AAa5enIredQcRfJhY8uYgcZ70iZqpfJ3J6JzgiIMARBGo642A+IIEWY6wnZoJ3ZOBCeSRgZ6JaRlpPJnRRRxgUZiAPgZBeZHRVBlR64PoIgWU2Akpm5sppJ8pjEnIiA7eJ5ap4hO5hR64CxZY4+rRW5d58pyk28r5p5y5643Uc46eNoRJWpPJjQjpNcYZuhkUapFh7Rexxe8FmgNhWeRxr+JxThEBNplxS+ipCwUBbQDpCUmgPggBt4sAzxGFbpUB7xsRXpEgievpjZOB6Bc5zFoQiYYZrF6JkZMZvEnYS+8ZHZTFfJqZDcTcmZ-Y2ZFGJZOBBZS+D4xZwlPJZZjSlZlYNZS+IgdZ8gMlCBLZbZQlRJU5YhvZwQA5AgQ5I56EY5cwE5YhxlXxs5RJC5P595XRa5G5uRrl8p+5h5x5Xlt5wJblK5IAF5re15AVTZZ5u5S+T5mAL5N5UVv5S+n56g35gVhYyVayAFfRgVIF6JYFCUTpmxUxgVhV8ACxMcRSIu5AUEpJUJwpuh8JfOP2Vk0pDlCB5VlV0AQu5ANVdVgp7gFJTVYgSYLVvV-V7VQJsFYhiFhYiFyFhxZpaFFplFWoWFf+qO8g9gFF8Rrx1FHpMlPpbIul4ZoJIZSAEJp5PFsZS+G0CZSZSlPZWZ8lk4z4T1KZRSYlywEld48lRZp1JeKSI4AlukQlb52eLI-kWAkQ646QiQgN2e8NCQAAImwLoOKJKOuH2PYHwA2UZdNVuYuWIcdayIjZlaeYWBdZxZTdngFHGJKeuKtODbTYWFDSkJgLDUvsjeTcPipRWWsOpbWXGDpR9XyfzWpQAJrrjlW83F7I1o0Y0SjQDY0IC4340ZXqmnkdU4HUB2JcyGJqyMBCBljYBJgR5R603P7YCbUzQAV8Aci4C43I5ARtBeC84CBiB5hGihEVCOC84shHkwDYSSlBGqBe1tAEAu1BFsBUlX74BFhQgRDkAchQA5Qsj4B2StCAH3kAVBGtD4BASr7Pm8Br5sAACO9gmAQgmgAAqq0PIGwA7bGDnmoE3fQVAGwPwHmJXWwNaKnnVPYAnYkI0jlIsMra+PYEVXwJALnU0P3X3WwJoDnasBXfYM0EEQkEEZgChFAfHQIT7ZXTeDXSjevdaKMavujY4KvoXf2KnXkIgMPLMK3k0MEq+KyGrS0DeKvhFOHUEUiChDPM7bfXnYgPYHFPYJ4JwVAFPVgA6DYF3WII4DXQAKIJBgCP1yD+3B2yD1F-iYAricFgD2BHkrDj2aCp6vghQtT1kR0wBZ333EPwABSaC931Fbgh072t5hQMNX4JTu1LDt2cj-2tD4Fzi41CA36nlzU4EuncXfFWi-Ga0uWa0U2qPEm6gQlklDWNVwmjWIn0S2DtUQ1ckmPAms2PFQBaMNUwkjUIkxxxzGO0061iFcVNkCnaPDV6P2PQDikRJSkokynqMalRX5U8muD2AlVmM6naH6l6FmNaWt5LFXi+F4RxOlVRXU1aM+Bzgv1mhZTrhyiJltAIDCNjjlCAUhM8kzWgmMBKEyMLVyN2Ev6ViOF7WYUXGbVmhlAZj3EJ0YN6i6DyFNMRFUXRGwGelKEzk-FnX+kqN8lZUgAkGtORVLnBXrjYmsjpULPrNL4yFyG5XomDHoEmVYBmWDlL7pgEBZjn6nUDNyBDMlWGnxGNO2GoWVhCDDnbCjlkXYXE3NPf6uHYXXE9NR03AoT6iNJR1JggRFjrC34gAjMAvukTNHUKMwBKMpEYEAnpE7PynLOJVrPymbPbNEsxXSE9HyFAWamD4nOyVnP9kXPGBXOZj953OQuPPpPPO7HGmiF1NQDKjkRQAwlX5Z0wsQDEOuBiAeAVAoMDCyCKSRALH4CJ48hhGaAB7YBkS1AijgShGShcBoASJwQoBCQqhqggC8ACCKBZDBA6jQByAKDCBfP968miXXx1gKXhgamfNWXfg2Wr6+s3NWhutfUeuaBjg5nes6skBGET2GsgAmu0AqjMAgCNRpXcCWsaiKCd4HDwAAACcwCQBoJAjgUgaAFeVgdk2A1kkBfAFgubFw+bHiOk2wTgxqDbR+8AJtag2oJAxQw5igDIBoyojAyoQAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

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

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKAAsKAAjHLpSAAL5EHj8QQganSSCyeRiRS6haaYCaAAqmB8ME0ys0+k0mzxAG5akbWgtdPw7ZoAO5qfAQH1CPhCD2Ifgu75uzSLK3e2MASWWiTtVU01FqmhNmiwPkQ8BQMctSfwKf05c0tE0AH5NMYAFSaADK4acIk09dyheMLZsYBEuVVmezufzhcTyYSdorcprdZAjYAspgxP3ENbOyBNN2QMvV2UaTaiMPTaOC0WfCWyxWAExzhuaAASbAWEHIkQ7Xfnz9f78HtUYSMs2AusoGjJtFjkFh7HgC043tAAKABKVMTVqQxV2gY1rjkb1gGHDCJ1LBJC1odCxGVIDQKzXQxEcKA0IY4DWTYRAfULZDUPwpiQOjIiyzaSDECEfiEiokDaPozQ+AQuCYCIRiQJA2MQQvGAENEpDjx4pTMHsMQIHYMRx3IexEG0pTgMwcU2UQFsxTkfATLMizLM0aAAGERCWdxEELUVEHFAg4NQnDhNE70AqC-A4P8SdhxA5UkPEm1h2VWpKPQsCsNaABBbBsDw4cWLYjiUP0NMMx0mTjCESgfWMBSqssmqtQlMQkEa+cIJXPQYLU4wtIS4DWqyCA+AiOZZEa4aQJknqoJguSkNmzQVp0xghqYxgMsjWoQz4CB7FkBCAzAexXDEDwKgAUQGWQACFIgTfAEOMHk+S0zR8uwZKRXzQKJSwxQbzlFAADYAHYVTVEBeAERQsmCHVoDkBRhGwfEVMUzQfGs9R3EoY6nM0ABiFgKcjdKoCETHthWch1G2Ay5k0Wmscta1uKzPGwAJonlkLUmbxFqnan+hzJS4NBwZQWgVWYEBVA0aXqHVBG0D2OwLgAATmBIDRIRwpDQYFQWO7ACbGvgLC1g54B1m8hFoZ3ticIRwdt84OGDNRtRIYpMcUBkDWVRhlSAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

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

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKAAsKAAjHLpSAAL5EHj8QQganSSCyeRiRS6haaYCaAAqmB8MCImgAQvYxGJoJplZp9JpNniANy1WpG1qUB2IAAimEWbs01FqmhN0Zjml4AhQmmMAAkIAJjEQ4zHA3Jk8YLCIM4gsznNIsfABJZaJZP0OOquPAcuJxAFkAAZUQNjAIjLUHjeQgQY7bx7Tn7xHLlZr+Drmgbg5d2eXLeXMbbHYAsmG+4gaauh3n2ymQBY+HuyoeZ5a5wu5UeV83WxqO6m2AsIORIgPjyP8zPItPydH8-3jWdawSZMACYn2VWpGB9b5-U0dwKgtK0IzARxdFkAAlADEDdKpY2XVD2HIBZMMIoNsNw-VaLkN19HdQtjHLAB+IC8F7KdyzHYxkJjVDRUQcUCHvBIIxPUNFiEXR8HsMBEAAClUzAwDAG18AAShIzRVPLfAFKIlj3Rw8g8LEJjSw3eNuJMyD5wScsY2TTSwDjXSbXsWt2DmPThM0VDKxgCMo3s9chxjLAfEQeAO27PjwKHRxErImL4x0PRk0o6jLVsp8sugCge0AvhTKDIRVA0YqYugexsBWCqqrkGq1HUeqYwQ+ymyitzNDihKdyvA9UvjdLk2irLtF0Fgx0vMR9xveyh1K3Qw1PSqTw6urBt6od+qHGah2GjK0xA79f2nNbNCmzLZpyhagJEK6wNu2bNA28rtraxA9q6g7y0OzQkLjXQxEcQdTTCm0xIk-ApJdZDlS9FMUOgY0ADlMFZNh3DDSUIxm-HEAAd2TVT9P0UjTpCrHWks6zbIjHaiI8CpqeCkTGZNCtLWtNoEvEuQkagl0I3QsRMJgVTmcYojdJ5vIKmhzQ+FU2WbXpmM4cGzAHQgdgxGTMRyHsRBus0TSJVZRBuzFMWzYtq3BoRsXMOTD3JKg+rlWVxtajR30oFQgBBbBsBJuMycpwyadIyKh014xTPJrNI0G1OtQlMQkEz4xWbC4wfOzoytUgPgIjmWRM+T2bNdx-HCYlaAy7umMc6EMLth8CB8Bu62U4rkQ5Uz9nqul6ndMGmMO6+nPBUz2Sw0wIRL2wdTTTbG0TxdRO5-jTX7UdaAdaPs7LRGhMNWHmLnuTE97-WsPNta3baqBzv4wDo-dNnndRggChzAKfIwYOyE-R8xPOFd0q95KKWUmpDSWkdbDjogHAyRllyeWoCeRgEZI7YCfJ5WoPkTQBygVASechVL4AgDhVwYhOZiAAKIDFkLaSIVZ8AVx5HyChhZiyZmIBguQMBlYihFuKSUXA0ByloLQFA0oADsKo1QgDbIoLIwQdTQDkAoYQ2B8RhUej4TS6h3CBmWMmAAxCwRxqNahCBMdsFY5B1DbCdHMTQrjTGC3MZY6xI5bGaDsTBSJzioDSKdnIxQAA2FAtAVTMBAF-eR1B1QCEUHsOwFwAACcwEgGhIOlRQwJQR+WwFYrIGYLznA4AUmCQhaCtO2E4IQCSGn5I4BvNQ2oSDFBMYoBkBplSMGVEAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>



<a id="nested-tabs"></a>
### Nested tabs

See example:

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKAAsKAAjHLpSAAL5EHj8QQganSSCyeRiRS6haaYCaAAqmB8ME0ys0+k0mzxAG5arUja0+Jg1AAhexiMTQa326i1TQmjn4FCaYxzADuxiImiwPkQ8CjxgAcoh4yAbURQ+HOemQCxMKyaYnk6niwBZSKaABiZYgTTkNLzBdNRejpDLBATSct1Z7AGU+-hcsraowXd93W1fL7-YGs7G7ZoQ1Aw13Iz2AytIgOq2me2aIAfJ-mt4Xd8ZY+V1NMj0OT8YAOoP6aaMAiXqT6ezm6gatGsuh8OuxgADItlCHK4PY4H4AgLZtF4mgamIiZGog4oVI46EstgbAwGwYBqO4mipl4iZ4PgmhIZRbD2DAfDnpoch8BE5AclAZEsvg9iyJofqDj4MGUa0SGgYgmieu4vDoaoACO9iYEImgAKqtPIbDgZgdF7FAumaKyOn8ImKnEZoUAQAs5D2HRiSIE4XiYBK0DCfAWB8JAoktlZRkkcJrSrGwlnYJRCSUZg34QHwrEMdhKluepAAi9hWZgfoyWw9m6PRyHcWoeSINguizPgzlocVrIIPYLRuTJpmqNpSLfhw8AIQV0mUfYmgsPYnhudZ9heTF2A2GwbmOOpACiCRgKVcj4SRQkQGAYCYDhw1gPVnJucNNlbmVECcvqNGCa0xW7fAE2aJZmgQCw7BkTFlV4PZQmsV5aFLMZnKUcayYtghQjGLOYaQ9GvHAZoNZelAFpWuuAAUACUdpVCaBbztccjrsABZhosPhRqaEAtJKIKyQjS4BrAdCMDaBbKhD0NhroYiOFuhPXmGrJsNmUbo5j2N85D84k+ueOIEIJNs1DnPc7JKPGIKA6blDUN8CjSMwImvNa1rJPU56Pp+vT+tE0b6F+k9XhRmI9mIFeNuQ9AADCv5QO4iBRnGSOizLcuWuuAeWtbUPKmjrs2zrxhCGbUDbCTBLQHIsgJpHWua27kPxyYADMWfi3n7GWkIFPuW4x7Z0bMd11rBdy4kfKx2XYYAAYACTACTleU4GQjHravfSXwyqd43UMN6XNv91XVP+HR+irz2ca5AAZJvKsjr4eurmj0+aIwjdH3PjBowrzPXqztR33OsN7z4B-ZqjGP6FjhuxbArQywT1sSZk0eoPWAUYYCLgtiubMjMb5hgfmGAsStyA82tgLIWmgRafzFkbSWod7TB3ltnZBW5m4QJ8CnS0FZG65zdjrPWBtj7EyoeAyBy5YCrnbnnLKAZ2BiEds7LhbtPbe19v7bMgdsGEPwdZCREc55R1nmXZuuoM5tyYRuDRYYC4iAAKwlw7sbCui8h61wUTbJRhiVYJzkAkdR5i3Y9z7sY0BmQR6aDHjBCeU8HFa0sWXU+vjz5u0CfXa+U5b6zgfkBX+mgACC2AIr2m-ug2MwsP5Y1odYrUlAcyJiydo1WWoJRiCQAOTMiAFgEHLlaYw-j85FKyHFCIcxM7EEbjreGag9bBL8dbS+sdAnRKgHwROEBLooyQrtVwYgPAVFmgMWQ3pIgAEl8BFJ5HyGO8TElX1qCKVMOFq5cDQNKAA7CgAAnCqNUIBeACEUFkYIOp076keUnShFDVH6hwQ6fSLIfZRgAEy0GwAkNmPhMBgHUO4SggldwAGJnosCibUROCNPlpz1EJEQhdfmenIJ4KAUZaCoqgOitQmLvlCRbnY-FNgiVRjlGBTQtBWWsrJWi8hnzrTfwJUSlOFNgWgvBffLlvgeWaCadi1o38Jr4ABe4YVYK2aQFAlGBFAA2bVEKoUwrhcsDVLBaDGuNWSoQ3KTZSupa0PR9LCVqBJeay1VDrWvJpbY2VBZ+WOs0My2CbLA1RIOWKY5iggWyjlCqZgIBVAaBOdQdUDy0B7DsBcAAAnMOx0hHBSDQMCUEglsAwqaXwCwqaDjwHTUCoQtBa3bCcEITV5bzgcETmobUJBijYE1AyA0ypGDKiAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>




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


