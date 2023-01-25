import { CButton, CCardTitle, CCol, CForm, CFormInput, CFormSelect, CFormTextarea, CRow } from '@coreui/react'
import React from 'react'

const FitnessProfile = () => {
    return (
        <CForm>
            <CRow>
                <CCol xs={6}>
                    <CFormInput
                        className="mb-1"
                        type="text"
                        id="exampleFormControlInput1"
                        label="Height"
                        placeholder="Enter height"
                    />
                </CCol>
                <CCol xs={6}>
                    <CFormInput
                        className="mb-1"
                        type="text"
                        id="exampleFormControlInput1"
                        label="Weight"
                        placeholder="Enter Weight"
                    />
                </CCol>
                <CCardTitle>Fitness Goals</CCardTitle>

                <CCol xs={6}>
                    <CFormSelect
                        className="mb-1"
                        aria-label="Select Currency"
                        label="Fitness Level"
                        options={[
                            "Select Fitness Level",
                            { label: "New", value: "1" },
                            { label: "Beginner", value: "2" },
                            { label: "Intermediate", value: "3" },
                            { label: "Advance", value: "4" },
                        ]}
                    />
                </CCol>
                <CCol xs={3}>
                    <CFormSelect
                        className="mb-1"
                        aria-label="Select Currency"
                        label="Fitness Goal"
                        options={[
                            "Select Fitness Goal",
                            { label: "Weight loss", value: "1" },
                            { label: "inch loss", value: "2" },
                            { label: "fitness", value: "3" },
                            { label: "staminass", value: "1" },
                        ]}
                    />
                </CCol>
                <CCol xs={3}>
                    <CFormInput
                        className="mb-1"
                        type="text"
                        id="exampleFormControlInput1"
                        label="Ideal Weight"
                        placeholder="Enter Ideal Weight"
                    />
                </CCol>
                <CCol>
                    <CFormTextarea
                        id="exampleFormControlTextarea1"
                        label="Suggestion"
                        rows="2"
                        text="Must be 8-20 words long."
                    ></CFormTextarea>
                </CCol>
                <CCol>

                    <CFormTextarea
                        id="exampleFormControlTextarea1"
                        label="Comments"
                        rows="2"
                        text="Must be 8-20 words long."
                    ></CFormTextarea>
                </CCol>
            </CRow>
            <CButton className='mt-2'>Save</CButton>
        </CForm>
    )
}

export default FitnessProfile
