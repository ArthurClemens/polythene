import React from "react";
import { Tabs } from "polythene-react";
import { h } from "../../utils/enhanced-renderer";
import { a } from "cyano-react";
import genericTests from "./tests-generic";
import ScrollableTabs from "./components/scrollable-tabs-jsx";

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
      name: "Option: selectedTabIndex (1) (JSX)",
      component: () =>
        <Tabs
          autofit
          selectedTabIndex={1}
          tabs={threeButtons}
        />
    },
    {
      name: "Option: scrollable with custom icons (JSX)",
      component: () =>
        <ScrollableTabs />
    },
  ];
    
};

export default []
  .concat(genericTests({ Tabs, h, a }))
  .concat(reactTests({ Tabs, h, a }));
