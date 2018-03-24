[Back to Theme main page](../theming.md)

# Global theme file

Global theme variables such as `unit_icon_size_small` or the app's primary action color can be overridden by creating an additional theme file.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Background: how a theme is found](#background-how-a-theme-is-found)
- [Creating the custom theme file](#creating-the-custom-theme-file)
- [Pointing your app to the theme file](#pointing-your-app-to-the-theme-file)
  - [Use with Webpack](#use-with-webpack)
  - [Use with Rollup](#use-with-rollup)
  - [Use with Browserify](#use-with-browserify)
  - [Use with SystemJS / jspm](#use-with-systemjs--jspm)
- [Global theming with Next.js](#global-theming-with-nextjs)

<!-- /MarkdownTOC -->



<a id="background-how-a-theme-is-found"></a>
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




<a id="creating-the-custom-theme-file"></a>
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



<a id="pointing-your-app-to-the-theme-file"></a>
## Pointing your app to the theme file

The second step is to let the application read our custom theme file. For this, the path to `polythene-theme` needs to be set to a new file location.

Each bundler has a different method to to this - it is generally called "map" or "alias".


<a id="use-with-webpack"></a>
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


<a id="use-with-rollup"></a>
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


<a id="use-with-browserify"></a>
### Use with Browserify

Use the [pathmodify](https://www.npmjs.com/package/pathmodify) plugin to change the default config path to your custom file:

~~~javascript
browserify().plugin(pathmodify, {
  mods: [
    pathmodify.mod.id("polythene-config", "app/custom-theme")
  ]
})
~~~


<a id="use-with-systemjs--jspm"></a>
### Use with SystemJS / jspm

In `config.js`, change the path in the map variables:

~~~javascript
...
map: {
  "polythene-theme": "app/custom-theme"
  ...
}
~~~


<a id="global-theming-with-nextjs"></a>
## Global theming with Next.js

Although [nextjs](https://github.com/zeit/next.js/) doesn't currently provide a good way to map or alias a component in `node_modules`, we can still achieve global theming by carefully following another approach.

If we update the `vars` variable inside the `polythene-style` module before any other component reads values from it, we achieve essentially the same thing as aliasing the module.

~~~javascript
import { vars as polytheneVars } from "polythene-style"

// Change polytheneVars:
Object.assign(polytheneVars, {
  color_primary: "255, 152, 0"
})
~~~

But be careful to remember that this code needs to run before any Polythene components or files are included which also include `polythene-style` or else the `vars` won't have been updated yet.

