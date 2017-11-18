[Back to Theme main page](../theming.md)

# Light and dark tone

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" -->

- [Mithril example](#mithril-example)
- [React JSX example](#react-jsx-example)

<!-- /MarkdownTOC -->

A component is rendered light or dark with option `tone`.

* When not set, the component is rendered normally, assuming a light background.
* `dark`: the component is displayed inverse, with light details on a dark background; this sets CSS class `pe-dark-tone`.
* `light`: dark tone is overridden so that the component is rendered normally; this sets CSS class `pe-light-tone`.

<a name="mithril-example"></a>
## Mithril example

To render a button on a dark background:

~~~javascript
m(".pe-dark-tone",
  m(Button, {
    label: "Button"
  })
)
~~~

or:

~~~javascript
m(".some-dark-background",
  m(Button, {
    label: "Button",
    tone: "dark"
  })
)
~~~

To render a normal button on a dark background:

~~~javascript
m(".pe-dark-tone",
  m(Button, {
    label: "Button",
    tone: "light"
  })
)
~~~

<a name="react-jsx-example"></a>
## React JSX example

To render a button on a dark background:

~~~jsx
<div className="pe-dark-tone">
  <Button label="Button" />
</div>
~~~

or:

~~~jsx
<div className="some-dark-background">
  <Button label="Button" tone="dark" />
</div>
~~~

To render a normal button on a dark background:

~~~jsx
<div className="pe-dark-tone">
  <Button label="Button" tone="light" />
</div>
~~~





