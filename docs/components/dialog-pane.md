# Dialog Pane

Content for [Dialog](dialog.md).

- [Usage](#usage)
- [Options](#options)
  - [Dialog pane options](#dialog-pane-options)
  - [Transition options](#transition-options)
- [CSS classes](#css-classes)


## Usage

* [Usage with Mithril](mithril/dialog.md)
* [Usage with React](react/dialog.md)


<a id="options"></a>
## Options

<a id="dialog-specific-options"></a>
### Dialog pane options

| **Parameter**     |  **Required** | **Type** | **Default** | **Description** |
| ----------------- | -------------- | -------- | ----------- | --------------- |
| **body**          | optional | String, hyperscript or component |  | Body content |
| **borders** | optional | String | "overflow" | Options: "always", "never", "overflow" (when the body overflows the content area); a top border is only shown when a header is present; a bottom border is only shown when a footer is present |
| **footer**        | optional | String, hyperscript or component | | Footer row |
| **footerButtons** | optional | String, hyperscript or component | | Footer buttons to show in the footer row |
| **formOptions**   | optional | Options Object | | Form attribute options such as `method` or `enctype` (React: `encType`) |
| **fullBleed** | optional | Boolean | false | Set to `true` to remove padding from the body element |
| **header**        | optional | String, hyperscript or component | | Header row |
| **menu**          | optional | [Menu](menu.md) component |  | Pass a menu content component to use the dialog as menu, for example as a settings menu |
| **title**         | optional | String |  | Header title; if omitted, no header will be shown |

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



<a id="css-classes"></a>
## CSS classes

* [Dialog Pane classes](../../packages/polythene-css-classes/dialog-pane.js)

