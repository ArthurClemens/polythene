[Back to Polythene Checkbox main page](../checkbox.md)

# Checkbox component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Reading and setting the checked state](#reading-and-setting-the-checked-state)
    - [Example managing mutating state](#example-managing-mutating-state)
- [Appearance](#appearance)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [Icons](#icons)
  - [RTL (right-to-left) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Checkbox options](../checkbox.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKWgoWjbABsKAATABGEAAXyIPH4ghA1OkkFk8jEikNC00wE0AGEymB1D4IAkiJoAEqYNh4fAAIXsYjE0E06s0+k0mzxAG5ambWpabYg7Q6ElaAMrJwPB0Oo2Ip5OR75xhOOnNCTD4fDJ4pIAAUxiEMQE+AJtvtjuMzuAtU0mkga3IAH1VO5xH3oCgu13jABiFgsFUAdgALAu253uwgIP3B8OIDOxxOQNPZ4vl8RVz2NwO2EOxAPMD5EPAx1OZ-OlyuoF3z-2VuR1COoHu45TmAACsKoqvKSrvp+67fjYf47iwgGaMBYEQVBp4fmuvZ9j+f5YPej77oeLDGLU6oAJR5lG0DmmwhoVjYADyvqqHMyYAGoAOIZsYDSsu4mgAO6cnYRiGMYSrLhJIDaIgV7iOJknSbkrJsIgQleo6SkgLQmh6VJQi0AZC5GbQEm5PId5INsPiYHa7iUPYyw6XMQn6R5hnGZoXnmTJdLYJgdiaOw8AFBZB7GVFfm5KFlwQIFYBeJEOkqhFbRiJQ6j4iJ+BiRFtBCFBMkZVl+JsYgDwQGoOlOcs6VchFACymjgUIACcnULkQKogUIADM7ULv1AAymgABxFf18rdfOQjyjNo2aO1U0qrN-UDeN-VLX17W0ENPWFSBtAgUtKqFUq40HedQgqkq7VnSqHVdUQ8pGQ9SpzmNKobXO+2zYVd0Pd9k20FdANCMdp3faZc7youPUbf1W1nX1cNST1c7zYtLWqs9B0rVJSqfTDQjjWD3WTZBIFKvK31PZ113PeNJPLbde2U-NSo03TrX491hMLsTX2aFjC4gUuiMdfKwOaH140qgdSqFZ1W30-zmNFX9Z2TfOSsq+1autW9EuSz90uy3jjMC0VQufZoABaKEyRYdJvAJNQgHm0YcgxizkAAYhwSDltxvHKDAAnCaJIg6VJ6VlApYhxypslqRpWkJDpekmT5qcBUFIiaI1MlNXdrVYyTKq6+NPkqpcT0zdsWO0KNxNs1JlxY4r2zzSqI3l0qbOKxN839T5HcLvAfULvKmiw6N8tD6qABeEWu-SHvGNRUA+0xUA2ks7iIBmVYUcGVQWrUhhiD71xyBmHZYZ+zYEGOLCrHgq7qnmXa6GIjgPxP3HJodOQkxysigBAfAJ99CX2ASAtcsBWhgFfvgDM99EBZDQb-RB-9AGaD4DWEAgo2yaGoKuRBhDiGkMwlQkBloFglEQGOS0fAbCeCgFpP0EA+BPhACqXQfBchBk1JQ+hAADAs2V8BjgACTAFQfGGR6oJHiJARRIg6jxxEOkYmds2iQHQEPlAY+Y43KMQfnAjKQUsFKLtAQDMFjFhyGwcoggWjn70PsTIwxgYKLaMYFRcR6pv55h-tfXetFWh6MdAAFQgO4dwSBT7n2sQgu+LjYFXy8T4t+IVP6IDCauVc+DyBAPEWAscZ8L45KoT7PJ6CQyYLcQ4-AuCQFlI-EQ4wtDnQUK8SA3RzZ9F1PoV2AiD5+EjTvA+aC4zNDGJEEfFhmhnG2NqS0xpTiNKWLsWgzxCzuxoL8ZRQ59CekkLZPM8ZjDKyrLYRwtQCTsD8MEVCERgZznjKIW6D0BAfQ8KgAYwZ9DJlEWMAkpJSAbkLMQKyY0IIxlHK7NAZw9F1DVLSZfLZaCMwAEJGl+JAaE0FJKAlks0BSqhQSOmBmKVACJ3wfYAEFsDYEfquKpmganWIGUM4hQhKBCSEFAuQZD+WIMuZgMhCCqE6D0Pw4EoJegQmcFCQYHhYSjECGGEkMC+AQDCHsOwFwLCTgsD4xMsKQH+2PmIfhfYfBYA0GRUFmoUIgGTOUTQn8IBjgAApZjmCFDcmgmrnA4JobY1oRmOmLlCCAxhqXjiCd86htZhUSu0ZcusXgYXEE9QAET0Jgew8AUEnJAJonNgrIB8AiHMWQNqUISCrLEp0fib6WhgR-ctYhpH5MyvYE+pLxkpo0eItN4jc1ZsLZKgVtYJRiALc6YwMzCLJvTV2XN9bG3GhbTfYZyj9FdrEJacF0zZnwBEX4id4573Tq8bOiAQls2gtzcu1dxaPTWQIFu2ttY93rGbXQxBR721xs7ZS7txLW2Xs9RuuZYGjkshgH+2Rmhh1FMpV2Md9D71dkfTW59gq539MA3qL9RTC3GCtPYBYvDfbQAAx+utvD92ge3a249hZoPjNg7h1tMA2Ar1WcYBsbB7DCJQws+i0B96sLgyAyO7gxx8DrOQBjYgqzyagIxQOwcCCcS4oR+hYihNdj00xXcyKUWqfU5p7Tum-bMVYmoRAJmzNUPw+M3ziCzPEfTS+t987KN5pXTRtdIB97HJWaxqhu6OMgb5NxiD+8THH0C1OkjN8IOZtfe+xLgrqNkOMN6v0ahBIxGOe49BmCEtSvYw2lLh620dqhckxA2WvFPsXXqcj5Dwuldo16+5+BGv9ayMlptqXtEQY7dxic564M3wQ+u69LaQE317WWitg7MPYaW4gphSAlOWfHF+fhh5DbGTdSi+lQn-OTtBUFmdZHCthbY0u-NUXPVxLKA2SbOjmucbm6ChbUHjuCaOWt69V7N2yaoTt0t-aDtjiO8p7sWBggADkdT8PrAQJsJ7WwgDg89h92i3ukYKyK7A+I8LbH9HMIrTWfuRbKyAJD8AeV4Sw+sAJ1buNJZa7NtrvGWz8fod2zQ63uebdkpToj1OcvBY+-Txn8FmfrDZ1Nkb0Wi2-udY4qs-OWfdeBzu0HrWkc8cg6T6XyOVtCbh4RBHyHjsgLQxhjHWnEBe-HLttHaC-cjop3e1XvWSNTeFUIBn2wmcW71yDjn37IWA9N+bwXVuM16mA+Lu3kPHfQ5d7Dld8PEOK8Dyjvt+3Q9Yf94Hz8OOYD44EITzPjYrVk4j5SnrIC+uaEYORHeGnDXOR0-gCAYBpPGg8BUAAogMWQXpIgAEl8DEJ5HyTRmg2XYCoiKB88YJS0UUCBECKBToai1CAXgAhFBZGCAaaAcgFDCAT4aTKCB4-4nIKWAEASG-pQLzgANSaB-7AGyCgFQEAEsgQDQE-684ILsLkCcLbBIAsAOrzy0DYAJDhK1DH5ihn5ShoD9SygajMAgBsTqBcAoDUDaiP5oAmoHBSAkCOBSBoDKpWDOTYDqDuDTZ8AWCsEXAAACSoRkA0Ihka8AQgewUA+oJAxQDOigDIJo6ojA6oQAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```javascript
import m from "mithril"
import { Checkbox } from "polythene-mithril"

m(Checkbox, {
  defaultChecked: true,
  label: "Label"
  value: "100"
})
```



<a id="reading-and-setting-the-checked-state"></a>
### Reading and setting the checked state

See also [Handling state](../../handling-state.md).

To read the checked state, use `onChange`: 

```javascript
m(Checkbox, {
  onChange: state => vnode.state.checked = state.checked
})
```

To set the checked state, use `checked`: 

```javascript
m(Checkbox, {
  onChange: state => vnode.state.checked = state.checked,
  checked: vnode.state.checked
})
```



<a id="example-managing-mutating-state"></a>
#### Example managing mutating state

Polythene uses streams internally to manage state - they are a lightweight and versatile tool to store state values.

In this example we show a simple form with a checkbox to accept the Terms and Conditions, and some other button (for instance in a details dialog) that also sets that checkbox:

```javascript
import m from "mithril"
import { Checkbox, Button } from "polythene-mithril"
import stream from "mithril/stream"

const SimpleForm = {
  oninit: vnode => {
    const checked = stream(false)
    vnode.state = {
      checked
    }
  },
  view: vnode => {
    const state = vnode.state
    const checked = state.checked()
    return m("div", [
      m(Checkbox, {
        label: "I accept the Terms and Conditions",
        onChange: newState => state.checked(newState.checked),
        checked
      }),
      m(".dialog-pane",
        m(Button, {
          raised: true,
          label: "Accept",
          events: {
            onclick: () => state.checked(true) // only sets to checked
          }
        })
      )
    ])
  }
}
```



<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the Checkbox appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
import { CheckboxCSS } from "polythene-css"

CheckboxCSS.addStyle(".themed-checkbox", {
  color_light_on:    "#2196F3",
  color_light_off:   "#2196F3",
  color_light_label: "#2196F3"
})

m(Checkbox, {
  className: "themed-checkbox"
})
```

<a id="css"></a>
#### CSS

Change CSS using the [Checkbox CSS classes](../../../packages/polythene-css-classes/checkbox.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/checkbox"
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

```javascript
m(Checkbox, {
  style: { color: "#2196F3" }
})
```


<a id="icons"></a>
### Icons

To use alternative icons, use options `iconOn` and `iconOff`:

```javascript
const iconStarOutlineSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 11.9994,15.3943L 8.2364,17.6643L 9.2314,13.3833L 5.9094,10.5053L 10.2894,10.1293L 11.9994,6.09327L 13.7094,10.1293L 18.0894,10.5053L 14.7674,13.3833L 15.7624,17.6643M 21.9994,9.24227L 14.8084,8.62526L 11.9994,1.99827L 9.1904,8.62526L 1.9994,9.24227L 7.4544,13.9693L 5.8194,20.9983L 11.9994,17.2703L 18.1794,20.9983L 16.5444,13.9693L 21.9994,9.24227 Z \"/></svg>";
const iconStarFilledSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>";

const trustedIconStarsOutline = m.trust(iconStarOutlineSVG);
const trustedIconStarFilled = m.trust(iconStarFilledSVG);

m(Checkbox, {
  iconOn: {
    svg: { content: trustedIconStarFilled }
  },
  iconOff: {
    svg: { content: trustedIconStarsOutline }
  }
});
```


<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of the checkbox icon and label is reversed when the Checkbox is contained within an element that either:

* has attribute `dir="rtl"`
* has className `pe-rtl`

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


