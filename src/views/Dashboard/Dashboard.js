import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import {
  ButtonDropdown,
  ButtonGroup,
  Card,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
// import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
import { AppSwitch } from "@coreui/react";

// const brandPrimary = getStyle("--primary");
// const brandSuccess = getStyle("--success");
// const brandInfo = getStyle("--info");
// const brandDanger = getStyle("--danger");

// // Card Chart 1
// const cardChartData1 = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "My First dataset",
//       backgroundColor: brandPrimary,
//       borderColor: "rgba(255,255,255,.55)",
//       data: [65, 59, 84, 84, 51, 55, 40]
//     }
//   ]
// };

// // Card Chart 2
// const cardChartData2 = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "My First dataset",
//       backgroundColor: brandInfo,
//       borderColor: "rgba(255,255,255,.55)",
//       data: [1, 18, 9, 17, 34, 22, 11]
//     }
//   ]
// };

// const cardChartOpts2 = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips
//   },
//   maintainAspectRatio: false,
//   legend: {
//     display: false
//   },
//   scales: {
//     xAxes: [
//       {
//         gridLines: {
//           color: "transparent",
//           zeroLineColor: "transparent"
//         },
//         ticks: {
//           fontSize: 2,
//           fontColor: "transparent"
//         }
//       }
//     ],
//     yAxes: [
//       {
//         display: false,
//         ticks: {
//           display: false,
//           min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
//           max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5
//         }
//       }
//     ]
//   },
//   elements: {
//     line: {
//       tension: 0.00001,
//       borderWidth: 1
//     },
//     point: {
//       radius: 4,
//       hitRadius: 10,
//       hoverRadius: 4
//     }
//   }
// };

// // Card Chart 3
// const cardChartData3 = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "My First dataset",
//       backgroundColor: "rgba(255,255,255,.2)",
//       borderColor: "rgba(255,255,255,.55)",
//       data: [78, 81, 80, 45, 34, 12, 40]
//     }
//   ]
// };

// const cardChartOpts3 = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips
//   },
//   maintainAspectRatio: false,
//   legend: {
//     display: false
//   },
//   scales: {
//     xAxes: [
//       {
//         display: false
//       }
//     ],
//     yAxes: [
//       {
//         display: false
//       }
//     ]
//   },
//   elements: {
//     line: {
//       borderWidth: 2
//     },
//     point: {
//       radius: 0,
//       hitRadius: 10,
//       hoverRadius: 4
//     }
//   }
// };

// Card Chart 4
const cardChartData4 = {
  labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.3)",
      borderColor: "transparent",
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
    }
  ]
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  }
};

// // Social Box Chart
// const socialBoxData = [
//   { data: [65, 59, 84, 84, 51, 55, 40], label: "facebook" },
//   { data: [1, 13, 9, 17, 34, 41, 38], label: "twitter" },
//   { data: [78, 81, 80, 45, 34, 12, 40], label: "linkedin" },
//   { data: [35, 23, 56, 22, 97, 23, 64], label: "google" }
// ];

// const makeSocialBoxData = dataSetNo => {
//   const dataset = socialBoxData[dataSetNo];
//   const data = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         backgroundColor: "rgba(255,255,255,.1)",
//         borderColor: "rgba(255,255,255,.55)",
//         pointHoverBackgroundColor: "#fff",
//         borderWidth: 2,
//         data: dataset.data,
//         label: dataset.label
//       }
//     ]
//   };
//   return () => data;
// };

// const socialChartOpts = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips
//   },
//   responsive: true,
//   maintainAspectRatio: false,
//   legend: {
//     display: false
//   },
//   scales: {
//     xAxes: [
//       {
//         display: false
//       }
//     ],
//     yAxes: [
//       {
//         display: false
//       }
//     ]
//   },
//   elements: {
//     point: {
//       radius: 0,
//       hitRadius: 10,
//       hoverRadius: 4,
//       hoverBorderWidth: 3
//     }
//   }
// };

// // sparkline charts
// const sparkLineChartData = [
//   {
//     data: [35, 23, 56, 22, 97, 23, 64],
//     label: "New Clients"
//   },
//   {
//     data: [65, 59, 84, 84, 51, 55, 40],
//     label: "Recurring Clients"
//   },
//   {
//     data: [35, 23, 56, 22, 97, 23, 64],
//     label: "Pageviews"
//   },
//   {
//     data: [65, 59, 84, 84, 51, 55, 40],
//     label: "Organic"
//   },
//   {
//     data: [78, 81, 80, 45, 34, 12, 40],
//     label: "CTR"
//   },
//   {
//     data: [1, 13, 9, 17, 34, 41, 38],
//     label: "Bounce Rate"
//   }
// ];

// const makeSparkLineData = (dataSetNo, variant) => {
//   const dataset = sparkLineChartData[dataSetNo];
//   const data = {
//     labels: [
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//       "Sunday"
//     ],
//     datasets: [
//       {
//         backgroundColor: "transparent",
//         borderColor: variant ? variant : "#c2cfd6",
//         data: dataset.data,
//         label: dataset.label
//       }
//     ]
//   };
//   return () => data;
// };

