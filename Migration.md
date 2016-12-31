# Migrating from v0.2 to v1.0

## Module imports

Module imports have changed. 

### v0.2

```javascript
import btn from "polythene/button/button";
```

### v1.x

Modules now have named imports.

```javascript
import { button } from "polythene-button";
```


## Component invocation

In Mithril 1.x `m.component(myComponent)` has been changed to `m(myComponent)`.

### v0.2

```javascript
const myBtn = m.component(button, {});
```

### v1.x

```javascript
const myBtn = m(button, {});
```


## Package restructuring

Some modules have been renamed or moved.

v0.2               |  v1.0
------------------ | ----------------
`polythene/common` | `polythene-css`
`polythene/config` | `polythene-theme`
`polythene/theme`  | `polythene-material-design`
`font-roboto`      | `polythene-theme/font-roboto`



## Component options

### Option "tag"

In Mithril 1.x, the param "tag" is reserved and cannot be used for a component. In Polythene "tag" has been replaced with "element".

#### v0.2

```javascript
const myBtn = m.component(button, {
  tag: "button"
});
```

#### v1.x

```javascript
const myBtn = m(button, {
  element: "button"
});
```

### Option "url"

The "url" object has been replaced with Mithril's "href" and "oncreate" options.

#### v0.2

```javascript
const myBtn = m.component(button, {
  url: {
    href: "/page",
    config: m.route
  }
});
```

#### v1.x

```javascript
const myBtn = m(button, {
  href: "/page",
  oncreate: m.route.link
});
```




## Component specific changes

### Button

When a button has focus and the ENTER key is pressed, `onclick` is called.

#### v0.2

`onclick` is called on the DOM element.

#### v1.x

The `onclick` function of the `events` option (if any) is called.


### Icon Button

CSS class `pe-button__label` has been replaced with `pe-button--icon__content`.


### SVG

Removed dynamic loading and preloading, as these are not a frequent use cases. Without it the code is much simpler.





