[Back to Polythene Menu main page](../menu.md)

# Menu component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Options](#options-1)
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


<a id="options-1"></a>
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

A bare bones menu (made permanently visible to start simple):


<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKCUycjZsMU0YJ0LTcysbbycXeUzPbz8AoJCwiPhosqg4mDFMKHxMeGg4yenYgFpdTDAxcKiY2Z3EPbEt+cXl1dmhACsYaqULBqaxGrq35tb2406YJZrLYHH1EK5Bl4HCNAphghUJkcZnMFksVmtDlNjogttlEVjkbjgpdUTc1g8niAqi9vh9arUlPg2AA3TRsfCFSgQSpUl5M5lVaR4JD7AKwRQAZhQtBAAF8iDx+IIQBTpJBZPIxIp1fNNMBNABZeT2IiaAAybHmpot8wAKhxEJpZZp9JoNtiANy1HUtfVGqD2ADCAGVg9bLWJ7UgQ8GnS63UjYjGvVBvdBdTEBIGEBByPHjABiFgsACMAHYACwV4wpn2tYrRnN512F4sATgAHLRaDX6VA6-77ABJOR8eMACn1SBYYlNjXc4lNTJgmB8SHwToAlC7PppNEobZGHbU93uxF4kPpgNOxLKT6e8OrluRIlf9eq5LIUHk2AuWrK7ygU9tAgZlEHIVckHvPdl0gggr1gtcCEAvcLCqFNakHGMhEwfB8GDBtEHHYwhEzAgtlcexjFNYB70gVZyAAfWfdRGJ8PZ1HcSh7CWb8yOzBiiHvHxc3wcDGIgpl7EBYDZIAVlqWVNwwqBDyjRBsNw-DCOIlUyPwCjjS2VR5i2c8oOIPU6KbRjVD-RjzzEJBv1k1ti2o6yGNs39xDYjiuIgHj8D4sosybRTlL7Ot9MPeMDwjXd9zUh1NEcy9jAATUQSlNGcOEYAAOSVQp9MMgNjIjMzjxAECwIgpDNDQ+94rtFK0sQQoCogXI8uCIqBBK0LyMoirTPMxBchEUDwLgxrPheQ90Ki9MWnmEoCAI9b41ooDNHYsBOO4pYBNzb81sbQTPNOzQ3JYDzdpE8gxPIAAlXC2Gk79jDk7AEmMRSVLrc6CFi10WrpXbwfU1KLw6zLstyYGr2B7T1udKa6tmtQtCayHkqQGGnLhkAusRwjkcI1GkHR6b6oJ7G5oZCxFpTYCoqwYJNGDAB3LwwBEW0IHcdwCcST98BgTQXrOfYhGzPgIlmWQrN2n1yHsfZc3HbBKFwbcduAmB7GwcDtd1mBIt2s8REtIQrjkbboNPfnEAOghvxYFY8Cd2VWade9dCWU39adusXbdjdXTsW37cQLIygjv2910MRHCA4irdPRkWUS2T9x5vmRCdvOsB8RACmMM1V3L-7M7z6BAxERZ3A64BZm5gjMAd-QqlSm3MhCTu5EnXKE-Ud3NHboe4-D8eNyUlC8+dsf4OAWfkOL09caXrP+Xrda300PgbE8KBBewL6QBLXQ+FyADc6XpQ3stAgACF7DEMRoE3kvq4rkBBbCwsj-WSiAwKyBgG+EBbMv5QEDKoA635xzbh7n3GOFRp4j3XsFTQABCbBW5oGngAkQ7eO99wWH5A-PcfIc5O0tnuQCgE0ywBaAAQWwNgCcKDe7NSoU7bOrJeqFWKsYSg3NJ7cgmlSTeShMDaF0AYf4n8ujAl6M4cEAwPBQl8P4QI7pCRiT4BAMIux9gWALBYSiuQFjkBbmIQobEsAaGqMGcomgvYQG-AABUTLMTQLBcxSxli0LYhpjSaCMRAF4mAH60IFAIvewj+rE3EdUWRSSOYiIGsYdq1RBxslHDAeJ1D9yZPyikwokAFZrFkOkuuWcCkwDYAAL1bnJZ0JtyDHyVhDchSUIy5QgArc4tUZpIVKXnJQg4Rzgk0DeQor8ED4FyPOcQV5-qGHsAAJglCWDsr9jDOjIf06ZxpZljgWcYEcKw2BgFWT5BxtEQCGC2bs-ZQ4jmMwaVMmZo55l6AccYAAqkHcgqhZgPL-Bsl5by9kdmBV8k55CzkBguQCmchQCKNHHnYbiC4oXrOeWw+AYgADUwYbYzjJQpOU3z+k0L+XMq5IBgzG3ArSQlTzNk7PhUIJFkzZKouHP8llbKfCcpqms7lsLeX7IFUQhaCVFWxWqdgUZGNxlIEFcBYV6KWXwLOHmQJ3Su7nigO4LlMLXlyo7F8xC656UMr1aKwFhRAzSS-mOGA6qwBqEtVKx51q6XIqmczZVPyKGDlKSUgRlC6GZ0EblLJlSxEQG5vUqZ5S+qiJAHkqkm11yxoaUm5Jua1W1J5IK4VbpwI9M1KlNYhQWJkwPsAFGhbECyh1XqFGh5F5hujbI+NCTE0jridm7JqT02ZqFZO1NebYbVFtENfAxas0smTRU8twzFaalnb8iJXT63K1gcTFtNUy05LzausqVEZGRr3MAGKEYB1CosEOkt46438MTfO3N4ja1bBYmZNYB7d6bqvcTfNVQCleHBJLccLFG2zE3OuudkGU07pqb08DuqmmtPaZ0utixNQ9vBkMkZ+wxl00QD2xl5zXWYuMEs+AKzA3QueTa95ByFWPsaYx5lbrrkLAQVarjcKPl8YZfuJllzhMgFBc9CF0ifycZ5TxxFIb6OycE-J5jrKxA4oqDoQKBKONEuMCS8llK2DUtpccnTLqhMGbZV0yVanLOyp4-y7TRCGNoqY0C1lvgPPSutZJu1fn+NKvmOR1Vu6NW0zgk5uTGLguGpsAE3Mx9P7+vExp+F9rLRwQ3KGx+aWDWeuGa0X1+WLMyukyi8NcWQEvE-WG39urv2Qx67UaW5wAAiAB5A0QhA7PQzjQjhXC0JCV2vgCAYB7CuDEB4CoABRfoshX6RCHPgXSXIeSblqJbNUu6HTkEUOxMuUgSDClduedMig2xShLDKeUioBCKCyMEc7GoFBoDlMwEAEL1BcBQNQL7yozFrbEmBVY2BVuqhII4KQaAARAh4tgTiWRhkWFhxYFb+ACchKEPD8uEAkeahR3myIJtFC0jlAqEAvBvtoFh8B4Z5OwGU+p7IWnaPFCY6sNj3H1TSfnC53wInfASec8W3wHnCOqfI8eNIYoDO0BM9lIwWUQA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```jsx
import React from "react"
import { Menu, List, ListTile } from "polythene-react"

<Menu permanent>
  <List>
    <ListTile title="Yes" />
    <ListTile title="No" />
  </List>
</Menu>
```

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


