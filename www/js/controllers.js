(function(){
angular.module('starter.controllers', [])

    .controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {
      // Form data for the login modal
      $scope.loginData = {};
     // $scope.formData ={};
    

      // Create the login modal that we will use later
      $ionicModal.fromTemplateUrl('templates/post.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal2 = modal;
        animation:'slide-in-up'
      });

      // Triggered in the login modal to close it
      $scope.closePost = function() {
        $scope.modal2.hide();
      };

      // Open the login modal
      $scope.post = function() {
        $scope.modal2.show();
        $scope.postData ={};
        
      };

      // Perform the login action when the user submits the login form
      $scope.doPost = function() {
        console.log('Doing Post', $scope.postData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
          $scope.closePost();
        }, 1000);
      };
    

        
      // Create the login modal that we will use later
      $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
      });

      // Triggered in the login modal to close it
      $scope.closeLogin = function() {
        $scope.modal.hide();
      };

      // Open the login modal
      $scope.login = function() {
        $scope.modal.show();
      };

      // Perform the login action when the user submits the login form
      $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
          $scope.closeLogin();
        }, 1000);
      };
    })
    
    .controller('formCtrl', ["$scope", "$http", function($scope, $http) {
            $scope.formData = {};
           
            $scope.process = function(){
           //     $http({
          //          method : 'POST',
          //          url: 'http://127.0.0.1/process.php',
          //          data : $.param($scope.formData),
          //          crossdomain: 'true',
          //          datatype: 'jsonp',
          //          headers : {'Content-Type' : 'application/x-www-form-urlencoded'}
                $.ajax({
                    type: 'POST',
                    url: 'http://54.149.59.111/process.php',
                 

        //        success(function(data) {
                success: function(data) {
                    console.log(data);
                    if (!data.success){
                     $scope.errorUname = data.errors.uname;
                     $scope.errorPword = data.error.pword;

                    } else {

                        $scope.message = data.message;
                }
                }

            });   

            }; 
        }])

    .controller('PlaylistsCtrl', function($scope) {
      $scope.playlists = [
        { title: 'Reggae', id: 1 },
        { title: 'Chill', id: 2 },
        { title: 'Dubstep', id: 3 },
        { title: 'Indie', id: 4 },
        { title: 'Rap', id: 5 },
        { title: 'Cowbell', id: 6 }
      ];
    })
    .controller('TestCtrl', function($scope) {
    
    $scope.products = [{
        title: "Hello",
        subject : "Chemistry",
        name : "Ashwath",
        id : 1   
    },
                    
    {   title: "Yes",
        subject : "Physics",
        name : "Malu",
        id : 2  
    },
    {
        title: "World",
        subject : "Math",
        name : "Annie",
        id : 3      
    }
    ];
    })

   .controller('PostsCtrl', function() {
   var allPosts = [{
        title: "Hello",
        subject : "Chemistry",
        name : "Ashwath",
        id : 1   
    },
                    
    {   title: "Yes",
        subject : "Physics",
        name : "Malu",
        id : 2  
    },
    {
        title: "World",
        subject : "Math",
        name : "Annie",
        id : 3      
    }
    ];
    
    this.products = allPosts;
    })

    .controller('PlaylistCtrl', function($scope, $stateParams) {
    });

    var allPosts = [{
        title: "Hello",
        subject : "Chemistry",
        name : "Ashwath",
        id : 1   },
                    
    {   title: "Yes",
        subject : "Physics",
        name : "Malu",
        id : 2   },
{     title: "World",
        subject : "Math",
        name : "Annie",
        id : 3      
    }];
    
})();

