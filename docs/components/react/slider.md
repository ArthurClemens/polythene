[Back to Polythene Slider main page](../slider.md)

# Slider component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Ranges, steps and ticks](#ranges-steps-and-ticks)
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

A Slider with default settings (a range of 0 to 100, default value 0, step size 1):

<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDQE40CYC6GIAZgJZwCmYyKoAdgIYC2FyIAdABYAuTiREGHW4VhbADxxSdANYACTlArEAvAB0QPbgAcwSAPT6GUbpwCuUCJRZ0w7AOalTZgEbtSMI2DAVuYfdrwAJ6mohT6FAAezNqU-sTWdhDeGnJKcOrg3EFxnBS+GgB8anTikFCk2txyYJaZWroGRibmltaido7Obh5ePn4BwaF04WDcDHQAJgxwQuGBcCF5IwC0SgwQ3IOLwxRrFBvcK2MT07Mj7ABWYEXi+uWV3MWlD1U1dRoNeobGzm0UNk6TnMPU8DG8vn8CyWYXu4ymMzm2xhq2SUKGyz2aOO8LOcyuNxAhTuryeJRK4kmpAAbnJSJNMrAYNxbvoqdTCiAiD5KJsPLY2ABGJBoEAAXww9GYrCQHGuXJAgmEom4bCVYzkwDkAGUpJMKFAMHIAJJKuRiuQqOTQ3YAbhK6uqWt19INAGFtdrzZbrRiwh7tfa6CUXfqoAH2AxJpNtdlKAAKDTsUIsSbHPUGjRG4AlORyQSzKAAfSk9h4RecTBcRaESDz9YbGgAxMRiIKAOwAFk7Wdz+fgMGLpfLpCVdYbE-rzdbxF7dDzBcHJdIZe4FagGxkRcONIo46nICbAA5cC5Ba25wuB0OV+XuBuIFvpDvqXuD02IABWCAMChYS-9oWy6ruum5FtSMxmG+E7Tm2XY9lyfaVtWYCkAAXtBk5YQ2gpHiUYoAJRBg6Qgai4ZgIGAACiQQUKaQjagAagA4j6ZTUvYcgAO70qYmS4AhCgULe3D8YJ1KkBQXEAEIwJEmRoHIikCewaDKZ2qloKkogMC4lDSZu9iwGYUyZCMXFKZZKlqXI1laSAcjEtoDCmHIZAIJkTZqd59lueQcAAPLORAThBJkgqpGMsAyBQADqvGcOF7AAMypalkX3jAMUADLSBQlwwNImRME4mYOQyGgALJyIKuAYLgbpyAAbOwnbtu2gqfvVtkYC1bXtrgPW1Y1dUduwn64LgR7Na17WdfVg21QtjVjRNU0LbZo3tuNk3TZNGDDZtvWzQNNXbWtR7dUtg0AFpyNVS2ditfW4clGCdrZmDnUeHafQdDV-YKL1HslNXA29uCKddaCNd9HZ1ZDcidgd4NI-9jXI3D7ZyFjdUfY9ch3Q9dVNY1R7sE1R5NbgWC9c1GDk5TTWg016P051KWCsl2OM1TNMHdNS24Stn6c9zAs1ZdHPJVz2O4Wz8u88zNWizL4tNTVJOE-dmsMytGmQ1ggoM2D2DsO2OBYKbh1AwdBtoEbNX20bKO60DjVYObOBU67UvO4KchSwDl2exbDtyKH3us4LdXTUTbswzVaDsEeWCfsjgpQ5gmcp2n+PZwDmcHcl7CZ52Gs56n6d227T01SXZes4K+MZw3aDl07CsZ8nVf4235cHVDo2KXdGj6MS9wcYUQaOnI1LwGYLD0XQTGsVa7GcTxkx8RoAmpHkIliakElSbJ8kaIp6m2QhTkuZwcgVSAlWg1g1JNZwnZwJ+cifoxnbZdjLAAAJZKaEmBc3GnIZKEA0ArEFObdscDVK4BWCXGmKxcDjRWBpNAyVqTkzQN+eBnYjwrHNqDTBn4MHsFwN-Sh2DkFoUqs3KBNC8GYLQE1CAmDU4pw1t-Eu6cf4zQ6mAahgoA6iyPFQ7+LUOrUg4VwnBgoyGO0QRpTsVtEHk3amIzBWAsArG2lTIxKwdHtjQmPCeYAp7EToLPAAgtobQPp4wEUtIUOQfZKQ0meA2HxtIrDgjAAAOWlIyGAFk6DMgoEUPs-iGAKCUKoT43AdDfGaH8KwAIOgOGBK4dwngbSYhWPqJgMB-DrE2PoJs9wMxQFSOMKA9hfCZCLHpCYMgijanyHIGYYAYB1gAAp+hGG5QccgABKBxNhyBWDqepD8AQwDuAwPx9Y7jsnWXmAJ+Y4DBLCSwCJXE4nzgnLsoJ3hDkUEyNwJwlAighJgHIGAVR+RgDkPGDcdAWlKTgWpI0YwKC6DSDAEy+pJhyG4M8wUBFNm+PiRs9keyDnhI0IIJggQRjCFOdhcQoYDRyHHoinZbIEVnNJVsxFFz9lXLRSAWAJyiQkrkDS1FRyNB3O4A8okAAVUcMgPnxkzjUEQug4Vko5CytldKOWKhgJiuYOLmUUvOQSqASziAMAotwRikEbnAE-GgC0QLtDanQgazOFo7mPg+cS1VlLyX+Mlds1lyLLmhPpYy3F5z3W0s9XKrlPLCj8ttdxYE1ppDwqlQ6t1NIUWypueihVWKVQ+snPixZ+otU6r1XAKCKhDXGtFcC81GFC1WqhQKj52hpBEtdY6mNzqqWqplQGpNDLInpqRfGj11zbn3NiUSAAIqQMAulKCTGjQ2uNgT-X9uTYq7FLIVV4vVZq7VcBdX6sLUai0VJx16QoJC+1GaXXUvPa2v17KO3etXb63t876VBqHYUWMORj3TuldexNmQMWpuVTOnZ67s2bu3fmg1e7RUfsLVqRcUA6ywSwEeNSqQxQWlPecy9zanU9rnTe453adk-vbQO7lr7eV5FTOG1yEAzBjAVXSJUX7Y1toXfKpdab70ZpA8oMDeaC1FotKOIQhbxDLxqBxWD-ZlTCDrORSiNE6JKlXuaDDhQLR9ufVR496ZXQNIcphnDTaNnYbwwm0jGg70zrY8+wd3TXRMaEEaWt85ThVttSxjNJH2P-qVSuoDrLeM5q3QJg1kMTVirLZa4trmPOCrkC4ZQg4DXibNDY+w0mlQiDk3PBeS8VMsTU-W9T0qzONtdbZuVjLrR7GmFAGQKxoUjCI7Oiz7GX0Of1E5ugLm63uZtQl+M9X5DNYoBKlt3nH0EcXQBgLLLgNZr47mndwAIslrNRaitsW62DY+Ul4gKWxMSYy1loQOXuB1nnvmgrDEivoZK-Wsrk3TMveI9N39VnIm1dKcYRrY3WtVY7Z1kdY6J3Hs+SNqFcwJu4f8T5+lfnl2tcW-pjdK2IO7uLQe8HJ6bPldZWZljJRpmHGHQFSq7AlBTANImM54gnEuPHhgPskwYB0ZsNwBwvgqLtGENJIIxpJiJk7cyDQBEShEQVP+8gBo2AuF0hQfg4AlcUD5KRNgFskC4HFJKEAjAWBsHYGiaX52VRsHFIQEAUhZDUFQFKQ3soqlc-1K+WY2hOcEgVBYRAsovhNBMtoGQ9hjcKv0M7-Qi9Jjh5mS7igbvXme-lEQbI2gZTgGgI8XXDv0-O9KQq9gruleJ5VF7ogPu2D+8MIH4PoemAx8OPn+vUeG+bCb4X+PxePel+TyAVP6fSSW7FEAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```jsx
import React from "react"
import { Slider } from "polythene-react"

<Slider />
```

<a id="ranges-steps-and-ticks"></a>
### Ranges, steps and ticks

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

To read the Slider value, use `onChange`:

```javascript
{
  onChange: ({ value }) => this.setState({ value })
}
```

To set the Slider value, use option `value`:

```javascript
{
  onChange: ({ value }) => this.setState({ value })
  value: this.state.value
}
```





<a id="appearance"></a>
## Appearance


<a id="icons"></a>
### Icons

To place an icon next to the Slider, use the option `before`:

```jsx
import React from "react"
import { Slider, Icon, SVG } from "polythene-react"

const volumeIconSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>

<Slider
  before={
    <Icon><SVG>{volumeIconSVG}</SVG></Icon>
  }
/>
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

<Slider className="themed-slider" />
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

```jsx
<Slider
  style={{
    color: "red"
  }}
/>
```


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


