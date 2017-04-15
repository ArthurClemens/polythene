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


### Search box type

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


### Icons and buttons

The search component does not include any icons by itself - providing those is the responsibility of your application. 

To choose which icons to show, we first need to look at the possible states:

* `none` - no interaction, no input
* `focus` - input element has focus, no input
* `focus and dirty` - input element has focus, text has been entered
* `dirty` - input element has no longer focus, entered text is visible

Secondly, buttons may be placed `before` of `after` the input field.

The states are set in the `buttons` option:

~~~javascript
buttons: {
  none: {
    before: m(searchButton)
  },
  focus: {
    before: m(searchButton),
    after: m(clearButton)
  },
  focus_dirty: {
    before: m(backButton),
    after: m(clearButton)
  },
  dirty: {
    before: m(backButton)
  }
}
~~~

Not all button state need to be defined.



### Logic: storing and clearing the value

To add logic to the search field, we will wrap the search field in a component. We will store the textfield state in our component state, and set the text field input value programmatically. For this we will use the [text field callback functions](../polythene-textfield) `value` and `getState`:

* `value()` - sets the text field input
* `getState(state)` - receives updates on changes and events

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

Textfield attributes are passed with option `textfield`:

~~~javascript
textfield: {
  label: "Search",
  value: () => state.fieldState ? state.fieldState.value : "",
  getState: fieldState => state.fieldState = fieldState
}
~~~

To clear the field:

* pass the state by wrapping the component in a function call 
* add an `onclick` event to the clear button and to return the focus to the input field

The back button clears the field and removes the focus, setting the search field to the initial state. Remove the ripple (`ink: false`) to prevent a ripple after the click (it would seem like the returned search button received the click).

Complete example:

~~~javascript
import m from "mithril";
import search from "polythene-search";
import iconButton from "polythene-icon-button";
import shadow from "polythene-shadow";

import iconSearch from "mmsvg/google/msvg/action/search";
import iconBack from "mmsvg/google/msvg/navigation/arrow-back";
import iconClear from "mmsvg/google/msvg/content/clear";
import iconMic from "mmsvg/google/msvg/av/mic";

const searchButton = {
  view: () => 
    m(iconButton, {
      icon: { msvg: iconSearch },
      inactive: true
    })
};

const backButton = {
  view: ({attrs}) =>
    m(iconButton, {
      icon: { msvg: iconBack },
      ink: false,
      events: { onclick: attrs.leave }
    })
};

const clearButton = {
  view: ({attrs}) =>
    m(iconButton, {
      icon: { msvg: iconClear },
      ink: false,
      events: { onclick: attrs.clear }
    })
};

const micButton = {
  view: () =>
    m(iconButton, {
      icon: { msvg: iconMic },
      inactive: true
    })
};

const mySearchComponent = {
  oninit: ({state}) => {
    state.fieldState = {};
    state.clear = () => {
      state.fieldState.value = "";
      state.fieldState.el.focus();
      m.redraw();
    };
    state.leave = () => {
      state.fieldState.value = "";
      m.redraw();
    };
  },
  view: ({state, attrs}) =>
    m(search, {
      textfield: {
        label: "Search",
        value: () => state.fieldState ? state.fieldState.value : "",
        getState: fieldState => state.fieldState = fieldState
      },
      buttons: {
        none: {
          before: m(searchButton),
          after: m(micButton)
        },
        focus: {
          before: m(searchButton),
          after: m(micButton)
        },
        focus_dirty: {
          before: m(backButton, {leave: state.leave}),
          after: m(clearButton, {clear: state.clear})
        },
        dirty: {
          before: m(backButton, {leave: state.leave}),
          after: m(clearButton, {clear: state.clear})
        }
      },
      before: m(shadow)
    }
  )
};
~~~



## Appearance

### Styling

Below are examples how to change the search component appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](../polythene-theme).

#### Themed component

~~~javascript
search.theme(".themed-search", {
  color_light_input_text: "#0D47A1",
  color_light_background: "#BBDEFB",
  color_dark_input_text:  "#eee",
  color_dark_background:  "#333"
});

m(search, {
  class: "themed-search",
  // ... other options
});
~~~

#### CSS

Change CSS using the CSS Classes at the bottom of this page.

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(search, {
  style: {
    background: "#BBDEFB"
  },
  // ... other options
});
~~~

#### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set



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
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-theme`); use "light" to locally inverse (sets class `pe-light-theme`) |

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
