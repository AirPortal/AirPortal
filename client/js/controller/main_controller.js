angular.module("AirPortal").controller('mainController', ['$scope', 'login', ($scope, login) => {
  login.loginWithTicket(1);

  $scope.ui = {
    selectFileOpen: false,
    enterFlightOpen: false,
    imageUploaded: false
  };
  $scope.uiFx = {
    resetButtons() {
      $scope.ui.selectFileOpen = false;
      $scope.ui.enterFlightOpen = false;
    }
  }
  $scope.model = {
    file: null
  };
  $scope.dialog = {
    selectFile() {
      $scope.ui.selectFileOpen = true;
      $scope.ui.enterFlightOpen = false;
    },
    inputFlight() {
      $scope.ui.selectFileOpen = false;
      $scope.ui.enterFlightOpen = true;
    }
  };
  $scope.dom = {
    uploadFile() {
      document.querySelector('#fileUpload').click();
    }
  };
  $scope.watcher = {
    selectedFile() {
      $scope.ui.imageUploaded = true;
      console.log($scope.ui.imageUploaded);
    }
  };
}]);
