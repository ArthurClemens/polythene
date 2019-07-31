[Back to Polythene Radio Button main page](../radio-button.md)

# Radio Button component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Reading and setting the checked state](#reading-and-setting-the-checked-state)
    - [Reading the checked state](#reading-the-checked-state)
    - [Setting the checked state](#setting-the-checked-state)
    - [Maintaining state](#maintaining-state)
  - [Shared options](#shared-options)
- [Appearance](#appearance)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [RTL (right-to-left) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

* [Radio Button options](../radio-button.md)
* [Radio Group options](../radio-group.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgRgCYB2AXRIDMBLJGG0FEwBbZGgB0ACwAuw+MXRRpiJahAAeeNygBrAASTyiTgF4AOiBnTcKAPS3M5aZICu5MElGxxAc27OXACNxbggHGDxpGFtsBABPZxVEW0QADxFsPltOTxhxMAiLPSN4c1JpOL5JRERpCwA+Mygm9TJybmxpPRh3Mqsbe0cA908VPL8A4NDwyOjY+ATqqGSYaUwofEx4aGT5xaSAWmF-Q14Y+MTlo5P2+APV9c3t5fEAKxgG9Vs2julG5qgrQov26vQs-RgdgcTlcI0QXnGJyCITCmAitTmFyWKzWGy2O3OC0uiAOBUxROxpIi91xTx2bw+IHqXx+nX+LXw3AAbnpuPgypQIHUmV9OVz6go8EgwNJQrA1LQULQDgA2FBMBggAC+REEIjEIAZCkgShU0jUJtWemAegASphORAAEIuaTSaBEO0O0IAcUoLmwei1ehMej2xIA3E1LV0bfbHS63dAAMIAZVTQZDYaxSTTqajAPjoUT7qgefEDvwqYqSAAFBZxIlRPgDuRvRADoFXaWLJ7gE09HpINtyAB9LQ+GSj6AoQeDiwAYk4nAYLAALGvewOhwgIGOJ1OIMvZ-OQEuV+vN8Rt8O9+PuJPpOPMIFEPBZ4vl6uN1uoIPb2OmzkDo05QCec6LmAACsDAMCqTC-v+u6AY4IFHpw4F6JBMFwQh15-juI6jkBIFYK+76nuenAWE0WoAJQFtG0BWtwJrVo4ADyrpaMsqYAGo+lmFitFyPh6AA7nyzjmGYFhMJuskgAYiAPjIMlyQpRRctwiDiU6ECpOpIC0HoJnyeItBmWuFm0LJRQqC+SCdpgYA6D4-obEZyziaZvnmZZej+bZinMtgmDOHoPDwKUdlnpZ8XBUUUV3BAYVgP4cRGQwsXdNIlA6CSkn4NJsW0OICGKbl+UkjxiCvBA2hGR5+A5fysUALJ6LB4gAJx9WujBQeIADMPVrsNAAyegABzlcNKoDau4gqgtk16D1c0MItw0jdNw1rUNPW0GNjBlVBtBQWtDBlUw00ndd4jMD1V0ML1-VECqFnPawU0MDtLDHYtZVPVds20HdQPiOdl2-dZLAquujA7cNe1XUN8PyYwLDLatnUam9J0bfJTA-V11nTeDA2zfBUFMCqv2vX191vdNpMbQwR1U8tTC0-TXUEwNRNriTLBTdja5QRuSO9Sqz1TUN00cwNTBlX1e0MwLWPlQDoOPSwJ0qyzV2fZLUt-TLcuBYz71CyLegAFpYYptjMt8omNCABYxrybFrOQABivBIFWAlCRoMCiRJUmSEZ8k5dUqnSLHmlKdpun6YZpV+WugUp6F4WSHobWKe1zBddjP0MLNVdW3cr0LQc2O0JNJPreVa53NjHMHMtDATWXTBtxzM3LcNgVt-J8BDWuKp6HDk0K4PGoAF6xS7LLuxYjFQN7HFlpI6w+IgWa1nRIb1NaTRmNI3sPMoWb9gR-7VK5BB8VsLiIB+IB74gNEEVqAs84CJGGkG4P8j85x6DTuJWcXIoAQHwMfEwF9IFQJ3LALoYAX4FXwO-eAn8sx30QPkHBb8P6ICAeg0B4C9DCHrCAMUvY9DUG3OguhDCmH4XYVAm0qxKhf2tHQxwfgoD6STMIb+DAjDCCKMGHUbCeEAAN8Gf1nAAEmANgxAr88EUJDCYUMLgNjGG0AQPQAB+LCIAAByQpui1CKLObRujVGIC1EoxRUC6JEC8XOehRYIB+ggAGPsfioFCFEN-FMB8oBH0QjwwcMTD6CNrDaLk+j6Ln1yuFEhLjcFuKzBkghiBfFPx4SaZQShZysPKYktBiSoHFLUdY3+CTGlzjIm+b+bTuEdLnEgzgmAXDwGkMmMh+BZx5U-mU-pQZZn9Iaf05pgiLAABVxIQHaf0rpFF1mbO2YkrU4S5xsBOfRPxbAGKKOOQAgsgCr472Yl0AAgtgQMoY0EwNnKfbJtSoH0IbJQcS4gEHKGYf89BgKQCYGYUsqBhhjDfwhFCIYsIPDwjGL4JEUwwjhkpEg4QEBojHGcLcWwC5bBtkdJ2bs0BDlzj9kfaQ39RyBCwLof+7CdTWNTDUPQWw4CzgAAo5mWJFPceh2o3F4HoA4XpHR6BLNAIu8ItkgDoooq5CzBzQvEMCiFfi9WymkEgZhFgAAixhhmjKHBMiwPijUMPyBAYQsRlhKAZdfAJ7ZgmhJOdfR+18OmRNWYw61Iyxn2r6R0ypZoaknPYfC5ZFCenLAZR03Zaa-4xv6QoupjTk0dJWd-DZ6qdVzL0Fm6xZaM2NMGTaqNOjcFTPIJ-RN6DblzLOQWqBXaeGaoLYOqB2rFF6oNcQFhTqGwmrNZOy13AYCOQIA6iturnWQDdTsT1ub5yyFrIEv12A10QWkEGrojTQ3f05Eu9lK7d08K2BRIt6Dr43uXZMvQ0y-69s7Se9hcbqlTt-Umjt7CS2tPTQ+zNL5umQZzWBuc+bK2XxAzwiD+zy2IagdWzDdbEkNsjeM5tBBW3trQ32xDPaOn9vYcO9B9HByjvKeOiA4lDUFuNf4OdnoLDJhcKsV1Pt6UapPXqzd7qzRev3Ye-0x6A1nqvhexJV7rFgAE+6YQBxWIif-egp9s4X1QOvjpqAe9DPdFErOYQjY22rFrKZ9iAcg4EH4j6M+yHK2mY4seIREcfDWdsxphzvtOLcTMW5jziHPOxugFUllwGUNGfQ6m+D+GeG4Z-lB7D8ycvJfA6lvD0HGmZdrcVgjEbRnEd0WRn9KHaONOo40hr3i-GMb0MxgFzqJ2ekhV1md3Gc28ay3alJq7p2Ggk9u4UJ7vW1j3uMlJ7XBztc6-47rbGOPsK46aobvKaz3sdZxjdrrJM7tmzJ31cm9OBqUyG-U39+HB3S4OAzqG5nXye4Im0AFv7nh6hTWySkWs8Ji40wDCW+uLJy4ODDWWhsw6rbBvZ8OuWVrBx0-L6C4dlb04k0rBzys8MI1ViZtWcsg-YU1o5Jzlt6FW0d-rhoeuJahc62de31nVGbON47DYpsepm34ubsmQnyd-bd5oymeGqYsE2e9eO5xvax-+LAEQbEPesfLls1LQi0qTM0EA0XFdIVNEBqHmPEdw96Sb9BmXekU9t4OFXc4ceE6d505Hpb3eI5J02mrX6211fR1RjtlP6dta1Yz9bQK2PiGwCSEiBxSx7Ytxwgbu3zUgCtUMyNdqSP4D0LWEiX6diatExNl1W7BfSZ9Y6I9N3FNS-u1E6xfvqu4IOCRF7GD4sJoo3OF3sPCuo6J+w+3UGPcY8LVbkfuPEcE6wwPqB7eyeB-I-V0PaHw904ZxW1jIKE9d9QsnnYW22cZ549Yi1i6P1F5Lyn8v0emdV7O0LgtIurti8b+elvYb313otjd5j4CrRSGY5YAHBzk4D7T4AZxbxqs5zJD7QIj424L5e5pZG7L65bYHIFu5L4oaDiL494r6Vb+4trr7B5zLh4jph606R7lJrbrqx6H6J4n4p7n4v4c5Z5rLc7mLF6oSl7LBP5iYnbV5SYPqf717XYKa-6Xqa5y58FAGoQ97K45YeBogwAa6t6KGYo67tj649hYHUG24Q795Jaz4lLZokGe7kTWHGHo4e54Fz4+7YFEEYFFYe6Dir4F7QGb4D7U6g70FDpR4LI9oPIAg2ZErGLSDF4QDqZeDSC+C1AACiowSgTocQAAkvgAwoKMKD4noG8tgAxJKG+DorKMxGoMNIqCqJqDqHqKIGoPkBEMaPAaoBIEfpUpQPAPHiSLrh2N0QgHoAANR6B9GkhxY9ETEDGTFKA9HvbCLkCiIHBICcAJZri0DYCpD3JNBlHSiVHyhoDDRKjagcAgA8Q6D8AoDUCNEGikqnDwAAACywqQ5oJAbg8gaAKK9gxi2AbkVetgDxtwTxTAFkFkrYYAy0QJMqvRxwUARoJAFQCeagrI5oWobAWoQAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

Radio buttons always come in groups. To simply show 2 radio buttons, without handling their state, does not make much sense:

```javascript
import m from "mithril"
import { RadioButton } from "polythene-mithril"

// Inferior solution
m("div", [
  m(RadioButton, {
    name: "company",
    value: "1",
    label: "One",
  }),
  m(RadioButton, {
    name: "company",
    value: "2",
    label: "Two",
  })
])
```


<a id="reading-and-setting-the-checked-state"></a>
### Reading and setting the checked state

Radio Buttons will generally be used with a [Radio Group](radio-group.md) that manages the buttons' (singular) selected state.

Equivalent to the example above, now including state handling:

```javascript
import m from "mithril"
import { RadioGroup } from "polythene-mithril"

// Better solution
m(RadioGroup, {
  name: "company",
  buttons: [
    {
      value: "1",
      label: "One",
    },
    {
      value: "2",
      label: "Two",
    }
  ]
})
```

Note that `name` is required when using RadioGroup.

See also [Handling state](../../handling-state.md).

<a id="reading-the-checked-state"></a>
#### Reading the checked state

To read the checked state, use `onChange`:

```javascript
m(RadioGroup, {
  onChange: state => vnode.state.checkedValue = state.value
})
```

<a id="setting-the-checked-state"></a>
#### Setting the checked state

Unlike [Checkbox](checkbox.md), the checked state does not need to be set explicitly - this is handled by Radio Group.

To set the initially checked radio button, pass `defaultChecked` to the `button` option:

```javascript
m(RadioGroup, {
  name: "company",
  buttons: [
    {
      value: "1",
      label: "One",
      defaultChecked: true
    },
    {
      value: "2",
      label: "Two",
    }
  ]
})
```

or use `defaultCheckedValue` on the group:

```javascript
m(RadioGroup, {
  name: "company",
  defaultCheckedValue: "1",
  buttons: [
    {
      value: "1",
      label: "One",
    },
    {
      value: "2",
      label: "Two",
    }
  ]
})
```

#### Maintaining state

<a href="https://flems.io/#0=N4IgtglgJlA2CmIBcAWAnAOgIwHYA0IAZhAgM7IDaoAdgIZiJIgYAWALmLCAQMYD21NvEHIQAHlI8AThAAObAASkpPALwAdEOzazSSAPT6ptAO4BzCGwz8w+gIJS2LAK5SAwggbVS+2X1gAnk7C8PpgtKRCUr60PADWtGbwPn6BwdTwALSQTjKw+lAQkb7+QSwh2ZYseZmRtNRQtLAC8BgAVqSaAHxi+pIy8l3q1BLScorKapraugZGphZWNvaOLu6ewiml6aHhkfDRsrEJSVtp5RmZPKQ+hcWpZRXXpLVs9Y3NGe2dID19Y4NhsNuCBSPAEDw2BABOQmAAGJBwzIAZkRIAAvngaPRGMwOiD+IJhGxRIYFBAwH5HAowApCFI+LTNDlqiRNMMyRSqRM2FJ4PQ6QymeAqnk+rz+WB2dROZS+NTgAoAEq0Qp8ADiDOcsjwCgAQs42GwBAp0YLGQpNA8dpVcmyQMNCZElBKBaoaRhInz6I6YYpFSq1Zq+NrdQajSaze7rRd4EDqE7FAAxeW090ACgAlApVF0FMBhgoFIm6amACK0N45-OFosKOgMJCWkAhtikaBx7i1otQeCEWjOWBsNzleLwKAANSazngTc0MjM7E0eG7CgAbtPkk2KKuiwXqHXD+vN3OQAhCGxl7u67BaAAjcGngAyfcvXYPR8x1-3R7rG9gM6nguS7vr+Ra3g+sCnkqECLm+K4foeX6IQoAC6tborWfJsK4B4-nWAgQNQlhNumip1EIprZrmNYoUWJY8KOcTjlOAHwNWXqSumhDlpWtAYL2-aDsOTEsZumYANzXgA8nebTwJCGARO2ZjUOmFHwLq+G-oxCnMZOm4Ib+6KZquyGHmuEDwCYpHkW8lEmTmebaXWDGiQZbEcfZrS6WOHkzlm17YbhNLppohRrsuCg7nRdZgOmgbQsGoa0WBdYNrOpZSGAFZvBgGVGWlxbuaxM6FWlAgjvUSS2cenmOTRGnWCVm7pv+M6ZuVYGEkIghNjx2W5fx7XJNeRYmV1h5kgAyhSg6VuxYJGkRZgKMECjGGqCh3oaxoHhp5q0q27a9kgY2hZoGCyFkO0RtQmQMiYUUxUVoXhntWnnYeEGPs203wIoL4XlesW-sYRTjk2vJlV9dbwGuxJ6Klr0EQmsAQPEpHUXmTW+fppXwGFZ6vponWw+NsMTbD8XvQIn2g0eP1QX9APKrBIGTWB4NglAUNSDDDOHvDiNNi5r0CDw6OYwoWZOS6C3NXpYlsUTwFvmTgt1phmsmedqGmbF+tmRhwza8MYAYGAIaCOmUB8DwzheFYd58FAAS6im2UGwSjKyCQByiHe97giCYIQlCMKiMiACsSAAEw4BiWIgBlojWDcPtEiITAu27yNHDAK1NnHcKyAAHlJ1Da1dWSbdCmRmFqsgKAA1AoNeZLde0PXwJjI+EUgWPdxqyMXpcV6bwwd3XfBXAIvL+K37fXQ9qr1z1DKwP3tCD0RmTnmwTYoOPlfoqH4IKRH3iiAiSIABxIFgGKoQQ6PUHEsJUCnOKiCyeQAAK3iEJEEErguBMBmHoQwzhqCyDiGYawjIwiihIP-LA2AMAADZkF2lgN8EEbAAjXVEP0cYSdsQMF-ig2ArxvRgEAQtEBBAwGiEgXMGBcCEHLD-iQWhko0EYLhOKOh+CCCEOIUwUh8hn7oiAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

If you want to maintain the radio button states yourself, for instance when using a state management solution like Meiosis or Redux, you can either:
* Set option `checked` on each Radio Button
* Set option `checkedValue` on the Radio Group

This example shows the latter method:

```javascript
import m from "mithril"
import stream from "mithril/stream"
import { RadioGroup, Button } from "polythene-mithril"

const Form = () => {
  const formData = {
    name: "outside",
    defaultCheckedValue: "right",
    values: [
      {
        value: "left",
        label: "Left",
      },
      {
        value: "right",
        label: "Right",
      },
    ]
  }
  return {
    oninit: ({ state }) => {
      const checkedValue = stream(formData.defaultCheckedValue);
      Object.assign(state, {
        checkedValue,
      })
    },
    view: ({ state }) => {
      const checkedValue = state.checkedValue();
      return m("div", [
        m(RadioGroup, {
          name: formData.name,
          checkedValue,
          onChange: ({ value }) => state.checkedValue(value),
          content: formData.values
        }),
        // Simulate setting the radio button state from outside:
        m(".pe-button-row", [
          m(Button, {
            label: "Set Left",
            raised: true,
            events: {
              onclick: () => state.checkedValue("left"),
            }
          }),
          m(Button, {
            label: "Set Right",
            raised: true,
            events: {
              onclick: () => state.checkedValue("right"),
            }
          })
        ])
      ])
    }
  }
}
```


<a id="shared-options"></a>
### Shared options

Use RadioGroup's option `all` to pass options that should be applied to all Radio Buttons:

```javascript
m(RadioGroup, {
  name: "company",
  all: {
    className: "my-class"
  },
  buttons: [
    // ...
  ]
})
```



<a id="appearance"></a>
## Appearance

Both Radio Button and Radio Group can be styled. 



<a id="styling"></a>
### Styling

Below are examples how to change the Radio Button appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
import { RadioButtonCSS } from "polythene-css"

RadioButtonCSS.addStyle(".themed-radio-button", {
  color_light_on:    "#2196F3",
  color_light_off:   "#2196F3",
  color_light_label: "#2196F3"
})

m(RadioButton, {
  className: "themed-radio-button"
})
```

<a id="css"></a>
#### CSS

Change CSS using the CSS classes:

* [Radio Button CSS classes](../../../packages/polythene-css-classes/radio-button.js)
* [Radio Group CSS classes](../../../packages/polythene-css-classes/radio-group.js)

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/radio-button"
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

```javascript
m(RadioButton, {
  style: { color: "#2196F3" }
})
```

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of the radio button icon and label is reversed when the Radio Button is contained within an element that either:

* has attribute `dir="rtl"`
* has className `pe-rtl`

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set



