# Polythene helper scripts


## Write CSS

### Usage

~~~javascript
writeCSS(options)
~~~

### Example

~~~javascript
import { writeCSS } from "polythene-scripts"
import { addStyle } from "polythene-css-svg"

const styles = [
  addStyle(".themed-svg-red", {
    color_light: "red",
    color_dark: "orange"
  }),
  addStyle(".themed-svg-green", {
    color_light: "green",
    color_dark: "blue"
  })
]

writeCSS({
  styles,
  path: "./app.css",
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



