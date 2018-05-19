[Back to Polythene Button Group main page](../button-group.md)

# Button Group component for Mithril

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

~~~javascript
import m from "mithril"
import { Button, ButtonGroup } from "polythene-mithril"

m(ButtonGroup, [
  m(Button, { label: "One" }),
  m(Button, { label: "Two" }),
  m(Button, { label: "Three" }),
])
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
