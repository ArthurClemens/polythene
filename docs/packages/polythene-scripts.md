# Polythene helper scripts

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Write CSS](#write-css)
  - [Usage](#usage)
  - [Example](#example)
  - [`writeCSS` options](#writecss-options)

<!-- /MarkdownTOC -->


<a id="write-css"></a>
## Write CSS

Writes themed CSS to a file. Pass component theme variables to create CSS with a specified class name.

Read more at [Styling with variables](../theming/style-variables.md).

<a id="usage"></a>
### Usage

~~~javascript
writeCSS(options)
~~~

<a id="example"></a>
### Example

For example, to create a CSS file that contains themed CSS for Card and Button, you could write:

~~~javascript
// ./scripts/writeThemeCSS.js
const { writeCSS } = require("polythene-scripts")
const { CardCSS, ButtonCSS } = require("polythene-css")

const styles = [
  CardCSS.getStyle(".themed-card", {
    color_dark_main_background: "#B89E58",
    color_dark_title_text:      "#fff",
    color_dark_subtitle_text:   "#fff"
  }),
  ButtonCSS.getStyle(".themed-button", {
    color_light_text: "red"
  })
]

writeCSS({
  styles,
  path: "./dist/css/theme.css",
  beautify: true
})
~~~

Creates:

~~~css
.pe-dark-tone.themed-card.pe-card, .pe-dark-tone .themed-card.pe-card {
  background-color: #b89e58;
}

.pe-dark-tone.themed-card .pe-card__content .pe-card__subtitle,
.pe-dark-tone .themed-card .pe-card__content .pe-card__subtitle,
.pe-dark-tone.themed-card .pe-card__content .pe-card__title,
.pe-dark-tone .themed-card .pe-card__content .pe-card__title,
.pe-dark-tone.themed-card .pe-card__overlay__content .pe-card__subtitle,
.pe-dark-tone .themed-card .pe-card__overlay__content .pe-card__subtitle,
.pe-dark-tone.themed-card .pe-card__overlay__content .pe-card__title,
.pe-dark-tone .themed-card .pe-card__overlay__content .pe-card__title {
  color: #fff;
}

.pe-light-tone.pe-text-button.themed-button:not(.pe-button--disabled),
.pe-light-tone .pe-text-button.themed-button:not(.pe-button--disabled),
.pe-light-tone.pe-text-button.themed-button:not(.pe-button--disabled):link,
.pe-light-tone .pe-text-button.themed-button:not(.pe-button--disabled):link,
.pe-light-tone.pe-text-button.themed-button:not(.pe-button--disabled):visited,
.pe-light-tone .pe-text-button.themed-button:not(.pe-button--disabled):visited,
.pe-text-button.themed-button:not(.pe-button--disabled),
.pe-text-button.themed-button:not(.pe-button--disabled):link,
.pe-text-button.themed-button:not(.pe-button--disabled):visited {
  color: red;
}

.pe-light-tone.pe-text-button.pe-button--contained.themed-button:not(.pe-button--disabled),
.pe-light-tone .pe-text-button.pe-button--contained.themed-button:not(.pe-button--disabled),
.pe-light-tone.pe-text-button.pe-button--contained.themed-button:not(.pe-button--disabled):link,
.pe-light-tone .pe-text-button.pe-button--contained.themed-button:not(.pe-button--disabled):link,
.pe-light-tone.pe-text-button.pe-button--contained.themed-button:not(.pe-button--disabled):visited,
.pe-light-tone .pe-text-button.pe-button--contained.themed-button:not(.pe-button--disabled):visited,
.pe-text-button.pe-button--contained.themed-button:not(.pe-button--disabled),
.pe-text-button.pe-button--contained.themed-button:not(.pe-button--disabled):link,
.pe-text-button.pe-button--contained.themed-button:not(.pe-button--disabled):visited {
  color: red;
}

/*# sourceMappingURL=theme.css.map */
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
