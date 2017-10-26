import React from 'react';
import TextField from 'material-ui/TextField';

const checkoutTextField = () => {
  return (
  <div className="checkout-textfield">
    <TextField
      hintText="e.g. Darth Vader"
      floatingLabelText="Name"
    /><br />
    <TextField
      hintText="e.g. 867-5309"
      floatingLabelText="Phone Number"
    /><br />
    <TextField
      hintText="e.g. you@email.com"
      floatingLabelText="Email Address"
    /><br />
    <TextField
      hintText="e.g. 1600 Pennsylvania Ave NW"
      floatingLabelText="Street Address"
    /><br />
    <TextField
      hintText="e.g. 94104"
      floatingLabelText="ZIP or Postcode"
    /><br />
    <TextField
      hintText="e.g. New York City"
      floatingLabelText="City or Suburb"
    /><br />
    <TextField
      hintText="e.g. New York"
      floatingLabelText="State, Region or Province"
    /><br />
  </div>
  )
};

export default checkoutTextField;