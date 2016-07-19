function MainController ($scope){
  $scope.likes = 0;
  $scope.form = 'likes';

  $scope.addToLikes = function(){
    $scope.likes ++;
    if($scope.likes == 1){
      $scope.form = 'like';
    } else {
      $scope.form ='likes';
    }
  }
}

MainController.$inject = ['$scope'];
export { MainController };
