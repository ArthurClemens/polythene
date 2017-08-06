_This is documentation for Polythene 0.3. A newer version of Polythene - compatible with Mithril 1.x - is available at https://github.com/ArthurClemens/polythene_


# Dialog

Displays a dialog. Stacked dialogs are possible.

## Usage

Other than most other components, `dialog` is invoked through function calls `show` and `hide`.

Because a dialog should float on top of everything else, outside of the context of the caller, it can be considered a global component. It needs a place in the root view so that it is not obstructed by other components:

~~~javascript
import m from 'mithril';
import { Dialog } from 'polythene';

const app = {};
app.view = (ctrl, opts) => {
    return [
        // app contents
        m(Dialog)
    ];
};
~~~

The dialog component itself does not accept any options. Instead, you pass options when calling `show` - allowing to create custom dialogs from anywhere in the app.

~~~javascript
Dialog.show(options, id);
Dialog.hide(id);
~~~

`options` can be a regular options object:

~~~javascript
const options = {
    body: 'some text'
};

Dialog.show(options);
~~~

This will work in most scenarios. In case the dialog contents needs to change when a state changes (for instance after user interaction, or after reading in translations), you should pass a function instead.
`optionsFn` is a function that returns an options object:

~~~javascript
const optionsFn = () => {
    return {
        body: 'some text'
    };
};

Dialog.show(optionsFn);
~~~

Using a function ensures that the options are read afresh with the new state.


### Examples

~~~javascript
import m from 'mithril';
import { Dialog, Button } from 'polythene';

const footerButtons = [
    m(Button, {
        label: 'Cancel'
    }),
    m(Button, {
        label: 'Discard'
    })
];

const dialogOptions = {
    body: 'Discard draft?',
    footer: footerButtons
});

Dialog.show(dialogOptions);
~~~

Create a modal dialog with `modal` and `backdrop`:

~~~javascript
const dialogOptions = {
    body: 'Discard draft?',
    footer: footerButtons,
    modal: true,
    backdrop: true
};
~~~


### Hiding

A dialog is closed by tapping outside of the dialog (unless the dialog is a modal), or by pressing ESCAPE.

The dialog can be closed programmatically with `Dialog.hide()`.


### Function calls

Functions `show` and `hide` return a Promise.

#### show

~~~javascript
Dialog.show(options, id);
~~~

~~~javascript
Dialog.show(options, id).then((id) => (console.log('dialog shown', id)));
~~~


Calling `show` a second time with the same id will redraw the dialog with new options:

~~~javascript
Dialog.show({
    title: 'Log in'
}, 'login');

// sometime later:

Dialog.show({
    title: 'Log in again'
}, 'login');
~~~


| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **options** | required | Options object or Function that returns an options object | | See options table below |
| **id** | optional | String or undefined | 'default_dialog' | To distinguish dialogs when using multiple dialogs at the same time |


Sometimes you may need a dialog to be appear without a fade in - for instance when a dialog is shown at a route. To only use the transition on hide:

~~~javascript
import logonDialog from './dialogs/logon'; // logonDialog is an options object

Dialog.show(logonDialog, void 0, {
    transition: 'hide'
});
~~~

#### hide

~~~javascript
Dialog.hide(id);
~~~

~~~javascript
Dialog.hide(id).then((id) => (console.log('dialog hidden', id)));
~~~

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **id** | optional | String or undefined | 'default_dialog' | To distinguish dialogs when using multiple dialogs at the same time |


### Transitions

Transition properties are set in CSS, the duration is passed as component option.

A displayed dialog contains the class `pe-dialog--visible`.

CSS:

~~~css
.pe-dialog {
    transition-timing-function: ease-out;
    transition-property: opacity;
    opacity: 0;
}
.pe-dialog--visible {
    opacity: 1;
}
~~~

Transition settings in the options:

~~~javascript
const dialogOptions = {
	showDuration: .1,
	hideDuration: .3
};
~~~

### Callbacks

Two optional callbacks are used after the transition: `didShow` and `didHide`. Useful when a route change is needed after the dialog is displayed or hidden:

~~~javascript
const dialogOptions = {
    didHide: (id) => {
        m.route('/');
    }
};
~~~

### Fullscreen dialogs

A fullscreen dialog uses [HeaderPanel](header-panel) to implement its own header (it ignores `title` and `footer`.md). Pass a header panel component in the body:

~~~javascript
const fullscreenDialogOptions = {
    class: 'demo-dialog',
    body: m(HeaderPanel, {
        class: 'pe-dark-theme',
        fixed: true,
        header: {
            toolbar: {
                content: ...
            }
        },
        content: ...
    }),
    fullscreen: true
};
~~~

### Multiple dialogs

It is possible to create a dialog on top of a dialog. This is not so bad as it sounds, when you consider that a fullscreen dialog just looks like another page, and showing a notice-like second dialog on top is quite natural.

Dialogs are stacked by using `dialog.show` multiple times:

~~~javascript
Dialog.show(myFullscreenDialogOptions); // no id passed, so this is the default
Dialog.show(myConfirmationDialogOptions, 'confirmation'); // the id makes this distinguishable from the default dialog
~~~


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'form' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-dialog' |
| **id** | optional | String | | HTML element id |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### Dialog specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **formOptions** | optional | Options Object | | Form attribute options such as `type` or `enctype` |
| **title** | optional | String |  | Header title; if omitted, no header will be shown |
| **body** | optional | Mithril element |  | Body content; if omitted, no body will be shown |
| **menu** | optional | [Menu](menu) options object |  | Pass a menu to use the dialog as enhanced (higher.md) menu |
| **footer** | optional | Mithril element |  | Footer actions, usually an array of buttons |
| **modal** | optional | Boolean | false | Set to true to create a modal dialog; tapping the backdrop or pressing ESCAPE will not close the dialog |
| **fullscreen** | optional | Boolean | false | Set to true to make the dialog fullscreen; should be done for mobile screens only; `title` and `footer` will be ignored; pass a [HeaderPanel](header-panel.md) to `body` |
| **updateContentOnScroll** | Boolean | false | Set to true to "unfreeze" dialog contents during scrolling; for performance this is set to false by default; content *will* be updated when scrolling |


### Dialog appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **z** | optional | Number 0-5 | 3 | Depth of the shadow |
| **backdrop** | optional | Boolean | false | Set to `true` to show a backdrop background color |
| **borders** | optional | Boolean | false | Set to `true` to show header and footer borders; by default borders are only shown with overflow content |

### Transition options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **transition** | optional | String: 'both', 'show', 'hide', 'none' | 'both' | Sets when a transition is used |
| **showDuration** | optional | Number | .150 | The show transition duration in seconds |
| **hideDuration** | optional | Number | .150 | The hide transition duration in seconds |
| **showDelay** | optional | Number | 0 | The show delay duration in seconds |
| **hideDelay** | optional | Number | 0 | The hide delay duration in seconds; no delay is used when the dialog is dismissed, for instance by tapping outside of the dialog (when not a modal) |
| **didShow** | optional | Function |  | Callback function that is called when the show transition is done; receives param `id` |
| **didHide** | optional | Function |  | Callback function that is called when the hide transition is done; receives param `id` |
