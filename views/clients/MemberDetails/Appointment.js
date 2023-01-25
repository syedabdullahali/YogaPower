import {
    CButton,
    CCardTitle,
    CCol,
    CForm,
    CFormInput,
    CFormSelect,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from "@coreui/react";
import axios from "axios";
import { ref } from "firebase/storage";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { storage } from "src/firebase";
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const Appointment = ({ id }) => {
    const [action1, setAction1] = useState(false)


    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;
    const [result1, setResult1] = useState([]);
    const [paging, setPaging] = useState(0)
    const headers = {
        'Authorization': `Bearer ${token}`,
        'My-Custom-Header': 'foobar'
    };
    const imagesListRef = ref(storage, "DocumentClient/");
    useEffect(() => {
        getAppointment()
        getStaff()
    }, []);

    const [staff, setStaff] = useState([])
    function getStaff() {
        axios.get(`${url2}/employeeForm/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setStaff(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function getAppointment() {
        axios.get(`${url}/AppointmentClient/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                setResult1(res.data.reverse())
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const [AppointmentDate, setAppointmentDate] = useState('')
    const [AppointmentTime, setAppointmentTime] = useState('')
    const [StaffName, setStaffName] = useState('')

    function createGallery() {
        const data = {
            userId: id,
            AppointmentId: { username } + result1.length,
            AppointmentDate: AppointmentDate,
            AppointmentTime: AppointmentTime,
            StaffName: StaffName,
        }
        axios.post(`${url}/AppointmentClient/create`, data, { headers })
            .then((resp) => {
                console.log(resp.data)
                alert('Successfully Added')
                getAppointment()
                setAction1(false)
            })
            .catch((error) => console.log(error))
    }

    const navi = useNavigate()
    function deleteData(id) {
        if (confirm('You want to delete this')) {
            fetch(`${url}/AppointmentClient/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getAppointment()
                })
            })
        }
        return
    }


    return (
        <CRow>
            <CCol xs={12}>
                <div className='d-flex justify-content-between mb-2'>
                    <div className='mt-2 ms-2'>
                        <CCardTitle>Appointment  </CCardTitle>
                    </div>
                    <div className='justify-content-around'>
                        <CButton style={{ margin: '5px' }}>Inter branch transfer</CButton>
                        <CButton style={{ margin: '5px' }}>Print Profile</CButton>
                        <CButton style={{ margin: '5px' }} onClick={() => navi("/forms/invoice")}>New Invoice</CButton>
                        <CButton style={{ margin: '5px' }}>New Call</CButton>
                        <CButton style={{ margin: '5px' }}>New Appointment</CButton>
                    </div>

                </div>
            </CCol>
            <CForm className="mb-2">
                <div className="d-flex justify-content-between">
                    <div></div>
                    <div>
                        <CRow>
                            <CCol>
                                <CButton className="ms-1 mt-2" onClick={() => setAction1(!action1)}>{action1 ? 'close' : 'Book Appointment'}</CButton>
                            </CCol>
                        </CRow>
                    </div>
                </div>
                {action1 &&
                    <div>
                        <CRow className='mt-3'>
                            <CCol lg={4} md={4} sm={12}>
                                <CFormSelect
                                    label="Staff Name"
                                    value={StaffName}
                                    onChange={(e) => setStaffName(e.target.value)}
                                >
                                    <option >Select</option>
                                    {staff.filter((list) => list.username === username && list.selected === 'Select').map((item, index) => (
                                        item.username === username && (
                                            <option key={index}>{item.FullName}</option>
                                        )
                                    ))}
                                </CFormSelect>
                            </CCol>
                            <CCol lg={4} md={4} sm={12}>
                                <CFormInput
                                    className="mb-1 mr-3"
                                    type="date"
                                    label="Appointment Date"
                                    value={AppointmentDate}
                                    onChange={(e) => setAppointmentDate(e.target.value)}
                                />
                            </CCol>
                            <CCol lg={4} md={4} sm={12}>
                                <CFormInput
                                    className="mb-1 mr-3"
                                    type="time"
                                    label="Appointment Time"
                                    value={AppointmentTime}
                                    onChange={(e) => setAppointmentTime(e.target.value)}
                                />
                            </CCol>
                            <CCol className="mt-2" lg={6} md={6} sm={12}>
                                <CButton className="mt-2" onClick={() => createGallery()}>Save</CButton>
                            </CCol>
                        </CRow>
                    </div>
                }
            </CForm>
            <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                    <CTableRow >
                        <CTableHeaderCell>Sr.No</CTableHeaderCell>
                        <CTableHeaderCell>Date</CTableHeaderCell>
                        <CTableHeaderCell>Appointment Date</CTableHeaderCell>
                        <CTableHeaderCell>Appointment Time</CTableHeaderCell>
                        <CTableHeaderCell>Counseller</CTableHeaderCell>
                        <CTableHeaderCell>Action</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {result1.filter((list) => list.userId === id).map((item, index) => (
                        <CTableRow key={index}>
                            <CTableDataCell>{index + 1 + (paging * 10)}</CTableDataCell>
                            <CTableDataCell>{moment(item.createdAt).format("MM-DD-YYYY")}</CTableDataCell>
                            <CTableDataCell>{moment(item.AppointmentDate).format("MM-DD-YYYY")}</CTableDataCell>
                            <CTableDataCell>{item.AppointmentTime}</CTableDataCell>
                            <CTableDataCell className="text-center">{item.StaffName}</CTableDataCell>
                            <CTableDataCell><MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteData(item._id)} size='20px' /></CTableDataCell>
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>
        </CRow>
    );
};

export default Appointment;