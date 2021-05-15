import * as fromPolythene from "polythene-mithril";
import { h, a } from "cyano-mithril";
import createGenericTests from "./generic";
import { sectionKeys } from "../constants";

const testProps = { fromPolythene, h, a };

const createMithrilTests = () => ({});

const genericTests = createGenericTests(testProps);
const mithrilTests = createMithrilTests(testProps);

export const Switch = Object.assign(
  {},
  genericTests,
  Object.keys(sectionKeys).reduce(
    (acc, key) => ({
      ...acc,
      [key]: []
        .concat(genericTests[key])
        .concat(mithrilTests[key])
        .filter(Boolean),
    }),
    {}
  )
);
