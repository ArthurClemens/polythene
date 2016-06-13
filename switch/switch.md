# Switch

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/switch">Demo</a>

Form control to toggle the state of a single setting. Generates a styled checkbox input element.


## Usage

~~~javascript
import m from 'mithril';
import switchCmp from 'polythene/switch/switch';

m.component(switchCmp);
~~~

Creates an unselected switch button.

~~~javascript
m.component(switchCmp, {
    label: 'Switch',
    state: true,
    getState: (state) => (ctrl.checked = state.checked)
})
~~~

Creates a selected switch with a label, receives updates through `getState`.

To read the switch state, for instance to write its checked state to a controller variable, use `getState`:

~~~javascript
m.component(switchCmp, {
    label: 'Switch',
    getState: (state) => (ctrl.checked = state.checked)
})
~~~

Because `checked` can be called as a function, it can be written much shorter in combination with `m.prop`:

~~~javascript
const module = {};
module.controller = () => {
    return {
        checked: m.prop(false)
    };
};
module.view = (ctrl) => {
    return m.component(switchCmp, {
        label: 'Switch',
        checked: ctrl.checked,
        getState: (state) => (ctrl.checked = state.checked)
    });
}
~~~


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag for the switch container |
| **class** | optional | String |  | Extra CSS class appended to 'pe-control--switch' |
| **id** | optional | String | | HTML element id for the switch container |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### Switch specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **name** | optional | String | | Input element name |
| **label** | optional | String | | Text label |
| **checked** | optional | Boolean or Function | false | Checked state; use as function to set the value from outside |
| **getState**  | optional | Function(state {Object}) | | Callback function that accepts the field state (Object with properties `checked` {Boolean}, `value` {String}, `el` {HTMLElement}) |
| **value** | optional | String | '1' | Input element value |
| **disabled** | optional | Boolean |  | Set to true to disable the switch |
| **tabindex** | optional | Integer | | Tab index |

### Switch appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **size** | optional | String | 'regular' | Equivalent to [icon's type](#icon) option; either 'small' (16px), 'regular' (24px), 'medium' (32px), 'large' (40px) |
| **wash** | optional | Boolean | true on touch devices | Set to false to always hide the wash (radial feedback); a hidden wash is still drawn to create a large tap target  |
| **raised** | optional | Boolean | true | Shows a shadow below the thumb; when the switch is on, the depth is increased by 1 |
| **zOff** | optional | Number 0-5 | 1 | The shadow depth for the thumb in off state |
| **zOn** | optional | Number 0-5 | 2 | The shadow depth for the thumb in on state |


## Styling

Change the colors of track and thumb in CSS:

~~~css
.pe-control--off .pe-control--switch__track {
    background-color: #aaa;
}
.pe-control--on .pe-control--switch__track {
    background-color: #fd8b83;
}
.pe-control--off .pe-control--switch__thumb {
    color: #fff;
}
.pe-control--on .pe-control--switch__thumb {
    color: #fc4482;
}
~~~

To include the focus ring in the color scheme you need to address the thumb (which is an icon button component) when it is in focus state, and set the color of the focus element:

~~~css
.pe-control--on .pe-button--focus .pe-button__focus {
    background-color: #fc4482;
}
~~~

Setting a custom thumb icon:

~~~javascript
import icon from 'polythene/icon/icon';
import bullseyeIcon from 'app/assets/bullseye';

m.component(slider, {
    icon: m.component(icon, {
        msvg: bullseyeIcon
    })
})
~~~

and the corresponding CSS:

~~~css
.pe-control--off .pe-control--switch__thumb {
    color: #fff
}
.pe-control--on .pe-control--switch__thumb {
    color: #fff
}
.pe-control--off .pe-control--switch__thumb .pe-icon {
    color: gray;
}
.pe-control--on .pe-control--switch__thumb .pe-icon {
    color: red;
}
~~~



## Inheritance/composition

Switch is composed with [Selection control](#selection-control).
