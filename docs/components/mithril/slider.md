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

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKFqlMnI2bDFNGCdC03MrG28nF3lMz28-AKCQsIj4aLKoOJgxTCh8THhoOKmZ2IBaPi8dDnComLnd-ab4bYWllbW5oQArGGqlC0bmsRq6qAaKD7aOsYujBLNZbA5+ohXEN9r5-IFMMEKpNjrN5otlqt1kdpidENtsijcWiCcErhjbutHs8QFVXu8Wl96vg2AA3TRsfCFSgQSq014s1lVaR4JBgMQBWCKWgoWjbABsKAATABGEAAXyIPH4ghA1OkkFk8jEikNC00wE0AGVVPhEOQiJoAJKGzTqzT6TSbPEAblqZtalptnPtAGErVa3R6vajYuGrX7vsG7eR40JMPh8FbikgABTGIQxAT4K62+3GR3AWqaTSQNbkAD6qnc4gb3j4Pgb0BQNd7feMAGIWCwVQB2AAs44r1drCAgjebrbYhp7fbXvcHw5Y06gNbr86bbBbYjb5EwYHUDfPEtZiFXG5AA4AHEqfCrhzu93OF0fW2IzxeDZqNebJ3g+A5gAArGAmCIAAnJ+s71oex6nuel6sqs9hgWum4jhOU7EDO7adjAbAAF44eu1F9iqT61OqACUib+tA5o+PY8DwDAACikSIC60BWgAagA4tGxgNKy7iaAA7pydhGIYxhKlOykgNoiC-mISkqWpuSsmwiCyQAQhACS6SAtCaNZqlCLQtnjvZtDKbk8iYD4SDbD46HuJQ9jLJZcyyTZoV2Q5mjhS56maAkkgoDA2DnoglnYLoeDkLern8kldiaOwXGWQODkldFuQFZcEBJWAXiRJZKrZW0-4QOo+LyfginZSqQgAMx9X1jULJQrXbKocwPBAaiWXscjkI1XLZQAspoKpKkQSqhpo8pCOOo6jiqkHrZFRDbbto5Ksdq2bWtY5CJBSpKk+W07XtB3rRdq3vZtt33Y972RTdo53Q9T0PUQV0AydL3nStQO-U+R2fRdABamjLZ947faddE9UQ46RfQcNPmOBPgxtpMqtjT49StVO40q1lI7Qm1E2Oa0M5o47g3TnNk5tXOs6OmiC2t+MY5oqPo2t8qbU+Qjyk+8pKnBJ1bUQcsK-KNPynzasHb1Ko9ULGuK8r4NPZ9dHfZBBtG+bK0I-rPWG0LdG627JtaytNvO3b8ordLEtowH6vfU5DNwSq6u00QcFCKOcG0HBMcQ5T4Ph0nKorRnkfcyHlObXHCe0IreeOznWeO+TCNF4nye1yXOsW2tT2S-nzMrbQQhPnBkFcyqjP0AP3e92LQ-kwP4M9UIA-jv7w89336f55jK3T7POsqmL-fr7Qc-Z+7-dd4vYu73P4OMzd1mo9lFh0m80k1CAiYBporIIPYAiCVAIniZ6kkwGknJBSIhLKqUamUbSYD9IaUMsZMyFlsrWUcpFGBdJcoiE0AtdSi0aZwVZPKEQ454CQU0JBYS44AAyQs4IAAkerkT4IbO6mgepgDlN1Pa2xuq0CVNsaeytthKjutsJytAeqsjlrQaC3VxxPm2PHGmwjIJCKEEqUhyjRH2SVORRaW9WFqIkcI2g8owDCJ7t3f2pDp59zIc9faMBVEqizjbJ8KjSHbX2qyYxpixEqgUZHYWWjxzJ1HNsOWe1HHCLgnBbYQNFZxPCfHUc5Fb730Ae4J+iZ+xQFfgAQWwNgaMVZdxvyMrJHsuZGIeiqJoagM4ax8HzHqSgskhBQF5IgCsdSGm9iacYTA3SSk0R0HoHsQIxBmBBD0cEjhnBQkGB4WEoxAjehJHaPgEAwgzQOPACwA43hljmkRUp65FjkHcBUcZIAGyeSWOoYwvSayak0MYK05RNCrDgD2AACrGOY+V5xo3OBwTQ2xrRHKwVCCAxhGK9MYIxIgvT+ktIgLJbp9TTl9OaYWLwSBunGAAHIQE0FVCUbFNC5jPFAS5NluEOUdAsRAuA8gQACnafAmgxAkpVHCkAiKnmaBRVkCAfAIhzFkASrFfYmnJntHC6VNYFV9gRUirFwrWkYsFcKiUYh8XEFeSAAAKsudQMBKUDyasymAfKBWKuFZAMV6xJUGsFY03McqHQWjdb2O0LBMCcTEMJLCYFIL0B9TWJl2ArQUTApPCNXLTUgi5eQbCPqmJuuVb2VVyKcWaoNZi9cOq8VdNdcapNwC8rYDULCtVRacWOvFcaKVNFZVHMrAmqNMbKI9njYqvsfqA3wCDSGnsYa600S9GoHs-5sITpohKC8ybZ1dP7W6LNa4N2aBzeqvNaKtX2pxbq-VjpjAABE2AwA8kgfAtbtUNtFU2l1p611tpDF64Zk7B2BuDfAbCY7w1rprCyK9nkCAztTaumiGb+1bp3TKvd6KC33oLMe0tp6QDZhKAQO9h6CyNudXyF9raPXtu9UBqF-qf2jrIYBydTVsM9k-fR-c5BrlDhYHBJ8DlHkUfVOmrdvY4N2oQwWfNjpC1rmLXq9DhqjVlGLJWzBYB7ALFFRyQ0uH634cfYRlt1E30pg7RR79w7f3-to-O6iy5uxCtzN-Yz9HI3SR7HwQsqaFi5g4lxXi-Fv6-0E2uJiVn1zOERDAQlOprlFgIKWd9vHoOBc0MJqzGr93Ibw3qNDBLMMhg09AR01bdw3ETUurTUmH1OolUR15r7SPvsc5OvYUAex0aa5gBIvaGWdrkNG2NXWQtrlMyOv9YE1oJqKxBudCbF1mqm4gQbfYfB6HnGBJpDnyNObaC5oV7nVNiFzO-P9X9DQBYTTBxLmb4UiexWJtFQhsD4hWOQdQ2xuVzAPdprLJacsxrtPlqAhW1CfOWKVs1lLntaHe4gW1g2HW6eq-p+tnrGutunTZRbfSOtdbazRLt-XO6Y+A3oIdI2LPjYo5NlN02KOzeXZBonmhlssFW65+zhpUeToya5vbnmjufwEqdsSSXewXeomLzd13UuIYe09mwr3oefYq6hn7ZaL2gZvRD+XXL1iw5Q3qAjiPXV1ZR5tr9JPqOjYA4zkD17wPU6g+LpLKWZyMAYixKAbnNkBQO-gCAKnXBiA8BUHiAxZAmUiE6fAzSeR8kRZoAp2BmK1BFIgMU5KpRoAHigHqGotQgF4AIRQWRggGmgHIBQaANTMBAGNM13AC86kUDsi4AABOYCQTQkEcFINAwJQQBWwOodwIq+AWBbxwVvxj7LbCcPLcfIL4BCGa-qEgxRHuKAZCadUjB1RAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

