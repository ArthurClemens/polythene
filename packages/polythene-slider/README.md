# Slider

Select a value from a continuous or discrete range of values by moving the slider thumb. Optimized for mobile.

With both usability and theming in mind, no range input element is created (other than for instance [Material Design Lite](http://www.getmdl.io)). The range input has limited styling options, for instance it is not possible to create a large enough click area for the slider thumb (without making the thumb itself enormous). Using a different image for the thumb is out of the question. So this component uses divs.

Supported features:

* Focus (on TAB; ESCAPE to remove focus)
* Keyboard control (arrow keys, shift arrow keys for 10x)
* Touch support
* Optionally disable click/tap on track
* Custom thumb element
* Step size, adjustable to any value including 0
* Tick marks



## Usage

~~~javascript
import m from "mithril";
import slider from "polythene-slider";

const mySlider = m(slider);
~~~

Creates a slider with a range of 0 to 100.

~~~javascript
m(slider, {
  min: 0,
  max: 50,
  value: 10,
  step: 10
});
~~~

Creates a slider with a range of 0 to 50 and a step size of 10 (step count of 6 including min and max), and sets the slider to value 10.

To add tick marks and pins:

~~~javascript
 m(slider, {
  min: 0,
  max: 50,
  value: 10,
  step: 10,
  ticks: true,
  pin: true
});
~~~


### Icons

To place an icon next to the slider, use the option `before`:

~~~javascript
import icon from "polythene-icon";
import iconVolume from "mmsvg/google/msvg/av/volume-up";

m(".volume", [
  m(".header", "Media volume"),
  m(slider, {
    min: 0,
    max: 10,
    value: 4,
    step: 0,
    before: m(icon, {
      msvg: iconVolume
    })
  })
]);
~~~


### Getting the slider value

~~~javascript
m({
  oninit: vnode =>
    vnode.state.value = 0,
  view: vnode => [
    m("p", "Value: " + vnode.state.value),
    m(slider, {
      min: 0,
      max: 100,
      value: vnode.state.value,
      getValue: value => vnode.state.value = value
    })
  ]
})
~~~


### Setting the slider value

To update the slider value from the outside, for instance from a controller value, use option `value` as function:

~~~javascript
m({
  oninit: vnode =>
    vnode.state.value = 0,
  view: vnode => m(".layout.horizontal", [
    // textfield input to change the value
    m(textfield, {
      style: {
        width: "10%"
      },
      value: () => vnode.state.value.toString(),
      events: {
        oninput: e => vnode.state.value = e.target.value
      },
      maxlength: 3,
      min: 0,
      max: 999,
      hideValidation: true
    }),
    m(slider, {
      min: 0,
      max: 999,
      value: () => vnode.state.value // <= this updates to the value set by textfield
    })
  ])
});
~~~



## Appearance

### Styling

Below are examples how to change the slider appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](../polythene-theme).

#### Themed component

~~~javascript
slider.theme(".themed-slider", {
  color_light_track_active:   "#82b1ff",
  color_light_track_inactive: "#c5cae9",
  color_light_track_value:    "#f50057",
  color_light_thumb_on:       "#f50057"
});

m(slider, {
  class: "themed-slider",
  // ... other options
});
~~~

#### CSS

Change CSS using the CSS Classes at the bottom of this page.

#### Style

Some style attributes can be set using option `style`. Setting the main color is done by specifying the `color` value:

~~~javascript
m(slider, {
  style: {
    color: "red"
  },
  // ... other options
});
~~~

#### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


#### Icon

Setting a custom thumb icon:

~~~javascript
import icon from "polythene/icon/icon";
import bullseyeIcon from "app/assets/bullseye";

m(slider, {
  icon: m(icon, {
    msvg: bullseyeIcon
  })
})
~~~



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String   | "div"       | HTML element tag |
| **class**     | optional       | String   |             | Extra CSS class appended to `pe-slider` |
| **id**        | optional       | String   |             | HTML element id |
| **before**    | optional       | Mithril element |      | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | Mithril element |      | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **tabindex**  | optional       | Integer  | 0           | Tab index |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-theme`); use "light" to locally inverse (sets class `pe-light-theme`) |

### Slider specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **min** | optional | Number | 0 | Minimum slider value |
| **max** | optional | Number | 100 | Maximum slider value |
| **step** | optional | Number | 1 | Step size; set to 0 for a continuous (smooth) slider |
| **value** | optional | Number or Function | 0 | Slider value; use as function to set the value from outside |
| **ticks** | optional | Boolean |  | Show a tick for each step; limited to 100 |
| **pin** | optional | Boolean |  | Use with `step`; on click shows a pin shape with the current value |
| **interactiveTrack** | optional | Boolean | true | Set to `false` to prevent clicking on the track |
| **getValue** | optional | Function | | Callback function to receive the slider value  |
| **disabled** | optional | Boolean |  | Set to true to make the slider read only |

### Slider appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **thumb** | optional | Mithril element | | Adds a Mithril element to the slider control |



## CSS classes

| **Element**      | **Key**        |  **Class** |
| ---------------- | -------------- | --------------- |
| Component        | component      | `pe-slider` |
| Thumb            | thumb          | `pe-slider__thumb` |
| Label            | label          | `pe-slider__label` |
| Track            | track          | `pe-slider__track` |
| Track part       | trackPart      | `pe-slider__track-part` |
| Track value part | trackPartValue | `pe-slider__track-value` |
| Track rest part  | trackPartRest  | `pe-slider__track-rest` |
| Track bar        | trackBar       | `pe-slider__track-bar` |
| Track bar value  | trackBarValue  | `pe-slider__track-bar-value` |
| Control          | control        | `pe-slider__control` |
| Ticks            | ticks          | `pe-slider__ticks` |
| Pin              | pin            | `pe-slider__pin` |

| **State**       | **Key**     |  **Class** |
| --------------- | ----------- | --------------- |
| Disabled        | isDisabled  | `pe-slider--disabled` |
| Active          | isActive    | `pe-slider--active` |
| Has track       | hasTrack    | `pe-slider--track` |
| Has pin         | hasPin      | `pe-slider--pin` |
| Has ticks       | hasTicks    | `pe-slider--ticks` |
| Has focus       | hasFocus    | `pe-slider--focus` |
| Is at min value | isAtMin     | `pe-slider--min` |



## Future

* Support non-linear scales
* Support right-to-left language
* Vertical slider
