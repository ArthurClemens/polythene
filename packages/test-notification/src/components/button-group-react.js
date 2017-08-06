import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { RaisedButton, Notification } from "polythene-react";
import { subscribe, unsubscribe } from "polythene-core";

export default (messageOptions, spawnOptions) => {
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

    notificationChange() {
      this.updateCount(Notification.count());
    }

    render() {
      const count = this.state.count;
      return <div>
        <RaisedButton
          label="Show"
          events={{
            onClick: () => Notification.show(Object.assign({}, messageOptions, { key: messageOptions.title }), spawnOptions)
          }}
        />
        <RaisedButton
          label="Hide"
          disabled={count === 0}
          events={{
            onClick: () => Notification.hide(spawnOptions)
          }}
        />
        <RaisedButton
          label="Clear"
          disabled={count === 0}
          events={{
            onClick: () =>
              Notification.hide(spawnOptions)
                .then(Notification.clear)
          }}
        />
      </div>;
    }
  };
};

