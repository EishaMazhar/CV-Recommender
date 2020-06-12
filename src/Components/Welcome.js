import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";
import ModalButton from "./Common/ModalButton";
import jwt_decode from "jwt-decode";
import api_services from "../Services/api.services";
import {
  // Input,
  Button,
  Descriptions,
  // Select,
  // DatePicker,
  Card,
  Divider,
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
    type: "",
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    age: "",
    phone: "",
    profile: ""
  };

  // successAdd = () => {
  //   this.setState({ isAdded: false });
  //   message.success("Task Added");
  // };

  componentDidMount() {
    const token = localStorage.getItem("token");

    const decoded = jwt_decode(token);
    const obj = {
      firstname: decoded.identity.firstname,
      lastname: decoded.identity.lastname,
      email: decoded.identity.email,
      type: decoded.identity.usertype,
      gender: decoded.identity.gender,
      age: decoded.identity.age,
      phone: decoded.identity.phone
    };
    this.setState({
      firstname: decoded.identity.firstname,
      lastname: decoded.identity.lastname,
      email: decoded.identity.email,
      type: decoded.identity.usertype,
      gender: decoded.identity.gender,
      age: decoded.identity.age,
      phone: decoded.identity.phone,
      profile: obj
    });
    if (!token) {
      this.props.history.push("/");
    }
  }
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
    } else {
      console.log("my states in welcome", this.state);
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
                    {this.state.firstname}
                  </Descriptions.Item>
                  <Descriptions.Item label="Last Name">
                    {this.state.lastname}
                  </Descriptions.Item>
                  <Descriptions.Item label="Telephone">
                    {this.state.phone}
                  </Descriptions.Item>
                  <Descriptions.Item label="Gender">
                    {this.state.gender}
                  </Descriptions.Item>
                  <Descriptions.Item label="Email">
                    {this.state.email}
                  </Descriptions.Item>
                  <Descriptions.Item label="Age">
                    {this.state.age}
                  </Descriptions.Item>
                  <Descriptions.Item label="User Type">
                    {this.state.type}
                  </Descriptions.Item>
                </Descriptions>
              </div>

              <Divider />

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <ModalButton
                  type={this.state.type}
                  profile={this.state.profile}
                />
              </div>
            </Card>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Welcome);
