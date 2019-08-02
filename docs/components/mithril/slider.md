[Back to Polythene Slider main page](../slider.md)

# Slider component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Reading and setting the slider value](#reading-and-setting-the-slider-value)
- [Appearance](#appearance)
  - [Icons](#icons)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Slider options](../slider.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgdgGYAmAXRIDMBLJGG0FEwBbZGgB0ACwAuw+MXRRpiJahAAeeNygBrAASTyiTgF4AOiBnTcKAPS3M5aZICu5MElGxxAc27OXACNxbggHGDxpGFtsBABPZxVEW0QADxFsPltOTxhxMAiLPSN4c1JpOL5JRERpCwA+Mygm9TJybmxpPRh3Mqsbe0cA908VPL8A4NDwyOjY+ATqqGSYaUwofEx4aGT5xaSAWmF-Q14Y+MTlo5P2+APV9c3t5fEAKxgG9Vs2julG5qgrQov26vQs-RgdgcTlcI0QXnGJyCITCmAitTmFyWKzWGy2O3OC0uiAOBUxROxpIi91xTx2bw+IHqXx+nX+LXw3AAbnpuPgypQIHUmV9OVz6go8EgwNJQrA1LQULQDgA2FAsACMIAAvkRBCIxCAGQpIEoVNI1KbVnpgHoAMpafCIchEPQASVNem1ehMej2xIA3E0rV1bQ6+c6AMJ2u1en1+rFJaN2oMA8NO8jJ8SYfD4O0VJAACgs4kSonw90dzosruATT0ekg23IAH0tD4ZC2AsJAi3oCgG4OhxYAMScTgahgAFinNfrjYQEFb7c73FNA6Hm8Ho-HnDnUAbTaXbe4HekXfImDAOhbV9lXMQG+3IBHAA4WIENeP94fF8vT520iXteLbaHe3KPs+I5gAArGAmCIAAnD+C7NieZ4XleN5clsLiQZuO4TtOs7EPO3a9jA3AAF74VudFDhqr5NNqACUqbBtA1qBC48DwDAACicSIB60B2gAagA4vGFitFyPh6AA7nyzjmGYFgsLOakgAYiAAdIqnqZpRRctwiAKQAQhAqQGSAtB6HZGniLQDlTk5tBqUUKiYIESAHIEWE+JQLgbDZywKfZEWOc5ehRe5Wl6KkcgoDA2BXogNnYEYeDkA+Hkiqlzh6DwvE2SOznlXFRTFXcECpWA-hxDZGp5d0QEQDoJJKfgKl5Rq4hMANA0taslAdQcWjLK8EDaDZxzKOQLX8nlACyegaiwRAsJGegquIU4MAwGowZtMVELt+0MCwp3rdtG2TuIMEsCwr47XtB1HZtV3rZ9233Y9z2fTFd0MA9T0vU9RA3UDZ1vZda0g-9r4nd9V0AFp6Kt31Tr952MUwRBTjF9AI6+k5E5DW3kxquOvkwa00-jLB2SjtDbSTk4bUzehTpDDPcxT208+zDB6MLG2E1jejo5jG0qttr7iCqr4qiwiFnTtRAK0rKp0yqAsa0d-UakwIta8rquQy932Mb9MFGybltrUjhtMMbIuMfrHtmzra1267DsqmtstSxjQea79rlM4hGqa-TRCIeIDCIbQiFx1D1OQ5HKcamtWfR7zYfU9tCdJ7QysF87ec587lNIyXyep-XZd61bG0vdLhes2ttDiK+iEwTzGrM-QQ+9-3Esj5TQ+Q0w4hD1Ogej33A+Z4X2NrbP896xqEuD5vtAL7nnuDz3y8S-vC+Q8zd12ejeW2My3xyY0ICpiGehcggLiiCJUDiVJvoZIwDkopZSkgbIaRatUPSECjLaRMmZSy1k8p2RcjFOBzICqSD0EtLSy06aIS5CqSQU54AwT0DBMSU4AAyItEIAAkmBUWEMbB6egmBgGVH1A6Bw+q0BYAcWeqsDgsAegcVytAmBcgVrQOCfUpyvgOInOmoiYIiPECwchqjxFORYFRZaO92EaKkaI2gKowCiL7r3QO5DZ4Dwoa9Q6MB1EahznbV8ajyG7UOlyUx5iJEaiUdHUWOipypwYAcBWB1nGiMQohA4INlYJMiYnBgVF76P2AT4F+qZhxQHfgAQWwNgeMdYDwf1MgpAchYWI+nqHoag84GzCGLEaSgClxBQCFIgGsDSmmDhaRYTAvSyn0UMMYAc4JpDWEhIMGEbgPDwjGL4JEUwwj+kpE6YQEBohzVOPAWwI5vhVgWqRcpW41jkB8LUSZIAWw+XWDoCw-SGy6j0BYO0NQ9BbDgAOAAComZYRUlwYxuLwPQBx7QnJwfCCAFgWL9LYCxIg-TBltIgApXpjTzkDNaaWfwSBekWAAHIQD0LVWUnE9CFkvFAa59leHOVdKsRAuBigQGCk6fAehpBko1AikAyKXl6DRfkCAwhYjLCUESnFQ4WnpmdAi2VDYlVDiRSinFor2lYuFaK2U0hCXEHeSAAAKmuHQMBqVD1aqymAAqhXKtFZACVOxpVGuFc0wsCqXQ2g9YOJ0nBMA8WkGJXCkEYL0D9Q2Fl2A7TUUgtPKNPLzWQh5eQPCfrWIetVYOdVqK8XaqNdirceqCU9PdaalNoDCrYG0PCjVJa8XOsleaGV9F5UnNrEmmNcaaIDkTcqocAag3wBDWGgcEaG30T9NoAcQE8JTvorKa8qb509MHV6HNm4t16DzZqgtGKdWOrxfqw1roLAABFuAwG8kgfA9bdVNvFS2t156N0dojD60Z07h3BtDfAPCE7I0bobJyG9PkCBzvTeu+iWbB07r3XKg9mKi2PpLKe8t56QD5kqAQB9x6SzNtdcKN97avWdt9SBmFga-3joocB6drVcMDm-Yxo85Bbljk4IhV8zlnlUe1Jmndg4EMOqQyWQtrpi2blLQazDxqTXVHLNW7BYAXCrHFbyU0+HG2EefcRttdEP0Zi7VR39o7-2Afo4uuia5+wisLL-UzjHo1yQHMIUs6bViFm4rxASQlf7-2E5uViNmtweDRDAYlBpbllgIJWT9-HYPBb0KJmzWrD2oYI0aDDRLsMRi09AV0taDyPGTSunTMmn0uqlSR9577yOfuc9O44UABwMZa5gVI-amXduULG+NPWwubnM2OgDkENpJpK1BhdSbl0Wpm4gYbQ5AjGCXJBFpTnKMue6G5kVnn1PSELJ-ADP9TRBaTXB5L2bEVidxRJjF4hsAkk2OQHQBxeXLCPbpnLZa8txqdIVqAxXtDfI2OVi11LXv6E+4ge1w2nX6dq4Zxt3rmvttnfZZbAyus9Y6-RHtg3u7Y9A8YEdY2rOTao9NtNs2qPzdXdBknehVucHW+5xzpp0fTqye5g73mTvf2EudySKXBxXbohL7dt30vIaey9xw73Yffaq+hv7Far3gbvVDxXPKdjw7Q0aIjyP3UNbR9tn9ZPaPjaA8zsDt7IO05g5LlLaX5xsGYuxKAHntnBSO-gCAamvDSF8LUfiowlDmTiG6fArTBTCmRXoIp2A2JNElIgaUlL5RoCHigJgOo9QgCEKINQ+QIgmmgMoVQaAdQcBABNC1Agi8GjUHs24Cg3DyDQBCKEwVsA6B8GK4Qtg2+8AAAKmP6iPsF8BxCteNCQCoz21CsgtNqNg2ogA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

A Slider with default settings (a range of 0 to 100, default value 0, step size 1):

```javascript
import m from "mithril"
import { Slider } from "polythene-mithril"

m(Slider)
```

Options to create a Slider with a range of 0 to 50 and a step size of 10 (step count of 6 including min and max), and a default value of 10:

```javascript
{
  min: 0,
  max: 50,
  defaultValue: 10,
  stepSize: 10
}
```

To add tick marks and pins:

```javascript
{
  min: 0,
  max: 50,
  defaultValue: 10,
  stepSize: 10,
  ticks: true,
  pin: true
}
```


<a id="reading-and-setting-the-slider-value"></a>
### Reading and setting the slider value

See also [Handling state](../../handling-state.md).

To read the slider value, use `onChange`:

```javascript
m(Slider, {
  onChange: ({ value }) => vnode.state.value = value
})
```

To set the slider value, use option `value`:

```javascript
m(Slider, {
  onChange: ({ value }) => vnode.state.value = value,
  value: vnode.state.value
})
```



<a id="appearance"></a>
## Appearance


<a id="icons"></a>
### Icons

To place an icon next to the Slider, use the option `before`:

```javascript
import { Slider, Icon } from "polythene-mithril"

const volumeIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z\"/></svg>"

m(Slider, {
  before: m(Icon, {
    svg: { content: m.trust(volumeIconSVG) }
  })
})
```


<a id="styling"></a>
### Styling

Below are examples how to change the Slider appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```javascript
import { SliderCSS } from "polythene-css"

SliderCSS.addStyle(".themed-slider", {
  color_light_track_active:   "#82b1ff",
  color_light_track_inactive: "#c5cae9",
  color_light_track_value:    "#f50057",
  color_light_thumb_on:       "#f50057"
})

m(Slider, {
  className: "themed-slider"
})
```

<a id="css"></a>
#### CSS

Change CSS using the [Slider CSS classes](../../../packages/polythene-css-classes/slider.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/slider"
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

```javascript
m(Slider, {
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


