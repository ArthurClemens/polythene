import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/list";

export const getElement = vnode =>
  vnode.attrs.element || "div";

/* MARK */
const onSelect = (event, vnode, index) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  if (attrs.onSelect) {
    const selectedIndex = index !== undefined
      ? index
      : state.highlightIndex();
    if (selectedIndex > -1) {
      const data = {
        event,
        index: selectedIndex,
        dom: state.tiles[selectedIndex].dom,
        attrs: state.tiles[selectedIndex].attrs
      };
      attrs.onSelect(data);
    }
  }
  if (index !== undefined) {
    setHighlightIndex({ state, index });
  }
};

/* MARK */
const setHighlightIndex = ({ state, index }) => {
  const normalizedHighlightIndex = index === undefined || index === null
    ? -1
    : index;
  const currentHighlightIndex = state.highlightIndex();
  if (normalizedHighlightIndex !== currentHighlightIndex) {
    // Explicitly reset to -1, or else only change when currently -1
    if (normalizedHighlightIndex === -1) {
      state.highlightIndex(-1);
    } else if (currentHighlightIndex === -1) {
      state.highlightIndex(normalizedHighlightIndex);
    }
  }
};

/* MARK */
const exitHighlight = ({ state, attrs, newIndex }) => {
  const highlightIndex = state.highlightIndex();
  state.tiles[highlightIndex].dom.blur();
  state.highlightIndex(-1);
  if (attrs.onHighlightExit) {
    attrs.onHighlightExit({
      index: newIndex,
      dom: state.tiles[highlightIndex].dom,
    });
  }
};

/* MARK */
export const getInitialState = (vnode, createStream) => {
  const attrs = vnode.attrs;
  const highlightIndex = createStream(attrs.defaultHighlightIndex !== undefined && attrs.defaultHighlightIndex !== null
    ? attrs.defaultHighlightIndex
    : -1);
  const registerTile = state => (index, data) => state.tiles[index] = data;
  return {
    tiles: [],
    highlightIndex,
    registerTile,
    redrawOnUpdate: createStream.merge([highlightIndex])
  };
};

/* MARK */
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

/* MARK */
export const onUpdate = ({ state, attrs }) => {
  if (!isNaN(attrs.highlightIndex)) {
    setHighlightIndex({ state, index: attrs.highlightIndex });
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
        attrs.padding !== false ? classes.padding : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" "),
    },
    /* MARK */
    attrs.keyboardControl && {
      [k.onkeydown]: e => {
        const highlightIndex = state.highlightIndex();
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault(); // prevent scrolling the page
          const newIndex = highlightIndex + 1;
          if (newIndex >= state.tiles.length) {
            exitHighlight({ state, attrs, newIndex });
          } else {
            // Setting the focus on the List Tile will invoke a callback using attr `setHighlightIndex`
            state.tiles[newIndex].dom.focus();
          }
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault(); // prevent scrolling the page
          const newIndex = highlightIndex - 1;
          if (newIndex < 0) {
            exitHighlight({ state, attrs, newIndex });
          } else {
            state.tiles[newIndex].dom.focus();
          }
        } else if (e.key === "Enter") {
          onSelect(e, vnode);
        } else if (e.key === "Escape") {
          exitHighlight({ state, attrs, newIndex: highlightIndex });
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
      attrs.all,
      headerOpts,
      {
        header: true
      }
    )) : null,
    /* MARK */
    attrs.keyboardControl
      ? tiles.map(tileOpts => {
        if (!tileOpts.header) {
          index++;
        }
        const tileIndex = index;
        return tileOpts.tag !== undefined
          ? tileOpts
          : h(ListTile, Object.assign(
            {},
            attrs.all,
            tileOpts,
            !tileOpts.header && {
              keyboardControl: true,
              register: state.registerTile(state),
              setHighlightIndex: state.highlightIndex,
              index,
              defaultHighlight: state.highlightIndex() === tileIndex,
              events: Object.assign(
                {},
                tileOpts.events,
                {
                  [k.onclick]: e => onSelect(e, vnode, tileIndex)
                }
              )
            }
          ));
      })
      : attrs.all
        ? tiles.map(tileOpts =>
          h(ListTile, Object.assign(
            {},
            attrs.all,
            tileOpts
          ))
        )
        : tiles
  ];
};
