// @ts-check

/**
 * @typedef {import("../index").MaterialDesignSpinnerVars} MaterialDesignSpinnerVars
 */

/*
Styling derived from https://github.com/PolymerElements/paper-spinner

@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { rgba } from "polythene-core-css";
import { vars as superVars } from "polythene-css-base-spinner";
import { vars } from "polythene-theme";
 
const arc_size =          270; // degrees - amount of circle the arc takes up
const arc_time =          1.333; // s - time it takes to expand and contract arc
const arc_start_degrees = 360/5 * 3; // degrees - how much the start location of the arc should rotate each time, 216 gives us a 5 pointed star shape (it"s 360/5 * 3). For a 7 pointed star, we might do 360/7 * 3 = 154.286.
const rotation_duration = 360 * arc_time / (arc_start_degrees + (360 - arc_size)); // 1.568s

const blue400 =   "#42a5f5";
const red500 =    "#f44336";
const yellow600 = "#fdd835";
const green500 =  "#4caf50";

/**
 * @type {MaterialDesignSpinnerVars} materialDesignSpinnerVars
 */
const materialDesignSpinnerVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles:       true,
  
  arc_size,
  arc_start_degrees,
  arc_time,
  border_width_fab:     superVars.size_fab / superVars.size_regular * 3,
  border_width_large:   superVars.size_large / superVars.size_regular * 3,
  border_width_medium:  superVars.size_medium / superVars.size_regular * 3,
  border_width_regular: 3,
  border_width_small:   superVars.size_small / superVars.size_regular * 3,
  rotation_duration,

  color_light_single:   rgba(vars.color_primary),
  color_light_1:        blue400,
  color_light_2:        red500,
  color_light_3:        yellow600,
  color_light_4:        green500,
  
  color_dark_single:    rgba(vars.color_primary),
  color_dark_1:         blue400,
  color_dark_2:         red500,
  color_dark_3:         yellow600,
  color_dark_4:         green500,
};

export default materialDesignSpinnerVars;
