import testDefaultValue from "./tests/defaultValue";

const tests = [
  testDefaultValue
];

export default ({ TextField, renderer: h, keys: k }) => {
  
  return tests.map(t => 
    t({ rootPath: "/textfield", h, k, TextField })
  );
};

