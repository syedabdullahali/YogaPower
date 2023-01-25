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
                <CCardTitle>Service Master</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm className="mb-2">
                    <div className="d-flex justify-content-between">
                        <div></div>
                        <div>
                            <CRow>
                                <CCol>
                                    <CButton className="ms-1 mt-2" onClick={subserviceClose}>{action1 ? 'close' : 'Add Service'}</CButton>
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
                                        label="Service Name"
                                        value={selected_service}
                                        onChange={(e) => setSelected_service(e.target.value)}
                                        placeholder="Enter Sub Service Name"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Service Variation"
                                        value={sub_Service_Name}
                                        onChange={(e) => setSub_Service_Name(e.target.value)}
                                        placeholder="Enter Sub Service Name"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12} className="mt-2">
                                    <CInputGroup>
                                        <CInputGroupText
                                            component="label"
                                            htmlFor="inputGroupSelect01"
                                        >
                                            Package
                                        </CInputGroupText>
                                        <CFormSelect id="day"
                                            value={packages}
                                            onChange={(e) => setPackages(e.target.value)}>
                                            <option value="">Select</option>
                                            <option value='1 Day in week'>1 Day per week</option>
                                            <option value='2 Day in week'>2 Day per week</option>
                                            <option value='3 Day in week'>3 Day per week</option>
                                            <option value='4 Day in week'>4 Day per week</option>
                                            <option value='5 Day in week'>5 Day per week</option>
                                            <option value='6 Day in week'>6 Day per week</option>
                                            <option value='7 Day in week'>7 Day per week</option>
                                        </CFormSelect>
                                    </CInputGroup>
                                </CCol>
                                <CCol lg={6} md={6} sm={12} className="mt-2">
                                    <CInputGroup
                                    >
                                        <CInputGroupText
                                            component="label"
                                            htmlFor="inputGroupSelect01"
                                        >
                                            Duration
                                        </CInputGroupText>
                                        <CFormSelect id="month"
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}>
                                            <option value="">Select</option>
                                            <option value=' 1 Week'>1 Week</option>
                                            <option value=" 2 Week">2 Week</option>
                                            <option value=" 3 Week">3 Week</option>
                                            <option value=" 4 Week">4 Week</option>
                                            <option value=" 5 Week">5 Week</option>
                                            <option value=" 6 Week">6 Week</option>
                                            <option value="1 Month">1 Month</option>
                                            <option value="2 Month">2 Month</option>
                                            <option value="3 Month">3 Month</option>
                                            <option value="4 Month">4 Month</option>
                                            <option value="5 Month">5 Month</option>
                                            <option value="6 Month">6 Month</option>
                                            <option value="7 Month">7 Month</option>
                                            <option value="8 Month">8 Month</option>
                                            <option value="9 Month">9 Month</option>
                                            <option value="10 Month">10 Month</option>
                                            <option value="11 Month">11 Month</option>
                                            <option value="12 Month">12 Month</option>
                                            <option value="13 Month">13 Month</option>
                                            <option value="14 Month">14 Month</option>
                                            <option value="15 Month">15 Month</option>
                                            <option value="1 Year">1 Year</option>
                                            <option value="2 Year">2 Year</option>
                                            <option value="3 Year">3 Year</option>
                                            <option value="4 Year">4 Year</option>
                                            <option value="5 Year">5 Year</option>
                                        </CFormSelect>
                                    </CInputGroup>
                                </CCol>
                                <CCol className="mt-2" lg={6} md={6} sm={12}>
                                    <CRow>
                                        <CCol >

                                            <CInputGroup>
                                                <CInputGroupText
                                                    component="label"

                                                    className="mb-1"
                                                    htmlFor="inputGroupSelect01"
                                                >
                                                    Fees
                                                </CInputGroupText>
                                                <CFormInput
                                                    className="mb-1"
                                                    type="number"
                                                    value={fees}
                                                    onChange={(e) => setFees(e.target.value)}
                                                    id="exampleFormControlInput1"
                                                    placeholder="Enter Fees"
                                                />
                                            </CInputGroup>

                                        </CCol>
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
                            <CTableHeaderCell>Service Name</CTableHeaderCell>
                            <CTableHeaderCell>Service Variation</CTableHeaderCell>
                            <CTableHeaderCell>Package</CTableHeaderCell>
                            <CTableHeaderCell>Duration</CTableHeaderCell>
                            <CTableHeaderCell>Fees</CTableHeaderCell>
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
                                    <CTableDataCell>{item.duration}</CTableDataCell>
                                    <CTableDataCell>{item.fees}</CTableDataCell>
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

export default ServiceMaster;