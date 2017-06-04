import m from 'mithril';
import { styler } from 'polythene';
import style from './sortable-list-style';
styler.add('polythene-examples-sortable-list', style);

import { List } from 'polythene';
import { ListTile } from 'polythene';
import { Button } from 'polythene';

import iconStarOutline from 'mmsvg/templarian/msvg/star-outline';
import iconStarFilled from 'mmsvg/templarian/msvg/star';

const sortByName = (a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
    }
    return 0;
};
const sortByDate = (a, b) => {
    if (a.date < b.date) {
        return -1;
    }
    if (a.date > b.date) {
        return 1;
    }
    return 0;
};

const sortableList = {
    controller: () => {
        const mode = m.prop('name');
        const now = new Date();
        const pastRange = 1000 * 3600 * 24 * 31 * 6;
        const isRandomFavorite = () => Math.random() < .5;
        const items = [{
            name: 'John',
            date: new Date(now - Math.random() * pastRange),
            favorite: isRandomFavorite()
        }, {
            name: 'Edward',
            date: new Date(now - Math.random() * pastRange),
            favorite: isRandomFavorite()
        }, {
            name: 'Atilla',
            date: new Date(now - Math.random() * pastRange),
            favorite: isRandomFavorite()
        }, {
            name: 'Bernd',
            date: new Date(now - Math.random() * pastRange),
            favorite: isRandomFavorite()
        }, {
            name: 'George',
            date: new Date(now - Math.random() * pastRange),
            favorite: isRandomFavorite()
        }, {
            name: 'Cedric',
            date: new Date(now - Math.random() * pastRange),
            favorite: isRandomFavorite()
        }];
        return {
            mode: mode,
            items: items,
            toggleFavorite: item => {
                item.favorite = 1 - item.favorite;
            }
        };
    },
    view: ctrl => {
        const sortList = () => ctrl.mode() === 'name' ? sortByName : sortByDate;
        const sortedList = ctrl.items.sort(sortList());
        return m('.demo-list.sortable-list',
            m('.controls-row',
                m('.controls.layout.horizontal',
                    m(Button, {
                        tag: '.flex',
                        label: 'Sort by name',
                        selected: ctrl.mode() === 'name',
                        events: {
                            onclick: function() {
                                ctrl.mode('name');
                            }
                        }
                    }),
                    m(Button, {
                        tag: '.flex',
                        label: 'Sort by date',
                        selected: ctrl.mode() === 'date',
                        events: {
                            onclick: function() {
                                ctrl.mode('date');
                            }
                        }
                    })
                )
            ),
            m(List, {
                tiles: sortedList.map(function(item) {
                    return m(ListTile, {
                        title: item.name,
                        subtitle: item.date.toLocaleDateString(),
                        secondary: {
                            icon: {
                                msvg: item.favorite ? iconStarFilled : iconStarOutline
                            },
                            events: {
                                onclick: function() {
                                    ctrl.toggleFavorite(item);
                                }
                            }
                        },
                        events: {
                            onclick: function() {
                                ctrl.toggleFavorite(item);
                            }
                        },
                        ink: true
                    });
                }),
                borders: true
            })
        );
    }
};

export default sortableList;
