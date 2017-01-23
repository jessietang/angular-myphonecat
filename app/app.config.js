/**
 * Created by jessietang on 12/16/2016.
 */
angular.module('phonecatApp')
.config(['$locationProvider','$routeProvider',function config($locationProvider,$routeProvider){
        /*
        $locationProvider.hashPrefix()����ϣǰ׺����Ϊ������ǰ׺��ӵ����ǿͻ���·�������У�
        λ���ļ�·�����ַ���#��֮��(���� index.html#!/some/path)����Ȼ����ǰ׺���Ǳ���ģ�
        �������ֺõ�����������ԭ�򳬳����γ̷�Χ���������ۣ���������õ�ǰ׺��
        */
        $locationProvider.hashPrefix('!');
        //����route����
        $routeProvider.
            when('/phones',{
            template: '<phone-list></phone-list>'
            }).
            when('/phones/:phoneId',{ /*��ʼ���������Ʒһֱ����ת��ԭ��������д���ˣ�' phones/:phoneId '  */
                template: '<phone-detail></phone-detail>'
            }).
            otherwise('/phones');

        /*
         ע���2��·�������е�:phoneId������$route����ʹ��·��������/phones/:phoneId��
         ��Ϊһ��ģ����ƥ�䵱ǰ��URL������:phoneId�������ᱻ��ȡ��$routeParams�����С�
         */
    }]);