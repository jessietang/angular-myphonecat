/**
 * Created by jessietang on 12/16/2016.
 */

//angular1.5引入组件的概念，并用component来替代directive来创建组件
angular.module('phoneList')
.component('phoneList',{
        templateUrl: 'phone-list/phone-list.template.html',
        /*向控制器函数注入$http*/
        /*压缩代码时的注意事项
         因为依赖注入是通过参数名来实现的，所以压缩代码的时候，
         要注意参数名不能被压缩，否则会导致依赖注入出错。
         对于该问题，我们需要提供一个禁止压缩的依赖名称列表*/

        //常用的方法是：在组件注册控制器的代码中使用【内联注解数组】
        /*通常，用内联构造函数来注册控制器：
        *.component('phoneList',
        * {..., controller: ['$http', function PhoneListController($http) {...}]});*/

        /*controller: ['$http', function PhoneListController($http){
            var self = this;
            self.orderProp = 'age';

            /!*之前安装的是1.6.0版本的angular,一直报错说是$http.get() is not a function,
             后来换成1.5.8版本的就可以了，看网上的说法是，$http(...).success(function(data){})在1.6换了写法*!/

            /!*1.6.0版本的angular,以前的写法 *!/
            /!*$http.get('phones/phones.json').success(function(data){
             $scope.phones = data;
             });*!/

            /!*1.6版本的写法变成了下面这样：response.data这样来取值，也没有success方法了*!/

            /!*$http获取json文件中的数据*!/
            $http.get('phones/phones.json').then(function(response){
                self.phones = response.data;
                //self.phones = response.data.slice(0,5); // just try try
            });

            this.orderProp = 'age';
        }]*/

        controller: ['Phone',function PhoneListController(Phone){
            this.phones = Phone.query(); //用了ngResource之后的变化点
            //query() 和 get()方法之间的唯一区别是AngularJS期望query()方法返回数组
            this.orderProp = 'age';
        }]
    });