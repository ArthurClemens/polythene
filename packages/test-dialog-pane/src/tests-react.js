import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, DialogPane, Button } from "polythene-react";
import genericTests from "./tests-generic";
import { longText, cancelOkButtons } from "./shared";

const reactTests = () => {

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
          footer={cancelOkButtons({ renderer, Button })}
        />
    },
  ];
    
};

export default []
  .concat(genericTests({ DialogPane, Button, renderer, keys }))
  .concat(reactTests({ DialogPane, Button, renderer, keys }));
