import { styler, rgba } from "polythene-core-css";
import { vars } from "polythene-theme";

const styles = [{
  " .volume": {
    " .pe-header": {
      fontSize: "14px",
      color: rgba(vars.color_light_foreground, vars.blend_light_text_secondary)
    },
    " .pe-slider": {
      color: "#009688",
      margin: "13px 0 11px 0"
    }
  },
  " .pe-dark-tone.volume": {
    " .pe-header": {
      color: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary)
    }
  }
}];

styler.add("polythene-test-slider-volume", styles);

const volumeIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z\"/></svg>";
const alarmIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z\"/></svg>";
const headphonesIconSVG = "<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" baseProfile=\"full\" width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 11.9994,0.998068C 7.02841,0.998068 2.9994,5.02706 2.9994,9.99807L 2.9994,16.9981C 2.9994,18.6551 4.3424,19.9981 5.9994,19.9981L 8.9994,19.9981L 8.9994,11.9981L 4.9994,11.9981L 4.9994,9.99807C 4.9994,6.13207 8.1334,2.99807 11.9994,2.99807C 15.8654,2.99807 18.9994,6.13207 18.9994,9.99807L 18.9994,11.9981L 14.9994,11.9981L 14.9994,19.9981L 17.9994,19.9981C 19.6564,19.9981 20.9994,18.6551 20.9994,16.9981L 20.9994,9.99807C 20.9994,5.02706 16.9704,0.998068 11.9994,0.998068 Z \"/></svg>";

export default ({ h, Slider, Icon }) => {

  const volumeIcon = h.trust(volumeIconSVG);
  const alarmIcon = h.trust(alarmIconSVG);
  const headphonesIcon = h.trust(headphonesIconSVG);
  const defaults = {
    min: 0,
    max: 10,
    step: 0,
  };
  return {
    view: () =>
      h(".volume", [
        h(".header", "Media volume"),
        h(Slider, Object.assign({}, defaults, {
          defaultValue: 4,
          before: h(Icon, {
            svg: volumeIcon
          })
        })),
        h(".header", "Alarm volume"),
        h(Slider, Object.assign({}, defaults, {
          defaultValue: 2,
          before: h(Icon, {
            svg: alarmIcon
          })
        })),
        h(".header", "Headphone volume"),
        h(Slider, Object.assign({}, defaults, {
          defaultValue: 2,
          disabled: true,
          before: h(Icon, {
            svg: headphonesIcon
          })
        }))
      ])
  };
};
