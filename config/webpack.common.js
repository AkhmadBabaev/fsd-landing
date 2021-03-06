const CopyWebpackPlugin = require('copy-webpack-plugin');

const dirs = require('./dirs');
const generatePages = require('./pages');

module.exports = {
  context: dirs.input.path,
  entry: {
    index: `./${dirs.pages.name}/index/index.scss`,
    colors: `./${dirs.pages.name}/colors/colors.scss`,
    'room-filter': [
      `./${dirs.pages.name}/room-filter/room-filter`,
      `./${dirs.pages.name}/room-filter/room-filter.scss`,
    ],
  },
  output: {
    path: dirs.output.path,
    filename: 'scripts/[name].bundle.js',
  },
  module: {
    rules: [
      // Scripts

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      // Markup

      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },

      // Favicons

      {
        test: /\.(png|jpe?g|gif|svg|ico|webmanifest)$/i,
        include: dirs.favicons.path,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          emitFile: false,
        },
      },

      // Images

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        include: dirs.components.path,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: `${dirs.assets.name}/images`,
          emitFile: false,
        },
      },

      // Fonts

      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        include: dirs.fonts.path,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          emitFile: false,
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@components': dirs.components.path,
      '@favicons': dirs.favicons.path,
    },
  },
  plugins: [
    ...generatePages(),
    new CopyWebpackPlugin([
      { from: `${dirs.assets.name}/${dirs.fonts.name}`, to: `${dirs.assets.name}/${dirs.fonts.name}` },
      { from: `${dirs.assets.name}/${dirs.favicons.name}`, to: `${dirs.assets.name}/favicons` },
      {
        from: '**/*.{png,jpg,jpeg,gif,svg}',
        to: `${dirs.assets.name}/images`,
        context: dirs.components.name,
        flatten: true,
      },
    ]),
  ],
};
