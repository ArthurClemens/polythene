import m from "mithril";
import notification from "polythene-notification";
import dialog from "polythene-dialog";
import button from "polythene-button";
import raisedButton from "polythene-raised-button";

notification.theme(".notification-tests-blue-notification", {
  color_dark_background: "#2196F3",
  border_radius: 5
});

const buttonRow = (messageOptions, spawnOptions) => [
  m(raisedButton, {
    label: "Show",
    events: { onclick: () => notification.show(messageOptions, spawnOptions) }
  }),
  m(raisedButton, {
    label: "Hide",
    disabled: notification.count() === 0,
    events: { onclick: () => notification.hide(spawnOptions) }
  }),
  m(raisedButton, {
    label: "Clear",
    disabled: notification.count() === 0,
    events: {
      onclick: () => {
        notification.hide().then(() => {
          notification.clear();
          m.redraw();
        });
      }
    }
  }),
];

const dialogOptions = {
  body: "You pressed a message action",
  footer: [
    m(button, {
      label: "Cancel",
      events: {
        onclick: () => {
          dialog.hide();
          notification.unpause();
        }
      }
    }),
    m(button, {
      label: "OK",
      events: {
        onclick: () => {
          dialog.hide();
          notification.hide();
        }
      }
    })
  ],
  backdrop: true,
  modal: true,
  hideDelay: .2
};

export const tests = [
  {
    name: "Option: title (1 line)",
    interactive: true,
    exclude: true,
    component: {
      view: () => buttonRow({
        title: "A one line message",
      })
    }
  },
  {
    name: "Option: title (2 lines)",
    interactive: true,
    exclude: true,
    component: {
      view: () => buttonRow({
        title: "This message tells some things using two lines"
      })
    }
  },
  {
    name: "Option: title (1 line) as function",
    interactive: true,
    exclude: true,
    component: {
      view: () => buttonRow(() => ({
        title: "A one line message",
      }))
    }
  },
  {
    name: "Option: content",
    interactive: true,
    exclude: true,
    component: {
      view: () => buttonRow({
        content: m("div", "This message tells some things using two lines")
      })
    }
  },
  {
    name: "Option: style",
    interactive: true,
    exclude: true,
    component: {
      view: () => buttonRow({
        title: "This message tells some things using two lines",
        style: {
          color: "orange",
          backgroundColor: "#4E342E",
          padding: "1.5rem"
        }
      })
    }
  },
  {
    name: "Themed (color and border radius)",
    interactive: true,
    exclude: true,
    component: {
      view: () => buttonRow({
        title: "This message tells some things using two lines",
        class: "notification-tests-blue-notification"
      })
    }
  },
  {
    name: "Option: title (1 line), action",
    interactive: true,
    exclude: true,
    component: {
      view: () => buttonRow({
        title: "Archived",
        action: m(button, {
          label: "Undo",
          events: {
            onclick: () => {
              notification.pause();
              dialog.show(dialogOptions);
            }
          }
        })
      })
    }
  },
  {
    name: "Option: title (1 line), action -- light tone",
    interactive: true,
    exclude: true,
    component: {
      view: () => buttonRow({
        title: "Archived",
        tone: "light",
        action: m(button, {
          label: "Undo",
          events: {
            onclick: () => {
              notification.pause();
              dialog.show(dialogOptions);
            }
          }
        })
      })
    }
  },
  {
    name: "Option: title (2 lines), action, layout (\"vertical\")",
    interactive: true,
    exclude: true,
    component: {
      view: () => buttonRow({
        title: "This message tells some things using two lines",
        layout: "vertical",
        action: m(button, {
          label: "Let me think about it",
          events: {
            onclick: () => {
              notification.pause();
              dialog.show(dialogOptions);
            }
          }
        })
      })
    }
  },
  {
    name: "Multiple ids",
    interactive: true,
    exclude: true,
    component: {
      view: () => [
        m("div", buttonRow(
          {
            title: "A one line message"
          },
          {
            id: "one"
          }
        )),
        m("div", buttonRow(
          {
            title: "This message tells some things using two lines"
          },
          {
            id: "two"
          }
        ))
      ]
    }
  },
  {
    name: "Option: containerSelector",
    interactive: true,
    exclude: true,
    component: {
      view: () => [
        buttonRow(
          {
            title: "Notification in a container",
            containerSelector: "#notifs1"
          },
          {
            spawn: "container1"
          }
        ),
        m("#notifs1",
          {
            style: {
              position: "relative",
              height: "180px",
            }
          },
          m(notification, { spawn: "container1", position: "container" })
        ),
        buttonRow(
          {
            title: "Notification in container two",
            containerSelector: "#notifs2",
          },
          {
            spawn: "container2"
          }
        ),
        m("#notifs2",
          {
            style: {
              position: "relative",
              height: "180px",
            }
          },
          m(notification, { spawn: "container2", position: "container" })
        )
      ]
    }
  },
  {
    name: "Option: transitions",
    interactive: true,
    exclude: true,
    component: {
      view: () => buttonRow({
        title: "Custom transitions",
        transitions: {
          show: (el) => ({
            el,
            showDuration: .5,
            beforeShow:   () => (el.style.opacity = 0, el.style.transform = "translate3d(0, 20px, 0)"),
            show:         () => (el.style.opacity = 1, el.style.transform = "translate3d(0, 0px,  0)")
          }),
          hide: (el) => ({
            el,
            hideDuration: .5,
            hide:         () => el.style.opacity = 0,
          })
        }
      })
    }
  },
  {
    name: "Option: showDelay, showDuration, hideDuration",
    interactive: true,
    exclude: true,
    component: {
      view: () => buttonRow({
        title: "Custom timing",
        showDelay: .3,
        showDuration: 1.1,
        hideDuration: 1.5
      })
    }
  },
  {
    name: "Option: transition (show)",
    interactive: true,
    exclude: true,
    component: {
      view: () => buttonRow({
        title: "A one line message",
        transition: "show"
      })
    }
  },
  {
    name: "Option: transition (hide)",
    interactive: true,
    exclude: true,
    component: {
      view: () => buttonRow({
        title: "A one line message",
        transition: "hide"
      })
    }
  },
  {
    name: "Option: no transition",
    interactive: true,
    exclude: true,
    component: {
      view: () => buttonRow({
        title: "A one line message",
        transition: "none"
      })
    }
  },
  
];
