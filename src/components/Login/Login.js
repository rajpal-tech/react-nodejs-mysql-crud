import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Api from '../../Services/Services'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      redirectToreferrer: false,
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login() {
    if (this.state.username && this.state.password) {
      console.log("this.state.username && this.state.password",this.state.username ,this.state.password)
      let postdata = { email: this.state.username, password: this.state.password};

      Api.postData("login", JSON.stringify(postdata))
      .then((result) => {
        console.log("result,result",result)
        if (result.code == "200") {
          console.log("200 Code......",this.state)
          sessionStorage.setItem("userData", JSON.stringify(result.result));
          this.setState({ redirectToReferrer: true });
        }else{
          console.log("result......0 code ",this.state)
        }
      });
    }
  }

  render() {

    if (this.state.redirectToReferrer  ) {
        return <Redirect to={"/home"} />;
      }

    if (sessionStorage.getItem("userData")) {
      return <Redirect to={"/home"} />;
    }

    return (
      <div className="row" id="Body">
        <div className="medium-5 columns left">
          <h4>Login</h4>
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
            className="button success"
            value="Login"
            onClick={this.login}
          />
          <a href="/signup">Registration</a>
        </div>
      </div>
    );
  }
}

export default Login;
