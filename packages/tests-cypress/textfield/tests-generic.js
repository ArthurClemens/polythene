import testDefaultValue from "./tests/defaultValue";
import testRender from "./tests/render";

const tests = [
  testDefaultValue,
  testRender,
];

export default ({ TextField, renderer: h, keys: k }) => {
  
  return tests.map(t => 
    t({ rootPath: "/textfield", h, k, TextField })
  );
};

