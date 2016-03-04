var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ApiUtil = require('../util/api_util');

var SignUp = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return{
      name: "",
      password: "",
      email: "",
      location: "",
      bio: ""
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var newUser = Object.assign({}, this.state);
    ApiUtil.createUser(newUser);
  },

  render: function() {
    return (
      <div className="container-fluid">
        <section className="container">
    		<div className="container-page">
    			<div className="col-md-6">
    				<h3 className="dark-grey">Registration</h3>

    				<div className="form-group col-lg-12">
    					<label>Full Name</label>
              <textarea valueLink={this.linkState('name')} className="form-control"
                rows="1"
                placeholder="Please enter your full name.">
              </textarea>
    				</div>

    				<div className="form-group col-lg-6">
    					<label>Password</label>
              <textarea valueLink={this.linkState('password')} className="form-control"
                rows="1"
                placeholder="At least 6 characters long.">
              </textarea>
    				</div>

    				<div className="form-group col-lg-6">
    					<label>Repeat Password</label>
              <textarea valueLink={this.linkState('password')} className="form-control"
                rows="1"
                placeholder="One more time with feeling.">
              </textarea>
    				</div>

    				<div className="form-group col-lg-6">
    					<label>Email Address</label>
              <textarea valueLink={this.linkState('email')} className="form-control"
                rows="1"
                placeholder="A valid email please.">
              </textarea>
    				</div>

    				<div className="form-group col-lg-6">
    					<label>Repeat Email Address</label>
                <textarea valueLink={this.linkState('email')} className="form-control"
                  rows="1"
                  placeholder="You can do it!">
                </textarea>
    				</div>

            <div className="form-group col-lg-6">
    					<label>Your Location</label>
                <textarea valueLink={this.linkState('location')} className="form-control"
                  rows="1"
                  placeholder="e.g. Mill Valley, California (US)">
                </textarea>
    				</div>

    				<div className="form-group col-lg-6">
    					<label>A quick bio about yourself</label>
              <textarea valueLink={this.linkState('bio')} className="form-control"
                rows="1"
                placeholder="I don't care.">
              </textarea>
    				</div>


    			</div>

    			<div className="col-md-6">
    				<h3 className="dark-grey">Welcome to Codecamp!</h3>
    				<p>
    					Once you've signed up you can leave reviews on programs you've attended or are currently attending.
    				</p>
    				<p>
    					Feel free to browse other programs and companies using the search bar above.
    				</p>
    				<p>
    					If you are more interested in searching by language, that is indeed possible! Select Languages from the
              dropdown-menu and let er rip!
    				</p>

    				<button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Sign Up</button>
    			</div>
    		</div>
    	</section>
    </div>
    );
  }

});

module.exports = SignUp;
