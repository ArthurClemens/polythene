// @ts-check

import { mixin, sel, selectorRTL, createLayout } from "polythene-core-css";

const alignSide = isRTL => vars => ({}); // eslint-disable-line no-unused-vars
const alignLeft = alignSide(false);
const alignRight = alignSide(true);

const label_padding_before = (selector, vars, isRTL) =>
  sel(selector, {
    " .pe-icon-button__label": {
      [isRTL ? "paddingRight" : "paddingLeft"]: vars.label_padding_before + "px",
    }
  });

const label_padding_after = (selector, vars, isRTL) =>
  sel(selector, {
    " .pe-icon-button__label": {
      [isRTL ? "paddingLeft" : "paddingRight"]: vars.label_padding_after + "px",
    }
  });

const varFns = {
  general_styles: (selector, vars) => [
    sel(selector, [
      alignLeft(vars),
      {
        // don't set button size to facilitate different icon sizes
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        border: "none",

        " .pe-button__content": {
          display: "flex",
          alignItems: "center",
          fontSize: "1rem",
          borderRadius: "50%",
          position: "relative",
        },

        " .pe-icon-button__content": {
          lineHeight: 1,
          borderRadius: "50%",
          pointerEvents: "none"
        },

        // TODO: move wash styles to base button
        " .pe-button__wash": [
          mixin.fit(),
          {
            zIndex: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            opacity: 0
          }
        ],
        // Always show wash on focus but not on click
        "&:focus:not(:active)": {
          " .pe-button__wash": {
            opacity: 1
          },
        },
        // Only show wash on hover when "has hover" class set
        ".pe-button--has-hover:hover": {
          " .pe-button__wash": {
            opacity: 1
          },
        },

      },
      {
        // RTL
        [`*[dir=rtl] ${selector}, .pe-rtl ${selector}`]: [
          alignRight(vars)
        ],
      }
    ])
  ],
  padding: (selector, vars) => [
    sel(selector, {
      " .pe-icon-button__content": {
        padding: vars.padding + "px",
      },
    }),
  ],
  padding_compact: (selector, vars) => [
    sel(selector, {
      ".pe-icon-button--compact": {
        " .pe-icon-button__content": {
          padding: vars.padding_compact + "px"
        }
      },
    }),
  ],
  animation_duration: (selector, vars) => [
    sel(selector, {
      " .pe-button__content, .pe-button__wash": [
        mixin.defaultTransition("all", vars.animation_duration)
      ],
    }),
  ],
  label_font_size: (selector, vars) => [
    sel(selector, {
      " .pe-icon-button__label": {
        fontSize: vars.label_font_size + "px",
      }
    }),
  ],
  label_line_height: (selector, vars) => [
    sel(selector, {
      " .pe-icon-button__label": {
        lineHeight: vars.label_line_height + "px",
      }
    }),
  ],
  label_font_weight: (selector, vars) => [
    sel(selector, {
      " .pe-icon-button__label": {
        fontWeight: vars.label_font_weight,
      }
    }),
  ],
  label_text_transform: (selector, vars) => [
    sel(selector, {
      " .pe-icon-button__label": {
        textTransform: vars.label_text_transform,
      }
    }),
  ],
  label_padding_after: (selector, vars) => [
    sel(selector, {
    }),
    label_padding_after(selector, vars, false),
    label_padding_after(selectorRTL(selector), vars, true),
  ],
  label_padding_before: (selector, vars) => [
    sel(selector, {
    }),
    label_padding_before(selector, vars, false),
    label_padding_before(selectorRTL(selector), vars, true),
  ],
};

export default createLayout({ varFns });
