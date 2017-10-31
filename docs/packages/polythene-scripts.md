# Polythene helper scripts


## Write CSS

### Usage

~~~javascript
writeCSS(options)
~~~

### Example

~~~javascript
const { writeCSS } = require("polythene-scripts");
const { SVGCSS, ButtonCSS } = require("polythene-css");

const styles = [
  ButtonCSS.getStyle(".themed-red-button", {
    color_light_text: "red"
  }),
  SVGCSS.getStyle(".themed-svg-red", {
    color_light: "red",
    color_dark: "orange"
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
| **gzip**      | optional       | Boolean  | false       | Set to `true` to export a `.gz` file (next to the regular output file)  |



