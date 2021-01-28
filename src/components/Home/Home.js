import React, { Component } from "react";
import Api from "../../Services/Services";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      userFeed: "",
      redirectToReferrer: false,
      name: "",
    };

    // this.getUserFeed = this
    //   .getUserFeed
    //   .bind(this);
    // this.feedUpdate = this.feedUpdate.bind(this);
    // this.onChange = this.onChange.bind(this);
    // this.deleteFeed = this.deleteFeed.bind(this);
    // this.deleteFeedAction = this.deleteFeedAction.bind(this);
    // this.convertTime = this.convertTime.bind(this);
    // this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      this.getUserFeed();
    } else {
      this.setState({ redirectToReferrer: true });
    }
  }

  getUserFeed() {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    console.log("data", data);
    // let postData = { user_id: data.userData.user_id, token: data.userData.token};

    Api.getData("getblogs").then((result) => {
      //   console.log("result", result.result);
      this.setState({ data: result.result });
      //   console.log(this.state);
    });
  }

  render() {
    let userFeed = this.state.data.map(function (feedData, index) {
      return (
        <div className="medium-12 columns" key={index}>
          <div className="people-you-might-know">
            <div className="row add-people-section">
              <div className="small-12 medium-2 columns add-friend">
                <div className="add-friend-action">
                  <b>{feedData.title}</b>
                  <b>{feedData.description}</b><br/>
                  <b>{feedData.image}</b><br/>
                  <b>{feedData.fName}</b><br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }, this);

    return <div>{userFeed}</div>;
  }
}

export default Home;
