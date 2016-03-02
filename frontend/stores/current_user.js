var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var CurrentUserStore = new Store(AppDispatcher);

var _currentUser = {};

var resetUser = function(user){
  _currentUser["currentUser"] = user;
};

CurrentUserStore.all = function () {
  var currentUser = [];
  currentUser.push(_currentUser["currentUser"]);
  return currentUser;
};

CurrentUserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "RECEIVE_CURRENT_USER":
      resetUser(payload.user);
      CurrentUserStore.__emitChange();
      break;
  }
};

module.exports = CurrentUserStore;
