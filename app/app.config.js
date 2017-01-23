/**
 * Created by jessietang on 12/16/2016.
 */
angular.module('phonecatApp')
.config(['$locationProvider','$routeProvider',function config($locationProvider,$routeProvider){
        /*
        $locationProvider.hashPrefix()将哈希前缀设置为！，该前缀会加到我们客户端路由链接中，
        位于文件路径与字符（#）之间(例如 index.html#!/some/path)。虽然设置前缀不是必须的，
        但这是种好的做法（具体原因超出本课程范围，不做讨论）。！是最常用的前缀。
        */
        $locationProvider.hashPrefix('!');
        //配置route服务
        $routeProvider.
            when('/phones',{
            template: '<phone-list></phone-list>'
            }).
            when('/phones/:phoneId',{ /*开始点击单个产品一直不跳转，原因是这里写成了：' phones/:phoneId '  */
                template: '<phone-detail></phone-detail>'
            }).
            otherwise('/phones');

        /*
         注意第2个路由声明中的:phoneId参数。$route服务使用路由声明（/phones/:phoneId）
         作为一个模板来匹配当前的URL。所有:phoneId变量都会被提取到$routeParams对象中。
         */
    }]);