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

const ExpressCategoryMaster = () => {
    const [action1, setAction1] = useState(false)
    const [Category, setCategory] = useState('')
    const [level, setLevel] = useState(0)
    const [level1, setLevel1] = useState('')
    const [level2, setLevel2] = useState('')

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
        getExpress()
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
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function getExpress() {
        axios.get(`${url}/expenseMaster/all`, {
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

    function createExpress() {
        if (Category != '') {
            const data = {
                username: username,
                CategoryName: Category,
                ApprovalLevel1: level1,
                ApprovalLevel2: level2,
            }
            axios.post(`${url}/expenseMaster/create`, data, { headers })
                .then((resp) => {
                    console.log(resp.data)
                    alert('Successfully Added')
                    getExpress()
                    setAction1(false)
                    setCategory('')
                    setLevel(0)
                    setLevel1('')
                    setLevel2('')
                })
                .catch((error) => console.log(error))
        } else {
            alert('enter lead Source')
        }
    }

    function deleteData(id) {
        if (confirm('You want to delete this')) {
            fetch(`${url}/expenseMaster/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getExpress()
                })
            })
        }
        return
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
                                    <CButton className="ms-1 mt-2" onClick={() => setAction1(!action1)}>{action1 ? 'close' : 'Add Express'}</CButton>
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
                                        value={Category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        placeholder="Enter Category"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>

                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Approval level"
                                        label="Approval level"
                                        value={level}
                                        onChange={(e) => setLevel(e.target.value)}
                                        options={[
                                            "Select Level",
                                            { label: "Level-0", value: "0" },
                                            { label: "Level-1", value: "1" },
                                            { label: "Level-2", value: "2" },
                                        ]}
                                    />
                                </CCol>
                                {level >= 1 &&
                                    <CCol lg={6} md={6} sm={12}>
                                        <CFormSelect
                                            className="mb-1"
                                            aria-label="Select Assign Staff"
                                            label="Approval level-1"
                                            value={level1}
                                            onChange={(e) => setLevel1(e.target.value)}
                                        >
                                            <option>Select Staff</option>
                                            {staff.filter((list) => list.username === username).map((item, index) => (
                                                item.username === username && (
                                                    <option key={index}>{item.FullName}</option>
                                                )
                                            ))}
                                        </CFormSelect>
                                    </CCol>
                                }
                                {level >= 2 &&
                                    <CCol lg={6} md={6} sm={12}>
                                        <CFormSelect
                                            className="mb-1"
                                            aria-label="Select Assign Staff"
                                            label="Approval level-2"
                                            value={level2}
                                            onChange={(e) => setLevel2(e.target.value)}
                                        >
                                            <option>Select Staff</option>
                                            {staff.filter((list) => list.username === username).map((item, index) => (
                                                item.username === username && (
                                                    <option key={index}>{item.FullName}</option>
                                                )
                                            ))}
                                        </CFormSelect>
                                    </CCol>
                                }
                                <CCol className="mt-2" lg={6} md={6} sm={12}>
                                    <CButton className="mt-2" onClick={() => createExpress()}>Save</CButton>
                                </CCol>
                            </CRow>
                        </div>
                    }
                </CForm>
                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow >
                            <CTableHeaderCell>Sr.No</CTableHeaderCell>
                            <CTableHeaderCell>Category</CTableHeaderCell>
                            <CTableHeaderCell>Level1</CTableHeaderCell>
                            <CTableHeaderCell>Level2</CTableHeaderCell>
                            <CTableHeaderCell>Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {result1.slice(paging * 10, paging * 10 + 10).map((item, index) => (
                            item.username === username && (
                                <CTableRow key={index}>
                                    <CTableDataCell>{index + 1 + (paging * 10)}</CTableDataCell>
                                    <CTableDataCell>{item.CategoryName}</CTableDataCell>
                                    <CTableDataCell>{item.ApprovalLevel1}</CTableDataCell>
                                    <CTableDataCell>{item.ApprovalLevel2}</CTableDataCell>
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

export default ExpressCategoryMaster;