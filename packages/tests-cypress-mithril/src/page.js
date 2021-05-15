import h from "mithril";
import { uiLabels } from "polythene-tests/utils/constants";

const results = ({ name, tests }) => {
  return h(".page", null, [
    h(
      "nav",
      null,
      h(
        h.route.Link,
        {
          href: "/",
        },
        uiLabels.back
      )
    ),
    h("h1.page__title", name),
    Object.keys(tests).map((key) => {
      if (tests[key].length === 0) {
        return null;
      }
      return [
        uiLabels[key]
          ? h(
              ".page__content",
              h(
                ".page__content__test",
                null,
                h("h2.page__section__title", uiLabels[key])
              )
            )
          : null,
        tests[key].map((test) =>
          h(
            ".page__content",
            h(".page__content__test", null, [
              h(".page__test__title", test.name),
              h(
                ".page__test__component",
                null,
                h(test.component, test.attrs, test.children)
              ),
            ])
          )
        ),
      ];
    }),
  ]);
};

export default (route) => ({
  oncreate: () => scrollTo(0, 0),
  view: () => [results(route)],
});
