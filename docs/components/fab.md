# FAB: Floating Action Button

A circular main button with a [Shadow](shadow.md) and [Ripple](ripple.md) effect.

Differences from a Raised [Button](button.md) behavior:

* The ripple emanates from the center of the button
* The ripple has a 2/3 decay speed
* No selected state

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [FAB: Floating Action Button](#fab-floating-action-button)
  - [Main features](#main-features)
  - [Usage](#usage)
  - [Options](#options)
    - [Button options](#button-options)
    - [FAB specific options](#fab-specific-options)
    - [Common component options](#common-component-options)
  - [Composition](#composition)
  - [CSS classes](#css-classes)
  - [Future](#future)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
## Main features

* All [Button](button.md) main features
* Custom icon
* Display mini size



<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/fab.md)
* [Usage with React](react/fab.md)




<a id="options"></a>
## Options


<a id="button-options"></a>
### Button options

See:
* [Button options](button.md#options)


<a id="fab-specific-options"></a>
### FAB specific options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **icon**      | use `icon` or `content` | Object |  | [Icon](Icon.md) options object |
| **mini**      | optional | Boolean | false | Set to `true` to display a small button (class name `pe-fab--mini`) |


<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after**     | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before**    | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional | String |       | Extra CSS class appended to `pe-fab` |
| **content**   | either `icon` or `content` | String, hyperscript or component |  | Alternative content |
| **dataSet** | optional | Object |  | Custom data attributes: `dataSet: { count: "0" }` creates `data-count="0"` (note that the key should be a lowercase string) |
| **element**   | optional | String | "div" | HTML element tag |
| **events**    | optional | Object | | Options object containing one or more standard events such as `onclick` (React: `onClick`) |
| **id**        | optional | String |       | HTML element id |
| **style**     | optional | Object |       | For setting simple style attributes |
| **tabindex** (React: **tabIndex**)  | optional | Integer | | Tab index |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |



<a id="composition"></a>
## Composition

FAB is composed from:

* [Button](button.md)
* [Icon](icon.md) (when using option `icon`)



<a id="css-classes"></a>
## CSS classes

* [FAB classes](../../packages/polythene-css-classes/fab.js)



<a id="future"></a>
## Future

> "The floating action button animates onto the screen as an expanding piece of material, by default. The icon within it may be animated."

> "The floating action button can transform into a toolbar upon press or scroll. The toolbar can contain related actions, text and search fields, or any other items that would be useful at hand."

> "The floating action button can fling out related actions upon press."

> "The floating action button can transform into a single piece of material which contains all the actions."

> "The floating action button can transform into sheets of material that are part of the app structure."


