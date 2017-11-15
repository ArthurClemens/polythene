import { Component } from "react";
import { renderer as h, Menu, List, RaisedButton } from "polythene-react";
import { Link } from "react-router-dom";

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    const isOpen = this.state.isOpen;
    const target = "links-menu";
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
        h(Menu, {
          target: `#${target}`,
          show: isOpen,
          size: 5, 
          content: h(List,
            {
              all: {
                element: Link,
                ink: true,
                hoverable: true,
              },
            },
            [
              {
                title: "Link to Shadow",
                url: {
                  to: "/shadow",
                },
                key: "shadow"
              },
              {
                title: "Link to Button",
                url: {
                  to: "/button",
                },
                key: "button"
              },
            ]
          )
        })
      ]
    );
  }
}
