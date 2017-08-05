import { Component } from "react";
import { renderer as h, Menu, List, ListTile, RaisedButton } from "polythene-react";

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
        h(RaisedButton, 
          {
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
            size: 2,
            didHide: () => this.setState({ isOpen: false })
          },
          h(List, [
            h(ListTile, { title: "Yes", ink: true, hoverable: true }),
            h(ListTile, { title: "No", ink: true, hoverable: true })
          ])
        )
      ]
    );
  }
}
