import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { RaisedButton, Snackbar } from "polythene-react";
import { subscribe, unsubscribe } from "polythene-core";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.updateCount = this.updateCount.bind(this);
    this.notificationChange = this.notificationChange.bind(this);
    subscribe("snackbar", this.notificationChange);
  }

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
    unsubscribe("snackbar", this.notificationChange);
  }

  updateCount(count) {
    const { needsDisplay } = this.props;
    if (this._mounted) {
      this.setState({ count });
    }
    if (needsDisplay) {
      needsDisplay();
    }
  }

  notificationChange() {
    this.updateCount(Snackbar.count());
  }

  render() {
    const { id, variations, spawn, position, snackbarOptions, needsDisplay } = this.props;
    const count = this.state.count;
    return (<div className="pe-button-row">
      {variations.map(opts =>
        <RaisedButton
          key={opts.label}
          label={opts.label}
          events={{
            onClick: () => {
              needsDisplay && needsDisplay();
              Snackbar.show(
                Object.assign(
                  {},
                  opts,
                  snackbarOptions,
                  {
                    key: `${id}-${opts.title}`, // add a key to let React better distinguish between the notifications
                  } 
                ), { spawn, position }
              );
            }
          }}
        />
      )}
      <RaisedButton
        label="Hide"
        disabled={count === 0}
        events={{
          onClick: () => Snackbar.hide({ spawn, position })
        }}
      />
      <RaisedButton
        label="Clear"
        disabled={count === 0}
        events={{
          onClick: () =>
            Snackbar.hide({ spawn, position })
              .then(Snackbar.clear)
        }}
      />
    </div>);
  }
}
