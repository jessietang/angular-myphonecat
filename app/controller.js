/**
 * Created by jessietang on 12/15/2016.
 */
var phoneCatApp = angular.module("phoneCatApp",[]);

phoneCatApp.controller("phoneListCtrl",["$scope","$http", function($scope, $http){
        $scope.phones = [];
        /*之前安装的是1.6.0版本的angular,一直报错说是$http.get() is not a function,
         后来换成1.5.8版本的就可以了，看网上的说法是，$http(...).success(function(data){})在1.6换了写法*/

        /*1.6.0版本的angular,以前的写法 */
        /*$http.get('phones/phones.json').success(function(data){
         $scope.phones = data;
         });*/

        /*1.6版本的写法变成了下面这样：response.data这样来取值，也没有success方法了*/
        $http.get('phones/phones.json').then(function(response){
            $scope.phones = response.data;
        });

        $scope.orderProp = "age";
    }]);

phoneCatApp.controller("PhoneDetailCtrl",['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.phoneId = $routeParams.phoneId;
    }]);