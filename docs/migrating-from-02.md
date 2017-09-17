# Migrating from Polythene 0.2 to 1.0 (Mithril)

Polythene is now a monorepo with an npm package for each component. 

The repo contains packages for both Mithril and React. Because React is introduced with version 1.0, this guide only describes changes for Mithril.


## Module imports

Module imports no longer contain a path:

### v0.2

```javascript
import button from "polythene/button/button"
```

### v1.x

```javascript
import { Button } from "polythene-mithril"
```


## Component invocation

In Mithril 1.x `m.component(myComponent)` has been changed to `m(myComponent)`.

### v0.2

```javascript
m.component(button, {})
```

### v1.x

```javascript
m(Button, {})
```


## Package restructuring

### Renamed or moved components or code

v0.2                             |  v1.0
-------------------------------- | ----------------
`fastclick`                      | part of `polythene-utilities`
`font-roboto`                    | part of `polythene-style`
`polythene/common/mixin`         | part of `polythene-core-css`
`polythene/common/webfontloader` | part of `polythene-utilities`
`polythene/config`               | `polythene-theme`
`polythene/theme`                | `polythene-style`
`polythene/layout/theme/theme`   | part of `polythene-utilities`


### New components

| v1.0
| --------------------------------- |
| `RaisedButton` |
| `RadioGroup` |


## General component options

### Option `tag`

In Mithril 1.x, the attribute `tag` is reserved and cannot be used for components. In Polythene 1.x `tag` has been replaced with `element`.

#### v0.2

```javascript
m.component(button, {
  tag: "button"
})
```

#### v1.x

```javascript
m(Button, {
  element: "button"
})
```

### Option `url`

In Mithril 1.x, attribute `config` has been removed in favor of livecycle methods. To create a route link in Polythene, use `oncreate: m.route.link`. See also: [URLs and router links](handling-urls.md).

#### v0.2

```javascript
m.component(button, {
  url: {
    href: "/page",
    config: m.route
  }
})
```

#### v1.x

```javascript
m(Button, {
  url: {
    href: "/page",
    oncreate: m.route.link
  }
})
```

### Options for setting child content

For many components, content can now also be set using child nodes, and creates the same result when using option `content`.

#### v0.2

```javascript
import listTile from 'polythene/list-tile/list-tile'

m(listTile, {
  content: "My content"
})
```

#### v1.x

```javascript
import { ListTile } from "polythene-mithril"

 m(ListTile, {
  content: "My content"
});

m(ListTile, {}, "My content")
```


## Component specific changes

### Button

When a button has focus and the ENTER key is pressed, `onclick` is called.

#### v0.2

`onclick` is called on the DOM element.

#### v1.x

The `onclick` function of the `events` option (if any) is called.



### Button option "raised" has become RaisedButton

The raised button state has moved to its own component.

#### v0.2

```javascript
import button from "polythene/button/button"

m(button, {
  label: "Label",
  raised: true
})
```

#### v1.x

```javascript
import { RaisedButton } from "polythene-mithril"

m(RaisedButton, {
  label: "Label"
})
```

### Card

Option `type` has been renamed to `size`.

### Checkbox

Option `getState` has been renamed to `onChange`.

### Dialog

Option `fullscreen` has been renamed to `fullScreen`.

### FAB

FAB is now composed from `polythene-raised-button`. This should have no consequences.

### Icon

Option `type` has been replaced with `size`.

### Icon Button

* CSS class `pe-button__label` has been replaced with `pe-button--icon__content`.
* (Undocumented) option `raised` no longer works; use FAB instead, or add a shadow component.

### List

Options `hoverable` and `selectable` have been removed; use these options on the list items.

### Radio Button

Option `getState` has been renamed to `onChange`.

### Ripple

Option `initialOpacity` has been renamed to `startOpacity`. Ripple includes more options to configure the ripple animation.

### Search

