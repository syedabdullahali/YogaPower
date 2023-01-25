import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CForm,
    CFormInput,
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
    CToast,
    CToastBody,
    CToastClose,
} from "@coreui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdCall, MdDelete, MdEdit, MdMail } from "react-icons/md";
const url = 'https://yog-api.herokuapp.com'

const AllSuppilerList = () => {
    const [action, setAction] = useState(false)
    const [toast, setToast] = useState(false)
    const [id, setId] = useState()
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('');
    const [address, setAddress] = useState('');
    const [company, setCompany] = useState('');
    const [result1, setResult1] = useState([])

    const [search1, setSearch1] = useState('')
    const [search2, setSearch2] = useState('')
    const [search3, setSearch3] = useState('')
    const [search4, setSearch4] = useState('')
    const [search5, setSearch5] = useState('')
    const [search6, setSearch6] = useState('')

    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;
    const centerCode = user.user.centerCode;
    const [paging, setPaging] = useState(0);
    useEffect(() => {
        getImpCall()
    }, [])

    function getImpCall() {
        axios.get(`${url}/suppilerCallList/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setResult1(res.data.reverse())
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const saveImpCall = () => {
        let data = {
            username: username,
            name: name, mobile: phone, email: email, category: category, address: address, company: company,
        }

        fetch(`${url}/suppilerCallList/create`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then(() => {
                setToast(true)
                setAction(false)
            })
        })
    }

    const saveUpdate = () => {
        let data1 = {
            username: username,
            name: name, mobile: phone, email: email, category: category, address: address, company: company,
        }

        fetch(`${url}/suppilerCallList/update/${id}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1)
        }).then((resp) => {
            resp.json().then(() => {
                alert("successfully submitted")
                setVisible(false)
            })
        })
    }

    function deleteCall(id) {

        if (confirm('Do you want to delete this')) {
            fetch(`${url}/suppilerCallList/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((result) => {
                result.json().then(() => {
                    getImpCall()
                })
            })
        }
    }

    const handleUpdate = (id) => {
        setId(id)
        getUpdate(id)
    }
    const clear = () => {
        setId('')
        setName('')
        setPhone('')
        setEmail('')
        setCategory('')
        setAddress('')
        setCompany('')
    }

    function getUpdate(id) {
        axios.get(`${url}/suppilerCallList/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setName(res.data.name)
                setPhone(res.data.phone)
                setEmail(res.data.email)
                setCategory(res.data.category)
                setAddress(res.data.address)
                setCompany(res.data.company)
                setAction(true)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (
        <CRow className='d-flex mb-2'>
            <CCol lg={9} sm={6} className='mb-2'>
                <CToast autohide={true} visible={toast} color='success' className="align-items-center">
                    <div className="d-flex">
                        <CToastBody style={{ color: 'white' }}>Successfully Submitted.</CToastBody>
                        <CToastClose className="me-2 m-auto" />
                    </div>
                </CToast>
            </CCol>
            <CCol lg={3} sm={6} className='mb-2'>
                <CButton className="float-end" onClick={() => { setAction(!action), clear() }}>{action ? 'Close' : 'Add New Suppiler'}</CButton>
            </CCol>
            {action &&

                <CCard className="mt-2 mb-2" >
                    <CCardBody>
                        <CForm>
                            <CRow>
                                <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        name="name"
                                        id="exampleFormControlInput1"
                                        label="Name "
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter Name"
                                    />
                                </CCol>

                                <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type='number'
                                        id="exampleFormControlInput1"
                                        label="Mobile Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Enter Mobile Number"
                                    />
                                </CCol>

                                <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type='email'
                                        id="exampleFormControlInput1"
                                        label="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter Email Address"
                                    />
                                </CCol>
                                <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type='text'
                                        id="exampleFormControlInput1"
                                        label="Category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        placeholder="Enter Category"
                                    />
                                </CCol>
                                <CCol lg={6} sm={12} >
                                    <CFormTextarea
                                        id="exampleFormControlTextarea1"
                                        label="Address"
                                        placeholder="Enter Address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        rows="2"
                                        text="Must be 8-20 words long."
                                    ></CFormTextarea>
                                </CCol>
                                <CCol lg={3} sm={6} >
                                    <CFormInput
                                        className="mb-1"
                                        type='text'
                                        id="exampleFormControlInput1"
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                        label="Company Name"
                                        placeholder="Enter Company Name"
                                    />
                                </CCol>
                                <CCol className="mt-4">
                                    {id
                                        ?
                                        <CButton onClick={() => saveUpdate()} >update</CButton>
                                        :
                                        <CButton onClick={() => { saveImpCall() }} >Save</CButton>
                                    }
                                </CCol>
                            </CRow>
                        </CForm>
                    </CCardBody>
                </CCard>
            }
            <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                    <CTableRow >
                        <CTableHeaderCell>Sr.No</CTableHeaderCell>
                        <CTableHeaderCell>Name</CTableHeaderCell>
                        <CTableHeaderCell>Mobile</CTableHeaderCell>
                        <CTableHeaderCell>Email</CTableHeaderCell>
                        <CTableHeaderCell>Address</CTableHeaderCell>
                        <CTableHeaderCell>Category</CTableHeaderCell>
                        <CTableHeaderCell>Company Name</CTableHeaderCell>
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
                                style={{ minWidth: "120px" }}
                                value={search1}
                                onChange={(e) => setSearch1(e.target.value)}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                style={{ minWidth: "120px" }}
                                value={search2}
                                onChange={(e) => setSearch2(e.target.value)}
                                type="number"
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                style={{ minWidth: "100px" }}
                                value={search3}
                                onChange={(e) => setSearch3(e.target.value)}
                                type="text"
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                style={{ minWidth: "200px" }}
                                value={search4}
                                onChange={(e) => setSearch4(e.target.value)}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                style={{ minWidth: "120px" }}
                                value={search5}
                                onChange={(e) => setSearch5(e.target.value)}
                                type="text"
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                        <CTableDataCell>
                            <CFormInput
                                className="mb-1"
                                style={{ minWidth: "120px" }}
                                value={search6}
                                onChange={(e) => setSearch6(e.target.value)}
                                type="text"
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
                                type="text"
                                style={{ minWidth: "120px" }}
                                disabled
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CTableDataCell>
                    </CTableRow>
                    {result1.slice(paging * 10, paging * 10 + 10).filter((list) =>
                        list.username === username && list.name.includes(search1) && list.mobile.toString().includes(search2.toString()) && list.email.includes(search3)
                        && list.address.includes(search4) && list.category.includes(search5) && list.company.includes(search6)
                    ).map((item, index) => (
                        <CTableRow key={index}>
                            <CTableDataCell>{index + 1 + (paging * 10)}</CTableDataCell>
                            <CTableDataCell>{item.name}</CTableDataCell>
                            <CTableDataCell>{item.mobile}</CTableDataCell>
                            <CTableDataCell>{item.email}</CTableDataCell>
                            <CTableDataCell>{item.address}</CTableDataCell>
                            <CTableDataCell>{item.category}</CTableDataCell>
                            <CTableDataCell>{item.company}</CTableDataCell>
                            <CTableDataCell className='text-center'><a href={`tel:${item.mobile}`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/${item.mobile}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto: ${item.email}`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a> </CTableDataCell>
                            <CTableDataCell className='text-center'><MdEdit id={item._id} style={{ fontSize: '35px', cursor: 'pointer', markerStart: '10px' }} onClick={() => handleUpdate(item._id)} size='20px' /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "5px" }} onClick={() => deleteCall(item._id)} size='20px' /></CTableDataCell>
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>
            <CPagination aria-label="Page navigation example" align="center" className='mt-2'>
                <CPaginationItem aria-label="Previous" disabled={paging != 0 ? false : true} onClick={() => paging > 0 && setPaging(paging - 1)}>
                    <span aria-hidden="true">&laquo;</span>
                </CPaginationItem>
                <CPaginationItem active onClick={() => setPaging(0)}>{paging + 1}</CPaginationItem>
                {result1.filter((list) =>
                    list.username === username && list.name.includes(search1) && list.mobile.toString().includes(search2.toString()) && list.email.includes(search3)
                    && list.address.includes(search4) && list.category.includes(search5) && list.company.includes(search6)
                ).length > (paging + 1) * 10 && <CPaginationItem onClick={() => setPaging(paging + 1)} >{paging + 2}</CPaginationItem>}

                {result1.filter((list) =>
                    list.username === username && list.name.includes(search1) && list.mobile.toString().includes(search2.toString()) && list.email.includes(search3)
                    && list.address.includes(search4) && list.category.includes(search5) && list.company.includes(search6)
                ).length > (paging + 2) * 10 && <CPaginationItem onClick={() => setPaging(paging + 2)}>{paging + 3}</CPaginationItem>}
                {result1.filter((list) =>
                    list.username === username && list.name.includes(search1) && list.mobile.toString().includes(search2.toString()) && list.email.includes(search3)
                    && list.address.includes(search4) && list.category.includes(search5) && list.company.includes(search6)
                ).length > (paging + 1) * 10 ?
                    <CPaginationItem aria-label="Next" onClick={() => setPaging(paging + 1)}>
                        <span aria-hidden="true">&raquo;</span>
                    </CPaginationItem>
                    : <CPaginationItem disabled aria-label="Next" onClick={() => setPaging(paging + 1)}>
                        <span aria-hidden="true">&raquo;</span>
                    </CPaginationItem>
                }
            </CPagination>
        </CRow>

    );
};


export default AllSuppilerList;