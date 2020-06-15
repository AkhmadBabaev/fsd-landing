const CopyWebpackPlugin = require('copy-webpack-plugin');

const dirs = require('./dirs');
const generatePages = require('./pages');

module.exports = {
  context: dirs.input.path,
  entry: {
    index: [
      `./${dirs.pages.name}/index/index`,
      `./${dirs.pages.name}/index/index.scss`,
    ],
    colors: [
      `./${dirs.pages.name}/colors/colors`,
      `./${dirs.pages.name}/colors/colors.scss`,
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

      // Images

      {
        test: /\.(png|jpe?g|gif|svg|ico|webmanifest)$/i,
        include: dirs.images.path,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          emitFile: false,
        },
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        include: dirs.components.path,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: `${dirs.assets.name}/${dirs.images.name}`,
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
      { from: '**/{*,.*}', context: dirs.public.path },
      { from: `${dirs.assets.name}/${dirs.fonts.name}`, to: `${dirs.assets.name}/${dirs.fonts.name}` },
      { from: `${dirs.assets.name}/${dirs.images.name}`, to: `${dirs.assets.name}/${dirs.images.name}` },
      {
        from: '**/*.{png,jpg,jpeg,gif,svg,ico,webmanifest}',
        to: `${dirs.assets.name}/${dirs.images.name}`,
        context: dirs.components.name,
        flatten: true,
      },
    ]),
  ],
};