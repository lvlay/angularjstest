#AngularJS

##全新的MVC前端框架

* MVC  M-model模型  v--View视图--页面 C- controller控制器

* 高内聚低耦合
 重心放在数据上 将页面数据的渲染，页面架构的控制都交由AngularJS完成


* 特点: mvc  高内聚低耦合  减轻前端开发人员页面处理的负担，只需要专注于数据

* 可用来制作单页面应用

##双向数据绑定  数据源发生的数据改变会反映到view的显示层，显示层发生数据改变反过来也会影响数据源
依赖注入  

##使用步骤 
            1.导入angularJS的js文件
            2.使用ng-app指令确定angular起作用范围
            3.编写代码

##核心1:

### 指令 :  定义在html标签上的一系列以ng开头的自定义属性
    1.ng-app指令: 确定angularJS起作用的范围
    2.ng-bind指令:绑定数据  比较笨重  会将绑定标签的内容全部抹除
    3.ng-model:指定数据模型
    4.ng-init:初始化数据
    5.ng-repeat:循环数据
    6.ng-show  显示 值 true\false 
    7.ng-hidden 隐藏  true\false

##模板   {{内容}}


##注意:
默认情况下
1. angular与js不互通   在ng的内容里不能直接使用js代码，在js代码中也不能直接访问ng的内容
 事件也是如此 
2. 一旦页面标签中设置了ng指令，那么这个标签的所有行为都受ng的控制，哪怕其原先的value属性都不起作用
可以使用ng-init指令给ng中的数据赋初始值，一般要将ng-init指令放在父节点上，作用于其中的所有子节点

##核心2：
### 控制器 controller 
            1.起到连接ng组件与js代码的桥梁作用
            2.实现业务逻辑的js代码，都应该放到控制器中
            3.控制器的作用范围是它所在的html的标签范围

### 作用域 $scope 是angular中的顶级作用域对象

##核心3：
 * 过滤器   用来过滤要显示的数据。数据的格式化，表单数据的校验都可以使用过滤器
 * 常用过滤器
  1. currency 货币过滤器
  2. date  时间/日期过滤器


###修改页面的显示样式
##
 1.直接修改 class或style属性的值,但是填充时要使用{{}}
 2.使用ng-class或ng-style 可以直接填充angular中的变量,变量可以是普通的数值,也可以是数组,还可以是json对象


###控制页面标签的显示
* ng-show/ng-hidden   show/hidden实际控制的是display属性
* ng-if 如果条件为false,那么它所控制的页面元素将会被删除

## 代码仓库地址
https://github.com/lvlay/angularjstest















