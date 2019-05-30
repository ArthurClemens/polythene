# URLs and router links


Polythene uniformly uses a `url` object to handle both external URLs and internal app links.

The contents of the `url` object is different for Mithril and React.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Mithril](#mithril)
  - [Router links](#router-links)
  - [External links](#external-links)
- [React](#react)
  - [Router links](#router-links-1)
  - [External links](#external-links-1)

<!-- /MarkdownTOC -->



<a id="mithril"></a>
## Mithril

Mithril includes [a built-in router](https://mithril.js.org/#routing).

To [make a link a router link](https://mithril.js.org/route.html#mroutelink), it should either:

* be written with a hashbang: `"#!/index"`
* have attribute `oncreate: m.route.link`
  * and if the href attribute is not static, the onupdate hook must also be set: `onupdate: m.route.link`


<a id="router-links"></a>
### Router links

<a href="https://jsfiddle.net/ArthurClemens/7vurv0c3/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
m(Button, {
  label: "Button",
  url: { href: "#!/index" }
})
~~~

or:

~~~javascript
m(Button, {
  label: "Button",
  url: {
    href: "/index",
    oncreate: m.route.link
  }
})
~~~


<a id="external-links"></a>
### External links

~~~javascript
m(Button, {
  label: "Button",
  url: { href: "https://en.wikipedia.org/wiki/E._E._Cummings" }
})
~~~



<a id="react"></a>
## React


<a id="router-links-1"></a>
### Router links

React does not include a router itself, but [React Router](https://github.com/ReactTraining/react-router) is a well known external router library. 

Use the `Link` component (with option `element`) to render route-aware links.

<a href="https://jsfiddle.net/ArthurClemens/1hm2w5xd/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Button } from "polythene-react"

const Index = ({ history }) => 
  <div>
    <h1>Home</h1>
    <Button
      raised
      element={Link}
      label="Go to page 1"
      url={{
        to: "/page1"
      }}
    />
  </div>

const Page1 = ({ history }) => 
  <div>
    <h1>Page 1</h1>
    <Button
      raised
      element={Link}
      label="Go to home"
      url={{
        to: "/"
      }}
    />
  </div>

const App = () => 
  <Switch>
    <Route exact path="/" component={Index}/>
    <Route path="/page1" component={Page1} />
  </Switch>

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById("root")
)
~~~

<a id="external-links-1"></a>
### External links

~~~jsx
<Button
  url={{
    href: "https://en.wikipedia.org/wiki/E._E._Cummings"
  }}
/>
~~~
