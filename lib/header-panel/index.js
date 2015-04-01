module.exports = (function() {
    'use strict';

    //console.log("header-panel index.js");

    document.addEventListener("click", function() {
	    // load async:
	    require.ensure([], function() {
			console.log("ensured");
			require('polythene/lib/font-iconic');
		});
    });
    
}());