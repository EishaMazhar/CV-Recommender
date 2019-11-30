import React, { Component } from "react";
import {
  Form,
  Icon,
  Card,
  Input,
  Button,
  PageHeader,
  Select,
  message
} from "antd";
import { Link } from "react-router-dom";
import api_services from "../Services/api.services";
message.config({
  top: 100,
  duration: 4,
  maxCount: 3
});

class Signup extends Component {
  constructor(props) {
    super(props);
    this.api = new api_services();
  }
  state = {
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    age: null,
    phone: "",
    type: "",
    password: "",
    password2: "",
    validatep2: true
  };

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.history.push("/welcome");
    }
  }
  setToken = idToken => {
    localStorage.setItem("token", idToken);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (this.state.validatep2) {
          const obj = {
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            gender: values.gender,
            age: values.age,
            phone: values.prefix + values.phone,
            type: values.type,
            password: values.password
          };
          console.log("this is being sent at backend", obj);
          this.api
            .signupUser(obj)
            .then(val => {
              message.success("Account Registered");
              this.setState({
                firstname: "",
                lastname: "",
                email: "",
                gender: "",
                age: null,
                phone: "",
                type: "",
                password: "",
                password2: "",
                validatep2: true
              });
              this.props.history.push("/");
            })
            .catch(err => console.log(err));
        }
      }
    });
  };

  onFormChange = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };
  onDDGenFormChange = event => {
    // console.log(event.target.name);
    this.setState({ gender: event });
  };
  onDDTypeFormChange = event => {
    this.setState({ type: event });
  };
  onPassword2Change = event => {
    this.setState({ [event.target.name]: event.target.value });
    if (this.state.password !== event.target.value) {
      this.setState({ validatep2: false });
    } else {
      this.setState({ validatep2: true });
    }
  };
  render() {
    console.log("this is state", this.state);
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "92"
    })(
      <Select style={{ width: 70 }}>
        <Option value="92">+92</Option>
      </Select>
    );

    return (
      <div>
        <PageHeader className="Appheader">
          <h1>CURRICULUM VITAE RECOMMENDATION SYSTEM</h1>
        </PageHeader>
        <Card
          title="Sign Up"
          // extra={<a href="#">More</a>}
          style={{
            width: "45%",
            margin: "50px auto",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          }}
        >
          <Form
            onSubmit={this.handleSubmit}
            className="Signup-form"
            layout="vertical"
            style={{
              width: "100%",
              margin: "0 auto",
              height: "auto"
            }}
          >
            <div className="formItems">
              <Form.Item style={{ width: "48%" }}>
                {getFieldDecorator("firstname", {
                  rules: [
                    { required: true, message: "Please input your First Name!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="First Name"
                    name="firstname"
                    setfieldsvalue={this.state.firstname}
                    onChange={this.onFormChange}
                  />
                )}
              </Form.Item>
              <Form.Item style={{ width: "48%" }}>
                {getFieldDecorator("lastname", {
                  rules: [
                    { required: true, message: "Please input your Last Name!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Last Name"
                    name="lastname"
                    setfieldsvalue={this.state.lastname}
                    onChange={this.onFormChange}
                  />
                )}
              </Form.Item>
            </div>

            <div className="formItems">
              {/* <Form.Item style={{ width: "48%" }}>
                {getFieldDecorator("username", {
                  rules: [
                    { required: true, message: "Please input your User Name!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="User Name"
                    name="username"
                    setfieldsvalue={this.state.username}
                    onChange={this.onFormChange}
                  />
                )}
              </Form.Item> */}
              <Form.Item style={{ width: "48%" }}>
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your phone number!"
                    }
                  ]
                })(
                  <Input
                    placeholder="3332222222"
                    maxLength={10}
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                    name="phone"
                    setfieldsvalue={this.state.phone}
                    onChange={this.onFormChange}
                  />
                )}
              </Form.Item>

              <Form.Item style={{ width: "48%" }}>
                {getFieldDecorator("age", {
                  rules: [{ required: true, message: "Please input your Age!" }]
                })(
                  <Input
                    type="number"
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    min={18}
                    max={70}
                    placeholder="Age"
                    name="age"
                    setfieldsvalue={this.state.age}
                    onChange={this.onFormChange}
                  />
                )}
              </Form.Item>
            </div>
            {/* //masla: type,gender,phone set nhi horaha */}
            <div className="formItems">
              <Form.Item style={{ width: "48%" }}>
                {getFieldDecorator("type", {
                  rules: [
                    { required: true, message: "Please select your type!" }
                  ]
                })(
                  <Select
                    placeholder="Type"
                    name="type"
                    setfieldsvalue={this.state.type}
                    onChange={this.onDDTypeFormChange}
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                  >
                    <Option value="jobApplicant">Job Applicant</Option>
                    <Option value="Recruiter">Recruiter</Option>
                  </Select>
                )}
              </Form.Item>
              {/* <Form.Item label="Gender" style={{ width: "45%" }}></Form.Item> */}
              <Form.Item style={{ width: "48%" }}>
                {getFieldDecorator("gender", {
                  rules: [
                    { required: true, message: "Please select your gender!" }
                  ]
                })(
                  <Select
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Gender"
                    name="gender"
                    setfieldsvalue={this.state.gender}
                    onChange={this.onDDGenFormChange}
                  >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                  </Select>
                )}
              </Form.Item>
            </div>

            <Form.Item className="formItems">
              {getFieldDecorator("email", {
                rules: [
                  { required: true, message: "Please input your E-mail!" }
                ]
              })(
                <Input
                  type="email"
                  prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="E-mail"
                  name="email"
                  setfieldsvalue={this.state.email}
                  onChange={this.onFormChange}
                />
              )}
            </Form.Item>

            <div className="formItems">
              <Form.Item style={{ width: "48%" }}>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                    name="password"
                    setfieldsvalue={this.state.password}
                    onChange={this.onFormChange}
                  />
                )}
              </Form.Item>
              <Form.Item
                style={{ width: "48%" }}
                validateStatus={this.state.validatep2 ? "" : "error"}
              >
                {getFieldDecorator("password2", {
                  rules: [
                    {
                      required: true,
                      message: "Please confirm your Password!"
                    },
                    {
                      validator: this.state.validatep2
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    setfieldsvalue={this.state.password2}
                    onChange={this.onPassword2Change}
                  />
                )}
              </Form.Item>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onSubmit={this.handleSubmit}
              >
                Signup
              </Button>
              Or <Link to="">Already registered?</Link>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(Signup);
export default WrappedNormalLoginForm;
