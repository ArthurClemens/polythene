/*
SAM pattern for state management.
See meiosis.org for examples
*/

import flyd from "flyd";

export const getUpdate = flyd.stream;

const applyUpdate = afterUpdate => (model, modelUpdate) => {
  const newModel = modelUpdate(model);
  afterUpdate();
  return newModel;
};

export const getModels = (initialModel, update, afterUpdate) =>
  flyd.scan(applyUpdate(afterUpdate), initialModel, update);
