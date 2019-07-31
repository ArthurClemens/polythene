[Back to Polythene FAB main page](../fab.md)

# FAB: Floating Action Button component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Links](#links)
- [Appearance](#appearance)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style option](#style-option)
  - [RTL (right-to-left) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[FAB options](../fab.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDQE4BMOC6GIAZgJZwCmYyKoAdgIYC2FyIAdABYAuTiREGHW4VhbADxxSdANYACTlArEAvAB0QPbgAcwSAPT6GUbpwCuUCJRZ0w7AOalTZgEbtSMI2DAVuYfdrwAJ6mohT6FAAezNqU-sTWdhDeGnJKcOrg3EFxnBS+GgB8anQl4pBQpNrccmCWmVq6BkYm5pbWonaOzm4eXj5+AcGhdOFg3Ax0ACYMcELhgXAheaMAtExOiuRDSyMU65uVcKvjkzNzo+wAVmBF4voVVdzFpXTl0E+19RqNeobGznaFBsXU2rncngY3l8-kWyzCDwm01m8x28LWyVhwxW+0xJyR53m11uIEK90e1ReZSmpAAbnJSFNMrAYNw7voabTCiAiD5KBBuB5bGwACxIACM4pFIAAvhh6MxWEgODceSBBMJRNw2BrxnJgHIAGIAQQAQnIZXIVHI4XsANwlXU1A0m00AYQAyh6LVabdiwp6PQ7Xq7A+wGFMph7spQABQadihFhTVbEBguDQYfUlORyQRzKAAfSk9h4hZcDAgMnssDM0yQcg0AGJiMRxQB2EUizM5vPwGBFks8Bu50dj3PN1vEHt0XP5geFmZQGTlyvV2v1icgJsQACskoAbDgZ3P+0WlzIR+Pr5PWxoSjKAJTBx1CPWkDUegBqAHFfRpylpew5AAd0ZUx1DUDQcG7KCQAUChSFLbhIOg2DUlpUgKBA00YEiVCQDQOQiJguQYKgu5tAYUw5CZCiQAAWXFHA5A7dgcHbAAZcUAA52F4sjxWOcV2APEVVnbdg0AAZk4vA5CwdiRWOSTxSwVZRPFbiWJYxS1LkPiD2ksiFKUuBd3YEUDzkEV2HbWSLJ4nTxQAL3o-QyQeIDihAYMx1fWwamNbRtF9YASjUbhMOwhtY0fK1CjkFBe0iph4w4WAQPYOhWQoTMkt7CdeHShh8vC2dR0iyLFGUBsfm4HQ-haQErGBToHDBXpPFtHFVimYEYH8DZTCOfQm30NMMx5QrxwmKB7F8OqQHLOBJhke9ShqUc5UbEAPXyORZjAGAGwABX9UY5GIAc5AYw5yDkVYjTNWiBo0R8ZvwR8MBmtKE0y-Lkoqoq-o4QVuEofKNAAeWqIUGw-IR3p+4HR1B9hBCYQJRmEKHUbHNLXSzcrr2vRG6AbEnSevMAgMpvtNWEBsmETKAzHGWNye-H94plGbqb5-Hto+oW5BFscvpRgn0vYAGeQK1HUpl8HIflmG4aEZnpFIZH+bkdHMexrU8epwmzWJvWyY1SnLdJ2n7HpjURCZ-XWfZ7hOc-X9edtsc5V9tHtYbbg2by0WLXF69I9zSXfpluWsyB-zioTFW8rVkBYcFTXak4CMYBAgARChqk4ORYzQD6QG+vWDZgLH5lxtXw7N00LfDsdyZtjvx3tx2hGd7hmbdjmue9i0A9zf2e9zMA86mAvi9Lhs0Ftp9LejuRY9R9GE4V5P0bTqHM41inc-zouS5o2NdyrmuhbrhucbZZvTdjInsxnhlrc-6mabp-UDNB7DxDu7T2QhuY+y-tPP+o454XyXqYBsu416b1HJvbe0t-oF0BjNJWqcnCqyzOrbOZ9JikCYNRCg0M6AABUGChVjGmOAPg75S3HI-I2TdiEt3fubX+sDv45ypoI2oACDROy1CAtmo8vY8wntA9hsDyGUJEDQ+h2gGzMJ8Kgjen175YIyjg+WSdKopzBoQ9OxCT6kIbOMHI6cDEcJlobRuL8eFvw-iIv+XcBGiL7oAyRLsWagNkRA8egtREwMEfYyg3dRGngLEtJsaBUkngSRWKsNYYB1imG6M8yTWxYB4mkkAk8FECzQbmDBTjcy72MYnPB5jEyWOPrQvIyZdYPxcfXLh7jGy8K8eU3x3jYEBIkQPKRrtQkezHvIyJgjomwKsFCMAAA5RUS0kwUBTJNDalS9a1K3kc+pWVtD7AvKsbg8xcGK2aUfDOWd4ZCNnLGC8chrmjDYbXHpT9jav1Jq3duoiRnlNnuIoBUyQkyNmXIqBUSlHjnXkLI5mC0bxwLuwc5fVjAyCuTckxTTD6tIzu0tqUxy7vM+RQb53SEyuOfibQFfC25+J8T-UZf9xmQuCSPWF4T5nlKWX-FZ3gNksC2R0nZqZ0z7NJsiqOiK0UTgqvgB8L46AsyYDk4QbyYAQDMDYbgDhfAAFEOjCFNEEAAklMdKLIX7fTkMFbQz4Shqj5BQAUQpqDKl3FgJAOBpKynlCARgLA2AY28GqIJ2plSykICAKQshfW0DDYqNgw0thwAAAKjEiNqIgFhEDKl+M0Os2hqwY3rvoLNRwc04CklJVYlhRK1vunAdgGw6DEjVNkc5bAKTahlPgGUQA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```javascript
import m from "mithril"
import { FAB } from "polythene-mithril"

const iconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>"

m(FAB, {
  icon: { svg: { content: m.trust(iconSVG) } }
})
```


<a id="links"></a>
### Links

See: [URLs and router links](../../handling-urls.md)



<a id="appearance"></a>
## Appearance

FAB's default colors are:

* Background: the app's primary color; change this by setting the `background-color` style
* Icon color: white; change this by setting the `color` style



<a id="styling"></a>
### Styling

Below are examples how to change the FAB appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
import { FABCSS } from "polythene-css"

FABCSS.addStyle(".themed-fab", {
  color_light_background: "#2196f3",
  color_dark_background:  "#0097a7",
  color_light:            "#fff",
  color_dark:             "#B2ebf2"
})

m(FAB, {
  className: "themed-fab"
})
```

<a id="css"></a>
#### CSS

Change CSS using the [FAB CSS classes](../../../packages/polythene-css-classes/fab.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/fab"
```

<a id="style-option"></a>
#### Style option

Some style attributes can be set using option `style`. For example:

```javascript
m(FAB, {
  style: {
    backgroundColor: "#ef6c00",
    color: "#fff"
  }
})
```

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of the FAB is flipped when:

* it is contained within an element that either has attribute `dir="rtl"` or has className `pe-rtl`
* has className `pe-rtl--flip`


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set
