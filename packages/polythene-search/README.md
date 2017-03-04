# Search

Search field with optional icons.


## Usage

~~~javascript
import m from "mithril";
import search from "polythene-search";

const mySearch = m(search, {
  textfield: {
    label: "Search"
  }
});
~~~

This creates a search field without any icons, with label "Search", and is little more than a [text field](../polythene-textfield). To embellish the search field with icon buttons - see below.


### Display type

The search box can be "inset" or "full width".

An inset search box is presented in an area / box / tile with some surrounding space.

A full width search box is a little higher and visually corresponds to a toolbar, and in fact can be displayed in a toolbar.

~~~javascript
const mySearch = m(search, {
  fullWidth: true,
  textfield: {
    label: "Search"
  }
});
~~~


### Icons

The search component does not include any icons by itself - that is the responsibility of your application.

To choose which icons to add, we first need to look at the possible states:

* `none` - no interaction, no input
* `focus` - input element has focus, no input
* `focus and dirty` - input element has focus, text has been entered
* `dirty` - input element has no longer focus, entered text is visible

Secondly, buttons may be placed `before` of `after` the input field.

The states are set in the `buttons` option. For instance to show a search button at state "none":

~~~javascript
none: {
  before: searchButton
}
~~~

or

~~~javascript
none: {
  before: () => createSearchButton(vnode)
}
~~~

Used in our search component:

~~~javascript
import iconButton from "polythene-icon-button";

import iconSearch from "mmsvg/google/msvg/action/search";
import iconBack from "mmsvg/google/msvg/navigation/arrow-back";
import iconClear from "mmsvg/google/msvg/content/clear";

const searchButton = m(iconButton, {
  icon: { msvg: iconSearch }
});
const backButton = m(iconButton, {
  icon: { msvg: iconBack }
});
const clearButton = m(iconButton, {
  icon: { msvg: iconClear }
});

const mySearch = m(search, {
  textfield: {
    label: "Search"
  },
  buttons: {
    none: {
      before: searchButton
    },
    focus: {
      before: searchButton,
      after: clearButton
    },
    focus_dirty: {
      before: backButton,
      after: clearButton
    },
    dirty: {
      before: backButton
    }
  }
});
~~~

Next we will add logic to those buttons.


### Logic: storing and clearing the value

To add logic to the search field, we will wrap the search field in a component to store its state:

~~~javascript
const component = {
  fieldState: undefined,
  view: () => {} // see below
};
~~~

We will store the query in our component state, and set the text field input "from the outside". For this we will use the [text field callback functions](../polythene-textfield) `value` and `getState`:

* `value()` - sets the text field input
* `getState(state)` - receives updates on changes and events, and we will store the state's value property

<!--
the return value of textfield's `getState` is a object:

~~~javascript
{
  focus,   // Boolean
  dirty,   // Boolean
  value,   // String
  el,      // HTMLElement
  invalid, // Boolean
  error    // String
}
~~~
-->

~~~javascript
const component = {
  fieldState: undefined,
  view: vnode => 
    m(search, {
      textfield: {
        label: "Search",
        value: () => vnode.state.fieldState ? vnode.state.fieldState.value : "",
        getState: fieldState => vnode.state.fieldState = fieldState
      },
      buttons: {
        //...
      }
    })
};
~~~

To clear the field we:

* pass the state by wrapping the component in a function call 
* add an `onclick` event to the clear button and to return the focus to the input field

~~~javascript
const clearButton = vnode => (
  m(iconButton, {
    icon: { msvg: iconClear },
    events: {
      onclick: () => (
        vnode.state.fieldState.value = "",
        vnode.state.fieldState.el.focus()
      )
    }
  })
);
~~~

The back button clears the field and removes the focus, setting the search field to the initial state. Remove the ripple (`ink: false`) to prevent a ripple after the click (it would seem like the returned search button received the click).

~~~javascript
const backButton = vnode => (
  m(iconButton, {
    icon: { msvg: iconBack },
    ink: false,
    events: {
      onclick: () => (
        vnode.state.fieldState.value = "",
        m.redraw()
      )
    }
  })
);
~~~

Finally, let's also add a microphone icon and a shadow around the box. The full code:

~~~javascript
import m from "mithril";
import search from "polythene-search";
import iconButton from "polythene-icon-button";
import shadow from "polythene-shadow";

import iconSearch from "mmsvg/google/msvg/action/search";
import iconBack from "mmsvg/google/msvg/navigation/arrow-back";
import iconClear from "mmsvg/google/msvg/content/clear";
import iconMic from "mmsvg/google/msvg/av/mic";

const searchButton = m(iconButton, {
  icon: { msvg: iconSearch }
});
const backButton = vnode => (
  m(iconButton, {
    icon: { msvg: iconBack },
    ink: false,
    events: {
      onclick: () => (
        vnode.state.fieldState.value = "",
        m.redraw()
      )
    }
  })
);
const clearButton = vnode => (
  m(iconButton, {
    icon: { msvg: iconClear },
    ink: false,
    events: {
      onclick: () => (
        vnode.state.fieldState.value = "",
        vnode.state.fieldState.el.focus(),
        m.redraw()
      )
    }
  })
);
const micButton = m(iconButton, {
  icon: { msvg: iconMic }
});

const component = {
  fieldState: undefined,
  view: vnode => 
    m(search, {
      textfield: {
        label: "Search",
        value: () => vnode.state.fieldState ? vnode.state.fieldState.value : "",
        getState: fieldState => vnode.state.fieldState = fieldState
      },
      buttons: {
        none: {
          before: searchButton,
          after: micButton
        },
        focus: {
          before: searchButton,
          after: micButton
        },
        focus_dirty: {
          before: backButton(vnode),
          after: clearButton(vnode)
        },
        dirty: {
          before: backButton(vnode),
          after: clearButton(vnode)
        }
      },
      before: m(shadow)
    })
};
~~~



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element** | optional | String | "div" | HTML element tag for the checkbox container |
| **class** | optional | String |  | Extra CSS class appended to `pe-search` |
| **style**     | optional       | Object   |             | For setting simple style attributes |
| **id** | optional | String | | HTML element id for the search field |
| **before**    | optional       | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **tabindex**  | optional       | Integer | 0 | Tab index |

### Search specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **textfield** | required | Options object for [text field](../polythene-textfield) | | Options for the text field, for instance to specify the label |
| **fullWidth** | optional | Boolean | false | A fullwidth search box is visually extended to the sides (with a height of 56px); inset search box has side (page) padding and is less tall (48px) |

### Search appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **buttons** | optional | Object | | The Object needs to have (optional) attributes `none`, `focus`, `focus_dirty` and `dirty`, each with (optional) attributes `before` and `after`; pass a Mithril element (or Array) to each |



## Composition

Search is composed from:

* [Textfield](../polythene-textfield)

Search usually contains:
* [Icon](../polythene-icon)
* [Shadow](../polythene-shadow)



## CSS classes

| **Element** | **Key**         | **Class** |
| ----------- | --------------- | --------------- |
| Component   | component       | `pe-search` |
| Content     | content         | `pe-search__content` |

| **State**   | **Key**         |  **Class** |
| ----------- | --------------- | --------------- |
| Inset       | searchInset     | `pe-search--inset` |
| Full width  | searchFullWidth | `pe-search--full-width` |



## Future

* History pane
* Search results pane
