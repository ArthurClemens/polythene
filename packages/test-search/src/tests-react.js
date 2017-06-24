import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, Search, IconButton, Button, Shadow } from "polythene-react";
import genericTests from "./tests-generic";
import searchField from "./components/searchfield-jsx";

const SearchField = searchField({ Search, IconButton, Shadow });

const reactTests = () => {

  return [
    {
      section: "React JSX tests",
    },
    {
      name: "Option: textfield, buttons (JSX)",
      component: () =>
        <SearchField />
    },
  ];
    
};

export default []
  .concat(genericTests({ Search, IconButton, Button, Shadow, SearchField, renderer, keys }))
  .concat(reactTests({ Search, IconButton, Button, Shadow, SearchField, renderer, keys }));
