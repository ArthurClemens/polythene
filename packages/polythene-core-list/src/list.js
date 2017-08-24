import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

export const getElement = vnode =>
  vnode.attrs.element || "div";

export const theme = customTheme;

const onSelect = vnode => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  if (attrs.onSelect) {
    const highlightIndex = state.highlightIndex();
    const data = {
      index: highlightIndex,
      dom: state.tiles[highlightIndex].dom,
      attrs: state.tiles[highlightIndex].attrs
    };
    attrs.onSelect(data);
  }
};

export const getInitialState = (vnode, createStream) => {
  const attrs = vnode.attrs;
  const highlightIndex = createStream(attrs.highlightIndex !== undefined
    ? attrs.highlightIndex
    : -1);
  const registerTile = state => (index, data) => state.tiles[index] = data;
  return {
    tiles: [],
    highlightIndex,
    registerTile,
    redrawOnUpdate: createStream.merge([highlightIndex])
  };
};

export const onMount = vnode => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  if (attrs.keyboardControl) {
    state.highlightIndex.map(index => {
      if (state.tiles[index]) {
        state.tiles[index].dom.focus();
      }
    });
  }
};

export const createProps = (vnode, { keys: k }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        attrs.borders ? classes.borders : null,
        attrs.indentedBorders ? classes.indentedBorders : null,
        attrs.header ? classes.hasHeader : null,
        attrs.compact ? classes.compact : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" "),
    },
    attrs.keyboardControl && {
      [k.onkeydown]: e => {
        const highlightIndex = state.highlightIndex();
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault(); // prevent scrolling the page
          const newIndex = Math.min(state.tiles.length - 1, highlightIndex + 1);
          state.tiles[newIndex].dom.focus();
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault(); // prevent scrolling the page
          const newIndex = Math.max(0, highlightIndex - 1);
          state.tiles[newIndex].dom.focus();
        } else if (e.key === "Enter") {
          onSelect(vnode);
        } else if (e.key === "Escape") {
          state.tiles[highlightIndex].dom.blur();
          state.highlightIndex(-1);
        }
      },
    }
  );
};

export const createContent = (vnode, { renderer: h, requiresKeys, keys: k, ListTile }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  let headerOpts;
  if (attrs.header) {
    headerOpts = Object.assign(
      {},
      attrs.header
    );
    headerOpts[k.class] = [
      classes.header,
      headerOpts[k.class] || null
    ].join(" ");
  }
  const highlightIndex = state.highlightIndex();
  const tiles = attrs.tiles
    ? attrs.tiles
    : attrs.content
      ? attrs.content
      : attrs.children || vnode.children;
  let index = -1;
  return [
    headerOpts ? h(ListTile, Object.assign(
      {},
      requiresKeys ? { key: "header" } : null,
      headerOpts,
      {
        header: true
      }
    )) : null,
    attrs.keyboardControl
      ? tiles.map(tileOpts => {
        if (!tileOpts.header) {
          index++;
        }
        return tileOpts.tag !== undefined
          ? tileOpts
          : h(ListTile, Object.assign(
            {},
            tileOpts,
            !tileOpts.header && {
              keyboardControl: true,
              register: state.registerTile(state),
              setHighlightIndex: state.highlightIndex,
              index,
              defaultHighlight: highlightIndex === index,
              events: Object.assign(
                {},
                tileOpts.events,
                {
                  [k.onclick]: () => onSelect(vnode)
                }
              )
            }
          ));
      })
      : tiles
  ];
};
