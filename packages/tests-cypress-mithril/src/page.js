import h from "mithril";

const results = ({ name, tests }) => {
  return h(
    "div",
    {
      className: "page",
    },
    tests.map((test) => {
      if (test.section) {
        return h("h3.page__section__title", test.section);
      }
      const testName = `test-${test.name}`;
      return h(
        "div",
        {
          className: ["page__test", test.className || ""].join(" "),
        },
        [
          h("div", { className: "page__test__title" }, test.name),
          h(
            "div",
            { className: "page__test__content" },
            h(test.component, test.attrs, test.children)
          ),
        ]
      );
    })
  );
};

export default (route) => ({
  oncreate: () => scrollTo(0, 0),
  view: () => [results(route)],
});
