import React, { Component } from "react";
import { Button, Modal, Options, message } from "antd";
// import UserModal from "./Modal";
import api_services from "../../Services/api.services";
import jwt_decode from "jwt-decode";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

class ModalButton extends Component {
  constructor(props) {
    super(props);
    this.api = new api_services();
  }
  state = {
    type: this.props.type,
    visible: false,
    loading: false,
    file: null,
    isError: false,
    profile: ""
  };
  getmytype = () => {
    this.setState({ type: this.props.type });
    console.log("component did mount props", this.props.type);
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  showRecruiterPage = () => {
    console.log(this.props.history);
    this.props.history.push("/recruiter");
  };
  handleOk = () => {
    this.setState({ loading: true });
    if (!this.state.isError) {
      setTimeout(() => {
        this.setState({ loading: false, visible: false });
      }, 300);
    } else {
      message.error("Not able to submit");
    }
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  HandleFile = e => {
    // console.log("file event", e);
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    let email = decoded.identity.email;

    let formData = new FormData();
    let file = e.target.files[0];
    console.log("file ===> ", file);
    formData.append("file", file);

    // let Reader = new FileReader();
    // Reader.readAsDataURL(files[0]);

    console.log("form data e.target.files[0]", formData);

    // Reader.onload = e => {

    //   e.preventDefault();

    //   const formData = { file: e.target.result };

    // console.log("e.target.file[0] => ", e.target.files[0]);

    this.api
      .postPDF(email, formData)
      .then(() => {
        message.success("file has been posted");
        this.setState({ isError: false, visible: false });
      })
      .catch(err => {
        message.error("file not added");
        this.setState({ isError: true });
      });
    // };
  };
  render() {
    const { visible, loading } = this.state;
    console.log("modal button props received", this.props.type);
    console.log("modal button state", this.state);
    if (!this.state.type) return <div>{this.getmytype()}</div>;
    if (this.state.type === "Recruiter")
      return (
        <div>
          <Button
            type="primary"
            size="large"
            // onClick={() => this.props.history.push("/recruiter")}
            onClick={() => this.showRecruiterPage()}
          >
            Get Recommendation
          </Button>
        </div>
      );
    else if (this.state.type === "jobApplicant")
      return (
        <div>
          <Button type="primary" size="large" onClick={this.showModal}>
            Post CV
          </Button>
          <Modal
            visible={visible}
            title="Request Job"
            // onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                return
              </Button>
              // <Button
              //   key="submit"
              //   type="primary"
              //   loading={loading}
              //   onClick={this.handleOk}>
              //   Submit
              // </Button>
            ]}
          >
            <p>
              <input
                type="file"
                name="file"
                onChange={e => this.HandleFile(e)}
              />
            </p>
          </Modal>
          {/* <UserModal type={this.state.type} visible={this.state.visible} /> */}
        </div>
      );
  }
}

export default withRouter(ModalButton);
