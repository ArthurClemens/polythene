import m from "mithril";
import stream from "mithril/stream";
import { Drawer, RaisedButton } from "polythene-mithril";

const AppDrawer = {
  oninit: vnode => {
    const drawerState = stream({ show: false, hide: false });
    Object.assign(vnode.state, {
      drawerState,
    });
  },
  view: ({ state, attrs }) => {
    const { createContent, ...drawerOpts } = attrs;
    const { show, hide } = state.drawerState();
    const onClick = () => state.drawerState({ show, hide: true });
    const content = createContent({ onClick });
    return [
      m(RaisedButton, {
        label: "Show",
        events: {
          onclick: () => state.drawerState({ show: true, hide })
        }
      }),
      m(Drawer, Object.assign(
        {},
        drawerOpts,
        {
          content,
          show,
          hide,
          didHide: () => state.drawerState({ show: false, hide: false })
        }
      ))
    ];
  }
};

export default AppDrawer;