<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKCUycjZsMU0YJ0LTcysbbycXeUzPbz8AoJCwiPhosqg4mDFMKHxMeGg4yenYgFpdTDAxcKiY2Z3EPbEt+cXl1dmhACsYaqULBqaxGrq35tb2406YJZrLYHH1EK5Bl4HCNAphghUJkcZnMFksVmtDlNjogttlEVjkbjgpdUTc1g8niAqi9vh9arUlPg2AA3TRsfCFSgQSpUl5M5lVaR4JD7AKwRQAZhQtBAAF8iDx+IIQAARSjYfAQADuUAp0kgsnkYkUVjZfAitk0ACUzvtNCxKHxNMZdvtjLVTWxzRBLcBNABZeT2IiaABC9jEYmgIYAMmx5rH42IACocRCaWX2x3OkAbbGnc7uqAG+aaP2BqDBsMRqNQRMJzRx+appAZzT6TR55H04vQUuuewAeWaYpg7c01AAjEQAExECVEAAsRAArEQAGxEADsRAAHEQAJxESf0SfTydzycLyfLydryebyc7yf7ydHmdMIR8HAACig7aqTQf2AWpNE0MQvCQFBNAAAwrew2TkJ0ABJgCgWUYKIUDNHURBImgutallABKYie2cOExzVCANW1f9EjkJYxxtc4hAAYQgb1ZlkMtsJLMRyHsfYfR-bB1RgYjeP-MDWnsbBEHIUTxLI6SwLseMhCuORxxA1SZJgERtWglgVjwLC9LA4VEH2AgAEklkSaD6GwmS2XwaDjHZLZcgAak7cT-HwTQAB9gs0WYtU0FVMDkH9iI8CpUwEOKXIzbDZWw3QHMUyTdNc-iy20RA2HccQ2w7dTMjEminj0gr2XHSrNIWORAtSgqDO1RqRA0rTEE0wytXavsWismz8Hs-BEm63qWv6sa5AmhyElS3QxEcf8f1SsDGRZbb9OKJB9GAPLXLOiIYC8MUPJAfIYpZRBjBDU0o07CBLog6BwLKTQB3AiB9tcsoSvEG61DKRoeUBjMMoszRPjOzQlHg6GFnIdwKmOmCAGJUPZDDYcRyzBuOzqtUJommXwAAJdlEGOuKAO+3qKgAZTm4DWkG4zTPTEiKcRnqppVRAsEiY6hBfWgBbOrV2TsY6JRloHitKsRjuBtXlf0igMGTGwMfVkCQGxrxwW8kBND8ha7OW7WwJ9Eq1EKKNsCLInNB8PZ1HwdVoYNRija2uHXKUJtKhDs7IHNQtI9ciDOGOgdh0+txv2wH8fzNvgQzUKaEkk-RAODj3EbDpMW0euOidw8XgGzoQILEJB7dLpujvrpDG8gxBW499ljs8pCLattk7ehj2bY5evlvbfQOynybEj7om1HUCeicM5kFMwHwkA3xHEG32QYGO07S6J6A2NUMB1Ggxmi+ZzIQnZmLEE5xflugvPEhDMmefgHgDMKkL6I1lCvVyFgEagNIivKB0NiLa3gXDJQ4ZIzQGhgPeu+BW5YB8KLJOQYU6jmoJ-fOjBu7N17tDX2NFNQ6jPhvGi8hoJk2huA6GR8jSnxOkwqA182C33voXQCTUX4cz9P-TQABCMmwD2FIOgaHCw-IlGaBAWldCPZEgWhaFNEy9h4AtGorRHUABuWo+pOLYDTOQRQXt8FSBIAtUcihaDSi2FuFc0o5QKhALwAQig9QkADkaRQBVyxBnrGIaJlcQxWkwPGAgaDawhlZiITA9CQy2QNCkr6mYOxdliBYqAXpdFRXVPQ-8DpOI5iEBYExVTjAlI9BYTQAAFd6V0vqQCmuREabIDT+h9IgAAagpMQrNRkAHFxz1GZO4TQct8AK2MDORcuRNbiEKOs3IzI2CIC1KGCACRCi0E0Oc9Zmhdm8mwDFEQmgOTGH9BeTQu4wCTklhc65WwhAHh+TOGAvyDxbBnKC8FM5NB-NBdcqF-zIUIoAF58EuWALYnzJwXJhdChFmR4WwoRcCgFwKIWguRec9caKMVYshTi65eKCUEqJWCsFOKIWIuMFAmkCyqgtOLFgYIHSump3gpoBi8h8DMVtGIdi1i1g8VOvxQSwlFLVVwLlVKMA5IKSUjVYiJT449WfnNHS+0pEmUAVXVysoDWaLAllKaOUpL5QGX6dkIZHaeDrJ7GwnSPpihDD4Gs0A-XdP-AUp+Qg1UwFtWBDqg0ZrGrfgNbUsa8gVA2kjfkmgKLBAAHJKkKBdMNuJoALDUApTQYsIARk0NvWwgiVjVH2sAL25BQ2pznh2YwPhuRRj4O7ImAB+LNLIc0CpgAWgQhR0iJFyMgj2BFDHwH2trXarJc2TsLT2mwzbI5KHSZkrqC6ibIyDBvNGhssa42wQTJhjQvXHU9WoFeZNSaDRXlTWmU0GYiMjeIt+H9ub2l5sAleEAWAsBCMdXcr62CIvpsAJWG8haIBFmLCW6zpbQzUWXcOuGibAGoMYG0DpEAGSejmamotsCaAAGSaAAGLlHwF7W+lHjCswqBBKA7hKQhk4yVf8g4IzGAoenH87d0xFwPjJcuzY0yydcrXY6UmIFnSk6pnu6nXJryUzJLeO895WtAWBE9F9EEbxePh6GLx4IEZ2tmzdU76Y7vIDsLq8ktjLHIOoLYtZ0zVtrYZRoiKy1NqpBvVtwaoAdrFF2nMD7xCDoviO9d47KIuZnUgFaltzOlyXfAFd1cV5KBydAPJUBZNYPxtVg0Z9WgLOgn6UJshv5DJGeM2wUzZmZg4dXMCXCT6MIGzJK+N875AT-WItmEiuZGXAoJPmxFzKmf6xffLyjVH7T5CyNRu2BS2thrDVpmhkzkEWP6vsOaIB9Kq-yyimhhyxHIGKhIjFJXWmlbKriRpnU3dgAJISUZVXKX+5ZbVoO9VprESajs599LAYtXgVKNr0qZQlTqjVdVXVuRDMnEc12I1NWjWm+NXUKpGuasmsmaa1qZpLmddL8wSiIb9MW1ON07oQW3rkcBDmkYJKSfgSrG88EEOMM9-8A4Uur2nrV6uQ3QgjdM+NwRk2H6iKpwB2KkjgNA+WxvdbRNNtyZRtXS9mNgA4zxjgmCr6SbADJp+9k37EOa--bNwDeuFvI+WyvYAQgg8E9TjAVupuDtqP1ej9CfKOplKQOHOZNnpLyZTGmcCPdCgAE1yO5DXtoCA9bd6thPWnyumeqGFDzQDS2BfDMXeM5oZB1mky8v6YDzQABBbAtGOwe+wuu-bTmJ1ZZdNqPdZcR+Ze3SAKT1RGl0Ujzt6f+bZ-RwiNxHkAvmeHTZyh1WoMcwSloLQbAuXVulzY+odwlB7BLA4qscgN1sbLDf5gJ6G87n4CZLxm65yTxz9ZdrVZQBcdpF8dQioQZ1ZjBvxcs3JCgpo+Ba9m8d8VE9sdt0CBRUpl89J0tnNZ9KAhpIsUFV8t1p1jB58qQ4svpXpLcWgg10E6gsCCN8DR9185Ut9J9T0aCoBRUVNKDyB88nk58hDLZn0oAXYaIdhoDchGDaxeDORZC8sd9eD+C8JCg95hDNCV1xCH1nYe0+1OItgkAWAeQfV21hUxRNCjCB0VDMDts8CWCcCyCx9boJ8SCp8x0CCKC58e5qhztLsw0YBcCvCN12DfCN95Vt9bMpcFIN4B5BCgjQ9gCzoQ9RwVdQFLoENoI5xnRRtWsxBWEE9EBw5L8L5UN0NMB8IoUFxZMBJkjRxmt9MpFOZRZgEmZgJ9NBt4ByjTNPY9ARlhFOjuiZJRZmpWchAaI9gvBIhxxnJRtD54AJikBG4LtYAWAfQnRu1RDLssA5AJR8Afx6Brkz8EgQxaAyIQBRiVtRiGjYAw1hjH5Gd+ixjliWdVjpiwBZjxxpxRieiVj+p7iYBNjyBticxgT9jEBDjjiLjz8QwLkribj9MSI+iKi6Z74-R2iSJOiEdTNRY0TQFgTHipsRjFizpxiPj+ovifiOwFjXjXJKS981jLtQTwSkjYAoSYSTiPx4TETUiLMUSNEL4V5jdEYI9nCnDHDQ5XDCCuooBuRHpPCmdMBtBdADB-hIwuhgRehnBwQBgPAoRfB-BAgikTgkD3oLBXQDhsYLAZdLZ6DCgAB9PeRYdeKkLjdMUyCAaCTpAkWIe0H0L7c4TQLYAMIMR5cECAF4TAfbSUnaSU2oFifYFUQcf0IQB1HVQfHvWjKBS-TUMAewVwGVQ2AAUX6FkFDEiFsiOPH25GMBUmj3uysXNFsXsV3lFiFFFmslD0UBPAPBQDfF8UVECWEDxCsUNAUGEA5zFFLVkESVmFe1OhnOgGgm5weltWWTsGgkXC3AAFJbUtkijrkT9z9bVr9b8a0lhoJsZIMWBbVvx0Y1BoJACEgSlYYo0rDoA5zy1FyoU21-sVyoA1zRZ7pt5Nz5YRAXzT8DyiJahPyrsoAfyFzK0hA20PMtQo0cQfM-MAt-sLy79rzNBsYJRGMVxJxQwVxbVv9f93Adzz8Ll3zLFnFuzRQ+w+zvEZRZRmAQBVANAuAUBqARzlRrShAppt5VhsBizgkQBHApA0AAQgR79sAb8shOIrTpULAiz8ANLWJxLRYaJpLHhpBih5JFBaRhz-ElRFBrTvNOIxKuFJKjKuASA5LFBFKrBlLVLo5dL9g7K+AtK+AdLbLNQ+AHKJLDKjQZLTLlQLLuLZQgA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```jsx
import React, { Component } from "react"
import { Menu, List, ListTile, Button } from "polythene-react"

export default class extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  render() {
    const isOpen = this.state.isOpen
    const target = "simple-menu"
    return (
      <div style={{ position: "relative" }}>
        <Button
          raised
          label="Open menu"
          id={target}
          events={{
            onClick: () => this.setState({ isOpen: true })
          }}
        />
        <Menu
          target={`#${target}`}
          show={isOpen}
          didHide={() => this.setState({ isOpen: false })}
        >
          <List>
            <ListTile title="Yes" ink hoverable />
            <ListTile title="No" ink hoverable />
          </List>
        </Menu>
      </div>
    )
  }
}
```

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

<a href="https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvAHjmoCcIAHYgAjgdqAXgA6IEsW5xEAelkcMAdwDmEYvjpZZAQQ7FCAVw4BhWDjRxZ3WlACeBpjFlYMcRh2sZqAawwr4a1sHQicAWg4Yb2JZABMIdyD7RzQYCKjqYjD3DDRYjCh6GHwAKzhxAD4WWXYuXgrRNDZOHn5BEXFJaTkFZTUNLV19I1NzJisbZNDUlzcPL19-QMmQ8Oo4K3jElZS09bhs4lz8wtTS8pAqmpb6xrum+IA3PghYsRAMbm5K6qeKyhAcBgsEyEHoCEQIAADIgAIxQgAcIAAvhR0NhcJDzgC6AwmMQ8PIXlgbPo+AAlDL8MAcWhYPjiSLRcSNIkQEm0MnAPgAWSYhgofAAQoZiMR6IKADIJYhSmUAFWgMD4yL4NLpDJAO2maSZmRZaFx7j43L5aAFwtF4rQcvctuIitgKr4wj42qc9yN-AshgA8rwwZYXXxkLCKAAmCgAZgoABYKABWCgANgoAHYKAiKABOCjwvNh2GR2Ex2Hx2FJ2Gp2EZ2FZ2G58NQgC6+Fc3AAFGgXRU+B3gI0+HxiOpYIg+AADM2GF6MekAEmAaGRE4og74PhgdnHNsayIAlPvPVA3HA+ABRAAeNiBsWnfBgl8YeTPlOi+BMdJsqQYJvXXo4QxMk5DtuFpaR9z-bshwEQxuBgDhQPAuAj2gocDASfAckYYMBzQmC4EIWglHHMACiBNd8KHIEQUYWIAEk8kfccoUomCYNecdxFeMJxD4ABqN1kPwV4+AAHzEvhUiUPgABEMEYDt93wAIHXZGAlPXIdkXXHToMiJjEMgvD2K9E0+FCCAVBIZ1XQwuB8DA2hpC0vgzNEuzCEw7DileVyzMI4jg3srCjkYLCiKUfzwTaYEYEyGAGKYy9gq8hyfKwuKEqS2JH1cyJiGMbsO1cocWCeUqCOIOxYGEYATPYxqb3UQMuJASITxHR4YHEQUiXFN1aDgFr6GHUI+B9YdaEq9jLOs4g2ogNBQi4YgDUamDkT0jaGiovgWGnGbhwwDhVLqicAGJF1eFdto2gRIrqwKlDujb4liAAJV4YDqpSezG7yYGIABlMKNO5Z7SPI5UD1exqvNy2TgQwOw6vwOsoTh9ilFeAw6qjLGYLmkg6uJ4hCeozhbCgeUTrOgcQAu9QYCwXiQAEgQsroxjcsvCm+E5KylvecVvhAI6ACNvB8WJwKO3Fn2IX6jrK6V3BVmCtG4Zk9o2kdYDgOqfX9EdwTbT4Ow7ZmsEFJbecg4RexK3X7pYNW1NgDWNs3VHgGt-AR2IWB+fu4dRx+v25wD8OQ-u146u4uc2Y5u3H1jjaaPiui6tTlLhHzznaMSnm069xqlp8MvZtobrFAlz2XdDmBuoYQ36qrxr6DMCBfHHP7HYB9KgdBhTwcLrPi+S8dc8FSG1WhlVUND0Oto72RduXmDD1j9ejv3Qnd72lgRTFegjvjv3Yn5k8JeBI3+RNwM4GQTPspLy9W0D4Ojtl5zYmItAdUGqh2ckwccz0jqrxds3fEbdgH3S7lAHuPg+4O17CFIEIMwb9gesRccABCZ6i9IEHw3o1X4EBHhkKHEvFUe5PQxT4DoL4wZ+5O3XOVShAhqq1XbvhMmbUoxQihNwS8vVXJS18CoWkhg8ifkKBwNqF18gqIwOI-C2tYjxDQCoNqUI+DwlEetFUyJqH7SvDeRK94ybvFcGI9m8dxC5SwNNdmh8ypxEobtVC9w3yZFkr6Hk+ADK5UQncYgLBmHcD4IfQUnxuD7hxF+JUHA8BS1vuQKgr9TaWDwGWRA4YowojRCATAOA8CaA2EkvEzBIQS1oLEOwUEhyaO0bovgTZREAG56FoEcrqDA8RaBhGkbQOCHN+lhAllaegEQgoNVcKdJaYRRbjk6ZeHpy5GiTMUEMsICtaRQAmfBCIgywT7PoMQQ5zSJp02WbAMAC0+CxhERs3pAJslPzwNmRAUIUTNioEgtAPgISoFKRiPAeoNC5W6oUbgFgNBlABMYcgkIugyHkLI7gPgVCaDpAoKkshDBYFiAS98MLgTOQRdiKg1V4J4FqK0Yp6JymQihWEf+WB8AUrhdSpFVAUV4HRT0LFOK8XaHZZyolJKyWZA5XSblMDeX4hpSAOlmJAQ3AJMiZsyIgA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>


Menu lists with a small number of items will fit on any screen. Longer lists need to be constrained to a certain size, especially on mobile.

Set the menu height with option `height`:

* Use a Number with or without pixels or percentage, for example: `160`, `"160px"` or `"75%"`
  * When using percentage the parent element must have a height
* Use "max" to use the maximum available height within the parent element (the top position and bottom margin will be subtracted automatically)

Content that does not fit the menu frame will be scrollable.

* To scroll a selected item into view when the menu appears, use `scrollTarget` to pass a selector, for example: `scrollTarget: ".list-item-12"` 


<a id="callbacks"></a>
### Callbacks

Two optional callbacks are used after the transition: `didShow` and `didHide`. As shown in the example above, `didHide` is used to update the Menu state.

You can add different behavior, for instance route to another page:

```javascript
didHide: id => (
  this.setState({ isOpen: false }),
  history.push("/")
)
```


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

```jsx
import React from "react";
import { Dialog, Button, List, ListTile } from "polythene-react";

