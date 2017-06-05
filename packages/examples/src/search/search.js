import m from 'mithril';
import { Button, IconButton, Search, Shadow } from 'polythene';
import { styler } from 'polythene-core-css';
import SearchField from './search-field';

import style from './search-style';
styler.add('polythene-examples-search', style);

import iconSearch from 'mmsvg/google/msvg/action/search';
import iconBack from 'mmsvg/google/msvg/navigation/arrow-back';
import iconMic from 'mmsvg/google/msvg/av/mic';
import iconClear from 'mmsvg/google/msvg/content/clear';
import iconFilter from 'mmsvg/zavoloklom/msvg/2_1/01_web_application/filter-list';

const containerSizes = [
    {
        class: 'mobile',
        title: 'Mobile'
    },
    {
        class: 'tablet',
        title: 'Tablet'
    },
    {
        class: 'desktop',
        title: 'Desktop'
    }
];

const types = [
    {
        type: 'inset',
        title: 'Inset'
    },
    {
        type: 'fullwidth',
        title: 'Full width'
    }
];

const controlButtons = (ctrl) => {
    return [
        m('.size-buttons', containerSizes.map((s, index) => {
            return m(Button, {
                label: s.title,
                selected: ctrl.sizeIndex === index,
                events: {
                    onclick: () => (ctrl.sizeIndex = index)
                }
            });
        })),
        m('.size-buttons', types.map((s, index) => {
            return m(Button, {
                label: s.title,
                selected: ctrl.typeIndex === index,
                events: {
                    onclick: () => (ctrl.typeIndex = index)
                }
            });
        }))
    ];
};

const titleBlock = {
    view: function(ctrl, args = {}) {
        return m('.p-block', {
            class: args.class || ''
        }, [
            m('.p-block-header', args.title),
            args.info ? m('p', args.info) : null,
            args.content
        ]);
    }
};

const SearchBlock = {
    view: (ctrl, opts = {}) => {
        return m("form", {
          class: ['demo-search', opts.sizeClass].join(' '),
          style: Object.assign(
            {},
            {
              minHeight: "130px",
              overflow: "hidden" // hides top and side shadow with full width search field
            },
            opts.dark ? { backgroundColor: "transparent" } : { backgroundColor: "#e4e4e4" },
            opts.type && opts.type === 'fullwidth'
              ? { padding: "0" }
              : { padding: "8px" }
          )},
          m(SearchField, opts)
        );
    }
};


const module = {};
module.controller = () => {
    return {
        sizeIndex: 0,
        typeIndex: 0,
    };
};
module.view = (ctrl) => {
    const sizeClass = containerSizes[ctrl.sizeIndex].class;
    const type = types[ctrl.typeIndex].type;

    return m('.module-search', [

        m(titleBlock, {
            content: controlButtons(ctrl)
        }),

        m(titleBlock, {
            title: 'Inset search (default)',
            info: m('p', 'Icons specified as component options'),
            content: m(SearchBlock, { type, sizeClass })
        }),

    ]);
};

export default module;
