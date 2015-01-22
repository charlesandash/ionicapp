//(function () {
    angular.module('starter.controllers', [])

        .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $http) {
            // Form data for the login modal
            $scope.loginData = {};
            // $scope.formData ={};


            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('templates/post.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal2 = modal;
                animation: 'slide-in-up'
            });

            // Triggered in the login modal to close it
            $scope.closePost = function () {
                $scope.modal2.hide();
            };

            // Open the login modal
            $scope.post = function () {
                $scope.modal2.show();
                $scope.postData = {};

            };

            // Perform the login action when the user submits the login form
            $scope.doPost = function () {
                console.log('Doing Post', $scope.postData);

                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system
                $timeout(function () {
                    $scope.closePost();
                }, 1000);
            };



            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('templates/login.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal = modal;
            });

            // Triggered in the login modal to close it
            $scope.closeLogin = function () {
                $scope.modal.hide();
            };

            // Open the login modal
            $scope.login = function () {
                $scope.modal.show();
            };

            // Perform the login action when the user submits the login form
            $scope.doLogin = function () {
                console.log('Doing login', $scope.loginData);

                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system
                $timeout(function () {
                    $scope.closeLogin();
                }, 1000);
            };
        })

        .controller('formCtrl', ["$scope", "$http", function ($scope, $http) {
            $scope.formData = {};

            $scope.process = function () {
                $.ajax({
                    type: 'POST',
                    url: 'http://54.149.59.111/create.php',
                 data : {firstName : $scope.firstName, lastName : $scope.lastName, password : $scope.password} ,


                   
                    success: function (data) {
                        console.log(data);
                        if (!data.success) {
                            $scope.errorUname = data.errors.uname;
                            $scope.errorPword = data.error.pword;

                        } else {

                            $scope.message = data.message;
                        }
                    }

                });

            };
        }])

        .controller('PlaylistsCtrl', function ($scope) {
            $scope.playlists = [
              { title: 'Reggae', id: 1 },
              { title: 'Chill', id: 2 },
              { title: 'Dubstep', id: 3 },
              { title: 'Indie', id: 4 },
              { title: 'Rap', id: 5 },
              { title: 'Cowbell', id: 6 }
            ];
        })
        .controller('ViewPostCtrl', function($scope, post){
            $scope.post= post;
            console.log("Checking to see if post exists");
            console.log(post.name);
            console.log(post.id);
        $scope.leftButtons = [{
                type: 'button-icon icon ion-navicon',
                tap: function (e) {
                    $scope.sideMenuController.toggleLeft();
                }
            }];
            $scope.hideBackButton = true;
    })
    
            .controller('CreateGroupCtrl', function ($scope) {
        })

        .controller('SingleGroupCtrl', function ($scope, group, PostsService) {
            $scope.posts = PostsService.getPosts();
            $scope.group = group;
            
            $scope.leftButtons = [{
                type: 'button-icon icon ion-navicon',
                tap: function (e) {
                    $scope.sideMenuController.toggleLeft();
                }
            }];
            $scope.hideBackButton = true;
        })

    .controller('GroupsCtrl', function ($scope, $state, groups) {

        $scope.groups = groups;
        /*$scope.changeState = function(){
            $state.transitionTo("CreateGroup");
        }*/
        $scope.leftButtons = [{
            type: 'button-icon icon ion-navicon',
            tab: function (e) {
                $scope.sideMenuController.toggleLeft();
            }
        }];
        //    $scope.hideBackButton = true;
       
    })


    .service('GroupsService', function ($q) {
        return {
            groups: [
                {
                    id: '1',
                    name: 'Butts'
                },
                {
                    id: '2',
                    name: 'Boots'
                }
            ],

            getGroups: function () {
                return this.groups;
            },
            getGroup: function (groupId) {
                var dfd = $q.defer();
                this.groups.forEach(function (group) {
                    if (group.id === groupId) {
                        console.log("function");
                        console.log(group.id)
                        console.log(group.name);
                        console.log("end function");
                        dfd.resolve(group);
                    }
                })
                console.log("name is, ", dfd.promise.name);
                return dfd.promise;
            }
        }
    })
    
     .service('PostsService', ['$q', function ($q) {
        return {
            posts: [
                {
                    id: '1',
                    name: 'Ash',
                    content: 'What should we ask'
                },
                {
                    id: '2',
                    name: 'Sam',
                    content: 'Hello'
                }
            ],

            getPosts: function () {
                return this.posts;
            },
            getPost: function (postId) {
                var dfd = $q.defer();
                this.posts.forEach(function (post) {
                    if (post.id === postId) {
                       console.log("function");
                        console.log(post.id)
                        console.log(post.name);
                        console.log("end function");
                        dfd.resolve(post);
                    }
                })
                return dfd.promise;
            }
        }
    }])
    






