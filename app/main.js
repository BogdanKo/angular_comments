
var app = angular.module('txtcomment',[]);

app.controller ('mainCtrl', function ($scope){

          $scope.comments = [];

              $scope.bth_add = function () {
                     if ($scope.txtcomment != '') {
                          $scope.comments.push($scope.txtcomment);
                          $scope.txtcomment = "";

                     };

              };

              $scope.btn_remove = function ($index) {
                   $scope.comments = splice($index,1);

              }

    })
