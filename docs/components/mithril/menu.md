[Back to Polythene Menu main page](../menu.md)

# Menu component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Types of menu](#types-of-menu)
- [Usage](#usage)
  - [Showing](#showing)
  - [Hiding the menu](#hiding-the-menu)
  - [Positioning](#positioning)
  - [Long lists: menu height and scrolling](#long-lists-menu-height-and-scrolling)
  - [Callbacks](#callbacks)
  - [Dropdown menu](#dropdown-menu)
  - [Exposing dropdown menu](#exposing-dropdown-menu)
  - [Dialog menu](#dialog-menu)
  - [Settings menu (position to selected value)](#settings-menu-position-to-selected-value)
- [Appearance](#appearance)
  - [Variations](#variations)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [Dark or light tone](#dark-or-light-tone)
  - [Transitions](#transitions)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Menu options](../menu.md)


<a id="types-of-menu"></a>
## Types of menu

* Dropdown menu
  * The placement varies with the element that opens it; often the menu covers the clicked item. [Usage](#dropdown-menu)
* Exposing dropdown menu
  * The menu is placed below the element, which display the currently selected menu item. [Usage](#exposing-dropdown-menu) 
* Dialog menu
  * This variant was introduced in the first version of Material Design specs. When a menu contains elements that don't fit on single lines, the guidelines suggested to use a Dialog instead. This type of menu behaves more global as it doesn't scroll with the page; it could even be made a modal dialog.
  * Examples:
    * [Dialog menu](#dialog-menu)
    * [Settings menu \(position to selected value\)](#settings-menu-position-to-selected-value)


<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKWgoWjbABsKAATABGEAAXyIPH4ghA1OkkFk8jEikNC00wE0AFl5PYiJoADJsBb2p0LAAqHEQmnVmn0mk2eIA3LUza1LTaoPYAMIAZVjrudYk9SDjsZ9foDqNiaZD3zDmhiAmjCAg5EzxgAxCwWCqAOwAFgbxjzBYWJUQJbW5f9VZrAE4ABy0Wgt2qh6Dm1z2ACScj4mYAFEgWGJ7U13OJ7SyYJgfEh8ABKP1fTSaPiLt3Jr324C1M9niViJAoTQrtf3h94Q0rciRV+WoaciyK+G7iD6RCfmeIgQKyiDkHuL6FuQ9iIJBUAPpoO6IQQn7qoeea1JGMbxkImD4PgsbFEgi7GEIRYELstrGLen6QN2AD6v7qBxPiYGA6juJQ9jLK+DFdmW6Fnj4Zb4PBHEISy9ggphqkAKy1PhhFQFeKadqR5GUdRiC0XqDH4ExUbbKoCzbBKSAsRabGluQHGqJuYgcU+SGqX2NYsc5nHueIvH8YJwmiYWZTFi5mkEeOUAFuZV6ZheV72tQn5pUmem3oWXhIcYACaiA0vaziIjAAByOqvsY5mWfY1lJnZXqOTBcEIfuiBiSh3r4VJ56XjlN4Wvlz49ZoxhVRAjkVcENUCHVIANdOzW2fZiDtbB8E4b1qE+oe6GMPF+aTq07YHlRHaZneGGaHxAlCRAIn4BJ5CvpdnYuYN7Flst1b+cQn4yeQcnkAASuRbDKctanYAkxiadpbbGfgKX+tlLqaJl91Y9eSB5d5k3FaVjlqOo+1oW0xmfWj12E9oO1dUhYh9Ydg347lY3E8tM3kxoVP2l9dMdkZHb2h1u3dVTHO1CdKPnZoACC2DYLdn6smwiAAO6voux76FUONQUNdGUDrQhQLyW3ECb92YRexiYI5d2qQ+Oh6MtwKgr0ELOFCgweLCoyBIGJJyXwEBhHsdgXBYlYWNOAUO6pizkO4FTLbxWAaEjqdnpqU0gLG5SaKscCvgACtmcyaCwZbWucHCaNs1q2lhUKzSAh6mydg1nk7eoW45uPu0P9EFbb9rGMRHLzjSR2m4PplZBAfARHMsij8vD4XsRrEF6pMBsAAXpNakD+7AbwXwSzGkLu+YUBD-29fqn44f7-u5AG-8WIj8j7vylizSabNUJX2-vlTgr4x5QI-raOcUJTIACEED4EckjQw9glQAGYVSDhQcYJeQDv7TiQUPOcqw2BgEwSAQw2C8EEJnMQyB8DyHzlMgAVWWPBVQcw6EMJwfgwcXDWFPzIYgzhxgqJNHUBUHQL1Nx0OVvAMQABqWMIg2CrnURpHubCoEcOQTI+w2B4IMj5DPehjCRFCHEaQ9+xih6xl8JYwRtiCGQQMRI92jBfEPgGgEle6UnKONUr-bA-9AHwI9szPayEIHBIfJtFScDYmDykSYkA0YkA2HrmWO+YgJRQHcB44RBCLCOXAYgEhGS95ZKHtGZSYh15tCiWANQZS7ZIx7sks8-jwmF17uEwZ798K7xOn3Ope9V4jztuk2ZdFiZ0IZrhHxR8J6RPWNvHpR9DASEXAfMJ78DkvxAjTMW6UAnmPIHfLeADEloQCa0uYy1uIpygSLS5V1jISImUfEZmF+6mwnvMjKu8J4rJ6SAd00V1kzMdqvbZDzMH7MOcct218znQGAo85KSZDEPlufc1+NSiWPnWO8mw6hPnf3mtVWqxdVrMXoaQgF7sgUPhBanMFEBLbmO2NxOy6wd6bNXtC6xc8vBQhgJoRc3FCzrF7hs8eyL16b2NGKpxRzbRf2-ifc+r5L43NvvfC55KAnnMeYsnVoSsWxMidEp5FLVIgISZaoZKSvRpP6Q0qMFDUHoPKUwwhDj6mZIDdIkAVDVC0JhUI0NLDVURucdw3h5B+HT2LomkRYiU31LTTItmbB5FxyUSIFRajNHaN0foxFGSi0lzMRYv4LQQ12PDamxpplXE+HcQmzxg5vENqgWM+BQSvWfxORkp14oYkZPdTLF1frUmwL9ZG2c0bcmIHyQ3O5mBildI7ZU6pfVR3sJ7cYZpCw2kwA6cehNfSvUDOSRy7+473bvuBVygZMzBnqm0nwIQUcRJiAVRAMA9hXBiA8BUAAogMWQKDIgznwKZHkfIjoqzVgREUiAxQSknIoOsg4UB1g1FqEAvABCKCyMEA0uLjSKA1MwEA-D1BcBQNQbUtG0CxwOPAAAAnMBIJoSCOCkGgH2VgRLYEEmvPgSdm7CaVEIWg6nthOCEPKZTccOAgbUPqEgxRzGKEsax9UQA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

A bare bones menu (made permanently visible to start simple):

~~~javascript
import m from "mithril"
import { Menu, List, ListTile } from "polythene-mithril"

m(Menu, {
  permanent: true,
  content: m(List, [
    m(ListTile, { title: "Yes" }),
    m(ListTile, { title: "No" })
  ])
})
~~~

<a id="showing"></a>
### Showing

In real life we want to show a menu after user interaction.

A menu floats on top of other things, so it acts a bit similar to a [Dialog](dialog.md). But the behavior of a menu is entirely different - instead of being displayed globally, its context is close to the caller (a button or clickable list item). The local nature of the menu can be seen when scrolling a page: an open menu will scroll along with the page.

Four things are involved in creating a menu:

1. The Menu component
2. The menu visibility state (`show: true` or `show: false`)
3. A button (or link or clickable list item) to set the menu state; and to act as Menu's target for positioning
4. A container that holds both menu and button (or list)
    * Because the menu is positioned `absolute`, the container must have style `position: relative`
    * To use the maximum available space, the container must have a height

Menu state is best stored locally, in the container component:

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgVgDYB2AXRIDMBLJGG0FEwBbZGgB0ACwAuw+MXRRpiJahAAeeNygBrAASTyiTgF4AOiBnTcKAPS3M5aZICu5MElGxxAc27OXACNxbggHGDxpGFtsBABPZxVEW0QADxFsPltOTxhxMAiLPSN4c1JpOL5JRERpCwA+Mygm9TJybmxpPRh3Mqsbe0cA908VPL8A4NDwyOjY+ATqqGSYaUwofEx4aGT5xaSAWmF-Q14Y+MTlo5P2+APV9c3t5fEAKxgG9Vs2julG5qgrQov26vQs-RgdgcTlcI0QXnGJyCITCmAitTmFyWKzWGy2O3OC0uiAOBUxROxpIi91xTx2bw+IHqXx+nX+LXw3AAbnpuPgypQIHUmV9OVz6go8EgwNJQrA1LQULQDkwUAAmACMIAAvkRBCIxCAACKUbD4CAAdygDIUkCUKmkansegAklA9OsPdhsHo4hAXHoLf74Pg9C48LzhLEnDA9FodIhuhAUE1ndwoxAnHphHpOJQcxZjs5bhZU7ZI9GusA9ABZFQuIh6ABCLmk0mgjYAMtxVl2e9IACq8RPa3P5vQWPbE0sAu2rPTVutQBvN1vtqB93t6burIdIPSjkx6KfYppNOddE0QM2W91HgAU1cwbfIse1AEo9CZ6gumno9Be2b1gA8p0cqxke1AakQapEAAzEQAAsjBEEwRAsEQAAcRAAJxEBq9AatBGqwRqCEashGoMPhaEahhGrYRqeFqrQbDiMIOD3neP6Pn+-56LK0hICgegAAZLgG-jwnoAAkwBQNqolEHx-4JnEIkbnxH7vgA3HxfGAYEa7QC6oZHhYfIHPg8IQBYekAv+gEPMoX6-u6-EwJIloiZwWx4Mp7n-lKiAygQbrWakIn0Fp9n-nxRjSG47rACpehctwiAWiJj4ei+b6ft+bn8fxTleRarnOYg4ieZasXFQB0DzsFoX4OFaQVWsyjVYg0rKK1GxpHVxUJUl2b3hYYoWAF9X8SlgUzd0FTCUVC3FbEMD+HKIkWCUz7cogU16M67bHhAG2ytAAnVEBy4CbZ82rdU3A+DI20gNo1TtMKqUzdqP38bq-3-tQQP8cI94SY2c2rcVazkD4tQiaJADEclGW2Jn4Ip00w0FZU47jnL4AAEnyiDZQVP6VdVZWub58D+aDxWSGTRo9Zg6l6OIDHRQ9C0WnyzgiQhTP8U9L3SCJz7SK+UiIM9MgEzDbQYAOjgI5LYnI1JwgHHJzV9W1qTY6L-6Zs92hve22BTabeiBJgYA6PgpoiTLLiIErq12soSgieDO7SFDduORAUaO5r7ueyHAnDpCN0uKBF3eBx2D3veOuNtoEWUzH-4B-2e6eytuMzYJy06+I5fR3zpe8vgSM63rwDZ2kJu16XBsECJrepF+JhHl3-URV7de8robvkB7o9115XKIOQmCBMtUcz6XiDz0o8fQ2PM3QB43BOxTX48XnC3U0PRuub3a+7xftNHvTeBn8V74vweZ8fjHb8d8VX+-wed8t8xotgxhuEuMM+QiXRuuUywD-xYECD1f2IEwKNWoJfAaqQ2LV3gUdcsABlWmAtnAegEu0dYPhhJ2xdtec0VoRI7zrteFQIkaoWjtoDAB-4N4Om3jHfeWgj56HvJTRaz4qrsNcgAQnYZw0W-9VpsH+j-P+Wkmh-QBGkSsehrK+RcPAS8pp6FQHspKHqIVk78DQAwJUOo9QgCEKINQNoSA+wdGoQCi56ybiDtuQuw5GwACVMA9gIKA9cjYiGYHoY2F0doImXUPKdCkSR7Lph0VeG8VoxxhwnCAcQtgskmJnGWPQAAFM6m1LqQGsmeKAgFD7QBrJmRAAA1Be0gCFtIAOKuQsK0LkPhAyC0kOYMwFg1SIQmUUcWMhxmTOmRMkAaUMoWibBAVICyQC0D0LsqZegpkzJFNgZ8khdHbJrCRPQmEwAam5nsw5BxxA4SeWqGAzycIHDVN835aouZfP+f8l5hzQVqgAF7CH2WAA49yNR7O+QCxF7yQVArBZ8t5ny-nfMhbspgMK4UIuBYCw5eRXloqBRin5PyXnYohcc2wzJvhDMaCAey55GpdEqedOUElXKiJPitJynVExHiYd0MqPk-IHXctqdldR3IjXIMlVK6VMrZSfHlQBgrxWh1gF0KRg8RU01qv9JV7pwYWHEOtapUBSTQDWNoBe4gsB+lbOIeeThD5bFth3EGADpaywduQbltr+7mRAIEIU7ZhAzjrgAfjGlanIaQLCqNLhpAx8BgGWoKcGw6-q67g2ifQoBdtwaQwgbjOGGskao2AIGvIfJ2673Nn4KAUs8riDbdoPBeNLR9t0XyUm1lj6FXvpaOm0rB0QE4JwSIIlsIxw2uC8megRbcLFqzdmnNxBTN5rvdxfsxqB2Dpu2GccRIgxAEE4wRhPKHQsMTHqPoABkegABiNR8AOydo+kABDaiyigD4RkjYLAEOeu6YCrYLBsVTveauJ934F13IEqtu9Y5CRrph+q2gdCT2nu-f8c8F5LxXlPHDuHAFn3TXXRRpcPx4NzeIYNBxKAWmtSSTY5AdAHHXFVV1-ppBSHNuCh1PriB6ELWPRtrHjJQFDcncN+T2gSzjZhxNLGU2pDTfg7opywALzPpm+A2aY7g3idARJ4DdWlygblGWTb8CNmdF4AMNbahnyaR2hc3Qhn+yrlPVYGc7QtKMB0pw3Semfi4bh3hW9GHv0EYfAjIixETvKkeKOn8Y4MdxmwOjC1Cug0K0NAGMUNHsqgM6Aci9YC2tjLUmVHL9V6BYcscg-Lqx8kbO5pO4FtWFR3sKiRrlxXsKlQzGV-45VngVf+c1EC1VZREZqpzQ2fx2dKpOo1EiTUWnK4t2oo1c2TWIKDasqxKhrurDa5Ob1dqynnkUUccWFoydWuDEJYT8A2bwXZ1aiDkH5NAioBOvrd69ZjglqISXz38RS8IgV47jWGvIR7PL8iAFloARWnxehgKBFeJY8QaINo+CgONTdwB3u40BwtTzmsUZyWbUpZd+MY5ExHWulHVM0cP1zNKzhzHUFWNFu+IrxVlF810qlTRs2qv1KchkpAgdXKob8TJzXRcz0Xuw29AAmogMDqV8OEaoyRiAnryNrtXlpXH+d7yB11xA6ub0ABytkLvzXNxjy3BhrdkeXnbyjON-5leV5yvQdX1g8sanyo8HWF68Xcg5iwMs4+NchwnAbjV4fFRXWu2CE55pHs1htKMav+xKxZtZNmrqoriA3bDer8fYAF-qpNtbegeqbbW6DHqa8kGcFaWO0+ACerVSWlVa8jt-BxFcgemGU-rtICC3H0f5AcwRsz7ALAyg4L4HvPQQ5tBsCpEbLQN+IBQaO8Z23214+RGi1XzP7thmF+uWgq-+A0+bsb6wBb4775J74wAH6IBH4n5X4X6Nh7I3537-RMb-R1687Vh94fiCqp6rRD6gxgFP7pZYG-7-7r5z5gBf5HjL44F-5r5VRgHAH9IgBgEQFQGn4sSwHwEaYzRS40bzQK4fwKRy6zjR4ACC3o42fEK2z+n2SaBSHGBa-0LG1c-6xSt4aao8LGkAGYywSgOeM0Z23IehC0DOheM+nes88sEsb0cEtA5+umPuu8v6OgPglALgGwAAwggJmG9MjJsH4ZgEYbjKcvgJyCBm9LsgRBflwTDPwatHTgtODKoVaFDAYJYa9PkhxPYVnA3PktZMIN7rwatDwUVoVjjGYLIONHIZaAoXzEof4EgP+kpnKHdAJOrLUPbApuoYoZUfkGHLEDocKI2DIXFBUU0c0gTgzuUenkweQIEfVD2r5hnteOxgrIMaDOUTAtAGMYsSAGpjINEX-PfvofeNsZWpMbKDkRYMvHMcVAsW9FGhjLrEgJwGsQAsGtsfcdGmHAcQDDwSVvNKUalCxvIVJsMbIVXPUQdFJhYLHg1uLiAEcWDD0Vof0Q6I+nzOUeDLCe3jABJMUalICfNMCZaOIFAEKFCUMalJiZUQEVJuKuUeUYYMYG9BCFCEMLCB4PCGML4EiFMGECeIcHkWdLYEWKcPALYMjCKfWDca0fDIjPkgAPrLzrA6ClJdAAzgYAY1AegMzJgVJYhJC5iZi1g3C8B6AHC1j1i6I2RpoEmIl8Qy5zYAjCDsT+hKD3jmhgAuBeAiYawACiowSgTYcQpklRgowoQCegYh2Auk5ivU4EagVEcEKALA9i+oziEgZItoDqHiEg92co9qSgoSnWK0+Z0AIkT2+0dUAs+AQsegiELAAApHVHMprGqDYRfnVE4S4W6TkcjHOpwHVBxPDJbHoJEakPZJotalUsnIWY6iWaxo4KWTOVtMUOzM9ogNWaMiJARLQM2Rok0NOe3nOcWQvFzGxhxlxlZI4HxgJitN2a4RsCJMjHBB+gwBqE2AwHVMEaET4CJIhBfnspOU0HGZYgmWgFRHYtqBwCAFoLoNYtQOmYaKKbcAAALLCpCOgkBuDyBoCsn2BuHYDOG9HCAimmnwCoVqjiC0DUXsZgDiBMBkXFi8DsTaCuJMFxDYCGisiOjQXahAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import m from "mithril"
import stream from "mithril/stream"
import { Menu, List, ListTile, Button } from "polythene-mithril"

const menuContents = m(List, [
  m(ListTile, {
    title: "Yes",
    ink: true
  }),
  m(ListTile, {
    title: "No",
    ink: true
  })
]);

const SimpleMenu = {
  oninit: vnode => {
    const isOpen = stream(false)
    vnode.state = {
      isOpen,                                   // 2. visibility
    }
  },
  view: vnode => {
    const state = vnode.state
    const isOpen = state.isOpen()
    const target = "simple-menu"                // 3. target
    return m("div",
      { style: { position: "relative" } },      // 4. container with `position: relative`
      [
        m(Button, 
          {
            raised: true,
            label: "Open menu",
            id: target,                         // 3. target
            events: {
              onclick: () => state.isOpen(true) // 2. visibility
            }
          }
        ),
        m(Menu, {                               // 1. Menu component
          target: `#${target}`,                 // 3. target
          show: isOpen,                         // 2. visibility
          didHide: () => state.isOpen(false),   // 2. visibility
          content: menuContents
        })
      ]
    )
  }
}
~~~

<a id="hiding-the-menu"></a>
### Hiding the menu

A menu is closed by tapping outside of the menu, or by pressing ESCAPE.

The option `didHide` is used to reset the local visibility variable.


<a id="positioning"></a>
### Positioning

To position a menu to another element, pass parameters `target` (set to the selector of the element) and optionally `origin` to relatively position the menu.

To be able to shift the menu vertically to the selected menu item, that menu item (List Tile) must have the class `pe-list-tile--selected` (set with option `selected: true`).


<a id="long-lists-menu-height-and-scrolling"></a>
### Long lists: menu height and scrolling

<a href="https://flems.io/#0=N4IgtglgJlA2CmIBcAWAnAOgIwHYA0IAzvAgMYAu8UyIAIgE4D2ADlIwO4B2GAVoSAQBmEBPyQBtUJwCGYREhAYAFuTCwBIUo06UdNADyFS9CM3IACQvVIBeADogV5ZoSQB6N-WnsA5hHIYWmBuAIL05EoArvQAwghynIRuzIywAJ4R8JzwbmDShJT0ydKkANbSPvBJKemZ2QC0kBEmsG5QEAXJqRlKWfCN-kot9QXSnFDSsNrwvIQOAHz6bkYmZvN2nIbGphZWtg5OLu6e3n4BQaHhUbHxWdXddTl5BfBFzCXllfe1vQ2khEl2p0aj0+vV-oQRuQxhMptlZgslisdutOBsNMQyOQINoxCAAAxIfH1ADMRJAAF88FJZPI6ExWBxuHwNFodFlyDQPOYAJKccxjAXMZjmNKMSLmdji2BQcyRYjmCBgFLhQjmWAQUrwSyMJAbblKlUWMDmQRME0OJpDEQOfVuRXKxjhSzkejwWSm83mS2DFrLV3usC2zgGx3O4DmACyWUieHMACFIuRyNo4wAZDrkdOZgAqIm1FM9jAtIBBj2DGzZBRdbo9NnMYAwBVrQc4VYsEejnFjCaTKc42YKg-IeYQ5kL9bLv3gG0ruIsDBYbC45nrAAoAJSr+bmYAbczmdsNmMAeTMOMSq-M4iweAATHgSXgUHgAKx4ABseHwAA48Gg8CwfFANvLAHywJ8sBfLB3ywL9cEAv8sAAu98QAXQwPJmDXfkbB3Nc935A9zGxcgECQcwAAMuwlfx4BNAASYBOApSi8H3YitTSCiBw4ikNw3Di3XIaJ+UI4jzG0CBOH8CiADdOEYKBtTw3cOIko9CCUDgr2bQM10ESZiEEoiJO5ABpeB4BFV0PkkwQSN6SwSHgCgqEVcZ4AADw8yT6GU+gSMYSxjFSWAgr1UziM0ly3KgPllJ8+s9NkNd8RMiSD25ABVBVpDlGSAEdIm1aBFQcsUJSUaQ5O1MBIlgbFmDHBJ5Uk-lMnMd5KnU6L50VWV6wcaB6gccwAGpzAUpSZmkZN6EIDAyoAH2W8xsnYcxaDm+BNwwSoRyVXaMsyk8ACMeFcgJ8kICAfE4NdpuUptoUoONxMyg8tI4diookzErqoBLvN+z6D2gUHMv43qqV6uSIHgdgKIIl0drjObXTVfjtzUv7D36srktemZoF6g9NO0zaiZ2ptKc3Mn8cSXZYsoeLPKS1HKCbFmgfZ+m8eE0SGzXBx2jkhxIc+j6wZdNJyNxmWJJSW7sW0CiHDdWA5ogWqJfMbkUy6xgVYvRy6pjIKGc+3o7pUdWQGk3oTHIYNFfHK3x0lzLxA9g8wDXGj3t94joXoA6KMogBiJjoFYr2Ze+9h47B9ooAACWgeBka3VTRi5xODKM+AN2T63M9oEhpG48xsB-YDg4PdhoAiCinwb8wbZ8O2BXmxbO5UUvMpWMKc2kMP4HICPI7osB6iYgG4uBry4-bp07uk+2U2YCX27Oj4oAZCjXRKweNO0XRJ+FjMhwVt2+uVEpL+P+BT8y7FRAo1qz1VxJMOkbC1wzzjNJRKOdUR30yv7a+h0EBBzxhA0i8sZ4YEQS-dun1oARxnnPYAIDvIr3gXfBerMKJ4KSjYZKPM2aJVfjLaSpQj70BPugzK2lapeDOvLZ+tCwbwFqjoVwt8IGfW0KQDUZRs44xFoQ4RnMZjEN5olQB7MS4sITsTWmHBC6wGMmozKJ1ZEHgpHo6GMj9Ht1MW7fir9-aJmTKmIRisIbty1mdEgn9TznlxOIBR1DvIYVQTw7kABlSmkpBgChIiYMYPhyLtwPkuJkFFpZ3xYFkCiicLE8L4RyQRKS3aiPEQw8wm4cZ53kXTAAhInAxitjFmMsWDNCDNan1KMRsepGxvJGnMMpQyDUFwMmXJwVkxZmD5noDQPebj1AEGIRePEZI7wkkpNSEAMg5A0FmKM9kegFChh6SaM0xZvTgF9DaEAGxDROkGYklcxySwYDcIuRkXAKxtn6iEYUV4Prw0RpIvCvV-aix1jvPG+TiIFDllnRx1t4C20vg4Ek+J8TMC8mCt2e8yg+CYJEcYMRUhOntpHCYpLpAYsVu8GA0kfD23xOYICaLXZgzaVDZO-sXnDPeh3eFXdEXgGkOigQA17bKTAIwMajSDwmU6ZwRs4q8XkDXGwUgkQEgBDOkpNIcYvnMBMqM5UEypnSBmRiFmCyaBYHJFSGkmyFCBABDsi+NBKRoQIBqTgpQxCSHWbSGgVoWgAAEtaUAKBoaI6gFCHFcB4PFzBSg+ECMWXI5zYCBqwNgDAH4U3NBENsgg5A0jMDpMiMwqzbV0gDSIKELZg07TDQQCNNBo3HDjQmpNwQq2wBrYGdNmb8T+hbPmkAhbi00FLZyCkaEKRAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

Menu lists with a small number of items will fit on any screen. Longer lists need to be constrained to a certain size, especially on mobile.

Content that does not fit the menu frame will scroll.

* Use a Number with or without pixels or percentage, for example: `160`, `"160px"` or `"75%"`
  * When using percentage the parent element must have a height
* Use "max" to use the maximum available height within the parent element (the top position and bottom margin will be subtracted automatically)

Content that does not fit the menu frame will be scrollable.

* To scroll a selected item into view when the menu appears, use `scrollTarget` to pass a selector, for example: `scrollTarget: ".list-item-12"` 



<a id="callbacks"></a>
### Callbacks

Two optional callbacks are used after the transition: `didShow` and `didHide`. As shown in the example above, `didHide` is used to  update the Menu state.

You can add different behavior, for instance route to another page:

~~~javascript
didHide: id => (
  state.isOpen(false),
  m.route("/")
)
~~~

<a id="dropdown-menu"></a>
### Dropdown menu

The placement varies with the element that opens it; often the menu covers the clicked item.

  * Use option `offsetV` with value `0` to cover the target element. Use `offsetH` to tweak the horizontal position.
  * The menu appears with a fade-in animation, unless option `origin` is set, in which case it will appear from a corner or a side.
  * Use `reposition: true` to align the menu to the selected value (when the clicked element is a List Tiles).
  * Use `topMenu: true` to make the menu appear full width and fixed to the top of the page


<a id="exposing-dropdown-menu"></a>
### Exposing dropdown menu

The menu exposes the clicked element above it. This is the default menu behavior: a menu has a top position that takes the clicked element into account.

The appearance will look more natural when `origin` is set to "top" - it will look as if the menu is appearing out of the clicked element.


<a id="dialog-menu"></a>
### Dialog menu

A dialog can be used as menu by passing param `menu` to the dialog component. This will show a dialog with menu contents, centered on the screen:

~~~javascript
import m from "mithril"
import { Dialog, Button, List, ListTile } from "polythene-mithril"

const tile = (title, selected, disabled) =>
  m(ListTile, {
    title,
    selected,
    disabled,
    ink: true,
    events: {
      onclick: () => {
        if (!disabled) {
          Dialog.hide()
        }
      }
    }
  })

const dialogOptions = {
  menu: m(List, {
    hoverable: true,
    tiles: [
      tile("Item one",   true,  false),
      tile("Item two",   false, false),
      tile("Item three", false, true)
    ]
  }),
  hideDelay: .240
}

const Page = {
  view: () => 
    m(Button, {
      raised: true,
      label: "Open",
      events: {
        onclick: () => Dialog.show(dialogOptions)
      }
    }
  )
}
~~~


<a id="settings-menu-position-to-selected-value"></a>
### Settings menu (position to selected value)

A settings menu shows the selected value, and when opening the menu, highlights the selected value in the menu.

Similar to the simple menu, we keep track of the "open" state. Here we're adding the state for the selected index.

~~~javascript
import m from "mithril"
import { Menu, List, ListTile } from "polythene-mithril"

const menuOptions = [
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content"
]

const Page = {
  oninit: vnode => {
    const isOpen = stream(false)
    const selectedIndex = stream(0)
    vnode.state = {
      isOpen,
      selectedIndex,
      target: "settings-menu"
    }
  },
  view: vnode => {
    const state = vnode.state
    const target = state.target
    const isOpen = state.isOpen()
    const selectedIndex = state.selectedIndex()
    return m("div", {
      style: { position: "relative" }
    }, [
      m(Menu, {
        target: `#${target}`,
        show: isOpen,
        size: 5,
        offsetH: 16,
        offsetV: 0,
        reposition: true,
        didHide: () => state.isOpen(false),
        content: m(List, {
          tiles: menuOptions.map((setting, index) =>
            m(ListTile, {
              title: setting,
              selected: index === selectedIndex,
              ink: true,
              events: {
                onclick: () => state.selectedIndex(index)
              }
            })
          )
        })
      }),
      m(List, {
        tiles: [
          m(ListTile, {
            id: target,
            title: "When device is locked",
            subtitle: menuOptions[selectedIndex],
            events: {
              onclick: () => state.isOpen(true)
            }
          }),
          m(ListTile, {
            title: "Item 2",
            disabled: true
          }),
          m(ListTile, {
            title: "Item 3",
            disabled: true
          })
        ]
      })
    ])
  }
};
~~~



<a id="appearance"></a>
## Appearance

<a id="variations"></a>
### Variations

* Set the menu width with option `width` (choose 1, 1.5, 2, 3, 4, 5, 6, 7, or "auto")
* Set the menu height with `height`; use "max" to use the maximum available height within the parent element (the top position and bottom margin will be subtracted automatically)
* To make the menu stand out more from the surroundings, create a backdrop with `backdrop: true`



<a id="styling"></a>
### Styling

Below are examples how to change the Menu appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { MenuCSS } from "polythene-css"

MenuCSS.addStyle(".themed-menu", {
  color_light_background: "#2196F3",
  border_radius:          0
})

m(Menu, {
  className: "themed-menu"
})
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Menu CSS classes](../../../packages/polythene-css-classes/menu.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/menu"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. Because a Menu is created with a List, the style must also be passed to its List Tiles:

~~~javascript
const backgroundColor = "#2196F3"
const color = "#fff"
const style = {
  backgroundColor,
  color
}

m(Menu, {
  style,
  content: m(List, [
    m(ListTile, {
      title: "Yes",
      style
    }),
    m(ListTile, {
      title: "No",
      style
    })
  ])
})
~~~


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


<a id="transitions"></a>
### Transitions

See [Transitions](../../transitions.md)

