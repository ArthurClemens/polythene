import { SnackbarCSS } from "polythene-css";

export default ({ h, a, Snackbar, Dialog, Button, buttonGroup, containerSelector }) => {

  SnackbarCSS.addStyle(".snackbar-tests-blue-snackbar", {
    color_light_background: "#b3e5fc",
    color_dark_background:  "#2196F3",
    color_light_text:       "#222",
    color_dark_text:        "#fff",
    border_radius:          10,
    width:                  288,
  });

  const dialogOptions = {
    body: "You pressed a message action",
    footerButtons: [
      h(Button, {
        label: "Cancel",
        events: {
          [a.onclick]: () => {
            Dialog.hide();
            Snackbar.unpause();
          }
        }
      }),
      h(Button, {
        label: "OK",
        events: {
          [a.onclick]: () => {
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
          [a.onclick]: () => {
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
          [a.onclick]: () => {
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
    },
    {
      label: "Themed",
      title: "Themed (color, width, border radius)",
      className: "snackbar-tests-blue-snackbar",
    }
  ];

  return [
    {
      name: "Main screen snackbar",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          h(buttonGroup, { id: "Main screen snackbar", variations })
      }
    },
    {
      name: "Light tone",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          h(buttonGroup, { id: "Light tone", variations, snackbarOptions: { tone: "light" } })
      }
    },
    {
      name: "Snackbar in container",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          h(containerSelector, { id: "Snackbar in container", buttonGroup, variations, spawn: "container1", position: "container", foreground: "#fff", background: "#eceff1" })
      }
    },
    {
      name: "Snackbar in container -- dark tone",
      interactive: true,
      className: "pe-dark-tone",
      exclude: true,
      component: {
        view: () =>
          h(containerSelector, { id: "Snackbar in container -- dark tone", buttonGroup, variations, spawn: "container2", position: "container", foreground: "#444", background: "#263238", tone: "light" })
      }
    },
  ];
};
