/**
 * Created by jessietang on 12/16/2016.
 */
/*��һ�ڣ�����ҳ��ֱ����"true"��"false"����ʾĳ���ֻ������Ƿ�֧�֣�
��������ǽ�����һ��ת�������ַ�ת��ͼ�Σ�����:? ��Ӧ "true", ? ��Ӧ "false"��*/

/*���ǵ�ת��������"checkmark"�������ֵΪtrur��false��
���ؽ����unicode�ַ���true (\u2713 -> ?) ����false (\u2718 -> ?)��*/
angular.module('core').
    filter('checkmark',function(){
        return function(input){
            return input ? '\u2713' : '\u2718';
        }
    });