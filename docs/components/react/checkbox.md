[Back to Polythene Checkbox main page](../checkbox.md)

# Checkbox component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Reading and setting the checked state](#reading-and-setting-the-checked-state)
    - [Example managing mutating state](#example-managing-mutating-state)
- [Appearance](#appearance)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [Icons](#icons)
  - [RTL (right-to-left) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Checkbox options](../checkbox.md)



<a id="usage"></a>
## Usage


<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDQEYCcBWAXQxADMBLOAUzGRVADsBDAW0uRADoALAF2cWIQY9HpRHsAPHDL0A1gAIuUSiQC8AHRC8eABzBIA9AcZQeXAK5QIVVvTAcA5mTPmARhzIxjYMJR5gDHXgATzMxSgNKAA8WHSoAkht7CB9NeWU4DXAeYPiuSj9NAD51eglIKDIdHnkwKyztPUNjUwsrGzF7Jxd3T29ff0CQsPoIsB5GegATRjhhCKC4UPzRgFplRggeIaWRynXKTZ5V8cmZudGOACswYokDCqqeErLH6tr6zUb9IxMXdsoti6zgsvS8jB8fgCi2W4QeE2ms3mO1haxS0OGK326JOCPO82utxARXub2epVKEimZAAbvIyFMsrAYDw7gZqTSiiBiL4qFtPHZ2FgkGgQABfDAMFhsJCcG7ckBCERiHjsJXjeTAeQAYXyEFkrhgUQw8gASowyL4pgAhcw8HjCeRi+SqeQwvYAblK6pqWt1lH1hqi2oAyiGnS63ZjwqGQ176KV-YGjbGOIwplMQzkqAAKTQcMKsKarCB6g1GzQm4CleTyIRzKAAfWkDl4jeESFrtc0AGISCQsAB2AAsw8rNbr8BgTZbbZg-c73ZAfYHI7H3In9enzbIrZ4zcYrkocE7vf7Q9H4-ota3TZmUFk7foi67vYgeCwWAAbAAmK83qc7xMR95xIF95DfD9vz-Ddr0nBtG3vR84EPY9FzPftNFKMUAEp429YQNTIJUsxMAB5O1pFGEMADUAHFI3KGkHHkAB3BkzCyH910UShd14LieJpMhKFY60jSyNB5Ck7iODQGThzktA0jEQ8qGtTZZAcWBzGmLJRlY6SjNk+T5BM5TiQkHRGDMeRyAQLIe3k5yLLsig4DI6yIGcYIsiwNJxlgWRKAAdQ4rhJI4GDah4ILKAAGRkSgrhgGQmRgXSpjSRlNAAWXkT8OBwYrh2wPAOAAZhwYcKvi+QAA4ooqr9SqHDgvxa2r5BwJqsFairKvqiquvKnA0Gq7A0A4PA0DwLqsCmn96omhaOCwH8cHmrAipKjAvzkzaf0HOqsAGwdxtaqb1s2k7GrQZbLum2b5sUwcvxHbABoqob5vKt7uOwQd2s6-Kf224qJp67ifyOk7FPq+7Ssa388B-L8TvB3bMfq2HurWsakfan9UfRgqdshqLhxh475CB4c8FHT6iq-G75HK+rcFKn8puKoaMfJ1qgaOtB5saocJu5na+YK-aGcZ07mdZsGBYwKGqaO+QAC0IJAAwSQeZiinjH16RIiYoAAMXcyhM3oxiwGYtjwsEtJ8n4ngXZAeRhNE8Sokk4zhzM9cSWs2ycpAXL1oKoXjqwMX6rMrA4FWbaWtWIGRfimG8e4lOgdwVZ2qweLo5-PHcAa9qKrM3Phzgcrhy-eRXtq9ny7BgAvTQ9dJQ38PoawITAeQyPoXVJgcSh5GiURphH01Di2DhtRgZgglGERNU3QjYvMLZpxzHRYD0HDt7g2swHMHRKCgI+T7APCJ1rMxLQ4U5REjasL67UsA2CqYnYSCzF8M-J08ZaxignMoaYt8cxn2-l2Scdgah-31DbSMr97Af0oBwNBACIFdmUDwSw148w-1rFSWkLwkFIKoXScYuRKCqGAFqZgJgnD0HEvaNep4QBYGUMwNIYoxQ0NoUg4AAADJMADOwABJgD4JtmKSRUCKFdnuByMR4iJAyKDGA8RKEjyZE0PFVCcAsLqKQcICe9Ap4sIMqRT+qgijyCwe-PwTjKA5i1EowB8hHETFEHgssGDcJqPEUgvxLC-ERMiXrAx8hNHULAU-OCai1HehQj4HUZYgwABUYAOAcFQGeUQ55TAXkvHgK814bxVOfACKCoD7wdHfY+MBT6NK7FfG+7SH5pKQe4nBX9El+KASAygYCxSELiTAqYcCEFgJNn4zBXA344JCf-G2hDazENIfIchOitGJMoXoisViuxGOPFkMxxjLGRK7DYrgk9mHAECTZaeLi3HrOwZ4oJ3jfGhP8R84JqzwmnN-sCmJwK4niISZcyhHIYpMJYWwjhMhCk6D4QIwEwjRGQsoeaS0NtbQ8ITIiq55isiFOKVQB5jyuyUBpCqMAaLCW0JsdIfUnZ4EulccM-5nyfF1mBZ2AAhOCnCHLIFwvidoyJyTOSJKVQqwZTpsIUkHrveQABBHQOhIx8u+ROehCr6F1myWAAActKdKhl6AsimcSFVjBFDKDUF8e0TRfitEsNYQEnRHAgjcB4Lw7osSrAWcwGAAQNhbAMD2Aw+D9Fe3NlPD2mhGyuBQnIYoIYCjyBATATsAAFaMow7LTjNNU+Qqxcn-yDPIaNMB7iMHNeyFJP8LVDx8La1g9rigquRb2m1drNA8GcPS4kAARFQjBzBwFQcC1Vw7aSWuHv25hmghDr3mCIIdlzdF5KNM2+di6eAyIwQinRnblXdrveakdVqt2DpdeontL7x0gEnTwadRQ7nHlXR+59m7v27vqQe99jzj2NtPdckxIBAMWK9je2hwG6GPrAZ+sDA7NCwFYoe4567R2vonVO51RQZ2WjUjbDD6HQN9vA3U-drJoOKvOVEeQCHbnmOyjRnN16FWUKww+k53bGNjrwyAAjRGGMka-dJ39-7tTmHGGvU2wh6N0Mk2RxULHN5seExozjtQyCd23SAIsZBzBCK9sRYQY80W1GYp2Xxwg548E7A5+gpFLbW1tgxZ0IjNP0DIv2ZzDsHBueQZ57zZtyKUSSrRILTpnRocw+JzLXadMKdw5Z2T7Hct0lI9+5TlGx6itedpjRunmN7sM3JnRY9bFT3kBljRonsv3uKxupj0nCvGZw-1yz5X81+EnXYn509Vk4Jq0ivLI2sgQdY019DnHaUlOnh1kTWXOt7YWyVxTBWYCEaK7VxbUnRsUfzdmOjXX5NHfy8tgzKo1t0NMzx0xfGvYLOAReq9UwUVUGc7ePhK4cAI1ciFnbSSHu7Zyxdp7S38Onfe0kurSmbvEnyfkIs82MeXb0ytxr52Psnq419pDP2z3-aXYDvrV2siFhtiWCnaRYc1a55jk7hkb5RuAqsB0ox0fDaZ+Rv9lHkOHKQm4+YOECdi+J69qDxmzkU+49S779zUNDfh3Dg7hPkfi5k6dt0+wkJC-mKLnnzPsdUYE1QIHOZZfC8oAr-Xh3GfK4a29snJmNdU+Q-xsAtGgd-YXfT4F7W9eG+50T79BHzcC4fFbkX-uldlft7jwNzvXfy8V7bndKujOQtg8mSnWvqc69p5Hy90fStKbx6zlNFZdcqv1-R4DpRF5HBnWRXKHB5lwNNfqw1esMATimDACAtmVSOD8AAUQ6CIa0wQACSUw8ym5ZJoaV9A8IKggxQW+7BXDmIVLyAMk7CLsCWkgeq4pJQgCYKwdgeCfBH48yqdg4oiAgColkBoFQClDf1lHjRqQWRZTmB0FsBqXlGIEsEQFlG+GaF0h0C0jwTXgMAgIMFsymBwOqQ4CgOPE6TgMJAVByBvnYDJCf1AJlBk2qSjTXmIOZVINgPnwQJACQPYFQKMHQMwN3UIKOGYOYDwOYAIIgNENYOgLIM4JoGICoIYNoLFAIDFCAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { Checkbox } from "polythene-react"

<Checkbox 
  defaultChecked
  label="Label"
  value="100"
/>
~~~


<a id="reading-and-setting-the-checked-state"></a>
### Reading and setting the checked state

See also [Handling state](../../handling-state.md).

To read the checked state, use `onChange`:

~~~jsx
<Checkbox 
  onChange={
    newState => this.setState({ checked: newState.checked })
  }
  checked={this.state.checked}
/>
~~~

<a id="example-managing-mutating-state"></a>
#### Example managing mutating state

In this example we show a simple form with a checkbox to accept the Terms and Conditions, and some other button (for instance in a details dialog) that also sets that checkbox:

~~~jsx
import React, { Component } from "react"
import { Button, Checkbox } from "polythene-react"

class SimpleForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
    this.setCheckedState = this.setCheckedState.bind(this)
    this.toggleState = this.toggleState.bind(this)
  }

  setCheckedState(newState) {
    this.setState({ checked: newState.checked })
  }

  toggleState() {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    return <div>
      <Checkbox
        label="Label"
        onChange={this.setCheckedState}
        checked={this.state.checked}
      />
      <div
        style={{
          marginTop: "1rem"
        }}
      >
        <Button
          raised
          label="Toggle"
          events={{
            onClick: this.toggleState
          }}
        />
      </div>
    </div>
  }
}

