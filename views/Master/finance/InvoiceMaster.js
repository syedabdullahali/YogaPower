import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CForm,
    CFormInput,
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

const InvoiceMaster = () => {
    const [action1, setAction1] = useState(false)
    const [sub_Service_Name, setSub_Service_Name] = useState("")
    const [selected_service, setSelected_service] = useState("")
    const [fees, setFees] = useState("")
    const [status, setStatus] = useState(false)
    const [packages, setPackages] = useState("")
    const [duration, setDuration] = useState("")

    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;
    const [result1, setResult1] = useState([]);
    useEffect(() => {
        getSubService()
    }, []);

    function getSubService() {
        axios.get(`${url}/subservice/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setResult1(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    function deleteSubService(id) {

        if (confirm('Do you want to delete this')) {
            fetch(`${url}/subservice/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getSubService()
                })
            })
        }
    }


    const updateStatus2 = (id, status) => {
        let item = { status: status }
        fetch(`${url}/subservice/update/${id}`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                getSubService()
            })
        })
    }

    const saveSubservice = () => {
        let data = { username: username, sub_Service_Name, selected_service: selected_service, fees, packages, duration, status }
        // console.warn(data);
        fetch(`${url}/subservice/create`, {
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
                setSelected_service('')
                setFees("")
                setDuration('')
                setStatus(false)
                getSubService()
                alert("successfully submitted")
            })
        })
    }

    const subserviceClose = () => {
        setAction1(!action1)
        setSelected_service('')
        setSub_Service_Name('')
        setFees("")
        setDuration('')
        setStatus(false)
    }


    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <CCardTitle>Expenses Category Master</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm className="mb-2">
                    <div className="d-flex justify-content-between">
                        <div></div>
                        <div>
                            <CRow>
                                <CCol>
                                    <CButton className="ms-1 mt-2" onClick={subserviceClose}>{action1 ? 'close' : 'Add Express'}</CButton>
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
                                        label="Category"
                                        value={selected_service}
                                        onChange={(e) => setSelected_service(e.target.value)}
                                        placeholder="Enter Tax Name"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Approval level"
                                        value={sub_Service_Name}
                                        onChange={(e) => setSub_Service_Name(e.target.value)}
                                        placeholder="Enter Tax in %"
                                    />
                                </CCol>
                                <CCol className="mt-2" lg={6} md={6} sm={12}>
                                    <CRow>
                                        <CCol>
                                            <CFormSwitch size="xl" label="Status" value={status} onChange={() => setStatus(!status)} style={{ defaultChecked: 'false' }} />
                                        </CCol>
                                    </CRow>

                                    <CButton className="mt-2" onClick={saveSubservice}>Save</CButton>
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
                            <CTableHeaderCell>Tax Name</CTableHeaderCell>
                            <CTableHeaderCell>Tax %</CTableHeaderCell>
                            <CTableHeaderCell>Status</CTableHeaderCell>
                            <CTableHeaderCell>Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {result1.map((item, index) => (
                            item.username === username && (
                                <CTableRow key={index}>
                                    <CTableDataCell>{index + 1}</CTableDataCell>
                                    <CTableDataCell>{item.selected_service}</CTableDataCell>
                                    <CTableDataCell className="text-center">{item.sub_Service_Name ? item.sub_Service_Name : '-'}</CTableDataCell>
                                    <CTableDataCell>{item.packages}</CTableDataCell>
                                    <CTableDataCell><CFormSwitch size="xl" style={{ cursor: 'pointer' }} id={item._id} value={item.status} checked={item.status} onChange={() => updateStatus2(item._id, !item.status)} /></CTableDataCell>
                                    <CTableDataCell> <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteSubService(item._id)} size='20px' /> </CTableDataCell>
                                </CTableRow>
                            )
                        ))}
                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard>
    );
};

export default InvoiceMaster;