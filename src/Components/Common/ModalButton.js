import React, { Component } from "react";
import { Button, Modal, Options } from "antd";
// import UserModal from "./Modal";

class ModalButton extends Component {
  state = {
    type: this.props.Usertype,
    visible: false,
    loading: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
    console.log("button visible state  => ", this.state.visible);
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  render() {
    const { visible, loading } = this.state;

    if (this.state.type === "recruiter")
      return (
        <div>
          <Button type="primary" size="large" onClick={this.showModal}>
            Get Recommendation
          </Button>
          <Modal
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
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
          {/* <UserModal UserType={this.state.type} visible={this.state.visible} /> */}
        </div>
      );
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
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
          {/* <UserModal UserType={this.state.type} visible={this.state.visible} /> */}
        </div>
      );
  }
}

export default ModalButton;