// const sparklineChartOpts = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips
//   },
//   responsive: true,
//   maintainAspectRatio: true,
//   scales: {
//     xAxes: [
//       {
//         display: false
//       }
//     ],
//     yAxes: [
//       {
//         display: false
//       }
//     ]
//   },
//   elements: {
//     line: {
//       borderWidth: 2
//     },
//     point: {
//       radius: 0,
//       hitRadius: 10,
//       hoverRadius: 4,
//       hoverBorderWidth: 3
//     }
//   },
//   legend: {
//     display: false
//   }
// };

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

// const mainChart = {
//   labels: [
//     "Mo",
//     "Tu",
//     "We",
//     "Th",
//     "Fr",
//     "Sa",
//     "Su",
//     "Mo",
//     "Tu",
//     "We",
//     "Th",
//     "Fr",
//     "Sa",
//     "Su",
//     "Mo",
//     "Tu",
//     "We",
//     "Th",
//     "Fr",
//     "Sa",
//     "Su",
//     "Mo",
//     "Tu",
//     "We",
//     "Th",
//     "Fr",
//     "Sa",
//     "Su"
//   ],
//   datasets: [
//     {
//       label: "My First dataset",
//       backgroundColor: hexToRgba(brandInfo, 10),
//       borderColor: brandInfo,
//       pointHoverBackgroundColor: "#fff",
//       borderWidth: 2,
//       data: data1
//     },
//     {
//       label: "My Second dataset",
//       backgroundColor: "transparent",
//       borderColor: brandSuccess,
//       pointHoverBackgroundColor: "#fff",
//       borderWidth: 2,
//       data: data2
//     },
//     {
//       label: "My Third dataset",
//       backgroundColor: "transparent",
//       borderColor: brandDanger,
//       pointHoverBackgroundColor: "#fff",
//       borderWidth: 1,
//       borderDash: [8, 5],
//       data: data3
//     }
//   ]
// };

// const mainChartOpts = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips,
//     intersect: true,
//     mode: "index",
//     position: "nearest",
//     callbacks: {
//       labelColor: function(tooltipItem, chart) {
//         return {
//           backgroundColor:
//             chart.data.datasets[tooltipItem.datasetIndex].borderColor
//         };
//       }
//     }
//   },
//   maintainAspectRatio: false,
//   legend: {
//     display: false
//   },
//   scales: {
//     xAxes: [
//       {
//         gridLines: {
//           drawOnChartArea: false
//         }
//       }
//     ],
//     yAxes: [
//       {
//         ticks: {
//           beginAtZero: true,
//           maxTicksLimit: 5,
//           stepSize: Math.ceil(250 / 5),
//           max: 250
//         }
//       }
//     ]
//   },
//   elements: {
//     point: {
//       radius: 0,
//       hitRadius: 10,
//       hoverRadius: 4,
//       hoverBorderWidth: 3
//     }
//   }
// };

const url = "http://localhost:4000/api";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      users: [],
      usersCount: 0,
      page: 0
    };
  }

  getDataUser = async number => {

    let {
      data: { data, count }
    } = await axios.get(`${url}/users?offset=${number}`);
    let _page = (count % 10 >= 5)
      ? Math.floor(count / 10) + 1 : Math.floor(count / 10) 

    this.setState({ users: data, usersCount: count, page: _page });
  };

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected
    });
  }

  onClickUserItem = (user) => {
    this.props.history.push(`/users/${user._id}`)
  }

  onChangeStatusUser = async user => {
    const { _id, isActive } = user
    await axios.post(`${url}/update-status-acount`, {
      userId: _id,
      status: !isActive
    })
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  componentDidMount = () => {
    this.getDataUser(1);
  };

  render() {
    const { users, usersCount, page } = this.state;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown
                    id="card4"
                    isOpen={this.state.card4}
                    toggle={() => {
                      this.setState({ card4: !this.state.card4 });
                    }}
                  >
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">{usersCount}</div>
                <div>Members</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
                <Bar
                  data={cardChartData4}
                  options={cardChartOpts4}
                  height={70}
                />
              </div>
            </Card>
          </Col>
        </Row>

        <Table
          hover
          responsive
          className="table-outline mb-0 d-none d-sm-table big-table"
        >
          <thead className="thead-light">
            <tr>
              <th className="text-center">
                <i className="icon-people"></i>
              </th>
              <th>Tên người dùng</th>
              <th>Trạng thái</th>
            </tr>
          </thead>

          <tbody>
            {users.map(item => {
              return (
                <tr key={item._id}>
                  <td className="text-center" onClick={evt => this.onClickUserItem(item)}>
                    <div className="avatar">
                      {item.image ? (
                        <img
                          src={item.image}
                          className="img-avatar"
                          alt="admin@bootstrapmaster.com"
                        />
                      ) : (
                        <img
                          src="/assets/img/default-avatar.png"
                          className="img-avatar"
                          alt=""
                        />
                      )}
                      <span className="avatar-status badge-success"></span>
                    </div>
                  </td>
                  <td onClick={evt => this.onClickUserItem(item)}>
                    <div>{item.fullName}</div>
                    <div className="small text-muted"></div>
                  </td>
                  <td className="text-center">
                    <AppSwitch
                      className={'float-left'}
                      variant={'pill'}
                      color={'success'}
                      size={'lg'}
                      checked={item.isActive}
                      label
                      onChange={() => this.onChangeStatusUser(item)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Pagination>
          {page && Array(page).fill(null).map((val, index) => (
            <PaginationItem key={index}>
              <PaginationLink onClick={() => this.getDataUser(index + 1)}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </Pagination>
      </div>
    );
  }
}

export default Dashboard;
