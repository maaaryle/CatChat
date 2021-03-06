// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('catchat', ['ionic', 'catchat.login', 'catchat.register', 'catchat.recover', 'catchat.home', 'catchat.contacts'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider',function($stateProvider){
    $stateProvider
        .state('login',{
            url:'/login',
            controller:'LoginController',
            templateUrl:'views/login.html'
        })
        .state('register',{
            url:'/register',
            controller:'RegisterController',
            templateUrl:'views/register.html'
        })
        .state('recover',{
            url:'/recover',
            controller:'RecoverController',
            templateUrl:'views/recover.html'
        })
        .state('home',{
            url:'/home',
            controller:'HomeController',
            templateUrl:'views/home.html'
        })
        .state('contacts',{
            url:'/contacts',
            controller:'ContactsController',
            templateUrl:'views/contacts.html'
        });
}]);