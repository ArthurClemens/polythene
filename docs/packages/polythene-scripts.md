# Polythene helper scripts


## Write CSS

### Usage

~~~javascript
writeCSS(options)
~~~

### Example

~~~javascript
import { writeCSS } from "polythene-scripts"
import { SVGCSS, ButtonCSS } from "polythene-css"

const styles = [
  themeStyles(".themed-svg-red", {
    color_light: "red",
    color_dark: "orange"
  }),
  ButtonCSS.themeStyles(".themed-red-button", {
    color_light_text: "red"
  })
]

writeCSS({
  styles,
  path: "./theme.css",
  autoPrefix: true
})
~~~

### `writeCSS` options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **styles**    | required       | Array of `themeStyles` |  | Similar to [Styling components with variables](../theming/configuration-variables.md), now passed as an arry  |
| **path**      | required       | String   |             |  Where to save the output CSS file |
| **autoPrefix** | optional      | Boolean  | false       | Set to `true` to add vendor prefixes; not needed if your bundler writes prefixes |
| **beautify**  | optional       | Boolean  | false       | Set to `true` to beautify the output (by default the output is minified) |



