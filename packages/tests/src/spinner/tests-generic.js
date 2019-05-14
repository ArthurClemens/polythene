import opener from "./components/opener";
import progressOpener from "./components/progress-opener";
import progressSlider from "./components/progress-slider";
import { MaterialDesignSpinnerCSS, MaterialDesignProgressSpinnerCSS, IOSSpinnerCSS } from "polythene-css";

export default ({ MaterialDesignSpinner, MaterialDesignProgressSpinner, IOSSpinner, Button, Slider, h, a }) => {

  MaterialDesignSpinnerCSS.addStyle(".tests-spinner-themed-md-spinner", {
    color_light_1:                 "orange",
    color_light_2:                 "red",
    color_light_3:                 "orange",
    color_light_4:                 "red",
    color_light_raised_background: "#222",
    rotation_duration:             3
  });

  MaterialDesignProgressSpinnerCSS.addStyle(".tests-spinner-themed-md-progress-spinner", {
    size_regular:                  42,
    border_width_regular:          2,
    color_light_raised_background: "#42a5f5",
    color_light:                   "#fff",
  });

  MaterialDesignSpinnerCSS.addStyle(".tests-spinner-transitions", {
    animation_duration:        ".8s",
    animation_delay:           ".2s",
    animation_timing_function: "cubic-bezier(0.09, 0.04, 0.16, 0.87)",
    animation_hide_css:        "opacity: 0; transform: scale(0.1);",
    animation_show_css:        "opacity: 1; transform: scale(1.0);"
  });

  IOSSpinnerCSS.addStyle(".tests-spinner-themed-ios-spinner", {
    color_light:                 "green",
    color_dark:                  "yellow",
    rotation_animation_duration: "3s"
  });

  return [
    {
      section: "Material Design Spinner",
    },
    {
      name: "Option: permanent -- Material Design Spinner",
      component: MaterialDesignSpinner,
      attrs: {
        permanent: true
      }
    },
    // {
    //   name: "Option: permanent -- Material Design Spinner, before, after",
    //   component: MaterialDesignSpinner,
    //   attrs: {
    //     permanent: true,
    //     before: "Before",
    //     after: "After"
    //   }
    // },
    {
      name: "Option: size -- Material Design Spinner",
      interactive: true,
      component: opener({
        h,
        a,
        Button,
        Spinner: MaterialDesignSpinner,
        spinners: [
          { size: "small" },
          { size: "regular" },
          { size: "medium" },
          { size: "large" },
          { size: "fab" }
        ]
      })
    },
    {
      name: "Option: raised -- Material Design Spinner",
      interactive: true,
      component: opener({
        h,
        a,
        Button,
        Spinner: MaterialDesignSpinner,
        spinners: [
          { raised: true, size: "small" },
          { raised: true, size: "regular" },
          { raised: true, size: "medium" },
          { raised: true, size: "large" },
          { raised: true, size: "fab" }
        ]
      })
    },
    {
      name: "Option: style (color) -- Material Design Spinner",
      interactive: true,
      component: opener({
        h,
        a,
        Button,
        Spinner: MaterialDesignSpinner,
        spinners: [
          {
            singleColor: true,
            style: {
              color: "#2196F3"
            }
          }
        ]
      })
    },
    {
      name: "Theme (color, rotation duration) -- Material Design Spinner",
      interactive: true,
      component: opener({
        h,
        a,
        Button,
        Spinner: MaterialDesignSpinner,
        spinners: [
          {
            className: "tests-spinner-themed-md-spinner",
            raised: true,
          }
        ]
      })
    },
    {
      name: "Transition as theme",
      interactive: true,
      component: opener({
        h,
        a,
        Button,
        Spinner: MaterialDesignSpinner,
        spinners: [
          { className: "tests-spinner-transitions" }
        ]
      })
    },

    {
      section: "iOS Spinner",
    },
    {
      name: "Option: size -- iOS Spinner",
      interactive: true,
      component: opener({
        h,
        a,
        Button,
        Spinner: IOSSpinner,
        spinners: [
          { size: "small" },
          { size: "regular" },
          { size: "medium" },
          { size: "large" },
          { size: "fab" }
        ]
      })
    },
    {
      name: "Option: style (color) -- iOS Spinner",
      interactive: true,
      component: opener({
        h,
        a,
        Button,
        Spinner: IOSSpinner,
        spinners: [
          {
            singleColor: true,
            style: {
              color: "#2196F3"
            }
          }
        ]
      })
    },
    {
      name: "Theme (color and animation duration) -- iOS Spinner",
      interactive: true,
      component: opener({
        h,
        a,
        Button,
        Spinner: IOSSpinner,
        spinners: [
          { className: "tests-spinner-themed-ios-spinner" }
        ]
      })
    },

    {
      section: "Material Design Progress Spinner",
    },
    {
      name: "Option: permanent",
      component: {
        view: () => 
          h(MaterialDesignProgressSpinner, {
            permanent: true,
            percentage: .75
          })
      }
    },
    {
      name: "Emulating progress to 100% -- Material Design Progress Spinner",
      interactive: true,
      component: progressOpener({
        h,
        a,
        Button,
        Spinner: MaterialDesignProgressSpinner
      })
    },
    {
      name: "Interactive -- Material Design Progress Spinner",
      interactive: true,
      component: progressSlider({
        h,
        a,
        Button,
        Spinner: MaterialDesignProgressSpinner,
        Slider,
        showActivateButton: true,
      })
    },
    {
      name: "Interactive (animated, updateDuration) -- Material Design Progress Spinner",
      interactive: true,
      component: progressSlider({
        h,
        a,
        Button,
        Spinner: MaterialDesignProgressSpinner,
        Slider,
        showActivateButton: false,
        animated: true,
        updateDuration: .4
      })
    },
    {
      name: "Theme (color, size) - Material Design Progress Spinner",
      interactive: true,
      component: progressOpener({
        h,
        a,
        Button,
        Spinner: MaterialDesignProgressSpinner,
        spinners: [
          {
            className: "tests-spinner-themed-md-progress-spinner",
            raised: true,
          }
        ],
        permanent: false,
      })
    },

    {
      section: "Dark tone",
    },
    {
      name: "Material Design Spinner -- dark tone class -- Material Design Spinner",
      interactive: true,
      className: "pe-dark-tone",
      component: opener({
        h,
        a,
        Button,
        Spinner: MaterialDesignSpinner
      })
    },
    {
      name: "iOS Spinner -- dark tone class -- Material Design Spinner",
      interactive: true,
      className: "pe-dark-tone",
      component: opener({
        h,
        a,
        Button,
        Spinner: IOSSpinner
      })
    }
  ];
};


