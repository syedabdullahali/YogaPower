import { cilAccountLogout, cilCheckCircle, cilFingerprint } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCardHeader, CCardText, CCol, CFormInput, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import moment from 'moment/moment'
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const ClientCheckin = () => {
    const [attendance, setAttendance] = useState(0);
    const [attendanceID, setAttendanceID] = useState('');
    const [client, setClient] = useState('');
    const [centarId, setCentarId] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');

    const time = null;
    const [ctime, setDate] = useState(time);
    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;
    const centerCode = user.user.centerCode;
    const [result1, setResult1] = useState([]);
    const [allClient, setAllclient] = useState([]);
    useEffect(() => {
        getEnquiry()
        getClient()
    }, []);

    function getEnquiry() {
        axios.get(`${url}/clientAttendance/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setResult1(res.data)
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function getClient() {
        axios.get(`${url}/memberForm/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setAllclient(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }



    const handelTime = () => {
        let time = new Date().toLocaleTimeString();
        var currentdate = new Date();
        var date = currentdate.getFullYear() + "/" + currentdate.getMonth()
            + "/" + currentdate.getDay();

        setDate(time);
        let data = {
            username: username, ClientName: client, centerId: centerCode, attentanceId: attendanceID, checkDate: date, checkIn: time
        }

        fetch(`${url}/clientAttendance/create`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then(() => {
                alert("successfully submitted")
                setAttendance(2)
            })
        })
    }

    const CheckOut = (id) => {
        let time2 = new Date().toLocaleTimeString();
        let item = { checkOut: time2 }
        fetch(`${url}/clientAttendance/update/${id}`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                getEnquiry()
            })
        })
    }

    const submitBtn = () => {
        allClient.filter((list) => list.AttendanceID.includes(attendanceID)).length;
        if (allClient.filter((list) => list.AttendanceID.includes(attendanceID)).length) {
            allClient.filter((list) =>
                list.AttendanceID.includes(attendanceID)
            ).map((data) => (
                setClient(data.Fullname),
                setAttendanceID(data.AttendanceID),
                setCentarId(data.CenterID),
                setAttendance(1),
                setStatus(data.status),
                setError('')
            ))
        } else {
            setError('Not Found')
        }
    }

    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                Client CheckIn
            </CCardHeader>
            <CCardBody>
                <CRow>
                    <CCol lg={4}>
                        <CCard>
                            <CCardBody>
                                <label style={{ color: 'red' }}>{error}</label>
                                <CRow>
                                    <CCol xs={5}>
                                        <CIcon icon={cilFingerprint} size="8xl" />
                                    </CCol>
                                    <CCol className='mt-4'>
                                        <CFormInput
                                            type="text"
                                            label='Attendance ID'
                                            placeholder="Enter Attendance ID"
                                            value={attendanceID}
                                            onChange={(e) => setAttendanceID(e.target.value)}
                                        />
                                    </CCol>
                                </CRow>
                                <CButton className='mt-1 float-end' onClick={submitBtn}>Submit</CButton>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    {attendance >= 1 &&

                        <CCol lg={4}>
                            <CCard>
                                <CCardBody>
                                    <CRow>
                                        <CCol xs={5}>

                                            <CIcon icon={cilCheckCircle} size="8xl" />
                                        </CCol>
                                        <CCol className='mt-3'>
                                            <CCardText>Client Name: {client}<br />
                                                Attendance ID: {attendanceID}<br />
                                                Center ID: {centarId}<br />
                                                Status: {status}<br />

                                            </CCardText>
                                        </CCol>
                                    </CRow>
                                    {ctime == null &&
                                        <CButton className='mt-1 float-end' onClick={handelTime}>Check In</CButton>
                                    }
                                </CCardBody>
                            </CCard>
                        </CCol>
                    }
                    {attendance === 2 &&
                        <CCol lg={4}>
                            <CCard>
                                <CCardBody>
                                    <CRow>
                                        <CCol xs={5} className='mt-2'>
                                            <CIcon icon={cilAccountLogout} size="7xl" />
                                        </CCol>
                                        <CCol className='mt-3'>
                                            <CCardText>Client Name: {client}<br />
                                                Attendance ID: {attendanceID}<br />
                                                Attendance Time: {ctime}
                                            </CCardText>
                                        </CCol>
                                    </CRow>
                                    {ctime != null &&
                                        <CButton className='mt-1 float-end' onClick={() => setAttendance(0)}>Done !</CButton>
                                    }
                                </CCardBody>
                            </CCard>
                        </CCol>
                    }
                </CRow>


                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow >
                            <CTableHeaderCell>Sr.No</CTableHeaderCell>
                            <CTableHeaderCell>Client Name</CTableHeaderCell>
                            <CTableHeaderCell>Attendance ID</CTableHeaderCell>
                            <CTableHeaderCell>Center ID</CTableHeaderCell>
                            <CTableHeaderCell>Check Date</CTableHeaderCell>
                            <CTableHeaderCell>CheckIn Time</CTableHeaderCell>
                            <CTableHeaderCell>CheckOut Time</CTableHeaderCell>
                            <CTableHeaderCell>Action</CTableHeaderCell>
                            <CTableHeaderCell>Edit</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {result1.reverse().filter((list) => list.username === username).map((item, index) => (
                            <CTableRow key={index}>
                                <CTableDataCell>{index + 1}</CTableDataCell>
                                <CTableDataCell>{item.ClientName}</CTableDataCell>
                                <CTableDataCell>{item.attentanceId}</CTableDataCell>
                                <CTableDataCell>{item.centerId}</CTableDataCell>
                                <CTableDataCell>{moment(item.createdAt).format("LL")}</CTableDataCell>
                                <CTableDataCell>{item.checkIn}</CTableDataCell>
                                <CTableDataCell>{item.checkOut}</CTableDataCell>
                                <CTableDataCell>{item.checkOut === undefined ? <CButton color='danger' onClick={() => CheckOut(item._id)}>Check Out</CButton> : <CButton disabled color='danger' onClick={() => CheckOut(item._id)}>Check Out</CButton>}</CTableDataCell>
                                <CTableDataCell><MdEdit style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteEnquiry(item._id)} size='20px' /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteEnquiry(item._id)} size='20px' /> </CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard>
    )
}

export default ClientCheckin
