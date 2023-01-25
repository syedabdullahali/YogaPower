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
import moment from "moment";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const TaxSetupMaster = () => {
    const [action1, setAction1] = useState(false)
    const [name, setName] = useState('')
    const [tax, setTax] = useState('')
    const [status, setStatus] = useState(false)

    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;
    const [result1, setResult1] = useState([]);
    const [paging, setPaging] = useState(0);
    const headers = {
        'Authorization': `Bearer ${token}`,
        'My-Custom-Header': 'foobar'
    };
    useEffect(() => {
        getTax()
    }, []);

    function getTax() {
        axios.get(`${url}/taxMaster/all`, {
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

    function createTax() {
        if (name != '' && tax != '') {
            const data = {
                username: username,
                TaxName: name, Tax: tax, Status: status,
            }
            axios.post(`${url}/taxMaster/create`, data, { headers })
                .then((resp) => {
                    console.log(resp.data)
                    alert('Successfully Added')
                    getTax()
                    setAction1(false)
                    setName('')
                    setTax('')
                })
                .catch((error) => console.log(error))
        } else {
            alert('enter lead Source')
        }
    }
    const updateStatus = (id, status) => {
        let item = { Status: status }
        fetch(`${url}/taxMaster/update/${id}`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                getTax()
            })
        })
    }

    function deleteData(id) {
        if (confirm('You want to delete this')) {
            fetch(`${url}/taxMaster/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getTax()
                })
            })
        }
        return
    }

    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <CCardTitle>Tax Setup Master</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm className="mb-2">
                    <div className="d-flex justify-content-between">
                        <div></div>
                        <div>
                            <CRow>
                                <CCol>
                                    <CButton className="ms-1 mt-2" onClick={() => setAction1(!action1)}>{action1 ? 'close' : 'Add Tax'}</CButton>
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
                                        label="Tax Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter Tax Name"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Tax in %"
                                        value={tax}
                                        onChange={(e) => setTax(e.target.value)}
                                        placeholder="Enter Tax in %"
                                    />
                                </CCol>
                                <CCol className="mt-2" lg={6} md={6} sm={12}>
                                    <CRow>
                                        <CCol>
                                            <CFormSwitch size="xl" label="Status" value={status} onChange={() => setStatus(!status)} style={{ defaultChecked: 'false' }} />
                                        </CCol>
                                    </CRow>

                                    <CButton className="mt-2" onClick={() => createTax()}>Save</CButton>
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
                        {result1.slice(paging * 10, paging * 10 + 10).map((item, index) => (
                            item.username === username && (
                                <CTableRow key={index}>
                                    <CTableDataCell>{index + 1 + (paging * 10)}</CTableDataCell>
                                    <CTableDataCell>{moment(item.createdAt).format("MM-DD-YYYY")}</CTableDataCell>
                                    <CTableDataCell className="text-center">{item.TaxName}</CTableDataCell>
                                    <CTableDataCell>{item.Tax}</CTableDataCell>
                                    <CTableDataCell><CFormSwitch size="xl" style={{ cursor: 'pointer' }} id={item._id} value={item.Status} checked={item.Status} onChange={() => updateStatus(item._id, !item.Status)} /></CTableDataCell>
                                    <CTableDataCell> <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteData(item._id)} size='20px' /> </CTableDataCell>
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

export default TaxSetupMaster;