const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const path = require('path')

const pages = [
  'index',
  'about',
  'lifehacks',
  'lifehacks/1',
  'lifehacks/2',
  'lifehacks/3',
  'collections/1',
  'collections/2',
  'remindercard',
  'map',
  'collections',
  'promo',
  'questions',
  'styleguide',
  'old-promo',
  'lifehackspages/lifehackcustom',
  'articlespages/articlehdpe',
  'mindmaps/mindmapclothes1',
  'mindmaps/mindmapclothes2',
  'mindmaps/mindmapfood1',
  'mindmaps/mindmaptrash1',
  'collectionspages/collectionmelteens'
]

const partials = [
  'analytics',
  'navbar',
  'hamburger',
  'hamburger-phone',
  'page-navbar',
  'back-button',
  'page-footer'
]

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    new CopyPlugin({
      patterns: [{ from: 'src/share', to: 'share' }]
    }),

    ...pages.map((page) => {
      const pageName = `${page}.html`
      return new HtmlWebpackPlugin({
        hash: true,
        template: `./src/${pageName}`,
        filename: `./${pageName}`
      })
    }),

    new HtmlWebpackPartialsPlugin(
      partials.map((partial) => ({
        path: path.join(__dirname, `./src/partials/${partial}.html`),
        location: partial,
        template_filename: '*',
        priority: 'replace'
      }))
    )
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
