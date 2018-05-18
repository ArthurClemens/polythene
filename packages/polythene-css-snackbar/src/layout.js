import { vars as defaultVars } from "polythene-theme";
import { customLayoutFns as customNotificationLayoutFns } from "polythene-css-notification";

const sel = (selector, o) => ({
  [selector]: o
});

const breakpoint = breakpointSel => (selector, o) => ({
  [breakpointSel]: {
    [selector]: o
  }
});

const breakpointTabletPortraitUp = breakpoint(`@media (min-width: ${defaultVars.breakpoint_for_tablet_portrait_up}px)`);

const createVarFns = isCustom => Object.assign(
  {},
  isCustom && customNotificationLayoutFns,
  {
    general_styles: selector => [
      sel(selector, {
        width: "100%",
        opacity: 1,
        
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
        },
      })
    ],
  }
);

export default (selector, componentVars, customVars) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  const isCustom = !!customVars;
  const varFns = createVarFns(isCustom);
  return Object.keys(currentVars).map(v => (
    varFns[v] !== undefined 
      ? varFns[v](selector, allVars)
      : null
  )).filter(s => s);
};
