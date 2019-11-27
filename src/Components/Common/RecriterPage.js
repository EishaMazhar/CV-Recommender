import React, { Component } from "react";
import AddJob from "./AddJob";
import {
  Input,
  Button,
  Descriptions,
  Select,
  DatePicker,
  Card,
  Form,
  Icon,
  Divider,
  PageHeader,
  message
} from "antd";
message.config({
  top: 100,
  duration: 5,
  maxCount: 3
});

class RecruiterPage extends Component {
  constructor(props) {
    super(props);
    // this.api = new api_services();
  }
  state = {
    // jobTitle: ""
  };
  render() {
    // console.log(this.props.form.getFieldDecorator);
    // const { getFieldDecorator } = this.props.form;
    // const { Option } = Select;

    return (
      <div>
        <div>
          <PageHeader className="Appheader">
            <h1>CURRICULUM VITAE RECOMMENDER</h1>
            <h3>Recruiter's Page</h3>
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
            title="Add A Job"
            style={{ width: "75%", margin: "10px auto 0 auto" }}
          >
            <AddJob />
          </Card>
          <Card
            title="Recommendations"
            style={{
              width: "95%",
              margin: "10px auto 0 auto",
              padding: "5px 0 0 5px"
            }}
          >
            No recommendations yet
          </Card>
        </div>
      </div>
    );
  }
}

export default RecruiterPage;
