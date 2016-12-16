/**
 * Created by jessietang on 12/16/2016.
 */
angular.module('phoneDetail',['ngRoute','core.phone']);

/*
phoneDetail模块依赖于ngRoute模块：ngRoute提供$ routeParams对象，
并将$ routeParams对象注入到phoneDetail组件的控制器。由于ngRoute也是
phonecatApp主模块的依赖，所以服务和指令在程序中随处可用（包括phoneDetail组件）。

 这意味着，即使我们没有将ngRoute放入phoneDetail组件的依赖列表中，我们的程序仍
 然可以正常运作。虽然省略子模块依赖（这些依赖已经导入主模块）听起来挺好的，但它
 打破程序的模块化，所以并不可取。

 想象一下，我们现在要在新项目中使用phoneDetail功能，但新项目并没有声明ngRoute依赖。
 这样，注入器就无法提供$routeParams，新程序也就无法运行了。
 所以，我们要始终明确一个子模块的依赖。不要依靠从父模块继承的依赖（因为父模块某天可能就不存在了）。

*/