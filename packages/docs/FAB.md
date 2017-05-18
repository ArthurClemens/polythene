# Floating Action Button

A circular main button with a [Shadow](Shadow.md) and [Ripple](Ripple.md) effect.



## Usage

* [Usage with Mithril](FAB-Mithril.md)
* [Usage with React](FAB-React.md)



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **className** | optional | String |       | Extra CSS class appended to `pe-fab` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id**        | optional | String |       | HTML element id |
| **content**   | either `icon` or `content` | String, hyperscript or component |  | Alternative content |
| **before**    | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tabindex**  | optional | Integer | | Tab index |
| **events**    | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### Button options

See: [Button](Button.md)

### FAB specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **icon**      | use `icon` or `content` | Object |  | [icon](Icon.md) options object |
| **mini**      | optional | Boolean | false | Set to true to display a small button (class name `pe-fab--mini`) |



## Composition

FAB is composed from:

* [Raised Button](RaisedButton.md)
  * [Button](Button.md)
* [Icon](Icon.md) (when using option `icon`)

Differences to button behaviour:

* Button options `raised` is default set to `true`
* The ripple emanates from the center of the button
* The ripple has a 2/3 decay speed



## CSS classes

See: `polythene-core-fab/src/classes.js`



## Future

> "The floating action button animates onto the screen as an expanding piece of material, by default. The icon within it may be animated."

> "The floating action button can transform into a toolbar upon press or scroll. The toolbar can contain related actions, text and search fields, or any other items that would be useful at hand."

> "The floating action button can fling out related actions upon press."

> "The floating action button can transform into a single piece of material which contains all the actions."

> "The floating action button can transform into sheets of material that are part of the app structure."
