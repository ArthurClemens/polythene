// @ts-check

import { customLayoutFns as customNotificationLayoutFns } from "polythene-css-notification";
import { sel, createLayout } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";

const breakpoint = breakpointSel => (selector, o) => ({
  [breakpointSel]: {
    [selector]: o
  }
});

const breakpointTabletPortraitUp = breakpoint(`@media (min-width: ${themeVars.breakpoint_for_tablet_portrait_up}px)`);

const varFns = {
  general_styles: selector => [
    sel(selector, {
      width: "100%",
      opacity: 1,
      display: "none",
      
      " .pe-notification__content": {
        width: "100%",
        margin: "0 auto",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,     
      }
    }),
    breakpointTabletPortraitUp(selector, {
      ".pe-notification--horizontal": {
        " .pe-notification__title": {
          paddingRight: "30px"
        }
      },
    })
  ],
  min_width: (selector, vars) => [
    breakpointTabletPortraitUp(selector, {
      minWidth: vars.min_width + "px",
    }),
  ],
  max_width: (selector, vars) => [
    breakpointTabletPortraitUp(selector, {
      maxWidth: vars.max_width + "px",
    }),
  ],
  border_radius: (selector, vars) => [
    sel(selector, {
      " .pe-notification__content": {
        borderTopLeftRadius: vars.border_radius + "px",
        borderTopRightRadius: vars.border_radius + "px",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
    })
  ],
};

export default createLayout({
  varFns,
  customVarFns: customNotificationLayoutFns
});
