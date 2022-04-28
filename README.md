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

## git相关问题
#### 在进行Git本地仓库与远程仓库的关联时，调用`pull`命令报错 **refusing to merge unrelated histories**

解决方法：
在pull命令后加上选项`--allow-unrelated-histories`