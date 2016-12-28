# Migrating from v0.2 to v1.0

## Module imports

Module imports have changed. 

### v0.2

```javascript
import btn from "polythene/button/button";
```

### v1.x

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


## Package restructuring

Some modules have been moved.

v0.2             |  v1.0
---------------- | ----------------
`polythene/common` | `polythene-css`
`font-roboto`      | `polythene-theme/font-roboto`


## Component specific changes

### button

`onclick` is called when a button has focus and the ENTER key is pressed.

#### v0.2

The onclick is called on the DOM element.

#### v1.x

The `events.onclick` function is called.

### svg

Removed dynamic loading and preloading, as these are not a frequent use cases. Without it the code is much simpler.





