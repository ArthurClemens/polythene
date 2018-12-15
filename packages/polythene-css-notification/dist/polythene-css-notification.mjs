import { vars } from 'polythene-theme';
import { sel, createColor, flex, createLayout, rgba, styler } from 'polythene-core-css';

var classes = {
  component: "pe-notification",
  // elements
  action: "pe-notification__action",
  content: "pe-notification__content",
  holder: "pe-notification__holder",
  placeholder: "pe-notification__placeholder",
  title: "pe-notification__title",
  // states
  hasContainer: "pe-notification--container",
  horizontal: "pe-notification--horizontal",
  multilineTitle: "pe-notification__title--multi-line",
  vertical: "pe-notification--vertical",
  visible: "pe-notification--visible"
};

const generalFns = {
  general_styles: selector => [] // eslint-disable-line no-unused-vars

};

const tintFns = tint => ({
  ["color_" + tint + "_text"]: (selector, vars$$1) => [sel(selector, {
    " .pe-notification__content": {
      color: vars$$1["color_" + tint + "_text"]
    }
  })],
  ["color_" + tint + "_background"]: (selector, vars$$1) => [sel(selector, {
    " .pe-notification__content": {
      background: vars$$1["color_" + tint + "_background"]
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

const varFns = {
  general_styles: selector => [sel(selector, [flex.layoutCenterCenter, {
    // assumes position relative
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: "none",
    justifyContent: "flex-start",
    // For IE 11
    ".pe-multiple--screen": {
      position: "fixed",
      zIndex: vars.z_notification
    }
  }]), {
    ":not(.pe-notification--container) .pe-multiple--container": {
      position: "absolute"
    }
  }]
};
var holderLayout = createLayout({
  varFns
});

const title_single_padding_v_title_padding_h = (selector, vars$$1) => sel(selector, {
  " .pe-notification__title": {
    padding: vars$$1.title_single_padding_v + "px " + vars$$1.title_padding_h + "px"
  }
});

const customLayoutFns = {
  animation_hide_css: (selector, vars$$1) => [sel(selector, vars$$1.animation_hide_css)],
  animation_show_css: (selector, vars$$1) => [sel(selector, {
    ".pe-notification--visible": [vars$$1.animation_show_css]
  })],
  width: (selector, vars$$1) => [sel(selector, {
    " .pe-notification__content": {
      width: vars$$1.width + "px"
    }
  })],
  animation_delay: (selector, vars$$1) => [sel(selector, {
    transitionDelay: vars$$1.animation_delay
  })],
  animation_duration: (selector, vars$$1) => [sel(selector, {
    transitionDuration: vars$$1.animation_duration
  })],
  animation_timing_function: (selector, vars$$1) => [sel(selector, {
    transitionTimingFunction: vars$$1.animation_timing_function
  })],
  side_padding: (selector, vars$$1) => [sel(selector, {
    " .pe-notification__content": {
      padding: "0 " + vars$$1.side_padding + "px"
    }
  })],
  border_radius: (selector, vars$$1) => [sel(selector, {
    " .pe-notification__content": {
      borderRadius: vars$$1.border_radius + "px"
    }
  })],
  title_single_padding_v: (selector, vars$$1) => [title_single_padding_v_title_padding_h(selector, vars$$1)],
  title_padding_h: (selector, vars$$1) => [title_single_padding_v_title_padding_h(selector, vars$$1)],
  font_size: (selector, vars$$1) => [sel(selector, {
    " .pe-notification__title": {
      fontSize: vars$$1.font_size + "px"
    }
  })],
  line_height: (selector, vars$$1) => [sel(selector, {
    " .pe-notification__title": {
      lineHeight: vars$$1.line_height + "px"
    }
  })],
  title_multi_padding_v: (selector, vars$$1) => [sel(selector, {
    ".pe-notification--horizontal": {
      " .pe-notification__title--multi-line": {
        paddingTop: vars$$1.title_multi_padding_v + "px",
        paddingBottom: vars$$1.title_multi_padding_v + "px"
      }
    },
    ".pe-notification--vertical": {
      " .pe-notification__title--multi-line": {
        paddingTop: vars$$1.title_multi_padding_v + "px"
      }
    }
  })]
};
const varFns$1 = Object.assign({}, {
  general_styles: selector => [sel(selector, [flex.layoutCenter, {
    pointerEvents: "all",
    justifyContent: "center",
    margin: "0 auto",
    transitionProperty: "all",
    opacity: 0,
    " .pe-notification__title": {
      flex: "1 0 auto"
    },
    " .pe-notification__action": {
      " .pe-button": {
        margin: 0
      }
    },
    " .pe-notification__content": {
      maxWidth: "100%"
    },
    ".pe-notification--horizontal": {
      " .pe-notification__content": flex.layoutHorizontal,
      " .pe-notification__title": [flex.flex(), {
        alignSelf: "center"
      }],
      " .pe-notification__action": flex.layoutCenter
    },
    ".pe-notification--vertical": {
      " .pe-notification__content": [flex.layoutVertical],
      " .pe-notification__title": {
        paddingBottom: "6px"
      },
      " .pe-notification__action": [flex.layoutEndJustified, {
        width: "100%"
      }]
    }
  }])]
}, customLayoutFns);
var layout = createLayout({
  varFns: varFns$1
});

const buttonPaddingH = 8; // padding, inner text space

var vars$1 = {
  general_styles: true,
  animation_delay: "0s",
  animation_duration: ".3s",
  animation_hide_css: "opacity: 0;",
  animation_show_css: "opacity: 1;",
  animation_timing_function: "ease-in-out",
  border_radius: vars.unit_block_border_radius,
  font_size: 14,
  line_height: 20,
  min_height: 80,
  side_padding: 24 - buttonPaddingH,
  title_multi_padding_v: 20,
  // 24 - natural line height
  title_padding_h: buttonPaddingH,
  title_single_padding_v: 14,
  width: 288,
  color_light_background: rgba(vars.color_light_background),
  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_dark_primary),
  color_dark_background: rgba(vars.color_dark_background),
  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_light_text_primary)
};

const fns = [layout, color];
const selector = `.${classes.component}`;
const holderFns = [holderLayout];
const holderSelector = `.${classes.holder}`;

const addStyle = (customSelector, customVars, {
  mediaQuery
} = {}) => {
  customSelector && styler.addStyle({
    selectors: [customSelector, selector],
    fns,
    vars: vars$1,
    customVars,
    mediaQuery
  });
  customSelector && styler.addStyle({
    selectors: [customSelector, holderSelector],
    fns: holderFns,
    vars: vars$1,
    customVars,
    mediaQuery
  });
};

const getStyle = (customSelector = "", customVars, {
  mediaQuery
} = {}) => styler.getStyle({
  selectors: [customSelector, selector],
  fns,
  vars: vars$1,
  customVars,
  mediaQuery
}).concat(styler.getStyle({
  selectors: [holderSelector],
  fns: holderFns,
  vars: vars$1,
  customVars,
  mediaQuery
}));

styler.addStyle({
  selectors: [holderSelector],
  fns: holderFns,
  vars: vars$1
});
styler.addStyle({
  selectors: [selector],
  fns,
  vars: vars$1
});

export { addStyle, color, customLayoutFns, getStyle, holderLayout, layout, vars$1 as vars };
