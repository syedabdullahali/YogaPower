import React, { useEffect, useState } from 'react'
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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleBottom, cilArrowCircleTop, cilInfo } from '@coreui/icons'
import { MdCall, MdDelete, MdEdit, MdMail } from 'react-icons/md';
import { BsPlusCircle, BsWhatsapp } from 'react-icons/bs';
import axios from 'axios';
import moment from 'moment';
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'


const AllEmpProfile = () => {

    const [Search1, setSearch1] = useState('')
    const [Search2, setSearch2] = useState('')
    const [Search3, setSearch3] = useState('')
    const [Search4, setSearch4] = useState('')
    const [Search5, setSearch5] = useState('')
    const [Search6, setSearch6] = useState('')
    const [Search7, setSearch7] = useState('')
    const [Search8, setSearch8] = useState('')
    const [Search9, setSearch9] = useState('')
    const [Search10, setSearch10] = useState('')


    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;
    const centerCode = user.user.centerCode;
    const [result1, setResult1] = useState([]);
    const [paging, setPaging] = useState(0);
    console.log(token);
    useEffect(() => {
        getStaff()
    }, [])

    const [staff, setStaff] = useState([])
    function getStaff() {
        axios.get(`${url}/employeeForm/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setStaff(res.data.reverse())
            })
            .catch((error) => {
                console.error(error)
            })
    }
    console.log(staff);

    function deleteEnquiry(id) {

        if (confirm('Do you want to delete this')) {
            fetch(`${url}/employeeForm/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getStaff()
                })
            })
        }
    }

    function updateRec(id, status) {
        const data1 = { status: status }
        fetch(`${url}/employeeForm/update/${id}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1)
        }).then((resp) => {
            resp.json().then(() => {
                getStaff()
            })
        })
    }

    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className="mb-3 border-success">
                    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                        <CCardTitle className="mt-2">All Employee Profile</CCardTitle>
                    </CCardHeader>
                    <CCardBody>
                        <CRow className='d-flex mb-2'>
                            <CCol lg={6} sm={12} className='mb-2'>
                                <CButtonGroup role="group" aria-label="Basic example">
                                    <CButton color="dark" variant="outline" style={{ fontSize: '13px' }}>Total Employee: {staff.filter((list) => list.username === username).length}</CButton>
                                    <CButton color="dark" variant="outline" style={{ fontSize: '13px' }}>Active Employee: {staff.filter((list) => list.username === username && list.status === true).length}</CButton>
                                    <CButton color="dark" variant="outline" style={{ fontSize: '13px' }}>Left Employee: {staff.filter((list) => list.username === username && list.status === false).length}</CButton>
                                </CButtonGroup>
                            </CCol>
                            <CCol lg={3}></CCol>
                            <CCol lg={3} sm={12}>
                                <CButtonGroup className='float-end'>
                                    <CButton color="primary">
                                        <CIcon icon={cilArrowCircleBottom} />
                                        {' '}Import
                                    </CButton>
                                    <CButton color="primary">
                                        <CIcon icon={cilArrowCircleTop} />
                                        {' '}Export
                                    </CButton>
                                </CButtonGroup>
                            </CCol>
                        </CRow>
                        <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                <CTableRow >
                                    <CTableHeaderCell>Sr.No</CTableHeaderCell>
                                    <CTableHeaderCell>Name</CTableHeaderCell>
                                    <CTableHeaderCell>Mobile</CTableHeaderCell>
                                    <CTableHeaderCell>Email-ID</CTableHeaderCell>
                                    <CTableHeaderCell>Date Of Birth</CTableHeaderCell>
                                    <CTableHeaderCell>Gender</CTableHeaderCell>
                                    <CTableHeaderCell>Employee Id</CTableHeaderCell>
                                    <CTableHeaderCell>Location</CTableHeaderCell>
                                    <CTableHeaderCell>Source</CTableHeaderCell>
                                    <CTableHeaderCell>Department</CTableHeaderCell>
                                    <CTableHeaderCell>Designation</CTableHeaderCell>
                                    <CTableHeaderCell>Exp Salary</CTableHeaderCell>
                                    <CTableHeaderCell>Grade</CTableHeaderCell>
                                    <CTableHeaderCell>Comment</CTableHeaderCell>
                                    <CTableHeaderCell>Status</CTableHeaderCell>
                                    <CTableHeaderCell>Resume</CTableHeaderCell>
                                    <CTableHeaderCell>Action</CTableHeaderCell>
                                    <CTableHeaderCell>Edit</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "60px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "90px" }}
                                            value={Search1}
                                            onChange={(e) => setSearch1(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "120px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="number"
                                            style={{ minWidth: "100px" }}
                                            value={Search10}

                                            onChange={(e) => setSearch10(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "120px" }}
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "120px" }}
                                            value={Search2}
                                            onChange={(e) => setSearch2(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            value={Search3}
                                            disabled
                                            onChange={(e) => setSearch3(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "180px" }}
                                            value={Search4}
                                            onChange={(e) => setSearch4(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "100px" }}
                                            value={Search5}
                                            onChange={(e) => setSearch5(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "100px" }}
                                            value={Search6}
                                            onChange={(e) => setSearch6(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "100px" }}
                                            type="text"
                                            value={Search7}
                                            onChange={(e) => setSearch7(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "80px" }}
                                            type="number"
                                            value={Search9}
                                            onChange={(e) => setSearch9(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "50px" }}
                                            value={Search8}
                                            onChange={(e) => setSearch8(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            value={Search9}
                                            style={{ minWidth: "120px" }}
                                            disabled
                                            onChange={(e) => setSearch9(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "80px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "70px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "100px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "70px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                </CTableRow>
                                {staff.slice(paging * 10, paging * 10 + 10).filter((list) =>
                                    list.username === username && list.selected === 'Select' && list.FullName.toLowerCase().includes(Search1.toLowerCase()) && list.EmailAddress.toLowerCase().includes(Search2.toLowerCase())
                                    && list.Gander.toLowerCase().includes(Search3.toLowerCase()) && list.address.toLowerCase().includes(Search4.toLowerCase()) && list.PayoutType.toLowerCase().includes(Search5.toLowerCase())
                                    && list.Department.toLowerCase().includes(Search6.toLowerCase()) && list.JobDesignation.toLowerCase().includes(Search7.toLowerCase()) && list.Grade.toLowerCase().includes(Search8.toLowerCase())
                                    && list.Salary.toString().includes(Search9.toString()) && list.ContactNumber.toString().includes(Search10.toString())
                                ).map((item, index) => (
                                    item.username === username && (
                                        <CTableRow key={index}>
                                            <CTableDataCell>{index + 1 + (paging * 10)}</CTableDataCell>
                                            <CTableDataCell>{item.FullName}</CTableDataCell>
                                            <CTableDataCell>{item.ContactNumber}</CTableDataCell>
                                            <CTableDataCell>{item.EmailAddress}</CTableDataCell>
                                            <CTableDataCell>{moment(item.DateofBirth).format("MM-DD-YYYY")}</CTableDataCell>
                                            <CTableDataCell>{item.Gander}</CTableDataCell>
                                            <CTableDataCell>{centerCode}E{index + 1 + (paging * 10)}</CTableDataCell>
                                            <CTableDataCell>{item.address}</CTableDataCell>
                                            <CTableDataCell>{item.PayoutType}</CTableDataCell>
                                            <CTableDataCell>{item.Department}</CTableDataCell>
                                            <CTableDataCell>{item.JobDesignation}</CTableDataCell>
                                            <CTableDataCell>{item.Salary}</CTableDataCell>
                                            <CTableDataCell>{item.Grade}</CTableDataCell>
                                            <CTableDataCell>{item.Comment}</CTableDataCell>
                                            <CTableDataCell>{item.status ? <><CButton className='mt-1' color='success' onClick={() => updateRec(item._id, false)} >Active</CButton></> : <CButton className='mt-1' color='danger' onClick={() => updateRec(item._id, true)}>Inactive</CButton>}</CTableDataCell>
                                            <CTableDataCell><CButton>View</CButton></CTableDataCell>
                                            <CTableDataCell className='text-center'><a href={`tel:${item.ContactNumber}`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/${item.ContactNumber}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto: ${item.EmailAddress}`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a></CTableDataCell>
                                            <CTableDataCell className='text-center'><MdDelete style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "5px" }} onClick={() => deleteEnquiry(item._id)} size='20px' /></CTableDataCell>
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
                        {staff.filter((list) =>
                            list.username === username && list.selected === 'Select' && list.FullName.toLowerCase().includes(Search1.toLowerCase()) && list.EmailAddress.toLowerCase().includes(Search2.toLowerCase())
                            && list.Gander.toLowerCase().includes(Search3.toLowerCase()) && list.address.toLowerCase().includes(Search4.toLowerCase()) && list.PayoutType.toLowerCase().includes(Search5.toLowerCase())
                            && list.Department.toLowerCase().includes(Search6.toLowerCase()) && list.JobDesignation.toLowerCase().includes(Search7.toLowerCase()) && list.Grade.toLowerCase().includes(Search8.toLowerCase())
                            && list.Salary.toString().includes(Search9.toString()) && list.ContactNumber.toString().includes(Search10.toString())
                        ).length > (paging + 1) * 10 && <CPaginationItem onClick={() => setPaging(paging + 1)} >{paging + 2}</CPaginationItem>}

                        {staff.filter((list) =>
                            list.username === username && list.selected === 'Select' && list.FullName.toLowerCase().includes(Search1.toLowerCase()) && list.EmailAddress.toLowerCase().includes(Search2.toLowerCase())
                            && list.Gander.toLowerCase().includes(Search3.toLowerCase()) && list.address.toLowerCase().includes(Search4.toLowerCase()) && list.PayoutType.toLowerCase().includes(Search5.toLowerCase())
                            && list.Department.toLowerCase().includes(Search6.toLowerCase()) && list.JobDesignation.toLowerCase().includes(Search7.toLowerCase()) && list.Grade.toLowerCase().includes(Search8.toLowerCase())
                            && list.Salary.toString().includes(Search9.toString()) && list.ContactNumber.toString().includes(Search10.toString())
                        ).length > (paging + 2) * 10 && <CPaginationItem onClick={() => setPaging(paging + 2)}>{paging + 3}</CPaginationItem>}
                        {staff.filter((list) =>
                            list.username === username && list.selected === 'Select' && list.FullName.toLowerCase().includes(Search1.toLowerCase()) && list.EmailAddress.toLowerCase().includes(Search2.toLowerCase())
                            && list.Gander.toLowerCase().includes(Search3.toLowerCase()) && list.address.toLowerCase().includes(Search4.toLowerCase()) && list.PayoutType.toLowerCase().includes(Search5.toLowerCase())
                            && list.Department.toLowerCase().includes(Search6.toLowerCase()) && list.JobDesignation.toLowerCase().includes(Search7.toLowerCase()) && list.Grade.toLowerCase().includes(Search8.toLowerCase())
                            && list.Salary.toString().includes(Search9.toString()) && list.ContactNumber.toString().includes(Search10.toString())
                        ).length > (paging + 1) * 10 ?
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

export default AllEmpProfile
