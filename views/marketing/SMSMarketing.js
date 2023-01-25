import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormInput, CFormSelect, CFormTextarea, CRow } from '@coreui/react'
import React from 'react'

const SMSMarketing = () => {
    return (
        <CCard>
            <CCardHeader>
                <CCardTitle>SMS Marketing</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm>
                    <CRow>
                        <CCol lg={12} md={12} sm={12}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Gateway"
                                label="Gateway"
                                options={[
                                    "Select Gateway",
                                    { label: "Transactional SMS Bal: 0", value: "Transactional SMS Bal: 0" },
                                    { label: "Promotional SMS Bal: 0", value: "Transactional SMS Bal: 0" },
                                ]}
                            />
                        </CCol>
                        <CCol lg={12} md={12} sm={12}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Currency"
                                label="Client"
                                options={[
                                    "Select Client",
                                    { label: "All Members", value: "All Members" },
                                    { label: "Active Members", value: "Active Members" },
                                    { label: "Inactive Members", value: "Inactive Members" },
                                    { label: "Suspect List", value: "Suspect List" },
                                    { label: "Enquiry List", value: "Enquiry List" },
                                ]}
                            />
                        </CCol>
                        <CCol xs={12}>
                            <CFormTextarea
                                id="exampleFormControlTextarea1"
                                label="Message"
                                rows="2"
                                text="Must be 8-20 words long."
                            ></CFormTextarea>
                        </CCol>
                    </CRow>
                    <CButton className='mt-2'>Send</CButton>
                </CForm>
            </CCardBody>
        </CCard>
    )
}

export default SMSMarketing
