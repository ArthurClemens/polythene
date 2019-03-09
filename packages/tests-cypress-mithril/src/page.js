import { renderer as h } from "polythene-mithril";

const results = ({ name, tests }) => (
  h("div", {
    className: `tests-${name.replace(/[^\w\d]+/g, "-").toLowerCase()}`
  }, tests.map(test => {
    if (test.section) {
      return h("div", test.section);
    }
    const testName = `test-${(test.name)}`;
    return h("div", {
      key: testName,
      className: [testName.replace(/[^\w\d]/g, "-").toLowerCase(), test.className || null].join(" "),
    }, [
      h("div",
        { className: "result-title" },
        test.name
      ),
      h("div",
        h("div",
          h("div", h(test.component, test.attrs, test.children))
        )
      )
    ]);
  }))
);
  
export default route => ({
  oncreate: () => ( 
    scrollTo(0, 0)
  ),
  view: () => [
    results(route),
  ]
});
