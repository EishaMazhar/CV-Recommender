import React, { Component } from "react";
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

class ShowRecommendations extends Component {
  state = {
    list: [
      { name: "Eisha", empNo: 3 },
      { name: "Talha", empNo: 5 },
      { name: "Taha", empNo: 2 },
      { name: "Unaiz", empNo: 2 }
    ]
  };

  RecommendationsList = () =>
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
            <p>k17xxxx@nu.edu.pk</p>
            <p>Show pdf here</p>
            {/* <Button
              type="primary"
              onClick={() => this.recommend(i._id, i.name)}
              style={{ margin: "0 5px 0 0px" }}
            >
              Recommendations
            </Button>
            <Button type="danger" onClick={() => this.onDelete(i._id)}>
              Delete
            </Button> */}
          </Card.Grid>
        </div>
      );
    });

  render() {
    console.log(this.props.location.state);
    return (
      <div>
        <div>
          <PageHeader className="Appheader">
            <h1>CURRICULUM VITAE RECOMMENDER</h1>
            <h3>Recommendations for {this.props.location.state.name}</h3>
            <div>
              {" "}
              <h2
                style={{
                  float: "left",
                  position: "absolute",
                  top: "30%"
                }}
              ></h2>
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
        <Card>{this.RecommendationsList()}</Card>
      </div>
    );
  }
}

export default ShowRecommendations;
