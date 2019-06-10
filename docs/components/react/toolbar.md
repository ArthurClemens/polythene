[Back to Polythene Toolbar main page](../toolbar.md)

# Toolbar component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
- [Appearance](#appearance)
  - [Title](#title)
    - [Preventing an unbalanced centered title](#preventing-an-unbalanced-centered-title)
  - [Action links](#action-links)
  - [Shadow](#shadow)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [RTL (right-to-left) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Toolbar options](../toolbar.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGI2gXRIDMBLJGG0KTAW2RoAdAAsALn3jF0UMYlmoQAHnhsoAawAEI8ohYBeADohxY3CgD0FzOTEiAruTBIBsIQHM2d+wCMhbCGsYPDEYC2wEAE87eUQLRAAPfmxOCxYXGCEwYONNXXgjUjFIzhFERDFjAD5DKCUycjZsMU0YJ0LTcysbbycXeUzPbz8AoJCwiPhosqg4mDFMKHxMeGg4yenYgFpdTDAxcKiY2Z3EPbEt+cXl1dmhACsYaqULBqaxGrq35tb2406YJZrLYHH1EK5Bl4HCNAphghUJkcZnMFksVmtDlNjogttlEVjkbjgpdUTc1g8niAqi9vh9arUlPg2AA3TRsfCFSgQSpUl5M5lVaR4JD7AKwRQARhQtBAAF8iDx+IIQBTpJBZPIxIp1fNNMBNAAVCAIHw2IiG43wU3kA1eJDmgCS6sd6oAQvYxGJoOaAMoiTD4CAAd00ss0+k0G2xAG5ajqWvqjSabABhH0+0PhyNI2Jpn2xqC1JNW1PpoQB-A+4pIAAUxiEMQE+C2XuT5GM5uAtU0mkgq3IAH1VO5xAPTWB1O5KPYlihNMYAMS0WhgAAcAFYAMwd7u9hAQQfLcjqMd7SfT2c9xfLtdb4y1WUASgLcegurY6oAsvJ7D6AGoAOJZvq6pyLIc71My7iaEG7J2IUABMAAsuRlGwI5iIhKEgJozJsIgQauhACSFLQmhkchmjIc82CYHYmgcsYn6bpoEqriIbHMlsCEABKbsyCEAF58LQWzrhxq5cbx-FCSJWwAOwCRJf4AGx8YJxgWNSrxQVUoYFvGbLqgASnougwCI-5ARGIHQGBYgQTAUEwXBIhYahiDoeI7k4XhBFESRxhkRRSFUdh1K0fRjEgJ+EryUIKnrpoKlCJu64phKKUIZoSFCAAnKxuUIRKOWsdlSFgFsuVIdlonxXlBWbkI66rgp+UFauMBNeu8maKumj1R1YBNfJLFkSlq5IdxzVJfFo1bCpIjTbQq6VUIq7ZQhqWblsTW0KFU3rglSVTU1m4laJKnTSpeULQtMBbTdC3JQtYASglKnkZoTUSrlN05UICHZe98mrgAMhKLEShKIjyX+SHwNNaVUal64aSAWk0rp+mvrALQftAACC+CVoBwF7hq4GaJB0Gwfg8HGNROFoRhPm4fhhHEaRX2UUzEV0SIDGFLFBWQ0tKnMot3FcWp65SSIKl-uJCGSwrAno5jOnuHpsovlAhnFta7qetAWY1vqTnQU+4Z6buShOtAxtelARnQPowAW85sphlpeuGYT2DYGbj42-OLvU-ynw9j2jIsr2WDBAAckqnLBpoUDcog1S7tH1OYNougGP8npdMCvTOOCAweFCvj+IEUaEvg4IQGEuz7BYC4WK2JbtjhCzkO4FSFGOWAaNUPrlJoKxwHOAAKOazJoLAHpopnnJoWwWm2DHNy8mBR9HfIsgfMf8vHcIwMnAip0G2fh7nsess4F9X4ghRiHaWdUraYhIFPSyu1gEfAUOdD5n2fknFOxhIB8AiLMWQd9c4P0NjYE+SCY4oPIE7U2lt3YEygN+KAv5AI+zQeg+otEoBVEwS5ei+dmSIHIJEXCjDmEMKYSwjh7C2GsM4TwrhvDbjQQ-r-RANJKFkKQUoTB2CXa4OAPg0yLBzKWRIZoLSoDyEyI9M7VoUE8HqmJqTACpDNGHwsJgyRwC0HWNAY-c+kDr7GEoLfKkZj7EQMvlAkAIikDVBTBAWB5xbH3zAXHTxr9CgwLgZqRB6DqY0OiecSRyDLRGx0Tg-RCivw-isqY0JWi0k2B-kgahRTyC0MFvQ3h3C+F1NqQ0mpTSOFCM0L4sRFjyklMQCkw+2iTZyKyYosyiALJ5PUb0jB5TZF6PcAYomJNxkaIKeYyx7iLCRzsRs4+djwEJy8U4kALi4kPz2S-bx7TqgOkpnIfAbTP4hPIWcxxb9oGBJiQgtxKypltkmQkrpn82RLE1FUa5TcNR3PaS8TB3S-nSOmRkwZczsnQCUSopZcL+m6PkfgoxGKzEx06b89ZmzQmPLCU-fZkTnHBhORShxBzXk+M-v4zUjCCD3NEeS054SqXeOiWsT5vT4XEu+dHYAFgABUkYsBgEQCIBATcKlek0BAFgLAQhtLKHkLyLQYDskQJoHwiLNCSosLKAlh8HZQBmWoc4LIen23VBMl41rZGYoBaI3sbLyBVBTD6jlUKiU91hZan5PcZk4sMYstRyz4nU2DdaKx2yQFkpTTY55jKb50tPry85hzLlUirCUAg3L6URP5e8wVPJhU0PmCW92XYxU9nHOeCAM58ABP7HORc6q8qrmXPeMV3sPVtkjUMnJRD8XNv+W2WFNDYJ0Pqc0-hq7l0CI3cw1pQaYWf1HRGk1UbUUjLGbG-d6SBmzPmVAPFZ7LXQvKcm0lD9027LzS87NXynnvqzcYQt1CyhNjLbmyl+amUCvgTW+9iS+UFsAwQFs5TcjOyZUedQOapFYsyci-BhDiEmImWG2dIa90LqhFPdda7Gmbso3U7dDzE3FL3URkVB7L1HqgGi0ZqiCNxvjcRi92KJ0LOMfk+ND7RXkNfWm595bYNMuOV+qRmbqXMtEePf0gYgzAYjj+1TEHYk4XrUgRt2Z9Uf2gD2o5iAsAfwYbkEd0HH0saw0i69eHp38YE0x0RZTt6LqqbR6jVGV20fo1yxjNpmMztY4J7D16uOnt4+emw46cPRtE4RsVEme7Cr9AGNOfGX2ycJSV3ToGP00pDNgHEaHEOzAwx4+T78WXf0BdcQBMBNA1jQ20tYj4dNNbA1EqtkGMPhqTS5hF7HhMENyXemLu7fNkaXcFoLoW1u1PC0gHL1pQ2Lem0J9Lx7lHcc8-x2LqXD2zdvcl+9kWn07Jk090rT3ahr32AAEQAPKfiELoYF5A6zhyUAHIOWkiC7kDGAewrgxAeAqAAUX6LIV0kQHT4DrEc40PJHy1GfGqd5HBGGKFND4GzQobOIFFG+SUEp1woAQnKBUIBeACEUFkYIhObmKDlMwEAqgNBcBQNQRU7O0Bt3h03BhqxsBw9VCQRwUg0AAiBDObAk4siBIsJLiwsP8A67OPsIQ0ubMQDl5qBXPjIg1cULSZnYvlSS62IGPgJvEAy-N-Lx40gleKFV1YdXmuYGG-OC77X+vQ-7HD2703svvdcBIMUW3aB7eykYLKIAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { Toolbar } from "polythene-react"

<Toolbar>...</Toolbar>
~~~

A Toolbar content consists of a list of elements. Some possibilities:

~~~
[title, icon]
[icon, title]
[icon, title + space, icon, icon]
[icon, title + space, action link]
~~~

To show a Toolbar with a label and 3 icon buttons:

~~~jsx
import { Toolbar, ToolbarTitle, IconButton } from "polythene-react"

const iconMenuSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
const iconRefreshSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
const iconAddSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>

const ToolbarButton = ({ svg }) =>
  <IconButton icon={{ svg }} />

<Toolbar>
  <ToolbarButton svg={{ content: iconMenuSVG }} />
  <ToolbarTitle>Title</ToolbarTitle>
  <ToolbarButton svg={{ content: iconRefreshSVG }} />
  <ToolbarButton svg={{ content: iconAddSVG }} />
</Toolbar>
~~~

<a id="appearance"></a>
## Appearance


<a id="title"></a>
### Title

A ToolbarTitle can be inserted as Toolbar element as shown above.

A title can be indented or centered:

~~~jsx
<ToolbarTitle indent>Title</ToolbarTitle>
~~~

<a id="preventing-an-unbalanced-centered-title"></a>
#### Preventing an unbalanced centered title

When the Toolbar contains one button at the left, and the title is centered, the result will look unbalanced because the title will be centered to the remaining space (at the right to the button).

Use a dummy placeholder at the right to bring balance. For instance with an empty inactive IconButton:

~~~jsx
<Toolbar>
  <IconButton><Icon svg={{ content: iconMenuSVG }} /></IconButton>
  <ToolbarTitle center>Title</ToolbarTitle>
  <IconButton inactive><Icon /></IconButton>
</Toolbar>
~~~


<a id="action-links"></a>
### Action links

Use class `pe-action`:

~~~jsx
<Toolbar>
  <ToolbarTitle center>Title</ToolbarTitle>
  <a className="pe-action" href="...">Save</a>
</Toolbar>
~~~

<a id="shadow"></a>
### Shadow

~~~jsx
import { Toolbar } from "polythene-react"

<Toolbar shadowDepth={1}>
  ...
</Toolbar>
~~~


<a id="styling"></a>
### Styling

Below are examples how to change the Toolbar appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~jsx
import { ToolbarCSS } from "polythene-css"

ToolbarCSS.addStyle(".themed-toolbar", {
  color_dark_background: "#00c853"
})

<Toolbar className="themed-toolbar">...</Toolbar>
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Toolbar CSS classes](../../../packages/polythene-css-classes/toolbar.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/toolbar"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~jsx
<Toolbar 
  style={{
    backgroundColor: "#EF6C00",
    color: "#fff",
    height: "72px"
  }}
/>
~~~

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of Toolbar content is reversed when the Toolbar is contained within an element that either:

* has attribute `dir="rtl"`
* has className `pe-rtl`

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set




