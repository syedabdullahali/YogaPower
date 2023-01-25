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

const StockReport = () => {
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
    const [search7, setSearch7] = useState('')
    const [search8, setSearch8] = useState('')
    const [search9, setSearch9] = useState('')
    const [search10, setSearch10] = useState('')

    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;
    const centerCode = user.user.centerCode;
    useEffect(() => {
        getImpCall()
    }, [])

    function getImpCall() {
        axios.get(`${url}/stockListing/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setResult1(res.data)
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error)
            })
    }


    function deleteCall(id) {

        if (confirm('Do you want to delete this')) {
            fetch(`${url}/stockListing/delete/${id}`, {
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
        axios.get(`${url}/stockListing/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setName(res.data.productName)
                setPhone(res.data.brandName)
                setEmail(res.data.category)
                setCategory(res.data.color)
                setAddress(res.data.productPrice)
                setCompany(res.data.totalStock)
                setAction(true)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (
        <CCard>
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <CCardTitle>Stock Report</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow >
                            <CTableHeaderCell>Sr.No</CTableHeaderCell>
                            <CTableHeaderCell>Product Code</CTableHeaderCell>
                            <CTableHeaderCell>Product Name</CTableHeaderCell>
                            <CTableHeaderCell>Brand Name</CTableHeaderCell>
                            <CTableHeaderCell>Category</CTableHeaderCell>
                            <CTableHeaderCell>Colour</CTableHeaderCell>
                            <CTableHeaderCell>Price</CTableHeaderCell>
                            <CTableHeaderCell>Total Stock</CTableHeaderCell>
                            <CTableHeaderCell>Sold</CTableHeaderCell>
                            <CTableHeaderCell>AVL Stock</CTableHeaderCell>
                            <CTableHeaderCell>Sold By</CTableHeaderCell>
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
                                    disabled
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
                                    type="text"
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
                                    type="number"
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    style={{ minWidth: "120px" }}
                                    type="number"
                                    disabled
                                    value={search7}
                                    onChange={(e) => setSearch7(e.target.value)}
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    type="number"
                                    style={{ minWidth: "120px" }}
                                    disabled
                                    value={search8}
                                    onChange={(e) => setSearch8(e.target.value)}
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    type="number"
                                    style={{ minWidth: "120px" }}
                                    disabled
                                    value={search9}
                                    onChange={(e) => setSearch9(e.target.value)}
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    type="text"
                                    style={{ minWidth: "120px" }}
                                    disabled
                                    value={search10}
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
                                    disabled
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                        </CTableRow>
                        {result1.filter((list) =>
                            list.username === username && list.productName.includes(search2) && list.brandName.includes(search3) && list.category.includes(search4) && list.color.includes(search5) &&
                            list.productPrice.toString().includes(search6.toString())
                        ).map((item, index) => (
                            <CTableRow key={index}>
                                <CTableDataCell>{index + 1}</CTableDataCell>
                                <CTableDataCell>{item.productCode}</CTableDataCell>
                                <CTableDataCell>{item.productName}</CTableDataCell>
                                <CTableDataCell>{item.brandName}</CTableDataCell>
                                <CTableDataCell>{item.category}</CTableDataCell>
                                <CTableDataCell>{item.color}</CTableDataCell>
                                <CTableDataCell>{item.productPrice}</CTableDataCell>
                                <CTableDataCell>{item.totalStock}</CTableDataCell>
                                <CTableDataCell>{item.sold}</CTableDataCell>
                                <CTableDataCell>{item.available}</CTableDataCell>
                                <CTableDataCell>{item.soldBy}</CTableDataCell>
                                <CTableDataCell className='text-center'><a href={`tel:${item.mobile}`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/${item.mobile}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto: ${item.email}`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a> </CTableDataCell>
                                <CTableDataCell className='text-center'><MdEdit id={item._id} style={{ fontSize: '35px', cursor: 'pointer', markerStart: '10px' }} onClick={() => handleUpdate(item._id)} size='20px' /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "5px" }} onClick={() => deleteCall(item._id)} size='20px' /></CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>

                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow >
                            <CTableHeaderCell>Sr.No</CTableHeaderCell>
                            <CTableHeaderCell>Product Code</CTableHeaderCell>
                            <CTableHeaderCell>Product Name</CTableHeaderCell>
                            <CTableHeaderCell>Brand Name</CTableHeaderCell>
                            <CTableHeaderCell>Category</CTableHeaderCell>
                            <CTableHeaderCell>Colour</CTableHeaderCell>
                            <CTableHeaderCell>Price</CTableHeaderCell>
                            <CTableHeaderCell>Total Stock</CTableHeaderCell>
                            <CTableHeaderCell>Sold</CTableHeaderCell>
                            <CTableHeaderCell>AVL Stock</CTableHeaderCell>
                            <CTableHeaderCell>Sold By</CTableHeaderCell>
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
                                    disabled
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
                                    type="text"
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
                                    type="number"
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    style={{ minWidth: "120px" }}
                                    type="number"
                                    disabled
                                    value={search7}
                                    onChange={(e) => setSearch7(e.target.value)}
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    type="number"
                                    style={{ minWidth: "120px" }}
                                    disabled
                                    value={search8}
                                    onChange={(e) => setSearch8(e.target.value)}
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    type="number"
                                    style={{ minWidth: "120px" }}
                                    disabled
                                    value={search9}
                                    onChange={(e) => setSearch9(e.target.value)}
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    type="text"
                                    style={{ minWidth: "120px" }}
                                    disabled
                                    value={search10}
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
                                    disabled
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                        </CTableRow>
                        {result1.filter((list) =>
                            list.username === username && list.productName.includes(search2) && list.brandName.includes(search3) && list.category.includes(search4) && list.color.includes(search5) &&
                            list.productPrice.toString().includes(search6.toString())
                        ).map((item, index) => (
                            <CTableRow key={index}>
                                <CTableDataCell>{index + 1}</CTableDataCell>
                                <CTableDataCell>{item.productCode}</CTableDataCell>
                                <CTableDataCell>{item.productName}</CTableDataCell>
                                <CTableDataCell>{item.brandName}</CTableDataCell>
                                <CTableDataCell>{item.category}</CTableDataCell>
                                <CTableDataCell>{item.color}</CTableDataCell>
                                <CTableDataCell>{item.productPrice}</CTableDataCell>
                                <CTableDataCell>{item.totalStock}</CTableDataCell>
                                <CTableDataCell>{item.sold}</CTableDataCell>
                                <CTableDataCell>{item.available}</CTableDataCell>
                                <CTableDataCell>{item.soldBy}</CTableDataCell>
                                <CTableDataCell className='text-center'><a href={`tel:${item.mobile}`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/${item.mobile}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto: ${item.email}`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a> </CTableDataCell>
                                <CTableDataCell className='text-center'><MdEdit id={item._id} style={{ fontSize: '35px', cursor: 'pointer', markerStart: '10px' }} onClick={() => handleUpdate(item._id)} size='20px' /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "5px" }} onClick={() => deleteCall(item._id)} size='20px' /></CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>

                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow >
                            <CTableHeaderCell>Sr.No</CTableHeaderCell>
                            <CTableHeaderCell>Product Code</CTableHeaderCell>
                            <CTableHeaderCell>Product Name</CTableHeaderCell>
                            <CTableHeaderCell>Brand Name</CTableHeaderCell>
                            <CTableHeaderCell>Category</CTableHeaderCell>
                            <CTableHeaderCell>Colour</CTableHeaderCell>
                            <CTableHeaderCell>Price</CTableHeaderCell>
                            <CTableHeaderCell>Total Stock</CTableHeaderCell>
                            <CTableHeaderCell>Sold</CTableHeaderCell>
                            <CTableHeaderCell>AVL Stock</CTableHeaderCell>
                            <CTableHeaderCell>Sold By</CTableHeaderCell>
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
                                    disabled
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
                                    type="text"
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
                                    type="number"
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    style={{ minWidth: "120px" }}
                                    type="number"
                                    disabled
                                    value={search7}
                                    onChange={(e) => setSearch7(e.target.value)}
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    type="number"
                                    style={{ minWidth: "120px" }}
                                    disabled
                                    value={search8}
                                    onChange={(e) => setSearch8(e.target.value)}
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    type="number"
                                    style={{ minWidth: "120px" }}
                                    disabled
                                    value={search9}
                                    onChange={(e) => setSearch9(e.target.value)}
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    type="text"
                                    style={{ minWidth: "120px" }}
                                    disabled
                                    value={search10}
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
                                    disabled
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                        </CTableRow>
                        {result1.filter((list) =>
                            list.username === username && list.productName.includes(search2) && list.brandName.includes(search3) && list.category.includes(search4) && list.color.includes(search5) &&
                            list.productPrice.toString().includes(search6.toString())
                        ).map((item, index) => (
                            <CTableRow key={index}>
                                <CTableDataCell>{index + 1}</CTableDataCell>
                                <CTableDataCell>{item.productCode}</CTableDataCell>
                                <CTableDataCell>{item.productName}</CTableDataCell>
                                <CTableDataCell>{item.brandName}</CTableDataCell>
                                <CTableDataCell>{item.category}</CTableDataCell>
                                <CTableDataCell>{item.color}</CTableDataCell>
                                <CTableDataCell>{item.productPrice}</CTableDataCell>
                                <CTableDataCell>{item.totalStock}</CTableDataCell>
                                <CTableDataCell>{item.sold}</CTableDataCell>
                                <CTableDataCell>{item.available}</CTableDataCell>
                                <CTableDataCell>{item.soldBy}</CTableDataCell>
                                <CTableDataCell className='text-center'><a href={`tel:${item.mobile}`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/${item.mobile}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto: ${item.email}`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a> </CTableDataCell>
                                <CTableDataCell className='text-center'><MdEdit id={item._id} style={{ fontSize: '35px', cursor: 'pointer', markerStart: '10px' }} onClick={() => handleUpdate(item._id)} size='20px' /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "5px" }} onClick={() => deleteCall(item._id)} size='20px' /></CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>

                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow >
                            <CTableHeaderCell>Sr.No</CTableHeaderCell>
                            <CTableHeaderCell>Product Code</CTableHeaderCell>
                            <CTableHeaderCell>Product Name</CTableHeaderCell>
                            <CTableHeaderCell>Brand Name</CTableHeaderCell>
                            <CTableHeaderCell>Category</CTableHeaderCell>
                            <CTableHeaderCell>Colour</CTableHeaderCell>
                            <CTableHeaderCell>Price</CTableHeaderCell>
                            <CTableHeaderCell>Total Stock</CTableHeaderCell>
                            <CTableHeaderCell>Sold</CTableHeaderCell>
                            <CTableHeaderCell>AVL Stock</CTableHeaderCell>
                            <CTableHeaderCell>Sold By</CTableHeaderCell>
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
                                    disabled
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
                                    type="text"
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
                                    type="number"
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    style={{ minWidth: "120px" }}
                                    type="number"
                                    disabled
                                    value={search7}
                                    onChange={(e) => setSearch7(e.target.value)}
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    type="number"
                                    style={{ minWidth: "120px" }}
                                    disabled
                                    value={search8}
                                    onChange={(e) => setSearch8(e.target.value)}
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    type="number"
                                    style={{ minWidth: "120px" }}
                                    disabled
                                    value={search9}
                                    onChange={(e) => setSearch9(e.target.value)}
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    type="text"
                                    style={{ minWidth: "120px" }}
                                    disabled
                                    value={search10}
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
                                    disabled
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                        </CTableRow>
                        {result1.filter((list) =>
                            list.username === username && list.productName.includes(search2) && list.brandName.includes(search3) && list.category.includes(search4) && list.color.includes(search5) &&
                            list.productPrice.toString().includes(search6.toString())
                        ).map((item, index) => (
                            <CTableRow key={index}>
                                <CTableDataCell>{index + 1}</CTableDataCell>
                                <CTableDataCell>{item.productCode}</CTableDataCell>
                                <CTableDataCell>{item.productName}</CTableDataCell>
                                <CTableDataCell>{item.brandName}</CTableDataCell>
                                <CTableDataCell>{item.category}</CTableDataCell>
                                <CTableDataCell>{item.color}</CTableDataCell>
                                <CTableDataCell>{item.productPrice}</CTableDataCell>
                                <CTableDataCell>{item.totalStock}</CTableDataCell>
                                <CTableDataCell>{item.sold}</CTableDataCell>
                                <CTableDataCell>{item.available}</CTableDataCell>
                                <CTableDataCell>{item.soldBy}</CTableDataCell>
                                <CTableDataCell className='text-center'><a href={`tel:${item.mobile}`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/${item.mobile}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto: ${item.email}`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a> </CTableDataCell>
                                <CTableDataCell className='text-center'><MdEdit id={item._id} style={{ fontSize: '35px', cursor: 'pointer', markerStart: '10px' }} onClick={() => handleUpdate(item._id)} size='20px' /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "5px" }} onClick={() => deleteCall(item._id)} size='20px' /></CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>

                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow >
                            <CTableHeaderCell>Sr.No</CTableHeaderCell>
                            <CTableHeaderCell>Product Code</CTableHeaderCell>
                            <CTableHeaderCell>Product Name</CTableHeaderCell>
                            <CTableHeaderCell>Brand Name</CTableHeaderCell>
                            <CTableHeaderCell>Category</CTableHeaderCell>
                            <CTableHeaderCell>Colour</CTableHeaderCell>
                            <CTableHeaderCell>Price</CTableHeaderCell>
                            <CTableHeaderCell>Total Stock</CTableHeaderCell>
                            <CTableHeaderCell>Sold</CTableHeaderCell>
                            <CTableHeaderCell>AVL Stock</CTableHeaderCell>
                            <CTableHeaderCell>Sold By</CTableHeaderCell>
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
                                    disabled
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
                                    type="text"
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
                                    type="number"
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    style={{ minWidth: "120px" }}
                                    type="number"
                                    disabled
                                    value={search7}
                                    onChange={(e) => setSearch7(e.target.value)}
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    type="number"
                                    style={{ minWidth: "120px" }}
                                    disabled
                                    value={search8}
                                    onChange={(e) => setSearch8(e.target.value)}
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    type="number"
                                    style={{ minWidth: "120px" }}
                                    disabled
                                    value={search9}
                                    onChange={(e) => setSearch9(e.target.value)}
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    type="text"
                                    style={{ minWidth: "120px" }}
                                    disabled
                                    value={search10}
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
                                    disabled
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                        </CTableRow>
                        {result1.filter((list) =>
                            list.username === username && list.productName.includes(search2) && list.brandName.includes(search3) && list.category.includes(search4) && list.color.includes(search5) &&
                            list.productPrice.toString().includes(search6.toString())
                        ).map((item, index) => (
                            <CTableRow key={index}>
                                <CTableDataCell>{index + 1}</CTableDataCell>
                                <CTableDataCell>{item.productCode}</CTableDataCell>
                                <CTableDataCell>{item.productName}</CTableDataCell>
                                <CTableDataCell>{item.brandName}</CTableDataCell>
                                <CTableDataCell>{item.category}</CTableDataCell>
                                <CTableDataCell>{item.color}</CTableDataCell>
                                <CTableDataCell>{item.productPrice}</CTableDataCell>
                                <CTableDataCell>{item.totalStock}</CTableDataCell>
                                <CTableDataCell>{item.sold}</CTableDataCell>
                                <CTableDataCell>{item.available}</CTableDataCell>
                                <CTableDataCell>{item.soldBy}</CTableDataCell>
                                <CTableDataCell className='text-center'><a href={`tel:${item.mobile}`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/${item.mobile}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto: ${item.email}`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} size='20px' /></a> </CTableDataCell>
                                <CTableDataCell className='text-center'><MdEdit id={item._id} style={{ fontSize: '35px', cursor: 'pointer', markerStart: '10px' }} onClick={() => handleUpdate(item._id)} size='20px' /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "5px" }} onClick={() => deleteCall(item._id)} size='20px' /></CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>

            </CCardBody>
        </CCard>

    );
};


export default StockReport;