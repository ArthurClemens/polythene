import { longText, cancelOkButtons } from "./shared";

export default ({ DialogPane, renderer, Button }) => {
  return [
    {
      name: "No options - spec",
      component: DialogPane
    },
    {
      name: "Option: id - spec",
      component: DialogPane,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class - spec",
      component: DialogPane,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: className - spec",
      component: DialogPane,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element - spec",
      component: DialogPane,
      attrs: {
        element: "a"
      }
    },

    {
      name: "Option: body - spec",
      component: DialogPane,
      attrs: {
        body: "Hello"
      }
    },
    {
      name: "Themed (color and border radius) - spec",
      component: DialogPane,
      attrs: {
        content: renderer("div", "Hello"),
        className: "dialog-tests-blue-dialog"
      }
    },
    {
      name: "Option: style - spec",
      component: DialogPane,
      attrs: {
        body: "Hello",
        style: {
          background: "#fff59d",
          padding: "1.5rem"
        }
      }
    },

    {
      name: "Option: title and body (long text) - spec",
      component: DialogPane,
      attrs: {
        title: "Long dialog with a very long title that surely won't fit here",
        body: renderer.trust(longText)
      }
    },
    {
      name: "Option: title and body (long text) - spec",
      component: DialogPane,
      attrs: {
        title: "Long dialog with a very long title that surely won't fit here",
        body: "Hello",
        footer: cancelOkButtons({ renderer, Button })
      }
    },
  ];
};

