const path = require("path");
const slsw = require("serverless-webpack");

module.exports = {
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  // serverless.yml의 package.individually 옵션에 따라 하나의 파일로 묶을지 여러 파일로 묶을지 결정할 수 있다.
  entry: slsw.lib.entries,
  // 소스맵에 대해 더 알아보자 : https://joshua1988.github.io/webpack-guide/devtools/source-map.html
  // https://velog.io/@seeker1207/SourceMap%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8Cwith-webPack-devtool
  devtool: "source-map",
  resolve: {
    extensions: [".mjs", ".json", ".ts", ".js"],
  },
  output: {
    // commonjs : 브라우저용, commonjs2 : Node 용
    libraryTarget: "commonjs2",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
  target: "node",
  module: {
    rules: [
      {
        // rules와 test의 역할은?
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
