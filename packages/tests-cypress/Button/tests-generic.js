import tests from "./Button";

export default ({ fromPolythene, h, a }) => {
  return tests({ h, a, ...fromPolythene });
};
