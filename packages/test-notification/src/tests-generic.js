
export default ({ renderer: h, keys: k, Notification, Dialog, Button, buttonGroup, containerSelector }) => {

  Notification.theme(".notification-tests-blue-notification", {
    color_dark_background: "#2196F3",
    border_radius: 5
  });

  const dialogOptions = {
    body: "You pressed a message action",
    footer: [
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
    {
      name: "Option: content",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        content: h("div", "This message tells some things using two lines")
      })
    },
    {
      name: "Option: style",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        title: "This message tells some things using two lines",
        style: {
          color: "white",
          backgroundColor: "#2196F3",
          padding: "1.5rem"
        }
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
    {
      name: "Option: transitions",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        title: "Custom transitions",
        transitions: {
          show: el => ({
            el,
            showDuration: .5,
            beforeShow:   () => (el.style.opacity = 0, el.style.transform = "translate3d(0, 20px, 0)"),
            show:         () => (el.style.opacity = 1, el.style.transform = "translate3d(0, 0px,  0)")
          }),
          hide: el => ({
            el,
            hideDuration: .5,
            hide:         () => el.style.opacity = 0,
          })
        }
      })
    },
    {
      name: "Option: showDelay, showDuration, hideDuration",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        title: "Custom timing",
        showDelay: .3,
        showDuration: 1.1,
        hideDuration: 1.5
      })
    },
    {
      name: "Option: transition (show)",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        title: "A one line message",
        transition: "show"
      })
    },
    {
      name: "Option: transition (hide)",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        title: "A one line message",
        transition: "hide"
      })
    },
    {
      name: "Option: no transition",
      interactive: true,
      exclude: true,
      component: buttonGroup({
        title: "A one line message",
        transition: "none"
      })
    },
  ];
};
