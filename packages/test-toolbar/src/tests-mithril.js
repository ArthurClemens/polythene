import shared from "./shared";
import { renderer, Toolbar, IconButton, Shadow } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = ({ Toolbar, IconButton, Shadow, renderer: h }) => {
  
  const {
    toolbarRow
  } = shared({ IconButton, renderer: h });

  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Option: shadow",
      className: "small-result",
      component: {
        view: () => h("div", {
          style: {
            position: "relative"
          }
        }, [
          h(Toolbar, toolbarRow),
          h(Shadow)
        ])
      }
    },
  ];
    
};

export default []
  .concat(genericTests({ Toolbar, IconButton, Shadow, renderer }))
  .concat(mithrilTests({ Toolbar, IconButton, Shadow, renderer }));
