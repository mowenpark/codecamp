var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var ReviewsStore = new Store(AppDispatcher);

var _reviews = [];

var resetReviews = function(reviews){
  _reviews = reviews.slice(0);
};

var addReview = function (review) {
  _reviews.push(review);
};

ReviewsStore.all = function () {
  return _reviews.slice(0);
};

ReviewsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "RECEIVE_REVIEWS":
      resetReviews(payload.reviews);
      ReviewsStore.__emitChange();
      break;
    case "RECEIVE_REVIEW":
      addReview(payload.review);
      ReviewsStore.__emitChange();
      break;
  }
};

module.exports = ReviewsStore;
