import m from "mithril";

const results = ({ name, tests }) =>
  m(
    "div",
    {
      className: `tests-${name.replace(/[^\w\d]+/g, "-").toLowerCase()}`,
    },
    tests.map((test) => {
      if (test.section) {
        return m("div", test.section);
      }
      const testName = `test-${test.name}`;
      return m(
        "div",
        {
          key: test.key,
          className: [
            testName.replace(/[^\w\d]/g, "-").toLowerCase(),
            test.className || null,
          ].join(" "),
        },
        [
          m("div", { className: "result-title" }, test.name),
          m(test.component, test.attrs, test.children),
        ]
      );
    })
  );

export default (route) => ({
  oncreate: () => scrollTo(0, 0),
  view: () => [results(route)],
});
