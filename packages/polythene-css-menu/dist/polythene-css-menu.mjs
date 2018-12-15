import { vars } from 'polythene-theme';
import { sharedVars, sharedVarFns } from 'polythene-css-shadow';
import { sel, createColor, rgba, selectorRTL, createLayout, createMarker, styler } from 'polythene-core-css';

var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var classes = {
  component: "pe-menu",
  // elements
  panel: "pe-menu__panel",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop: "pe-menu__backdrop",
  // states
  floating: "pe-menu--floating",
  origin: "pe-menu--origin",
  permanent: "pe-menu--permanent",
  showBackdrop: "pe-menu--backdrop",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",
  isTopMenu: "pe-menu--top-menu",
  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

const generalFns = {
  general_styles: selector => [] // eslint-disable-line no-unused-vars

};

const tintFns = tint => ({
  ["color_" + tint + "_background"]: (selector, vars$$1) => [sel(selector, {
    " .pe-menu__panel": {
      "background-color": vars$$1["color_" + tint + "_background"]
    }
  })],
  ["color_" + tint + "_backdrop_background"]: (selector, vars$$1) => [sel(selector, {
    " .pe-menu__backdrop": {
      "background-color": vars$$1["color_" + tint + "_backdrop_background"]
    }
  })]
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));
var color = createColor({
  varFns: {
    lightTintFns,
    darkTintFns
  }
});

const behaviorVars = {
  top_menu: false // set to true to position the menu at the top of the screen, full width

};
const themeVars = Object.assign({}, {
  backdrop: undefined,
  // (Boolean) - if not set, backdrop existence is set by component option
  z: vars.z_menu // z-depth of the menu (not the shadow depth)

}, behaviorVars, sharedVars);
var vars$1 = Object.assign({}, {
  general_styles: true,
  animation_delay: "0s",
  animation_duration: ".180s",
  animation_hide_css: "opacity: 0;",
  animation_hide_origin_effect_css: "transform: scale(0.75);",
  // set to "transform: scale(1)" to reset scaling
  animation_show_css: "opacity: 1;",
  animation_show_origin_effect_css: "transform: scale(1);",
  animation_timing_function: "ease-in-out",
  border_radius: vars.unit_block_border_radius,
  height: undefined,
  // (height value with unit) - if not set, height is set by component option
  min_width: 1.5,
  width_factor: vars.grid_unit_menu,
  widths: [1, 1.5, 2, 3, 4, 5, 6, 7],
  // color vars
  color_light_background: rgba(vars.color_light_background),
  color_dark_background: rgba(vars.color_dark_background),
  color_light_backdrop_background: "rgba(0, 0, 0, .1)",
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)" // text colors are set by content, usually list tiles

}, themeVars);

const alignSide = isRTL => () => ({
  textAlign: isRTL ? "right" : "left"
});

const alignLeft = alignSide(false);
const alignRight = alignSide(true);

const unifyWidth = (vars$$1, width) => width < vars$$1.min_width ? vars$$1.min_width : width;

const widthClass = width => {
  const widthStr = width.toString().replace(".", "-");
  return "pe-menu--width-" + widthStr;
};

const widthStyle = ({
  vars: vars$$1,
  width,
  value
}) => {
  const s = unifyWidth(vars$$1, width);
  return {
    ["." + widthClass(s)]: {
      " .pe-menu__panel": {
        width: value || vars$$1.width_factor * s + "px" // We can't set maxWidth because we don't know the width of the container

      }
    }
  };
};

const widths_min_width_width_factor = (selector, vars$$1) => sel(selector, [vars$$1.widths.map(width => widthStyle({
  vars: vars$$1,
  width
})), {
  " .pe-menu__panel": {
    minWidth: vars.grid_unit_menu * vars$$1.min_width + "px"
  }
}]);

const backdrop = selector => sel(selector, {
  " .pe-menu__backdrop": {
    display: "block"
  }
});

const top_menu = (selector, vars$$1) => sel(selector, [vars$$1.widths.map(width => widthStyle({
  vars: vars$$1,
  width,
  value: "100vw"
})), createMarker(vars$$1, behaviorVars), {
  " .pe-menu__panel": {
    position: "fixed",
    width: "100vw",
    top: 0,
    left: 0,
    right: 0,
    bottom: "auto",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  }
}]);

