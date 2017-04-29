/* global it, expect */
import { tidy } from "mithril-jest";

export const runSnapshots = ({tests, renderer: h}) => (
  tests.forEach(test =>
    !test.exclude && it(test.name, () => {
      const html = tidy(h(test.component, test.attrs, test.children));
      expect(html).toMatchSnapshot();
    })
  )
);
