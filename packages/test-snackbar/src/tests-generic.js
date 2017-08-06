
export default ({ renderer: h, keys: k, Snackbar, Dialog, Button, buttonGroup, containerSelector }) => {

  Snackbar.theme(".notification-tests-blue-notification", {
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
            Snackbar.unpause();
          }
        }
      }),
      h(Button, {
        label: "OK",
        events: {
          [k.onclick]: () => {
            Dialog.hide();
            Snackbar.hide();
          }
        }
      })
    ],
    backdrop: true,
    modal: true,
    hideDelay: .2
  };

  const variations = [
    {
      label: "1 line",
      title: "A one line message"
    },
    {
      label: "2 lines",
      title: "This message tells some things using two lines. This message tells some things using two lines."
    },
    {
      label: "1 line action",
      title: "Archived",
      action: h(Button, {
        label: "Undo",
        events: {
          [k.onclick]: () => {
            Snackbar.pause();
            Dialog.show(dialogOptions);
          }
        }
      })
    },
    {
      label: "2 line action",
      title: "This message tells some things using two lines.",
      layout: "vertical",
      action: h(Button, {
        label: "Let me think about it",
        events: {
          [k.onclick]: () => {
            Snackbar.pause();
            Dialog.show(dialogOptions);
          }
        }
      })
    },
    {
      label: "No timeout",
      title: "Press Hide to close",
      timeout: 0
    },
    {
      label: "Custom timing",
      title: "Custom timing",
      showDelay: .3,
      showDuration: 1.1,
      hideDuration: 1.5
    }
  ];

  return [
    {
      name: "Main screen snackbar",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          h(buttonGroup, { variations })
      }
    },
    {
      name: "Snackbar in container",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          h(containerSelector, { buttonGroup, variations, spawn: "container1", position: "container", foreground: "#fff", background: "#eceff1" })
      }
    },
    {
      name: "Snackbar in container -- dark tone",
      interactive: true,
      className: "pe-dark-tone",
      exclude: true,
      component: {
        view: () =>
          h(containerSelector, { buttonGroup, variations, spawn: "container2", position: "container", foreground: "#444", background: "#263238", tone: "light" })
      }
    },
    
  ];
};
