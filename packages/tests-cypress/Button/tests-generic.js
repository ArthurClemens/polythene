import tests from "./Button";

export default ({ Button, h, a }) => {
  return [tests].map((t) => t({ rootPath: "/Button", h, a, Button }));
};
