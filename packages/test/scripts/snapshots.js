/* global it, expect */
import m from "mithril";
import { tidy } from "mithril-jest";

export const runSnapshots = tests => (
  tests.forEach(test =>
    it(test.name, () => {
      const html = tidy(m(test.component, test.attrs));
      expect(html).toMatchSnapshot();
    })
  )
);
