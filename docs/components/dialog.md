# Dialog

Displays a single dialog, or a stack of dialogs.


## Main features

* Set as dismissable or as modal dialog
* Set backdrop background
* Set full screen
* Set z-index
* Custom transitions
* Create multiple stacked dialogs
* Spawn dialogs from different locations


## Usage

* [Usage with Mithril](mithril/dialog.md)
* [Usage with React](react/dialog.md)



## Options

### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String   | "form"      | HTML element tag |
| **className**     | optional       | String   |             | Extra CSS class appended to `pe-dialog` |
| **style**     | optional       | Object   |             | For setting simple style attributes; will be applied to `pe-dialog__content` |
| **id**        | optional       | String   |             | HTML element id |
| **content**   | optional       | String, hyperscript or component | | Alternative content; replaces `body` |
| **before**    | optional       | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### Dialog specific options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **formOptions** | optional | Options Object | | Form attribute options such as `type` or `enctype` |
| **header**      | optional | String, hyperscript or component | | Header row |
| **title**       | optional | String |  | Header title; if omitted, no header will be shown |
| **body**        | optional | String, hyperscript or component |  | Body content; if omitted, no body will be shown |
| **menu**        | optional | [Menu](menu.md) options object |  | Pass a menu to use the dialog as enhanced (higher) menu |
| **footer**       | optional | String, hyperscript or component | | Footer row |
| **footerButtons** | optional | String, hyperscript or component | | Footer buttons to show in the footer row |
| **panes**       | optional | Array of type `DialogPane` | | Used internally |
| **modal**       | optional | Boolean | false | Set to true to create a modal dialog; tapping the backdrop or pressing ESCAPE will not close the dialog |
| **fullScreen** | optional | Boolean | false | Set to true to make the dialog full screen; tapping the backdrop or pressing ESCAPE will not close the dialog; should be done for mobile screens only; `title` and `footer` will be ignored; pass a [Toolbar](toolbar.md) to `body` (see "Usage" for an example) |
| **updateContentOnScroll** | optional | Boolean | false | Set to true to "unfreeze" dialog contents during scrolling; for performance this is set to false by default |

### Dialog appearance options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **z** | optional | Number 0-5 | 3 | Depth of the shadow |
| **backdrop** | optional | Boolean | false | Set to `true` to show a backdrop background color |
| **borders** | optional | String | "overflow" | Options: "always", "never", "overflow" (when the body overflows the content area); a top border is only shown when a header is present; a bottom border is only shown when a footer is present |
| **fullBleed** | optional | Boolean | false | Set to `true` to remove padding from the body element |

### Transition options

| **Parameter**    |  **Required** | **Type** | **Default** | **Description** |
| ---------------- | -------------- | -------- | ----------- | --------------- |
| **transition**   | optional | String: "both", "show", "hide", "none" | "both" | Sets when a transition is used |
| **transitions**  | optional | Object | Module `src/transitions.js` | Object with functions for keys `show` and `hide`; see "Usage" for an example |
| **showDuration** | optional | Number | .150 | The show transition duration in seconds |
| **hideDuration** | optional | Number | .150 | The hide transition duration in seconds |
| **showDelay**    | optional | Number | 0 | The show delay duration in seconds |
| **hideDelay**    | optional | Number | 0 | The hide delay duration in seconds; no delay is used when the dialog is dismissed, for instance by tapping outside of the dialog (when not a modal) |
| **didShow**      | optional | Function |  | Callback function that is called when the show transition is done; receives param `id` |
| **didHide**      | optional | Function |  | Callback function that is called when the hide transition is done; receives param `id` |

### Spawn options

| **Parameter**    |  **Required** | **Type** | **Default** | **Description** |
| ---------------- | -------------- | -------- | ----------- | --------------- |
| **spawn**        | optional | String | "default_dialog" | Dialog spawner id |
| **id**           | optional | String | "default_dialog" | Dialog instance id |

### DialogPane options

| **Parameter**    |  **Required** | **Type** | **Default** | **Description** |
| ---------------- | -------------- | -------- | ----------- | --------------- |
| **header**       | optional | String, hyperscript or component | | Header row |
| **title**        | optional | String                           |  | Header title |
| **body**         | optional | String, hyperscript or component | | Body section |
| **footer**       | optional | String, hyperscript or component | | Footer row |
| **footerButtons** | optional | String, hyperscript or component | | Footer buttons to show in the footer row |


## Composition

Dialog is composed from:

* Multi (`polythene-core`)
* [Shadow](shadow.md)
* DialogPane


## CSS classes

See: `polythene-core-dialog/src/classes.js`


