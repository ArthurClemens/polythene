# Dialog

Displays a single dialog, or a stack of dialogs.



## Usage

Other than most other components, `dialog` is invoked through function calls `show` and `hide`.

The dialog component itself does not accept any appearance options. Instead, you pass options when calling `show` - allowing to show custom dialogs from anywhere in the app.


### Dialog spawner

Dialogs will be spawned from `m(dialog)`. To show dialogs, use `dialog.show()` - more on that later.

Because a dialog should float on top of everything else, outside of the context of the caller, it can be considered a global component. It is best placed in the root view, so that it is not obstructed by other components:

~~~javascript
import m from "mithril";
import dialog from "polythene-dialog";

const app = {
  view: () => [
    // ... app content
    m(dialog)
  ]
};
~~~

Side notes:

* Writing the dialog at the bottom makes for less surprises. Mobile Safari sometimes has surprises with `position: fixed`, so placing it here will most likely work as intended.
* The order of elements in the root view may differ - CSS attribute `z-index` is set higher than other content.


### Multiple dialog spawners

Usually you'll use only one location for dialogs - on top of all content and centered on screen - but it is possible to have dialog spawned from a different location.

If you are using multiple spawners, differentiate them with option `spawn`:

~~~javascript
m(dialog, { spawn: "special" })
~~~

Calls to show the message will then also need to pass that spawn:

~~~javascript
dialog.show(dialogOptions, { spawn: "special" });
~~~


### Showing and hiding dialogs

Dialog functions:

~~~javascript
dialog.show(options);
dialog.hide(options);
~~~

#### show

Shows a new dialog.

`dialog.show(dialogOptions, spawnOptions)`

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **dialogOptions** | required | Options object or Function that returns an options object | | See options table below |
| **spawnOptions** | optional | Options object | | Pass `id` if you are using multiple simultaneous dialogs; pass `spawn` when using multiple spawners and `spawn` is also set at the spawner |
| **Returns** |||| Promise |

Examples:

~~~javascript
const dialogOptions = {
  body: "some text"
};

dialog.show(dialogOptions);
dialog.show(dialogOptions, { id: "confirm" });
dialog.show(dialogOptions, { spawn: "special" });
dialog.show(dialogOptions).then(() => console.log("dialog shown"));
~~~

Calling `show` a second time with the same id will redraw the dialog with new options:

~~~javascript
dialog.show(
  {
    title: "Log in"
  },
  {
    id: "login"
  }
);

// sometime later:

dialog.show(
  {
    title: "Log in again"
  },
  {
    id: "login"
  }
);
~~~


In case the dialog contents needs to change when a state changes (for instance after user interaction, or after reading in translations), you should pass a function instead.

`optionsFn` is a function that returns an options object:

~~~javascript
const optionsFn = () => ({
  body: "some text"
});

dialog.show(optionsFn);
~~~

Using a function ensures that the options are read afresh with the new state.


#### hide

Hides the current dialog.

`dialog.hide(spawnOptions)`

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **spawnOptions** | optional | Options object | | Pass `id` if you are using multiple simultaneous dialogs; pass `spawn` when using multiple spawners and `spawn` is also set at the spawner |
| **Returns** |||| Promise |

Examples:

~~~javascript
dialog.hide();
dialog.hide({ id: "confirm" })
dialog.hide({ spawn: "special" })
dialog.hide().then(() => console.log("dialog hidden"));
~~~


### Callbacks

Two optional callback options can be used after the transition: `didShow` and `didHide`. Useful when a route change is needed after the dialog is displayed or hidden:

~~~javascript
const dialogOptions = {
  didHide: id => m.route.set("/")
};
~~~


### Example with `modal` and `backdrop`

~~~javascript
import m from "mithril";
import dialog from "polythene-dialog";
import button from "polythene-mithril-button";

const footerButtons = [
  m(button, {
    label: "Cancel"
  }),
  m(button, {
    label: "Discard"
  })
];

const dialogOptions = {
  body: "Discard draft?",
  modal: true,
  backdrop: true,
  footer: footerButtons
});

dialog.show(dialogOptions);
~~~



## Appearance

### Styling

Below are examples how to change the dialog appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](../polythene-theme).

#### Themed component

~~~javascript
dialog.theme(".blue-dialog", {
  color_light_content_background: "#2196F3",
  color_light_body_text: "#fff",
  border_radius: 5
});

dialog.show({
  class: "blue-dialog",
  // ... other options
});
~~~

#### CSS

Change CSS using the CSS Classes at the bottom of this page.

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
dialog.show({
  style: {
    background: "#fff59d",
    padding: "1.5rem"
  },
  // ... other options
});
~~~

#### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


### Transitions

The transitions for showing and hiding of dialogs can be customized with transition options - see "Transition options" in the Options table below. For example:

~~~javascript
const messageOptions = {
  showDelay:    .1,
  hideDelay:    .1,
  showDuration: .1,
  hideDuration: .3
};
~~~

