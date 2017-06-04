import common from '../../config/config';
import mixin from '../../common/mixin';
import flex from '../../layout/theme/flex';

const createStyles = (config) => {
    return [{
        '.pe-header-panel': {
            position: 'relative',
            overflow: 'hidden',
            height: '100%',

            '&.pe-header-panel--fit': mixin.fit(),

            ' .pe-header-panel__outer-container': [
                mixin.fit(),
                flex.layoutVertical
            ],
            ' .pe-header-panel__main-container': [
                flex.flex(),
                {
                    position: 'relative',
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden',
                    '-webkit-overflow-scrolling': 'touch'
                }
            ],
            ' .pe-header-panel__header-container': {
                position: 'relative',

                ' .pe-toolbar': {
                    'z-index': 2
                },
                ' .pe-header-panel__drop-shadow': [
                    mixin.vendorize({
                        transition: 'opacity 0.25s'
                    }, common.prefixes_transition),
                    mixin.vendorize({
                        transform: 'translate3d(0,0,0)'
                    }, common.prefixes_transform),
                    mixin.vendorize({
                        'box-shadow': config.box_shadow
                    }, common.prefixes_box_shadow), {
                        opacity: 0,
                        position: 'absolute',
                        top: 'auto',
                        left: 0,
                        right: 0,
                        height: config.box_shadow_height + 'px',
                        'z-index': 1
                    }
                ]
            },
            ' .pe-header-panel__outer-container.pe-header-panel--cascaded > .pe-header-panel__header-container > .pe-header-panel__drop-shadow': {
                'opacity': 1
            },
            '&:not(.pe-header-panel--fixed) > .pe-header-panel__outer-container > .pe-header-panel__header-container': {
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,

                ' .pe-header-panel__background-container': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden'
                },
                ' .pe-toolbar__top-bar': {
                    'z-index': 1
                },
                ' .pe-toolbar__bottom-bar': {}
            },
            ':not(.pe-header-panel--fit):not(.pe-header-panel--fixed):not(.pe-header-panel--scroll) > .pe-header-panel__outer-container > .pe-header-panel__header-container': {
                'z-index': common.z_header_container
            },
            '.pe-header-panel--fit > .pe-header-panel__outer-container > .pe-header-panel__header-container': {
                'z-index': common.z_fixed_header_container
            },
            ' .pe-header-panel__condensed-background': {
                opacity: 0
            },
            ' .pe-header-panel__header-background, .pe-header-panel__condensed-background': [
                mixin.vendorize({
                    'background-size': 'cover'
                }, common.prefixes_background_size), {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    'background-repeat': 'no-repeat',
                    'background-position': 'center center'
                }
            ],
            ' .pe-header-panel__media-dimmer': mixin.fit(),

            '&.pe-header-panel--standard': {
                ' .pe-header-panel__drop-shadow': {
                    opacity: 1
                }
            },
            '&.pe-header-panel--seamed': {
                ' .pe-header-panel__drop-shadow': {
                    display: 'none'
                }
            },
            '&.pe-header-panel--scroll': {
                ' .pe-header-panel__main-container': {
                    overflow: 'visible'
                },
                ' .pe-header-panel__outer-container': {
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden',
                    '-webkit-overflow-scrolling': 'touch'
                }
            },
            '&.pe-header-panel--cover': {
                ' .main-panel': {
                    position: 'static'
                },
                ' .pe-header-panel__main-container': mixin.fit(),
                ' .pe-header-panel__drop-shadow': {
                    position: 'static',
                    width: '100%'
                }
            }
        }
    }];
};

export default (config) => (mixin.createStyles(config, createStyles));
