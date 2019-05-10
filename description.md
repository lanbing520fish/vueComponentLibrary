# vue init webpack
在文件夹内生成项目

# npm install
安装需要的依赖

# npm run dev
启动项目

# npm install --save-dev less-loader less
安装less

# 启动控制台报错
错误内容：[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
(found in <Root>)

查询相关资料得知

原因
vue有两种形式的代码 compiler（模板）模式和runtime模式（运行时），vue模块的package.json的main字段默认为runtime模式， 指向了"dist/vue.runtime.common.js"位置。

这是vue升级到2.0之后就有的特点。

而我的main.js文件中，初始化vue却是这么写的，这种形式为compiler模式的，所以就会出现上面的错误信息
new Vue({
  el: '#app',
})

解决办法
将app.vue中的代码修改如下就可以
new Vue({
  render: h => h(App)
}).$mount("#app")
到这里我们的问题还没完，那为什么之前是没问题的，之前vue版本也是2.x的呀？

#npm run build之后，index.html文件打开无法访问。
npm run dev是开发环境, npm run build是生产环境, 在开发环境完成代码和测试, 之后用生产环境生成代码,执行npm run build 命令后，会生成dist目录，里边包含index.html和static文件夹。

npm run build的时候, 一开始就会提示Built files are meant to be served over an HTTP server. Opening index.html over file:// won't work., 在vue-cli的默认配置中, 把assetsPublicPath: '/'改成assetsPublicPath: './', dist文件夹里的文件必须放在服务器的根目录

(修改config文件夹下index.js, build对象下的assetsPublicPath改成'./')

