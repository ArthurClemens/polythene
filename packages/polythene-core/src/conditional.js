
export const Conditional = {
  view: (vnode, { renderer: h }) => {
    const attrs = vnode.attrs;
    return attrs.permanent || attrs.show
      ? h(attrs.instance, attrs)
      : h("span", { className: attrs.placeholderClassName });
  }
};
