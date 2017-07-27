import React from "react";
import { Meteor } from 'meteor/meteor';

export default class Auth extends React.Component {

  loginWithGoogle(){
    Meteor.loginWithGoogle({
  requestPermissions: ['user_friends', 'public_profile', 'email']
}, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("SUCCESS");
  }
});
  }

  render(){
    return(
      <div>
        <button onClick={this.loginWithGoogle}>login with google</button>
      </div>
    )
  }
}