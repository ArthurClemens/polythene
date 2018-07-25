import React, { Component } from "react";
import { Dialog, Button } from "polythene-react";

const shortText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const LongText = () => (
  <div>
    {[1,2,3].map(num => <p key={num}>{shortText}</p>)}
  </div>
);

class Updating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      dialogVisible: false,
      intervalId: undefined
    };
  }

  componentDidUpdate() {
    if (this.state.dialogVisible) {
      const dialogProps = {
        title: this.state.count.toString(),
        body: <LongText />,
        didShow: () => {
          this.setState({ intervalId: setInterval(() => 
            this.setState({ count: this.state.count + 1 }),
          1000) });
        },
        didHide: () => {
          // Clean up
          clearInterval(this.state.intervalId);
          this.setState({
            intervalId: undefined,
            dialogVisible: false,
            count: 0,
          });
        }
      };
      Dialog.show(dialogProps);
    }
  }

  render () {
    return <div>
      <span style={{
        paddingRight: "10px"
      }}>
        {this.state.intervalId !== undefined
          ? this.state.count
          : 0
        }
      </span>
      <Button
        raised
        label="Show Dialog"
        events={{
          onClick: () => this.setState({ dialogVisible: !this.state.dialogVisible })
        }}
      />
    </div>;
  }
}

export default Updating;
