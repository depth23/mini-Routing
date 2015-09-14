var app = angular.module('miniRouting', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'JS/home/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .when('/settings', {
      templateUrl: 'JS/settings/settingsTmpl.html',
      controller: 'settingsCtrl'
    })
    .when('/products/:id', {
      templateUrl: 'JS/products/productTmpl.html',
      controller: 'productsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
});