// @ts-check

/**
 * @param {string} component 
 * @param {object} params
 * @param {string} [params.option]
 * @param {string} [params.newOption]
 * @param {string} [params.newOption]
 * @param {string} [params.newComponent]
 * @param {string} [params.since]
 */
export const deprecation = (component, { option, newOption, newComponent, since }) => {
  const version = since
    ? `Since version ${since}.`
    : "";
  return (
    option && console.warn(`${component}: option "${option}" is deprecated and will be removed in later versions. Use "${newOption}" instead. ${version}`), // eslint-disable-line no-console
    newComponent && !newOption && console.warn(`${component}: this component is deprecated and will be removed in later versions. Use component "${newComponent}" instead. ${version}`), // eslint-disable-line no-console
    newComponent && newOption && console.warn(`${component}: this component is deprecated and will be removed in later versions. Use component "${newComponent}" with option "${newOption}" instead. ${version}`) // eslint-disable-line no-console
  );
};

/**
 * 
 * @param {string} component 
 * @param {Array<string>} vars 
 */
export const requiredVars = (component, vars) => {
  console.warn(`${component}: required variables: ${vars.join(", ")}.`); // eslint-disable-line no-console
};
