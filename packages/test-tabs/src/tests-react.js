import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, Tabs } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = ({ Tabs }) => {

  const threeButtons = [
    { label: "New" },
    { label: "My Favorites" },
    { label: "Saved" }
  ];

  return [
    {
      section: "React JSX tests",
    },
    {
      name: "Option: selectedTab (1) (JSX)",
      component: () =>
        <Tabs
          autofit
          selectedTab={1}
          tabs={threeButtons}
        />
    },
  ];
    
};

export default []
  .concat(genericTests({ Tabs, renderer, keys }))
  .concat(reactTests({ Tabs, renderer, keys }));
