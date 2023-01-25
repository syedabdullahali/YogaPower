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
import React, { useState } from "react";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'


const PackageMaster = () => {
    const [action, setAction] = useState(false)
    const [Package_Name, setPackageName] = useState("");
    const [fees, setFees] = useState("");
    const [packages, setPackages] = useState("")
    const [status, setStatus] = useState(false);
    const [duration, setDuration] = useState("");

    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    console.log(duration);
    const username = user.user.username;
    const token = user.token;
    const [result, setResult] = useState([]);
    useEffect(() => {
        getPackage()
    }, []);

    function getPackage() {
        axios.get(`${url}/Package/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setResult(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    const updateStatus = (id, status) => {
        let item = { status: status }
        fetch(`${url}/Package/update/${id}`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                getPackage()
            })
        })
    }

    function deletePackage(id) {

        if (confirm('Do you want to delete this')) {
            fetch(`${url}/Package/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getPackage()
                })
            })
        }
    }

    const savePackage = () => {
        let data = { username: username, Package_Name, fees, packages, duration, status }
        // console.warn(data);
        fetch(`${url}/Package/create`, {
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
                alert("successfully submitted")
                setPackageName('')
                setFees('')
                setPackages('')
                setDuration('')
                setStatus('')
                getPackage()
            })
        })
    }


    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <CCardTitle>Package Master</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm className="mb-2">
                    <div className="d-flex justify-content-between">
                        <div></div>
                        <div>
                            <CRow>
                                <CCol>
                                    <CButton className="ms-1 mt-2" onClick={() => setAction(!action)}>{action ? 'close' : 'Add New Package'}</CButton>
                                </CCol>
                            </CRow>
                        </div>
                    </div>
                    {action &&
                        <div>
                            <CRow className='mt-3'>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Package Name"
                                        value={Package_Name}
                                        onChange={(e) => setPackageName(e.target.value)}
                                        placeholder="Enter Package Name"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        id="exampleFormControlInput1"
                                        label="Fees"
                                        value={fees}
                                        onChange={(e) => setFees(e.target.value)}
                                        placeholder="Enter Fees"
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
                                <CCol lg={6} md={6} sm={12} className='mt-1'>
                                    <CFormSwitch size="xl" label="Status" style={{ defaultChecked: 'false' }}
                                        value={status}
                                        onChange={() => setStatus(!status)} />
                                    <CButton className="mt-2" onClick={savePackage}>Save</CButton>
                                </CCol>
                            </CRow>
                        </div>
                    }
                </CForm>
                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow >
                            <CTableHeaderCell>Sr.No</CTableHeaderCell>
                            <CTableHeaderCell>Package Name</CTableHeaderCell>
                            <CTableHeaderCell>Duration</CTableHeaderCell>
                            <CTableHeaderCell>Fees</CTableHeaderCell>
                            <CTableHeaderCell>Status</CTableHeaderCell>
                            <CTableHeaderCell>Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {result.map((item, index) => (
                            item.username === username && (
                                <CTableRow key={index}>
                                    <CTableDataCell>{index + 1}</CTableDataCell>
                                    <CTableDataCell>{item.Package_Name}</CTableDataCell>
                                    <CTableDataCell>{item.packages} {item.duration}</CTableDataCell>
                                    <CTableDataCell>{item.fees}</CTableDataCell>
                                    <CTableDataCell><CFormSwitch size="xl" style={{ cursor: 'pointer' }} id={item._id} value={item.status} checked={item.status} onChange={() => updateStatus(item._id, !item.status)} /></CTableDataCell>
                                    <CTableDataCell> <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deletePackage(item._id)} size='20px' /> </CTableDataCell>
                                </CTableRow>
                            )
                        ))}
                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard >
    );
};

export default PackageMaster;