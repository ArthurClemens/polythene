import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { RaisedButton, Notification } from "polythene-react";
import { subscribe, unsubscribe } from "polythene-core";

export default buttonGroup => {

  const SpawnButtons1 = buttonGroup(
    {
      title: "Notification in a container",
      containerSelector: "#notifs1"
    },
    { spawn: "container1" }
  );

  const SpawnButtons2 = buttonGroup(
    {
      title: "Notification in container two",
      containerSelector: "#notifs2",
    },
    { spawn: "container2" }
  );

  const containerStyle = {
    position: "relative",
    height: "180px",
  };

  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      this.updateCount = this.updateCount.bind(this);
      this.notificationChange = this.notificationChange.bind(this);
      subscribe("notification", this.notificationChange);
    }

    componentDidMount() {
      this._mounted = true;
    }

    componentWillUnmount() {
      this._mounted = false;
      unsubscribe("notification", this.notificationChange);
    }

    updateCount(count) {
      if (this._mounted) {
        this.setState({ count });
      }
    }

    notificationChange(e) {
      this.updateCount(Notification.count());
    }

    render() {
      return (<div>
        <SpawnButtons1 key="one" />
        <div id="notifs1" style={containerStyle}>
          <Notification spawn="container1" position="container" />
        </div>
        <SpawnButtons2 key="two" />
        <div id="notifs2" style={containerStyle}>
          <Notification spawn="container2" position="container" />
        </div>
      </div>);
    }
  };
};
