var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var SearchParamsStore = new Store(AppDispatcher);

var _params = { name: "", location: "" };

SearchParamsStore.params = function () {
  return Object.assign({}, _params);
};

SearchParamsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "UPDATE_NAME":
      _params.name = payload.name;
      SearchParamsStore.__emitChange();
      break;
    case "UPDATE_LOCATION":
      _params.location = payload.location;
      SearchParamsStore.__emitChange();
      break;
  }
};

module.exports = SearchParamsStore;
