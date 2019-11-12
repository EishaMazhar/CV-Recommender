import React, { Component } from "react";
import { Button } from "antd";

class TypeButton extends Component {
  state = { type: this.props.Usertype };
  render() {
    if (this.state.type === "recruiter")
      return (
        <div>
          <Button type="primary">Get Recommendation</Button>
        </div>
      );
    else
      return (
        <div>
          <Button type="primary">Post Details</Button>
        </div>
      );
  }
}

export default TypeButton;
