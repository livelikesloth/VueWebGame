// //경로 찾기 도와주는 node 메소드
// const path = require('path');

// // node에 module을 만든 것 이렇게 만든 모듈을 웹팩 처리를 하는데 사용됨 웹팩 설정을 넣으면 됨
// module.exports = {
//   // 대표가 되는 파일
//   entry: {
//     // 하나로 합쳐질 파일의 이름
//     app: path.join(__dirname, 'main.js'),
//   },
//   // module이 웹팩의 핵심 rules에서 합칠 때 어떻게 처리할 건지 적이줄 수 있음
//   module: {},
//   // 부가적임
//   plugins: {},
//   output: {
//     //하나로 합쳐질 파일
//     filename: 'app.js',
//     //합쳐질 파일이 생성될 폴더 경로
//     path: path.join(__dirname, 'dist'),
//   },
// };

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.vue'],
  },
  entry: {
    app: path.join(__dirname, 'main.js'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
};
