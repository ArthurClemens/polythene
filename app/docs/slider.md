# Slider

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/slider">Demo</a>

Select a value from a continuous or discrete range of values by moving the slider thumb. Optimized for mobile.

## Usage

~~~javascript
import slider from 'polythene/slider/slider';

const mySlider = m.component(slider);
~~~

Creates a slider with a range of 0 to 100.

~~~javascript
import slider from 'polythene/slider/slider';

const mySlider = m.component(slider, {
    min: 0,
    max: 50,
    step: 10,
    pin: true,
    value: 10
});
~~~

Creates a slider with a range of 0 to 50 and a step size of 10 (step count of 6 including min and max), and sets the slider to value 10.



### Getting the slider value

~~~javascript
myModule.controller = () => {
    return {
        sliderValue: 0
    };
};

myModule.view = (ctrl) => {
    return m('div', [
        m('h2', 'Value: ' + ctrl.sliderValue),
        m.component(slider, {
            min: 0,
            max: 100,
            value: 0,
            getValue: (value) => {
                ctrl.sliderValue = Math.round(value);
            }
        })
    ]);
};
~~~

## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'slider' |
| **id** | optional | String | | HTML element id |
| **min** | required | Number | 0 | Minimum slider value |
| **max** | required | Number | 100 | Maximum slider value |
| **value** | optional | Number | 0 | Starting value |
| **step** | optional | Number | 1 | Step size |
| **pin** | optional | Boolean |  | Use with `step`; on click shows a pin shape with the current value |
| **getValue** | optional | Function | | Callback function to receive the slider value |
| **disabled** | optional | Boolean |  | Set to true to make the slider read only |


### Styling

Setting the main color is done by specifying the `color` value.

CSS:

~~~css
.slider: {
    color: red
}
~~~

### Focus ring

Note: the focus ring does not work on touch devices or on Mac OS X Safari.

The focus ring color is default set to a transparent black (or white with dark theme). This is not according to MD specification, but "skipping" this allows for the easy color setting above.

To set the focus ring to a (transparent) color, specify the `box-shadow` property:

~~~css
.slider-control:focus:not(.is-min):not(:active):not(.pin)::-webkit-slider-thumb {
    box-shadow: 0 0 0 10px rgba(255, 0, 0, 0.08);
}
.slider-control:focus:not(.is-min):not(:active):not(.pin)::-moz-range-thumb {
    box-shadow: 0 0 0 10px rgba(255, 0, 0, 0.08);
}
.slider-control:focus:not(.is-min):not(:active):not(.pin)::-ms-thumb {
    box-shadow: 0 0 0 10px rgba(255, 0, 0, 0.08);
}
~~~

or with `j2c`:

~~~js
const focusRing = {
    'box-shadow': '0 0 0 10px rgba(255, 0, 0, 0.08)'
}
'.slider-control:focus:not(.is-min):not(:active):not(.pin)': {
    '&::-webkit-slider-thumb': focusRing,
    '&::-moz-range-thumb': focusRing,
    '&::-ms-thumb': focusRing
}
~~~


## Future

* Support non-linear scales
* Support right-to-left language
