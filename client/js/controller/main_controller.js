app.controller('mainController', ['$scope', '$timeout', '$location', 'login', 'Upload', 'ticket', ($scope, $timeout, $location, login, Upload, ticket) => {
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
  $scope.form = {
    uploadFiles(file, errFiles) {
      $scope.f = file;
      $scope.errFile = errFiles && errFiles[0];
      if (file) {
        Upload.upload({
          url: '/upload',
          data: { profileImage: file },
          method: 'POST'
        }).then(function (resp) {
          console.log('Success ' + resp.config.data.profileImage.name + 'uploaded. Response: ' + JSON.stringify(resp.data));
          ticket.storeTicket(resp.data.data);
          $location.path('/dashboard');
        }, function (resp) {
          console.log('Error status: ' + resp.status);
        });
      }
    },
    submitFlightNumber() {
      login.loginWithTicket($scope.model.ticketNumber)
      .then(res => {
        console.log(res);
        // ticket.storeTicket(res);
        (res) && $timeout(() => {
          $location.path('/dashboard');
        });
      })
    }
  }
}]);
