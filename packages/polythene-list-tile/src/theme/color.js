import { styler } from "polythene-css";

const style = (componentVars, scope, selector, tint) => {
  return [{
    [scope + selector]: {
      " .pe-list-tile__title": {
        color: componentVars["color_" + tint + "_title"]
      },

      "&.pe-list__header": {
        " .pe-list-tile__primary, pe-list-tile__secondary": {
          "background-color": "inherit"
        },

        " .pe-list-tile__title": {
          color: componentVars["color_" + tint + "_list_header"]
        }
      },

      " .pe-list-tile__content, .pe-list-tile__subtitle": {
        color: componentVars["color_" + tint + "_subtitle"]
      },

      "&.pe-list-tile--disabled": {
        "&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle": {
          color: componentVars["color_" + tint + "_text_disabled"]
        }
      },
      "&.pe-list-tile--selected": {
        " .pe-list-tile__primary, pe-list-tile__secondary": {
          "background-color": componentVars["color_" + tint + "_background_selected"]
        }
      }
    }
  }];
};

const noTouchStyle = (componentVars, scope, selector, tint) => {
  return [{
    [scope + selector + ":hover"]: {
      "&:not(.pe-list__header):not(.pe-list-tile--disabled)": {
        " .pe-list-tile__primary, pe-list-tile__secondary": {
          "background-color": componentVars["color_" + tint + "_background_hover"]
        }
      }
    }
  }];
};

const createStyles = (componentVars, className = "") => {
  const selector = `${className}.pe-list-tile`;
  return [
    style(componentVars,        "",                                                         selector, "light"),
    style(componentVars,        ".pe-dark-theme ",                                          selector, "dark" ), // inside dark theme
    noTouchStyle(componentVars, "html.pe-no-touch .pe-list-tile--hoverable",                selector, "light"),
    noTouchStyle(componentVars, "html.pe-no-touch .pe-dark-theme .pe-list-tile--hoverable", selector, "dark"),
    noTouchStyle(componentVars, "html.pe-no-touch .pe-list--hoverable ",                    selector, "light"),
    noTouchStyle(componentVars, "html.pe-no-touch .pe-dark-theme .pe-list--hoverable ",     selector, "dark"),
  ];
};

export default componentVars => styler.createStyles(componentVars, createStyles);
