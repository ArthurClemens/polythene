import { mixin } from "polythene-css";

const style = (componentVars, tint, scope = "") => {
  return [{
    [scope + ".pe-list-tile"]: {
      " .pe-list-tile__title": {
        color: componentVars["color_" + tint + "_title"]
      },

      "&.pe-list__header": {
        "background-color": "inherit",

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
        "background-color": componentVars["color_" + tint + "_background_selected"]
      }
    }
  }];
};

const noTouch = (componentVars, tint, scope = "") => {
  return [{
    [scope + ".pe-list-tile"]: {
      "&:not(.pe-list__header):not(.pe-list-tile--disabled):hover": {
        "background-color": componentVars["color_" + tint + "_background_hover"]
      }
    }
  }];
};


const createStyles = componentVars => {
  return [
    style(componentVars, "light"), {
      "html.pe-no-touch": [
        noTouch(componentVars, "light", " .pe-list-tile--hoverable")
      ]
    }, {
      ".pe-dark-theme": [
        // inside dark theme
        style(componentVars, "dark", " "),
        // has dark theme
        style(componentVars, "dark", "&")
      ]
    }, {
      "html.pe-no-touch .pe-dark-theme": noTouch(componentVars, "dark", " .pe-list-tile--hoverable")
    }
  ];
};

export default componentVars => mixin.createStyles(componentVars, createStyles);
