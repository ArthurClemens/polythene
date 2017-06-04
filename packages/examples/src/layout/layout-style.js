
const blockSize = 40;
const blockSizePx = blockSize + 'px';

const styles = [{
    '.module-layout': {
        ' .screen': {
            background: '#fff',
            position: 'relative',

            '&.demo-fixed-height': {
                height: 4 * blockSize + 'px'
            },
            '&.demo-large-fixed-height': {
                height: 8 * blockSize + 'px'
            },
            '&.demo-small-width': {
                width: 3 * blockSize + 'px'
            }
        },
        ' .block': {
            'min-width': blockSizePx,
            height: blockSizePx,
            color: '#fff',
            'text-align': 'center',
            'line-height': blockSizePx,

            '&:nth-child(1)': {
                background: '#311B92'
            },
            '&:nth-child(2)': {
                background: '#4527A0'
            },
            '&:nth-child(3)': {
                background: '#512DA8'
            },
            '&:nth-child(4)': {
                background: '#5E35B1'
            },

            '&.auto-size': {
                width: 'auto',
                height: 'auto'
            }
        }
    }
}];

export default styles;
