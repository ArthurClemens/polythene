import { Component } from "react";
import { renderer as h, Menu, List, RaisedButton } from "polythene-react";

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    const { history } = this.props;
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
                element: "a",
                ink: true,
                hoverable: true,
              },
            },
            [
              {
                title: "Link to Shadow",
                url: {
                  href: "/shadow",
                  onClick: e => (e.preventDefault(), history.push("/shadow"))
                }
              },
              {
                title: "Link to Button",
                url: {
                  href: "/button",
                  onClick: e => (e.preventDefault(), history.push("/button"))
                }
              },
            ]
          )
        })
      ]
    );
  }
}
