import React, { Component } from "react";
import { Drawer, RaisedButton } from "polythene-react";

class AppDrawer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      hide: false,
    };
  }

  render() {
    const { createContent, ...drawerOpts } = this.props;
    const onClick = () => this.setState({ hide: true });
    const content = createContent({ onClick });
    return (
      <div>
        <RaisedButton
          label="Show"
          events={{
            onClick: () => this.setState({ show: true })
          }}
        />
        <Drawer
          {...drawerOpts}
          content={content}
          show={this.state.show}
          hide={this.state.hide}
          didShow={() => this.setState({ show: true, hide: false })}
          didHide={() => this.setState({ show: false, hide: false })}
        />
      </div>
    );
  }
}

export default AppDrawer;
