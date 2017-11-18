import React from "react";
import { RaisedButton, Dialog } from "polythene-react";
import Layout from "./Layout";

const App = () => (
  <Layout>
    <RaisedButton
      label="Open dialog"
      events={{
        onClick: () => Dialog.show({
          /* note the Dialog component is below the other elements in the app */
          title: "Hello",
          body: "Click outside to close, or press ESCAPE",
          backdrop: true
        })
      }}
    />
    <Dialog />
  </Layout>
);

export default App;
