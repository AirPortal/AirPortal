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
    uploadFiles(file, errFiles) {
      $scope.f = file;
      $scope.errFile = errFiles && errFiles[0];
      if (file) {
        Upload.upload({
          url: '/upload',
          data: { profileImage: file },
          method: 'POST'
        }).then(function (resp) {
          console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
          console.log('Error status: ' + resp.status);
        }, function (evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
        // })
        // .then((response) => {
        //   console.log(response);
        //   $timeout(() => {
        //     file.result = response.data;
        //     $scope.ui.imageUploaded = true;
        //   });
        // });
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
