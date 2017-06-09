import { shortText, longText, commonDialogProps } from "./shared";

export default ({ DialogInstance, renderer, keys, Button, Dialog }) => {
  return [
    {
      name: "No options - instance",
      component: DialogInstance
    },
    {
      name: "Option: id - instance",
      component: DialogInstance,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class - instance",
      component: DialogInstance,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: className - instance",
      component: DialogInstance,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element - instance",
      component: DialogInstance,
      attrs: {
        element: "a"
      }
    },

    {
      name: "Option: body - instance",
      component: DialogInstance,
      attrs: {
        body: "Hello"
      }
    },
    {
      name: "Themed (color and border radius) - instance",
      component: DialogInstance,
      attrs: {
        content: renderer("div", "Hello"),
        className: "dialog-tests-blue-dialog"
      }
    },
    {
      name: "Option: style - instance",
      component: DialogInstance,
      attrs: {
        body: "Hello",
        style: {
          background: "#fff59d",
          padding: "1.5rem"
        }
      }
    },
    {
      name: "Option: z (0) - instance",
      component: DialogInstance,
      attrs: {
        body: renderer.trust(shortText),
        z: 0
      }
    },
    {
      name: "Option: z (5) - instance",
      component: DialogInstance,
      attrs: {
        body: renderer.trust(shortText),
        z: 6
      }
    },
    {
      name: "Option: title and body (long text) - instance",
      component: DialogInstance,
      attrs: {
        title: "Long dialog with a very long title that surely won't fit here",
        body: renderer.trust(longText)
      }
    },
    {
      name: "Option: modal with backdrop - instance",
      component: DialogInstance,
      attrs: Object.assign(
        {},
        commonDialogProps({ renderer, keys, Button, Dialog }), {
          title: "Long dialog with a very long title that surely won't fit here",
          body: renderer.trust(longText),
          modal: true,
          backdrop: true
        }
      )
    },
  ];
};

