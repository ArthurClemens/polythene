import m from "mithril";
import slider from "polythene-slider";
import icon from "polythene-icon";
import { styler } from "polythene-css";
import { vars } from "polythene-theme";

const styles = [{
  " .volume": {
    " .pe-header": {
      fontSize: "14px",
      color: vars.rgba(vars.color_light_foreground, vars.blend_light_text_secondary)
    },
    " .pe-slider": {
      color: "#009688",
      margin: "13px 0 11px 0"
    }
  },
  " .pe-dark-theme.volume": {
    " .pe-header": {
      color: vars.rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary)
    }
  }
}];

styler.add("polythene-test-slider-volume", styles);

import iconVolume from "mmsvg/google/msvg/av/volume-up";
import iconAlarm from "mmsvg/google/msvg/action/alarm";
import iconHeadphones from "mmsvg/templarian/msvg/headphones";

export default {
  oninit: vnode => 
    vnode.state.defaults = {
      min: 0,
      max: 10,
      step: 0,
    },
  view: vnode => 
    m(".volume", [
      m(".header", "Media volume"),
      m(slider, Object.assign({}, vnode.state.defaults, {
        value: 4,
        before: m(icon, {
          msvg: iconVolume
        })
      })),
      m(".header", "Alarm volume"),
      m(slider, Object.assign({}, vnode.state.defaults, {
        value: 2,
        before: m(icon, {
          msvg: iconAlarm
        })
      })),
      m(".header", "Headphone volume"),
      m(slider, Object.assign({}, vnode.state.defaults, {
        value: 2,
        disabled: true,
        before: m(icon, {
          msvg: iconHeadphones
        })
      }))
    ])
};  
