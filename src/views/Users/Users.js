import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';
import usersData from './UsersData'

function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.idUser}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.postTotal}</td>
      <td>{user.likeTotal}</td>
      {/* <img src = {user.image} width = "100" height = "100" /> */}
      {/* <td>{user.email}</td> */}
    </tr>
  )
}

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: [],
      testData: [],
    }
  }

  getDataUser = async () => {
    const url = 'http://localhost:4000/api';
    const users  = [...this.state.dataUser];
    
    let { data: { data } } = await axios.get(`${url}/users`);
    debugger
    // this.setState({ dataUser: users })
  }

  async componentDidMount() {
    let { data: { data } } = await axios.get('http://localhost:4000/api/users');
    const user = await data.map((user, index) => {
      console.log("userrrrrr: ", user);
      return {
        id: index + 1,
        idUser: user._id,
        name: user.username,
        postTotal: user.posts.length,
        likeTotal: user.likes.length,
      }
    })
    console.log("dataaaaa: ", user);
    this.setState({
      testData: user
    })
  }

  render() {
    const { testData } = this.state;
    console.log("testData: ", testData);
    
    const userList = usersData.filter((user) => user.id < 10)
    console.log("userList: ", userList);


    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">Post Total</th>
                      <th scope="col">Like Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {testData.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;
