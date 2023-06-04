const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const path = require('path')

const pages = [
  'index',
  'about',
  'styleguidefinish',
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
  'landing',
  'questions',
  'styleguide',
  'old-promo',
  'articlesfilterpage',
  'collectionsfilterpage',
  'lifehacksfilterpage',
  'mindmapsfilterpage',
  'lifehackspages/lifehackcustom',
  'lifehackspages/lifehackpackless',
  'lifehackspages/lifehack3',
  'lifehackspages/lifehack4',
  'lifehackspages/lifehack5',
  'lifehackspages/lifehack6',
  'lifehackspages/lifehack7',
  'lifehackspages/lifehack8',
  'lifehackspages/lifehack9',
  'lifehackspages/lifehack10',
  'lifehackspages/lifehack11',
  'lifehackspages/lifehack12',
  'lifehackspages/lifehack13',
  'lifehackspages/lifehack14',
  'lifehackspages/lifehack15',
  'lifehackspages/lifehack16',
  'lifehackspages/lifehack17',
  'mindmapspages/test',
  'articlespages/articlehdpe',
  'articlespages/articlecans',
  'articlespages/articlecardboard',
  'articlespages/articlecup',
  'articlespages/articlefood',
  'articlespages/articleglass',
  'articlespages/articlelid',
  'articlespages/articleplasticbag',
  'articlespages/articlesponge',
  'articlespages/articleshoe',
  'mindmapspages/mindmapclothes1',
  'mindmapspages/mindmapclothes2',
  'mindmapspages/mindmapfood1',
  'mindmapspages/mindmapfood2',
  'mindmapspages/mindmaptrash1',
  'mindmapspages/cribs/mindmapclothes1crib',
  'mindmapspages/cribs/mindmapclothes2crib',
  'mindmapspages/cribs/mindmapfood1crib',
  'mindmapspages/cribs/mindmapfood2crib',
  'mindmapspages/cribs/mindmaptrash1crib',
  'collectionspages/collection1',
  'collectionspages/collection2',
  'collectionspages/collection3',
  'collectionspages/collection4',
  'collectionspages/collection5',
  'collectionspages/collection6',
  'collectionspages/collection7',
  'collectionspages/collection8',
  'collectionspages/collection9',
  'collectionspages/collection10',
  'collectionspages/collection11',
  'collectionspages/collection12'
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

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
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
