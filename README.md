# 高校竞赛管理系统后台

## 介绍
用于高校竞赛管理小程序的后台管理系统

## 项目目录


## 开发

### 引入Ant Design Vue
```bash
$ yarn add ant-design-vue
```
在`main.ts`中:
```diff
  import { createApp } from 'vue'
+ import Antd from 'ant-design-vue'
  import App from './App.vue'
+ import 'ant-design-vue/dist/antd.css'
 
  createApp(App)
+ .use(Antd)
  .mount('#app')
```

### 引入VueRouter
```bash
$ yarn add vue-router@4
```
- 在`src`目录下创建`router`文件夹, 用于存放VueRouter相关文件
- 这里我们使用`index.ts`作为VueRouter入口文件, 用`routes.ts`单独存放路由
`index.ts`
```ts
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

// 这里进行导出
export default router
```

`routes.ts`
```ts
// 这里引入类型RouteRecordRaw来规范类型，辅助开发
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  // ...
]

export default routes
```

然后在`main.ts`中进行引入即可:
```diff
 import { createApp, useAttrs } from 'vue'
 import Antd from 'ant-design-vue'
 import App from './App.vue'
 import 'ant-design-vue/dist/antd.css'
+ import router from './router'
 
 createApp(App)
+.use(router)
 .use(Antd)
 .mount('#app')
```

### 引入tailwindcss
为了写更少的css, 我选择使用`tailwindcss`来辅助开发  
- 首先安装`tailwindcss`以及与之搭配的工具
```bash
$ yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
```
- 快速创建配置文件, 这将会在根目录下创建`tailwind.config.js`和`postcss.config.js`文件: 
```bash
$ npx tailwindcss init -p
```
- tailwind.config.js
```js
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- postcss.config.js
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- 接下来要进行`tailwindcss`的配置来移除生产环境下没有用到的样式声明, 在刚刚创建的`tailwind.config.js`中:
```diff
module.exports = {
+ purge: ['./index.html', './src/**/*.{vue, js, ts, jsx, tsx}'],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- 接下来创建文件`src/styles/index.css`, 在css中引入`tailwindcss`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- 最后在`src/main.ts`下引入这个文件
```diff
  import { createApp, useAttrs } from 'vue'
  import Antd from 'ant-design-vue'
  import App from './App.vue'
  import 'ant-design-vue/dist/antd.css'
+ import './styles/index.css'
  import router from './router'
  
  createApp(App)
  .use(router)
  .use(Antd)
  .mount('#app')
```

接下来就可以愉快地使用了：
```html
<div class="w-10 h-5 bg-slate-600">Hello World</div>
```




## git相关问题
#### 在进行Git本地仓库与远程仓库的关联时，调用`pull`命令报错 **refusing to merge unrelated histories**

解决方法：
在pull命令后加上选项`--allow-unrelated-histories`
