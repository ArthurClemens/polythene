import { materialDesignSpinnerClasses } from 'polythene-css-classes';
import { vars } from 'polythene-theme';
import { vars as vars$1 } from 'polythene-core-base-spinner';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var layer = function layer(num, h) {
  return h("div", {
    key: num,
    className: [materialDesignSpinnerClasses.layer, materialDesignSpinnerClasses.layerN + num].join(" ")
  }, [h("div", {
    key: "clipper-left",
    className: [materialDesignSpinnerClasses.circleClipper, materialDesignSpinnerClasses.circleClipperLeft].join(" ")
  }, h("div", {
    key: "circle",
    className: materialDesignSpinnerClasses.circle
  })), h("div", {
    key: "gap-patch",
    className: materialDesignSpinnerClasses.gapPatch
  }, h("div", { className: materialDesignSpinnerClasses.circle })), h("div", {
    key: "clipper-right",
    className: [materialDesignSpinnerClasses.circleClipper, materialDesignSpinnerClasses.circleClipperRight].join(" ")
  }, h("div", { className: materialDesignSpinnerClasses.circle }))]);
};

var createProps = function createProps(vnode, _ref) {
  var h = _ref.renderer;

  var state = vnode.state;
  var attrs = vnode.attrs;
  state.content = state.content || h("div", {
    key: "content",
    className: materialDesignSpinnerClasses.animation
  }, [1, 2, 3, 4].map(function (num) {
    return layer(num, h);
  }));
  return _extends({}, attrs, {
    className: [materialDesignSpinnerClasses.component, attrs.className].join(" "),
    content: state.content
  });
};

var spinner = Object.freeze({
	createProps: createProps
});

/*
Derived from https://github.com/PolymerElements/paper-spinner

@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var arc_size = 270; // degrees - amount of circle the arc takes up
var arc_time = 1.333; // s - time it takes to expand and contract arc
var arc_start_degrees = 360 / 5 * 3; // degrees - how much the start location of the arc should rotate each time, 216 gives us a 5 pointed star shape (it"s 360/5 * 3). For a 7 pointed star, we might do 360/7 * 3 = 154.286.
var rotation_duration = 360 * arc_time / (arc_start_degrees + (360 - arc_size)); // 1.568s

var blue400 = "#42a5f5";
var red500 = "#f44336";
var yellow600 = "#fdd835";
var green500 = "#4caf50";

var vars$2 = {
  border_width_small: vars$1.size_small / vars$1.size_regular * 3,
  border_width_regular: 3,
  border_width_medium: vars$1.size_medium / vars$1.size_regular * 3,
  border_width_large: vars$1.size_large / vars$1.size_regular * 3,
  border_width_fab: vars$1.size_fab / vars$1.size_regular * 3,
  rotation_duration: rotation_duration,
  arc_size: arc_size,
  arc_time: arc_time,
  arc_start_degrees: arc_start_degrees,

  color_light_single: rgba(vars.color_primary),
  color_light_1: blue400,
  color_light_2: red500,
  color_light_3: yellow600,
  color_light_4: green500,

  color_dark_single: rgba(vars.color_primary),
  color_dark_1: blue400,
  color_dark_2: red500,
  color_dark_3: yellow600,
  color_dark_4: green500
};

export { spinner as coreMaterialDesignSpinner, materialDesignSpinnerClasses as classes, vars$2 as vars };
