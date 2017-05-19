angular.module('app').service('service', function(){

this.getQuestions = function(){
    return $http.get('https://practiceapi.devmountain.com/')
}

});