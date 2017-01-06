import { mixin } from "polythene-css";

const style = (componentVars, tint, scope = "") => {
  return [{
    [scope + ".pe-list-tile"]: {
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

const noTouch = (componentVars, tint, scope = "") => {
  return [{
    [scope + ".pe-list-tile"]: {
      "&:not(.pe-list__header):not(.pe-list-tile--disabled):hover": {
        " .pe-list-tile__primary, pe-list-tile__secondary": {
          "background-color": componentVars["color_" + tint + "_background_hover"]
        }
      }
    }
  }];
};


const createStyles = componentVars => {
  return [
    style(componentVars, "light"), {
      "html.pe-no-touch": [
        noTouch(componentVars, "light", " .pe-list-tile--hoverable"),
        noTouch(componentVars, "light", " .pe-list--hoverable ")
      ]
    }, {
      ".pe-dark-theme": [
        // inside dark theme
        style(componentVars, "dark", " "),
        // has dark theme
        style(componentVars, "dark", "&")
      ]
    },
    {
      "html.pe-no-touch .pe-dark-theme": [
        noTouch(componentVars, "dark", " .pe-list-tile--hoverable"),
        noTouch(componentVars, "dark", ".pe-list--hoverable "),
        noTouch(componentVars, "dark", " .pe-list--hoverable ")
      ],
      "html.pe-no-touch .pe-list--hoverable .pe-dark-theme": noTouch(componentVars, "dark", " ")
    }
  ];
};

export default componentVars => mixin.createStyles(componentVars, createStyles);
