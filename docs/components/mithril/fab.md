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

<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDRoLoZAMwEs4BTMZFUAOwEMBbE5EAOgAsAXOxPCGK9kvyYAeOISoBrAASsoJfAF4AOiA7sADmCQB6bTSjtWAVygRSDKmGYBzQoaMAjZoRh6wYEuzDb18AJ6GgiTaJAAe9Oqk3vjmVhDuKlJycMrg7H5RrCSeKgB8SlQFwpBQhOrsUmCmqWqaOnoGxqbmgla29k4ubh5ePv6BVMFg7DRUACY0cHzBvnABWYMAtHR2ssR9cwMky6ulcIvDoxNTg8wAVmB5wtolZez5hVTF0HeV1Sq1Wrr69s0kFm1Vo5nK4aO5PN5ZvMgjcRuNJtMNtClvFIf0FttUQc4cdpudLiBctdbuUHkUxoQAG5SQhjVKwGDsK7aCmU3IgPAeUgQdguSxMAAsSAAjMKBSAAL4Yaj0RhIFgXDkgXj8QTsJgq4ZSYBSABiAEEAEJSCVSBRSKFbADcBU1FR1BsNAGEAMouk1mi3ooKul02x6O33MGhjMYu9KkAAUKmYgQYY0W+BoDhUGG1BSkUl4UygAH0xNYOLmHDQIBJrLAjOMkFIVABifD4YUAdgFAtTGaz8BgeYLHBrmcHQ8z9cb+A7VEz2Z7uYmUAkxdL5cr1ZHIDrEAArKKAGwAJgnU+7ebnEgHw4vo8bKgKEoAlP7bXwtYQVS6AGoAcU9KmKlOsUgAO60oYyhKCoe7tuBIAyCQhCFuwYEQVBiSUoQJCAYaMChEhIBoFI+GQVIkHgVc6g0IYUh0qRIAALLCnuUgtswe7NgAMsKAAczBccRwr7MKzA7gKizNswaAAMxsXujEAJwsQK+xicKsmLEJwocYxck8bJUjcTuEnEVI8mQXAm7MAKO5SAKzDNlJ5mcVpwoAF40doRI3P++QgP6Q5PpYFT6uo6iesABRKOwaEYTWkZ3mauRSCgnYRXQ0YsLAgHMFQjIkKmiWdiOnBpTQeVhZOg4RRFsjyDWHzsBoXwNL8Zj-K0NhAp0riWhiixjP8MDeCshh7NodbaEmKYcgVw4jFA1ieLVIDFnAowSDehQVIOUq1iALrZFIkxgDANYAAreoMUj4D2Ui0bsxBSIsepGlR-UqHe03YHeGDTalMYZXlSXlYVv0sLy7CkHlKgAPLlHyNavnwb3fUDg4g8wvB0L4gz8JDKNDqljppmVF4XgjVA1sTJMXmA-4U12qr8DWdCxlARjDJGZMfp+cUStNVO83jW3vYLUjC0On3I-jaXMP9HL5SjKXS2DENy9DsN8Ez4iEEjfNSGjGNY2quNUwTRpE7rpMqhTFskzT1h0yqAiM3rLNs+wHNvl+PM20OUo+6jWs1uwrO5SLJpixeEeZhLP3S7LaaA35RUxsruWqyAMO8hrlSsCGMCAQAIiQ5SsFIkZoO9IBfbr+swJj0w46rYem4a5th0OZPW+3w52w7fBO+wTOu+znNeya-uZn73eZmAudjPnRclzWaA2-eFtR1IMco2j8fy0naOp5DGfq+TOd54XxeUZGm6V9Xgu1-X2NMk3JuRoT6bTzSVsf1T1O09q9MB5D2Dm7D2fAube0-lPX+g5Z7n0XoYGsm5V4b0HBvLeUs-r5wBtNRWKc7AqzTGrLOp9RiEDoBREgUMqAABUaAhUjEmOAHhb6S2HA-Q2jciHNzfmbH+MCv7Z0pgIyo-8dSOzVMA1mI9Pbc3HlAthMCyEUIENQuh6gaxMI8Cg9eH076YPStguWicKrJ1BgQtORDj4kJrMMDIad9HsOlgbBuz9uGv3fsI3+nd+EiN7gAiRztmYgJkeAseAsRHQIEXY0gXcRFHhzItOsaAUmHniSWMsFYYBVjGE6Y8STGyyU4qkkAE95H81QZmdBjjMw7yMQnXBZjYwWKPjQrI8Ydb32cXXThbjaw8M8WUnxXiYH+PEf3SRLsQnu1HnIiJAiokwLMGCMAAA5WUi04wkATBNdaFTdY1M3ocupmV1DbFPIsdg0wcEKyaYfdOmc4aCMnJGU8UgrmDFYTXbpj8jYvxJi3NuIjhllJnmIwBkzgnSJmbIyBkTFHDjXoLQ5GDUZx3zswM5vV9ASEudc4xjSD4tPTm01qYwy5vI+SQL5XSYwuKfsbAFvDW6+O8d-EZv8xkQqCcPGFYS5llMWb-ZZ7h1kME2e07ZiZkx7JJkiyOCLUUjnKtgW8j4qDMzoNk-gryYAQCMBYdgNhPAAFEWj8ENH4AAkmMNKDJn5fSkEFdQD4CiSmlCAWgDAmDo3cEqQJ6p5SSlwCAMQkhyCoBlN6+UQ01jcBACYRA8pPj1CrOocs6M67aFjXsAAAnucSzAJLZrunAZgKwqD4iVOkM5TASTqglNgCUQA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

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
