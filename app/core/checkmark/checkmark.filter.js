/**
 * Created by jessietang on 12/16/2016.
 */
/*上一节，详情页面直接用"true"和"false"来显示某个手机特性是否被支持，
在这里，我们将定制一个转换器将字符转成图形，符号:? 对应 "true", ? 对应 "false"。*/

/*我们的转换器叫做"checkmark"，输入的值为trur或false。
返回结果是unicode字符：true (\u2713 -> ?) 或者false (\u2718 -> ?)。*/
angular.module('core').
    filter('checkmark',function(){
        return function(input){
            return input ? '\u2713' : '\u2718';
        }
    });