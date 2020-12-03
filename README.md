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

```
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
        ...
```

## 开发规范

### git

+ master 已被限制push，所有新建分支都必须从master上开出来

+ deploy/test 用于测试，新建分支必须先提交mr到该分支，保证该分支功能正常，没有冲突，再提master，另外这个分支再提交mr时会做code review

+ branch命名规范(不允许在branch中写入中文)
  ```
  新功能: feat/ + add- + ComponentName- + ?function
       例如: feat/add-Tree 或者 feat/add-Tree-filter 
  更新: update/ + ComponentName- + ?function + ?option 
       例如: update/Tree-fresh-transition
  bug：fix/ + ComponentName + function
       例如: fix/Tree-nodeClick
  ```
  ps: 该规范只是模板，branch 名应具体到组件，这边不做强制限制

+ commit记录规范
  ```
  新功能: feat: + 组件名 + 功能描述
       例如: feat: Tree组件搜索功能开发
  更新: update: + 组件名 + 属性或者方法作用描述 
       例如: update: Tree组件添加node-click事件优化处理
  bug：fix: + 组件名 + 修复功能描述
       例如: fix: Tree组件修复父级收起无过渡效果
  review：这个不做要求，可以直接写code-review
  ```

### code

+ 不允许使用Vue2的optionsAPI方法组织组件，只能使用composition-api


+ 模板中不允许出现表达式，如下
  ```html
  <div v-if="props.list.length > 0"><div>
  ```
  所有 有意义的逻辑运算全部放到computed里面

+ 事件名一律从简，emit的时候采用短横线的形式
  ```javascript
  setup(props, context) {
    context.emit('click', index)
    context.emit('fresh')
    context.emit('node-click', node)
  }
  ```
+ 所有 有蒙层的组件或者全局样式的组件(Dialog, Message等)统一使用teleport,不允许使用fixed实现

+ 待续...
