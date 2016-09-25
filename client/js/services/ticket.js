app.factory('ticket', ['localStorageService', (localStorageService) => {
  const obj = {};
  obj.storeTicket = ticketData => {
    localStorageService.set('ticket.record', ticketData);
  };
  obj.getTicket = () => {
    return localStorageService.get('ticket.record');
  }
  return obj;
}]);
