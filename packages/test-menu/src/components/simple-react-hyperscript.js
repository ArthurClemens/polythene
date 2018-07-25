import { Component } from "react";
import { renderer as h, Menu, List, ListTile, Button } from "polythene-react";

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    const isOpen = this.state.isOpen;
    const target = "simple-menu";
    return h("div",
      { style: { position: "relative" } },
      [
        h(Button, 
          {
            raised: true,
            label: "Open menu",
            id: target,
            events: {
              onClick: () => this.setState({ isOpen: true })
            }
          }
        ),
        h(Menu, 
          {
            target: `#${target}`,
            show: isOpen,
            width: 3,
            didHide: () => this.setState({ isOpen: false })
          },
          h(List, [
            h(ListTile, { title: "Menu item 1", key: "1", ink: true, hoverable: true }),
            h(ListTile, { title: "Menu item 2", key: "2", ink: true, hoverable: true })
          ])
        )
      ]
    );
  }
}
