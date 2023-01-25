import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CForm,
    CFormInput,
    CFormSelect,
    CFormSwitch,
    CInputGroup,
    CInputGroupText,
    CPagination,
    CPaginationItem,
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

const ServiceMaster = () => {
    const [action1, setAction1] = useState(false)
    const [jobDesignation, setJobDesignation] = useState("")
    const [department, setDepartment] = useState("")
    const [vacancy, setVacancy] = useState("")
    const [status, setStatus] = useState(false)

    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;
    const [result1, setResult1] = useState([]);
    const [paging, setPaging] = useState(0);
    useEffect(() => {
        getDesignation()
    }, []);

    function getDesignation() {
        axios.get(`${url}/designation/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setResult1(res.data.reverse())
            })
            .catch((error) => {
                console.error(error)
            })
    }
    function deleteDesignation(id) {

        if (confirm('Do you want to delete this')) {
            fetch(`${url}/designation/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getDesignation()
                })
            })
        }
    }


    const updateStatus2 = (id, status) => {
        let item = { status: status }
        fetch(`${url}/designation/update/${id}`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                getDesignation()
            })
        })
    }

    const saveDesignation = () => {
        let data = { username: username, jobDesignation: jobDesignation, department: department, availableVacancy: vacancy, status }
        // console.warn(data);
        fetch(`${url}/designation/create`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            // console.warn("resp",resp);;
            resp.json().then(() => {
                setStatus(false)
                setJobDesignation('')
                setDepartment('')
                setVacancy('')
                alert("successfully submitted")
            })
        })
    }

    const subserviceClose = () => {
        setAction1(!action1)
        setStatus(false)
    }


    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <CCardTitle>Designation Master</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm className="mb-2">
                    <div className="d-flex justify-content-between">
                        <div></div>
                        <div>
                            <CRow>
                                <CCol>
                                    <CButton className="ms-1 mt-2" onClick={subserviceClose}>{action1 ? 'close' : 'Add Vacancy'}</CButton>
                                </CCol>
                            </CRow>
                        </div>
                    </div>
                    {action1 &&
                        <div>
                            <CRow className='mt-3'>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Job Designation Name"
                                        value={jobDesignation}
                                        onChange={(e) => setJobDesignation(e.target.value)}
                                        placeholder="Enter Job Designation"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Job Department Name"
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                        placeholder="Enter Job Department"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        id="exampleFormControlInput1"
                                        label="Available Vacancy"
                                        value={vacancy}
                                        onChange={(e) => setVacancy(e.target.value)}
                                        placeholder="No of Vacancy"
                                    />
                                </CCol>
                                <CCol className="mt-2" lg={6} md={6} sm={12}>
                                    <CFormSwitch size="xl" label="Status" value={status} onChange={() => setStatus(!status)} style={{ defaultChecked: 'false' }} />

                                    <CButton className="mt-2" onClick={saveDesignation}>Save</CButton>
                                </CCol>


                            </CRow>
                        </div>
                    }
                </CForm>
                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow >
                            <CTableHeaderCell>Sr.No</CTableHeaderCell>
                            <CTableHeaderCell>Job Designation</CTableHeaderCell>
                            <CTableHeaderCell>Department</CTableHeaderCell>
                            <CTableHeaderCell>Available Vacancy</CTableHeaderCell>
                            <CTableHeaderCell>Status</CTableHeaderCell>
                            <CTableHeaderCell>Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {result1.slice(paging * 10, paging * 10 + 10).map((item, index) => (
                            item.username === username && (
                                <CTableRow key={index}>
                                    <CTableDataCell>{index + 1 + (paging * 10)}</CTableDataCell>
                                    <CTableDataCell>{item.jobDesignation}</CTableDataCell>
                                    <CTableDataCell>{item.department}</CTableDataCell>
                                    <CTableDataCell>{item.availableVacancy}</CTableDataCell>
                                    <CTableDataCell><CFormSwitch size="xl" style={{ cursor: 'pointer' }} id={item._id} value={item.status} checked={item.status} onChange={() => updateStatus2(item._id, !item.status)} /></CTableDataCell>
                                    <CTableDataCell><MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteDesignation(item._id)} size='20px' /> </CTableDataCell>
                                </CTableRow>
                            )
                        ))}
                    </CTableBody>
                </CTable>
            </CCardBody>
            <CPagination aria-label="Page navigation example" align="center" className='mt-2'>
                <CPaginationItem aria-label="Previous" disabled={paging != 0 ? false : true} onClick={() => paging > 0 && setPaging(paging - 1)}>
                    <span aria-hidden="true">&laquo;</span>
                </CPaginationItem>
                <CPaginationItem active onClick={() => setPaging(0)}>{paging + 1}</CPaginationItem>
                {result1.filter((list) => list.username === username).length > (paging + 1) * 10 && <CPaginationItem onClick={() => setPaging(paging + 1)} >{paging + 2}</CPaginationItem>}

                {result1.filter((list) => list.username === username).length > (paging + 2) * 10 && <CPaginationItem onClick={() => setPaging(paging + 2)}>{paging + 3}</CPaginationItem>}
                {result1.filter((list) => list.username === username).length > (paging + 1) * 10 ?
                    <CPaginationItem aria-label="Next" onClick={() => setPaging(paging + 1)}>
                        <span aria-hidden="true">&raquo;</span>
                    </CPaginationItem>
                    : <CPaginationItem disabled aria-label="Next" onClick={() => setPaging(paging + 1)}>
                        <span aria-hidden="true">&raquo;</span>
                    </CPaginationItem>
                }
            </CPagination>
        </CCard>
    );
};

export default ServiceMaster;