#### Custom transition

Use option `transitions` to define custom transition behaviour. See `src/theme/transitions.js` for the default behavior.

To create a fade in while moving up:

~~~javascript
const dialogOptions = {
  transitions: {
    show: el => ({
      el,
      showDuration: .5,
      beforeShow:   () => (el.style.opacity = 0, el.style.transform = "translate3d(0, 20px, 0)"),
      show:         () => (el.style.opacity = 1, el.style.transform = "translate3d(0, 0px,  0)")
    }),
    hide: el => ({
      el,
      hideDuration: .5,
      hide:         () => el.style.opacity = 0
    }),
  // ... other options
}
~~~


### Fullscreen dialogs

A fullscreen dialog uses [Toolbar](../polythene-toolbar) to implement its own header (options `title` and `footer` are not used):

~~~javascript
import m from "mithril";
import dialog from "polythene-dialog";
import button from "polythene-mithril-button";
import iconButton from "polythene-icon-button";
import toolbar from "polythene-toolbar";
import iconClose from "mmsvg/google/msvg/navigation/close";

cconst toolbarRow = title => [
  m(iconButton, {
    icon: {
      msvg: iconClose
    },
    events: {
      onclick: () => dialog.hide()
    }
  }),
  m("span.flex", title),
  m(button, {
    label: "Save",
    events: {
      onclick: () => dialog.hide()
    }
  })
];

const fullscreenPane = {
  view: () => [
    m(toolbar, {
      content: toolbarRow("New event")
    }),
    // content
    m("div", {
      style: {
        padding: "21px"
      }
    }, m.trust(content))
  ]
};
~~~



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String   | "form"      | HTML element tag |
| **class**     | optional       | String   |             | Extra CSS class appended to `pe-dialog` |
| **style**     | optional       | Object   |             | For setting simple style attributes; will be applied to `pe-dialog__content` |
| **id**        | optional       | String   |             | HTML element id |
| **content**   | optional       | Mithril element | | Alternative content; replaces `body` |
| **before**    | optional       | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### Dialog specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **formOptions** | optional | Options Object | | Form attribute options such as `type` or `enctype` |
| **title** | optional | String |  | Header title; if omitted, no header will be shown |
| **body** | optional | Mithril element |  | Body content; if omitted, no body will be shown |
| **menu** | optional | [Menu](../polythene-menu) options object |  | Pass a menu to use the dialog as enhanced (higher) menu |
| **footer** | optional | Mithril element |  | Footer actions, usually an array of buttons |
| **modal** | optional | Boolean | false | Set to true to create a modal dialog; tapping the backdrop or pressing ESCAPE will not close the dialog |
| **fullscreen** | optional | Boolean | false | Set to true to make the dialog fullscreen; tapping the backdrop or pressing ESCAPE will not close the dialog; should be done for mobile screens only; `title` and `footer` will be ignored; pass a [header panel](../polythene-header-panel) to `body` |
| **updateContentOnScroll** | optional | Boolean | false | Set to true to "unfreeze" dialog contents during scrolling; for performance this is set to false by default |

### Dialog appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **z** | optional | Number 0-5 | 3 | Depth of the shadow |
| **backdrop** | optional | Boolean | false | Set to `true` to show a backdrop background color |
| **borders** | optional | Boolean | false | Set to `true` to show header and footer borders; by default borders are only shown with overflow content |

### Transition options

| **Parameter**    |  **Mandatory** | **Type** | **Default** | **Description** |
| ---------------- | -------------- | -------- | ----------- | --------------- |
| **transition**   | optional | String: "both", "show", "hide", "none" | "both" | Sets when a transition is used |
| **transitions**  | optional | Object | Module `src/theme/transitions.js` | Object with keys `show` and `hide` |
| **showDuration** | optional | Number | .150 | The show transition duration in seconds |
| **hideDuration** | optional | Number | .150 | The hide transition duration in seconds |
| **showDelay**    | optional | Number | 0 | The show delay duration in seconds |
| **hideDelay**    | optional | Number | 0 | The hide delay duration in seconds; no delay is used when the dialog is dismissed, for instance by tapping outside of the dialog (when not a modal) |
| **didShow**      | optional | Function |  | Callback function that is called when the show transition is done; receives param `id` |
| **didHide**      | optional | Function |  | Callback function that is called when the hide transition is done; receives param `id` |

### Spawn options

| **Parameter**    |  **Mandatory** | **Type** | **Default** | **Description** |
| ---------------- | -------------- | -------- | ----------- | --------------- |
| **spawn**        | optional | String | "default_dialog" | Dialog spawner id |
| **id**           | optional | String | "default_dialog" | Dialog instance id |



## Composition

Dialog is composed from:

* [Multiple](../polythene-core-essentials)
* [Shadow](../polythene-shadow)



## CSS classes

See: `src/classes.js`



