app.directive("showModal", [function() {
  return {
    restrict: "A",
    templateUrl: 'modal.html',
    link: function(scope, elem, attrs) {
      $(document).ready(function(){
        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal-trigger').leanModal();
      });
      $('#modal1').openModal();
    }
  }
}]);
