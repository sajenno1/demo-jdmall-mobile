// vue.config.js
module.exports = {
    // 基本路径 
    //比如我的项目地址是 https://github.com/sajenno1/demo-jdmall-mobile

    //我要部署到 https://nusr.github.io/sajenno1/demo-jdmall-mobile,那么 publicPath 要配置为 /sajenno1/demo-jdmall-mobile
    //publicPath: "/demo-jdmall-mobile",
    publicPath: process.env.NODE_ENV === "production" ? "/demo-jdmall-mobile" : "/",
    // 输出文件目录
    outputDir: 'dist',
}