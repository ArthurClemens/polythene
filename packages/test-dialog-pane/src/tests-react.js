import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, DialogPane, Toolbar, ToolbarTitle, Button } from "polythene-react";
import genericTests from "./tests-generic";
import { longText } from "./shared";

const reactTests = () => {

  const cancelOkButtons = [
    <Button label="Cancel" key="cancel" />,
    <Button label="Save" key="save" />,
  ];

  return [
    {
      section: "React JSX tests",
    },
    {
      name: "Option: title, body, footer (JSX)",
      component: () =>
        <DialogPane
          title="Long dialog with a very long title that surely won't fit here"
          body={renderer.trust(longText)}
          footerButtons={cancelOkButtons}
        />
    },
  ];
    
};

export default []
  .concat(genericTests({ DialogPane, Toolbar, ToolbarTitle, Button, renderer, keys }))
  .concat(reactTests({ DialogPane, Toolbar, ToolbarTitle, Button, renderer, keys }));
