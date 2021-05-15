# Dialog

Displays a single dialog, or a stack of dialogs.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Dialog](#dialog)
  - [Main features](#main-features)
  - [Usage](#usage)
  - [Options](#options)
    - [Dialog specific options](#dialog-specific-options)
    - [Dialog pane options](#dialog-pane-options)
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

A dialog is invoked with `Dialog.show(dialogOptions)`, where `dialogOptions` are [Dialog Pane options](dialog-pane.md#options), optionally combined with dialog specific options.


<a id="dialog-specific-options"></a>
### Dialog specific options

| **Parameter**     |  **Required** | **Type** | **Default** | **Description** |
| ----------------- | -------------- | -------- | ----------- | --------------- |
| **backdrop**      | optional | Boolean | false | Set to `true` to show a backdrop background color |
| **fullScreen**    | optional | Boolean | false | Set to `true` to make the dialog full screen; `title` and `footer` will be ignored; pass a [Toolbar](toolbar.md) to `body` (see "Usage" for an example) |
| **modal**         | optional | Boolean | false | Set to `true` to create a modal dialog; tapping the backdrop will not close the dialog |
| **disableEscape** | optional | Boolean | false | Set to `true` to not close the dialog when pressing ESCAPE |
| **panes**         | optional | Array of `DialogPane` components (React) | | Used internally |
| **panesOptions**  | optional | Array of `DialogPane` component options (Mithril)  | | Used internally |
| **shadowDepth**   | optional | Number 0-5 | 3 | Depth of the shadow |

### Dialog pane options

See: [Dialog Pane](dialog-pane.md)

<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **after**     | optional       | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **before**    | optional       | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **className** | optional       | String   |             | Extra CSS class appended to `pe-dialog` |
| **content**   | optional       | String, hyperscript or component | | Alternative content; replaces `body` |
| **dataSet** | optional | Object |  | Custom data attributes: `dataSet: { count: "0" }` creates `data-count="0"` (note that the key should be a lowercase string) |
| **element**   | optional       | String   | "form"      | HTML element tag |
| **id**        | optional       | String   |             | HTML element id |
| **style**     | optional       | Object   |             | For setting simple style attributes; will be applied to `pe-dialog__content` |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |


<a id="composition"></a>
## Composition

Dialog is composed from:

* Multi (`polythene-core`)
* [DialogPane](dialog-pane.md)
* [Shadow](shadow.md)


<a id="css-classes"></a>
## CSS classes

* [Dialog classes](../../packages/polythene-css-classes/dialog.js)


