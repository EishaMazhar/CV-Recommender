import React, { Component } from "react";
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
  InputNumber,
  message
} from "antd";
message.config({
  top: 100,
  duration: 5,
  maxCount: 3
});

class AddJob extends Component {
  state = { jobTitle: "", EmpNo: 0, JD: "" };

  onNoChange = val => {
    console.log(val);
    this.setState({ EmpNo: val });
  };
  onFormChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        this.api
          .postJob(values)
          .then(val => {
            console.log(val);
            // this.props.history.push("/");
          })
          .catch(err => console.log(err));
      }
    });
  };
  render() {
    const { TextArea } = Input;
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    console.log(this.state);

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
              // value={number.value}
              // onChange={this.handleNumberChange}
              placeholder="No of Employees"
              name="EmpNo"
              // setfieldsvalue={this.state.EmpNo}
              // defaultValue={1}
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
