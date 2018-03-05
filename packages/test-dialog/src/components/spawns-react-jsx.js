import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { RaisedButton, Dialog } from "polythene-react";
import { DialogCSS } from "polythene-css";
import { subscribe, unsubscribe } from "polythene-core";

DialogCSS.addStyle(".dialog-tests-static", {
  position: "static",
});

const Opener = ({ title, spawn, id }) => (
  <RaisedButton
    key={title}
    label={title}
    events={{
      onClick: () => (
        Dialog.show(
          {
            key: title,
            title, 
            body: <RaisedButton
              label="Close"
              events={{
                onClick: () => Dialog.hide({ spawn, id })
              }}
            />,
            className: "dialog-tests-static",
          },
          { spawn, id }
        )
      )
    }}
  />
);

class SpawnArea extends Component {

  constructor(props) {
    super(props);
    this.state = {}; // local state to force a render on update
    this.dialogChange = this.dialogChange.bind(this);
    subscribe("dialog", this.dialogChange);
  }

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
    unsubscribe("dialog", this.dialogChange);
  }

  dialogChange({ id, name }) {
    if (this._mounted) {
      this.setState(Object.assign(
        {},
        this.state,
        {
          [id]: name
        }
      ));
    }
  }

  render() {
    const { spawnId } = this.props;
    return (
      <div>
        <div className="pe-button-row">
          <Opener
            title={`spawn ${spawnId}, id 1`}
            spawn={spawnId}
            id={`${spawnId}-id-1`}
          />
          <Opener
            title={`spawn ${spawnId}, id 2`}
            spawn={spawnId}
            id={`${spawnId}-id-2`}
          />
        </div>
        <div
          className="dialog-row"
          style={{
            background: "#ddd",
            display: "flex",
            margin: "10px 0 20px 0",
            width: "100%",
            height: "200px"
          }}>
          <Dialog spawn={spawnId} />
        </div>
      </div>
    );
  }
}

const Spawns = () => (
  <div>
    <SpawnArea spawnId="1" />
    <SpawnArea spawnId="2" />
  </div>
);

export default Spawns;
