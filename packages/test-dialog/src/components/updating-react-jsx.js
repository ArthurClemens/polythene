import React, { Component } from "react";
import { Dialog, RaisedButton } from "polythene-react";

const shortText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const LongText = () => (
  <div>
    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(num => <p key={num}>{shortText}</p>)}
  </div>
);

class Updating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      dialogVisible: false
    };
    // Show updates by means of a simple counter.
    // This could also be a different component state or Redux state.
    setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
  }

  componentDidUpdate() {
    if (this.state.dialogVisible) {
      const dialogProps = {
        title: this.state.count,
        body: <LongText />,
        didHide: () => this.setState({ dialogVisible: false })
      };
      Dialog.show(dialogProps);
    }
  }

  render () {
    return <div>
      <span style={{
        paddingRight: "10px"
      }}>
        {this.state.count}
      </span>
      <RaisedButton
        label="Show Dialog"
        events={{
          onClick: () => this.setState({ dialogVisible: !this.state.dialogVisible })
        }}
      />
    </div>;
  }
}

export default Updating;
