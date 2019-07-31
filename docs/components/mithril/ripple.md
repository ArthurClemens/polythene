[Back to Polythene Ripple main page](../ripple.md)

# Ripple component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
- [Variations](#variations)
- [Appearance](#appearance)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Ripple options](../ripple.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDQE4BsBWAXQxADMBLOAUzGRVADsBDAW0uRADoALAF2cWIQY9HpRHsAPHDL0A1gAIuUSiQC8AHRC8eABzBIA9AcZQeXAK5QIVVvTAcA5mTPmARhzIxjYMJR5gDHXgATzMxSgNKAA8WHSoAkht7CB9NeWU4DXAeYPiuSj9NAD51elKJSCgyHR55MCss7T1DY1MLKxsxeycXd09vX39AkLD6CLAeRnoAE0Y4YQiguFD8sYBaZmclCmHl0coNraq4NYmp2fmxjgArMGKJA0rqnhKy+groZ7qGzSb9IxMLg6lFs3S2bg8XkYPj8ASWK3Cj0mMzmC12CPWKThI1WByxp2RFwWNzuICKDyeNVe5WmZAAbvIyNMsrAYDx7gZaXSiiBiL4qBAeJ47OwACxIACMEtFIAAvhgGCw2EhOLdeSAhCIxDx2JqJvJgPIAErVOKUeSy+SqeTw-YAblKetqhpNOjNAGEAMqei1Wm048Jez0Ot6uj3ejiMabTT05KgACk0HDCrGmayqbqomgwBtK8nkQnmUAA+tIHLwkPJNABiEgkCUAdlFos0pVlAEoQ-n847hPqAIJuv3AUrqHh0siUADulfj7atRXkKDzVb4ic4sCnHHobMo2aXK57a80jH3I-o3dXY6UKkrvx4un+rSB1hBXUc4L6XltuLW0xBMABJsZjHAY1YGBmZrZoel7yJMUAOH4d4gMWrhwFMsitmUtTdvKVYgJ6BTyHMYAwJWAAKAZjPIJAwFA8gALJHBQ8hrMappUPI-7MDAmjtjBBDthgMHMOuHCbvuy4Xt2Y6iUmQo8FmvL4e6fY8FAjAyJQ0zyPG-4kIw5hwDw-EgEJMH5nJnBCMwQRjCI4kcXuykWd2olhlQ-HSZeXmXoJwnefIVniTAU6STBsliQpSk5poABybIFmpGladMfEBbBQViTZdnao5mbObFgWXu5Tk5uemVHuY9BOilYzTJW6nmHuxW4b5sHtfm-kiWJEnKVJl6RfJzgxSp2qUFA6WucFOULA5kGja5lnxh5lDlUtq4QONUCNVAzUbR2rmdfI3WBcFfU5gNMnHpw0WFfhsaAvIMA6IwEDOMEU2tTNMC2XNPD5VBLmtctq3rSDq5nKYADyr3vTklYcHgB3Hfmx2nSVvWheFgVDbdI33ZoAAiliMEKwhfZlP1-fZAMLYTEOlQV4OVau0yk+T9CVgAzBwaAo0dAnmWdWNhf1EU3cmBP7poDFGUKQPC1T2W-bl81OTLjMrWVuYQ7J8tkLtzUZZVY7sxpnOVhKSMC616NK25os44Nkt3TLBFxtplOwdTat0xrwOs0zZos6b-jwTwsNvR9lZoBwDYm6zEy5JQlYVaz3aFnRyG1iQWAABxoPzIAbfmsq25l9uJ1lSYXQeuOu9LLkgAAKvkqY5joE1gGQEzajmYg6aR0g6coaVmdXy1JrNtOA4tWtg7rrNjtY0JgHFSrISm2npgHk+wYPUfw8EVt8-vl5d1APd9yIRstazh120LJsEG2IalMwHA8dVPB6TAEDmFsADRCPAACinQRAACFggAElpjrlZOyCe8hBw6E7KUdU-JKCCmFDQFU+cGxIDQHKBUIAmCsHYBwLE6pNSiHECqKhqt-pz3NOnIIPdLbpEoOhIUdJKBdnkK4N6sgHCwGqg1eQucSACPyGQcsPBKyFx0FEARU4mRmCtkXAApCGcu9BMHcOwZzPBIAcBELlEQEA0g5B4LoGQpU7BgLbDgAAATGFEHUxBLCIBVH8Fo1UdAiMYcwAwTjjguIAEx8z5umCAHAcChOYnAL+MgSTqhyF3dglIdSygILKIAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

Append a ripple to any HTML element (which requires to have style `position: relative` and a size):

```javascript
import m from "mithril"
import { Ripple } from "polythene-mithril"

m(".relative-with-size",
  m(Ripple)
)
```

Use option `after` to append a Ripple to a Polythene component:

```javascript
import m from "mithril"
import { Ripple, ListTile } from "polythene-mithril"

m(ListTile, {
  title: "Title",
  after: m(Ripple)
})
```



<a id="variations"></a>
## Variations

Create multiple simultaneous ripples with option `multi`.



<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the Ripple appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
import { RippleCSS } from "polythene-css"

RippleCSS.addStyle(".themed-ripple", {
  color_light:   "#F44336"
})

m(Ripple, {
  className: "themed-ripple"
})
```

<a id="css"></a>
#### CSS

Change CSS using the [Ripple CSS classes](../../../packages/polythene-css-classes/ripple.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/ripple"
```

By default the inherited `color` from the parent element is used. It can be changed with CSS:

```css
.pe-ripple {
  color: green;
}
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

```javascript
m(Ripple, {
  style: {
    color: "#2196F3"
  }
})
```


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


