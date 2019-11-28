import React, { Component } from "react";
import AddJob from "./AddJob";
import api_services from "../../Services/api.services";
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
  maxCount: 5
});

class RecruiterPage extends Component {
  constructor(props) {
    super(props);
    this.api = new api_services();
  }
  state = {
    // jobTitle: ""
    list: [
      { name: "Software Engineer", empNo: 3 },
      { name: "Web Developer", empNo: 5 },
      { name: "Marketer", empNo: 2 }
    ]
  };
  onDelete = id => {
    const token = localStorage.getItem("token");
    this.api
      .deleteJob(id, token)
      .then(val => {
        this.setState({
          list: this.state.list.filter(item => item._id !== id)
        });
        message.success("Delete Successful");
      })
      // .then(message.success("Delete Successful"))
      .catch(err => message.error("Delete Unsuccessful"));
  };

  recommend = (Task_id, Tname) => {
    this.props.history.push({
      pathname: "/recommendations",
      state: { taskid: Task_id, name: Tname }
    });
  };

  getjobsList = () =>
    this.state.list.map((i, key) => {
      return (
        <div
          key={key}
          style={{
            background: "#ECECEC"
          }}
        >
          <Card.Grid
            title=""
            style={{
              backgroundColor: "white",
              display: "inline-block"
            }}
          >
            {/* <h3>{i.name}</h3>
          <p>{i.email}</p>
          <p>{i.priority}</p> */}
            <h3>{i.name}</h3>
            <p>No of employees: {i.empNo}</p>
            <Button
              type="primary"
              onClick={() => this.recommend(i._id, i.name)}
              style={{ margin: "0 5px 0 0px" }}
            >
              Recommendations
            </Button>
            <Button type="danger" onClick={() => this.onDelete(i._id)}>
              Delete
            </Button>
          </Card.Grid>
        </div>
      );
    });

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
            title="My jobs"
            style={{
              width: "95%",
              margin: "10px auto 0 auto",
              padding: "5px 0 0 5px"
            }}
          >
            <Card>{this.getjobsList()}</Card>
          </Card>
        </div>
      </div>
    );
  }
}

export default RecruiterPage;
