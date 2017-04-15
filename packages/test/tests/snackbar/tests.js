import m from "mithril";
import snackbar from "polythene-snackbar";
import dialog from "polythene-dialog";
import button from "polythene-button";
import raisedButton from "polythene-raised-button";

snackbar.theme(".snackbar-tests-blue-snackbar", {
  color_dark_background: "#2196F3",
  border_radius: 5
});

const buttonRow = (messageOptions, spawnOptions) => m("div", { style: { margin: "0 0 10px 0" } }, [
  messageOptions.map(opts =>
    m(raisedButton, {
      label: opts.label,
      events: { onclick: () => snackbar.show(opts, spawnOptions) }
    })
  ),
  m(raisedButton, {
    label: "Hide",
    disabled: snackbar.count() === 0,
    events: { onclick: () => snackbar.hide(spawnOptions) }
  }),
  m(raisedButton, {
    label: "Clear",
    disabled: snackbar.count() === 0,
    events: {
      onclick: () => {
        snackbar.hide().then(() => {
          snackbar.clear();
          m.redraw();
        });
      }
    }
  }),
]);

const pattern = (foreground, background) => ({
  "background-image": `radial-gradient(circle at 100% 150%, ${foreground} 24%, ${background} 25%, ${background} 28%, ${foreground} 29%, ${foreground} 36%, ${background} 36%, ${background} 40%, transparent 40%, transparent), radial-gradient(circle at 0 150%, ${foreground} 24%, ${background} 25%, ${background} 28%, ${foreground} 29%, ${foreground} 36%, ${background} 36%, ${background} 40%, transparent 40%, transparent), radial-gradient(circle at 50%  100%, ${background} 10%, ${foreground} 11%, ${foreground} 23%, ${background} 24%, ${background} 30%, ${foreground} 31%, ${foreground} 43%, ${background} 44%, ${background} 50%, ${foreground} 51%, ${foreground} 63%, ${background} 64%, ${background} 71%, transparent 71%, transparent), radial-gradient(circle at 100% 50%, ${background} 5%, ${foreground} 6%, ${foreground} 15%, ${background} 16%, ${background} 20%, ${foreground} 21%, ${foreground} 30%, ${background} 31%, ${background} 35%, ${foreground} 36%, ${foreground} 45%, ${background} 46%, ${background} 49%, transparent 50%, transparent), radial-gradient(circle at 0 50%, ${background} 5%, ${foreground} 6%, ${foreground} 15%, ${background} 16%, ${background} 20%, ${foreground} 21%, ${foreground} 30%, ${background} 31%, ${background} 35%, ${foreground} 36%, ${foreground} 45%, ${background} 46%, ${background} 49%, transparent 50%, transparent)`,
  "background-size": "100px 50px"
});

const variations = [
  {
    label: "1 line",
    title: "A one line message"
  },
  {
    label: "2 lines",
    title: "This message tells some things using two lines"
  },
  {
    label: "1 line action",
    title: "Archived",
    action: m(button, {
      label: "Undo",
      events: {
        onclick: () => {
          snackbar.pause();
          dialog.show(dialogOptions);
        }
      }
    })
  },
  {
    label: "2 line action",
    title: "This message tells some things using two lines",
    layout: "vertical",
    action: m(button, {
      label: "Let me think about it",
      events: {
        onclick: () => {
          snackbar.pause();
          dialog.show(dialogOptions);
        }
      }
    })
  },
  {
    label: "Custom timing",
    title: "Custom timing",
    showDelay: .3,
    showDuration: 1.1,
    hideDuration: 1.5
  }
];

const dialogOptions = {
  body: "You pressed a message action",
  footer: [
    m(button, {
      label: "Cancel",
      events: {
        onclick: () => {
          dialog.hide();
          snackbar.unpause();
        }
      }
    }),
    m(button, {
      label: "OK",
      events: {
        onclick: () => {
          dialog.hide();
          snackbar.hide();
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
    name: "Main screen snackbar",
    interactive: true,
    exclude: true,
    component: {
      view: () => buttonRow(variations)
    }
  },
  {
    name: "Snackbar in container",
    interactive: true,
    exclude: true,
    component: {
      view: () => [
        buttonRow(variations, { spawn: "container1" }),
        m("div",
          {
            style: Object.assign({}, pattern("#fff", "#eceff1"), {
              height: "180px",
              overflow: "hidden",
              position: "relative"
            })
          },
          m(snackbar, { spawn: "container1", position: "container" })
        )
      ]
    }
  },
  {
    name: "Snackbar in container -- dark theme class",
    interactive: true,
    exclude: true,
    class: "pe-dark-tone",
    component: {
      view: () => [
        buttonRow(variations.map(v => Object.assign({}, v, { tone: "light" })), { spawn: "container2" }),
        m("div",
          {
            style: Object.assign({}, pattern("#444", "#263238"), {
              height: "180px",
              overflow: "hidden",
              position: "relative"
            })
          },
          m(snackbar, { spawn: "container2", position: "container" })
        )
      ]
    }
  },
  {
    name: "Dark theme class + light theme class",
    interactive: true,
    exclude: true,
    class: "pe-dark-tone",
    component: {
      view: () => [
        buttonRow(variations.map(v => Object.assign({}, v, { class: "pe-light-tone" })), { spawn: "container3" }),
        m("div",
          {
            style: Object.assign({}, pattern("#444", "#263238"), {
              height: "180px",
              overflow: "hidden",
              position: "relative"
            })
          },
          m(snackbar, { spawn: "container3", position: "container" })
        )
      ]
    }
  },
  {
    name: "Dark theme class + light tone",
    interactive: true,
    exclude: true,
    class: "pe-dark-tone",
    component: {
      view: () => [
        buttonRow(variations.map(v => Object.assign({}, v, { tone: "dark" })), { spawn: "container4" }),
        m("div",
          {
            style: Object.assign({}, pattern("#fff", "#eceff1"), {
              height: "180px",
              overflow: "hidden",
              position: "relative"
            })
          },
          m(snackbar, { spawn: "container4", position: "container" })
        )
      ]
    }
  },
  
];
