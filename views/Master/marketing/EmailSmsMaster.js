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
    CFormTextarea,
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
import { MdDelete, MdEdit } from "react-icons/md";
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const EmailSmsMaster = () => {
    const [action1, setAction1] = useState(false)
    const [updateId, setUpdateId] = useState('')
    const [title, setTitle] = useState('')
    const [smsContent, setSmsContent] = useState('')
    const [status, setStatus] = useState(false)

    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;
    const [result1, setResult1] = useState([]);
    const [paging, setPaging] = useState(0)
    const headers = {
        'Authorization': `Bearer ${token}`,
        'My-Custom-Header': 'foobar'
    };
    useEffect(() => {
        getTemplate()
    }, []);

    function getTemplate() {
        axios.get(`${url}/templateMaster/all`, {
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

    function createTemplate() {
        if (updateId != '') {
            if (title != '' && smsContent != '') {
                const data = {
                    username: username,
                    templateName: title,
                    content: smsContent,
                    Status: status,
                }
                axios.post(`${url}/templateMaster/update/${updateId}`, data, { headers })
                    .then((resp) => {
                        console.log(resp.data)
                        alert('Update Successfully')
                        getTemplate()
                        setAction1(false)
                        setTitle('')
                        setSmsContent('')
                        setStatus(false)
                        setUpdateId('')
                    })
                    .catch((error) => console.log(error))
            } else {
                alert('Enter all details')
            }
        } else {
            if (title != '' && smsContent != '') {
                const data = {
                    username: username,
                    templateName: title,
                    content: smsContent,
                    Status: status,
                }
                axios.post(`${url}/templateMaster/create`, data, { headers })
                    .then((resp) => {
                        console.log(resp.data)
                        alert('Successfully Added')
                        getTemplate()
                        setAction1(false)
                        setTitle('')
                        setSmsContent('')
                        setStatus(false)
                        setUpdateId('')
                    })
                    .catch((error) => console.log(error))
            } else {
                alert('Enter all details')
            }
        }
    }

    const updateStatus = (id, status) => {
        let item = { Status: status }
        fetch(`${url}/templateMaster/update/${id}`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                getTemplate()
            })
        })
    }

    function deleteData(id) {
        if (confirm('You want to delete this')) {
            fetch(`${url}/templateMaster/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getTemplate()
                })
            })
        }
        return
    }

    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <CCardTitle>Template</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm className="mb-2">
                    <div className="d-flex justify-content-between">
                        <div></div>
                        <div>
                            <CRow>
                                <CCol>
                                    <CButton className="ms-1 mt-2" onClick={() => setAction1(!action1)}>{action1 ? 'close' : 'Add Template'}</CButton>
                                </CCol>
                            </CRow>
                        </div>
                    </div>
                    {action1 &&
                        <div>
                            <CRow className='mt-3'>
                                <CCol lg={12} md={12} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="Enter Category"
                                    />
                                </CCol>
                                <CCol lg={12} md={12} sm={12}>

                                    <CFormTextarea
                                        id="exampleFormControlTextarea1"
                                        label="SMS Content"
                                        value={smsContent}
                                        onChange={(e) => setSmsContent(e.target.value)}
                                        rows="3"
                                        text="Must be 8-20 words long."
                                    ></CFormTextarea>
                                </CCol>
                                <CCol className="mt-2" lg={6} md={6} sm={12}>
                                    <CRow>
                                        <CCol>
                                            <CFormSwitch size="xl" label="Status" value={status} onChange={() => setStatus(!status)} style={{ defaultChecked: 'false' }} />
                                        </CCol>
                                    </CRow>

                                    <CButton className="mt-2" onClick={() => createTemplate()}>Save</CButton>
                                </CCol>
                            </CRow>
                        </div>
                    }
                </CForm>
                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow >
                            <CTableHeaderCell>Sr.No</CTableHeaderCell>
                            <CTableHeaderCell>Template Name</CTableHeaderCell>
                            <CTableHeaderCell>SMS Content</CTableHeaderCell>
                            <CTableHeaderCell>Status</CTableHeaderCell>
                            <CTableHeaderCell>Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {result1.slice(paging * 10, paging * 10 + 10).map((item, index) => (
                            item.username === username && (
                                <CTableRow key={index}>
                                    <CTableDataCell>{index + 1 + (paging * 10)}</CTableDataCell>
                                    <CTableDataCell>{item.templateName}</CTableDataCell>
                                    <CTableDataCell className="text-center">{item.content}</CTableDataCell>
                                    <CTableDataCell><CFormSwitch size="xl" style={{ cursor: 'pointer' }} id={item._id} value={item.Status} checked={item.Status} onChange={() => updateStatus(item._id, !item.Status)} /></CTableDataCell>
                                    <CTableDataCell><MdEdit style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => { setUpdateId(item._id), setTitle(item.templateName), setSmsContent(item.content), setStatus(item.Status), setAction1(true) }} /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteData(item._id)} size='20px' /> </CTableDataCell>
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

export default EmailSmsMaster;