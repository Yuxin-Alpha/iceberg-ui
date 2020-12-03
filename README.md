# iceberg-ui

## 启动
```
npm install
```
```
npm run serve
```

## 简要说明

UI库名为IceBergUI：因为最近在看冰山上的来客

不使用TS：因为练习为主，后期可以考虑加上，前期先放一放

测试框架Mocha Chai：Jest没用办法测试样式，对于UI库的编写不友好

## 目录结构

```javascript
|-docs 计划玩一下VitePress写个组件库使用文档，如果效果不好还是用VuePress
|-src
   |---examples 组件例子
   |---packages 组件具体实现
          |---button 按钮组件相关
                |---button.vue 按钮组件实现
                |---index.js 按需导入支持
          |---icon 图标组件相关
                |---icon.vue 图标组件实现
                |---index.js 按需导入支持
          ...
          |---index.js 所有组件 install 的出口
   |---styles 组件样式
          |---common 公共样式
          |---mixin 样式函数
          |---button.scss 按钮样式
          |---icon.scss 图标样式
          ...
   |---App.vue 测试组件，每写好一个可以放到这里面看看效果
   |---main.js 主入口
|-test
   |---unit
        |---button.spec.js 按钮组件对应的单元测试
```

## 开发规范

### git

### 代码

