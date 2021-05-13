import testDefaultValue from "./tests/defaultValue";
// import testRender from "./tests/render";

const tests = [
  testDefaultValue,
  // testRender,
];

export default ({ TextField, h, a }) => {
  return tests.map((t) => t({ rootPath: "/TextField", h, a, TextField }));
};
