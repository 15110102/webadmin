import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  CardImg
} from "reactstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import Modal from "react-modal";
class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        followers: [],
        posts: [],
        likes: []
      },
      fielldShow: [
        "username",
        "fullName",
        "email",
        "createdAt",
        "updatedAt",
        "isOnline"
      ],
      isActive: false,
      fullName: "",
      email: "",
      userName: ""
    };
  }

  getUserDetail = async () => {
    let userId = this.props.match.params.id;
    const url = `http://localhost:4000/api/users?userId=${userId}`;
    let {
      data: { data }
    } = await axios.get(url);

    this.setState({ user: data[0] });
  };

  chartInfoUser = () => {
    const { user } = this.state;
    const data = [
      {
        name: user.fullName,
        likes: user.likes.length,
        posts: user.posts.length,
        followers: user.followers.length
      }
    ];
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="likes" fill="#8884d8" />
        <Bar dataKey="posts" fill="#82ca9d" />
        <Bar dataKey="followers" fill="#ff2626" />
      </BarChart>
    );
  };

  componentDidMount() {
    this.getUserDetail();
  }
  componentWillMount() {
    Modal.setAppElement("body");
  }
  toggleModal = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };
  handleSubmit = async event => {
    event.preventDefault();
    const {user} = this.state;
    const userEdit = {
      fullName: this.state.fullName,
      email: this.state.email,
      username: this.state.userName
    };
    await axios.put(`http://localhost:4000/api/user/${user._id}`, { userEdit })
  };

  onClickMe() {
    alert("Success");
  }
  render() {
    let { user, fielldShow } = this.state;
    let userDetails = user
      ? Object.keys(user).reduce((total, curr) => {
          if (fielldShow.find(item => item === curr)) {
            total = Object.assign(total, { [curr]: user[curr] });
          }
          return total;
        }, {})
      : {};
    userDetails = Object.entries(userDetails);

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong>
                  <i className="icon-info pr-1"></i>User id:{" "}
                  {this.props.match.params.id}
                </strong>
              </CardHeader>
              <CardBody>
                <Table responsive striped hover>
                  <tbody>
                    {userDetails.map(([key, value]) => {
                      return (
                        <tr key={key}>
                          <td>{`${key}:`}</td>
                          <td>
                            <strong>{value}</strong>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <button onClick={this.toggleModal}>edit</button>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6}>
            <div
              style={{ paddingRight: 200, paddingBottom: 20, paddingLeft: 50 }}
            >
              <CardImg src={user.image} height={250} />
            </div>
            {this.chartInfoUser()}
            <Modal
              isOpen={this.state.isActive}
              onRequestClose={this.toggleModal}
              style={{ left: 300, right: 300 }}
            >
              <button onClick={this.toggleModal}>EXIT</button>
              <form onSubmit={this.handleSubmit}>
                <span className="formtext">EDIT USER</span>
                <div style={{ marginBottom: 10 }}>
                  <input
                    type="text"
                    style={{ width: 300, height: 50 }}
                    value={this.state.fullName}
                    onChange={event =>
                      this.setState({ fullName: event.target.value })
                    }
                    placeholder="New full name"
                    required
                  />
                </div>
                <div style={{ marginBottom: 10 }}>
                  <input
                    type="text"
                    style={{ width: 300, height: 50 }}
                    value={this.state.email}
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                    placeholder="New email"
                    required
                  />
                </div>
                <div style={{ marginBottom: 10 }}>
                  <input
                    type="text"
                    style={{ width: 300, height: 50 }}
                    value={this.state.userName}
                    onChange={event =>
                      this.setState({ userName: event.target.value })
                    }
                    placeholder="New user name"
                    required
                  />
                </div>
                <button onClick={this.onClickMe}>DONE</button>
              </form>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

export default User;
