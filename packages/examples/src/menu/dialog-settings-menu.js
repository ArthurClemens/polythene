import m from 'mithril';
import { Dialog, List, ListTile } from 'polythene';

const createTile = (title, selected, disabled) => {
    return m(ListTile, {
        title,
        selected,
        disabled,
        ink: true,
        events: {
            onclick: () => {
                if (!disabled) {
                    Dialog.hide();
                }
            }
        }
    });
};

export default {
    class: 'demo-menu',
    menu: m(List, {
        hoverable: true,
        tiles: [
            createTile('Any bar, any cross, any impediment will be medicinable to me: I am sick in displeasure to him', true, false),
            createTile('and whatsoever comes athwart his affection ranges', false, false),
            createTile('evenly with mine. How canst thou cross this marriage?', false, true)
        ]
    }),
    hideDelay: .240,
    header: null,
    footer: null
};
