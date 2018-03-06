
export const deprecation = (component, deprecatedOption, newOption) =>
  console.warn(`${component}: option '${deprecatedOption}' is deprecated and will be removed in later versions. Use '${newOption}' instead.`);
