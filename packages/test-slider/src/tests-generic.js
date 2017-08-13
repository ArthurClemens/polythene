import onChange from "./components/onChange";
import volumeSlider from "./components/volume-slider";

const bullsEyeIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"1.33333\" stroke-linejoin=\"miter\" d=\"M 12,2C 6.47715,2 2,6.4772 2,12C 2,17.5228 6.47715,22 12,22C 17.5228,22 22,17.5228 22,12C 22,6.4772 17.5228,2 12,2 Z M 12,4C 16.4183,4 20,7.5817 20,12C 20,16.4183 16.4183,20 12,20C 7.58172,20 4,16.4183 4,12C 4,7.5817 7.58172,4 12,4 Z M 12,6C 8.68629,6 6,8.6863 6,12C 6,15.3137 8.68629,18 12,18C 15.3137,18 18,15.3137 18,12C 18,8.6863 15.3137,6 12,6 Z M 12,8C 14.2091,8 16,9.7909 16,12C 16,14.2091 14.2091,16 12,16C 9.79086,16 8,14.2091 8,12C 8,9.7909 9.79086,8 12,8 Z M 12,10C 10.8954,10 10,10.8954 10,12C 10,13.1046 10.8954,14 12,14C 13.1046,14 14,13.1046 14,12C 14,10.8954 13.1046,10 12,10 Z \"/></svg>";

const volumeIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z\"/></svg>";

export default ({ Slider, Icon, renderer: h }) => {

  const bullsEyeIcon = h.trust(bullsEyeIconSVG);
  const volumeIcon = h.trust(volumeIconSVG);
  
  const VolumeSlider = volumeSlider({ Slider, Icon, h });

  Slider.theme(".slider-custom-icon", {
    color_light_thumb_on: "#f50057",
    color_light_icon:     "#fff",
    thumb_size:           18
  });

  Slider.theme(".slider-custom-color", {
    color_light_track_active:   "#82b1ff",
    color_light_track_inactive: "#c5cae9",
    color_light_track_value:    "#f50057",
    color_light_thumb_on:       "#f50057"
  });

  return [
    {
      name: "No options (range: 0 to 100, steps are rounded to 1)",
      interactive: true,
      component: onChange({ h, Slider, attrs: {
      }})
    },
    {
      name: "Continuous slider, defaultValue (50)",
      interactive: true,
      component: onChange({ h, Slider, attrs: {
        stepSize: 0,
        defaultValue: 50
      }})
    },
    {
      name: "Options: range: -1 to 1, stepSize: 0.1",
      interactive: true,
      component: onChange({ h, Slider, attrs: {
        min: -1,
        max: 1,
        stepSize: 0.1,
      }})
    },
    {
      name: "Options: ticks, range 0 to 1, stepSize: .1",
      interactive: true,
      component: onChange({
        h,
        Slider,
        attrs: {
          min: 0,
          max: 1,
          stepSize: .1,
          ticks: true
        },
      })
    },
    {
      name: "Option: ticks, range: -5 to 5, stepSize: .5",
      interactive: true,
      component: onChange({
        h,
        Slider,
        attrs: {
          min: -5,
          max: 5,
          stepSize: .5,
          ticks: true
        },
      })
    },
    {
      name: "Use left value for extra \"unspecified value\" step",
      interactive: true,
      component: onChange({
        h,
        Slider,
        attrs: {
          min: -1,
          max: 100,
          defaultValue: -1
        },
        displayFn: value => (value === undefined || value === -1)
          ? "Age (not set)"
          : `Age: ${Math.floor(value * 100) / 100}`
      })
    },
    {
      name: "Options: ticks with pin",
      interactive: true,
      component: Slider,
      attrs: {
        min: 0,
        max: 100,
        stepSize: 10,
        defaultValue: 20,
        pin: true,
        ticks: true
      }
    },
    {
      name: "Option: interactiveTrack (false)",
      interactive: true,
      component: Slider,
      attrs: {
        interactiveTrack: false
      }
    },
    {
      name: "Option: style (colors)",
      interactive: true,
      component: Slider,
      attrs: {
        style: {
          color: "red"
        },
        min: 0,
        max: 100,
        defaultValue: 50
      }
    },
    {
      name: "Option: icon (custom svg)",
      interactive: true,
      component: Slider,
      attrs: {
        min: 0,
        max: 100,
        defaultValue: 50,
        icon: h(Icon, {
          svg: bullsEyeIcon
        }),
        className: "slider-custom-icon"
      }
    },
    {
      name: "Themed slider (colors)",
      interactive: true,
      component: Slider,
      attrs: {
        min: 0,
        max: 100,
        defaultValue: 50,
        className: "slider-custom-color"
      }
    },
    {
      name: "With icons",
      interactive: true,
      component: VolumeSlider
    },
    {
      name: "With icon, pin and ticks",
      interactive: true,
      component: Slider,
      attrs: {
        min: 0,
        max: 100,
        stepSize: 10,
        defaultValue: 2,
        pin: true,
        ticks: true,
        before: h(Icon, {
          svg: volumeIcon
        })
      }
    },
    {
      name: "Option: disabled",
      interactive: true,
      component: Slider,
      attrs: {
        disabled: true,
        value: 50
      }
    },
  ];
};
