app.controller('mainController', ['$scope', '$timeout', 'login', ($scope, $timeout, login) => {
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
      document.getElementById('fileUpload').click();
    }
  };
  $scope.watcher = {
    selectedFile() {
      $timeout(() => {
        $scope.ui.imageUploaded = true;
        document.getElementById('uploadFileSubmit').click();
      })
    }
  };
}]);
