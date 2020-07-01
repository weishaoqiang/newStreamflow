const path = require('path') // node的path对象
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

console.log(path.resolve('src/assets/style/init.scss'))

const config = {
  mode: 'development',
  entry: {
    app: [path.resolve(__dirname, 'src/app.js')]
  },
  output: {
    // publicPath: path.join(__dirname, ' /dist/assets'),
    path: path.join(__dirname, '/dist/'),
    filename: '[name][hash:8].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.join(__dirname, '/src/'),
      'views': path.join(__dirname, '/src/views'),
      'components': path.join(__dirname, '/src/components')
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: ['vue-loader'],
        exclude: /node_modules/
      }, {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }, 
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192, // 8k以下的图片将使用base64图片格式处理
            esModule: false // 这里设置为false
          },
        }],
        include: [path.resolve('src')]
      }, {
        test: /\.(ttf|woff)$/,
        use: [{
          loader: 'file-loader',
          options: {
            esModule: false
          }
        }],
        include: [path.resolve('src'), path.resolve('node_modules/element-ui/lib/theme-chalk')]
      }, {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader'],
        include: [path.resolve('src'), path.resolve('node_modules/element-ui/lib/theme-chalk')]
      }, {
        test: /\.(scss|sass)$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader', {
          loader: 'sass-resources-loader',
          options: {
            resources: [path.resolve('src/assets/style/init.scss')]
          }
        }],
        include: [path.resolve('src'), path.resolve('node_modules/element-ui/lib/theme-chalk')]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'streamflow',
      template: __dirname + '/src/index.html',
      filename: __dirname + '/dist/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 8080,
    overlay: true // 页面上展示编译错误
  }
}

module.exports = config