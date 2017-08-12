import opener from "./components/opener";
import progressOpener from "./components/progress-opener";
import progressSlider from "./components/progress-slider";

export default ({ MaterialDesignSpinner, MaterialDesignProgressSpinner, IOSSpinner, RaisedButton, Slider, renderer, keys }) => {

  MaterialDesignSpinner.theme(".tests-spinner-themed-md-spinner", {
    color_light_1: "orange",
    color_light_2: "red",
    color_light_3: "orange",
    color_light_4: "red",
  });

  IOSSpinner.theme(".tests-spinner-themed-ios-spinner", {
    color_light: "green",
    color_dark:  "yellow"
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
    {
      name: "Option: size -- Material Design Spinner",
      interactive: true,
      component: opener({
        renderer,
        keys,
        RaisedButton,
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
      name: "Option: raised, z -- Material Design Spinner",
      interactive: true,
      component: opener({
        renderer,
        keys,
        RaisedButton,
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
      name: "Theme (color) -- Material Design Spinner",
      interactive: true,
      component: opener({
        renderer,
        keys,
        RaisedButton,
        Spinner: MaterialDesignSpinner,
        spinners: [
          { className: "tests-spinner-themed-md-spinner" }
        ]
      })
    },
    {
      name: "Option: style (color) -- Material Design Spinner",
      interactive: true,
      component: opener({
        renderer,
        keys,
        RaisedButton,
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
      section: "iOS Spinner",
    },
    {
      name: "Option: size -- iOS Spinner",
      interactive: true,
      component: opener({
        renderer,
        keys,
        RaisedButton,
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
      name: "Theme (color) -- iOS Spinner",
      interactive: true,
      component: opener({
        renderer,
        keys,
        RaisedButton,
        Spinner: IOSSpinner,
        spinners: [
          { className: "tests-spinner-themed-ios-spinner" }
        ]
      })
    },
    {
      name: "Option: style (color) -- iOS Spinner",
      interactive: true,
      component: opener({
        renderer,
        keys,
        RaisedButton,
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
      section: "Material Design Progress Spinner",
    },
    {
      name: "Option: permanent",
      component: MaterialDesignProgressSpinner,
      attrs: {
        permanent: true,
        percentage: .75
      }
    },
    {
      name: "Emulating progress to 100% -- Material Design Progress Spinner",
      interactive: true,
      component: progressOpener({
        renderer,
        keys,
        RaisedButton,
        Spinner: MaterialDesignProgressSpinner
      })
    },
    {
      name: "Interactive (animated, updateDuration) -- Material Design Progress Spinner",
      interactive: true,
      component: progressSlider({
        renderer,
        keys,
        RaisedButton,
        Spinner: MaterialDesignProgressSpinner,
        Slider,
        showActivateButton: true,
      })
    },
    {
      name: "Interactive (animated) -- Material Design Progress Spinner",
      interactive: true,
      component: progressSlider({
        renderer,
        keys,
        RaisedButton,
        Spinner: MaterialDesignProgressSpinner,
        Slider,
        showActivateButton: false,
        animated: true,
        updateDuration: .3
      })
    },

    // Dark tone

    {
      name: "Material Design Spinner -- dark tone class -- Material Design Spinner",
      interactive: true,
      className: "pe-dark-tone",
      component: opener({
        renderer,
        keys,
        RaisedButton,
        Spinner: MaterialDesignSpinner
      })
    },
    {
      name: "iOS Spinner -- dark tone class -- Material Design Spinner",
      interactive: true,
      className: "pe-dark-tone",
      component: opener({
        renderer,
        keys,
        RaisedButton,
        Spinner: IOSSpinner
      })
    }
  ];
};


