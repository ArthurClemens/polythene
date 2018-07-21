[Back to Polythene Button Group main page](../button-group.md)

# Button Group component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Variations](#variations)
  - [Styling](#styling)

<!-- /MarkdownTOC -->

<a id="options"></a>
## Options

Button Group does not have any options. Buttons are passed as child nodes.


<a id="usage"></a>
## Usage

<a href="https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvAHjmoCcIAHYgAjgdqAXgA6IEsW5xEAelkcMAdwDmEYvjpZZAQQ7FCAVw4BhWDjRxZ3WlACeBpjFloYAD2LWM1ANYYV8Na2DoROALQcMN6eACYQcJ429o6uEVHUxGEJGGgxGFD0MPgAVnDiAHwssuxcvOWiaGycPPyCIuKS0nIKymoaWrr6RqbmTFZJIU4u7onefgHjwSkwYdRwVnEJQcmhqWtwWcQ5eQWuJWUgldXNdQ0NLHEAbnwQMWIgGNzcFVVP5ZQgOAwWAZCD0BCIEAARkQADYAAwgAC+FHQ2FwkPOALoDCYxDw8ggWBs+j4wD4ABFFEoYBwKHwAEoYeIwGIAIUMxGI9HpAEkcfSADLxYhCkUAFWgMD4SL4YA4tCwfHEE2WaWi4gaOISZL4HK59AA4grDNx6fruWh6T4YHY4PTIrlabSZXxhHxVbsYABuBryF7E2ik8kW+gmADK4dd8sVypAnvC+01aG1-BDnMtEajsvdCdcWd9aAaobQWfwGBiMXDxDssAAFOJ8AAjDP0MIqE3cMKOHAxbu0FQqWDienABp8OX0YgAfTgEAAXjBEBOV6u11CABwUceThjTmkQFQkZdr08Adnh8O3aAndAKHGnUEPJGnTbmHdohlyy-EAGIwABI4NEiACUhZauC-AtgaaAAPK8HAbp8MgO5jjeK6vD+IDqPkEDUEB6ETlAGBNsCWG8gRq4JLWS5kjuq5gFO1Y0VhOFPvhID0TKO4oqhXGYXGTa2DElErsRpFQFhbKiRO1GwMuaGnoxDAAOowM+xDLgAnJeXFIjx14TopGExFhX4xLST6uDJfDiWRcYAKo2XJtHGauQkcBZHBsrQBpYFhABM3BuAItivHw1DGI6xAmLYQY2ROWAYBwahoD5flYWEQVuMmq76ehvHoW5LymXGd7xZQXF2ZJcY6M5NbyXRhEruVHBYZEImcc1+UToVAC64EpsR6x8DoXx8DMTAxIhDLpBosWBq4DBNROO6phwhgZEGdbcAq0ggStK5wKatI7XtcBgVxBjxPg2SMEhxWycCMAZKyJYKT1K6fZ9jpeXWB3FZExDGDeDbNROLAlsan7cPU4MrsA0GWvBxBwPgSXcHWtAIW65R8GDp6rpDrZFvDp42nYwjANjqP4K8n2E2JJHAlTNNo9VDOMxNHiKCprwwFxjMeV5guExAaA+FTYD5ECnOM9Qw1wAAcui7xI22H6mt2oS9v2g7Dl1XMrowHjMbArMIbdDUwHLhNAiCjBvNTlvhcIbt8NdaN3UU9svY7JZ0zEtunjAjx4nAVOPVzYbsT4y7-bjHuEDdQLENWGCMHW5K+697Ik8ubMyiBounkiwcrrIePKmTfAgSBttVFDnZw6uxcFcBdwppBfBYJ+DBK7QFlITEtCRRYGgAI6GLSdjhs9W0cA2IC-p83wgJdaCzdEFKwQAsvgv2nSwY3cHwlf0r3X7EAPFkb9iircFKHB4G+EkAjnxBgpYeCwgAzIgABWLSyJUQgEwDgPAmh1j31xMwSEyI+pUCsj4CEqAwHojwJEaI+ALJhwKNwceWIqDGHIJCToMh5Bfm4D4FQmhFQKDmrIQwWAYgMOwbg4E2NCGlABDWbgGJAQ3HxCiNEEDIRYIyGEEeWAcGh04QQvERCQAkLwOQ7oVCaF0O0BIzI0imEsLYZI6Rsi8FcMUTwqgfCBE1BaAgpEQA
" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>


~~~jsx
import React from "react"
import { Button, ButtonGroup } from "polythene-react"

<ButtonGroup>
  <Button label="One" />
  <Button label="Two" />
  <Button label="Three" />
</ButtonGroup>
~~~

<a id="variations"></a>
### Variations

Button options that are relevant to Button Group:

* Create a wide button with `extraWide: true`
* Create a high label with `highLabel: true`
* Add a separator with `separatorAtStart: true` (normally placed at the left, with RTL languages at the right side)

Note that Buttons contained within a Button Group don't have a minimum width.


<a id="styling"></a>
### Styling

Button Group does not have styling options. Use themed/styled Buttons instead.
