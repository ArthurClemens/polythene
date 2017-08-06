_This is documentation for Polythene 0.3. A newer version of Polythene - compatible with Mithril 1.x - is available at https://github.com/ArthurClemens/polythene_


# Search

Search field with optional icons.


## Usage

~~~javascript
import m from 'mithril';
import { Search } from 'polythene';

m(Search, {
    textfield: {
        label: 'Search'
    }
});
~~~

This creates a search field without any icons, with label 'Search', and is little more than a [TextField](textfield.md).


## Display type

The search box can be "inset" or "full width".

An inset search box is presented in an area/box/tile with some surrounding space.

A full width search box is a little higher and visually corresponds to a toolbar, and in fact can be displayed in a toolbar.

~~~javascript
m(Search, {
    type: 'fullwidth',
    textfield: {
        label: 'Search'
    }
});
~~~


### Icons

The search component does not include any icons by itself - that is the responsibility of your application.

To add icons to the search field, we first need to look at the possible states:

* `none` - no interaction, no input
* `focus` - input element has focus, no input
* `focus and dirty` - input element has focus, text has been entered
* `dirty` - input element has no longer focus, entered text is visible

Secondly, buttons may be placed `before` of `after` the input field.

We'll create a search field with icons for the following states:

* `none` - left: search
* `focus` - left: search
* `focus and dirty` - left: back, right: clear
* `dirty` - left: back

~~~javascript
import { IconButton } from 'polythene';

import iconSearch from 'mmsvg/google/msvg/action/search';
import iconBack from 'mmsvg/google/msvg/navigation/arrow-back';
import iconClear from 'mmsvg/google/msvg/content/clear';

const btnSearch = m(IconButton, {
    icon: {
        msvg: iconSearch
    }
});
const btnDismiss = m(IconButton, {
    icon: {
        msvg: iconBack
    }
});
const btnClear = m(IconButton, {
    icon: {
        msvg: iconClear
    }
});

m(Search, {
    textfield: {
        label: 'Search'
    },
    buttons: {
        none: {
            before: btnSearch
        },
        focus: {
            before: btnSearch
        },
        focus_dirty: {
            before: btnDismiss,
            after: btnClear
        },
        dirty: {
            before: btnDismiss
        }
    },
});
~~~

### Logic: storing and clearing the value

To add logic to the search field, we will add a controller to store the entered search query.

~~~javascript
const module = {};
module.controller = () => {
    return {
        query: m.prop()
    };
};
~~~

We will store the query in our controller, and set the text field's input "from the outside". For this we will add the text field callback functions `value` and `getState`:

* `value()` - sets the text field input
* `getState(state)` - receives updates on changes and events, and we will store the state's value property

~~~javascript
textfield: {
    label: 'Search',
    value: () => (ctrl.query() ? ctrl.query().value : ''),
    getState: ctrl.query
}
~~~

To clear the field we add an onclick event. To make sure that the field state is correctly reflected after clearing, we add a redraw.

~~~javascript
const clearBtn = (ctrl) => (
    m(IconButton, {
        icon: {
            msvg: iconClear
        },
        events: {
            onclick: () => (
                ctrl.query().value = '',
                m.redraw(),
                ctrl.query().el.focus()
            )
        }
    })
);
~~~

Let's also add a microphone icon and a shadow around the box. The full code:

~~~javascript
import m from 'mithril';
import { Search, Shadow, IconButton } from 'polythene';

import iconSearch from 'mmsvg/google/msvg/action/search';
import iconBack from 'mmsvg/google/msvg/navigation/arrow-back';
import iconClear from 'mmsvg/google/msvg/content/clear';
import iconMic from 'mmsvg/google/msvg/av/mic';

const btnSearch = m(IconButton, {
    icon: {
        msvg: iconSearch
    }
});
const btnDismiss = m(IconButton, {
    icon: {
        msvg: iconBack
    }
});

const clearBtn = (ctrl) => (
    m(IconButton, {
        icon: {
            msvg: iconClear
        },
        events: {
            onclick: () => (
                ctrl.query().value = '',
                m.redraw(),
                ctrl.query().el.focus()
            )
        }
    })
);

const module = {};
module.controller = () => {
    return {
        query: m.prop()
    };
};
module.view = (ctrl) => {
    return m('.page', [
        m(Search, {
            textfield: {
                label: 'Search',
                value: () => (ctrl.query() ? ctrl.query().value : ''),
                getState: ctrl.query
            },
            buttons: {
                none: {
                    before: btnSearch
                },
                focus: {
                    before: btnSearch
                },
                focus_dirty: {
                    before: btnDismiss,
                    after: clearBtn(ctrl)
                },
                dirty: {
                    before: btnDismiss
                }
            },
            before: m(Shadow)
        })
    ]);
};
~~~


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag for the checkbox container |
| **class** | optional | String |  | Extra CSS class appended to 'pe-control--checkbox' |
| **id** | optional | String | | HTML element id for the checkbox container |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### Search specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **textfield** | required | Options object for [TextField](textfield.md) | | Options for the text field, for instance to specify the label |
| **type** | optional | String: 'inset' or 'fullwidth' | 'inset' | A fullwidth search box is visually extended to the sides (with a height of 56px); inset search box has side (page) padding and is less tall (48px) |


### Search appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **buttons** | optional | Object | | The Object needs to have (optional) attributes `none`, `focus`, `focus_dirty` and `dirty`, each with (optional) attributes `before` and `after`; pass a Mithril element (or Array) to each |


## Configuration

To set a different height, it is easiest to create a "subclass" from search; more information in [Theme](theming.md).

For instance:

~~~javascript
import 'polythene/common/object.assign';

export default {
    search: (config) => {
        const topbarSearchCfg = Object.assign({}, config, {
            fullwidth_height: 50
        });
        return [
            {'.my-search--topbar': topbarSearchCfg}
        ];
    }
};
~~~

Note that default icon buttons are 48px high, so use smaller icons when the top bar needs to be even smaller. An icon button with icon of type 'small' is 40px high.


## Inheritance/composition

The search field is composed with [TextField](textfield.md) with focus border removed.