const z = (selector, vars$$1) => sel(selector, {
  ".pe-menu--floating": {
    " .pe-menu__panel, .pe-menu__backdrop": {
      zIndex: vars$$1.z
    }
  }
});

const varFns = {
  general_styles: (selector, vars$$1) => [sel(selector, [alignLeft(vars$$1), {
    position: "static",
    ".pe-menu--width-auto": {
      width: "auto"
    },
    ".pe-menu--permanent": {
      " .pe-menu__panel": {
        opacity: 1,
        position: "relative"
      }
    },
    ".pe-menu--floating": {
      " .pe-menu__panel": {
        transitionProperty: "opacity, transform"
      }
    },
    " .pe-menu__panel": {
      transitionProperty: "all",
      opacity: 0,
      position: "absolute"
    },
    " .pe-menu__backdrop": {
      display: "none",
      transitionProperty: "all",
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0
    },
    ".pe-menu--backdrop": backdrop(selector),
    ".pe-menu--visible .pe-menu__backdrop": {
      opacity: 1
    },
    ".pe-menu--top-menu": top_menu(selector, vars$$1),
    " .pe-menu__content": {
      overflow: "auto",
      width: "100%",
      height: "100%"
    },
    ".pe-menu--full-height": {
      height: "100%",
      " .pe-menu__panel": {
        height: "100%"
      }
    }
  }]), {
    [selectorRTL(selector)]: alignRight(vars$$1)
  }],
  animation_delay: (selector, vars$$1) => [sel(selector, {
    " .pe-menu__panel, .pe-menu__backdrop": {
      transitionDelay: vars$$1.animation_delay
    }
  })],
  animation_duration: (selector, vars$$1) => [sel(selector, {
    " .pe-menu__panel, .pe-menu__backdrop": {
      transitionDuration: vars$$1.animation_duration
    }
  })],
  animation_timing_function: (selector, vars$$1) => [sel(selector, {
    " .pe-menu__panel, .pe-menu__backdrop": {
      transitionTimingFunction: vars$$1.animation_timing_function
    }
  })],
  animation_show_css: (selector, vars$$1) => [sel(selector, {
    ".pe-menu--visible": {
      " .pe-menu__panel": vars$$1.animation_show_css
    }
  })],
  animation_hide_css: (selector, vars$$1) => [sel(selector, {
    " .pe-menu__panel": vars$$1.animation_hide_css
  })],
  animation_show_origin_effect_css: (selector, vars$$1) => [sel(selector, {
    ".pe-menu--origin.pe-menu--visible": {
      " .pe-menu__panel": vars$$1.animation_show_origin_effect_css
    }
  })],
  animation_hide_origin_effect_css: (selector, vars$$1) => [sel(selector, {
    ".pe-menu--origin:not(.pe-menu--visible)": {
      " .pe-menu__panel": vars$$1.animation_hide_origin_effect_css
    }
  })],
  height: (selector, vars$$1) => [vars$$1.height !== undefined && sel(selector, {
    " .pe-menu__panel": {
      height: vars$$1.height
    }
  })],
  widths: (selector, vars$$1) => [widths_min_width_width_factor(selector, vars$$1)],
  min_width: (selector, vars$$1) => [widths_min_width_width_factor(selector, vars$$1)],
  width_factor: (selector, vars$$1) => [widths_min_width_width_factor(selector, vars$$1)],
  border_radius: (selector, vars$$1) => [sel(selector, {
    " .pe-menu__panel": {
      borderRadius: vars$$1.border_radius + "px"
    }
  })],
  // Theme vars
  backdrop: (selector, vars$$1) => [vars$$1.backdrop && backdrop(selector, vars$$1)],
  top_menu: (selector, vars$$1) => [vars$$1.top_menu && top_menu(selector, vars$$1)],
  z: (selector, vars$$1) => [vars$$1.z && z(selector, vars$$1)],
  // shadow_depth:
  ...sharedVarFns
};
var layout = createLayout({
  varFns
});

const fns = [layout, color];
const selector = `.${classes.component}`;
const addStyle = styler.createAddStyle(selector, fns, vars$1);
const getStyle = styler.createGetStyle(selector, fns, vars$1);
styler.addStyle({
  selectors: [selector],
  fns,
  vars: vars$1
});

export { addStyle, color, getStyle, layout, vars$1 as vars };
