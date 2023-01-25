import React, { useEffect, useState } from 'react'
import {
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
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
import { cilArrowCircleBottom, cilArrowCircleTop, cilPlus } from '@coreui/icons'
import { MdDelete } from 'react-icons/md'
import axios from 'axios'
import moment from 'moment'
import ViewInvoice from 'src/components/ViewInvoice'
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const TotalInvoice = () => {
    const [select, setSelected] = useState('')
    const [search, setSearch] = useState('')
    const [viewInvoice, setViewInvoice] = useState(false);


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
    const [Search11, setSearch11] = useState('')

    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;
    const centerCode = user.user.centerCode;
    const [result1, setResult1] = useState([]);
    const [paging, setPaging] = useState(0);
    const headers = {
        'Authorization': `Bearer ${token}`,
        'My-Custom-Header': 'foobar'
    };
    useEffect(() => {
        getInvoice()
    }, []);

    function getInvoice() {
        axios.get(`${url}/invoice/all`, {
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

    const updateStatus = (id, status) => {
        let item = { status: status }
        fetch(`${url}/invoice/update/${id}`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                getInvoice()
            })
        })
    }

    const [invId, setinvId] = useState()
    const [cliId, setCliId] = useState()
    function handleInvoice(inId, clId) {
        console.log(inId)
        console.log(clId)
        setinvId(null)
        setCliId(null)
        if (inId && clId != null) {
            axios.get(`${url}/invoice/${inId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((res) => {
                    console.log(res.data)
                    setinvId(res.data)
                })
                .catch((error) => {
                    console.error(error)
                })
            axios.get(`${url}/memberForm/${clId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((res) => {
                    console.log(res.data)
                    setCliId(res.data)

                    if (invId != null && res.data != null) {
                        setViewInvoice(true)
                    }
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }


    function deleteData(id) {
        if (confirm('You want to delete this')) {
            fetch(`${url}/invoice/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getInvoice()
                })
            })
        }
        return
    }
    console.log(select);


    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>
                    <CCardHeader>
                        <strong className="mt-2">Total Invoice</strong>
                    </CCardHeader>
                    <CCardBody>

                        {viewInvoice &&
                            <ViewInvoice add={viewInvoice} clickfun={() => setViewInvoice(false)} invoiceId={invId} clientId={cliId} />
                        }
                        <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                <CTableRow>
                                    <CTableHeaderCell scope="col">Sr No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">MemberID</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Member Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                        Invoice No
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Services</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Start Date</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                        End Date
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Counseller</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Amonut</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Tax</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Paid</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Pending</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Pay Mode</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
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
                                            value={Search1}
                                            onChange={(e) => setSearch1(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "90px" }}
                                            value={Search2}
                                            onChange={(e) => setSearch2(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "120px" }}
                                            value={Search3}
                                            onChange={(e) => setSearch3(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "120px" }}
                                            value={Search4}
                                            disabled
                                            onChange={(e) => setSearch4(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            value={Search5}
                                            disabled
                                            style={{ minWidth: "120px" }}
                                            onChange={(e) => setSearch5(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "120px" }}
                                            value={Search6}
                                            onChange={(e) => setSearch6(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "100px" }}
                                            value={Search7}
                                            onChange={(e) => setSearch7(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "100px" }}
                                            value={Search8}
                                            onChange={(e) => setSearch8(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "100px" }}
                                            value={Search9}
                                            onChange={(e) => setSearch9(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            value={Search10}
                                            style={{ minWidth: "100px" }}
                                            onChange={(e) => setSearch10(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            value={Search11}
                                            style={{ minWidth: "100px" }}
                                            onChange={(e) => setSearch11(e.target.value)}
                                            type="text"
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
                                            style={{ minWidth: "100px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                </CTableRow>
                                {result1.slice(paging * 10, paging * 10 + 10).filter((list) => list.username === username && list.MemberName.toLowerCase().includes(Search1.toLowerCase()) && list.InvoiceNo.toLowerCase().includes(Search2.toLowerCase())
                                    && list.ServiceName.toLowerCase().includes(Search3.toLowerCase()) && list.counseller.toLowerCase().includes(Search6.toLowerCase()) && list.totalAmount.toString().includes(Search7.toString())
                                    && list.tax.toString().includes(Search8.toString()) && list.paidAmount.toString().includes(Search9.toString()) && list.pendingAmount.toString().includes(Search10.toString())
                                    && list.paymode.toLowerCase().includes(Search11.toLowerCase())
                                )
                                    .map((item, index) => (
                                        <CTableRow key={index}>
                                            <CTableHeaderCell>{index + 1 + (paging * 10)}</CTableHeaderCell>
                                            <CTableDataCell>{centerCode}MEM{index + 1 + (paging * 10)}</CTableDataCell>
                                            <CTableDataCell>{item.MemberName}</CTableDataCell>
                                            <CTableDataCell><label style={{ cursor: 'pointer' }} onClick={() => { setinvId(item._id), setCliId(item.MemberId), handleInvoice(item._id, item.MemberId) }}>{item.InvoiceNo}</label> </CTableDataCell>
                                            <CTableDataCell>{item.ServiceName}</CTableDataCell>
                                            <CTableDataCell>{moment(item.startDate).format("MM-DD-YYYY")}</CTableDataCell>
                                            <CTableDataCell>{moment(item.endDate).format("MM-DD-YYYY")}</CTableDataCell>
                                            <CTableDataCell>{item.counseller}</CTableDataCell>
                                            <CTableDataCell>{item.totalAmount}</CTableDataCell>
                                            <CTableDataCell>{item.tax}%</CTableDataCell>
                                            <CTableDataCell>{item.paidAmount}</CTableDataCell>
                                            <CTableDataCell>{item.pendingAmount}</CTableDataCell>
                                            <CTableDataCell>{item.paymode}</CTableDataCell>
                                            <CTableDataCell>{item.status === 'active' && <label style={{ backgroundColor: "#F1C40F", borderRadius: '10px', color: 'white', paddingLeft: '5px', paddingRight: '5px' }}>Pending</label>}{item.status === 'cancel' && <label style={{ backgroundColor: "red", borderRadius: '10px', paddingLeft: '5px', color: 'white', paddingRight: '5px' }}>Cancelled</label>} {item.status === 'done' && <label style={{ backgroundColor: "green", borderRadius: '10px', color: 'white', paddingLeft: '5px', paddingRight: '5px' }}>Paid</label>}</CTableDataCell>
                                            <CTableDataCell>{item.status === 'active' && <CButton style={{ backgroundColor: 'red', border: 'none' }} onClick={() => updateStatus(item._id, 'cancel')}> Cancel</CButton>} {item.status === 'active' && <CButton style={{ backgroundColor: 'green', border: 'none' }} onClick={() => updateStatus(item._id, 'done')}>Done</CButton>} {item.status === 'cancel' && <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteData(item._id)} size='20px' />}{item.status === 'done' && <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteData(item._id)} size='20px' />} </CTableDataCell>
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
                        {result1.filter((list) => list.username === username && list.MemberName.toLowerCase().includes(Search1.toLowerCase()) && list.InvoiceNo.toLowerCase().includes(Search2.toLowerCase())
                            && list.ServiceName.toLowerCase().includes(Search3.toLowerCase()) && list.counseller.toLowerCase().includes(Search6.toLowerCase()) && list.totalAmount.toString().includes(Search7.toString())
                            && list.tax.toString().includes(Search8.toString()) && list.paidAmount.toString().includes(Search9.toString()) && list.pendingAmount.toString().includes(Search10.toString())
                            && list.paymode.toLowerCase().includes(Search11.toLowerCase())
                        ).length > (paging + 1) * 10 && <CPaginationItem onClick={() => setPaging(paging + 1)} >{paging + 2}</CPaginationItem>}

                        {result1.filter((list) => list.username === username && list.MemberName.toLowerCase().includes(Search1.toLowerCase()) && list.InvoiceNo.toLowerCase().includes(Search2.toLowerCase())
                            && list.ServiceName.toLowerCase().includes(Search3.toLowerCase()) && list.counseller.toLowerCase().includes(Search6.toLowerCase()) && list.totalAmount.toString().includes(Search7.toString())
                            && list.tax.toString().includes(Search8.toString()) && list.paidAmount.toString().includes(Search9.toString()) && list.pendingAmount.toString().includes(Search10.toString())
                            && list.paymode.toLowerCase().includes(Search11.toLowerCase())
                        ).length > (paging + 2) * 10 && <CPaginationItem onClick={() => setPaging(paging + 2)}>{paging + 3}</CPaginationItem>}
                        {result1.filter((list) => list.username === username && list.MemberName.toLowerCase().includes(Search1.toLowerCase()) && list.InvoiceNo.toLowerCase().includes(Search2.toLowerCase())
                            && list.ServiceName.toLowerCase().includes(Search3.toLowerCase()) && list.counseller.toLowerCase().includes(Search6.toLowerCase()) && list.totalAmount.toString().includes(Search7.toString())
                            && list.tax.toString().includes(Search8.toString()) && list.paidAmount.toString().includes(Search9.toString()) && list.pendingAmount.toString().includes(Search10.toString())
                            && list.paymode.toLowerCase().includes(Search11.toLowerCase())
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

export default TotalInvoice
