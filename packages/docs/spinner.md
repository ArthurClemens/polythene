TO UPDATE

# Spinner

Available themed spinners:

* [Material Design spinner](../polythene-md-spinner)
* [Material Design progress spinner](../polythene-md-progress-spinner)
* [iOS spinner](../polythene-ios-spinner)



## Usage

To create a typical Material Design (indeterminate) spinner:

~~~javascript
import spinner from "polythene-md-spinner";

m(spinner);
~~~

To create a typical iOS (indeterminate) spinner:

~~~javascript
import spinner from "polythene-ios-spinner";

m(spinner);
~~~





### Show / hide

By default the spinner is hidden, unless:

* option `show` is true
* option `hide` is false
* options `permanent` is true (for testing and demos)



### Progress spinner

To show a progress circle:

~~~javascript
import spinner from "polythene-md-progress-spinner";

m(spinner, {
  percentage: vnode.state.percentage // dynamic value
});
~~~

The progress spinner draws a circle between 0 and 360 degrees. The completeness is set with `percentage`, a range between `0.0` and `1.0`. This value would normally be set by a progress function, for instance a loader.

For demonstration purposes, this can be emulated with a "step" function that updates the percentage until 1.0 is reached:

~~~javascript
import spinner from "polythene-md-progress-spinner";

const test = {
  oninit: vnode => {
    let start = null;

    vnode.state.percentage = 0;
    vnode.state.resetStep = () => {
      start = null;
    };

    vnode.state.step = timestamp => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      vnode.state.percentage = Math.min(1, 1.0 / STEP_DURATION * progress);
      
      m.redraw();
      if (progress < STEP_DURATION) {
        window.requestAnimationFrame(vnode.state.step);
      }
    };
  },
  view: ({ state }) =>
    m(spinner, {
      percentage: state.percentage,
      animated: true,     // animated the steps "in between"
      updateDuration: 1.0 // duration of that animation
      // ... other options
    })
};

m(test);
~~~




## Appearance

### Styling

Below are examples how to change the spinner appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](../polythene-theme).

#### Themed component

~~~javascript
spinner.theme(".themed-spinner", {
  color_light_background: "#2196F3",
  border_radius:          0
});

m(spinner, {
  className: "themed-spinner",
  // ... other options
});
~~~

#### CSS

Change CSS using the CSS Classes at the bottom of this page.

When `singleColor` is specified, the primary color is used. Override this by setting the CSS `color` attribute:

~~~css
.pe-spinner {
  color: red
}
~~~

#### Style

Some style attributes can be set using option `style`

~~~javascript
m(spinner, {
  singleColor: true, // required when using color with polythene-md-spinner
  style: {
    color: "#2196F3"
  }
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
| **element**   | optional | String | "div" | HTML element tag |
| **className**     | optional | String |       | Extra CSS class appended to `pe-fab` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id**        | optional | String |       | HTML element id |
| **content**   | either `icon` or `content` | String, hyperscript or component |  | Alternative content |
| **before**    | optional | String, hyperscript or component | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional | String, hyperscript or component | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tabindex**  | optional | Integer | | Tab index |
| **events**    | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **tone**      | optional | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |

### Spinner options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **permanent** | optional | Boolean | | Set to `true` to always show the spinner (mostly used for demonstration purposes) |
| **show** | optional | Boolean or Number (in seconds) | | Set to true to show the menu |
| **hide** | optional | Boolean or Number (in seconds) | | Set to true to hide the menu |

### Spinner appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **type** | optional | String | "regular" | Either "small" (24px), "regular" (32px), "medium" (40px), "large" (48px), "fab" (56px). Adds CSS class "small", "regular", "medium", "large", "fab" |
| **raised** | optional | Boolean | | Set to `true` to create a FAB-like appearance with shadow and whitespace around the spinner |
| **z** | optional | Number 0-5 | 1 (if `raised` is set) | Depth of the shadow |

### Indeterminate options

For `polythene-md-spinner` and `polythene-ios-spinner`:

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **singleColor** | optional | Boolean | | Set to true to use only one color (by default the primary color) |

### Determinate options

For `polythene-md-progress-spinner`:

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **percentage** | optional | Number (0..1) or Function | | (Determinate spinner) Sets the progress percentage value |
| **animated** | optional | Boolean | false | (Determinate spinner) Set to `true` to animate the progress between subsequent steps |
| **updateDuration** | optional | Number (seconds) | 0.8 | The duration of the step progress update |



## CSS classes

See: `src/classes.js`


