import m from 'mithril';
import { Button } from 'polythene';

Button.theme(".blue-button", {
  color_light_flat_background: "blue",
  color_light_flat_text:       "white"
});

export default {
    view: (ctrl, attrs) =>
        m(Button, Object.assign(
            {},
            {
                class: "blue-button",
                borders: true
            },
            attrs
        ))
};