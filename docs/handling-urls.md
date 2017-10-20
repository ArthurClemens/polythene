# URLs and router links

Polythene uniformly uses a `url` object to handle both external URLs and internal app links.

Requirements for the `url` object differ per renderer.


## Mithril

Mithril includes [a build-in router](https://mithril.js.org/#routing).

To [make a link a router link](https://mithril.js.org/route.html#mroutelink), it should either:

* be written with a hashbang: `"#!/index"`
* have attribute `oncreate: m.route.link`
  * and if the href attribute is not static, the onupdate hook must also be set: `onupdate: m.route.link`

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

### External links

~~~javascript
m(Button, {
  label: "Button",
  url: { href: "https://en.wikipedia.org/wiki/E._E._Cummings" }
})
~~~


## React

### Router links

React does not include a router itself, but [React Router](https://github.com/ReactTraining/react-router) is a well known external router library. 

Use the `Link` component (with option `element`) to render route-aware links.

#### With JSX

<a href="https://jsfiddle.net/ArthurClemens/1hm2w5xd/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~jsx
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom"
import { RaisedButton } from "polythene-react"

const Index = ({ history }) => 
  <div>
    <h1>Home</h1>
    <RaisedButton
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
    <RaisedButton
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

#### With hyperscript

<a href="https://jsfiddle.net/ArthurClemens/gqef8c0g/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom"
import { RaisedButton } from "polythene-react"

const Index = ({ history }) => 
  h("div", [
    h("h1", "Home"),
    h(RaisedButton, {
      element: Link,
      label: "Go to page 1",
      url: {
        to: "/page1"
      }
     })
  ])

const Page1 = ({ history }) => 
  h("div", [
    h("h1", "Page 1"),
    h(RaisedButton, {
      element: Link,
      label: "Go to home",
      url: {
        to: "/"
      }
     })
  ])

const App = () => 
  h(Switch, [
    h(Route, {
      exact: true,
      path: "/",
      component: Index
    }),
    h(Route, {
      path: "/page1",
      component: Page1
     })
  ])

ReactDOM.render(
  h(Router, null, h(App)),
  document.getElementById("root")
)
~~~

### External links

#### With JSX

~~~jsx
<Button
  url={{
    href: "https://en.wikipedia.org/wiki/E._E._Cummings"
  }}
/>
~~~

#### With hyperscript

~~~javascript
h(Button, {
  url: {
    href: "https://en.wikipedia.org/wiki/E._E._Cummings"
  }
})
~~~

