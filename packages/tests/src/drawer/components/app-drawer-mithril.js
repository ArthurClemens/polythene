import m from "mithril";
import { Drawer, Button } from "polythene-mithril";

const AppDrawer = {
  oninit: vnode => {
    vnode.state.show = false;
  },
  view: ({ state, attrs }) => {
    const { createContent, ...drawerOpts } = attrs;
    const listTileClick = () => state.show = false;
    return [
      m(Button, {
        raised: true,
        label: "Show",
        events: {
          onclick: () => state.show = true
        }
      }),
      m(Drawer, Object.assign(
        {},
        drawerOpts,
        {
          content: createContent({
            onClick: listTileClick
          }),
          show: state.show,
          didHide: () => state.show = false // sync state with component
        }
      ))
    ];
  }
};

export default AppDrawer;
