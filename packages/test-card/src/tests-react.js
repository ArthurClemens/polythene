import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, Card, List, ListTile, Button, IconButton } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = () => { // eslint-disable-line no-unused-vars

  return [
    {
      section: "React specific tests",
    },
    

  ];
};

export default []
  .concat(genericTests({ Card, List, ListTile, Button, IconButton, renderer, keys }))
  .concat(reactTests({ Card, List, ListTile, Button, IconButton, renderer, keys }));
