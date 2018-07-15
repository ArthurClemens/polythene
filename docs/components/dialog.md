# Dialog

Displays a single dialog, or a stack of dialogs.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Dialog specific options](#dialog-specific-options)
  - [Transition options](#transition-options)
  - [Spawn options](#spawn-options)
  - [DialogPane options](#dialogpane-options)
  - [Transition options](#transition-options-1)
  - [Common component options](#common-component-options)
- [Composition](#composition)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->

<a id="main-features"></a>
## Main features

* Set as dismissable or as modal dialog
* Set backdrop background
* Set full screen
* Set z-index
* Custom transitions
* Create multiple stacked dialogs
* Spawn dialogs from different locations
* RTL (right-to-left) support


<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/dialog.md)
* [Usage with React](react/dialog.md)



<a id="options"></a>
## Options

<a id="dialog-specific-options"></a>
### Dialog specific options

| **Parameter**     |  **Required** | **Type** | **Default** | **Description** |
| ----------------- | -------------- | -------- | ----------- | --------------- |
| **backdrop** | optional | Boolean | false | Set to `true` to show a backdrop background color |
| **body**          | optional | String, hyperscript or component |  | Body content; if omitted, no body will be shown |
| **borders** | optional | String | "overflow" | Options: "always", "never", "overflow" (when the body overflows the content area); a top border is only shown when a header is present; a bottom border is only shown when a footer is present |
| **footer**        | optional | String, hyperscript or component | | Footer row |
| **footerButtons** | optional | String, hyperscript or component | | Footer buttons to show in the footer row |
| **formOptions**   | optional | Options Object | | Form attribute options such as `method` or `enctype` (React: `encType`) |
| **fullBleed** | optional | Boolean | false | Set to `true` to remove padding from the body element |
| **fullScreen**    | optional | Boolean | false | Set to `true` to make the dialog full screen; tapping the backdrop or pressing ESCAPE will not close the dialog; should be done for mobile screens only; `title` and `footer` will be ignored; pass a [Toolbar](toolbar.md) to `body` (see "Usage" for an example) |
| **header**        | optional | String, hyperscript or component | | Header row |
| **menu**          | optional | [Menu](menu.md) options object |  | Pass menu options to use the dialog as menu |
| **modal**         | optional | Boolean | false | Set to `true` to create a modal dialog; tapping the backdrop or pressing ESCAPE will not close the dialog |
| **panes**         | optional | Array of `DialogPane` components (React) | | Used internally |
| **panesOptions**  | optional | Array of `DialogPane` component options (Mithril)  | | Used internally |
| **shadowDepth**   | optional | Number 0-5 | 3 | Depth of the shadow |
| **title**         | optional | String |  | Header title; if omitted, no header will be shown |
| **updateContentOnScroll** | optional | Boolean | false | Set to `true` to "unfreeze" dialog contents during scrolling; for performance this is set to false by default |

<a id="transition-options"></a>
### Transition options

| **Parameter**    |  **Required**  | **Type** | **Default** | **Description** |
| ---------------- | -------------- | -------- | ----------- | --------------- |
| **transitions**  | optional       | Object   |             | Object with functions for keys `show` and `hide`; see "Usage" for an example |
| **showDuration** | optional       | Number   |             | The show transition duration in seconds |
| **hideDuration** | optional       | Number   |             | The hide transition duration in seconds |
| **showDelay**    | optional       | Number   |             | The show delay duration in seconds |
| **hideDelay**    | optional       | Number   |             | The hide delay duration in seconds |
| **didShow**      | optional       | Function `(id::String) -> undefined` | | Callback function that is called when the show transition is done |
| **didHide**      | optional       | Function `(id::String) -> undefined` | | Callback function that is called when the hide transition is done |

<a id="spawn-options"></a>
### Spawn options

| **Parameter**    |  **Required** | **Type** | **Default** | **Description** |
| ---------------- | -------------- | -------- | ----------- | --------------- |
| **spawn**        | optional | String | "default_dialog" | Dialog spawner id |
| **id**           | optional | String | "default_dialog" | Dialog instance id |

<a id="dialogpane-options"></a>
### DialogPane options

| **Parameter**     |  **Required** | **Type** | **Default** | **Description** |
| ----------------- | -------------- | -------- | ----------- | --------------- |
| **header**        | optional | String, hyperscript or component | | Header row |
| **title**         | optional | String                           |  | Header title |
| **body**          | optional | String, hyperscript or component | | Body section |
| **footer**        | optional | String, hyperscript or component | | Footer row |
| **footerButtons** | optional | String, hyperscript or component | | Footer buttons to show in the footer row |

<a id="transition-options-1"></a>
### Transition options

See: [Transitions](../transitions.md)

<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after**     | optional       | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before**    | optional       | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional       | String   |             | Extra CSS class appended to `pe-dialog` |
| **content**   | optional       | String, hyperscript or component | | Alternative content; replaces `body` |
| **element**   | optional       | String   | "form"      | HTML element tag |
| **id**        | optional       | String   |             | HTML element id |
| **style**     | optional       | Object   |             | For setting simple style attributes; will be applied to `pe-dialog__content` |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |


<a id="composition"></a>
## Composition

Dialog is composed from:

* Multi (`polythene-core`)
* [Shadow](shadow.md)
* DialogPane


<a id="css-classes"></a>
## CSS classes

* [Dialog classes](../../packages/polythene-css-classes/dialog.js)
* [Dialog Pane classes](../../packages/polythene-css-classes/dialog-pane.js)


