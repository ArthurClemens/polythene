import m from "mithril";
import { menu } from "polythene-menu";
import { list } from "polythene-list";
import { listTile } from "polythene-list-tile";
import { shadow } from "polythene-shadow";
import { iconButton } from "polythene-icon-button";
import iconMoreVert from "mmsvg/google/msvg/navigation/more-vert";
import { styler } from "polythene-css";

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
      " .bar-row.pe-dark-theme": {
        background: "#3F51B5",
        padding: "4px 0"
      }
    }
  }
];

styler.add("test-menu-position", styles);


const positionContainer = {
  showMenu: false,
  view: vnode =>
    m(".position-container.layout.vertical",
      vnode.attrs.barPosition === "bottom" ? m(".flex") : null,
      m(".bar", [
        m(shadow, { z: 1 }),
        m(menu, {
          class: "light-theme",
          target: vnode.attrs.id,
          origin: vnode.attrs.origin,
          show: vnode.state.showMenu,
          size: 3,
          hideDelay: .240,
          didHide: () => vnode.state.showMenu = false,
          content: m(list, {
            hoverable: true,
            tiles: ["Refresh", "Help & Feedback", "Settings", "Sign Out"].map((item) =>
              m(listTile, {
                title: item,
                positionSelected: false,
                ink: true
              })
            )
          })
        }),
        m(".bar-row.pe-dark-theme.layout.horizontal", [
          vnode.attrs.buttonPosition === "right" ? m(".flex") : null,
          m(iconButton, {
            id: vnode.attrs.id,
            icon: {
              msvg: iconMoreVert
            },
            events: {
              onclick: () => vnode.state.showMenu = true
            }
          })
        ])
      ])
    )
};

export default {
  view: () => [
    m(".layout.horizontal", [
      m(positionContainer, {
        id: "show_menu_top_left",
        origin: "top-left",
        barPosition: "top",
        buttonPosition: "left"
      }),
      m(".flex"),
      m(positionContainer, {
        id: "show_menu_top_right",
        origin: "top-right",
        barPosition: "top",
        buttonPosition: "right"
      })
    ]),
    m(".layout.horizontal", [
      m(positionContainer, {
        id: "show_menu_bottom_left",
        origin: "bottom-left",
        barPosition: "bottom",
        buttonPosition: "left"
      }),
      m(".flex"),
      m(positionContainer, {
        id: "show_menu_bottom_right",
        origin: "bottom-right",
        barPosition: "bottom",
        buttonPosition: "right"
      })
    ])
  ]
};


