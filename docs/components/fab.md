# FAB: Floating Action Button

A circular main button with a [Shadow](shadow.md) and [Ripple](ripple.md) effect.

Differences from [Raised Button](raised-button.md) behaviour:

* The ripple emanates from the center of the button
* The ripple has a 2/3 decay speed
* No selected state


## Main features

* All [Button](button.md) and [Raised Button](raised-button.md) main features
* Custom icon
* Display mini size


## Usage

* [Usage with Mithril](mithril/fab.md)
* [Usage with React](react/fab.md)



## Options

### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **className** | optional | String |       | Extra CSS class appended to `pe-fab` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id**        | optional | String |       | HTML element id |
| **content**   | either `icon` or `content` | String, hyperscript or component |  | Alternative content |
| **before**    | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tabindex** (React: **tabIndex**)  | optional | Integer | | Tab index |
| **events**    | optional | Object | | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### Button options

See: [Button options](Button.md#options)

### FAB specific options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **icon**      | use `icon` or `content` | Object |  | [Icon](Icon.md) options object |
| **mini**      | optional | Boolean | false | Set to true to display a small button (class name `pe-fab--mini`) |


## Composition

FAB is composed from:

* [Raised Button](raised-button.md)
  * [Button](button.md)
* [Icon](icon.md) (when using option `icon`)


## CSS classes

See: `polythene-core-fab/src/classes.js`


## Future

> "The floating action button animates onto the screen as an expanding piece of material, by default. The icon within it may be animated."

> "The floating action button can transform into a toolbar upon press or scroll. The toolbar can contain related actions, text and search fields, or any other items that would be useful at hand."

> "The floating action button can fling out related actions upon press."

> "The floating action button can transform into a single piece of material which contains all the actions."

> "The floating action button can transform into sheets of material that are part of the app structure."


