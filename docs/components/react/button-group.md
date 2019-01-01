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

<a href="https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvAHjmoCcIAHYgAjgdqAXgA6IEsW5xEAelkcMAdwDmEYvjpZZAQQ7FCAVw4BhWDjRxZ3WlACeBpjFloYAD2LWM1ANYYV8Na2DoROALQcMN6eACYQcJ429o6uEVHUxGEJGGgxGFD0MPgAVnDiAHwssuxcvOWiaGycPPyCIuKS0nIKymoaWrr6RqbmTFZJIU4u7onefgHjwSkwYdRwVnEJQcmhqWtwWcQ5eQWuJWUgldXNdQ0NLHEAbnwQMWIgGNzcFVVP5ZQgOAwWAZCD0BCIEAARkQADYAAwgAC+FHQ2FwkPOALoDCYxDw8ggWBs+j4wD4ABFFEoYBwKHwAEoYeIwGIAIUMxGI9HpAEkcfSADLxYhCkUAFWgMD4SL4YA4tCwfHEE2WaWi4gaOISZL4HK59AA4grDNx6fruWh6T4YHY4PTIrlabSZXxhHxVbsYABuBryF7E2ik8kW+gmADK4dd8sVypAnvC+01aG1-BDnMtEajsvdCdcWd9aAaobQWfwGBiMXDxDssAAFOJ8AAjDP0MIqE3cMKOHAxbu0FQqWDienABp8OX0YgAfTgEAAXjBEBOV6u1+u+FCABwUceThjTmkQFQkZcb88rgDs8Phu7QE7oBQ406gx5I06bcw7tEMuTP6-EABiMAQJHPdHyDF83xnaIIEeGAPy-E0-zjQCYHQsC0CRABKQstXBfgWwNNAAHleDgN0+GQPcx3vFdXmXcR1HyCBqEw1coAwJtgUYkBeXYlcElrJcyT3VcwCnathN45jXzYkAxJlPcURoxSGLjJtbBiASJ047ioF4tkdIEGtYGXWj1wkhgAHUYGg5cAE4b0UpFlLvCcLPomJeN-GJaVfVxjL0ni4wAVWMoSzNEujV00jg-I4NlaANLBeIAJm4NwBFsV4+GoYxHWIExbCDYyJywDAODUNAkpS3iwgytxk1XVy6JUujPIndTxAgjggq4kLxB0CLTJEzqV163jIm0hSYqUtq7wAXTwlNOPWPgdC+PgZiYGIKIZdINGKwNXAYaKJ3AgiOEMDIgzrbgFWkbDzsE01aXux64FwxSDHifBskYSjxonIEQUYdlWzQczWpa5S90dBK62e8bImIYx7wbOaJxYEtjR-bh6ixldgCIy0yOIOB8Aq7g61oci3XKPhMYvPgcchxTzxtOxhGAOmKfwV4YZZvhgqgHm+cp0WhZZmZFGs14YA5jc4oSpX1wgNAfB5sB8iBaWL2oNa4AAOXRd5Sbbb9TW7UJe37Qdh1m4W+EYDwpNgcXyP+0b9fPUGYAyVlPf53LhDDl3CD+gGin9wOIeIgWYl9jcYHghg4B54GLzDOSfGXJGGYjqOYGIasMEYOtyVj8GS2XCWZWwtW1yRZPV1kRnlSJidsOw5OqlxztCdXRu2oaVr8MsfgsB-BhjdoPzKJiWh8osDQAEdDFpOxw2BAPuQ4BsQEAz5vhAb60AO6IKRIgBZfAEfelhNu4Ph2-paff2IOe-PP7FFW4KUHA8Cfn0gCauYJLB4FhIgAAzDA5EqIQCYBwHgTQ6w-64mYJCZEi0qABR8BCVASD0R4EiNEfAfl4IFG4KvLEVBjDkEhJ0GQ8hfzcB8CoTQioFCHVkIYLAMQeHkMocCOmtDSgAhrNwDEgIbj4hRGiFBkIyEZDCEvLAFDU6iJoXiOhIAGF4GYd0NhHCuHaBUZkdRfCBFCNUeozRVCxG6IkVQKRMiagtBwUiIAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>


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
