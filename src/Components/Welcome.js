import React, { Component } from "react";
import Loader from "react-loader-spinner";
import TypeButton from "./Button";

import api_services from "../Services/api.services";
import {
  Input,
  Button,
  Descriptions,
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
    isLoading: false,
    type: "recruiter"
  };

  componentDidMount() {
    const token = localStorage.getItem("token");

    // this.setState({ isLoading: false });
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
    // const { getFieldDecorator } = this.props.form;
    // const { Option } = Select;

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
          <div>
            <Card
              title="User Info"
              className="UserInfo"
              style={{
                width: "65%",
                margin: "120px auto 0 auto",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
              }}
            >
              <div>
                <Descriptions>
                  <Descriptions.Item label="First Name">
                    Eisha
                  </Descriptions.Item>
                  <Descriptions.Item label="Last Name">
                    Tir Raazia
                  </Descriptions.Item>
                  <Descriptions.Item label="Telephone">
                    033333333333
                  </Descriptions.Item>
                  <Descriptions.Item label="Gender">Female</Descriptions.Item>
                  <Descriptions.Item label="Email">
                    k173730@nu.edu.pk
                  </Descriptions.Item>
                  <Descriptions.Item label="Age">20</Descriptions.Item>
                  <Descriptions.Item label="User Type">
                    Recruiter
                  </Descriptions.Item>
                </Descriptions>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <TypeButton Usertype={this.state.type} />
              </div>
            </Card>
          </div>
        </div>
      );
  }
}

export default Welcome;
