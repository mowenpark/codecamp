var React = require('react');
var PropTypes = React.PropTypes;

var SignUp = React.createClass({

  render: function() {
    return (
      <div className="container-fluid">
        <section className="container">
    		<div className="container-page">
    			<div className="col-md-6">
    				<h3 className="dark-grey">Registration</h3>

    				<div className="form-group col-lg-12">
    					<label>Full Name</label>
    					<input type="" name="" className="form-control" id="" value=""></input>
    				</div>

    				<div className="form-group col-lg-6">
    					<label>Password</label>
    					<input type="password" name="" className="form-control" id="" value=""></input>
    				</div>

    				<div className="form-group col-lg-6">
    					<label>Repeat Password</label>
    					<input type="password" name="" className="form-control" id="" value=""></input>
    				</div>

    				<div className="form-group col-lg-6">
    					<label>Email Address</label>
    					<input type="" name="" className="form-control" id="" value=""></input>
    				</div>

    				<div className="form-group col-lg-6">
    					<label>Repeat Email Address</label>
    					<input type="" name="" className="form-control" id="" value=""></input>
    				</div>

    				<div className="col-sm-6">
    					<input type="checkbox" className="checkbox" />Sigh up for our newsletter
    				</div>

    				<div className="col-sm-6">
    					<input type="checkbox" className="checkbox" />Send notifications to this email
    				</div>

    			</div>

    			<div className="col-md-6">
    				<h3 className="dark-grey">Terms and Conditions</h3>
    				<p>
    					By clicking on "Register" you agree to The Company's Terms and Conditions
    				</p>
    				<p>
    					While rare, prices are subject to change based on exchange rate fluctuations -
    					should such a fluctuation happen, we may request an additional payment. You have the option to request a full refund or to pay the new price. (Paragraph 13.5.8)
    				</p>
    				<p>
    					Should there be an error in the description or pricing of a product, we will provide you with a full refund (Paragraph 13.5.6)
    				</p>
    				<p>
    					Acceptance of an order by us is dependent on our suppliers ability to provide the product. (Paragraph 13.5.6)
    				</p>

    				<button type="submit" className="btn btn-primary">Register</button>
    			</div>
    		</div>
    	</section>
    </div>
    );
  }

});

module.exports = SignUp;
