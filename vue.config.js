module.exports = {
    // configureWebpack: {
    //   plugins: [
    //     new MyAwesomeWebpackPlugin()
    //   ]
    // },
//     //loader
//      chainWebpack: config => {
//       config.module
//         .rule('vue')
//         .use('vue-loader')
//           .loader('vue-loader')
//           .tap(options => {
//             // 修改它的选项...loader
//             return options
//           })
//     },
//     //生产环境关闭map
//    productionSourceMap:false,
//    //基本URL
//    baseUrl: process.env.NODE_ENV === 'production'
//       ? 'http://www.baidu.com'
//       : 'https://www.google.com',
//    outputDir:'dist', //build 目录
//    assetsDir:'',//asset目录
//    indexPath:'index.html',//指定index.html 路径
//    filenameHashing:true,//文件名带hash
//   //  multi-page模式,每个“page”应该有一个对应的 JavaScript 入口文件
//    pages: {
//       index: {
//         // page 的入口
//         entry: 'src/index/main.js',
//         // 模板来源
//         template: 'public/index.html',
//         // 在 dist/index.html 的输出
//         filename: 'index.html',
//         // 当使用 title 选项时，
//         // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
//         title: 'Index Page',
//         // 在这个页面中包含的块，默认情况下会包含
//         // 提取出来的通用 chunk 和 vendor chunk。
//         chunks: ['chunk-vendors', 'chunk-common', 'index']
//       },
//       // 当使用只有入口的字符串格式时，
//       // 模板会被推导为 `public/subpage.html`
//       // 并且如果找不到的话，就回退到 `public/index.html`。
//       // 输出文件名会被推导为 `subpage.html`。
//       subpage: 'src/subpage/main.js'
//     },
//     //css配置
//     css: {
//       sourceMap:false,//css source map
//       loaderOptions: {
//         css: {
//           // 这里的选项会传递给 css-loader
//         },
//         postcss: {
//           // 这里的选项会传递给 postcss-loader
//         }
//       }
//     },
    //dev server
    devServer: {
      host:'127.0.0.1',
      port:8000,
    //   proxy: 'http://localhost:4000',
      overlay: {
        warnings: true,//警告
        errors: true//错误
      }
    }
  }