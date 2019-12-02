import React, { Component } from "react";
import api_services from "../../Services/api.services";
import jwt_decode from "jwt-decode";
import { Input, Button, Select, Form, Icon, message, InputNumber } from "antd";
message.config({
  top: 100,
  duration: 5,
  maxCount: 3
});

class AddJob extends Component {
  constructor(props) {
    super(props);
    this.api = new api_services();
  }

  state = {
    jobTitle: "",
    EmpNo: "",
    JD: ""
  };
  onNoChange = val => {
    // console.log(val);
    this.setState({ EmpNo: val });
  };
  onFormChange = event => {
    // console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    console.log(token);
    const decoded = jwt_decode(token);
    let email = decoded.identity.email;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.api
          .postJob(values, email)
          .then(val => {
            this.props.InsertIntoList(val.data.result);
          })
          .catch(err => console.log(err));
      }
    });
  };
  render() {
    const { TextArea } = Input;
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    console.log("my add job states", this.states);
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator("jobTitle", {
            rules: [
              {
                required: true,
                message: "Please input job title!"
              }
            ]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Job Title"
              name="jobTitle"
              setfieldsvalue={this.state.jobTitle}
              onChange={this.onFormChange}
            />
          )}
        </Form.Item>
        <Form.Item style={{ width: "65" }}>
          {" "}
          {getFieldDecorator("empNo", {
            rules: [
              {
                required: true,
                message: "Please enter number of employees!"
              }
            ]
          })(
            <InputNumber
              min={1}
              max={50}
              placeholder="No of Employees"
              name="EmpNo"
              onChange={this.onNoChange}
            />
          )}
        </Form.Item>
        <Form.Item>
          {" "}
          {getFieldDecorator("JD", {
            rules: [
              {
                required: true,
                message: "Please enter job description!"
              }
            ]
          })(
            <TextArea
              placeholder="Type Job Description here"
              autoSize
              name="JD"
              setfieldsvalue={this.state.JD}
              onChange={this.onFormChange}
            />
          )}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onSubmit={this.handleSubmit}
            // disabled={hasErrors(getFieldsError())}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const WrappedHorizontalForm = Form.create({ name: "horizontal_login" })(AddJob);
export default WrappedHorizontalForm;
