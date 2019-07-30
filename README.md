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