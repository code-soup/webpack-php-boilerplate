const url    = require('url');
const config = require('../config.vars.js');

/**
 * We do this to enable injection over SSL.
 */
if (url.parse(config.devUrl).protocol === 'https:') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
}

const options = {
    devServer: {
        clientLogLevel: 'silent',
        compress: true,
        hot: true,
        https: config.useSSLinDev,
        injectClient: true,
        open: config.openBrowserOnWatch,
        overlay: config.showErrorsInBrowser,
        port: config.proxyPort,
        stats: 'normal',
        watchContentBase: true,
        watchOptions: {
            poll: true,
        },
        writeToDisk: true,
    },
};

/**
 * Use proxy server
 */
if ( config.useProxy )
{
    options.devServer.proxy = {
        '/': {
            target: config.devUrl,
            secure: config.useSSLinDev,
            changeOrigin: true,
            autoRewrite: true,
        },
    };
}

module.exports = options;
