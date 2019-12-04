import React, { Component } from "react";
import api_services from "../../Services/api.services";
import { Input, Button, Card, PageHeader, message } from "antd";
message.config({
  top: 100,
  duration: 5,
  maxCount: 5
});

class ShowRecommendations extends Component {
  constructor(props) {
    super(props);
    this.api = new api_services();
  }
  state = {
    loading: true,
    profile: "",
    list: []
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    console.log("in recommendations page", this.props.location.state);
    this.api
      .getrecommendations(this.props.location.state)
      .then(val => {
        this.setState({ list: val.data, isLoading: false });
        console.log("recommendation response", val);
      })
      .catch(err => console.log(err));
    if (!token) {
      this.props.history.push("/login");
    }

    // this.api
    //   .getItems(token)
    //   .then(val => this.setState({ list: val.data }))
    //   .then(message.success("You are all set"))
    //   .catch(err => message.error("Error while fetching Items"));
  }
  removeToken = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
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
            <p>{i.email}</p>
            <p>Score: {i.score}</p>
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
