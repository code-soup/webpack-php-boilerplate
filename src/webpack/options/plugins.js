const config  = require('../config.vars.js');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: `styles/${config.fileName}.css`,
        chunkFilename: `styles/[id].${config.fileName}.css`,
    }),
    new SVGSpritemapPlugin('src/media/icons/*.svg', {
        output: {
            svg4everybody: false,
            filename: 'sprite/spritemap-[hash].svg',
            svgo: true,
        },
        styles: 'src/styles/node-modules/_sprites.scss',
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
    }),
    new StyleLintPlugin({
        failOnError: config.enabled.production,
        syntax: 'scss',
    }),
    new ESLintPlugin(),
];