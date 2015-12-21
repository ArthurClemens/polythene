# Snackbar

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/snackbar">Demo</a>

Shows a temporary message. Messages can be queued.

## Usage

Other than most other components, `snackbar` is invoked through function calls `show` and `hide`.

It is a global global component - only one snackbar container may appear on the screen. It needs a place in the root view so that it is not obstructed by other components:

~~~javascript
import snackbar from 'polythene/snackbar/snackbar';

const app = {};
app.view = (ctrl, opts) => {
    return [
        m.component(dialog),
        m.component(snackbar),
        // rest of app
    ];
};
~~~

This snackbar component is then called using:

~~~javascript
snackbar.show(options);
snackbar.hide();
snackbar.pause();
snackbar.unpause();
~~~

Any time `show` is called to show a message, this message will be queued. Subsequent messages will wait until the displayed message is hidden.


### Examples

~~~javascript
import snackbar from 'polythene/snackbar/snackbar';

snackbar.show({
    title: 'This is the message',
    container: 'bottom_container'
});

snackbar.show({
    title: 'This is a second message',
    container: 'bottom_container'
});
~~~

Add an action:

~~~javascript
snackbar.show({
    title: 'This is the message',
    action: m.component(button, {
        label: 'Undo',
        events: {
            onclick: () => {
                // do something
            }
        }
    }),
    container: 'bottom_container'
})
~~~

With a little more work, we can make the snackbar pause when a dialog is shown. In this example we want to pause the snackbar when the dialog is on screen, then unpause on cancel, and hide on OK:

~~~javascript
import dialog from 'polythene/dialog/dialog';

const actionDialog = () => {
    return {
        class: 'snackbar-action-dialog',
        body: 'You pressed a snackbar action',
        footer: [
            m.component(button, {
                label: 'Cancel',
                events: {
                    onclick: () => {
                        dialog.hide();
                        snackbar.unpause();
                    }
                }
            }),
            m.component(button, {
                label: 'OK',
                events: {
                    onclick: () => {
                        dialog.hide();
                        snackbar.hide();
                    }
                }
            })
        ],
        backdrop: true,
        modal: true
    };
};

snackbar.show({
    title: 'This is the message',
    action: m.component(button, {
        label: 'Undo',
        events: {
            onclick: () => {
                snackbar.pause();
                dialog.show(actionDialog());
            }
        }
    }),
    container: 'bottom_container'
})
~~~

### Function calls

#### show

~~~javascript
snackbar.show(options);
~~~

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **options** | required | Options object or Function that returns an options object | | See options table below |

#### hide

Hides the current message.

~~~javascript
snackbar.hide();
~~~

#### pause

Pauses the timer of the current message.

~~~javascript
snackbar.pause();
~~~

#### unpause

Unpauses the timer of the current message.

~~~javascript
snackbar.unpause();
~~~


### Transitions

Show and hide transitions are defined in Polythene-theme, module `polythene-theme/snackbar/snackbar-transitions`. This module can be overridden to implement custom functions (see Theming).


### Callbacks

Two optional callbacks are used after the transition: `didShow` and `didHide` (see also [dialog](#dialog)).


## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div.layout.center' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'dialog' |
| **id** | optional | String | | HTML element id |
| **container** | required | String | | Id of container HTML element (does not need to be the direct parent); for instance if a FAB button needs to move together with the snackbar, both the FAB and snackbar will be placed in the same container; transitions will then move both simultaneously |
| **title** | required | String | | Text |
| **action** | optional | Mithril template | | Will likely contain a button |
| **layout** | optional | String: 'horizontal' or 'vertical' | 'horizontal' | Sets the arrangement of the action; by default the action is placed right to the title, but longer action labels better fit below the title |
| **timeout** | optional | Number (milliseconds) | 4000 | How long the snackbar should be displayed before it hides automatically; use `0` to not hide automatically |
| **dismissSelector** | optional | String | | Not used yet |


### Transition options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **transition** | optional | String: 'both', 'show', 'hide', 'none' | 'both' | Sets when a transition is used |
| **showDuration** | optional | Number | 150 | The show transition duration in milliseconds |
| **hideDuration** | optional | Number | 150 | The hide transition duration in milliseconds |
| **showDelay** | optional | Number | 0 | The show delay duration in milliseconds |
| **hideDelay** | optional | Number | 0 | The hide delay duration in milliseconds |



## TODO

* Disappear after user interaction elsewhere
* Swipe off screen