# Tabs

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/tabs">Demo</a>

Displays a tab row.


## Usage

~~~javascript
import m from 'mithril';
import tabs from 'polythene/tabs/tabs';

const tabButtons = [
    {
        label: 'New'
    },
    {
        label: 'Favorites'
    },
    {
        label: 'Saved'
    }
];

const myTabs = m.component(tabs, {
    buttons: tabButtons,
    autofit: true
})
~~~

To use icons instead of text labels:

~~~javascript
import iconHeart from 'mmsvg/templarian/msvg/heart';

const iconButtons = [
    {
        icon: {
            msvg: iconHeart
        }
    },
    ...
];

const myTabs = m.component(tabs, {
    buttons: iconButtons,
    autofit: true
})
~~~

Icons and text combined:

~~~javascript
const iconTextButtons = [
    {
        icon: {
            msvg: iconHeart
        },
        label: 'Favs'
    },
    ...

const myTabs = m.component(tabs, {
    buttons: iconTextButtons,
    autofit: true
})
~~~

To disable ripple (ink) effect:

~~~javascript
const myTabs = m.component(tabs, {
    buttons: tabButtons,
    tabsOpts: {
        ink: false
    }
})
~~~

### Scrollable tabs

Set `scrollable` to true:

~~~javascript
const myTabs = m.component(tabs, {
    buttons: tabButtons,
    scrollable: true
})
~~~

Optionally create custom arrow icons:

~~~javascript

import arrowBack from 'mmsvg/google/msvg/navigation/arrow-back';
import arrowForward from 'mmsvg/google/msvg/navigation/arrow-forward';

const myTabs = m.component(tabs, {
    buttons: tabButtons,
    scrollable: true,
    scrollIconBackward: {
        msvg: arrowBack
    },
    scrollIconForward: {
        msvg: arrowForward
    }
})
~~~


#### Scrollable tabs inside a toolbar

The toolbar must have the class `pe-toolbar--tabs`. This will fit the tab row in a row (class `pe-toolbar__bar`), and give the scroll buttons background color the same color as the toolbar background.



### Styling

Set the selected button color and corresponding indicator background:

~~~css
.pe-tabs__tab.pe-button--selected {
    color: #00bcd4;
}
.pe-tab__indicator {
    background-color: #00bcd4;
}
~~~




### Tab widths

Minimum tab width is 72px. For larger screens (> 480px, as defined in the default theme) the minimum tabs width is 160px.

To automatically fit the tabs in the view, use parameter `autofit`.

To make all tabs the width of the largest tab, use parameter `largestWidth`.

To use a fixed width without `autofit`:

~~~css
.pe-tabs:not(.pe-tabs--small) .pe-tabs__tab {
    min-width: 100px;
}
~~~

### Mobile bottom menu

Use option `menu` to remove the minimum width settings from the tab buttons and compress padding and label font size.

~~~javascript
m.component(tabs, {
    menu: true,
    buttons: tabButtons,
    autofit: true,
    hideIndicator: true
})
~~~


## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML element tag |
| **class** | optional | String |  | Extra CSS class appended to 'pe-tabs' |
| **id** | optional | String | | HTML element id |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |

### Tabs options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **buttons** | required | Array of options Objects |  | Tab buttons |
| **tabsOpts** | optional | Options Object | | Tab button options that will be applied to all tabs, see "Tab button options"  below |

### Tabs appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **menu** | optional | Boolean | false | Set to `true` to make the tabs behave like a mobile navigation menu; this removes the minimum width settings from the tab buttons and compresses padding and label font size |
| **small** | optional | Boolean | false | Set to `true` to reduce the tab widths |
| **autofit** | optional | Boolean | false | Set to true to let the buttons fill the button row |
| **scrollable** | optional | Boolean | false | Set to true to make the button row scrollable; this automatically sets `autofit` to `false`; on no-touch devices 2 scroll buttons will be added to navigate tabs |
| **activeSelected** | optional | Boolean | | Set to `true` to enabled clicks/taps on the selected tab button |
| **scrollIconBackward** | optional | [Icon](#icon) options object | | Overrides default arrow icon |
| **scrollIconForward** | optional | [Icon](#icon) options object | | Overrides default arrow icon |
| **centered** | optional | Boolean | false | Set to true to center the button row; this automatically sets `autofit` to `false` |
| **largestWidth** | optional | Boolean | false | Set to true to make all tabs the width of the largest tab |
| **selectedTab** | optional | Number | 0 | The Array index of the selected tab |
| **hideIndicator** | optional | Boolean | false | Set to true to hide the tab indicator |
| **noIndicatorSlide** | optional | Boolean | false | Set to true not let the tab indicator slide to the new position |

### Tab button options

Tab buttons use the same parameters as [button](#button), except for `wash` (disabled), `raised` and `z` (makes visually no difference).

These options can be grouped into `tabsOpts` and applied to all tabs.

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'a' (if `url` is passed) or 'div' | HTML element tag |
| **events** | optional | Object | | Button events; options object containing one or more events like `onclick` |
| **class** | optional | String |  | Extra CSS class appended to 'pe-button pe-tabs__tab' |
| **label** | required | String | | The button label |
| **url** | optional | Object with `href`, optionally `config` | | Button URL or click handler |
| **ink** | optional | Boolean | true | Set to false to disable the ripple effect on click/tap |
| **disabled** | optional | Boolean | false | Disables the button |
| **selected** | optional | Boolean | false | Set to true to show the button as selected |


## Future

* Tab with More dropdown menu
