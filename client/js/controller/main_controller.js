app.controller('mainController', ['$scope', '$timeout', '$location', 'login', 'Upload', ($scope, $timeout, $location, login, Upload) => {
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
    file: null,
    ticketNumber: ""
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
          console.log('Success ' + resp.config.data.profileImage.name + 'uploaded. Response: ' + resp.data);
          $location.path('/dashboard');
        }, function (resp) {
          console.log('Error status: ' + resp.status);
        });
      }
    }
  };
  $scope.form = {
    submitFlightNumber() {
      login.loginWithTicket($scope.model.ticketNumber)
      .then(res => {
        (res === 'OK') && $timeout(() => {
          $location.path('/dashboard');
        });
      })
    }
  }
}]);
