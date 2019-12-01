import React, { Component } from "react";
import { Button, Modal, Options, message } from "antd";
// import UserModal from "./Modal";
import api_services from "../../Services/api.services";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

class ModalButton extends Component {
  constructor(props) {
    super(props);
    this.api = new api_services();
  }
  state = {
    type: this.props.Usertype,
    visible: false,
    loading: false,
    file: null,
    isError: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };
  showRecruiterPage = () => {
    // return <Redirect to="/recruiter" />;
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
    let files = e.target.files;
    let Reader = new FileReader();
    Reader.readAsDataURL(files[0]);

    console.log(files);

    Reader.onload = e => {
      e.preventDefault();
      const token = localStorage.getItem("token");
      // console.log("file data", e.target.result);
      // this.setState({ file: e.target.result });
      const formData = { file: e.target.result };
      this.api
        .postPDF(token, formData)
        .then(() => {
          message.success("file has been posted");
          this.setState({ isError: false });
        })
        .catch(err => {
          message.error("file not added");
          this.setState({ isError: true });
        });
    };
  };
  render() {
    const { visible, loading } = this.state;
    console.log(this.props);
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

          {/* //Recruiter Modal */}

          {/* <Modal
            visible={visible}
            title="Post Job"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Return
              </Button>,
              <Button
                key="submit"
                type="primary"
                loading={loading}
                onClick={this.handleOk}
              >
                Submit
              </Button>
            ]}
          >
            <p>Put content here</p>
          </Modal> */}

          {/* <UserModal UserType={this.state.type} visible={this.state.visible} /> */}
        </div>
      );
    //for non-recruiter/applicant
    else
      return (
        <div>
          <Button type="primary" size="large" onClick={this.showModal}>
            Post CV
          </Button>
          <Modal
            visible={visible}
            title="Request Job"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Return
              </Button>,
              <Button
                key="submit"
                type="primary"
                loading={loading}
                onClick={this.handleOk}
              >
                Submit
              </Button>
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
          {/* <UserModal UserType={this.state.type} visible={this.state.visible} /> */}
        </div>
      );
  }
}

export default withRouter(ModalButton);
