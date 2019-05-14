import React from "react";
import { Search, IconButton, Button, Shadow, List, ListTile } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import { a } from "cyano-react";
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
        <SearchFieldJSX className="tests-search-themed-search" tone="dark" />
    },
  ];
    
};

export default []
  .concat(genericTests({ Search, IconButton, Button, Shadow, SearchField, List, ListTile, h, a }))
  .concat(reactTests({ Search, IconButton, Button, Shadow, SearchField, List, ListTile, h, a }));
