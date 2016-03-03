var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var UserStore = new Store(AppDispatcher);

var _user = {};

var resetUser = function(user){
  _user = jQuery.extend(true, {}, user);
};

UserStore.all = function () {
  return _user;
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "RECEIVE_USER":
      resetUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
