module.exports = {
  entry: __dirname + "/app/entry.js",//已多次提及的唯一入口文件
  output:{
    path: __dirname + "/public",//打包后的文件存放的地方
    filename:"bundle.js"//打包后输出文件的文件名
  },
  module: {
    rules: [
      {
        test: /\.css/,
          use: [
            'style-loader',
            'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  },
  devServer: {
    contentBase: './public'
  },
  devtool: 'inline-source-map',
}