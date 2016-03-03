var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var CompaniesStore = new Store(AppDispatcher);

var _companies = {};

var resetCompanies = function(companies){
  _companies = {};
  companies.forEach(function (company) {
    _companies[company.id] = company;
  });
};

var resetCompany = function (company){
  _companies[company.id] = company;
};

CompaniesStore.all = function () {
  var companies = [];
  for (var id in _companies) {
    companies.push(_companies[id]);
  }
  return companies;
};

CompaniesStore.find =function (id) {
  return _companies[id];
};

CompaniesStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "RECEIVE_COMPANIES":
      resetCompanies(payload.companies);
      CompaniesStore.__emitChange();
      break;
    case "RECEIVE_COMPANY":
      resetCompany(payload.company);
      CompaniesStore.__emitChange();
      break;
  }
};

module.exports = CompaniesStore;
