/*
Tap behavior for buttons with shadow.
Expects a controller with m.props `z` and `baseZ`.
*/

define(function() {
	'use strict';

	var MAX_Z = 5;

	return function(ctrl, opts) {
		var baseZ,
			increase;
		opts = opts || {};

		baseZ = ctrl.baseZ();
		increase = opts.increase || 1;

		var onmousedown = function() {
			if (baseZ == 5) return;
		    var z = ctrl.z();
		    z = z + increase;
    	    z = Math.min(z, MAX_Z);
    	    ctrl.z(z);
		}.bind(ctrl);
		var onmouseup = function() {
			if (baseZ == 5) return;
		    var z = ctrl.z();
		    z = z - increase;
		    z = Math.max(z, baseZ);
		    ctrl.z(z);
		}.bind(ctrl);

		return {
			onmousedown: onmousedown,
			onmouseup: onmouseup
		};
	};
});