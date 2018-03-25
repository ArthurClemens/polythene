import { NotificationCSS } from "polythene-css";

export default ({ renderer: h, keys: k, Notification, Dialog, Button, buttonGroup, containerSelector }) => {

  NotificationCSS.addStyle(".notification-tests-blue-notification", {
    color_dark_background: "#2196F3",
    border_radius: 5
  });

  NotificationCSS.addStyle(".notification-tests-transitions", {
    animation_duration:        ".8s",
    animation_delay:           ".2s",
    animation_timing_function: "cubic-bezier(0.09, 0.04, 0.16, 0.87)",
    animation_hide_css:        "opacity: 0; transform: scale(0.8);",
    animation_show_css:        "opacity: 1; transform: scale(1.0);"
  });

  const dialogOptions = {
    body: "You pressed a message action",
    footerButtons: [
      h(Button, {
        label: "Cancel",
        events: {
          [k.onclick]: () => {
            Dialog.hide();
            Notification.unpause();
          }
        }
      }),
      h(Button, {
        label: "OK",
        events: {
          [k.onclick]: () => {
            Dialog.hide();
            Notification.hide();
          }
        }
      })
    ],
    backdrop: true,
    modal: true,
    hideDelay: .2
  };

  const MultipleIds1 = buttonGroup(
    { title: "A one line message" },
    { id: "one" }
  );

  const MultipleIds2 = buttonGroup(
    { title: "This message tells some things using two lines" },
    { id: "two" }
  );

  return [
    {
      name: "Option: title (1 line)",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        title: "A one line message",
      })
    },
    {
      name: "Option: title (2 lines)",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        title: "This message tells some things using two lines",
      })
    },
    {
      name: "Option: title (1 line) as function",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        title: "A one line message",
      })
    },
    // {
    //   name: "Option: content",
    //   interactive: true,
    //   exclude: true,
    //   component: buttonGroup({
    //     content: h("div", "This message tells some things using two lines")
    //   })
    // },
    {
      name: "Option: style",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        title: "This message tells some things using two lines",
        style: {
          color: "white",
          backgroundColor: "#2196F3",
          padding: "1.5rem",
        },
      })
    },
    {
      name: "Themed (color and border radius)",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        title: "This message tells some things using two lines",
        className: "notification-tests-blue-notification"
      })
    },
    {
      name: "Option: transitions",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        title: "Custom transitions",
        transitions: {
          show: ({ el }) => ({
            el,
            duration:   .5,
            before:     () => (el.style.opacity = 0, el.style.transform = "translate3d(0, 20px, 0)"),
            transition: () => (el.style.opacity = 1, el.style.transform = "translate3d(0, 0px,  0)")
          }),
          hide: ({ el }) => ({
            el,
            duration:   .5,
            transition: () => el.style.opacity = 0,
          })
        }
      })
    },
    {
      name: "Transitions as theme",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        title: "Transitions as theme",
        className: "notification-tests-transitions"
      })
    },
    {
      name: "Option: showDelay, showDuration, hideDuration",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        title: "Custom timing",
        showDuration: .9,
        hideDuration: 1.2,
        hideDelay: .3,
        showTimingFunction: "ease-in-out",
        hideTimingFunction: "cubic-bezier(0.09, 0.04, 0.16, 0.87)",
      })
    },
    {
      name: "Option: title (1 line), action",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        title: "Archived",
        action: h(Button, {
          label: "Undo",
          events: {
            [k.onclick]: () => {
              Notification.pause();
              Dialog.show(dialogOptions);
            }
          }
        })
      })
    },
    {
      name: "Option: title (1 line), action -- light tone",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        title: "Archived",
        tone: "light",
        action: h(Button, {
          label: "Undo",
          events: {
            [k.onclick]: () => {
              Notification.pause();
              Dialog.show(dialogOptions);
            }
          }
        })
      })
    },
    {
      name: "Option: title (2 lines), action, layout horizontal",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        title: "Connection timed out. Showing limited messages.",
        action: h(Button, {
          label: "Retry",
          events: {
            [k.onclick]: () => {
              Notification.pause();
              Dialog.show(dialogOptions);
            }
          }
        })
      })
    },
    {
      name: "Option: title (2 lines), action, layout vertical",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        title: "This message tells some things using two lines",
        layout: "vertical",
        action: h(Button, {
          label: "Let me think about it",
          events: {
            [k.onclick]: () => {
              Notification.pause();
              Dialog.show(dialogOptions);
            }
          }
        })
      })
    },
    {
      name: "Multiple ids",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          h("div", [
            h(MultipleIds1, { key: "one" }),
            h(MultipleIds2, { key: "two" }),
          ])
      }
    },
    {
      name: "Option: containerSelector",
      interactive: true,
      exclude: true,
      component: containerSelector(buttonGroup)
    },
  ];
};
