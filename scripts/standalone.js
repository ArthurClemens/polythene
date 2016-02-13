const fs = require('fs');
const browserify = require('browserify');
const sh = require('shelljs');

const folders = ['base-button', 'button', 'card', 'checkbox', 'common', 'config', 'dialog', 'element', 'fab', 'font-roboto', 'header-panel', 'icon', 'icon-button', 'layout', 'list', 'list-tile', 'menu', 'notification', 'polythene', 'radio-button', 'ripple', 'search', 'selection-control', 'shadow', 'slider', 'spinner', 'svg', 'switch', 'tabs', 'textfield', 'theme', 'toolbar'];

const commonUtils = ['easing', 'mixin', 'multiple', 'no-tap-delay', 'object.assign', 'scroll-to', 'styler', 'timer', 'transition-event', 'transition', 'validation-helper', 'webfontloader'];

const noRequires = {
    'common': 1,
    'font-roboto': 1,
    'layout': 1
};

const filterNoRequires = (folder) => (!noRequires[folder]);

const formatRequire = (path) => (`require('${path}');`);

const requires = (formatFn) => {
    formatFn = formatFn || ((str) => (str));
    const components = [formatFn('mithril')].concat(folders.filter(filterNoRequires).map((folder) => {
        return formatFn(`polythene/${folder}/${folder}`);
    }));
    const utils = [formatFn('fastclick')].concat(commonUtils.map((util) => {
        return formatFn(`polythene/common/${util}`);
    }));
    return components.concat(utils);
};

const writeRequires = (callback) => {
    console.log('standalone writeRequires');
    fs.writeFile('standalone-src.js', requires(formatRequire).join('\r'), 'utf8', () => (console.log('standalone writeRequires done'), callback()));
};

const prepare = () => {
    console.log('standalone prepare');
    sh.mkdir('-p', 'tmp');
    folders.map((folder) => {
        sh.mv(folder, 'tmp/' + folder);
    });
    sh.mv('tmp', 'polythene');
    console.log('standalone prepare done');
};

const teardown = () => {
    console.log('standalone teardown');
    sh.mv('polythene', 'tmp');
    sh.mv('tmp/*', '.');
    sh.rm('-rf', 'tmp');
    sh.rm('-rf', 'standalone-src.js');
    console.log('standalone teardown done');
};

const build = () => {
    console.log('standalone build');
    const createBundle = (entries, outfile) => {
        browserify({
            entries: entries,
            paths: ['.', 'node_modules'],
            require: requires()
        })
        .transform({
            global: true
        }, 'uglifyify')
        .bundle()
        .on('error', function(err) {
            console.log('Error : ' + err.message);
        })
        .pipe(fs.createWriteStream(outfile).on('finish', teardown))
        ;
    };

    createBundle([
        'standalone-src.js'
    ], 'polythene-standalone.js');
};

writeRequires(() => {
    prepare();
    build();
});
