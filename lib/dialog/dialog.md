# Dialog

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-Examples/index.html#/dialog">Demo</a>

Displays a dialog.


## Usage

	import dialog from 'polythene/dialog/dialog';
	import button from 'polythene/button/button';

	const footerButtons = [
	    m.component(button, {
	        label: 'Cancel'
	    }),
	    m.component(button, {
	        label: 'Discard'
	    })
	];

	const myDialog = m.component(dialog, {
        body: 'Discard draft?',
        footer: footerButtons
    });

Create a modal dialog with `modal` and (optional) `backdrop`:

	const myDialog = m.component(dialog, {
        body: 'Discard draft?',
        footer: footerButtons,
		modal: true,
		backdrop: true
    });


### Managing app dialogs

A dialog should float on top of everything else. Therefore you cannot just call a dialog from any component - there is a chance that some other element ends up higher (and having a dialog peep out of the top navigation definitely does not look right). The best place to call the dialog is from the app root / the main view.

Let's say you have a component called `app`. The dialog should be placed at the same level as the content:

	app.view = (ctrl) => {
        return [
        	myDialog,
        	content
        ];
	};

To not be limited to one specific component, we need to use a variable that other components can access:

	app.view = (ctrl) => {
        return [
        	window.dialog ? window.dialog : null,
        	content
        ];
	};

Now we can have a button somewhere deeply nested in the app:

	m.component(button, {
        label: 'Open dialog',
        events: {
			onclick: () => {
				window.dialog = modalDialog;
			}
        }
    });

	const modalDialog = {
        view: () => {
	        return m.component(dialog, {
	            body: 'Discard draft?',
	            footer: footerButtons,
	            modal: true,
	            backdrop: true
	        });
	    }
    };

We have wrapped the dialog in a component (modalDialog) so that the dialog will be updated when Mithril redraws.

Note that we can use any global variable instead of `window.dialog`.



### Hiding dialogs

The easiest way to hide the dialog using the method above is by nullifying the global variable:

	window.dialog = null;

But this causes the dialog to disappear abruptly. A quick fade out gives a much better result (and is consistent with a tap on the backdrop). To do that we need to use a 2-step approach.

#### Step 1: shouldHide

We use parameter function `shouldHide` that returns a boolean. If this returns `true`, the default dialog hide function is invoked (that uses a fade out):

	const modalDialog = {
        view: () => {
	        return m.component(dialog, {
	            body: 'Discard draft?',
	            footer: footerButtons,
	            modal: true,
	            backdrop: true,
	            shouldHide: () => {
	                return window.dialog.hide;
	            }
	        });
	    }
    };

Here we use a second global variable (again this can be any variable as long as it is accessible to both the modal component caller and the closing event emitter). The Cancel button comes first to mind:

	const cancelOkButtons = [
	    m.component(button, {
	        label: 'Cancel',
	        events: {
	            onclick: () => {
	                window.dialog.hide = true;
	            }
	        }
	    }),
	    m.component(button, {
	        label: 'Discard'
	    })
	];

So on Cancel:

* The shared variable (here `window.dialog.hide`) is set to true
* `m.redraw` will be called by default
* The dialog component is rendered again, passing the result of `shouldHide` (now `true`)
* Dialog's hide function is called, fading out the dialog DOM element


#### Step 2: didHide

After fading out, param callback function `didHide` is called. Now we can nullify the global dialog variable:

	const modalDialog = {
        view: () => {
	        return m.component(dialog, {
	            ...
	            shouldHide: () => {
	                return window.dialog.hide;
	            },
	            didHide: () => {
	                window.dialog = null;
	                m.redraw(); // remove dialog from app.view
	            }
	        });
	    }
    };



## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'form' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'dialog' |
| **formOptions** | optional | Options Object | | Form attribute options such as `type` or `enctype` |
| **title** | optional | String |  | Header title; if omitted, no header will be shown |
| **body** | optional | Mithril template or String |  | Body content; if omitted, no body will be shown |
| **footer** | optional | Mithril template |  | Footer actions, usually an array of buttons |
| **z** | optional | Number 0-5 | 3 | Depth of the shadow |
| **modal** | optional | Boolean | false | Set to true to create a modal dialog; tapping the backdrop will not close the dialog |
| **backdrop** | optional | Boolean | false | Set to true show a backdrop background color |
| **shouldHide** | optional | Function |  | Function that returns a Boolean; see: "Hiding dialogs" above  |
| **didHide** | optional | Function |  | Callback function that is called when the fade out animation is done; see: "Hiding dialogs" above  |
| **updateContentOnScroll** | Boolean | false | Set to true to "unfreeze" dialog contents during scrolling; for performance this is set to false by default |


## Default generated HTML

Without buttons:

	<form class="dialog layout center-center" style="">
	    <div class="dialog-content layout vertical">
	        <div class="fit shadow">
	            <div class="fit animated shadow-bottom shadow-bottom-z-3"></div>
	            <div class="fit animated shadow-top shadow-top-z-3"></div>
	        </div>
	        <div class="dialog-body">Body text</div>
	    </div>
	</form>

With an array of footer buttons:

	<form class="dialog layout center-center " style="">
	    <div class="dialog-content layout vertical">
	        <div class="fit shadow">
	            <div class="fit animated shadow-bottom shadow-bottom-z-3"></div>
	            <div class="fit animated shadow-top shadow-top-z-3"></div>
	        </div>
	        <div class="dialog-body">Body text</div>
	        <div class="dialog-footer layout end">
	            <div class="flex"></div>
	            <div class="actions layout horizontal end">
	                <a class="button">
	                    <div class="content">
	                        <div class="label">Cancel</div>
	                        <div class="fit ripple constrained ">
	                            <div class="ripple-mask">
	                                <div class="ripple-waves"></div>
	                            </div>
	                        </div>
	                        <div class="wash fit"></div>
	                    </div>
	                </a>
	                <a class="button">
	                    <div class="content">
	                        <div class="label">Discard</div>
	                        <div class="fit ripple constrained">
	                            <div class="ripple-mask">
	                                <div class="ripple-waves"></div>
	                            </div>
	                        </div>
	                        <div class="wash fit"></div>
	                    </div>
	                </a>
	            </div>
	        </div>
	    </div>
	</form>


## TODO

* URL based (use back to discard)
* Simple dialog: list
* Fullscreen dialog (mobile only)
* Stacked full-width buttons
