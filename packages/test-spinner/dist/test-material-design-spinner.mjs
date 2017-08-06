import { MaterialDesignSpinner, keys, renderer } from 'polythene-mithril';

var genericTests = (function (_ref) {
  var MaterialDesignSpinner$$1 = _ref.MaterialDesignSpinner,
      h = _ref.renderer,
      k = _ref.keys;

  return [{
    name: "Option: permanent",
    component: MaterialDesignSpinner$$1,
    attrs: {
      permanent: true
    }
  }];
});

console.log("MaterialDesignSpinner", MaterialDesignSpinner);

var mithrilTests = function mithrilTests() {
  return [];
};

var testsMithril = [].concat(genericTests({ MaterialDesignSpinner: MaterialDesignSpinner, renderer: renderer, keys: keys })).concat(mithrilTests({ MaterialDesignSpinner: MaterialDesignSpinner, renderer: renderer, keys: keys }));

// export { default as reactTests }    from "./tests-react";

export { testsMithril as mithrilTests };
