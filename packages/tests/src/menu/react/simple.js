import { Component } from "react";
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


class SimpleMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    return h("div",
      {
        style: { position: "relative" }
      },
      [
        h(RaisedButton,
          {
            label: "Open menu",
            id: "SimpleMenu",
            events: { onClick: () => this.setState({ show: true }) }
          }
        ),
        h(Menu, {
          offset: -4,
          target: "#SimpleMenu",
          show: this.state.show,
          content: simpleMenuContent
        })
      ]
    );
  }
}

export default SimpleMenu;
