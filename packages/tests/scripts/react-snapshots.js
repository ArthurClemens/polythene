/* global it, expect */
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

export const runSnapshots = ({tests, renderer}) => (
  tests.forEach(test =>
    !test.exclude && it(test.name, () => {
      const wrapper = shallow(renderer(test.component, test.attrs, test.children));
      expect(toJson(wrapper)).toMatchSnapshot();
    })
  )
);
