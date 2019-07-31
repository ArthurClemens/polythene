[Back to Polythene Toolbar main page](../toolbar.md)

# Toolbar component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
- [Appearance](#appearance)
  - [Title](#title)
    - [Preventing an unbalanced centered title](#preventing-an-unbalanced-centered-title)
  - [Action links](#action-links)
  - [Shadow](#shadow)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [RTL (right-to-left) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Toolbar options](../toolbar.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKAAsKAAjHLpSAAL5EHj8QQganSSCyeRiRS6haaYCaAAqEAQPhsRHNlvg1vIZq8SFtAEldQAhexiMTQTTKzT6TSbPEAblqRtapotVpsAGEAMqJgNBkOo2JJxMR76xh0J5NCTD4fCJ4pIAAUxiEMQE+G2frj5GMtuAtU0mkga3IAH1VO5xD3rWB1O5KPZlihNMYAMS0WhgAAcAFYAMwt9udhAQXsrcjqIeYEdjiAT-BT6cgOcLlfrkC1ZUAShzkegxrYuoAsvJ7ImAGoAOJpsYDSsu4mgAO6cnYRiGMYABM0pwbkZRsAOYiwQhSFwSAmismwiAQZ6EAJJhIC0JoFGIZoiHIfy2CYHYmhcnRn6rpocqLiInGsts8EABKrqy8EAF58LQ2zLtxi68QJQmieJ2wAOzCdJf4AGyCSJdEWHSbxgTUIA5lGHK6gASnougwCI-5AcGIEwGBkHQSIZG0Th2iIGh4hudhuT4YRxGkXRFFUdKNF+fRjEiMxZGfnKSlCOpy6aOpQirsu8Zyml8GaNKQgAJwcfl8FynlHG5dKYDbPl0q5RJiUFUVq5CMui7KYVRWLjALXLkpmiLpojVdWALVKexFFpYu0p8a1KWJeN2zqSIs20Iu1VCIuuXwelq7bC1tDhTNy5JSlM0tauZUSeps3qQVS1LTAO13UtqVLWAcpJeplGaC1ipJUVJW5Z9SmLgAMnK7EKiISl-tKlw7RlNHpcu2k4bp9IGcYxlvq0H7QAAgiWtnAcojngVB+AwXR7koV56G+XReEEURJFkaFEURXRdIMUxLE4fFRWQyt6msstfG8Zpy6ySI6l-lJ8Fi7Lwlo8YGP6e4hkvlAJmNvm5Der6-rBuTQZMhIFYetAht+lARCboYYimvjUBTqapuBsqm7Pg7Ou45oBPYNgaZtlAHYBRBU4Vo+ZuaNQm4dnwVZapQEFCFAvKIC2ccJx2mhJ8YmDZ6Heel9ougsFOQK+t0YJ9M4UKDB4sKjIEoYkvgUIQGEex2BcFgzhYeuOhuYdlx2izkO4FRVyAQ5YBoxi5x2qqXom5SaKscBTgAChmcyaCwO6aJ+5wcJo2x2k2zFd8Yj654wj722PifJ0IqfZ-HL95wXWoSmISBs7GGdAAxAm9limTfHfZ+49f5ZAgHwCIcxZCj3Hq-PMjoYFoI7F-bBpdh42BttACsfAazkHsAsCsLtvxQF-IBR8T9l5oKThgmwIDXQmk0HIBIYhZ6sPIM5JimA8KIHIJEERYiJHiNZKI6RsipEKJkZIpR4i7jgX-oA3CT4sF4K4faR0RCoAkLIRQsQVDzKWUQNZWyDCdF4IIQbH0ttjFiHIZQl2RNSz0Pvt-cejAmEdh8ePIJedH52LgR-YgOdfH5zfhorOUTjDxgQQxcU0CmFwMgIg9YKDiABNifwuxpdHamiyak3hXDyFgNVPknBtS84OMMS4txZjqE-hsYwmJsCKz8PYYgVsXDEgVOAfomwgiYrCJUYo+RUzZkzPmco+RaiuEugSQGTpuiJ6jMcUbIxpDXGmPMdACyLArI2W8UUtBjSnHEP2S0o5UBPEdPqf4rpmgQmlw+ZoMJucIkQAgp-DJcTVlAJAG6ZY+oCArNAekmJmSUk5L5Jc9B2zkV51wXgx2LDtl9IGWoTusgpwHP6YMnhs9wUErkPgaFmj1lovwdsppdzDkuxOWcjp9KGmMpuXskx7jdRPO8S8-JXzAkPw2T-N+kTbQYtLnA+JoL4yQt0NShVIAJVyrfmUxFqDmE9NRfU2VaDHZWBDFgMAiARAIE7gIv0mgIAsBYCELhZQ8jeVaDATkYCfA8vqa-K2UBDGtj9dOCUvBxRskQESqpnLS4uzdluPUhLLy5C9m80u2iQ3YqbLizhFq9TkGjfYEl3DhkgCVQWqFaq6Uhuubs5pLKBXEyFem75IqmFfJ+d-P5AKolGtftWNVtpjBlhKAQWF3TqzauQUi-J2b9ZopKfUx2Cwx0JuHKOccyxkndlnjOR1BVFzzlTfUmprb+1XO5fW5l-LoA0LoQBWxWb9U5tWQM0tfDtnjM3tMxZf65H-t-QB1R0B1Egq0Rq+xV7nE3taRY05VjzmPsg9gutMG+VwcJs25Dwq3miveeK8JUr-mArhcCmFiSQBmjKHWCdZd4XZJnbq7phT8lLtbY7ZwiIYAADkNSz1rAQBs2zmNQbmLPPc6gl6trPboi9480O3Iww8+9HLn29LfZwj9l5+HfsmQs4DQGjNzMkcs6tmbW1bKbEy5TrLLHWIubW6DSmDm3sedhhhuHsH4c7ZBntpHJ1-3A8OkAiYRDFhI+qy5DGkH6lE6XeTkrWOWZNCGjs1kIsQQACKIBaCIKccpY0BiK4lhTzneWucw1AVTjmUsotfaA99QzP3XygkI4zBmOuAamWZ8DNa6t6Oszyhtbm2WIbUwNxTFX7keI8-hvx9SUOhI7YR35xG07YHxJJ4TcwAv0fI5okLfTwHUpdjATQFZJN6LmPfKLQKp0IqY3kt587MGGqc0N69tmvztNq5sgpOLNOmm0yM1r+wf0mcM5DrrhnesUf6-9qbI2qtjYc8horSPYMPMFTh1trzvMre-l2jsrzlTa1IXwU8shLsQDAPYVwYgPAVAAKIDFkJ6SIbp8DJx5HyJ+Acg7PhFIgMUEo3yKDuigPqKo1QgF4AIRQWRgg6mgHIBQaAVTMBAKoDQXAUDUHVArtAvcDjwAAAJzB4dIRwUg0DAlBBObAo54F8AsCbi4Zudq0CEBJJwSU3dn3gEIPYUBtQkGKJtxQDIDTKkYMqIAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```javascript
import m from "mithril"
import { Toolbar } from "polythene-mithril"

m(Toolbar, [
  // content elements
])
```

A Toolbar content consists of a list of elements. Some possibilities:

```
[title, icon]
[icon, title]
[icon, title + space, icon, icon]
[icon, title + space, action link]
```

To show a Toolbar with a label and 3 icon buttons:

```javascript
import { Toolbar, ToolbarTitle, IconButton } from "polythene-mithril"

const iconMenuSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/></svg>"
const iconRefreshSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"/></svg>"
const iconAddSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>"

const iconMenu = m.trust(iconMenuSVG)
const iconRefresh = m.trust(iconRefreshSVG)
const iconAdd = m.trust(iconAddSVG)

const toolbarButton = svg => m(IconButton, {
  icon: { svg }
})

m(Toolbar, [
  toolbarButton(iconMenu),
  m(ToolbarTitle, { text: "Title" }), // will take available horizontal space
  toolbarButton(iconRefresh),
  toolbarButton(iconAdd)
])
```



<a id="appearance"></a>
## Appearance


<a id="title"></a>
### Title

A ToolbarTitle can be inserted as Toolbar element as shown above.

A title can be indented or centered:

```javascript
m(ToolbarTitle,
  {
    text: "Title",
    center: true
  }
)
```

<a id="preventing-an-unbalanced-centered-title"></a>
#### Preventing an unbalanced centered title

When the Toolbar contains one button at the left, and the title is centered, the result will look unbalanced because the title will be centered to the remaining space (at the right to the button).

Use a dummy placeholder at the right to bring back balance. For instance with an empty inactive IconButton:

```javascript
m(Toolbar, [
  m(IconButton, {
    icon: { svg: { content: m.trust(iconMenuSVG) } }
  }),
  m(ToolbarTitle, { text: "Title", center: true }),
  m(IconButton, {
    inactive: true,
    icon: { content: "" }
  })
])
```


<a id="action-links"></a>
### Action links

Use class `pe-action`:

```javascript
m(Toolbar, [
  m(ToolbarTitle, { text: "Title" }),
  m(".pe-action",
    { href: "..." },
    "Save"
  )
])
```


<a id="shadow"></a>
### Shadow

```javascript
import { Toolbar } from "polythene-mithril"

const toolbarRow = [
  // buttons and title
]

m(Toolbar,
  { shadowDepth: 1 },
  toolbarRow
)
```


<a id="styling"></a>
### Styling

Below are examples how to change the Toolbar appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
import { ToolbarCSS } from "polythene-css"

ToolbarCSS.addStyle(".themed-toolbar", {
  color_dark_background: "#00c853"
})

m(Toolbar, {
  className: "themed-toolbar"
})
```

<a id="css"></a>
#### CSS

Change CSS using the [Toolbar CSS classes](../../../packages/polythene-css-classes/toolbar.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/toolbar"
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

```javascript
m(Toolbar, {
  style: {
    backgroundColor: "#EF6C00",
    color: "#fff",
    height: "72px"
  }
})
```

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of Toolbar content is reversed when the Toolbar is contained within an element that either:

* has attribute `dir="rtl"`
* has className `pe-rtl`

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set




