var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var ErrorsStore = new Store(AppDispatcher);

var _errors = [];

var resetReviews = function(errors){
  _errors = errors.slice(0);
};

var addReview = function (error) {
  _errors.push(error);
};

ErrorsStore.all = function () {
  return _errors.slice(0);
};

ErrorsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "RECEIVE_ERRORS":
      resetReviews(payload.errors);
      ErrorsStore.__emitChange();
      break;
    case "RECEIVE_ERROR":
      addReview(payload.error);
      ErrorsStore.__emitChange();
      break;
  }
};

module.exports = ErrorsStore;
