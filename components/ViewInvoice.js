import { CButton, CCol, CImage, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import axios from 'axios'
import logo from 'src/assets/images/avatars/icon.png'
import { useReactToPrint } from 'react-to-print'
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'
import React, { useEffect, useRef, useState } from 'react'
import moment from 'moment'

const ViewInvoice = ({ add, clickfun, invoiceId, clientId }) => {
  const [clientArr, setClientArr] = useState([])
  const [invoiceArr, setInvoiceArr] = useState([])
  const [view, setview] = useState(false)

  console.log(invoiceId, clientId);
  let user = JSON.parse(localStorage.getItem('user-info'))
  console.log(user);
  const token = user.token;
  const username = user.user.username;
  const centerCode = user.user.centerCode;

  useEffect(() => {
    setInvoiceArr(invoiceId)
    setClientArr(clientId)
  }, [])

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'yog-power',
    onAfterPrint: () => alert('print success')
  })


  return (
    <CModal size="xl" alignment="center" scrollable visible={add} onClose={clickfun}>
      <CModalHeader>
        <CModalTitle>Invoice</CModalTitle>
      </CModalHeader>
      <CModalBody ref={componentRef} style={{ padding: '25px' }}>

        <CRow>

          <CCol lg={12} className='text-center'><CImage src={logo} width="80px" height='80px' /></CCol>
          <CCol lg={12} className='text-center mt-2'><h5>Yog Power International</h5></CCol>

          <CCol className='mt-2' style={{ marginLeft: '10px' }}>
            <h6>Client Name: {clientArr.Fullname}</h6>
            <div>Client Number: {clientArr.ContactNumber}</div>
            Customer ID : {clientArr.AttendanceID}<br />
            Email-Id : {clientArr.Email}<br />
          </CCol>
          <CCol className='mt-2' style={{ marginRight: '30px' }}>
            <div className='float-end'>
              Date : {moment(invoiceArr.datetime).format("MM-DD-YYYY")}<br />
              Invoice No : {invoiceArr.InvoiceNo} <br />
              Counseller : {invoiceArr.counseller}
            </div>
          </CCol>

          <CCol lg={12} className='text-center mt-2'><h4>Invoice</h4></CCol>
        </CRow>
        <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} responsive>
          <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
            <CTableRow >
              <CTableHeaderCell>Sr.No</CTableHeaderCell>
              <CTableHeaderCell>DESCRIPTION</CTableHeaderCell>
              <CTableHeaderCell>DURATION</CTableHeaderCell>
              <CTableHeaderCell>SERVICE FEE</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell>1</CTableDataCell>
              <CTableDataCell>
                <CRow>
                  <CCol lg={6}>
                    <div style={{ fontWeight: 'bold' }}>Service Name: {invoiceArr.ServiceName}</div>
                  </CCol>
                  <CCol lg={6}>
                    <div style={{ fontWeight: 'bold' }}>Service Variation: {invoiceArr.ServiceVariation}</div>
                  </CCol>
                  <CCol lg={12}>
                    <div style={{ fontWeight: 'bold' }}>Package: {invoiceArr.PackageName}</div>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <div>Start Date: {moment(invoiceArr.startDate).format("MM-DD-YYYY")}</div>
                  </CCol>
                  <CCol>
                    <div>End Date: {moment(invoiceArr.endDate).format("MM-DD-YYYY")}</div>
                  </CCol>
                </CRow>

              </CTableDataCell>
              <CTableDataCell>
                <div style={{ fontWeight: 'bold' }}>{invoiceArr.duration}</div>

              </CTableDataCell>
              <CTableDataCell>
                <div style={{ fontWeight: 'bold' }}>{invoiceArr.fees}</div>
              </CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableDataCell colSpan={2}></CTableDataCell>
              <CTableDataCell colSpan={2}>
                <CTable bordered style={{ margin: '0', padding: '0' }} responsive>
                  <CTableBody>
                    <CTableRow>
                      <CTableDataCell>Sub Total</CTableDataCell>
                      <CTableDataCell>
                        <div style={{ fontWeight: 'bold' }}>{invoiceArr.fees}</div>

                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableDataCell>

                        Discount

                      </CTableDataCell>
                      <CTableDataCell>
                        <div style={{ fontWeight: 'bold' }}>{invoiceArr.discount}</div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell>
                        Tax
                      </CTableDataCell>
                      <CTableDataCell className="mt-2">
                        <div style={{ fontWeight: 'bold' }}>{invoiceArr.fees / 100 * invoiceArr.tax}</div>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell>Total Amount</CTableDataCell>
                      <CTableDataCell>
                        <div style={{ fontWeight: 'bold' }}>{invoiceArr.paidAmount + invoiceArr.pendingAmount}</div>

                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableDataCell>Paid Amount</CTableDataCell>
                      <CTableDataCell>
                        <div style={{ fontWeight: 'bold' }}>{invoiceArr.paidAmount}</div>

                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableDataCell>Balance Amount</CTableDataCell>
                      <CTableDataCell>
                        <div style={{ fontWeight: 'bold' }}>{invoiceArr.pendingAmount}</div>
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableDataCell>Mode of Payment</CTableDataCell>

                      <CTableDataCell>
                        <div style={{ fontWeight: 'bold' }}>{invoiceArr.paymode}</div>

                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell colSpan={3}>Total</CTableDataCell>
              <CTableDataCell>
                <div style={{ fontWeight: 'bold' }}>{invoiceArr.paidAmount}</div>
              </CTableDataCell>
            </CTableRow>
            <CTableRow style={{ backgroundColor: "#0B5345", color: "white" }}>
              <CTableDataCell colSpan={4}>
                <h5>TERMS AND CONDITIONS</h5>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell colSpan={4}>
                <div>Fee once paid is not refundable, Non transferable & no package extension, lapsed sessions has to be adjusted within the expiry date. Instructors & timings are subject to change. All packages would be on hourly basis in a day. If a person wishes to workout more than an hour in a day, kindly upgrade your package accordingly. follow guidelines for better result</div>
              </CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableDataCell colSpan={4}>
                <div style={{ fontWeight: 'bold' }}>Address: Shop 24/25, 2nd Floor, V Mall, Thakur Complex, Kandivali East, Mumbai 400 101. India.</div>
                <label style={{ fontWeight: 'bold' }}>Email: info@yogpowerint.com</label>
                <label style={{ fontWeight: 'bold', marginLeft: '10px' }}>Phone: +91 9819 1232 91</label>
                <div style={{ fontWeight: 'bold' }}>Website: https://yogpowerint.com</div>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CModalBody>
      <CModalFooter>
        <CButton color="primary" onClick={handlePrint}>Print</CButton>
      </CModalFooter>
    </CModal>
  )
}

export default ViewInvoice
