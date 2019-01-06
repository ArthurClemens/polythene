// @ts-check

/**
 * @typedef {import("../index").ViewComponentAssemblyOptions} ViewComponentAssemblyOptions
 */

import React from "react";
import ReactDOM from "react-dom";
import { renderer } from "./renderer";
import { keys } from "./keys";
import { isClient } from "polythene-core";

const requiresKeys = true;

/**
 * @param {ViewComponentAssemblyOptions} params
 */
export const ViewComponent = ({
  createContent = () => {},
  createProps = () => ({}),
  getElement = () => "div",
  onMount = () => {},
  onUnMount = () => {},
  component,
  view = null
}) => {
  
  return class extends React.Component {

    constructor(props) {
      super(props);
      this.dom = null;
      this.registerDOM = this.registerDOM.bind(this);
      this._render = this._render.bind(this);
    }

    componentDidMount() {
      onMount(this.createVirtualNode(), { keys });
    }

    componentWillUnmount() {
      onUnMount(this.createVirtualNode());
    }

    createVirtualNode() {
      const props = {...this.props};
      return {
        attrs: props,
        children: props.children,
        dom: this.dom
      };
    }

    registerDOM(el) {
      if (isClient && !this.dom && el) {
        this.dom = el instanceof HTMLElement
          ? el
          : ReactDOM.findDOMNode(el);
      }
    }

    _render() {
      const vnode = this.createVirtualNode();
      return renderer(
        component || getElement(vnode),
        Object.assign(
          {},
          createProps(vnode, { renderer, requiresKeys, keys }),
          { ref: this.registerDOM }
        ),
        [
          vnode.attrs.before,
          createContent(vnode, { renderer, requiresKeys, keys }),
          vnode.attrs.after
        ]
      );
    }

    render() {
      return view
        ? view(this.createVirtualNode(), { renderer, render: this._render })
        : this._render();
    }
  };
};
