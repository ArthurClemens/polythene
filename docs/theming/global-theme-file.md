[Back to Theme main page](../theming.md)

# Global theme file

Use this method to set global theme variables, such as the primary action color. 


## Background: how a theme is found

Components read the global variables from the file `variables` located in `polythene-style`. Module `polythene-theme` acts as a gateway - by default everything is passed through:

~~~javascript
// Some component
import { vars } from "polythene-theme"
          ^
          |
// polythene-theme
export { vars } from "polythene-style"
          ^
          |
// polythene-style
export { vars } from "variables"
~~~

A custom theme file replaces the default `polythene-style`, while the import name "polythene-theme" is kept unchanged:

~~~javascript
// Some component
import { vars } from "polythene-theme"
          ^
          |
// custom-theme.js
import { vars as defaultVars } from "polythene-style"
export const vars = Object.assign({}, defaultVars, ...)
          ^
          |
// polythene-style
export { vars } from "variables"
~~~



## Creating the custom theme file

Let's say we want to change the primary color. This is defined by variable  `color_primary`. We change it by overriding this variable:

~~~javascript
// app/custom-theme.js
import { vars as defaultVars } from "polythene-style"

export const vars = Object.assign(
  {},
  defaultVars,
  {
    color_primary: "255, 152, 0" // new base color: orange 500
  }
)
~~~


## Pointing your app to the theme file

The second step is to let the application read our custom theme file. For this, the path to `polythene-theme` needs to be set to a new file location.

Each bundler has a different method to to this - it is generally called "map" or "alias".

### Use with Webpack

~~~javascript
// webpack.config.js
// ...
{
  resolve: {
    alias: {
      "polythene-theme": path.resolve(__dirname, "app/custom-theme.js") // when config is in the project root
    }
  }
}
~~~

### Use with Rollup

Use the [rollup-plugin-pathmodify](https://www.npmjs.com/package/rollup-plugin-pathmodify) plugin:

~~~javascript
// rollup.config.js
// ...
{
  plugins: [
    pathmodify({
      aliases: [{
        id: "polythene-theme",
        resolveTo: process.cwd() + "/app/custom-theme.js"
      }]
    }),
  ]
}
~~~

### Use with Browserify

Use the [pathmodify](https://www.npmjs.com/package/pathmodify) plugin to change the default config path to your custom file:

~~~javascript
browserify().plugin(pathmodify, {
  mods: [
    pathmodify.mod.id("polythene-config", "app/custom-theme")
  ]
})
~~~

### Use with SystemJS / jspm

In `config.js`, change the path in the map variables:

~~~javascript
...
map: {
  "polythene-theme": "app/custom-theme"
  ...
}
~~~





