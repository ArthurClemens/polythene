import { renderer, keys, TextField, RaisedButton } from "polythene-mithril";
import genericTests from "./tests-generic";
import setValue from "./components/set-value-mithril-withAttr";

const mithrilTests = ({ TextField, RaisedButton, renderer: h }) => {

  const block = (test, attrs = {}) =>
    h("div", {
      style: Object.assign(
        {},
        attrs.dark ? null : { background: "#fff" },
        attrs.fullWidth
          ? null
          : { padding: "10px 15px" }
      )},
      test
    );
  
  const SetValue = setValue({ h, TextField, RaisedButton });

  return [
    {
      section: "Mithril specific tests (variation with withAttr)",
    },
    {
      name: "Set value",
      interactive: true,
      component: {
        view: () => block(
          h(SetValue)
        )
      }
    },
  ];
};

export default []
  .concat(genericTests({ TextField, RaisedButton, renderer, keys }))
  .concat(mithrilTests({ TextField, RaisedButton, renderer, keys }));
