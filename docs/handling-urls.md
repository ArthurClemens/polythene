# URLs and router links


Polythene uniformly uses a `url` object to handle both external URLs and internal app links.

The contents of the `url` object is different for Mithril and React.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Mithril](#mithril)
  - [Router links Mithril 1.x](#router-links-mithril-1x)
  - [External links](#external-links)
- [React](#react)
  - [Router links](#router-links)
  - [External links](#external-links-1)

<!-- /MarkdownTOC -->



<a id="mithril"></a>
## Mithril

Mithril includes [a built-in router](https://mithril.js.org/#routing).

To [make a link a router link](https://mithril.js.org/route.html#mroutelink), it should either:

* be written with a hashbang: `"#!/index"`
* or (Mithril 2.x) have element `m.route.Link`
* or (Mithril 1.x) have attribute `oncreate: m.route.link`
  * and if the href attribute is not static, the onupdate hook must also be set: `onupdate: m.route.link`


<a id="router-links"></a>
### Router links Mithril 1.x

<a href="https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEGMAJw1QG0AGIgRloDYBmAXRIDMBLJGGqCiYAtsjQA6ABYAXEfGLooMxMtQgAPPB5QA1gAIp5RFwC8AHRCyZuFAHo7mcjKkBXcmCRjYEgOY8XVwAjCR4IRxg8GRg7bAQATxdVRDtEAA9RbH47Li8YCTBIy31jeAtSGXj+KUREGUsAPnMoZo0ych5sGX0YD3LrWwcnQI8vVXz-QJCwiKiYuPhEmqgUmBlMKHxMeGgUhaXkgFoRAKM+WISklePTjvhDtY2tnZWJACsYRo07ds6ZJpaUDaFD+PT6lgGMHsjmcblGiG8E1OwVC4UwkTq80uy1W602212F0WV0Qh0KWOJOLJkQeeOeu3enxADW+vy6ANa+B4ADd9Dx8OVKBB6szvlzuQ1FHgkGAZGFYOpaChaIdmCgAEwMEAAXyIQlE4hAjMUkGUqhk6lNa30wH0ACFXDIZNB9Nr9KZ9PsSQBuZrNK3dACSm3S7ptfpk3J4iAA7ih9AAKACU7oa+mozX0+nMcgTEIYliI2ZAAAkIGJLEmiJms-oRAmHU7oEXgDXayVMDw8Ph4zJyK5ENWoO2c1ggoh4PHLABxCD6Z2ezC+RD6AvENu19yT8PD9u1owmKcgWJLxBrod72vQCiITAqeMiCSUR2ICTaPQbrPajfapM19g5s02q+oCAb6AACqeDBhq2LSRtGcaJimphphmu45vW+aFsWkHLqulYXrW9aNs6UAtp+HZdgQvb9oOG6jpg47bjOc4LlI5aIIWFFbvGsGXlmB5cEedhcbul7XsYd6IA+T4QC+b46LoFHfmJrp-ruAH1FAwF+lAYEiHJygAHIQPgK4evgEBgK43gyBIACOA7kPEADKE6ILKEDkHmIAAMRCiKSYgY+z4qBI2DGLwaRhpYvmWCBYGhYgAAid6YDBNaWCJqD6MGZlpIRWXYFBljxrhZ5AcFskvgmBmuMZpmDsW2VFklqXrEFukmuW2B8Ig5DqEEjETlK7myvKAhoAwADsKAMAALDqeogMIYjqAUkTdWaahoEEpnxDuWbFfgXJQL48bqrQ2BpCB2qjTKcrQJNIAMHNzA6pwIDvrok3UPqa1oCcLh3AAAgwEjg+9JBbuokLQvV2C6L4BTlnYQNnPAYMQxIzBo7cfDGiQlTYIabIWtq7DakAA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

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

<a href="https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvAHjmoCcIAHYgAjgdqAXgA6IEsW5xEAelkYOxQgFchsHGjj4A5hGUqARvgi0FcODGJxZ3WlACeypjFlxiGNABMMUeq7tHZzQYAFoOGAxqYlt7J0IXcMjo0PdPHz8Q-AArOHEAPhY3Th5ifNE0NhLeASExCWIpGXlFA3UYTW09A2NTc0trWKCEkLcPb19-IfjE6gtp4LC5uFTxjP8cvJBC4q5ecsr2Pf5BEXFJaTlZai80Ta8YKAgANw58EJi0bixZCKjicK0FSMDihLy0LAAAQArPgAAz4ACMshUWC8v2SAI4QJBYIh+CwEDuuQKRSOpQOFRYXhefAgXnq2NoxFJshpz3ylBAllg0VMWjwABZEIiAMyhYUAThAAF8KOhsLhEARcly6AwmMQ8Or3HxgBU+HwABIYOCEABKOJgHEQfEtwOtFANfAAygB3fTUQhOtCG+2MH2GgAyRIA1j6ZXxhHbMf7rQARADyAFkANwVHX8YB2jAQSxeABCwOI9D4kejgRmIXTaAz9F1AElvDAAB5RvgACmzhDzJY4DjLAEoo-k+M7qS8DobDSxCIj8kaITAinOp9OWObc-mi416M7p3xHh1NcJgCG0KGZfvp1AMIZHvUAOK0PglvjcDA6GB8RHia+GtQoFPfVfQPacS1tcRbE-GBfxAf8yyvUDDVkNcinZSk0EzPgAAUYMRdsuz4Ht3FofshxHMdQInDlr1nec8K-H8V3nOjNzzGBC2LPdkOnI9NGIU9z0vBDb3vIDxGfV8X0IJc-14gCOCA4AQLA8DaEgkBZHktSZSQg9UPHNlJwqOstH4ABBbhuEI4dhFHcd3U9Qg1xnONDxbf53wwZR6m0kA+DoLA7BCBhTybB4WxlQzeI3K1vN8qCPy-ODAohEKT2ARjYMjGKZ1kJziC9TDzUxJNk3wCJmw4DtxzjDhCismzUKKer8kDPhwWoVFNV0KwAFENE1AsHAbLxapAJkWRAQcKkHGs1XS6BrTwQw70eLkeRgPl6yFOFEFFRFZXlEBMBwPB8GWRaNWYZVZQAXSoJ4LwQFAFXO5U-mifAHmeR5aG+XrVSoQC8AuZoUS+UMdEuiEMX+FE0Xh77fv+wGGE2LliAcbglW5aotTld68a+gFwSwH6YD+vx0eITGQaUsHGkueQVChmGguRsm4dRdFSbxCnUZpgT6ZAbHcbwcleAemUgA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

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
