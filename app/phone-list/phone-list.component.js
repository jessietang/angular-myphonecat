/**
 * Created by jessietang on 12/16/2016.
 */

//angular1.5��������ĸ������component�����directive���������
angular.module('phoneList')
.component('phoneList',{
        templateUrl: 'phone-list/phone-list.template.html',
        /*�����������ע��$http*/
        /*ѹ������ʱ��ע������
         ��Ϊ����ע����ͨ����������ʵ�ֵģ�����ѹ�������ʱ��
         Ҫע����������ܱ�ѹ��������ᵼ������ע�����
         ���ڸ����⣬������Ҫ�ṩһ����ֹѹ�������������б�*/

        //���õķ����ǣ������ע��������Ĵ�����ʹ�á�����ע�����顿
        /*ͨ�������������캯����ע���������
        *.component('phoneList',
        * {..., controller: ['$http', function PhoneListController($http) {...}]});*/

        /*controller: ['$http', function PhoneListController($http){
            var self = this;
            self.orderProp = 'age';

            /!*֮ǰ��װ����1.6.0�汾��angular,һֱ����˵��$http.get() is not a function,
             ��������1.5.8�汾�ľͿ����ˣ������ϵ�˵���ǣ�$http(...).success(function(data){})��1.6����д��*!/

            /!*1.6.0�汾��angular,��ǰ��д�� *!/
            /!*$http.get('phones/phones.json').success(function(data){
             $scope.phones = data;
             });*!/

            /!*1.6�汾��д�����������������response.data������ȡֵ��Ҳû��success������*!/

            /!*$http��ȡjson�ļ��е�����*!/
            $http.get('phones/phones.json').then(function(response){
                self.phones = response.data;
                //self.phones = response.data.slice(0,5); // just try try
            });

            this.orderProp = 'age';
        }]*/

        controller: ['Phone',function PhoneListController(Phone){
            this.phones = Phone.query(); //����ngResource֮��ı仯��
            //query() �� get()����֮���Ψһ������AngularJS����query()������������
            this.orderProp = 'age';
        }]
    });