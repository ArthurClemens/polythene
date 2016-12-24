/* global it, expect */
import { tidy } from "mithril-jest";

export const runSnapshots = tests => (
  tests.forEach(test =>
    it(test.name, () => {
      const content = test.content;
      const html = tidy(content);
      expect(html).toMatchSnapshot();
    })
  )
);
