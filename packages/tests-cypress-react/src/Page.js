import { h } from "polythene-tests/utils/enhanced-renderer";

const Results = (name, tests) => 
  h("div",
    { className: `tests-${name.replace(/[^\w\d]/g, "-").toLowerCase()}` },
    tests.map(test => {
      if (test.section) {
        return h("div", test.section);
      }
      const testName = `test-${(test.name)}`;
      return h("div", {
        key: testName,
        className: [testName.replace(/[^\w\d]/g, "-").toLowerCase(), test.className || null].join(" "),
      },
      [
        h("div",
          { className: "result-title" },
          test.name
        ),
        h("div", null,
          h("div", null,
            h("div", null,
              h(test.component, test.attrs, test.children)
            )
          )
        )
      ]
      );
    })
  );

const Page = ({ name, tests }) => (
  h("div", [
    Results(name, tests),
  ])
);

export default Page;
