import stream from "mithril/stream";
import { styler } from "polythene-core-css";

const iconMoreVertSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"/></svg>";

const styles = [
  {
    " .position-container": {
      position: "relative",
      width: "47%",
      height: "230px",
      background: "#fff",
      margin: "10px",

      " .bar": {
        position: "relative",
        width: "100%",
      },
      " .bar-row.pe-dark-tone": {
        background: "#3F51B5",
        padding: "4px 0"
      }
    }
  }
];

styler.add("test-menu-position", styles);

const createPositionContainer = ({ h, k, Menu, List, ListTile, Shadow, IconButton }) => ({
  oninit: vnode => {
    const show = stream(false);
    vnode.state = {
      show,
      redrawOnUpdate: stream.merge([show])
    };
  },
  view: vnode => {
    const state = vnode.state;
    const attrs = vnode.attrs;
    const show = state.show();
    return h(".position-container.layout.vertical",
      { key: attrs.id },
      [
        vnode.attrs.barPosition === "bottom"
          ? h(".flex")
          : null,
        h(".bar", [
          h(Shadow, { z: 1 }),
          h(Menu, {
            className: "pe-light-tone",
            target: `#${attrs.id}`,
            origin: attrs.origin,
            show,
            didHide: () => state.show(false),
            size: 3,
            hideDelay: .240,
            content: h(List, {
              tiles: ["Refresh", "Help & Feedback", "Settings", "Sign Out"].map(title =>
                h(ListTile, {
                  title,
                  positionSelected: false,
                  ink: true,
                  hoverable: true,
                })
              )
            })
          }),
          h(".bar-row.pe-dark-tone.layout.horizontal", [
            attrs.buttonPosition === "right"
              ? h(".flex")
              : null,
            h(IconButton, {
              id: attrs.id,
              icon: { svg: h.trust(iconMoreVertSVG) },
              events: {
                [k.onclick]: () => state.show(true)
              }
            })
          ])
        ])
      ]);
  }
});

export default ({ renderer: h, keys: k, Menu, List, ListTile, Shadow, IconButton }) => {
  const PositionContainer = createPositionContainer({ h, k, Menu, List, ListTile, Shadow, IconButton });
  return {
    view: () =>
      h("div", null, [
        h(".layout.horizontal",
          [
            h(PositionContainer, {
              id: "show_menu_top_left",
              origin: "top-left",
              barPosition: "top",
              buttonPosition: "left"
            }),
            h(".flex"),
            h(PositionContainer, {
              id: "show_menu_top_right",
              origin: "top-right",
              barPosition: "top",
              buttonPosition: "right"
            })
          ]
        ),
        h(".layout.horizontal",
          [
            h(PositionContainer, {
              id: "show_menu_bottom_left",
              origin: "bottom-left",
              barPosition: "bottom",
              buttonPosition: "left"
            }),
            h(".flex"),
            h(PositionContainer, {
              id: "show_menu_bottom_right",
              origin: "bottom-right",
              barPosition: "bottom",
              buttonPosition: "right"
            })
          ]
        )
      ])
  };
};
