[Back to Polythene Spinner main page](../spinner.md)

# Spinner component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Show](#show)
  - [Progress spinner](#progress-spinner)
- [Appearance](#appearance)
  - [Single color](#single-color)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [Dark or light tone](#dark-or-light-tone)
  - [Transitions](#transitions)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Spinner options](../spinner.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgVgCYGBdEgMwEskYbQomALbI0AOgAWAFyHxi6KFMSLUIADzwuUANYACCeUQcAvAB0Q0qbhQB6G5nJSJAV3JgkI2GIDmXJ84AjMS4Iexg8KRgbbAQATydlRBtEAA9hbF4bDg8YMTBw811DeDNSKVjeCUREKXMAPlMoRrUyci5sKV0YN1LLazsHfzcPZVzffyCQsIiomPh4qqgkmClMKHxMeGgkuYXEgFohPwMeaLiEpcPjtvh9lbWNraWxACsYerUbVvapBqaoFoUH5dHrmPowWz2RwuYaITxjY6BYKhTDhGqzc6LZardabbZneYXRD7fIYwlYknhO44x7bV7vEB1T7fDp-Zr4LgAN10XHwpUoEFqjM+HM5dXkeCQYCkIVgqgALCgAIxK+UgAC+RAEwlEIHp8kgimUUlUhpWumAugAspglG1NgARRAwLjeKAAZWwWiW5CI1ttiHt8CdLrdAAVKN5DOFPd7A36AJIAeXdsagPr9ACVMFw8PgAELOKRSaB+92afCB3Tq3TGXS7IkAbkaZs6lptdq4judro9XvTgYAwqnq7X65jEsP3c3-h3A13gz23WmfVOxJh8Ph3eUkAAKcxiBIifB3fs+8x+4CNXS6SBbcgAfU03mkD6VKF05gAxBwOEqAOzyvKF7XreCAQI+z6vkwH7fr+ACcAActC0CBUA3neEFPq6r4AMywSAX5gAwKoAGxMGhGHgZBOFSA+iqfoRCHIahxCNOqACUM4ttA5rugAKgAomGD4OgAqpmACC-HJgAcmOTAobQ3FQK2ujuhIEAAO4RhAUbOjAY67hxtZ1BaoFqfcShjle6E3l0qyOB+UDOPA8BEKBN4rIg2AfjKIj3EI2CmeZdn2TyHC6LuACEVmIGI9yOCZcUJY5nR1v5zqrEFM7hVRsCdNgkbRoZGVcAF2XBfsDkBqlgy5XlKXYIGYDGpg3iIGOHYSGIRxQLuSooX6g20GItC6DY6lCSJ4lSTJSbyQAVPWxUGVxnn2UIYiGPg5CYFpxkNeFXCRbuRV6SVuhqFNwmiRJ0lySZtl5fZWlaPg2nbYgACOzhZZJUDlbasoAGJ7SIu4pd52DrWF9nqhtmobc1bhtR1H6oXZ6oqTehhSK46HPfZnJcIgWkfrulq2lI5CGZxIVE+Fako61ijtZ1dZNS1aOIEd9l4wTuhCPuICiheujUBt4XC+YYtsXDL2My99krBUiAfkryv2RyMAZJgsQEdkqSUVreVvfgTgESNACkJum5tDi+FABHjeNinYCkuisVLysIwreVI-70u7uWvLxqF9s3n1GMeUHeVCJgKQfiNseRw5PkftTtProDCdKPgugAPy6INugxz7L2cpsf0fizPOp5H0CDhIazo1FlpV-Af3ViZxhmVzqNsx1Y6d39Df26rSAaxXys63rBuMUbKR25Hmy9gmShCBCjGs3a5gz+Fgdp5gHB2h+wtzkGIa9rp+kxme4ea6bMCaeTug02PB95XXQ-q-W3O-wmiXIaX8mZYHCARSUHASTGkDCve2awgb50zsWbOiC84EF0AAHywboDgmw8Dj0js4bAGwlAOlcMDaAKCaa5BIWQxAFC9oymgNg3BLk3JEK1pxL+PC44cS4fZLOuQX7aUzM4KAhZiysIAGQyKFrubMuYCBSJLFAS8X8sABEQPAAi4imjy3togTkxpt5PxetAdwXAwDaApr3My+444vShmlMcHD3KgNeu9T6hhfr-VzlQqAYMdSQ1WEoVKPkOKeKiU46sM8+EvVYLDQ+oFsbsRUmpSS2Bgp1iJiTMmdiQqSzhjLPUlAtJiCgIKRA4tikvVKZgcW5j9CGA4ARcEkJBgwncHCUYPhESTFCA2CklYhAQCiEcJwNwbBfi+A-cg8D7KOQ6lIAiD4AhYB0Pvf2mpGLumqLoAhEAPxhgnEsPBEFrTXB4LoaqK4qyjIgOYGJ4UklENKdtbStSfYfJlFIJA4tzCXwXLoa+boujzOeYIj5kAgrbEUIsqOu5gXdlDH2OMvoI6mxRgnJYig-LkD+vEl5eUSU3jeRtD55Tvn+1+X4AFxA9k7kwSi+AoKlzoV1hiv0LooDeCQGBe8UKfkizyBAOFeKhSCKRaysF6KByYuaTeHFaxjQEs-rE3l-LECDmouqxA0qVbMunrEqi94CI-g4EhFC2z7Z+24WS+yjqKUlNFdSxldT46ir+Qyv05h+JVGPP6Tsmx2VoohRi4VtLRWwpiJKxFCjZUcvuYqr+KrJX6sNRhcBMBZI6gIkeAgp5I0gGJT7Z1AjKVuq+R6kVB4fU1MZUCgMQYw29hWhdAyEaFVRvqTG8VcbjQJuFhpbSt8SoaM1a-fRqjqHv0JTUuOCTSUbRdcHA87q-SevXXqBtgKQCsrbeC86d9DJcoVX6dBAZ8C9q9QeWN8KpUzxHa-cdBlJ0IICcg+dGr7b0IDEwwJH4xDASXY6m8Fb3nVq0jSvt9b6WNr9SALgKZ1KQpAJW6N96B2PuHbuZMqZ5kfuxYGXFaqf0GuJYIyDVaN01q3XW3dCH90ofdGh7lRQcx5j9FgcgHVb07rFRKodhjlbCwIym4jWt03kY-pR2Je1lH4EzV-F0AAvP+5heP8dLWB8tq7MOCfKWIZq+wNjkG0PsNRiGJaMcPMxptB6W0grld2n0UVzN6Gs1EjD0L+3CYRaJvtSa0WSaxdJ0jqr8UUbLf7GjdlWDpMaI0LaYyJFSF3B9MAzhPBSB8DUQSIxFD5liAmfAIsBRCgEboLJMNGwSh0YgaUso+BoCYO+eUuENRahAIIEQqg8jhANNAJQKg0AanYCATQOhWvUG1P1tAkyThyBIK4OQaAOl2AkdgbQ3ghM2CWzcAAAkwMaYhcIHeufAXqWh9QkHKM1VQLITTqlYOqIAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

A typical Material Design (indeterminate) spinner:

```javascript
import { MaterialDesignSpinner as Spinner } from "polythene-mithril"
```

A typical iOS (indeterminate) spinner:

```javascript
import { IOSSpinner as Spinner } from "polythene-mithril"
```

A Material Design determinate spinner:

```javascript
import { MaterialDesignProgressSpinner as Spinner } from "polythene-mithril"
```

Display the Spinner:

```javascript
m(Spinner, { show: true })
```


<a id="show"></a>
### Show

By default the Spinner is hidden. To show the spinner, either:

* Set option `show` to true
* Set option `permanent` to true (for testing and demos)


<a id="progress-spinner"></a>
### Progress spinner

To show a spinner "filling" a progress circle:

```javascript
import { MaterialDesignProgressSpinner as Spinner } from "polythene-mithril"

m(Spinner,
  {
    show: true,
    percentage: vnode.state.percentage
  }
)
```

The progress spinner draws a circle between 0 and 360 degrees. The completeness is set with `percentage`, with a range between `0.0` and `1.0`. This value would normally be set by a progress function, for instance a loader.

For demonstration purposes, this can be emulated with a "step" function that updates the percentage until 1.0 is reached:

```javascript
import m from "mithril"
import stream from "mithril/stream"
import { MaterialDesignProgressSpinner as Spinner, Button } from "polythene-mithril"

const STEP_DURATION = 2000

const Test = {
  oninit: vnode => {
    const start = stream(null)
    const percentage = stream(0)
    const step = timestamp => {
      if (!start()) start(timestamp)
      const progress = timestamp - start()
      percentage(Math.min(1, 1.0 / STEP_DURATION * progress))
      m.redraw()
      if (progress < STEP_DURATION) {
        window.requestAnimationFrame(step)
      }
    }
    vnode.state = {
      start,
      step,
      percentage
    }
  },
  view: ({ state }) => {
    const percentage = state.percentage()
    return [
      m(Spinner, {
        show: true,
        percentage
      }),
      m(Button, {
        raised: true,
        label: "Run",
        events: {
          onclick: () => (
            state.start(null),
            window.requestAnimationFrame(state.step)
          )
        }
      })
    ]
  }
}
```



<a id="appearance"></a>
## Appearance


<a id="single-color"></a>
### Single color

For MaterialDesignSpinner and MaterialDesignProgressSpinner.

Use option `singleColor` to use only one color (by default the primary color).


<a id="styling"></a>
### Styling

Below are examples how to change the Spinner appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
import { MaterialDesignSpinnerCSS } from "polythene-css"

MaterialDesignSpinnerCSS.addStyle(".themed-spinner", {
  color_light_background: "#2196F3",
  border_radius:          0
})

m(Spinner, {
  className: "themed-spinner"
})
```

<a id="css"></a>
#### CSS

Change CSS using the CSS classes:

* [Base Spinner CSS classes](../../../packages/polythene-css-classes/base-spinner.js)
* [iOS Spinner CSS classes](../../../packages/polythene-css-classes/ios-spinner.js)
* [Material Design Spinner CSS classes](../../../packages/polythene-css-classes/material-design-spinner.js)
* [Material Design Progress Spinner CSS classes](../../../packages/polythene-css-classes/material-design-progress-spinner.js)

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/ios-spinner"

// etcetera
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

```javascript
m(MaterialDesignProgressSpinner, {
  style: {
    color: "red"
  }
})
```


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


<a id="transitions"></a>
### Transitions

See [Transitions](../../transitions.md)


