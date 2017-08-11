##素履项目中的页面代码
>
> 1. 组件有用到Muse-ui和vux，注意下这两个的配置就行了。
> 2. webpack对项目进行了模块拆分，在config里配置打包的模块即可。这里出现了一个问题就是打包的时候报了一个webpackJsonp is not defined的问题，查证后发现是CommonsChunPlugin配置问题，公有模块配置vendor.js出现问题，删除后好了。
> 3. Vue相关代码都在VUEONE这个库中，大家自己看就好，页面放在了这个库的gh-pages分支里。


## 应用运行：

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
