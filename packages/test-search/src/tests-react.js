import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, Search, IconButton, Button, Shadow, List, ListTile, KeyboardList } from "polythene-react";
import genericTests from "./tests-generic";
import SearchField from "./components/searchfield-hyperscript";
import SearchFieldJSX from "./components/searchfield-jsx";

const reactTests = () => {

  return [
    {
      section: "React specific tests",
    },
    {
      name: "Option: textfield, buttons (hyperscript)",
      component: () =>
        <SearchField />
    },
    {
      section: "React JSX tests",
    },
    {
      name: "Option: textfield, buttons (JSX)",
      component: () =>
        <SearchFieldJSX />
    },
    {
      name: "Theme (JSX)",
      component: () =>
        <SearchFieldJSX className="tests-search-themed-search" />
    },
  ];
    
};

export default []
  .concat(genericTests({ Search, IconButton, Button, Shadow, SearchField, List, ListTile, KeyboardList, renderer, keys }))
  .concat(reactTests({ Search, IconButton, Button, Shadow, SearchField, List, ListTile, KeyboardList, renderer, keys }));
