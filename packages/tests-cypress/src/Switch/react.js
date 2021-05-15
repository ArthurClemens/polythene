import * as fromPolythene from "polythene-react";
import { a } from "cyano-react";
import { h } from "polythene-tests/utils/enhanced-renderer";
import createGenericTests from "./generic";
import { sectionKeys } from "../constants";

const testProps = { fromPolythene, h, a };

const createReactTests = () => ({});

const genericTests = createGenericTests(testProps);
const reactTests = createReactTests(testProps);

export const Switch = Object.assign(
  {},
  genericTests,
  Object.keys(sectionKeys).reduce(
    (acc, key) => ({
      ...acc,
      [key]: []
        .concat(genericTests[key])
        .concat(reactTests[key])
        .filter(Boolean),
    }),
    {}
  )
);