export default SimpleForm
~~~



<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the Checkbox appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { CheckboxCSS } from "polythene-css"

CheckboxCSS.addStyle(".themed-checkbox", {
  color_light_on:    "#2196F3",
  color_light_off:   "#2196F3",
  color_light_label: "#2196F3"
})

<Checkbox className="themed-checkbox" />
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Checkbox CSS classes](../../../packages/polythene-css-classes/checkbox.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/checkbox"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<Checkbox
  style={{
    color: "#2196F3"
  }}
/>
~~~


<a id="icons"></a>
### Icons

To use alternative icons, use options `iconOn` and `iconOff`:

~~~jsx
const iconStarOutlineSVG = <svg width="24" height="24" viewBox="0 0 24.00 24.00" enableBackground="new 0 0 24.00 24.00"><path fill="#000000" fillOpacity="1" strokeWidth="0.2" strokeLinejoin="round" d="M 11.9994,15.3943L 8.2364,17.6643L 9.2314,13.3833L 5.9094,10.5053L 10.2894,10.1293L 11.9994,6.09327L 13.7094,10.1293L 18.0894,10.5053L 14.7674,13.3833L 15.7624,17.6643M 21.9994,9.24227L 14.8084,8.62526L 11.9994,1.99827L 9.1904,8.62526L 1.9994,9.24227L 7.4544,13.9693L 5.8194,20.9983L 11.9994,17.2703L 18.1794,20.9983L 16.5444,13.9693L 21.9994,9.24227 Z "/></svg>
const iconStarFilledSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>

<Checkbox
  label="Label"
  iconOff={{ svg: { content: iconStarOutlineSVG } }}
  iconOn={{ svg: { content: iconStarFilledSVG } }}
/>
~~~

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of the checkbox icon and label is reversed when the Checkbox is contained within an element that either:

* has attribute `dir="rtl"`
* has className `pe-rtl`

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


