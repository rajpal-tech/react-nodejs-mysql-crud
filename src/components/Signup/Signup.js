import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      name: "",
      redirecToreferrer: false,
    };
    this.onChnage = this.onChnage.bind(this);
  }

  onChnage(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  Signup(){
    if(this.state.username && this.state.password && this.state.email && this.state.name){
        console.log("this.state.username",this.state)
    }else{
        console.log("please enter value's")
    }
  }

  render() {
      
    if (this.state.redirectToReferrer || sessionStorage.getItem("userData")) {
        return <Redirect to={"/home"} />;
      }

    return (
      <div className="row " id="Body">
        <div className="medium-5 columns left">
          <h4>Signup</h4>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.onChange}
          />
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.onChange}
          />
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.onChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.onChange}
          />

          <input
            type="submit"
            className="button"
            value="Sign Up"
            onClick={this.signup}
          />
          <a href="/login">Login</a>
        </div>
      </div>
    );
  }
}

export default Signup;
