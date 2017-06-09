import { shortText, longText, commonDialogProps } from "./shared";

export default ({ renderer, keys, Dialog, Button, RaisedButton }) => {

  const Opener = (dialogAttrs, label = "Open") => renderer(RaisedButton, {
    label,
    events: {
      [keys.onclick]: () => Dialog.show(dialogAttrs)
    }
  });

  Dialog.theme(".dialog-tests-blue-dialog", {
    color_light_content_background: "#2196F3",
    color_light_body_text:          "#fff",
    border_radius:                  5
  });

  return [
    {
      name: "Option: body",
      exclude: true,
      interactive: true,
      component: {
        view: () => 
          Opener({ body: "Hello" })
      }
    },
    {
      name: "Themed (color and border radius)",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener({
            content: renderer("div", "Hello"),
            className: "dialog-tests-blue-dialog"
          })
      }
    },
    {
      name: "Option: style",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener({
            body: "Hello",
            style: {
              background: "#fff59d",
              padding: "1.5rem"
            }
          })
      }
    },
    {
      name: "Option: z (0)",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener({
            body: renderer.trust(shortText),
            z: 0
          })
      }
    },
    {
      name: "Option: z (5)",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener({
            body: renderer.trust(shortText),
            z: 5
          })
      }
    },
    {
      name: "Option: title and body (long text)",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener({
            title: "Long dialog with a very long title that surely won't fit here",
            body: renderer.trust(longText)
          })
      }
    },
    {
      name: "Option: modal with backdrop",
      interactive: true,
      exclude: true,
      component: {
        view: () => 
          Opener(Object.assign(
            {},
            commonDialogProps({ renderer, keys, Button, Dialog }), {
              title: "Long dialog with a very long title that surely won't fit here",
              body: renderer.trust(longText),
              modal: true,
              backdrop: true
            }
          ))
      }
    },
  ];
};
