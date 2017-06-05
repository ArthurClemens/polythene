import vars from '../app/common-vars';

const primaryColor = '#448AFF';

const pattern = (foreground, background) => ({
    'background-image': `radial-gradient(circle at 100% 150%, ${foreground} 24%, ${background} 25%, ${background} 28%, ${foreground} 29%, ${foreground} 36%, ${background} 36%, ${background} 40%, transparent 40%, transparent), radial-gradient(circle at 0 150%, ${foreground} 24%, ${background} 25%, ${background} 28%, ${foreground} 29%, ${foreground} 36%, ${background} 36%, ${background} 40%, transparent 40%, transparent), radial-gradient(circle at 50%  100%, ${background} 10%, ${foreground} 11%, ${foreground} 23%, ${background} 24%, ${background} 30%, ${foreground} 31%, ${foreground} 43%, ${background} 44%, ${background} 50%, ${foreground} 51%, ${foreground} 63%, ${background} 64%, ${background} 71%, transparent 71%, transparent), radial-gradient(circle at 100% 50%, ${background} 5%, ${foreground} 6%, ${foreground} 15%, ${background} 16%, ${background} 20%, ${foreground} 21%, ${foreground} 30%, ${background} 31%, ${background} 35%, ${foreground} 36%, ${foreground} 45%, ${background} 46%, ${background} 49%, transparent 50%, transparent), radial-gradient(circle at 0 50%, ${background} 5%, ${foreground} 6%, ${foreground} 15%, ${background} 16%, ${background} 20%, ${foreground} 21%, ${foreground} 30%, ${background} 31%, ${background} 35%, ${foreground} 36%, ${foreground} 45%, ${background} 46%, ${background} 49%, transparent 50%, transparent)`,
    'background-size': '100px 50px'
});

const styles = [{
    '.module-notification': {
        ' .container': {
            '&': pattern('#fff', vars.bodyBackgroundColor),
            position: 'relative',
            overflow: 'hidden',
            'max-width': '100%',
            height: vars.minWidth * .8 + 'px',
            margin: '16px 0',

            '&.mobile': {
                width: vars.minWidth + 'px'
            },
            '&.tablet': {
                width: vars.tabletWidth + 'px'
            },
            '&.desktop': {
                width: vars.desktopWidth + 'px'
            },
            ' p': {
                padding: '16px'
            },
            ' .bottom': {
                position: 'absolute',
                width: '100%',
                left: 0,
                bottom: 0
            },
            ' .pe-notification__holder': {
                width: '100%'
            },
            ' .pe-button--fab': {
                margin: '0 16px 16px 0',
                'background-color': primaryColor,
                color: '#fff'
            },
            ' .pe-notification-snackbar .pe-button, .pe-notification .pe-button': {
                color: primaryColor
            }
        },
        ' .pe-dark-theme .container': pattern('#444', vars.darkThemeBackgroundColor),
        ' .button-row': {
            margin: '0 -4px',

            ' .pe-button--selected .pe-button__content': {
                'background-color': primaryColor,
                color: '#fff'
            }
        }
    },
    '.message-action-dialog': {
        ' .pe-dialog-footer': {
            ' .pe-button': {
                color: primaryColor
            }
        }
    }
}];

export default styles;
