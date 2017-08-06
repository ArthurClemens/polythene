_This is documentation for Polythene 0.3. A newer version of Polythene - compatible with Mithril 1.x - is available at https://github.com/ArthurClemens/polythene_


# Slider

Select a value from a continuous or discrete range of values by moving the slider thumb. Optimized for mobile.

With both usability and theming in mind, no range input element is created (other than for instance [Material Design Lite](http://www.getmdl.io)). The range input has limited styling options, for instance it is not possible to create a large enough click area for the slider thumb (without making the thumb itself enormous). Using a different image for the thumb is out of the question. So this component uses divs.

Supported features:

* focus (on TAB; ESCAPE to remove focus)
* keyboard control (arrow keys, shift arrow keys for 10x)
* touch support
* optionally disable click/tap on track
* custom thumb element
* step size, adjustable to any value including 0
* tick marks


## Usage

~~~javascript
import m from 'mithril';
import { Slider } from 'polythene';

m(Slider);
~~~

Creates a slider with a range of 0 to 100.

~~~javascript
m(Slider, {
    min: 0,
    max: 50,
    value: 10,
    step: 10
});
~~~

Creates a slider with a range of 0 to 50 and a step size of 10 (step count of 6 including min and max), and sets the slider to value 10.

To add tick marks and pins:

~~~javascript
m(Slider, {
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
import { Icon } from 'polythene';
import iconVolume from 'mmsvg/google/msvg/av/volume-up';

m('.volume', [
    m('.header', 'Media volume'),
    m(Slider, {
        class: 'layout horizontal',
        min: 0,
        max: 10,
        value: 4,
        step: 0,
        before: m(Icon, {
            msvg: iconVolume
        })
    })
]);
~~~


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
        m(slider, {
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

### Setting the slider value

To update the slider value from the outside, for instance from a controller value, use option `value` as function:

~~~javascript
const module = {};
module.controller = () => {
    return {
        volume: 0
    };
};
module.view = (ctrl) => {
    return m(TextField, {
        min: 0,
        max: 10,
        value: () => (ctrl.volume)
    })
};
~~~

## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-slider' |
| **id** | optional | String | | HTML element id |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

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
| **tabindex** | optional | Integer | | Tab index |

### Slider appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **thumb** | optional | Mithril element | | Adds a Mithril element to the slider control |


### Styling

Setting the main color is done by specifying the `color` value.

CSS:

~~~css
.pe-slider: {
    color: red
}
~~~

Setting a custom thumb icon:

~~~javascript
import { Slider, Icon } from 'polythene';
import bullseyeIcon from 'app/assets/bullseye';

m(Slider, {
    icon: m(Icon, {
        msvg: bullseyeIcon
    })
})
~~~
