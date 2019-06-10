[Back to Polythene Button main page](../button.md)

# Button component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Links](#links)
  - [Events](#events)
  - [A row of buttons](#a-row-of-buttons)
  - [Toggle buttons, split buttons](#toggle-buttons-split-buttons)
- [Appearance](#appearance)
  - [Variations](#variations)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Button options](../button.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDRoLoZAMwEs4BTMZFUAOwEMBbE5EAOgAsAXOxPCGK9kvyYAeOISoBrAASsoJfAF4AOiA7sADmCQB6bTSjtWAVygRSDKmGYBzQoaMAjZoRh6wYEuzDb18AJ6GgiTaJAAe9Oqk3vjmVhDuKlJycMrg7H5RrCSeKgB8SlTCkFCE6uxSYKapapo6egbGpuaCVrb2Ti5uHl4+-oFUwWDsNFQAJjRwfMG+cAFZAwC0cjQQ7L2z-SRLJCvsC0Mj45MDzABWYHnC2sWl7PmFN2UVVSo1Wrr69k0kFq12xh1XDR3J5vDM5kFrsMxhMpusIYt4mC+vMtkj9tCjlMzhcQLkro87gUCsJRoQAG5SQijVKwGDsS7aMnk3IgPAeUirFyWJgARiQaBAAF8MNR6IwkCxzmyQLx+IJ2Ew5UMpMApAAhIzsdh8KRCqQKKTgzYAbgKyvKas12r4AGEAMr2vUGo0ooIO+1mqgFa06qge5g0Uaje3pUgAChUzECDFGCwcWr9KgwqoKUikvEmUAA+mJrBxswJQuwkOmy+mVABifA15NpjPwGA5vMFhwrCTWWBGMalqs13kAdgALEO61R05mm9nxlAJIWwiXy+W+7W2fXJzmZ3O2xAO12exWQJWIABWXm8gBsACYVAUhQBKL0+xN2x2B4OhjIkSMsBxN0YkHIcYJja3psqm44NlmuaEPm7DzsWpaHpWaAAMw0AAnPgo5rpBG4wXB2Z-lAAFQL2R5oZh2FjhOjabvoc5FouZYrvgNFQVOW5Ef+gFIax7HEaRpbsFARgkHej7ElQFoai+VAAEowAA7i64ZqmYwJgAAcuKKaEGA8k0PpJCjHq94GrkUiRpBpIUhmcCaTpDAKMAKAqLASnJvZjnitgZwwOIP5SCo95Cvc5bCL6fD1uWDkOCQKQqFFYExWWUBGR4NLAPphnGaMQqpdo4VlpFcmpemcUJakWkwFISnAqwt6QeW9VgKwLn4BMHgFc1aUZSZLk5f1+WFcV6alaB5VSJViUgDVVKSE1S4LRIHVdSQPXLeleWDQZw2bWWRWpRNSa9RVNDxbNAAi+kXaQoxLUuZJgHdJlTdtmW7blmUHemR29Sd0VndNF1VSo9oJSQqxvSAU0clDAgPcDH0Ddle15b9Uj-RFyVTTNqR2mIu6PeWJDkgqYAucAU1KH6tpExIpbhuZCiWcq8AkMwkzWD+ZiEMTID3lNQqY+mKNZUNGOjcduPA-jKgAJK0Fy5I0IjUj4E2UhXriU3iLsFJqyQLlXqLSTDV9+3SwDsvLfLICfvdJNlkMX5U1N6Y7nuMDdqMtp0eR1b4BhAAcaBoOxy0boH4cR7DwMi+9Fto99JmY9jJW20u9sACpZLGzsTg57hOcbKgxiZ8ZlfHW3J5LP3WzjZVy6Ds3qjxQGF95JfiqkgmAZXIFJjXS7i5bUu9Rn41Z7FrepLaRhDDAdBJKUkTiSP5YlOo6-u8D6aCKMADy6grHYfilryGAe0agFgPpAj8MJokkNf+8VGGJCltT7+0Vmgc1lDuHLu6YzaJ2RnXdGDdJ7FSuMye4klvTST4CqAAgjvVSLNLLEnYLZFkx1mTd20r3dyykpBUHpBvMaJUaAyDkIoV42pagfAaCYMwPwWg2H+I4ZwrhjSogWABOgMBvDLFWNoSs2gh7RRAFIYYUBrCeFSERByi08QQxIFILqMBSwAAU3QDA1lreSOxVhSAWLJUCUghEwCuDQahcCKT3FptPOSikVJTykIDBSZCNI92ciodQWwtwLD9BvLGDjkruKpFAkyESZZuN8cXYhASQBBMEQxUJUxEj1zif9Wmjj8FIJMbsK6R8ACyzA5BjEAtZca6D1ARLfumUYMAIBGAsOwGwngACizR+Dqj8ArUYP46QMkFgUR8MpeB0HUMQQCTA2yXRlPDLkKC+RDiQFeAcwpRQgFoAwJgzAkTTL4I-RUkoqlkOYOk6RVAblbCYlXKxP90x0H0LYKgpYLzqFCFIEOvyvQ9RWZDNZPJJSoQFMKXAIAxCSHIKgMUhzJRiK6QBcmkx1CdJxDKEwiBJRvDqN2dQHZjnL20Ki7QHTRgUtMWismCUYBYoVDivA6QglMEJLspFEoQCosEcvZg6LGXMv4KykAeKmCEt0MS0lMzaW7AFXQKldAaX8taXQIVDLMXYulGyvwHLJRcqFNgIUQA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { Button } from "polythene-react"

<Button label="Button" />
~~~


<a id="links"></a>
### Links

See: [URLs and router links](../../handling-urls.md)



<a id="events"></a>
### Events

Add an onClick event:

~~~jsx
<Button
  label="Button"
  events={{
    onClick: () => console.log("click")
  }}
/>
~~~


<a id="a-row-of-buttons"></a>
### A row of buttons

When placed inside an element with classname `pe-button-row`, buttons will get a side margin to set them apart. The row element itself will have an negative side margin so that the first button still lines up properly.


<a id="toggle-buttons-split-buttons"></a>
### Toggle buttons, split buttons

Place a Button inside a [Button Group](./button-group.md) to create a tightly aligned group of buttons.


<a id="appearance"></a>
## Appearance

<a id="variations"></a>
### Variations

* Create a Contained Button appearance with `contained: true`
* Create a Raised Button appearance with `raised: true`
* Add a border with `border: true`
* The hover effect can be hidden with `wash: false`
* Special hover effects can be created with a theme, see below
* The ripple effect on click can be hidden with `ink: false`
* (To be updated for specs MD 2) Button contains no icon as this is not part of the Material Design guidelines; use [Icon Button](../icon-button.md) instead (which can contain a label)
* Add a dropdown icon with `dropdown: true`
* Create a wide button with `extraWide: true`
* Create a high label with `highLabel: true`

<a id="styling"></a>
### Styling

Below are examples how to change the Button appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { ButtonCSS } from "polythene-css"

ButtonCSS.addStyle(".bordered-button", {
  color_light_text:   "#673ab7",
  color_light_border: "#673ab7",
  color_dark_text:    "yellow",
  color_dark_border:  "yellow"
})

<Button
  label="Borders"
  className="bordered-button"
  border
/>
~~~

To create a hover effect:

~~~javascript
ButtonCSS.addStyle(".hover-button", {
  color_light_hover:            "#fff",
  color_light_hover_background: "#673ab7",
  animation_duration:           "100ms",
})

<Button
  label="Hover"
  className="hover-button"
/>
~~~


<a id="css"></a>
#### CSS

Change CSS using the [Button CSS classes](../../../packages/polythene-css-classes/button.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/button"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<Button
  style={{
    backgroundColor: "#EF6C00"
    color: "#fff"
  }}
/>
~~~


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


