app.factory('ticket', ['$cacheFactory', ($cacheFactory) => {
  const obj = {};
  const ticketCache = $cacheFactory('ticket');
  obj.storeTicket = ticketData => {
    ticketCache.put('record', ticketData);
  };
  obj.getTicket = () => {
    return ticketCache.get('record');
  }
  return obj;
}]);
