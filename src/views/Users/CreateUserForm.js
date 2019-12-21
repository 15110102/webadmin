import "./CreateUserForm.css";
import React from "react";
import axios from "axios";
export default class FromCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      userName: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const user = {
      id: "",
      fullName: this.state.fullName,
      email: this.state.email,
      username: this.state.userName,
      password: this.state.password
    };
    await axios.post(`http://localhost:4000/api/user`, { user })
  };

  onClickMe() {
    alert('Success');
}

  render() {
    return (
      <form className="info-user" onSubmit={this.handleSubmit}>
        <span className="formtext">Tạo tài khoản</span>
        <div style={{ marginBottom: 10 }}>
          <input
            type="text"
            style = {{width: 300, height: 50}}
            value={this.state.fullName}
            onChange={event => this.setState({ fullName: event.target.value })}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <input
            type="text"
            style = {{width: 300, height: 50}}
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
            placeholder="Enter your email"
            required
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <input
            type="text"
            style = {{width: 300, height: 50}}
            value={this.state.userName}
            onChange={event => this.setState({ userName: event.target.value })}
            placeholder="Enter your user name"
            required
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <input
            type="password"
            style = {{width: 300, height: 50}}
            value={this.state.password}
            onChange={event => this.setState({ password: event.target.value })}
            placeholder="Enter your password"
            required
          />
        </div>
        <button onClick = {this.onClickMe}>Đăng kí</button>
      </form>
    );
  }
}
