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

import { vars } from "polythene-theme";
import { vars as baseVars } from "polythene-spinner";
const rgba = vars.rgba;

const arc_size =          270; // degrees - amount of circle the arc takes up
const arc_time =          1.333; // s - time it takes to expand and contract arc
const arc_start_degrees = 360/5 * 3; // degrees - how much the start location of the arc should rotate each time, 216 gives us a 5 pointed star shape (it"s 360/5 * 3). For a 7 pointed star, we might do 360/7 * 3 = 154.286.
const rotation_duration = 360 * arc_time / (arc_start_degrees + (360 - arc_size)); // 1.568s

const blue400 =   "#42a5f5";
const red500 =    "#f44336";
const yellow600 = "#fdd835";
const green500 =  "#4caf50";

export default {
  border_width_small:   baseVars.size_small / baseVars.size_regular * 3,
  border_width_regular: 3,
  border_width_medium:  baseVars.size_medium / baseVars.size_regular * 3,
  border_width_large:   baseVars.size_large / baseVars.size_regular * 3,
  border_width_fab:     baseVars.size_fab / baseVars.size_regular * 3,
  rotation_duration,
  arc_size,
  arc_time,
  arc_start_degrees,

  color_light_single: rgba(vars.color_primary),
  color_light_1:      blue400,
  color_light_2:      red500,
  color_light_3:      yellow600,
  color_light_4:      green500,

  color_dark_single:  rgba(vars.color_primary),
  color_dark_1:       blue400,
  color_dark_2:       red500,
  color_dark_3:       yellow600,
  color_dark_4:       green500,
};
