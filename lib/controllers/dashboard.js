angular.module('nwng.dashboard', [])
  .controller('DashboardCtrl', ['fs', '$scope', function (fs, $scope) {

    $scope.title = 'Dashboard';
    $scope.ui = {
      files: [],
      path: './'
    }

    $scope.refreshFiles = function() {
      fs.readdir($scope.ui.path, function(err, files) {
        if (err) {
          console.log(err);
        }
        console.log(files);
        $scope.$apply(function(){
          $scope.ui.files = files;
        });
      });
    };

    $scope.refreshFiles();
  }]);