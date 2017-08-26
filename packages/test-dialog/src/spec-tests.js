import { shortText, longText, cancelOkButtons } from "./shared";

export default ({ DialogInstance, renderer, keys, Button, Dialog }) => {
  return [
    {
      name: "No options - spec",
      component: DialogInstance
    },
    {
      name: "Option: id - spec",
      component: DialogInstance,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class - spec",
      component: DialogInstance,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: className - spec",
      component: DialogInstance,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element - spec",
      component: DialogInstance,
      attrs: {
        element: "a"
      }
    },

    {
      name: "Option: body - spec",
      component: DialogInstance,
      attrs: {
        body: "Hello"
      }
    },
    {
      name: "Option: z (0) - spec",
      component: DialogInstance,
      attrs: {
        body: renderer.trust(shortText),
        z: 0
      }
    },
    {
      name: "Option: z (5) - spec",
      component: DialogInstance,
      attrs: {
        body: renderer.trust(shortText),
        z: 6
      }
    },
    {
      name: "Option: title and body (long text) - spec",
      component: DialogInstance,
      attrs: {
        title: "Long dialog with a very long title that surely won't fit here",
        body: renderer.trust(longText)
      }
    },
    {
      name: "Option: modal with backdrop - spec",
      component: DialogInstance,
      attrs: {
        title: "Long dialog with a very long title that surely won't fit here",
        body: renderer.trust(longText),
        footerButtons: cancelOkButtons({ renderer, keys, Button, Dialog }),
        modal: true,
        backdrop: true
      }
    },
  ];
};

