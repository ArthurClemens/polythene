# URLs and router links

Polythene uniformly uses a `url` object to handle both external URLs and internal app links.

Requirements for the `url` object differ per renderer.


## Mithril

Mithril includes [a build in router](https://mithril.js.org/#routing).

To [make a link a router link](https://mithril.js.org/route.html#mroutelink), it should either:

* be written with a hashbang: `"#!/index"`
* have attribute `oncreate: m.route.link`
  * and if the href attribute is not static, the onupdate hook must also be set: `onupdate: m.route.link`

### Router links

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

React does not include a router. [React Router](https://github.com/ReactTraining/react-router) is well known external router library. 

To enable router links, wrap the component in its `withRouter` HOC.

#### With JSX

~~~jsx
import { withRouter } from "react-router-dom"

withRouter(({ history }) => 
  <Button
    url={{
      href: "/index", // not required, but makes the button a real link
      onClick: e => (
        e.preventDefault(),
        history.push("/index")
      )
    }}
  />
)
~~~

#### With hyperscript

~~~javascript
import { withRouter } from "react-router-dom"

withRouter(({ history }) => 
  h(Button, {
    url: {
      href: "/index", // not required, but makes the button a real link
      onClick: e => (
        e.preventDefault(),
        history.push("/index")
      )
    }
  })
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

