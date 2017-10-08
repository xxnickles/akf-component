const path = require("path")
module.exports = {
  entry: {
    myComponent:'./src/component/index.ts',
    myInstanceableComponent: './src/component/component.ts'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }
  ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'window',
    library: '[name]',
    umdNamedDefine: true
  }
};