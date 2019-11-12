import React, { Component } from "react";
import Loader from "react-loader-spinner";
import api_services from "../Services/api.services";
import {
  Input,
  Button,
  Select,
  DatePicker,
  Card,
  PageHeader,
  message
} from "antd";
message.config({
  top: 100,
  duration: 5,
  maxCount: 3
});

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.api = new api_services();
  }
  state = {
    isLoading: false
  };
  componentDidMount() {
    const token = localStorage.getItem("token");

    // this.api
    //   .getProfile(token)
    //   .then(val => this.setState({ profile: val.data, isLoading: false }))
    //   .catch(err => console.log(err));

    // if (!token) {
    //   this.props.history.push("/");
    // }
  }
  // successAdd = () => {
  //   this.setState({ isAdded: false });
  //   message.success("Task Added");
  // };
  removeToken = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <Loader type="Circles" color="grey" height="100vh" width={100} />
        </div>
      );
    } else
      return (
        <div>
          {/* {this.state.isAdded ? this.successAdd() : ""}
          {this.state.itemFound ? this.successSearch() : ""} */}{" "}
          <div>
            <PageHeader className="Appheader">
              <h1>CURRICULUM VITAE RECOMMENDER</h1>
              <div>
                {" "}
                <h2
                  style={{
                    float: "left",
                    position: "absolute",
                    top: "30%"
                  }}
                >
                  {/* Welcome, {this.state.profile.userName} */}
                </h2>
                <Button
                  type="danger"
                  style={{
                    float: "right",
                    position: "absolute",
                    top: "30%",
                    right: "10%"
                  }}
                  onClick={this.removeToken}
                >
                  {" "}
                  Logout
                </Button>
              </div>
            </PageHeader>
          </div>
          <br />
        </div>
      );
  }
}

export default Welcome;
