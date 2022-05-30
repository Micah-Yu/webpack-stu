const path = require('path')

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, './build')
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i, // webpack5 的图片打包配置
        type: 'asset',
        generator: {
          filename: "img/[name].[hash:8][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024
          }
        }
      }
    ]
  }
}