A Slider with default settings (a range of 0 to 100, default value 0, step size 1):

~~~javascript
import m from "mithril"
import { Slider } from "polythene-mithril"

m(Slider)
~~~

Options to create a Slider with a range of 0 to 50 and a step size of 10 (step count of 6 including min and max), and a default value of 10:

~~~javascript
{
  min: 0,
  max: 50,
  defaultValue: 10,
  stepSize: 10
}
~~~

To add tick marks and pins:

~~~javascript
{
  min: 0,
  max: 50,
  defaultValue: 10,
  stepSize: 10,
  ticks: true,
  pin: true
}
~~~


<a id="reading-and-setting-the-slider-value"></a>
### Reading and setting the slider value

See also [Handling state](../../handling-state.md).

To read the slider value, use `onChange`:

~~~javascript
m(Slider, {
  onChange: ({ value }) => vnode.state.value = value
})
~~~

To set the slider value, use option `value`:

~~~javascript
m(Slider, {
  onChange: ({ value }) => vnode.state.value = value,
  value: vnode.state.value
})
~~~



<a id="appearance"></a>
## Appearance


<a id="icons"></a>
### Icons

To place an icon next to the Slider, use the option `before`:

~~~javascript
import { Slider, Icon } from "polythene-mithril"

const volumeIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z\"/></svg>"

m(Slider, {
  before: m(Icon, {
    svg: { content: m.trust(volumeIconSVG) }
  })
})
~~~


<a id="styling"></a>
### Styling

Below are examples how to change the Slider appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
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
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Slider CSS classes](../../../packages/polythene-css-classes/slider.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/slider"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(Slider, {
  style: {
    color: "red"
  }
})
~~~


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


