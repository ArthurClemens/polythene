import tests from "./Switch";

export default ({ fromPolythene, h, a }) => {
  return tests({ h, a, ...fromPolythene });
};
