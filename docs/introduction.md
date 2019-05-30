# Polythene: Material Design component library for Mithril and React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Material Design / custom design](#material-design--custom-design)
- [No architecture](#no-architecture)
- [Composition](#composition)
  - [Example: SVG](#example-svg)
    - [Mithril example](#mithril-example)
    - [React example](#react-example)
  - [Example: Icon Button](#example-icon-button)
    - [Mithril example](#mithril-example-1)
    - [React example](#react-example-1)
  - [Example: functions to write sub-components](#example-functions-to-write-sub-components)
    - [Mithril example](#mithril-example-2)
    - [React example](#react-example-2)
- [Next](#next)

<!-- /MarkdownTOC -->


<a id="material-design--custom-design"></a>
## Material Design / custom design

Polythene components closely follow the [Material Design specification](https://material.io/guidelines/material-design/introduction.html). But styling is set up in a flexible way - it is easy to [create a theme or change the style entirely](theming.md).



<a id="no-architecture"></a>
## No architecture

Polythene components are a loose collection of UI components that can be used standalone or optionally combined into larger components. There is no overarching architecture - it is all quite simple.

State is handled by your app. That means that your app sets the initial state and subsequent mutated states of the form component. More details and examples in [Handling state](handling-state.md).



<a id="composition"></a>
## Composition


<a id="example-svg"></a>
### Example: SVG 

[SVG](components/svg.md) is a component that illustrates how small components can be combined into larger ones. SVG is most often used as parameter to [Icon](components/icon.md).

#### Mithril example

~~~javascript
import m from "mithril"
import { Icon, SVG } from "polythene-mithril"

const iconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>"

m(Icon,
  m(SVG, m.trust(iconSVG))
)
~~~

#### React example

~~~jsx
import React from "react"
import { Icon, SVG } from "polythene-react"

const iconSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>

<Icon>
  <SVG>{iconSVG}</SVG>
</Icon>
~~~

<a id="example-icon-button"></a>
### Example: Icon Button

And the Icon component can also be used to create a somewhat larger component, for example [Icon Button](components/icon-button.md).

#### Mithril example

We can pass a custom Icon as a child to Icon Button:

~~~javascript
import m from "mithril"
import { Icon, IconButton, SVG } from "polythene-mithril"

const iconSVG = "..." // see above

const StarIcon = m(Icon,
  m(SVG, m.trust(iconSVG))
)

m(IconButton, StarIcon)
~~~

Because Icon Button accepts `icon` options (and Icon accepts `svg` options), we can also use object notation:

~~~javascript
import m from "mithril"
import { IconButton } from "polythene-mithril"

const iconSVG = "..." // see above

m(IconButton,
  {
    icon: {
      svg: { content: m.trust(iconSVG) }
    }
  }
)
~~~

#### React example

Passing a custom Icon as a child to Icon Button:

~~~jsx
import React from "react"
import { Icon, IconButton, SVG } from "polythene-react"

const iconSVG = ... // see above

<IconButton>
  <Icon>
    <SVG>{iconSVG}</SVG>
  </Icon>
</IconButton>
~~~

Because Icon Button accepts `icon` options (and Icon accepts `svg` options), we can also use object notation:

~~~jsx
import React from "react"
import { IconButton } from "polythene-react"

const iconSVG = ... // see above

<IconButton
  icon={{
    svg: { content: iconSVG }
  }}
/>
~~~


<a id="example-functions-to-write-sub-components"></a>
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

#### React example

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


<a id="next"></a>
## Next

* [Getting started with Mithril](getting-started-mithril.md)
* [Getting started with React](getting-started-react.md)
