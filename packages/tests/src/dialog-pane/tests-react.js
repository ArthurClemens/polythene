import React from "react";
import { h } from "../../utils/enhanced-renderer";
import { a } from "cyano-react";
import { DialogPane, Toolbar, ToolbarTitle, Button } from "polythene-react";
import genericTests from "./tests-generic";
import { longText } from "./shared";

const reactTests = () => {

  const cancelOkButtons = [
    <Button label="Cancel" key="cancel" />,
    <Button label="Save" key="save" />,
  ];

  return [
    {
      section: "React specific tests",
    },
    {
      name: "Option: title, body, footer (JSX)",
      component: () =>
        <DialogPane
          title="Long dialog with a very long title that surely won't fit here"
          body={h.trust(longText)}
          footerButtons={cancelOkButtons}
        />
    },
  ];
    
};

export default []
  .concat(genericTests({ DialogPane, Toolbar, ToolbarTitle, Button, h, a }))
  .concat(reactTests({ DialogPane, Toolbar, ToolbarTitle, Button, h, a }));
