import { color, customLayoutFns } from 'polythene-css-notification';
import { vars } from 'polythene-theme';
import { createColor, flex, sel, createLayout, rgba, styler } from 'polythene-core-css';

var notificationClasses = {
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

var classes = Object.assign({}, notificationClasses, {
  component: "pe-notification pe-snackbar",
  // elements
  holder: "pe-snackbar__holder",
  placeholder: "pe-snackbar__placeholder",
  // states
  open: "pe-snackbar--open"
});

var color$1 = createColor({
  superColor: color
});

const varFns = {
  general_styles: selector => [sel(selector, [flex.layoutCenterCenter, {
    position: "fixed",
    top: "auto",
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: vars.z_notification,
    pointerEvents: "none",
    justifyContent: "flex-start",
    // For IE11
    width: "100%"
  }]), {
    [`.pe-notification--container ${selector}`]: {
      position: "relative"
    }
  }]
};
var holderLayout = createLayout({
  varFns
});

const breakpoint = breakpointSel => (selector, o) => ({
  [breakpointSel]: {
    [selector]: o
  }
});

const breakpointTabletPortraitUp = breakpoint(`@media (min-width: ${vars.breakpoint_for_tablet_portrait_up}px)`);
const varFns$1 = {
  general_styles: selector => [sel(selector, {
    width: "100%",
    opacity: 1,
    " .pe-notification__content": {
      width: "100%",
      margin: "0 auto",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }
  }), breakpointTabletPortraitUp(selector, {
    ".pe-notification--horizontal": {
      " .pe-notification__title": {
        paddingRight: "30px"
      }
    }
  })],
  min_width: (selector, vars$$1) => [breakpointTabletPortraitUp(selector, {
    minWidth: vars$$1.min_width + "px"
  })],
  max_width: (selector, vars$$1) => [breakpointTabletPortraitUp(selector, {
    maxWidth: vars$$1.max_width + "px"
  })],
  border_radius: (selector, vars$$1) => [sel(selector, {
    " .pe-notification__content": {
      borderTopLeftRadius: vars$$1.border_radius + "px",
      borderTopRightRadius: vars$$1.border_radius + "px",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }
  })]
};
var layout = createLayout({
  varFns: varFns$1,
  customVarFns: customLayoutFns
});

var vars$1 = {
  general_styles: true,
  animation_hide_css: "",
  animation_show_css: "",
  border_radius: 0,
  max_width: 568,
  min_height: 0,
  min_width: 288,
  color_light_background: rgba(vars.color_light_background),
  color_dark_background: rgba(vars.color_dark_background)
};

const fns = [layout, color$1];
const selector = `.${classes.component.replace(/ /g, ".")}`;
const holderFns = [holderLayout];
const holderSelector = `.${classes.holder.replace(/ /g, ".")}`;

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

export { addStyle, color$1 as color, getStyle, holderLayout, layout, vars$1 as vars };
