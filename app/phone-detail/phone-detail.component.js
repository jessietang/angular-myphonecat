/**
 * Created by jessietang on 12/16/2016.
 */
angular.module('phoneDetail').
    component('phoneDetail',{
        templateUrl: 'phone-detail/phone-detail.template.html',
        /*controller: ['$routeParams','$http',function PhoneDetailController($routeParams,$http){
            var self = this;

            self.setImage = function setImage(imageUrl){
                self.mainImageUrl = imageUrl;
            };

            $http.get('phones/'+$routeParams.phoneId+'.json').then(function(response){
                self.phone = response.data;
                self.setImage(self.phone.images[0]);
            });
            /!*����:phoneId�������ᱻ��ȡ��$routeParams������.���app.config.js*!/
        }]*/

        controller: ['$routeParams','Phone', function PhoneDetailController($routeParams,Phone){
            var self = this;
            self.phone = Phone.get({phoneId:$routeParams.phoneId}, function(phone){
                self.setImage(phone.images[0]);
            });
            self.setImage = function setImage(imageUrl){
                self.mainImageUrl = imageUrl;
            };
        }]
    });