/**
 * Created by jessietang on 12/16/2016.
 */
angular.
    module('core.phone').
    factory('Phone', ['$resource',function($resource){
        return $resource('phones/:phoneId.json',{},{
            query: {
                method: 'GET',
                params: {phoneId: 'phones'},
                isArray: true
            }
        });
    }]);