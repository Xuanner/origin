const path = require('path')

// 引入vue-loader的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 自动生成index.html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // 打包入口
  entry: './src/main.js',
  // 打包出口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // 打包规则
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.css$/,
      oneOf: [
        // 匹配‘<style module="dark">’
        {
          resourceQuery: /module=dark/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: "[local]_dark_[hash:base64:5]"
                }
              }
            }
          ]
        },
        // 匹配‘<style module="light">’
        {
          resourceQuery: /module=light/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: "[local]_light_[hash:base64:5]"
                }
              }
            },
          ]
        },
        // 匹配普通的‘<style>’或‘<style scoped>’
        {
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        }
      ]
    }, {
      test: /\.scss$/,
      oneOf: [
        // 匹配‘<style module="dark">’
        {
          resourceQuery: /module=dark/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: "[local]_dark_[hash:base64:5]"
                }
              }
            },
            'sass-loader'
          ]
        },
        // 匹配‘<style module="light">’
        {
          resourceQuery: /module=light/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: "[local]_light_[hash:base64:5]"
                }
              }
            },
            'sass-loader'
          ]
        },
        // 匹配普通的‘<style>’或‘<style scoped>’
        {
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    }]
  },
  // 插件
  plugins: [
    new VueLoaderPlugin,
    new HtmlWebpackPlugin({
      // 设置生成预览页面的模板文件
      template: './public/index.html',
      // 设置生成预览页面名称
      filename: 'index.html'
    })
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  }
}