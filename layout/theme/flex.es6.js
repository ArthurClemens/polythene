const layout = [
    {
        'display': '-webkit-box'
    }, {
        'display': '-moz-box'
    }, {
        'display': '-ms-flexbox',
        '-ms-flex-preferred-size': 'initial' // IE10
    }, {
        'display': '-webkit-flex'
    }, {
        'display': 'flex'
    }];

const layoutInline = [{
    'display': '-ms-inline-flexbox'
}, {
    'display': '-webkit-inline-flex'
}, {
    'display': 'inline-flex'
}];

const layoutHorizontal = {
    '-ms-flex-direction': 'row',
    '-webkit-flex-direction': 'row',
    'flex-direction': 'row'
};

const layoutHorizontalReverse = {
    '-ms-flex-direction': 'row-reverse',
    '-webkit-flex-direction': 'row-reverse',
    'flex-direction': 'row-reverse'
};

const layoutVertical = {
    '-ms-flex-direction': 'column',
    '-webkit-flex-direction': 'column',
    'flex-direction': 'column'
};

const layoutVerticalReverse = {
    '-ms-flex-direction': 'column-reverse',
    '-webkit-flex-direction': 'column-reverse',
    'flex-direction': 'column-reverse'
};

const layoutWrap = {
    '-ms-flex-wrap': 'wrap',
    '-webkit-flex-wrap': 'wrap',
    'flex-wrap': 'wrap'
};

const layoutWrapReverse = {
    '-ms-flex-wrap': 'wrap-reverse',
    '-webkit-flex-wrap': 'wrap-reverse',
    'flex-wrap': 'wrap-reverse'
};

const layoutStart = {
    '-ms-flex-align': 'start',
    '-webkit-align-items': 'flex-start',
    'align-items': 'flex-start'
};

const layoutCenter = {
    '-ms-flex-align': 'center',
    '-webkit-align-items': 'center',
    'align-items': 'center'
};

const layoutEnd = {
    '-ms-flex-align': 'end',
    '-webkit-align-items': 'flex-end',
    'align-items': 'flex-end'
};

const layoutJustified = {
    '-ms-flex-line-pack': 'stretch', // IE10
    '-ms-flex-pack': 'justify',
    '-webkit-justify-content': 'space-between',
    'justify-content': 'space-between'
};

const layoutStartJustified = {
    '-ms-flex-align': 'start', // IE10
    '-ms-flex-pack': 'start',
    '-webkit-justify-content': 'flex-start',
    'justify-content': 'flex-start'
};

const layoutCenterJustified = {
    '-ms-flex-pack': 'center',
    '-webkit-justify-content': 'center',
    'justify-content': 'center'
};

const layoutEndJustified = {
    '-ms-flex-pack': 'end',
    '-webkit-justify-content': 'flex-end',
    'justify-content': 'flex-end'
};

const layoutCenterCenter = [
    layoutCenterJustified,
    layoutCenter
];

const layoutAroundJustified = {
    '-ms-flex-pack': 'distribute',
    '-webkit-justify-content': 'space-around',
    'justify-content': 'space-around'
};

const flex = (num = 1) => (
    [{
        '-webkit-box-flex': num
    }, {
        '-moz-box-flex': num
    }, {
        '-webkit-flex': num
    }, {
        '-ms-flex': num
    }, {
        'flex': num
    }, num === 1 ? {
        '-webkit-flex-basis': '0.000000001px'
    } : {}, num === 1 ? {
        'flex-basis': '0.000000001px'
    } : {}]
);

const flexAuto = {
    '-ms-flex': '1 1 auto',
    '-webkit-flex-basis': 'auto',
    'flex-basis': 'auto'
};

const flexAutoVertical = {
    '-ms-flex': '1 1 auto',
    '-webkit-flex-basis': 'auto',
    'flex-basis': 'auto'
};

const flexIndex = (index) => ({
    '-ms-flex': index,
    '-webkit-flex': index,
    'flex': index
});

const selfStart = {
    '-ms-flex-item-align': 'start', // IE10
    '-ms-align-self': 'flex-start',
    '-webkit-align-self': 'flex-start',
    'align-self': 'flex-start'
};

const selfCenter = {
    '-ms-flex-item-align': 'center', // IE10
    '-ms-align-self': 'center',
    '-webkit-align-self': 'center',
    'align-self': 'center'
};

const selfEnd = {
    '-ms-flex-item-align': 'end', // IE10
    '-ms-align-self': 'flex-end',
    '-webkit-align-self': 'flex-end',
    'align-self': 'flex-end'
};

const selfStretch = {
    '-ms-flex-item-align': 'stretch', // IE10
    '-ms-align-self': 'stretch',
    '-webkit-align-self': 'stretch',
    'align-self': 'stretch'
};

export default {
    flex,
    flexAuto,
    flexAutoVertical,
    flexIndex,
    layout,
    layoutAroundJustified,
    layoutCenter,
    layoutCenterCenter,
    layoutCenterJustified,
    layoutEnd,
    layoutEndJustified,
    layoutHorizontal,
    layoutHorizontalReverse,
    layoutInline,
    layoutJustified,
    layoutStart,
    layoutStartJustified,
    layoutVertical,
    layoutVerticalReverse,
    layoutWrap,
    layoutWrapReverse,
    selfCenter,
    selfEnd,
    selfStart,
    selfStretch
};
