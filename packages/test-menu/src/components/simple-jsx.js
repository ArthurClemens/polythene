import React, { Component } from "react";
import { Menu, List, ListTile, RaisedButton } from "polythene-react";

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    const isOpen = this.state.isOpen;
    const target = "simple-menu-jsx";
    return (
      <div style={{ position: "relative" }}>
        <RaisedButton
          label="Open menu"
          id={target}
          events={{
            onClick: () => this.setState({ isOpen: true })
          }}
        />
        <Menu
          target={`#${target}`}
          show={isOpen}
          size={3}
          didHide={() => this.setState({ isOpen: false })}
        >
          <List>
            <ListTile title="Menu item 1" ink hoverable />
            <ListTile title="Menu item 2" ink hoverable />
          </List>
        </Menu>
      </div>
    );
  }
}
