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
import { MdDelete } from "react-icons/md";
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const HRPolicy = () => {
    const [action, setAction] = useState(false)
    const [Title, setTitle] = useState('')
    const [Policy, setPolicy] = useState('')

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
        getPolicy()
    }, []);

    function getPolicy() {
        axios.get(`${url}/hrPolicyMaster/all`, {
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

    function createPolicy() {
        if (Title != '' && Policy != '') {
            const data = {
                username: username,
                Title, Policy,
            }
            axios.post(`${url}/hrPolicyMaster/create`, data, { headers })
                .then((resp) => {
                    console.log(resp.data)
                    alert('Successfully Added')
                    getPolicy()
                    setAction(false)
                    setTitle('')
                    setPolicy('')
                })
                .catch((error) => console.log(error))
        } else {
            alert('enter lead Source')
        }
    }

    function deleteData(id) {
        if (confirm('You want to delete this')) {
            fetch(`${url}/hrPolicyMaster/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getPolicy()
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
                        <CCardTitle className="mt-2">HR Policy Master</CCardTitle>
                    </CCardHeader>
                    <CCardBody>
                        <div className="d-flex justify-content-between">
                            <div></div>
                            <div>
                                <CRow>
                                    <CCol>
                                        <CButton className="ms-1 mt-2" onClick={() => setAction(!action)}>{action ? 'Close' : 'Add Policy'}</CButton>
                                    </CCol>
                                </CRow>
                            </div>
                        </div>
                        {action &&
                            <div>

                                <CRow className='d-flex mb-2'>
                                    <CCol lg={12} sm={12} className='mb-2'>
                                        <CFormInput
                                            type='text'
                                            placeholder="Title"
                                            value={Title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            label="Title"
                                            aria-label="Recipient's username"
                                            aria-describedby="button-addon2"
                                        />
                                    </CCol>
                                    <CCol lg={12} sm={12} className='mb-2'>
                                        <CFormTextarea
                                            id="exampleFormControlTextarea1"
                                            placeholder='Enter Policy'
                                            value={Policy}
                                            onChange={(e) => setPolicy(e.target.value)}
                                            label="Policy"
                                            rows="5"
                                            text="Must be 8-20 words long."
                                        ></CFormTextarea>
                                    </CCol>
                                </CRow>
                                <CButton type="button" color="primary" onClick={() => createPolicy()}>
                                    Save
                                </CButton>
                            </div>
                        }
                        <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                <CTableRow >
                                    <CTableHeaderCell>Sno.</CTableHeaderCell>
                                    <CTableHeaderCell>Title</CTableHeaderCell>
                                    <CTableHeaderCell>Policy</CTableHeaderCell>
                                    <CTableHeaderCell>Action</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>

                                {result1.slice(paging * 10, paging * 10 + 10).filter((list) =>
                                    list.username === username).map((item, index) => (
                                        <CTableRow key={index}>
                                            <CTableDataCell>{index + 1 + (paging * 10)}</CTableDataCell>
                                            <CTableDataCell>{item.Title}</CTableDataCell>
                                            <CTableDataCell>{item.Policy}</CTableDataCell>
                                            <CTableDataCell> <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' onClick={() => deleteData(item._id)} /> </CTableDataCell>
                                        </CTableRow>

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
            </CCol>
        </CRow>
    )
}

export default HRPolicy
