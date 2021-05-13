import tests from "./Switch";

export default ({ Switch, h, a }) => {
  return [tests].map((t) => t({ rootPath: "/Switch", h, a, Switch }));
};
