
export const deprecation = (component, { option, newOption, newComponent, message }) => (
  option && console.warn(`${component}: option '${option}' is deprecated and will be removed in later versions. Use '${newOption}' instead.`), // eslint-disable-line no-console
  newComponent && !newOption && console.warn(`${component}: this component is deprecated and will be removed in later versions. Use '${newComponent}' instead.`), // eslint-disable-line no-console
  newComponent && newOption && console.warn(`${component}: this component is deprecated and will be removed in later versions. Use '${newComponent}' with option '${newOption}' instead.`), // eslint-disable-line no-console
  message && console.warn(`${component}: ${message}`) // eslint-disable-line no-console
);
