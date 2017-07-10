angular.module("app", ["ui.router"]);


angular.module("app")
   .config(function($urlRouterProvider, $stateProvider){

      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state("input", {
          url: '/',
          templateUrl: "templates/input.html",
          controller: "Input"
        })
        .state("confirm", {
          url: "/confirm",
          templateUrl: "templates/confirm.html",
          controller: "Confirm",
        });
    });

