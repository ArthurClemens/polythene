import stream from "mithril/stream";

const buttonData = [
  {
    label: "One",
    value: "one",
  },
  {
    label: "Two",
    value: "two",
  },
  {
    label: "Three",
    value: "three",
  },
  {
    label: "Four",
    value: "four",
  },
];

export default ({ h, RadioButton, count, groupOptions={}, options={} }) => ({
  oninit: vnode => {
    const checkedValue = stream(groupOptions.defaultCheckedValue || undefined);
    vnode.state = {
      checkedValue,
      redrawOnUpdate: stream.merge([checkedValue])
    };
  },
  view: vnode => {
    const state = vnode.state;
    const checkedValue = state.checkedValue();
    return h("div",
      [
        groupOptions.showState &&
          h("div",
            {
              style: {
                margin: "0 0 1rem 0"
              }
            },
            `Value: ${checkedValue}`
          ),
        h("div",
          {
            style: {
              display: "flex",
              alignItems: "center"
            }
          },
          buttonData.slice(0, count).map((button, index) => {
            const defaultChecked = options && options[index] && options[index].defaultChecked;
            // Only set defaultChecked when no value was stored:
            const isDefaultChecked = defaultChecked && !checkedValue;
            const isChecked = isDefaultChecked || checkedValue === button.value;
            return h(RadioButton,
              Object.assign(
                {},
                button,
                options && options[index],
                {
                  checked: isChecked,
                  defaultChecked,
                  onChange: newState => state.checkedValue(newState.value)
                }
              )
            );
          })
        )
      ]
    );
  }
});

