import { renderer, keys, TextField } from "polythene-mithril";
import genericTests from "./tests-generic";
import testRender from "./tests/render";

const tests = [
  testRender
];

const mithrilTests = ({ TextField, renderer: h, keys: k }) => {
  return tests.map(t => 
    t({ rootPath: "/textfield", h, k, TextField })
  );
};

export default []
  .concat(genericTests({ TextField, renderer, keys }))
  .concat(mithrilTests({ TextField, renderer, keys }));
