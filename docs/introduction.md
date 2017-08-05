# Polythene: Material Design for Mithril and React

## Material Design / custom design

Polythene components closely follow the [Material Design specification](https://material.io/guidelines/material-design/introduction.html). But styling is set up in a flexible way - it is easy to [create a theme or change the style entirely](theming.md).


## No architecture

Polythene components are a loose collection of UI components that can be used standalone or optionally combined into larger components. There is no overarching architecture - it is all quite simple.

State is handled by your app. That means that your app sets the initial state and subsequent mutated states of the form component. More details and examples in [Handling state](handling-state.md).


## Composition

### Example: SVG 

[SVG](packages/svg.md) is a component that illustrates how small components can be combined into larger ones. SVG is most often used as parameter to [Icon](packages/icon.md).

#### Mithril example

~~~javascript
import m from "mithril"
import { Icon, SVG } from "polythene-mithril"

const starsSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

m(Icon,
  m(SVG, m.trust(starsSVG))
)
~~~

#### React JSX example

~~~jsx
import React from "react"
import { Icon, SVG } from "polythene-react"

const starsSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>

<Icon>
  <SVG>{starsSVG}</SVG>
</Icon>
~~~

#### React hyperscript example

~~~javascript
import { renderer as h, Icon, SVG } from "polythene-react"

const starsSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

h(Icon,
  h(SVG, m.trust(starsSVG))
)
~~~

### Example: Icon Button

And the Icon component can also be used to create a somewhat larger component, for example [Icon Button](packages/icon-button.md).

#### Mithril example

We can pass a custom Icon as a child to Icon Button:

~~~javascript
import m from "mithril"
import { Icon, IconButton, SVG } from "polythene-mithril"

const starsSVG = "..." // see above

const StarIcon = m(Icon,
  m(SVG, m.trust(starsSVG))
)

m(IconButton, StarIcon)
~~~

Because Icon Button accepts `icon` options (and Icon accepts `svg` options), we can also use object notation:

~~~javascript
import m from "mithril"
import { IconButton } from "polythene-mithril"

const starsSVG = "..." // see above

m(IconButton,
  {
    icon: {
      svg: m.trust(starsSVG)
    }
  }
)
~~~

#### React JSX example

Passing a custom Icon as a child to Icon Button:

~~~jsx
import React from "react"
import { Icon, IconButton, SVG } from "polythene-react"

const starsSVG = ... // see above

<IconButton>
  <Icon>
    <SVG>{starsSVG}</SVG>
  </Icon>
</IconButton>
~~~

Because Icon Button accepts `icon` options (and Icon accepts `svg` options), we can also use object notation:

~~~jsx
import React from "react"
import { IconButton } from "polythene-react"

const starsSVG = ... // see above

<IconButton
  icon={{
    svg: starsSVG
  }}
/>
~~~

#### React hyperscript example

Passing a custom Icon as a child to Icon Button:

~~~javascript
import { renderer as h, Icon, IconButton, SVG } from "polythene-react"

const starsSVG = "..." // see above

const StarIcon = h(Icon,
  h(SVG, h.trust(starsSVG))
)

h(IconButton, StarIcon)
~~~

Because Icon Button accepts `icon` options (and Icon accepts `svg` options), we can also use object notation:

~~~javascript
import { renderer as h, IconButton } from "polythene-react"

const starsSVG = "..." // see above

h(IconButton,
  {
    icon: {
      svg: h.trust(starsSVG)
    }
  }
)
~~~


### Example: functions to write sub-components

JavaScript is extremely well-suited to compose components. For example, you can just use `map` over an array to create custom components.

#### Mithril example

~~~javascript
import m from "mithril"
import { Menu, List, ListTile } from "polythene-mithril"

const menuOptions = [
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content"
]

m(Menu, {
  content: m(List, {
    tiles: menuOptions.map(title =>
      m(ListTile,
        { title }
      )
    )
  })
})
~~~

#### React JSX example

~~~jsx
import React from "react"
import { Menu, List, ListTile } from "polythene-react"

const menuOptions = [
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content"
]

<Menu>
  <List>
    {
      menuOptions.map(title =>
        <ListTile title={title} />
      )
    }
  </List>
</Menu>
~~~

#### React hyperscript example

~~~javascript
import { renderer as h, Menu, List, ListTile } from "polythene-react"

const menuOptions = [
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content"
]

h(Menu, {
  content: h(List, {
    tiles: menuOptions.map(title =>
      h(ListTile,
        { title }
      )
    )
  })
})
~~~

## Next

* [Documentation](../docs/README.md)
