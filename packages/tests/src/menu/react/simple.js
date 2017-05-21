import { renderer as h, Menu, RaisedButton, List, ListTile } from "polythene-react";

export const simpleMenuContent =
  h(List, null, [
    h(ListTile, {
      title: "Yes",
      ink: true
    }),
    h(ListTile, {
      title: "No",
      ink: true
    })
  ]);

export default () => {
  let isOpen = false;
  let id = "id-" + Math.floor(Math.random() * 1000);
  return h("div",
    {
      style: { position: "relative" }
    },
    [
      h(RaisedButton,
        {
          label: "Open menu",
          id,
          events: {
            onClick: () => isOpen = true
          }
        }
      ),
      h(Menu, {
        offset: -4,
        target: `#${id}`,
        show: isOpen,
        didHide: () => isOpen = false,
        content: simpleMenuContent
      })
    ]
  );
};