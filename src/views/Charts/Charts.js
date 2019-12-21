import React, { Component } from "react";
import { Badge } from "reactstrap";
import axios from 'axios';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: [
        { name: "Jan", posts: 0 },
        { name: "Feb", posts: 0 },
        { name: "Mar", posts: 0 },
        { name: "Apr", posts: 0 },
        { name: "May", posts: 0 },
        { name: "Jun", posts: 0 },
        { name: "Junl", posts: 0 },
        { name: "Aug", posts: 0 },
        { name: "Sept", posts: 0 },
        { name: "Oct", posts: 0 },
        { name: "Nov", posts: 0 },
        { name: "Dec", posts: 0 }
      ],
      data: null,
      posts: null,
      users: [],
    };
  }

  getDataUser = async () => {
    const url = 'http://localhost:4000/api';
    const users  = [...this.state.dataUser];
    let { data: { data } } = await axios.get(`${url}/users`);

    data.forEach(user => {
      let nameMont = new Date(user.createdAt).toDateString().split(" ")[1];
      let _item = users.find(item => item.name === nameMont)
      if (_item) {
        _item.posts = user.posts.length
      }
    });

    this.setState({ dataUser: users })
  }

  render() {
    const { dataUser } = this.state;
    const data = [
      {
        name: "Jan", user: 0
      },
      {
        name: 'Feb', user: 0
      },
      {
        name: 'Mar', user: 0
      },
      {
        name: 'Apr', user: 0
      },
      {
        name: 'May', user: 0
      },
      {
        name: 'Jun', user: 0
      },
      {
        name: 'JunL', user: 0
      },
      {
        name: 'Aug', user: 0
      },
      {
        name: 'Sep', user: 0
      },
      {
        name: 'Oct', user: 0
      },
      {
        name: 'Nov', user: 5
      },
      {
        name: 'Dec', user: 21
      },
    ];
    this.getDataUser();
     
    return (
      <div className="animated fadeIn">
      <Badge color="primary"style = {{fontSize: 16}}>Post Statistic 2019</Badge>
        <ResponsiveContainer className="chart" height={300}>   
          <LineChart
            width={600}
            height={300}
            data={dataUser}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="posts" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>


        <Badge color="primary"style = {{fontSize: 16}}>User Statistic 2019</Badge>
        <ResponsiveContainer className="chart" height={300}>   
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="user" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

      </div>
    );
  }
}

export default Charts;
