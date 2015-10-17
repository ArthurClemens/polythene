
# Tabs

<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/tabs">Demo</a>

Displays a tab row.


## Usage

~~~javascript
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
const iconButtons = [
	{
		icon: {
            svg: {
                iconSet: 'mdi',
                name: 'heart'
            }
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
            svg: {
                iconSet: 'mdi',
                name: 'heart'
            }
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

Set `scrollable` to true and pass scroll icons to the tabs options:

~~~javascript
const myTabs = m.component(tabs, {
    buttons: tabButtons,
    scrollable: true,
    scrollIconLeft: scrollIconLeft,
    scrollIconRight: scrollIconRight
})

const scrollIconLeft = {
    svg: {
        name: 'chevron-left',
        group: 'google/navigation',
        iconSet: 'mdi'
    }
};

const scrollIconRight = {
    svg: {
        name: 'chevron-right',
        group: 'google/navigation',
        iconSet: 'mdi'
    }
};
~~~


### Styling

Set the selected button color and corresponding indicator background:

~~~css
.tabs .tab.selected {
	color: #00bcd4;
}
.tabs .tabIndicator {
	background-color: #00bcd4;
}
~~~

### Tab widths

Minimum tab width is 72px. For larger screens (> 480px, as defined in the default theme) the minimum tabs width is 160px.

To automatically fit the tabs in the view, use parameter `autofit`.

To make all tabs the width of the largest tab, use parameter `largestWidth`.

To use a fixed width without `autofit`:

~~~css
.tabs:not(.small):not(.medium) .tab {
	min-width: 100px;
}
~~~

### Mobile bottom menu

Use class `menu` to remove the minimum width settings from the tab buttons.

~~~javascript
m.component(tabs, {
    class: 'menu',
    buttons: tabButtons,
    autofit: true
})
~~~


## Options

### Tab row options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'div' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'tabs' |
| **buttons** | required | Array of options Objects |  | Tab buttons |
| **autofit** | optional | Boolean | false | Set to true to let the buttons fill the button row |
| **scrollable** | optional | Boolean | false | Set to true to make the button row scrollable; this automatically sets autofit to `false`; on no-touch devices 2 scrollbuttons will be added to navigate tabs |
| **scrollIconLeft** | required when scrollable is `true` | [Icon](#icon) options object  | | Icon options for left button |
| **scrollIconRight** | required when scrollable is `true` | [Icon](#icon) options object  | | Icon options for right button |
| **centered** | optional | Boolean | false | Set to true to center the button row; this automatically sets autofit to `false` |
| **largestWidth** | optional | Boolean | false | Set to true to make all tabs the width of the largest tab |
| **selectedTab** | optional | Number | 0 | The Array index of the selected tab |
| **hideIndicator** | optional | Boolean | false | Set to true to hide the tab indicator |
| **noIndicatorSlide** | optional | Boolean | false | Set to true not let the tab indicator slide to the new position |
| **tabsOpts** | optional | Options Object | | Tab button options that will be applied to all tabs |

### Tab button options

Tab buttons use the same parameters as [button](#button), except for `wash` (disabled), `raised` and `z` (makes visually no difference).

These options can be grouped into `tabsOpts` and applied to all tabs.

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **tag** | optional | String | 'a' (if `url` is passed) or 'div' | HTML tag |
| **class** | optional | String |  | Extra CSS class appended to 'button' |
| **label** | required | String | | The button label |
| **url** | optional | Object with `href`, optionally `config` | | Button URL or click handler |
| **events** | optional | Object | | Button events; options object containing one or more events like `onclick` |
| **ink** | optional | Boolean | true | Set to false to disable the ripple effect on click/tap |
| **disabled** | optional | Boolean | false | Disables the button |
| **selected** | optional | Boolean | false | Set to true to show the button as selected |


## Default generated HTML

~~~html
<div class="tabs">
    <div class="tabRow layout horizontal">
        <a class="button tab flex none">
            <div class="content">
                <div class="layout vertical">
                    <div class="flex"></div>
                    <div class="label">New</div>
                    <div class="flex"></div>
                </div>
                <div class="fit ripple constrained">
                    <div class="ripple-mask">
                        <div class="ripple-waves" style=""></div>
                    </div>
                </div>
            </div>
        </a>
        ... same for other tab buttons
        <div class="tabIndicator" style=""></div>
    </div>
</div>
~~~

## TODO

* Tab with More dropdown menu
