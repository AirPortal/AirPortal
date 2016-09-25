app.controller('mainController', ['$scope', '$timeout', 'login', 'Upload', ($scope, $timeout, login, Upload) => {
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
    },
    uploadFiles(file, errFiles) {
      $scope.f = file;
      $scope.errFile = errFiles && errFiles[0];
      if (file) {
        Upload.upload({
          url: '/upload',
          file: file
        })
        .then((response) => {
          console.log(response);
          $timeout(() => {
            file.result = response.data;
          });
        }, (response) => {
          if (response.status > 0)
            $scope.errorMsg = response.status + ': ' + response.data;
          }, (evt) => {
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
      }
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
