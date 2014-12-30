// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var testApp = angular.module('starter', ['ionic', 'starter.controllers'])

/*
testApp.controller('form2Ctrl', ["$scope", "$http", function($scope, $http){
    $scope.formData = {};
    $scope.processForm() = function(){};
                $http({
                  method : 'POST',
                    url : 'ec2-54-149-59-111.us-west-2.compute.amazonaws.com/process.php',
                    data : $.param($scope.formData),
                    headers : {'Content-Type' : 'application/x-www-form-urlencoded'}
                })

                .success(function(data) {
                    console.log(data);
                    if (!data.success){
                     $scope.errorUname = data.errors.uname;
                    $scope.errorPword = data.error.pword;

                    } else {

                        $scope.message = data.message;
                }
            });

            };
}])
*/

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

//where we put the states of the aplication 
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html",
        controller: 'formCtrl'
      }
    }
  })
  
  .state('app.test', {
    url: "/test",
    views: {
      'menuContent': {
        templateUrl: "templates/test.html",
        controller: "TestCtrl"
      }
    }
  })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

   .state('app.postItem', {
      url: "/postItem",
      views: {
        'menuContent': {
          templateUrl: "templates/post-item.html",
          controller: 'PostsCtrl'
        }
      }
   })

      .state('app.Groups', {
          url: "/Groups",
          views: {
              'menuContent': {
                  templateUrl: "templates/Groups.html",
                  controller: 'GroupsCtrl',
                  resolve: {
                      groups: function (GroupsService) {
                          return GroupsService.getGroups();
                      }
                  }
              }
          }
      })

      .state('app.SingleGroup', {
          url: "app/Groups/:groupId",
          views: {
              'menuContent': {
                  templateUrl: "templates/SingleGroup.html",
                  controller: 'SingleGroupCtrl',
                  resolve: {
                      group: function ($stateParams, GroupsService) {
                          console.log($stateParams.groupId);
                          //                          console.log("group is " + GroupsService.getGroup($stateParams.groupId).name);
                          return GroupsService.getGroup($stateParams.groupId);
                      }
                  }
              }
          }
      })
  
  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
    
   
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/Groups');
    
});

