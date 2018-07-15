# Drawer

Navigation panel that appears with a cover or push animation, or can be placed permanently.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Drawer specific options](#drawer-specific-options)
  - [Transition options](#transition-options)
  - [Common component options](#common-component-options)
- [Composition](#composition)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
## Main features

* Choose between standard (permanent or dismissible) or cover drawer
* Choose animation: covering, pushing, or create a custom transition
* Optional mini behavior (expanding from an icon-only view)
* Optionally add a backdrop, shadow or border
* Optionally place at the right side
* RTL (right-to-left) support

<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/drawer.md)
* [Usage with React](react/drawer.md)



<a id="options"></a>
## Options

<a id="drawer-specific-options"></a>
### Drawer specific options

| **Parameter** |  **Required** | **Type**   | **Default**     | **Description** |
| ------------- | ------------- | ---------- | --------------- | --------------- |
| **anchor**    | optional      | String     | "start"         | Set to "end" to reveal the drawer from the far (right) side; with RTL "end" becomes the left side |
| **backdrop**  | optional      | Boolean    | false           | Set to `true` to show a backdrop background color |
| **border**    | optional      | Boolean    |                 | Useful with a permanent or pushing drawer when no shadow is used; set to `true` to create a border at the right side; with RTL the border is shown at the left side |
| **fixed**     | optional      | Boolean    |                 | Set to `true` to give the drawer CSS property `position: fixed`; useful for an app drawer (that must be shown covering all content) when it is drawn from a deeper component |
| **floating**  | optional      | Boolean    |                 | Variant of `permanent`; additionally set this to `true` to display the drawer as a "floating" block (instead of full height) |
| **mini**      | optional      | Boolean    |                 | Set to `true` to display a fraction of the drawer (typically to show the icons only), and to reveal the full menu when expanding |
| **modal**     | optional      | Boolean    | false | Set to `true` to create a modal drawer; tapping the backdrop or pressing ESCAPE will not close the drawer |
| **permanent** | optional      | Boolean    |                 | Set to `true` to display the drawer as a permanent side menu |
| **push**      | optional      | Boolean    | `false` (cover) | Set to `true` to animate the drawer with a push animation, pushing away the content next to the drawer | 
| **shadowDepth** | optional      | Number 0-5 | 0               | Depth of the shadow; 0 will show no shadow |
| **show**      | optional      | Boolean    |                 | Set to `true` to reveal the drawer, `false` to hide a displayed drawer |

<a id="transition-options"></a>
### Transition options

See: [Transitions](../transitions.md)

<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after**     | optional       | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before**    | optional       | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional       | String   |             | Extra CSS class appended to `pe-drawer` |
| **content**   | optional       | String, hyperscript or component | | Alternative content; replaces `body` |
| **element**   | optional       | String   | "form"      | HTML element tag |
| **id**        | optional       | String   |             | HTML element id |
| **style**     | optional       | Object   |             | For setting simple style attributes; will be applied to `pe-dialog__content` |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |


<a id="composition"></a>
## Composition

Drawer is composed from:

* [Dialog](dialog.md)


<a id="css-classes"></a>
## CSS classes

* [Drawer classes](../../packages/polythene-css-classes/drawer.js)
