import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Button, Dialog, DialogPane } from "polythene-react";

class Pane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: undefined
    };
  }
  render() {
    const disabled = this.state.file === undefined;
    return (
      <DialogPane
        title="Select a file..."
        body={<input
          type="file"
          id="file"
          name="file"
          onChange={e => this.setState({file: e.target.value})}
        />}
        formOptions={{
          name: "demo",
          type: "post",
          encType: "multipart/form-data",
          onSubmit: e => {
            e.preventDefault();
            alert("Posted: " + this.state.file);
            Dialog.hide();
            this.setState({file: null});
          }
        }}
        footerButtons={<div>
          <Button
            label="Cancel"
            events={{
              onClick: () => Dialog.hide()
            }}
          />
          <Button
            disabled={disabled}
            label="Post"
            type="submit"
            element="button"
            events={{
              onClick: () => Dialog.hide()
            }}
          />
        </div>}
        didHide={() => this.setState({file: null})}
      />
    );
  }
}

export default Pane;
