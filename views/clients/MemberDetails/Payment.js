import { CButton, CCardTitle, CCol, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import ViewInvoice from 'src/components/ViewInvoice'
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'


const Payment = ({ id }) => {

    const [viewInvoice, setViewInvoice] = useState(false);

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
        axios.get(`${url}/invoice/${id}`, {
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

    return (
        <CRow>
            <CCol xs={12}>
                <div className='d-flex justify-content-between mb-2'>
                    <div className='mt-2 ms-2'>
                        <CCardTitle>Payments </CCardTitle>
                    </div>
                    <div className='justify-content-around'>
                        <CButton style={{ margin: '5px' }}>Inter branch transfer</CButton>
                        <CButton style={{ margin: '5px' }}>Print Profile</CButton>
                        <CButton style={{ margin: '5px' }}>New Invoice</CButton>
                        <CButton style={{ margin: '5px' }}>New Call</CButton>
                        <CButton style={{ margin: '5px' }}>New Appointment</CButton>
                    </div>

                </div>
            </CCol>
            <CCol xs={12}>
                <div className='d-flex justify-content-between mb-2'>
                    <div className='mt-2 ms-2'>
                    </div>
                    <div className='justify-content-around'>
                        <CButton style={{ margin: '5px' }}>New Invoice</CButton>
                        <CButton style={{ margin: '5px' }}>Product</CButton>
                    </div>

                </div>
            </CCol>
            <CCol xs={12}>
                {viewInvoice &&
                    <ViewInvoice add={viewInvoice} clickfun={() => setViewInvoice(false)} invoiceId={invId} clientId={cliId} />
                }
                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow>
                            <CTableHeaderCell scope="col">Purchased</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Member Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">
                                Invoice No
                            </CTableHeaderCell>
                            <CTableHeaderCell scope="col">Amonut</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Tax</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Paid</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Pending</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Mode</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Write Off</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {result1.map((item, index) => (
                            <CTableRow key={index}>
                                <CTableDataCell>{moment(item.startDate).format("MM-DD-YYYY")}</CTableDataCell>
                                <CTableDataCell>{item.MemberName}</CTableDataCell>
                                <CTableDataCell><label style={{ cursor: 'pointer' }} onClick={() => { setinvId(item._id), setCliId(item.MemberId), handleInvoice(item._id, item.MemberId) }}>{item.InvoiceNo}</label> </CTableDataCell>
                                <CTableDataCell>{item.totalAmount}</CTableDataCell>
                                <CTableDataCell>{item.tax}%</CTableDataCell>
                                <CTableDataCell>{item.paidAmount}</CTableDataCell>
                                <CTableDataCell>{item.pendingAmount}</CTableDataCell>
                                <CTableDataCell>{item.paymode}</CTableDataCell>
                                <CTableDataCell>{item.status === 'active' && <label style={{ backgroundColor: "#F1C40F", borderRadius: '10px', color: 'white', paddingLeft: '5px', paddingRight: '5px' }}>Pending</label>}{item.status === 'cancel' && <label style={{ backgroundColor: "red", borderRadius: '10px', paddingLeft: '5px', color: 'white', paddingRight: '5px' }}>Cancelled</label>} {item.status === 'done' && <label style={{ backgroundColor: "green", borderRadius: '10px', color: 'white', paddingLeft: '5px', paddingRight: '5px' }}>Paid</label>}</CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>
            </CCol>
        </CRow>
    )
}

export default Payment