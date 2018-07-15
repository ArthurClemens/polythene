import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, Toolbar, ToolbarTitle, IconButton, Checkbox } from "polythene-react";
import genericTests from "./tests-generic";
import shared from "./components/shared";

const iconMenuSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>;
const iconRefreshSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>;
const iconAddSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>;

const reactTests = ({ Toolbar, ToolbarTitle, IconButton, renderer: h }) => {

  const {
    toolbarRow
  } = shared({ IconButton, ToolbarTitle, renderer: h });

  const ToolbarButton = ({ svg }) => 
    <IconButton icon={{svg}} />;

  return [
    {
      section: "React JSX tests",
    },
    {
      name: "Child node, option compact (JSX)",
      component: () => <Toolbar compact>{toolbarRow}</Toolbar>
    },
    {
      name: "JSX toolbar row (JSX)",
      component: () =>
        <Toolbar>
          <ToolbarButton svg={{ content: iconMenuSVG }} />
          <span>Title</span>
          <ToolbarButton svg={{ content: iconRefreshSVG }} />
          <ToolbarButton svg={{ content: iconAddSVG }} />
        </Toolbar>
    },
    {
      name: "Option: style (colors and height) (JSX)",
      component: () =>
        <Toolbar
          content={toolbarRow}
          style={{
            backgroundColor: "#EF6C00",
            color: "#fff",
            height: "72px"
          }}
        />
    },
    {
      name: "Option: shadow (JSX)",
      component: () =>
        <Toolbar shadowDepth={1}>
          <ToolbarButton svg={{ content: iconMenuSVG }} />
          <span>Title</span>
          <ToolbarButton svg={{ content: iconRefreshSVG }} />
          <ToolbarButton svg={{ content: iconAddSVG }} />
        </Toolbar>
    },
  ];
    
};

export default []
  .concat(genericTests({ Toolbar, ToolbarTitle, IconButton, Checkbox, renderer }))
  .concat(reactTests({ Toolbar, ToolbarTitle, IconButton, Checkbox, renderer }));
