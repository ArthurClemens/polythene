[Back to Polythene Ripple main page](Ripple.md)

# Ripple component for React



## Usage

### With JSX

Append a ripple to any HTML element (which requires to have style `position: relative` and a size):

~~~jsx
import React from "react"
import { Ripple } from "polythene-react"

// render component inside container
<div className="relative-with-size">
  <Ripple />  
</div>
~~~

Use option `after` to append a Ripple to a Polythene component:

~~~jsx
import React from "react"
import { Ripple, ListTile } from "polythene-react"

<ListTile
  title="Title"
  after={<Ripple/>}
/>
~~~


### With hyperscript

~~~javascript
import { Ripple } from "polythene-react"

// render component inside container
h(".relative-with-size",
  h(Ripple)
)
~~~

Use option `after` to append a Ripple to a Polythene component:

~~~javascript
import { Ripple, ListTile } from "polythene-mithril"

h(ListTile, {
  title: "Title",
  after: h(Ripple)
})
~~~



## Options

[Ripple options](Ripple.md)



## Appearance

### Styling

Below are examples how to change the Ripple appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](Theme.md).

#### Themed component

~~~javascript
Ripple.theme(".themed-ripple", {
  color_light:   "#F44336"
})

m(Ripple, {
  className: "themed-ripple",
  // ... other options
})
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-ripple/src/classes.js`

By default the inherited `color` from the parent element is used. It can be changed with CSS:

~~~css
.pe-ripple {
  color: green;
}
~~~

#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(Ripple, {
  style: {
    color: "#2196F3"
  },
  // ... other options
})
~~~


