# Migrating from Polythene 0.2 to 1.0

## Module imports

Polythene is now a monorepo with an npm package for each component. The module imports no longer contain a path:

### v0.2

```javascript
import button from "polythene/button/button";
```

### v1.x

```javascript
import button from "polythene-button";
```


## Component invocation

In Mithril 1.x `m.component(myComponent)` has been changed to `m(myComponent)`.

### v0.2

```javascript
m.component(button, {});
```

### v1.x

```javascript
m(button, {});
```


## Package restructuring

### Renamed or moved components or code

v0.2                             |  v1.0
-------------------------------- | ----------------
`font-roboto`                    | no longer exposed as separate component, but used in `polythene-material-design`
`polythene/common/mixin`         | `mixin` from `polythene-css`
`polythene/common/webfontloader` | removed; use [webfontloader](https://github.com/typekit/webfontloader)
`polythene/config`               | `polythene-theme`
`polythene/theme`                | `polythene-material-design`
`polythene/layout/theme/theme`   | `polythene-css-classes`



### New components

| v1.0
| -------------------------------- |
| `polythene-raised-button`        |



## General component options

### Option `tag`

In Mithril 1.x, the attribute `tag` is reserved and cannot be used for components. In Polythene 1.x `tag` has been replaced with `element`.

#### v0.2

```javascript
m.component(button, {
  tag: "button"
});
```

#### v1.x

```javascript
m(button, {
  element: "button"
});
```



### Option `url`

In Mithril 1.x, attribute `config` has been removed in favor of livecycle methods. To create a route link in Polythene, use `oncreate: m.route.link`.

#### v0.2

```javascript
m.component(button, {
  url: {
    href: "/page",
    config: m.route
  }
});
```

#### v1.x

```javascript
m(button, {
  url: {
    href: "/page",
    oncreate: m.route.link
  }
});
```



### Options for setting child content

Content can now also be set using child nodes, and creates the same result when using option `content`.

#### v0.2

```javascript
import listTile from 'polythene/list-tile/list-tile';

m(listTile, {
  content: "My content"
});
```

#### v1.x

```javascript
import listTile from "polythene-list-tile";

 m(listTile, {
  content: "My content"
});

m(listTile, {}, "My content");
```






## Component specific changes

### Button

When a button has focus and the ENTER key is pressed, `onclick` is called.

#### v0.2

`onclick` is called on the DOM element.

#### v1.x

The `onclick` function of the `events` option (if any) is called.



### Button "raised" has become Raised Button

The raised button state has moved to its own component.

#### v0.2

```javascript
import button from "polythene/button/button";

m(button, {
  label: "Label",
  raised: true
});
```

#### v1.x

```javascript
import raisedButton from "polythene-raised-button";

m(raisedButton, {
  label: "Label"
});
```



### FAB

FAB is now composed from `polythene-raised-button`.



### Icon Button

CSS class `pe-button__label` has been replaced with `pe-button--icon__content`.

(Undocumented) option `raised` no longer works; use FAB instead, or add a shadow component.



### Ripple

Option `initialOpacity` has been renamed to `startOpacity`. Ripple includes more options to configure the ripple animation.



### SVG

Dynamic loading and preloading have been removed, as these are infrequent use cases.



### Switch

`switch` has been renamed to `switchButton` in order to import it without surprises (`switch` is a reserved keyword):

~~~javascript
import switchButton from "polythene-switch-button";
~~~



### Tabs

Option `buttons` has been deprecated in favor of `content` / child nodes.



### Textfield

Option `hideRequiredMark` has been replaced with `requiredIndicator: ""`. You can now set the "required" indicator by passing a string or Mithril element. There is also a new option "optionalIndicator".

#### v0.2

```javascript
import textfield from "polythene/textfield/textfield";

m(textfield, {
  // ...
  required: true,
  hideRequiredMark: true
});
```

#### v1.x

```javascript
import textfield from "polythene-textfield";

m(textfield, {
  // ...
  required: true,
  requiredIndicator: ""
});
```

but also:

```javascript
m(textfield, {
  // ...
  required: true,
  requiredIndicator: "(required)"
});

m(textfield, {
  // ...
  optionalIndicator: "(optional)"
});
```


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
import button from "polythene-button";

button.theme("blue-button", {
  color_light_normal_background: "blue",
  color_light_normal_text: "white"
});

m(button, {
  class: "blue-button",
  label: "Blue Button"
});
~~~ 

See polythene-theme's README for more details.


### Setting global app styles

#### v0.2

~~~javascript
// app/config/config.js
import config from 'polythene/config/default';

export default Object.assign({}, config, {
  // this site's base colors
  color_primary: '255, 152, 0' // orange 500
});
~~~

#### v1.x

~~~javascript
// custom-theme.js
import { defaultVariables } from "polythene-core";

export const vars = {
  ...defaultVariables
  , color_primary: "255, 152, 0" // orange 500
};
~~~

See polythene-theme's README for more details.


### Variables

Some of the component style variables (named "config" in v0.2) have been renamed. 

For instance:

|  v0.2                                |  v1.0                    |
| ------------------------------------ | ------------------------ |
| `color_light_flat_normal_background` | `color_light_background` |

* Button: variable parts "flat" and "raised" are removed, as well as "normal"
* Icon Button: variable part "normal" is removed



### Toolbar

Toolbar now only displays 1 row of items. Display of multiple bars (top, middle, bottom) has been moved to Header Panel.

