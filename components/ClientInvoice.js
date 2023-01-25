import { CButton, CCol, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React from 'react'

const ClientInvoice = ({ add, clickfun, ids }) => {

    return (
        <CModal size="xl" alignment="center" scrollable visible={add} onClose={clickfun}>
            <CModalHeader>
                <CModalTitle>Invoice</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CRow>
                    <CCol lg={12} className='text-center'><h4>Invoice</h4></CCol>
                    <CCol>
                        Yog Power Studio<br />
                        kandivali east mumbai<br />
                        Name : {Fullname} <br />
                        Phone : {ContactNumber} <br />
                    </CCol>
                    <CCol>
                        Customer id : {AttendanceID}<br />
                        Invoice No : {centerCode}INV{result1.length} <br />
                        <CRow>
                            <CCol lg={3}>Sales Rep :
                            </CCol><CCol>
                                <CFormInput
                                    className="mb-1"
                                    type="text"
                                    style={{ minWidth: "100px" }}
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CCol>
                            <CCol></CCol>
                        </CRow>
                    </CCol>
                </CRow>
                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
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
                            <CTableDataCell>yoga</CTableDataCell>
                            <CTableDataCell>3 month</CTableDataCell>
                            <CTableDataCell>2500</CTableDataCell>
                        </CTableRow>

                        <CTableRow>
                            <CTableDataCell colSpan={2}></CTableDataCell>
                            <CTableDataCell colSpan={2}>
                                <CTable bordered style={{ margin: '0', padding: '0' }} responsive>
                                    <CTableBody>
                                        <CTableRow>
                                            <CTableDataCell>Sub Total</CTableDataCell>
                                            <CTableDataCell>
                                                <CFormInput
                                                    className="mb-1"
                                                    type="number"
                                                    style={{ minWidth: "100px" }}
                                                    aria-describedby="exampleFormControlInputHelpInline"
                                                />
                                            </CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableDataCell>Tax due</CTableDataCell>
                                            <CTableDataCell>
                                                <CFormInput
                                                    className="mb-1"
                                                    type="number"
                                                    style={{ minWidth: "100px" }}
                                                    aria-describedby="exampleFormControlInputHelpInline"
                                                />
                                            </CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableDataCell>Total Due</CTableDataCell>
                                            <CTableDataCell>
                                                <CFormInput
                                                    className="mb-1"
                                                    type="number"
                                                    style={{ minWidth: "100px" }}
                                                    aria-describedby="exampleFormControlInputHelpInline"
                                                />
                                            </CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableDataCell colSpan={2} className="text-center">MODE OF PAYMENT</CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableDataCell>
                                                <CFormSelect
                                                    className="mb-1"
                                                    aria-label="Select Call Status"
                                                    style={{ minWidth: "100px" }}
                                                    options={[
                                                        "Select",
                                                        { label: "Cash", value: "Cash" },
                                                        { label: "Debit Card", value: "Debit Card" },
                                                        { label: "Credit Card", value: "Credit Card" },
                                                        { label: "Cheque", value: "Cheque" },
                                                        { label: "Draft", value: "Draft" },
                                                    ]}
                                                />
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                <CFormInput
                                                    className="mb-1"
                                                    type="number"
                                                    style={{ minWidth: "100px" }}
                                                    aria-describedby="exampleFormControlInputHelpInline"
                                                />
                                            </CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableDataCell>Pending</CTableDataCell>
                                            <CTableDataCell>
                                                <CFormInput
                                                    className="mb-1"
                                                    type="number"
                                                    style={{ minWidth: "100px" }}
                                                    aria-describedby="exampleFormControlInputHelpInline"
                                                />
                                            </CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableDataCell>Discount</CTableDataCell>
                                            <CTableDataCell>
                                                <CFormInput
                                                    className="mb-1"
                                                    type="number"
                                                    style={{ minWidth: "100px" }}
                                                    aria-describedby="exampleFormControlInputHelpInline"
                                                />
                                            </CTableDataCell>
                                        </CTableRow>
                                    </CTableBody>
                                </CTable>
                            </CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableDataCell colSpan={3}>Total</CTableDataCell>
                            <CTableDataCell>
                                <CFormInput
                                    className="mb-1"
                                    type="number"
                                    style={{ minWidth: "100px" }}
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableDataCell colSpan={4}>
                                <h5>TERMS AND CONDITIONS</h5>
                            </CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableDataCell colSpan={4}>
                                <label>* Fee once paid is not refundable, Non transferable.</label>
                                <label>* Extension of the packages is not allowed. You have to adjust your lapsed sessions within the expiry date.</label>
                                <label>* Instructors and timings are subject to change.</label>
                                <label>* All packages would be on hourly basis in a day.</label>
                                <label>* If a person wishes to workout more than an hour in a day, kindly upgrade your package accordingly.</label>
                                <label>* For effective results follow the guidelines compulsory.</label>
                            </CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>

            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible2(false)}>
                    Close
                </CButton>
                <CButton color="primary">Save changes</CButton>
            </CModalFooter>
        </CModal>
    )
}

export default ClientInvoice
