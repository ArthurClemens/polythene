
export const deprecation = (component, { option, newOption, newComponent, since }) => {
  const version = since
    ? `Changed in version ${since}.`
    : "";
  return (
    option && console.warn(`${component}: option '${option}' is deprecated and will be removed in later versions. Use '${newOption}' instead. ${version}`), // eslint-disable-line no-console
    newComponent && !newOption && console.warn(`${version}${component}: this component is deprecated and will be removed in later versions. Use '${newComponent}' instead. ${version}`), // eslint-disable-line no-console
    newComponent && newOption && console.warn(`${version}${component}: this component is deprecated and will be removed in later versions. Use '${newComponent}' with option '${newOption}' instead. ${version}`) // eslint-disable-line no-console
  );
};
