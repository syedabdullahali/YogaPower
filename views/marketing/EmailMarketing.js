import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormInput, CFormSelect, CFormTextarea, CRow } from '@coreui/react'
import React from 'react'

const EmailMarketing = () => {
    return (
        <CCard>
            <CCardHeader>
                <CCardTitle>Email Marketing</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm>
                    <CRow>
                        <CCol lg={6} md={6} sm={12}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Currency"
                                label="Email Template"
                                options={[
                                    "Select Email Template",
                                    { label: "yogpower@gmail.com", value: "yogpower@gmail.com" },
                                ]}
                            />
                        </CCol>

                        <CCol lg={6} md={6} sm={12}>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                label="Subject"
                                placeholder="Enter Subject"
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

export default EmailMarketing
