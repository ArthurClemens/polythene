# Polythene helper scripts

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Write CSS](#write-css)
  - [Usage](#usage)
  - [Example](#example)
  - [`writeCSS` options](#writecss-options)

<!-- /MarkdownTOC -->


<a id="write-css"></a>
## Write CSS


<a id="usage"></a>
### Usage

~~~javascript
writeCSS(options)
~~~


<a id="example"></a>
### Example

~~~javascript
const { writeCSS } = require("polythene-scripts")
const { SVGCSS, ButtonCSS } = require("polythene-css")

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
  autoPrefix: true,
  wrapInGlobal: true,
})
~~~

<a id="writecss-options"></a>
### `writeCSS` options

| **Parameter**    |  **Required**  | **Type**               | **Default** | **Description** |
| ---------------- | -------------- | ---------------------- | ----------- | --------------- |
| **styles**       | required       | Array of `themeStyles` |             | Similar to [Styling components with variables](../theming/style-variables.md), now passed as an array |
| **path**         | required       | String                 |             | Where to save the output CSS file |
| **autoPrefix**   | optional       | Boolean                | false       | Set to `true` to add vendor prefixes; not needed if your bundler writes prefixes |
| **beautify**     | optional       | Boolean                | false       | Set to `true` to beautify the output (by default the output is minified) |
| **gzip**         | optional       | Boolean                | false       | Set to `true` to export a `.gz` file (next to the regular output file) |
| **gzip**         | optional       | Boolean                | false       | Set to `true` to export a `.gz` file (next to the regular output file) |
| **wrapInGlobal** | optional       | Boolean                | false       | To use with CSS Modules: set to `true` to wrap the generated css inside a `:global { ... }` tag |
