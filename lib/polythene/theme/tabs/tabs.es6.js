'use strict';

require('polythene/theme/tabs/tabs.css!');
require('polythene/theme/tabs/tabs-color.css!');

const theme = {
    initView: (ctrl, opts = {}) => {
        // use the smallest: tab max-width 264 or view width minus 56
        const tabsElWidth = ctrl.tabsEl.getBoundingClientRect().width;
        const maxWidth = Math.min((tabsElWidth - 56), 264);
        ctrl.tabs.forEach(tab => tab.style.maxWidth = maxWidth + 'px');

        // align first scrollable tab to title
        if (opts.scrollable) {
            const firstTab = ctrl.tabs[0];
            const firstInnerLabel = firstTab.querySelector('.label span');
            const firstOuterLabelWidth = firstTab.getBoundingClientRect().width;
            const firstInnerLabelWidth = firstInnerLabel.getBoundingClientRect().width;
            const firstTabOffset = (firstOuterLabelWidth - firstInnerLabelWidth) / 2;
            firstTab.style.marginLeft = -firstTabOffset + 'px';
        }
    }
};

export default theme;
