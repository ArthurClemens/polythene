# Polythene utility scripts

Scripts to use outside of app code.


## Write CSS

### Usage

~~~javascript
writeCSS(options)
~~~


### Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **styles**    | required       | Array of `themeStyles` |  | Similar to [Styling components with variables](../theming/configuration-variables.md), now passed as an arry  |
| **path**      | required       | String   |             |  Where to save the output CSS file |
| **autoPrefix** | optional      | Boolean  | false       | Set to `true` to add vendor prefixes; not needed if your bundler writes prefixes |
| **beautify**  | optional       | Boolean  | false       | Set to `true` to beautify the output (by default the output is minified) |


### Example

~~~javascript
import { writeCSS } from "polythene-scripts"
import { themeStyles } from "polythene-css-svg"

const styles = [
  themeStyles(".themed-svg-red", {
    color_light: "red",
    color_dark: "orange"
  }),
  themeStyles(".themed-svg-green", {
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
