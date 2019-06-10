[Back to Polythene FAB main page](../fab.md)

# FAB: Floating Action Button component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Links](#links)
- [Appearance](#appearance)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style option](#style-option)
  - [RTL (right-to-left) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[FAB options](../fab.md)



<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDRoLoZAMwEs4BTMZFUAOwEMBbE5EAOgAsAXOxPCGK9kvyYAeOISoBrAASsoJfAF4AOiA7sADmCQB6bTSjtWAVygRSDKmGYBzQoaMAjZoRh6wYEuzDb18AJ6GgiTaJAAe9Oqk3vjmVhDuKlJycMrg7H5RrCSeKgB8SlTCkFCE6uxSYKapapo6egbGpuaCVrb2Ti5uHl4+-oFUwWDsNFQAJjRwfMG+cAFZAwC0cjQQ7L2z-SRLJCvsC0Mj45MDzABWYHnC2sWl7PmFN2UVVSo1Wrr69k0kFq12xh1XDR3J5vDM5kFrsMxhMpusIYt4mC+vMtkj9tCjlMzhcQLkro87gUCsJRoQAG5SQijVKwGDsS7aMnk3IgPAeUirFyWJgARiQaBAAF8MNR6IwkCxzmyQLx+IJ2Ew5UMpMApAAxACCACEMFIAJJyvUAZQAagBxKRCqQKKTgzYAbgKyvKaq12oAwsbjVabXaUUEvcanVQCu6g8waKNRsb0qQABQqZiBBijBb4GgOFR64AFKRSXiTKAAfTE1g4xYcKwk1lgRjGSCkKgAxPh8LyAOwAFi72bzBfgMBLZY4jfz44n+Zbbfwfao+cLQ+L4ygEkr1drMHrozHLYgAFZebyAGwAJjnC8HJZXEjHk-v07bKgKQoAlCHnXwVYQ5WbLbainJawpAAd2pQxUlPXsQBkEhCHLdhIOgqRyUIEgQO1GBQlSNApFwqCpCgy51BoQwpBpFQAFleVPKRO2YU8OwAGV5AAOZg2MI3k4AWXlmGPLsFg7Zg0AAZiY09aIATgYrseOE3kpIWfjeRY2jpI4qSpHY49RMIqQZKguB92YLtjykLtmA7cSTNY9TeQALxUbR8WuIDcg-KgXSkTV1HUP141fG1cibecpFJCl7gnCLKTMYEwAAOXFWkYBAqQqHpEg8n7aKaBkORFFedgNHeeovjMH4Whsf5HGcVx7VRBZRh+GBvGWVZtGbbQMyzGDhigaxPFSSs4BGCQ8mNbIpAmMAYEbAAFAMBikfAhykAAlHZVikBYNR1ciWquGgovHK5mRO-MYoLUb3CShgUpA7Kwui5lrviu6SFSdg7FIPIAHkym5Rsfz4M7Ipy07Xri27kpUXg6F8AZ+Ce+9LvdKk5QUYBgDAIDGzVOUBH4YHfwtK0hWtFyIcuplwee8LaZZCGruhxLYZAWBHrxanwqhm62fulRvvYX68QB76+EbOhxEIMGmfpy6+fe9n4cRhUUdR4R0ZBqgsZxvHVQHeViYxvg-3J61paoQgpCphWGfO5nGYu3mKTemHBY51KNZet3WY+r6fqysXAclipWCjVKABESDKVgpHjNBXzll3Fb9-mA7hmAEamZHufttH9p1vXcesfGjaJ9gSbNsmKetMAI9GaPY4g4A0Ep1OHbp6LneZpWPc+lROZ9yH0+Vz3hdF3JxaB8PI5AmO44T-dk97+2WYzlXs7VvPO8L7VTd17HS-LwmFWrqhzbruem4XlvWCx-cO55lOncd+mN-Hweva5zvP4HwOItg7T1DlQRsQwMgkFfuvfuAtv6q1zgyfOqNwruh5hOYux8DYEz4JXC+V8KboPHBA0gesiETkXFARsLY0C0IvCg8cVYIA1jrGMD0V5qEgFbPgKSrE6EgHIeTchdt7zQJ7u-X2sVN6e2Hsgyc-84GAKngAFSyKmMR8jYGZ1lNvRBI9ora0xlgsuhsz4mx1gQ60-t2YphIGmHqiQRHyLXuI7uo8pFfwenaLYN4FjsCmPo12HiAFCyDv9UBF8E43ikP4gYq8JGaLHiEnROckZIL3qgouRj9YmJwcbKuh9LG2z-i406pS07BMUUPVK3imr6AkH4gJcjJHuyqSASewDVGVVGFE+pMSpjxLcS06xnsEFpMCfvQ+JdsEV3PoU2uFNWnaNsfYzMjiSkJJpgk6BBRNq7Cjn9SizA5BjBIFARMYVhC+X8i5DA-Ym4QCMBYdgNhPAAFFmj8G1H4fUoxExe3pCoV8BR3wylVsQM5TAqwOBINwcAsKSBci-EwLsaAkC8kFCKMUDAmDMCRGC3BComDClwCAMQkhyCoGxRKDmW0XnNXJLCmA6hnk4hlCYRAko3h1HrOoGseLs7aHamsJ5owhV0uYAyplLKFRsrwOkdQNLCTClFCAWgOLJTCqatnSVJBGWTBlfwOVIAOVMG5boXl-L4bit2Nqug2hRU2tWHa3V+rmWsulPKvwiqmDKqFNgIUQA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import React from "react"
import { FAB } from "polythene-react"

const iconSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>

<FAB mini icon={{ svg: { content: iconSVG } }} />
~~~

Instead of passing `icon` as option, the Icon component can be used as child:

~~~jsx
import { FAB, Icon } from "polythene-react"

<FAB mini><Icon svg={{ content: iconSVG }} />
~~~

or even with Icon and SVG components:

~~~jsx
import { FAB, Icon, SVG } from "polythene-react"

<FAB mini><Icon><SVG>{iconSVG}</SVG></Icon></FAB>
~~~


<a id="links"></a>
### Links

See: [URLs and router links](../../handling-urls.md)



<a id="appearance"></a>
## Appearance

FAB's default colors are:

* Background: the app's primary color; change this by setting the `background-color` style
* Icon color: white; change this by setting the `color` style


<a id="styling"></a>
### Styling

Below are examples how to change the FAB appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~jsx
import { FABCSS } from "polythene-css"

FABCSS.addStyle(".themed-fab", {
  color_light_background: "#2196f3",
  color_dark_background:  "#0097a7",
  color_light:            "#fff",
  color_dark:             "#b2ebf2"
})

<FAB icon={{ svg: { content: starsSVG } }} className="themed-fab" />
~~~

<a id="css"></a>
#### CSS

Change CSS using the [FAB CSS classes](../../../packages/polythene-css-classes/fab.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/fab"
~~~

<a id="style-option"></a>
#### Style option

Some style attributes can be set using option `style`. For example:

~~~jsx
<FAB
  icon={{ svg: { content: starsSVG } }}
  style={{ color: "#ef6c00" }}
/>
~~~

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of the FAB is flipped when:

* it is contained within an element that either has attribute `dir="rtl"` or has className `pe-rtl`
* has className `pe-rtl--flip`


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