* Option `type: "fullWidth"` has been replaced with `fullWidth: true`.
* Option `getState` has been renamed to `onChange`.

#### v0.2

```javascript
import search from "polythene/search/search"

m(search, {
  // ...
  type: "fullWidth"
})
```

#### v1.x

```javascript
import { Search } from "polythene-mithril"

m(Search, {
  // ...
  fullWidth: true
})
```

### Slider

* Option `thumb` has been renamed to `icon`.
* Option `step` has been renamed to `stepSize`.
* To set the slider value, pass the value instead of writing `value` as function.

### SVG

Dynamic loading and preloading have been removed, as these are infrequent use cases.

### Switch

Option `getState` has been renamed to `onChange`.

### Tabs

* Option `buttons` has been renamed to `tabs`.
* Option `tabsOpts` has been renamed to `all`.
* Option `getState` has been renamed to `onChange`.
* Option `small` has been renamed to `compact`.

### Textfield

* Option `hideRequiredMark` has been replaced with `requiredIndicator: ""`. You can now set the "required" indicator by passing a string or Mithril element. There is also a new option "optionalIndicator".
* Option `multiline` has been renamed to `multiLine`.
* Option `getState` has been renamed to `onChange`.

#### v0.2

```javascript
import textfield from "polythene/textfield/textfield"

m(textfield, {
  // ...
  required: true,
  hideRequiredMark: true,
})
```

#### v1.x

```javascript
import { Textfield } from "polythene-mithril"

m(Textfield, {
  // ...
  required: true,
  requiredIndicator: "",
})
```

but also:

```javascript
m(Textfield, {
  // ...
  required: true,
  requiredIndicator: "(required)"
})

m(Textfield, {
  // ...
  optionalIndicator: "(optional)"
})
```


## CSS

Class `pe-dark-theme` has been renamed to `pe-dark-tone`. In v.1.0 new class `pe-light-tone` is introduced. Both classes can be set with option `tone`.



## Theming

A simpler way to theme components replaces the method of writing multiple style configurations in one file.

### Styling of components

#### v0.2

~~~javascript
// app/config/custom.js

export default {
  button: (config) => {
    const primaryButtonCfg = Object.assign({}, config, {
      color_light_normal_background: 'blue',
      color_light_normal_text: 'white'
    });
    return [
      { '': config }, // default Polythene button
      { '.blue-button': primaryButtonCfg }
    ];
  }
};
~~~

#### v1.x

~~~javascript
// any script
import { Button } from "polythene-mithril"
import { ButtonCSS } from "polythene-css"

ButtonCSS.addStyle("blue-button", {
  color_light_normal_background: "blue",
  color_light_normal_text: "white"
})

m(Button, {
  class: "blue-button",
  label: "Blue Button"
})
~~~ 

See [Theming](theming.md) for more details.


### Setting global app styles

#### v0.2

~~~javascript
// app/config/config.js
import config from 'polythene/config/default'

export default Object.assign({}, config, {
  // this site's base colors
  color_primary: '255, 152, 0' // orange 500
})
~~~

#### v1.x

~~~javascript
// app/custom-theme.js
import { vars as defaultVars } from "polythene-style"

export const vars = Object.assign(
  {},
  defaultVars,
  {
    color_primary: "255, 152, 0" // new base color: orange 500
  }
)
~~~

See [Theming: Global theme file](theming/global-theme-file.md) for more details.


### Variables

Some of the component style variables (named "config" in v0.2) have been renamed. 

For instance:

|  v0.2                                |  v1.0                    |
| ------------------------------------ | ------------------------ |
| `color_light_flat_normal_background` | `color_light_background` |

* Button: variable parts "flat" and "raised" are removed, as well as "normal"
* Icon Button: variable part "normal" is removed



### Toolbar

Toolbar now only displays 1 row of items. Display of multiple bars (top, middle, bottom) is not yet implemented.

