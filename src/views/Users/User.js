import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData'

class User extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: null     
    }
  }

  getUserDetail = async () => {
    let userId = this.props.match.params.id;
    const url = `http://localhost:4000/api/users?userId=${userId}`;
    let {data: {data}} = await axios.get(url);    
    
    this.setState({ user: data[0] })
  }

  componentDidMount() {
    this.getUserDetail();
  }

  render() {
    let user = this.state.user;
    
    const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]
    console.log("userDetails: ", userDetails);
    // const filter = [userDetails[7], userDetails[8], userDetails[9]]
    // console.log("filter: ", filter);
    
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>User id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      {
                        userDetails.map(([key, value]) => {
                          return (
                            <tr key={key}>
                              <td>{`${key}:`}</td>
                              <td><strong>{value}</strong></td>
                            </tr>
                          )
                        })
                      }
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

export default User;
