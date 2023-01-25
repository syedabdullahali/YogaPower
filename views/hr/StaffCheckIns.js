import React, { useEffect, useState } from 'react'
import {
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CFormInput,
    CFormSelect,
    CInputGroup,
    CInputGroupText,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleBottom, cilArrowCircleTop, cilFile, cilInfo } from '@coreui/icons'
import { FaBeer } from 'react-icons/fa';
import DataTable from 'src/components/DataTable'
import { MdDelete, MdEdit } from 'react-icons/md';
import moment from 'moment';
import axios from 'axios';
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'


const StaffCheckIns = () => {


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
        axios.get(`${url}/staffAttendance/all`, {
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
        axios.get(`${url}/employeeForm/all`, {
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
            username: username, StaffName: client, centerId: centerCode, attentanceId: attendanceID, checkDate: date, checkIn: time
        }

        fetch(`${url}/staffAttendance/create`, {
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
        fetch(`${url}/staffAttendance/update/${id}`, {
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
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className="mb-3 border-success">
                    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                        <CCardTitle className="mt-2">Staff Check Ins</CCardTitle>
                    </CCardHeader>
                    <CCardBody>
                        <CRow className='d-flex mb-2'>
                            <CCol lg={3} sm={6} className='mb-2'>
                                <CFormSelect
                                    id="inputGroupSelect04"
                                    aria-label="Example select with button addon"
                                >
                                    <option>Name</option>
                                    <option value="1">Location</option>
                                    <option value="3">Mobile</option>
                                    <option value="3">Email</option>
                                    <option value="2">Department</option>
                                    <option value="2">Desgantion</option>
                                </CFormSelect>
                            </CCol>

                            <CCol lg={4} sm={6} className='mb-2'>
                                <CInputGroup>
                                    <CFormInput
                                        type='date'
                                        placeholder="Search"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                    <CButton type="button" color="primary">
                                        Search
                                    </CButton>
                                </CInputGroup>
                            </CCol>
                            <CCol lg={5} sm={6} className='mb-2' >
                                <CButtonGroup className='float-end'>
                                    <CButton color="primary">
                                        <CIcon icon={cilArrowCircleTop} />
                                        {' '}Export
                                    </CButton>
                                </CButtonGroup>
                            </CCol>
                        </CRow>

                        <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                <CTableRow >
                                    <CTableHeaderCell>Sr.No</CTableHeaderCell>
                                    <CTableHeaderCell>Staff Name</CTableHeaderCell>
                                    <CTableHeaderCell>Attendance ID</CTableHeaderCell>
                                    <CTableHeaderCell>Center ID</CTableHeaderCell>
                                    <CTableHeaderCell>Check Date</CTableHeaderCell>
                                    <CTableHeaderCell>CheckIn Time</CTableHeaderCell>
                                    <CTableHeaderCell>CheckOut Time</CTableHeaderCell>
                                    <CTableHeaderCell>Action</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {result1.filter((list) => list.username === username).map((item, index) => (
                                    <CTableRow key={index}>
                                        <CTableDataCell>{index + 1}</CTableDataCell>
                                        <CTableDataCell>{item.StaffName}</CTableDataCell>
                                        <CTableDataCell>{item.attentanceId}</CTableDataCell>
                                        <CTableDataCell>{item.centerId}</CTableDataCell>
                                        <CTableDataCell>{moment(item.createdAt).format("LL")}</CTableDataCell>
                                        <CTableDataCell>{item.checkIn}</CTableDataCell>
                                        <CTableDataCell>{item.checkOut}</CTableDataCell>
                                        <CTableDataCell><MdEdit style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteEnquiry(item._id)} size='20px' /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteEnquiry(item._id)} size='20px' /> </CTableDataCell>
                                    </CTableRow>
                                ))}
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default StaffCheckIns
