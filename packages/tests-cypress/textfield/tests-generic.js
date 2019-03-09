import testDefaultValue from "./tests/defaultValue";
import testRender from "./tests/render";

const tests = [
  testRender,
  testDefaultValue
];

export default ({ TextField, renderer: h, keys: k }) => {
  
  const block = (test, attrs = {}) =>
    h("div",
      {
        style: Object.assign(
          {},
          attrs.dark ? null : { background: "#fff" },
          attrs.fullWidth
            ? null
            : { padding: "10px 15px" }
        )
      },
      test
    );

  return tests.map(t => 
    t({ rootPath: "/textfield", h, k, block, TextField })
  );
};