const Tile = ({ title, selected, disabled }) =>
  <ListTile
    title={title}
    selected={selected}
    disabled={disabled}
    ink
    events={{
      onClick: () => {
        if (!disabled) {
          Dialog.hide()
        }
      }
    }}
  />;

const dialogOptions = {
  menu: <List
    hoverable
    tiles={[
      <Tile title="Item one" selected={true} disabled={false} />,
      <Tile title="Item two" selected={false} disabled={false} />,
      <Tile title="Item three" selected={false} disabled={true} />
    ]}
  />,
  hideDelay: .240
};

export default () => 
  <Button
    raised
    label="Open Menu Dialog"
    events={{
      onClick: () => Dialog.show(dialogOptions)
    }}
  />;
```

<a id="settings-menu-position-to-selected-value"></a>
### Settings menu (position to selected value)

A settings menu shows the selected value, and when opening the menu, highlights the selected value in the menu.

Similar to the simple menu, we keep track of the "open" state. Here we're adding the state for the selected index.

```jsx
<Menu 
  target={`#${target}`}
  show={isOpen}
  size={5}
  offsetH={16}
  offsetV={0}
  reposition
  didHide={() => this.setState({ isOpen: false })
>
  <List>
    {
      menuOptions.map((setting, index) =>
        <ListTile
          title={setting}
          selected={index === this.state.selectedIndex}
          ink
          events={{
            onClick: () => this.setState({ selectedIndex: index })
          }}
        />
      )
    }
  </List>
</Menu>
```

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

```javascript
import { MenuCSS } from "polythene-css"

MenuCSS.addStyle(".themed-menu", {
  color_light_background: "#2196F3",
  border_radius:          0
})

<Menu className="themed-menu" />
```

<a id="css"></a>
#### CSS

Change CSS using the [Menu CSS classes](../../../packages/polythene-css-classes/menu.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/menu"
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. Because a Menu is created with a List, the style must also be passed to its List Tiles:

```javascript
const backgroundColor = "#2196F3"
const color = "#fff"
const style = {
  backgroundColor,
  color
}

<Menu style={style}>
  <List>
    <ListTile title="Yes" style={style} />
    <ListTile title="No" style={style} />
  </List>
</Menu>
```

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set

<a id="transitions"></a>
### Transitions

See [Transitions](../../transitions.md)


