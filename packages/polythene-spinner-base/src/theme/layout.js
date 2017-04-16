
const sizes = size => ({
  width: size + "px",
  height: size + "px"
});

const sizesRaised = size => {
  const padding = size / 4;
  const paddedSize = size + padding * 2;
  return {
    width:   paddedSize + "px",
    height:  paddedSize + "px",
    padding: padding    + "px"
  };
};

export default (selector, componentVars) => [{
  [selector]: {
    transitionTimingFunction: "ease-out",
    transitionProperty: "opacity",
    opacity: 0,

    ".pe-spinner--visible, &.pe-spinner--permanent": {
      opacity: 1
    },

    ".pe-spinner--small":   sizes(componentVars.size_small),
    ".pe-spinner--regular": sizes(componentVars.size_regular),
    ".pe-spinner--medium":  sizes(componentVars.size_medium),
    ".pe-spinner--large":   sizes(componentVars.size_large),
    ".pe-spinner--fab":     sizes(componentVars.size_fab),

    ".pe-spinner--raised": {
      position: "relative",
      borderRadius: "50%",

      ".pe-spinner--small":   sizesRaised(componentVars.size_small),
      ".pe-spinner--regular": sizesRaised(componentVars.size_regular),
      ".pe-spinner--medium":  sizesRaised(componentVars.size_medium),
      ".pe-spinner--large":   sizesRaised(componentVars.size_large),
      ".pe-spinner--fab":     sizesRaised(componentVars.size_fab)
    }
  }
}];
