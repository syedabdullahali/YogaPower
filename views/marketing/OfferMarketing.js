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
import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const OfferMarketing = () => {
    const [action, setAction] = useState(false)
    const [ServiceName, setServiceName] = useState("");
    const [ServiceDuration, setServiceDuration] = useState("");
    const [ServiceVariation, setServiceVariation] = useState("");
    const [ServiceFees, setServiceFees] = useState("");
    const [DealName, setDealName] = useState("");
    const [StartDate, setStartDate] = useState("");
    const [EndDate, setEndDate] = useState("");
    const [Discount, setDiscount] = useState("");
    const [NetFees, setNetFees] = useState("");
    const [status, setStatus] = useState(false);
    const url = 'https://yog-api.herokuapp.com'

    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;
    const [result1, setResult1] = useState([]);
    const [result, setResult] = useState([]);
    const headers = {
        'Authorization': `Bearer ${token}`,
        'My-Custom-Header': 'foobar'
    };
    useEffect(() => {
        getOffer()
        getService()
    }, []);

    function getOffer() {
        axios.get(`${url}/offer/all`, {
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

    function getService() {
        axios.get(`${url}/subservice/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                setResult(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function createOffer() {
        if (DealName != '' && ServiceName != '' && ServiceVariation != '' && ServiceDuration != '' && ServiceFees != ""
            && StartDate != '' && EndDate != '' && NetFees != '' && Discount != ''
        ) {
            const data = {
                username: username,
                ServiceName: ServiceName,
                ServiceVariation: ServiceVariation,
                duration: ServiceDuration,
                fees: ServiceFees,
                dealName: DealName,
                startDate: StartDate,
                endDate: EndDate,
                discount: Discount,
                netfees: NetFees,
                status: status
            }
            axios.post(`${url}/offer/create`, data, { headers })
                .then((resp) => {
                    console.log(resp.data)
                    alert('Successfully Added')
                    getOffer()
                    setAction(false)

                })
                .catch((error) => console.log(error))
        } else {
            alert('enter all details')
        }
    }

    const updateStatus = (id, status) => {
        let item = { Status: status }
        fetch(`${url}/offer/update/${id}`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                getOffer()
            })
        })
    }

    function deleteData(id) {
        if (confirm('You want to delete this')) {
            fetch(`${url}/offer/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getOffer()
                })
            })
        }
        return
    }


    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <CCardTitle>Offer Master</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm className="mb-2">
                    <div className="d-flex justify-content-between">
                        <div>

                        </div>
                        <div>
                            <CRow>
                                <CCol>
                                    <CButton className="ms-1 mt-2" onClick={() => setAction(!action)}>{action ? 'close' : 'Add New Offer'}</CButton>
                                </CCol>
                            </CRow>
                        </div>
                    </div>
                    {action &&
                        <div>
                            <CRow className='mt-3'>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select General Trainer"
                                        value={ServiceName}
                                        onChange={(e) => setServiceName(e.target.value)}
                                        label="Service Name"
                                    >
                                        <option>Select Service</option>
                                        {result.filter((list) => list.username === username)
                                            .map((item, index) => (
                                                <option key={index}>{item.selected_service}</option>
                                            ))}
                                    </CFormSelect>
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select General Trainer"
                                        value={ServiceVariation}
                                        onChange={(e) => setServiceVariation(e.target.value)}
                                        label="Service Variations"
                                    >
                                        <option>Select Variations</option>
                                        {result.filter((list) => list.username === username && list.selected_service === ServiceName)
                                            .map((item, index) => (
                                                <option key={index}>{item.sub_Service_Name}</option>
                                            ))}
                                    </CFormSelect>
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select General Trainer"
                                        value={ServiceDuration}
                                        onChange={(e) => setServiceDuration(e.target.value)}
                                        label="Service Duration"
                                    >
                                        <option>Select Duration</option>
                                        {result.filter((list) => list.username === username && list.selected_service === ServiceName && list.sub_Service_Name === ServiceVariation)
                                            .map((item, index) => (
                                                <option key={index}>{item.duration}</option>
                                            ))}
                                    </CFormSelect>
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select General Trainer"
                                        value={ServiceFees}
                                        onChange={(e) => setServiceFees(e.target.value)}
                                        label="Service Duration"
                                    >
                                        <option>Select Fees</option>
                                        {result.filter((list) => list.username === username && list.selected_service === ServiceName && list.sub_Service_Name === ServiceVariation)
                                            .map((item, index) => (
                                                <option key={index}>{item.fees}</option>
                                            ))}
                                    </CFormSelect>
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Deal Name"
                                        value={DealName}
                                        onChange={(e) => setDealName(e.target.value)}
                                        placeholder="Enter Deal Name"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="date"
                                        id="exampleFormControlInput1"
                                        label="Start Date"
                                        value={StartDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        placeholder="Enter Start Date"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="date"
                                        id="exampleFormControlInput1"
                                        label="End Date"
                                        value={EndDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        placeholder="Enter End Date"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        id="exampleFormControlInput1"
                                        label="Discount"
                                        value={Discount}
                                        onChange={(e) => { setDiscount(e.target.value), setNetFees(ServiceFees - (ServiceFees / 100 * Discount)) }}
                                        placeholder="Enter Discount"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Net Fees"
                                        value={NetFees}
                                        placeholder="Enter Discount"
                                    />
                                </CCol>
                            </CRow>

                            <CFormSwitch size="xl" label="Status" style={{ defaultChecked: 'false' }}
                                value={status}
                                onChange={() => setStatus(!status)} />
                            <CButton className="mt-2" onClick={() => createOffer()}>Save</CButton>
                        </div>
                    }
                </CForm>
                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow >
                            <CTableHeaderCell>Sr.No</CTableHeaderCell>
                            <CTableHeaderCell>Date</CTableHeaderCell>
                            <CTableHeaderCell>Service</CTableHeaderCell>
                            <CTableHeaderCell>Deal Name</CTableHeaderCell>
                            <CTableHeaderCell>Start Date</CTableHeaderCell>
                            <CTableHeaderCell>End Date</CTableHeaderCell>
                            <CTableHeaderCell>Services Variation</CTableHeaderCell>
                            <CTableHeaderCell>Services Duration</CTableHeaderCell>
                            <CTableHeaderCell>Services Fee</CTableHeaderCell>
                            <CTableHeaderCell>Discount Rate</CTableHeaderCell>
                            <CTableHeaderCell>Discount Value</CTableHeaderCell>
                            <CTableHeaderCell>Status</CTableHeaderCell>
                            <CTableHeaderCell>Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {result1.filter((list) => list.username === username).map((item, index) => (
                            <CTableRow key={index}>
                                <CTableDataCell>{index + 1}</CTableDataCell>
                                <CTableDataCell>{moment(item.createdAt).format("MM-DD-YYYY")}</CTableDataCell>
                                <CTableDataCell>{item.ServiceName}</CTableDataCell>
                                <CTableDataCell>{item.dealName}</CTableDataCell>
                                <CTableDataCell>{moment(item.startDate).format("MM-DD-YYYY")}</CTableDataCell>
                                <CTableDataCell>{moment(item.endDate).format("MM-DD-YYYY")}</CTableDataCell>
                                <CTableDataCell>{item.ServiceVariation}</CTableDataCell>
                                <CTableDataCell>{item.duration}</CTableDataCell>
                                <CTableDataCell>{item.fees}</CTableDataCell>
                                <CTableDataCell>{item.discount}%</CTableDataCell>
                                <CTableDataCell>{item.fees - (item.fees / 100 * item.discount)}</CTableDataCell>
                                <CTableDataCell><CFormSwitch size="xl" style={{ cursor: 'pointer' }} id={item._id} value={item.status} checked={item.status} onChange={() => updateStatus(item._id, !item.status)} /></CTableDataCell>
                                <CTableDataCell><MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' onClick={() => deleteData(item._id)} /> </CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard >
    );
};

export default OfferMarketing;