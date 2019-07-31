[Back to Polythene Shadow main page](../shadow.md)

# Shadow component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
- [Appearance](#appearance)
    - [Themed component](#themed-component)
  - [Styling](#styling)
    - [CSS](#css)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Shadow options](../shadow.md)



<a id="usage"></a>
## Usage

Shadow has 5 depth levels, configured with option `shadowDepth`.

<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDQA40BYC6GIAZgJZwCmYyKoAdgIYC2FyIAdABYAuTiREGHW4VhbADxxSdANYACTlArEAvAB0QPbgAcwSAPT6GUbpwCuUCJRZ0w7AOalTZgEbtSMI2DAVuYfdrwAJ6mohT6FAAezNqU-sTWdhDeGnJKcOrg3EFxnBS+GgB8anTikFCk2txyYJaZWroGRibmltaido7Obh5ePn4BwaF04WDcDHQAJgxwQuGBcCF5IwC0SgwQ3IOLwxRrFBvcK2MT07Mj7ABWYEXi+uWV3MWlD1U1dRoNeobGzm0UNk6TnMPU8DG8vn8CyWYXu4ymMzm2xhq2SUKGyz2aOO8LOcyuNxAhTuryeJRK4kmpAAbnJSJNMrAYNxbvoqdTCiAiD5KJsPLY2ABGJBoEAAXww9GYrCQHGuXJAgmEom4bCVYzkwDkAGVOAxJjAAO5yMVyFRyaG7ADc5LoVnBYDkAEE6KQmAwRJM5FERFNHQAlA6bdgAYRgTECI2EmpKcjk6u4UDMmxgUAAFNpYLoAJQxuhxuNgMzaCjpzMwHM2-MF0ykOwnERmvMFgtgPUGw0AEQoVU4SDkgtjBbFVbjYqHSimpbTueAQ7jCZq7aN3d7Tdr9fGInYbf1K57plHBaU3As+bT84LlJpl5b9u8ADlpZkSysyNUICrSyslb6WSBbwLIQQykCAZBUYAZzNQo5A3HdfG1LcKDTLVdw7VdTH7NM0P3NcAGoB1zABSOQADYTWzcdqxbZ4Wxba8ORA0gwLkFg7nZWi6LjcRdT3Y0JjdD0KC9HCuwPTgINEjDOFNfROPotkaXkuRsyPKiqJKRcnW0bQmyglQYKHBjlIY+M4AdJ8WEZI05DoZkKCKQDxAYBQlFUT5uB0b5mj+KwAQ6BxgVcdxPEtTEVkmAEYH8dZNn0ABie5l0NVJxigexfEyAB9FxzNkIptXyOQZjAGB+wABQxMI5GIVM5EDQ45BWHVkrkSKmBgO4GBMxSOUvUz7zASyKGslKiSc9kzIs58NG4JxKCKaT2KUiaaSmx8ZsVcNIxVVIxhyEbgC1KkwFiBggn7DQEiiDQMBqyhIk7UglD5IRLq2uAzCYOhUjFMVlJbYB0AwQUMAAJgwABmDBcAwABWfB2HdbRsOS6ToLkQD6MmwbhsyUTUhkCggkktHxP+rG6J41qpPE0m+Ok2SAap3rmbjSinNZ-queouQBvMjarI0WAxuZ-npqFkA5u4BaiSdSYqToewlz42CYGK-MKHaYRlr63nuJxgWhs2wQIzmYRHP1q9DYlkaNAJ8arextbcZNr8oB-IQ-wK8MKG9bXuF1tmr14js5Dkymg85jjuZj3nxcFu2QBFy2uIT43Jel2XChdQTPSjq307xjRTZ26MHeD8Rc-dT1w7FnmFLj53aVdyWRYtPZpigGQVm4OZU6pm3E8yLOHLl10a+EuQ0y7+Q+5GbMC7ToeM6T0vzeqCvI+roSvQjwuG6vQ+C5KBrNk7AB5ABZdhJ0i9MjO03S5IwIcDQgL6VQcXwAFEA4AISCAASUmBeZOMBmQaGzCUVSCpS7kFLGwFwDAXBawVDyCgr0BSykhpDJAuBcDiklCARgLA2DsDRHAr2KpyGiWbBaaKTh+T9nSB6GkFAjzILAvYWAZgpj9nisQIRR48ikHsDwfsOBtCRCPIaekmEBxoDQERKsVEdytQIuo1Wc5qzunStIXuFZ+y4DQNIq0cYShqNfLPQxIw5BaLDjouMXCZA8JgHwyYntZhQAEQQ3AR5BDeIEQwEJqiSjoK1pguaQhqCykFHg0UYpCAgCkLIWJtASHSjYLFbg7BIrUi1hWGwuT5REAsIgWUXwmh8O0K4ih4Z9A5P0F9SYjSgy5PyYU7QxSCQKmyCWNgpIiFSjIbKHJEVwx5IoAU2Y3Sv6lJAOUtgVTDA1LqabNphwJlMGaUwVp4yDRMCmTMop8zqBEH6TKcA0BHjinwGKIAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```jsx
import React from "react"
import { Shadow } from "polythene-react"

<Shadow shadowDepth={2} />
```

To add a shadow to an element, the element must have the style `position: "relative"`. In this example the shadow is added to the outer div:

```jsx
<div className="outer" style={{ position: "relative" }}>
  <span>Some card</span>
  <Shadow shadowDepth={2} />
</div>
```

To animated the shadow on change, use `animated`. Using a dynamic shadowDepth value in the component state:

```jsx
import React, { Component } from "react";

class InteractiveShadow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shadowDepth: 1
    };
  }

  render() {
    // change the shadowDepth value, for instance after user interaction (left out here)
    return (<div>
      <Shadow shadowDepth={this.state.shadowDepth} />
    </div>)
  }
}
```



<a id="appearance"></a>
## Appearance

Below are examples how to change the shadow appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```jsx
import { ShadowCSS } from "polythene-css"

ShadowCSS.addStyle(".themed-icon", {
  shadow_bottom_depth_1: "10px 10px 10px 0px rgba(45,58,112,.5)"
})

<Shadow className="themed-shadow" />
```

Depth can be set using a theme (replacing the component option):

```
ShadowCSS.addStyle(".themed-shadow", {
  shadow_depth: 3
})
```


<a id="styling"></a>
### Styling

<a id="css"></a>
#### CSS

Change CSS using the [Shadow CSS classes](../../../packages/polythene-css-classes/shadow.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/shadow"
```

