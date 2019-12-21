import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  _signin = async (evt) => {
    evt.preventDefault()
    let _data = {
      username: this.state.username,
      password: this.state.password
    }

    let { data } = await axios.post(`http://localhost:4000/api/login`, _data)
    if (data.isAuth) {
      localStorage.setItem('userAuth', JSON.stringify(_data))
      this.props.history.push('/dashboard')
    } else {
      alert(data.message);
    }
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <div>
                      <h1>Login VIVU server</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Username"
                          autoComplete="username"
                          onChange={evt => this.setState({ username: evt.target.value })}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          onChange={evt => this.setState({ password: evt.target.value })}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          {/* <Link to="/dashboard"> */}
                            <Button
                              color="primary"
                              className="px-4"
                              onClick={this._signin}
                            >
                              Login
                            </Button>
                          {/* </Link> */}
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">
                            
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
