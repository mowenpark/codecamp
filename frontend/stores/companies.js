var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var CompaniesStore = new Store(AppDispatcher);

var _companies = [];

var resetPrograms = function(companies){
  _companies = companies.slice(0);
};

CompaniesStore.all = function () {
  return _companies.slice(0);
};

CompaniesStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "RECEIVE_COMPANIES":
      resetPrograms(payload.companies);
      CompaniesStore.__emitChange();
      break;
  }
};

module.exports = CompaniesStore;
