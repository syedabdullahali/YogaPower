import { cilArrowCircleTop } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
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
    CFormSwitch,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from "@coreui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const BodyMeasurement = () => {
    const [action1, setAction1] = useState(false)
    const [date, setDate] = useState('')
    const [holiday, setHoliday] = useState('')
    const [status, setStatus] = useState(false)

    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;
    const [result1, setResult1] = useState([]);
    const headers = {
        'Authorization': `Bearer ${token}`,
        'My-Custom-Header': 'foobar'
    };
    useEffect(() => {
        getHolidayList()
    }, []);

    function getHolidayList() {
        axios.get(`${url}/holidaysListMaster/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                setResult1(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function createHoliday() {
        if (lead != '') {
            const data = {
                username: username,
                LeadSource: lead,
                Status: status,
            }
            axios.post(`${url}/holidaysListMaster/create`, data, { headers })
                .then((resp) => {
                    console.log(resp.data)
                    alert('Successfully Added')
                    getHolidayList()
                    setAction1(false)
                    setLead('')
                    setStatus(false)
                })
                .catch((error) => console.log(error))
        } else {
            alert('enter lead Source')
        }
    }

    const updateStatus = (id, status) => {
        let item = { Status: status }
        fetch(`${url}/holidaysListMaster/update/${id}`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                getHolidayList()
            })
        })
    }

    function deleteData(id) {
        if (confirm('You want to delete this')) {
            fetch(`${url}/holidaysListMaster/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getHolidayList()
                })
            })
        }
        return
    }

    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className="mb-3 border-success">
                    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                        <CCardTitle className="mt-2">Client Tranfer Master</CCardTitle>
                    </CCardHeader>
                    <CCardBody>
                        <CRow className='d-flex mb-2'>
                            <CCol lg={3} sm={6} className='mb-2'>
                                <CFormInput
                                    type='date'
                                    placeholder="Search"
                                    label="Starting Month & Year"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}

                                />
                            </CCol>
                            <CCol lg={3} sm={6} className='mb-2'>
                                <CFormInput
                                    type='text'
                                    placeholder="Enter Holiday"
                                    label="Holiday"
                                    value={holiday}
                                    onChange={(e) => setHoliday(e.target.value)}
                                />
                            </CCol>
                        </CRow>
                        <CFormSwitch size="xl" label="Status" value={status} onChange={() => setStatus(!status)} />
                        <CButton type="button" color="primary" onClick={() => createHoliday()}>
                            Save
                        </CButton>
                        <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                <CTableRow >
                                    <CTableHeaderCell>Sno.</CTableHeaderCell>
                                    <CTableHeaderCell>Date</CTableHeaderCell>
                                    <CTableHeaderCell>Enter Holiday</CTableHeaderCell>
                                    <CTableHeaderCell>Status</CTableHeaderCell>
                                    <CTableHeaderCell>Action</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow >
                                    <CTableDataCell>1</CTableDataCell>
                                    <CTableDataCell>21/11/2022</CTableDataCell>
                                    <CTableDataCell>holi</CTableDataCell>
                                    <CTableDataCell><CFormSwitch size="xl" style={{ cursor: 'pointer' }} /></CTableDataCell>
                                    <CTableDataCell><MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></CTableDataCell>
                                </CTableRow>
                                {result1.map((item, index) => (
                                    item.username === username && (
                                        <CTableRow key={index}>
                                            <CTableDataCell>{index + 1}</CTableDataCell>
                                            <CTableDataCell>{item.Date}</CTableDataCell>
                                            <CTableDataCell className="text-center">{item.Holiday}</CTableDataCell>
                                            <CTableDataCell className="text-center"><CFormSwitch size="xl" style={{ cursor: 'pointer' }} id={item._id} value={item.Status} checked={item.Status} onChange={() => updateStatus(item._id, !item.Status)} /></CTableDataCell>
                                            <CTableDataCell> <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteData(item._id)} size='20px' /> </CTableDataCell>
                                        </CTableRow>
                                    )
                                ))}
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default BodyMeasurement
