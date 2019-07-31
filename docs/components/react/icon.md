[Back to Polythene Icon main page](../icon.md)

# Icon component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
      - [With SVG](#with-svg)
      - [With SVG source files](#with-svg-source-files)
      - [With image source files](#with-image-source-files)
- [Appearance](#appearance)
  - [Sizes](#sizes)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [RTL (right-to-left) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Icon options](../icon.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDRoLoZAMwEs4BTMZFUAOwEMBbE5EAOgAsAXOxPCGK9kvyYAeOISoBrAASsoJfAF4AOiA7sADmCQB6bTSjtWAVygRSDKmGYBzQoaMAjZoRh6wYEuzDb18AJ6GgiTaJAAe9Oqk3vjmVhDuKlJycMrg7H5RrCSeKgB8SlTCkFCE6uxSYKapapo6egbGpuaCVrb2Ti5uHl4+-oFUwWDsNFQAJjRwfMG+cAFZAwC0cjQQ7L2z-SRLJCvsC0Mj45MDzABWYHnC2sWl7PmFN2UVVSo1Wrr69k0kFq12xh1XDR3J5vDM5kFrsMxhMpusIYt4mC+vMtkj9tCjlMzhcQLkro87gUCsJRoQAG5SQijVKwGDsS7aMnk3IgPAeUirFyWJgARiQaBAAF8MNR6IwkCxzmyQLx+IJ2Ew5UMpMApABJOUYKQAZQAagBxKRCqQKKTgzYAbgKyvKas1fAAwjqdcbTeaUUFnTrrVQCg6qN7mDRRqMdelSAAKFTMQIMUYLQhylTa4AFKRSXiTKAAfTE1g4SCkKgAxPh8LyAOwAFmrKfTmfgMFz4ygEiLxZAJYgAFZebyAGwAJnrVCFAEpfTa+Cqk3x9UazUVydYpAB3amGVJDusgGQkQgF9jb3dScmEEhrgBCMFCqTQUgfO6kO8u6hohikNJUAFleUOpCrZgh0rAAZXkAA5mEgl9eTgBZeWYAdqwWStmDQABmUChwAgBOYDq3gtDeVwhYkN5cCALw6DcKkKCBwwl8pHwnc4B7ZhqwHKRq2YSssPYiCqN5AAvFRtHxa4V1yX1bSkGhyQ-fQAFUoDgd1XnYDQ6k+RozB+FobH+RxnCBEEegtVEQnCOhIjIPQFOGKAEOYdQqGsFQpyoWSAEF1HUd1I3HU1cmLKgM1JCl7gzcLmUzOBgTAAA5cVaRgNcpCoekSDyBtoqkYQaBkORFA0jR3nqL49N+Qz2hM+FNgWUYfhgbxllWbQS20Oc-T3RzrE8VIcwceLJDyHVsjkuAwBgIsAAVPQGKR8GbKQACUdlWKQFg1OUv2aq4aCi6KrmZI6YopOKEuShhUrXHKwry-LYrMK6UpUdg7FIPIAHkym5IswEIYSSBOyLcuO574vca6SFSXgbKmfh7se6LgBQFQwDoCY4BTTs5GsIx4qgXGVHjQgjDoEmQCJ-qVGwZgsfUSNAeB4LwbypR2GEAMpAkEg-AUYAWZIE1hcF4WhXxBdcmAbqFyFK5pauAMzse8chXZ-KmTBh7wu1llwYiykXuht6QFgO68U1o3LtNm73s+7K8V+j6+CLeTFKgUGDd1iGLpNpKzfh3wBiRq3fby7nkwjx6xZUGmnc1vLKggQWPcclS4A1mO8vT-Qk6kcTrf11XvdLyHXvt820uRx6bYDmHUg+9gvudv63YqCMQZL62K7t2GVGDxGGXDlHwp5uPqf0Wm9yGDJYeANUs2bItS3LXCILQNBEiFSXhGl2W5XlxXDQklXi9Ow2e99+uocDquLdryO+-vgeQGb1vcgAFSyeMy97-2d9G6DxgAjUOI9VaRwnkDN+CdEgNzNnGEgCZuqXAPnLQ0CttBK20OfGO-8b7X2foAyub8Lbmi2K2CQCx2BTCfn7Y2QDEGOzyD-fSowpCRioVIWhAxxwEJRrfUhcNQEhwVPQqBu1J5wL3AgquSCUHJjxPvU+h95yYJPgaM+cpIFa0voQ-Ret9EFHWrsAAIt9H8zA5BjBIFAaMD1hC+X8uJDADZRgwAgBTBUNhPAAFFmj8CvH4dUoxozV3pCoccBRJwymDsQOxTAHA0AcCQbg4A0kkC5DOJgPZKxICHMKUUIBaAMCYMwJEcS+ACCEJKYUuBqbiAkOQVAYoymSjauwZgTVyRpJgOoCwXTpR4BMIgSUbw6hGCoOoCQ1gKmgO0J07QFNRiLI2l0npfSBk+OGe-Pw6gJTgGgLcIpbTDmdMaqA7pJBemTG2fwHEMpRlMAmboKZMy5nwzWbsS5dBll0FWRcjxdBrm3P6YMx5eB0gHKYISepQogA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

<a id="with-svg"></a>
##### With SVG

```jsx
import React from "react"
import { Icon } from "polythene-react"

const starsSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>

<Icon svg={{ content: starsSVG }} />
```

Instead of passing `svg` as option, the SVG component can be used as child:

```jsx
import { Icon, SVG } from "polythene-react"

<Icon><SVG>{starsSVG}</SVG></Icon>
```

<a id="with-svg-source-files"></a>
##### With SVG source files

```jsx
<Icon svg={{ src: "app/assets/stars.svg" }} />
```

<a id="with-image-source-files"></a>
##### With image source files

```jsx
<Icon src={"img/arrow.png" />
```


<a id="appearance"></a>
## Appearance


<a id="sizes"></a>
### Sizes

The size is set with option `size` (4 sizes). Use CSS for more finegrained control.


<a id="styling"></a>
### Styling

Below are examples how to change the icon appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```jsx
import { IconCSS } from "polythene-css"

IconCSS.addStyle(".themed-icon", {
  size_regular: 50,
  color_light:  "purple",
  color_dark:   "orange"
})

<Icon svg={{ content: starsSVG }} className="themed-icon" />
```

<a id="css"></a>
#### CSS

Change CSS using the [Icon CSS classes](../../../packages/polythene-css-classes/icon.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/icon"
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

```jsx
<Icon svg={{ content: starsSVG }} style={{ color: "#EF6C00" }} />
```

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of the Icon is flipped when:

* it is contained within an element that either has attribute `dir="rtl"` or has className `pe-rtl`
* has className `pe-rtl--flip`

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


