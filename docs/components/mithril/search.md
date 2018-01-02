[Back to Polythene Search main page](../search.md)

# Search component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Options](#options)
- [Usage](#usage)
  - [Search box type](#search-box-type)
  - [Icons and buttons](#icons-and-buttons)
  - [Logic: storing and clearing the value](#logic-storing-and-clearing-the-value)
  - [Complete example](#complete-example)
  - [Result list](#result-list)
- [Appearance](#appearance)
  - [Shadow](#shadow)
  - [Styling](#styling)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->

<a name="options"></a>
## Options

[Search options](../search.md)


<a name="usage"></a>
## Usage

<a href="https://jsfiddle.net/ArthurClemens/4zmtfd5u/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import m from "mithril"
import { Search, Shadow } from "polythene-mithril"

m(Search, {
  textfield: { label: "Search" },
  before: m(Shadow)
})
~~~

This creates a search field without any icons, with label "Search", and is little more than a [Text Field](../textfield.md) with a drop shadow. The field also needs search icons and buttons. More on that below.

<a name="search-box-type"></a>
### Search box type

The search box can be "inset" (default) or "full width".

An inset search box is presented in an area / box / tile with some surrounding space.

A full width search box is a little higher and visually corresponds to a toolbar, and in fact can be displayed in a toolbar.

~~~javascript
m(Search, {
  textfield: { label: "Search" },
  before: m(Shadow),
  fullWidth: true
})
~~~

<a name="icons-and-buttons"></a>
### Icons and buttons

The search component does not include any icons by itself - providing those is the responsibility of your application. 

To choose which icons to show, we first need to look at the possible states:

* `none` - no interaction, no input
* `focus` - input element has focus, no input
* `focus and dirty` - input element has focus, text has been entered
* `dirty` - input element has no longer focus, entered text is visible

Secondly, buttons may be placed `before` of `after` the input field.

The states are set in the `buttons` option. For example:

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

Not all button states need to be defined.

<a name="logic-storing-and-clearing-the-value"></a>
### Logic: storing and clearing the value

See also [Handling state](../../handling-state.md).

To add logic to the search field, we will wrap the search field in a component. We will store the Text Field state in our component state, and set the input value programmatically. For this we will use the Text Field's `value` and `onChange`:

* `value` - sets the text input value
* `onChange => ({ value, focus, setFocus })` - receives the latest state

Text Field attributes are passed with option `textfield`:

~~~javascript
textfield: {
  value: state.value,
  onChange: ({ value, focus, setFocus }) => (
    state.value = value,
    state.focus = focus,
    state.setFocus = setFocus
  )
}
~~~

To clear the field:

* Set the value to empty string
* Call `setFocus` (to refocus after clicking the button, leaving the input field)

The back button clears the field and removes the focus, setting the search field to the initial state. Remove the ripple (`ink: false`) to prevent a ripple after the click (it would seem like the returned search button received the click).

<a name="complete-example"></a>
### Complete example

~~~javascript
import m from "mithril"
import stream from "mithril/stream"
import { Search, IconButton, Shadow } from "polythene-mithril"

const iconSearchSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/></svg>"
const iconBackSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>"
const iconClearSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>"
const iconMicSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z\"/></svg>"

const iconSearch = m.trust(iconSearchSVG)
const iconBack = m.trust(iconBackSVG)
const iconClear = m.trust(iconClearSVG)
const iconMic = m.trust(iconMicSVG)

const BackButton = {
  view: ({ attrs }) =>
    m(IconButton, {
      icon: { svg: { content: iconBack } },
      ink: false,
      events: { onclick: attrs.leave }
    })
}

const ClearButton = {
  view: ({ attrs }) =>
    m(IconButton, {
      icon: { svg: { content: iconClear } },
      ink: false,
      events: { onclick: attrs.clear }
    })
}

const SearchIcon = {
  view: () => 
    m(IconButton, {
      icon: { svg: { content: iconSearch } },
      // make this appear as Icon Button but without interactivity:
      inactive: true
    })
}

const MicIcon = {
  view: () =>
    m(IconButton, {
      icon: { svg: { content: iconMic } },
      // make this appear as Icon Button but without interactivity:
      inactive: true
    })
}

const MySearch = {
  oninit: vnode => {
    const value = stream("")
    const setInputState = stream()
    
    const clear = () =>
      setInputState()({ value: "", focus: true })

    const leave = () => value("")

    vnode.state = {
      value,
      setInputState,
      clear,
      leave,
    }
  },
  view: ({ state, attrs }) => {
    const value = state.value()
    return m(Search, Object.assign(
      {},
      {
        textfield: {
          label: "Search",
          onChange: ({ value, setInputState }) => (state.value(value), state.setInputState(setInputState)),
          value,
        },
        buttons: {
          none: {
            before: m(SearchIcon),
            after: m(MicIcon)
          },
          focus: {
            before: m(SearchIcon),
            after: m(MicIcon)
          },
          focus_dirty: {
            before: m(BackButton, { leave: state.leave }),
            after: m(ClearButton, { clear: state.clear })
          },
          dirty: {
            before: m(BackButton, { leave: state.leave }),
            after: m(ClearButton, { clear: state.clear })
          }
        },
        before: m(Shadow)
      }
    ))
  }
}
~~~

<a name="result-list"></a>
### Result list

A search field is almost always combined with a list of search results.

This can be created by combining both search field and result list in a stateful wrapper component, where the wrapper keeps track of the current search string and generates corresponding results.

To add keyboard control - allowing to move from the search field into the results list and back - can be done by reusing the [keyboard list example](list.md#keyboard-control).

The basic setup is:

~~~javascript
{
  oninit: vnode => {
    // ... logic
  },
  view: ({ state, attrs }) => {
    return m(".container",
      {
        // The container catches all keyboard events for both search field and result list
        onkeydown: state.handleKey
      },
      [
        m(SearchField),
        m(ResultList)
      ]
    )
  }
}
~~~

An elaborate example is available as fiddle:

<a href="https://jsfiddle.net/ArthurClemens/wf63ftfj/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>



<a name="appearance"></a>
## Appearance

<a name="shadow"></a>
### Shadow

Add `before: m(Shadow)` to add a drop shadow to the search field.

<a name="styling"></a>
### Styling

Below are examples how to change the Search appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

#### Themed component

~~~javascript
import { SearchCSS } from "polythene-css"

SearchCSS.addStyle(".themed-search", {
  color_light_input_text: "#0D47A1",
  color_light_background: "#BBDEFB",
  color_dark_input_text:  "#eee",
  color_dark_background:  "#333"
})

m(Search, {
  className: "themed-search"
})
~~~

#### CSS

Change CSS using the [Search CSS classes](../../../packages/polythene-css-classes/search.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/search"
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(Search, {
  style: {
    background: "#BBDEFB"
  }
})
~~~

<a name="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


