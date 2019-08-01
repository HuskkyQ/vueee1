# 这是一个SEVAN制作的项目

## 牛牛牛，非常有傲气

### Hello World

### 用传统方式(命令行)把项目上传到码云: 
1.` git add . `

2.` git commit -m "提交信息" `

3.` git push `

## 制作首页App组件
1.完成 Header 区域,使用的是 Mint-UI 中的 Header 组件

2.制作底部 Tabbar 区域，使用的是 MUI 的 Tabbar.html

+ 在制作 购物车 小图标的时候操作会相对多
+ 先把扩展图标的 CSS 样式拷到项目中
+ 拷贝 扩展字体库 ttf 文件到项目中
+ 为 购物车 小图标,添加样式 `mui-icon mui-icon-extra mui-icon-extra-cart`

3.在中间区域放置一个 router-view 里展示路由匹配到的组件

## 改造 tabbar 为 router-link


## 设置路由高亮


## 点击 tabbar 中的路由链接,展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据，使用 vue-resource 

2. this.$http.get 获取数据 保存在 this.data 上

3. 用 v-for 循环每个 item 项

## 改造 九宫格 区域的样式

## 改造新闻资讯 路由链接

## 新闻资讯 页面制作
1. 绘制界面, 使用 MUI 中的 media-list.html

2. 使用 vue-resource 获取数据

3. 渲染真实数据

## 实现新闻资讯列表 点击跳转到新闻详情
1. 把列表中的每一项改造为 router-link ,同时在跳转的时候提供唯一Id标识符

2. 创建新闻详情的组件页面 NewsInfo.vue 

3. 在路由模块中,将新闻详情的路由地址和组件页面对应起来

## 实现新闻详情 和数据渲染

## 单独封装一个 comment.vue 评论子组件
1. 先创建一个单独的 comment.vue 组件模板

2. 在需要使用组件的页面中,先手动导入 comment 组件
+ `import comment from './comment.vue'`

3. 在父组件中使用 `components`属性,将刚才导入的 comment 组件注册为自己的子组件

4. 用标签形式,引用注册好的子组件

## 获取所有的评论数据 显示到页面中
1. getComments()


## 实现点击加载更多评论的功能
1. 为 加载更多 按钮绑定 点击事件,在事件中请求下一页数据

2. 点击 加载多,让 pageIndex++, 然后重新调用 this.getComments() 方法 来获取最新一页的数据更

3. 为了防止新数据覆盖老数据的情况,使用数组的 concat() 把新数据和老数据拼接起来

## 发表评论
1. 为文本框做双向数据绑定

2. 为发表按钮 绑定一个事件

3. 校验评论内容是否为空,如果为空,则用 Toast 提示用户内容不允许为空

4. 通过 vue-resource 发送一个请求,把评论内容提交给服务器

5. 发表评论后刷新列表,以查看最新的评论


## 改造图片分析 按钮为 路由的链接并显示对应的组件页面

## 绘制 图片列表 组件页面结构 并美化样式
1. 顶部滑动条制作

2. 制作 图片列表
### 制作顶部滑动条的坑们:
1. 需要借助 MUI 中的 tab-top-webview-main.html 

2. 把 mui-fullscreen 删除

3. 滑动条无法正常触发滑动,通过检查官方文档发现，这是 JS 组件,需要被初始化
 + 导入 mui.js
 + ` mui( '.mui-scroll-wrapper' ).scroll({
 deceleration:0.0005
 }); `
 
 
 4. 遇到报错,使用 `npm i babel-plugin-transform-remove-strict-mode -D`
 
 5. 在 .babelrc 的 plugins 里面加 "transform-remove-strict-mode"
 
 6. npm install --save-dev babel-plugin-syntax-dynamic-import
 
 7.  在 .babelrc 添加 "ignore": [ "./src/lib/mui/js/*.js" ]
 
 8. 当滑动条调试完成后,tabbar无法正常运行,把每个tabbar按钮的样式中的 mui-tab-item 重新改名 具体看 App.vue 里面的css组件
 
 9. 获取所有分类 并渲染 分类列表
 
 ### 制作图片列表区域
 
1. 图片列表使用 懒加载技术,Mint-ui 中的 Lazy load 可以使用

2. 根据 lazy-load 的使用文档进行使用

3. 渲染图片列表数据

### 实现了图片懒加载 和 样式美化

## 实现了 点击图片 跳转到 图片详情页面
1. 在改造 li 成 router-link 标签的时候,需要添加（使用）tag 属性,来指定渲染为 li

## 实现详情页面的布局和美化,同时获取数据渲染页面

## 实现 图片详情中缩略图的功能 
1. 使用插件 vue-preview （缩略图插件）

2. 获取到所有图片列表,然后使用 v-for 指令渲染数据

3. 注意: img 标签上的 class 标签不能删除/ 每个图片数据对象中,必须有 w 和 h 属性

注意：上述算法已经更新 `https://blog.csdn.net/qq_36742720/article/details/83270636`

## 绘制商品列表 页面基本结构并美化


## 尝试在手机上进行项目的预览和开发
1. 要保证自己的手机可以正常运行

2. 要保证电脑和手机处于同一个wifi环境,也就是用手机可以访问到电脑IP

3. 打开项目中 package.json 文件,在 dev 脚本中,添加一个 --host 指令,把当前WIFI的IP地址设置为 --host的指令值;
+ 查看电脑所处WIFI的IP: 在终端运行 `ipconfig` ,即可查看无线网的ip地址

