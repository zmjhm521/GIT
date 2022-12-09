const path = require("path")
//引入html插件
const HTMLPlugin = require("html-webpack-plugin")
module.exports = {
    mode: "production",
    // entry:"./hello/hello.js",//指定打包时的主文件 默认 ./src/index.js
    // entry:["./src/a.js","./src/b.js"],//数组合并，对象分开
    // entry:{
    //     a:"./src/a.js",
    //     b:"./src/b.js",
    // }
    // entry:"./src/a.js",
    output:{
        // path:path.resolve(__dirname,"hello"),
        // filename:"boundle.js",
        clean:true,//自动清理打包目录
    },


    //webpack默认情况下只会处理js文件，如果我们希望它可以处理其他类型文件，则要为其引入loader
//以css为例
//1.安装yarn add css-loader -D
//2.配置module:{
//     rules:[
//         {
//             test:/\.css$/i,//css文件
//             use:"css-loader"
//         }
//     ]
// }
//babel loader 使用步骤
//1.安装 npm install -D babel-loader @babel/core @babel/preset-env webpack
//2.配置 
// test: /\.m?js$/,
//       exclude: /(node_modules|bower_components)/,
//       use: {
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/preset-env']
//         }



module:{
    rules:[
        {
            test:/\.css$/i,//css文件
            //从后往前执行
            use:["style-loader","css-loader"]
        },
        {
            test:/\.jpeg$/i,
            type:"asset/resource"//图片资源类型的数据，可以直接通过指定type来使用
        },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
    ]
},
//插件使用步骤
//1.创建依赖
//2.配置插件
plugins:[
    new HTMLPlugin({
       title:"hello webpack" 
    })
]
}

