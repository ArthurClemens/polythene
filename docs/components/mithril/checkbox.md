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

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgRloDYBmAXRIDMBLJGGqCiYAtsjQA6ABYAXEfGLooMxMtQgAPPB5QA1gAIp5RFwC8AHRCyZuFAHo7mcjKkBXcmCRjYEgOY8XVwAjCR4IRxg8GRg7bAQATxdVRDtEAA9RbH47Li8YCTBIy31jeAtSGXj+KUREGUsAPnMoZo0ych5sGX0YD3LrWwcnQI8vVXz-QJCwiKiYuPhEmqgUmBlMKHxMeGgUhaXkgFoRAKM+WISklePTjvhDtY2tnZWJACsYRo07ds6ZJpaUDaFD+PT6lgGMHsjmcblGiG8E1OwVC4UwkTq80uy1W602212F0WV0Qh0KWOJOLJkQeeOeu3enxADW+vy6ANa+B4ADd9Dx8OVKBB6szvlzuQ1FHgkGAZGFYOpaChaIdmCgAEwMEAAXyIQlE4hAjMUkGUqhk6lNa30wH0AGEamBdEEIGkiPoAEqYHh4fAAIVcMhk0H02v0pn0+xJAG5mlburaHYgnS60naAMrp0PhyPY5IZ9OxwFJlOugsSTD4fDpypIAAUlgkSTE+DJjudrss7uAzX0+kgO3IAH1tL5ZEPoCg+33LABiLhcBgAdgALCuu73+wgIMPR+OIAupzOQPPF6v18RNwOdyOeGOZCPMEFEPAp3OF8u1xuoH3r8OtuQugTlAR7TnOYAAKwMAwzDqt+v7bv+ThAQeXCgfo4FQTBcGXj+W6DkOAFAVgz6vsep5cJYzTagAlEWcbQNaPCmjWTgAPKBtoKzpgAagA4jmlhtNyvj6AA7vyLgWOYljquuMkgIYiB3rI0myfJxTcjwiBiX6rpqSAtD6EZckSLQJkrmZtAycUqhPkghxBJgTq+JQribAZKxicZPmmeZ+h+dZCkstgmAuPovDwGUNknuZcVBcUkX3BAoVgAE8QGQwMU9DIlC6KSEn4FJMW0BIcEKTleWklxiBvBAOgGW5mzZQKMUALL6NBEgAJy9SujAQRIrDdSurAADL6AAHGVrDMP1y4SMwc3jfo3UzQw82sENk2sCtg3dbQI2MKVEG0BBK1MGVk1HZdDDqt1F0MD1fVEMwZkPeqS4TQwW1Lod82lXdD3fdNtDXQDEined32WUuzCrowW2sDtF2DXDcmMEui3LR1mrPUda1yeqn0wxIk1g-102wRB6rMN9T29Tdz2TSTq0SAwB2U4t6o03TnX4-1hMrsTX36FjK4QWuiM9cwwP6INk0c-16qlb1O30wLmNlX9F3TcuR0q8zF1vZLUs-TLct44zgtlcLn36AAWhhCl2CyPwiU0IBFvGfIses5AAGJ8Eg1b8YJmgwCJ4mSVIBlydlNQqTIccaYpWk6XpaQGUZFkBanIVhVI+itQpbV3Z1WMkwweuTQFDD3E9c2HFjtDjcTbNyfcWMc4ci0MGN5fqmzHNTYtrABR3K7wINK7MPosPjQrQ+agAXjFrush7lj0VAPtsVADobL4iA5nWNHhg0NrNOYMg+48Kg5j2eG-u2BBTlw2x4Ju2pFn2xgyO4H8T9pz6HTmJKc3IoAQHwCfUwl9gEgK3LAboYBX74BzPfRABQ0G-0Qf-QB+gRANhAOKLs+hqCbkQYQ4hpDcJUJAbaNYVREBTltCIJw-goB6SDBAEQb4QAMGMCIYoYZdSUPoQAAxLPlfAU4AAkwBUHJhkdqCR4iQE0SIOo6cRDpGpm7NokB0BD5QGPlOLyrEH5wJymFLBSinQEBzBY9YKhsHKIIFo5+9D7EyMMaGGi2j2B0XEdqb+RYf7X13oxboejXQABUIC+F8EgU+59rEILvi42BV8vE+LfhFT+iAwmbk3Pg8gQDxFgKnGfC+OSqE+zyegiMmC3EOPwLgkBZSfxEMsLQ90FCvEgN0e2fRdT6F9hIi+fhY0nwvnguM-QxipBHxYfoZxtjaktMaU4nSli7FoM8Qs-saC-G0UOfQnpJCeTzPGYw2sqy2EcJ0Ak7A-DBEIhEaGc54yiFeh9AQAMPCoAGMGfQyZZFLAJKSUgG5CzEDcnNFCMZRy+zQE8MxXQ1S0mXy2WgnMABCRpfiQGhNBSSgJZL9AUqoUEjpoZilQAiYCH2ABBbA2BH6biqfoGp1iBlDOIRISgYkJBQJUGQ-liDLmYDIQgqhRgTD8MhNCYYcJPAInGH4ZE0xwhRipDAkQEAYgnBcHcOws47A+NTLCkB-tj4yH4UOIIWA9BUVBbqDCIB0y1H0J-CAU4AAKeYVgRR3PoNqtw+D6EOPaEZrpi4IggJYal04gnfOoY2YVErtGXKbAEGFxBPUABETCYFcPAFBJyQCaJzYKyAIg4grGUDajCcg6yxLdH4m+toYEf3LTIaR+TcquBPqS8ZKaNHiLTeI3NWbC2SoFY2OUMgC3uksDM0iyb019lzfWxt5oW032Gco-RXaZC2nBdM2Z8ARF+IndOe906vGzogGJbNoLc3LtXcWn09kCBbtrY2Pduxm10MQUe9tcbO2Uu7cS1tl7PUbrmWBo5XIYB-tkfoYdRTKV9jHfQ+9fZH01ufYKud-TANGi-UUwtlg7SuDWLw320AAMfrrbw-doHt2tuPaWaD4zYO4dbTAHgK9VmWBbDwVwwiUMLOYtAferC4MgMjr4KcIgmzkAYzIOs8moCsUDsHAgvE+KEfoWIoTfY9NsUPMilFqn1Oae07pv27FOI6EQCZszVD8PjN84gszxH00vrffOyjeaV00bXSAfexyVmsaobujjIGRTcYg-vExx9AtTpIzfCDmbX3vsS4K6jZDLDeqDDoUSSRjnuPQZghLUr2MNpS4ettHaoXJMQNlrxT7F1GnI+Q8LpXaNevufgRr-WCjJabal7REGO3cZnOeuDN8EPruvS2kBN9e1lorYOzD2GluIKYUgJTlnpx-n4aebq5NrIgGU-SoT-nJ2gqCzOsjhWwtsaXfmqLnq4k1BbJNnRzXONzdBQtqDx3BNHLW9eq9m7ZNUJ26W-tB2pxHce54dEMAAByBp+HNgIG2E9nYHvPbvdo97pGCsiuwKSIihxgwrCK0137kWysgCQ-AHlREsO7ACdW7jSWWuzba7xjs-H6Hdv0Ot7nm3FIvYfdTnLwXPv08Z8hZnuw2dTZG9Fotv7nWOLrPzln3WQc7rB615HPHINk+lyjlbQn4ekUR8h47IC0MYcx1pxAXvpy7fR2gv3I64PK6I6r3rJGpvCokAzw4TOLd69Bxz79kKgem-N4Lq3GajTAfF3bqHjuYcu7hyuhHiHFeB9R32-boesP+8D7+LAkQCdiCJ1n1sVrycR6p29tXm52DUR3hpw17kdP4AgGAaT5o-B1AAKJjGUH6eIABJfAxChQik0foNl2A6JShfMmOUjF1AQQgigc6Oo9QgGEGIdQBRIgmmgCoNQkhE+mlyggBPpJyCVhhBkhv6UC84ADU+gf+wBygoBUBABXIEA0BP+vOCC7C5AnChwSAXADq88tA2AaQ4SzQx+MoZ+CoaArAyoOonAIAXEugAgKA1A+oj+aAJqZw8AAAAisGkBaCQO4AoGgMqg4O5NgLoL4NNiIHYKwXcOweqGZGZIcB4ItJIZGvABICcFAMaCQJUAzuoGyBaNqOwNqEAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

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


