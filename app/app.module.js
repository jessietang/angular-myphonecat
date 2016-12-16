/**
 * Created by jessietang on 12/16/2016.
 */
//定义主模块 'phonecatApp'
angular.module('phonecatApp',['phoneList','ngRoute','phoneDetail','core','ngAnimate']);
//将phoneList模块加入依赖关系数组，这样主模块就可以访问注册到'phoneList'模块上的组件
//增加ngRoute模块
//增加phoneDetail模块