import React, { Component } from "react";
import { Drawer, Button } from "polythene-react";

class AppDrawer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    const { createContent, ...drawerOpts } = this.props;
    return (
      <div>
        <Button
          raised
          label="Show"
          events={{
            onClick: () => this.setState({ show: true })
          }}
        />
        <Drawer
          {...drawerOpts}
          show={this.state.show}
          didHide={() => this.setState({ show: false })}
        >
          {createContent({
            onClick: () => this.setState({ show: false })
          })}
        </Drawer>
      </div>
    );
  }
}

export default AppDrawer;
