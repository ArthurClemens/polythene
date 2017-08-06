import { renderer as h, Snackbar, FAB } from "polythene-mithril";

const pattern = (foreground, background) => ({
  backgroundImage: `radial-gradient(circle at 100% 150%, ${foreground} 24%, ${background} 25%, ${background} 28%, ${foreground} 29%, ${foreground} 36%, ${background} 36%, ${background} 40%, transparent 40%, transparent), radial-gradient(circle at 0 150%, ${foreground} 24%, ${background} 25%, ${background} 28%, ${foreground} 29%, ${foreground} 36%, ${background} 36%, ${background} 40%, transparent 40%, transparent), radial-gradient(circle at 50%  100%, ${background} 10%, ${foreground} 11%, ${foreground} 23%, ${background} 24%, ${background} 30%, ${foreground} 31%, ${foreground} 43%, ${background} 44%, ${background} 50%, ${foreground} 51%, ${foreground} 63%, ${background} 64%, ${background} 71%, transparent 71%, transparent), radial-gradient(circle at 100% 50%, ${background} 5%, ${foreground} 6%, ${foreground} 15%, ${background} 16%, ${background} 20%, ${foreground} 21%, ${foreground} 30%, ${background} 31%, ${background} 35%, ${foreground} 36%, ${foreground} 45%, ${background} 46%, ${background} 49%, transparent 50%, transparent), radial-gradient(circle at 0 50%, ${background} 5%, ${foreground} 6%, ${foreground} 15%, ${background} 16%, ${background} 20%, ${foreground} 21%, ${foreground} 30%, ${background} 31%, ${background} 35%, ${foreground} 36%, ${foreground} 45%, ${background} 46%, ${background} 49%, transparent 50%, transparent)`,
  backgroundSize: "100px 50px"
});

const iconPlusSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enableBackground=\"new 0 0 24.00 24.00\"><path fill=\"#000000\" fillOpacity=\"1\" strokeWidth=\"0.2\" strokeLinejoin=\"round\" d=\"M 18.9994,12.998L 12.9994,12.998L 12.9994,18.998L 10.9994,18.998L 10.9994,12.998L 4.99936,12.998L 4.99936,10.998L 10.9994,10.998L 10.9994,4.99805L 12.9994,4.99805L 12.9994,10.998L 18.9994,10.998L 18.9994,12.998 Z \"/></svg>";


export default {
  view: vnode => {
    const attrs = vnode.attrs;
    const containerSelectorId = `bottom_container_${attrs.spawn}`;
    return h("div", [
      h(attrs.buttonGroup,
        {
          variations: attrs.variations.map(opts => Object.assign(
            {},
            opts,
            {
              tone: attrs.tone,
              containerSelector: `#${containerSelectorId}`
            }
          )),
          spawnOptions: { spawn: attrs.spawn, position: attrs.position }
        }
      ),
      h("div",
        {
          style: Object.assign({}, pattern(attrs.foreground, attrs.background), {
            height: "220px",
            overflow: "hidden",
            position: "relative",
            marginTop: "15px"
          })
        },
        h("div",
          {
            style: {
              position: "absolute",
              width: "100%",
              left: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end"
            },
            id: containerSelectorId
          },
          h(FAB, {
            className: "self-end",
            icon: { svg: h.trust(iconPlusSVG) },
            z: 1,
            style: {
              margin: "0 16px 16px 0"
            }
          }),
          h(Snackbar, { spawn: attrs.spawn, position: attrs.position })
        )
      )
    ]);
  }
};
