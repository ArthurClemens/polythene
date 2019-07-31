import { Component } from "react";
import { Menu, List, Button } from "polythene-react";
import { h } from "../../../utils/enhanced-renderer";
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
        h(Menu, {
          target: `#${target}`,
          show: isOpen,
          width: 5, 
          content: h(List,
            {
              all: {
                element: Link,
                ink: true,
                hoverable: true,
              },
              tiles: [
                {
                  title: "Link to Shadow",
                  url: {
                    to: "/shadow",
                  },
                },
                {
                  title: "Link to Button",
                  url: {
                    to: "/button",
                  },
                },
              ]
            }
          )
        })
      ]
    );
  }
}
