import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormCheck, CFormInput, CFormSelect, CFormTextarea, CListGroup, CListGroupItem, CRow } from '@coreui/react'
import React from 'react'

const PushMarketing = () => {
    return (
        <CCard>
            <CCardHeader>
                <CCardTitle>App Notification</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm>
                    <CRow>
                        <CCol lg={6} md={6} sm={12}>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                label="Title"
                                placeholder="Enter Title"
                            />
                        </CCol>
                        <CCol lg={6} md={6} sm={12}>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                label="Message"
                                placeholder="Enter Message"
                            />
                        </CCol>
                        <CCol xs={12}>
                            <CFormTextarea
                                id="exampleFormControlTextarea1"
                                label="Details"
                                rows="3"
                                text="Must be 8-20 words long."
                            ></CFormTextarea>
                        </CCol>
                        <CCol>
                            <label className="mb-2">Notify To</label>
                            <CListGroup>
                                <CListGroupItem>
                                    <CFormCheck label="Members" checked />
                                </CListGroupItem>
                                <CListGroupItem>
                                    <CFormCheck label="Non Members and members not logged in" />
                                </CListGroupItem>
                            </CListGroup>
                        </CCol>
                        <CCol>
                            <label className="mb-2">Platform</label>
                            <CListGroup>
                                <CListGroupItem>
                                    <CFormCheck label="Android" checked />
                                </CListGroupItem>
                                <CListGroupItem>
                                    <CFormCheck label="IOS" />
                                </CListGroupItem>
                            </CListGroup>
                        </CCol>
                    </CRow>
                    <CButton className='mt-2'>Send</CButton>
                </CForm>
            </CCardBody>
        </CCard>
    )
}

export default PushMarketing
