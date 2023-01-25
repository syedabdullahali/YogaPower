import React, { useEffect, useState } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormSelect,
  CInputGroup,
  CProgress,
  CProgressBar,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartBar, CChartLine, CChartPie } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilUser,
  cilUserFemale,
  cilPeople,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user-info'))
  useEffect(() => {
    if (user == null) {
      navigate('/login')
    }
    else if (user.user.username == null || user.user.username == undefined) {
      alert('Incorrect Details')
      localStorage.clear()
    }
  }, [])

  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const [active, setActive] = useState('Today')

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    {
      title: 'Pageviews',
      value: '78.706 Views',
      percent: 60,
      color: 'warning',
    },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    {
      title: 'Bounce Rate',
      value: 'Average Rate',
      percent: 40.15,
      color: 'primary',
    },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CInputGroup style={{ width: '250px' }} className="left mb-2">
            <CFormSelect id="inputGroupSelect01" value={active}>
              <option onClick={() => setAction('Today')}>Today</option>
              <option onClick={() => setAction('Last 7 day')}>Last 7 day</option>
              <option value="2">1 Month</option>
              <option value='4'>Year</option>
              <option>Custom Date</option>
            </CFormSelect>

            <CButton type="button" color="primary" id="button-addon2">
              Go
            </CButton>
          </CInputGroup>
          <CRow>
            <CCol lg={3} sm={6}>
              <CCard className="mb-4">
                <CCardHeader>All Enquiries</CCardHeader>
                <CCardBody>
                  <CChartPie
                    data={{
                      labels: ['ENQUIRE', 'TRIALS', 'NEW', 'CONVERTED ', 'PROSPECT', 'COLD '],
                      datasets: [
                        {
                          data: [30, 50, 100, 60, 80],
                          backgroundColor: ['red', 'yellow', 'green', 'orange', 'blue'],
                          hoverBackgroundColor: [
                            '#E74C3C',
                            '#F4D03F',
                            '#2ECC71',
                            '#F8C471',
                            'skyblue',
                          ],
                        },
                      ],
                    }}
                  />
                </CCardBody>
              </CCard>
            </CCol>
            <CCol lg={3} sm={6}>
              <CCard className="mb-4">
                <CCardHeader>Total Sales</CCardHeader>
                <CCardBody>
                  <CChartPie
                    data={{
                      labels: [
                        'TOTAL SALES',
                        'PAYMENT RECEIVED',
                        'BALANCE PAYMENT',
                      ],
                      datasets: [
                        {
                          data: [300, 50, 100],
                          backgroundColor: ['darkblue', 'green', 'red'],
                          hoverBackgroundColor: [
                            'blue',
                            'lightgreen',
                            '#F1948A',
                          ],
                        },
                      ],
                    }}
                  />
                </CCardBody>
              </CCard>
            </CCol>
            <CCol lg={3} sm={6}>
              <CCard className="mb-4">
                <CCardHeader>Total Clients</CCardHeader>
                <CCardBody>
                  <CChartPie
                    data={{
                      labels: [
                        'ALL CLIENT',
                        'ACTIVE',
                        'NEW',
                        'RENEWAL',
                        'RENEWED',
                        'LEFT',
                      ],
                      datasets: [
                        {
                          data: [30, 40, 50, 100, 80, 50],
                          backgroundColor: ['red', 'pink', 'green', 'yellow', 'orange', 'blue',],
                          hoverBackgroundColor: [
                            '#FF6384',
                            'darkpick',
                            '#52BE80',
                            '#F7DC6F',
                            '#F8C471',
                            '#5499C7',
                          ],
                        },
                      ],
                    }}
                  />
                </CCardBody>
              </CCard>
            </CCol>
            <CCol lg={3} sm={6}>

              <CCard className="mb-4">
                <CCardHeader>Total Services</CCardHeader>
                <CCardBody>
                  <CChartPie
                    data={{
                      labels: ['YOGA', 'ZOOMBA', 'PT', 'TTC', 'DIET'],
                      datasets: [
                        {
                          data: [30, 50, 100, 80, 50],
                          backgroundColor: ['orange', 'red', 'yellow', 'blue', 'green',],
                          hoverBackgroundColor: [
                            '#F5B041',
                            '#EC7063',
                            '#F7DC6F',
                            '#5499C7',
                            '#52BE80',
                          ],
                        },
                      ],
                    }}
                  />
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      <WidgetsDropdown />
      <CRow>
        <CCol lg={6} sm={12}>
          <CCard className="mb-4">
            <CCardBody>
              <CRow>
                <CCol sm={5} className='mb-2'>
                  <h4 id="traffic" className="card-title mb-0">
                    Income
                  </h4>
                  <div className="small text-medium-emphasis">
                    January - July 2021
                  </div>
                </CCol>
                <CCol sm={7} className="d-none d-md-block">
                  <CButton color="primary" className="float-end">
                    <CIcon icon={cilCloudDownload} />
                  </CButton>
                  <CButtonGroup className="float-end me-3">
                    {['Day', 'Month', 'Year'].map((value) => (
                      <CButton
                        color="outline-secondary"
                        key={value}
                        className="mx-0"
                        active={value === 'Month'}
                      >
                        {value}
                      </CButton>
                    ))}
                  </CButtonGroup>
                </CCol>
              </CRow>
              <CChartBar
                data={{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'Sep',
                  ],
                  value: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'Sep',
                  ],
                  datasets: [
                    {
                      label: 'Monthly Sales',
                      backgroundColor: 'darkgreen',
                      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 100],
                    },
                  ],
                }}
                labels="months"
                value="value"
              />
              <CCard style={{ marginRight: '10px', marginLeft: '40px', backgroundColor: 'darkgreen', color: 'white', paddingLeft: '10px', paddingRight: '10px' }}>
                <div className='d-flex justify-content-between'>
                  <label>40</label>
                  <label>20</label>
                  <label>12</label>
                  <label>39</label>
                  <label>10</label>
                  <label>40</label>
                  <label>39</label>
                  <label>80</label>
                  <label>40</label>
                </div>
              </CCard>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg={6} sm={12}>
          <CCard className="mb-4">

            <CCardBody>

              <CRow >
                <CCol sm={4}>
                  <h4 id="traffic" className="card-title mb-0">
                    Attendance
                  </h4>
                  <div className="small text-medium-emphasis mb-3">
                    Weekly
                  </div>
                </CCol>
                <CCol sm={4}>
                  <div className="border-start border-start-4 border-start-info py-1 px-3">
                    <div className="text-medium-emphasis small">
                      Attented Clients
                    </div>
                    <div className="fs-5 fw-semibold">9,123</div>
                  </div>
                </CCol>
                <CCol sm={4}>
                  <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                    <div className="text-medium-emphasis small">
                      Total Active Clients
                    </div>
                    <div className="fs-5 fw-semibold">22,643</div>
                  </div>
                </CCol>
              </CRow>

              <CRow>
                <CCol xs={12} md={12} xl={12}>


                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-3" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">
                          {item.title}
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress >
                          <CProgressBar color="success" value={item.value1} />
                          <CProgressBar color="info" value={item.value2} />
                        </CProgress>
                      </div>
                      <div className="progress-group-prepend">
                        <span className="ms-auto fw-semibold">
                          {item.value1}
                          <span className="text-medium-emphasis small">
                            ({item.percent}%)
                          </span>
                        </span>/
                        <span className="ms-auto fw-semibold">
                          {item.value2}
                          <span className="text-medium-emphasis small">
                            ({item.percent}%)
                          </span>
                        </span>
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol lg={6} sm={12}>
          <CCard className="mb-2">
            <CCardBody>
              <CRow>
                <CCol sm={5}>
                  <h4 id="traffic" className="card-title mb-0">
                    Traffic
                  </h4>
                  <div className="small text-medium-emphasis">
                    January - July 2021
                  </div>
                </CCol>
                <CCol sm={7} className="d-none d-md-block">
                  <CButton color="primary" className="float-end">
                    <CIcon icon={cilCloudDownload} />
                  </CButton>
                  <CButtonGroup className="float-end me-3">
                    {['Day', 'Month', 'Year'].map((value) => (
                      <CButton
                        color="outline-secondary"
                        key={value}
                        className="mx-0"
                        active={value === 'Month'}
                      >
                        {value}
                      </CButton>
                    ))}
                  </CButtonGroup>
                </CCol>
              </CRow>
              <CChartLine
                style={{ height: '270px', marginTop: '20px' }}
                data={{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                  ],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: hexToRgba(getStyle('--cui-success'), 50),
                      borderColor: getStyle('--cui-info'),
                      pointHoverBackgroundColor: getStyle('--cui-info'),
                      borderWidth: 2,
                      data: [
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                      ],
                      fill: true,
                    },
                    {
                      label: 'My Second dataset',
                      backgroundColor: 'transparent',
                      borderColor: getStyle('--cui-red'),
                      pointHoverBackgroundColor: getStyle('--cui-success'),
                      borderWidth: 2,
                      data: [
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                      ],
                    },
                    {
                      label: 'My Third dataset',
                      backgroundColor: 'success',
                      borderColor: getStyle('--cui-danger'),
                      pointHoverBackgroundColor: getStyle('--cui-danger'),
                      borderWidth: 1,
                      borderDash: [8, 5],
                      data: [65, 65, 65, 65, 65, 65, 65],
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        drawOnChartArea: false,
                      },
                    },
                    y: {
                      ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        stepSize: Math.ceil(250 / 5),
                        max: 250,
                      },
                    },
                  },
                  elements: {
                    line: {
                      tension: 0.4,
                    },
                    point: {
                      radius: 0,
                      hitRadius: 10,
                      hoverRadius: 4,
                      hoverBorderWidth: 3,
                    },
                  },
                }}
              />
            </CCardBody>
            <CCardFooter>
              <CRow xs={{ cols: 2 }} md={{ cols: 5 }} className="text-center">
                {progressExample.map((item, index) => (
                  <CCol className="mb-sm-2 mb-0" key={index}>
                    <div className="text-medium-emphasis">{item.title}</div>
                    <strong style={{ fontSize: '10px' }}>
                      {item.value} ({item.percent}%)
                    </strong>
                    <CProgress
                      thin
                      className="mt-2"
                      color={item.color}
                      value={item.percent}
                    />
                  </CCol>
                ))}
              </CRow>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol lg={6} sm={12}>
          <CCard className="mb-4">

            <CCardBody>
              <h4 id="traffic" className="card-title mb-0">
                Social Media
              </h4>
              <div className="small text-medium-emphasis mb-3">
                Traffic
              </div>
              <CRow>
                <CCol sm={6}>
                  <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                    <div className="text-medium-emphasis small">
                      Pageviews
                    </div>
                    <div className="fs-5 fw-semibold">78,623</div>
                  </div>
                </CCol>
                <CCol sm={6}>
                  <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                    <div className="text-medium-emphasis small">
                      Organic
                    </div>
                    <div className="fs-5 fw-semibold">49,123</div>
                  </div>
                </CCol>
              </CRow>

              <hr className="mt-0" />

              {progressGroupExample2.map((item, index) => (
                <div className="progress-group mb-2" key={index}>
                  <div className="progress-group-header">
                    <CIcon className="me-2" icon={item.icon} size="lg" />
                    <span>{item.title}</span>
                    <span className="ms-auto fw-semibold">
                      {item.value}%
                    </span>
                  </div>
                  <div className="progress-group-bars">
                    <CProgress thin color="warning" value={item.value} />
                  </div>
                </div>
              ))}

              <div className="mb-4"></div>

              {progressGroupExample3.map((item, index) => (
                <div className="progress-group" key={index}>
                  <div className="progress-group-header">
                    <CIcon className="me-2" icon={item.icon} size="lg" />
                    <span>{item.title}</span>
                    <span className="ms-auto fw-semibold">
                      {item.value}{' '}
                      <span className="text-medium-emphasis small">
                        ({item.percent}%)
                      </span>
                    </span>
                  </div>
                  <div className="progress-group-bars">
                    <CProgress thin color="success" value={item.percent} />
                  </div>
                </div>
              ))}
            </CCardBody>
          </CCard>
        </CCol>

      </CRow>
      <WidgetsBrand withCharts />

      <CRow>
        <CCol >
          <CCard className="mb-4">
            <CCardHeader>Yog Power Branch</CCardHeader>
            <CCardBody>
              <CTable align="middle" bordered style={{ borderColor: "#106103" }} hover responsive>
                <CTableHead style={{ backgroundColor: "#106103", color: "white" }} >
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Center Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Location
                    </CTableHeaderCell>
                    <CTableHeaderCell>Proformance</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Royalty Percent
                    </CTableHeaderCell>
                    <CTableHeaderCell>Details</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar
                          size="md"
                          src={item.avatar.src}
                          status={item.avatar.status}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> |
                          Registered: {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          size="xl"
                          icon={item.country.flag}
                          title={item.country.name}
                        />
                      </CTableDataCell>
                      <CTableDataCell>

                        <div className="clearfix">
                          <div className="float-start">
                            <strong>Total Target :100000</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">
                              Complated : 60000
                            </small>
                          </div>
                        </div>

                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">
                              {item.usage.period}
                            </small>
                          </div>
                        </div>
                        <CProgress
                          thin
                          color={item.usage.color}
                          value={item.usage.value}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>
                          <strong>12%</strong>
                        </div>
                        <div>
                          <small className="text-medium-emphasis">
                            72000 Received
                          </small>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton color='success'>view</CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
