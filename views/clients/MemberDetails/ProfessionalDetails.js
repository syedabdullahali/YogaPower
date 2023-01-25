import {
    CButton,
    CCardTitle,
    CCol,
    CForm,
    CFormCheck,
    CFormInput,
    CFormSelect,
    CFormSwitch,
    CFormTextarea,
    CListGroup,
    CListGroupItem,
    CRow,
} from "@coreui/react";
import React from "react";

const ProfessionalDetails = () => {
    return (
        <CForm>
            <CRow>
                <CCol lg={6} sm={12}>
                    <CCardTitle>Professional Information Primary Contact</CCardTitle>
                    <CRow>
                        <CCol xs={6}>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                label="Occupation"
                                placeholder="Enter Occupation"
                            />
                        </CCol>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="email"
                                id="exampleFormControlInput1"
                                label="Email address"
                                placeholder="name@example.com"
                                text="Must be 8-20 characters long."
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Currency"
                                label="Country Code"
                                options={[
                                    "Select Country Code",
                                    { label: "One", value: "1" },
                                    { label: "Two", value: "2" },
                                    { label: "Three", value: "3" },
                                ]}
                            />
                        </CCol>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="number"
                                id="exampleFormControlInput1"
                                label="Contact Number"
                                placeholder="Enter Number"
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="number"
                                id="exampleFormControlInput1"
                                label="Whatsapp Number"
                                placeholder="Enter Number"
                            />
                        </CCol>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="email"
                                id="exampleFormControlInput1"
                                label="Email Address"
                                placeholder="Enter Number"
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Currency"
                                label="Gander"
                                options={[
                                    "Select Gender",
                                    { label: "Male", value: "1" },
                                    { label: "Female", value: "2" },
                                ]}
                            />
                        </CCol>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="date"
                                id="exampleFormControlInput1"
                                label="Date of Birth"
                                placeholder="Enter Date"
                            />
                        </CCol>
                    </CRow>
                    <CCol>

                        <CFormTextarea
                            id="exampleFormControlTextarea1"
                            label="Address"
                            rows="2"
                            text="Must be 8-20 words long."
                        ></CFormTextarea>
                    </CCol>
                    <CRow>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                label="Area"
                                placeholder="Enter Locality"
                            />
                        </CCol>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                label="City"
                                placeholder="Enter City"
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="number"
                                id="exampleFormControlInput1"
                                label="Pin Code"
                                placeholder="Enter Pin Code"
                            />
                        </CCol>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                label="State"
                                placeholder="Enter State"
                            />
                        </CCol>
                    </CRow>

                    <CRow>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="url"
                                id="exampleFormControlInput1"
                                label="Facebook Id"
                                placeholder="Enter Facebook id"
                            />
                        </CCol>
                        <CCol>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Blood Group"
                                label="Blood Group"
                                options={[
                                    "Select Blood Group",
                                    { label: "A", value: "1" },
                                    { label: "B", value: "2" },
                                ]}
                            />
                        </CCol>
                    </CRow>
                    <CCardTitle>Communication Preference Settings</CCardTitle>
                    <CRow>
                        <CCol xs={4}>
                            <CFormSwitch size="xl" label="SMS" defaultChecked />
                        </CCol>
                        <CCol xs={4}>
                            <CFormSwitch size="xl" label="Mail" defaultChecked />
                        </CCol>
                        <CCol xs={4}>
                            <CFormSwitch size="xl" label="Push Notification" defaultChecked />
                        </CCol>
                    </CRow>
                </CCol>

                <CCol lg={6} sm={12}>
                    <CRow>
                        <CCardTitle>Emergency contact</CCardTitle>
                        <CCol xs={6}>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                label="Name"
                                placeholder="Enter Name"
                            />
                        </CCol>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                label="Relationship"
                                placeholder="Enter Relationship"
                            />
                        </CCol>

                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Working Days"
                                label="Country Code"
                                options={[
                                    "Select Country Code",
                                    { label: "+91", value: "1" },
                                    { label: "Two", value: "2" },
                                    { label: "Three", value: "3" },
                                ]}
                            />
                        </CCol>
                        <CCol xs={6}>

                            <CFormInput
                                className="mb-1"
                                type="number"
                                id="exampleFormControlInput1"
                                label="Contact Number"
                                placeholder="Enter Number"
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCardTitle>Lead Information</CCardTitle>
                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Service Name"
                                label="Service Name"
                                options={[
                                    "Select Service Name",
                                    { label: "Yoga", value: "1" },
                                    { label: "PT", value: "2" },
                                    { label: "TTC", value: "3" },
                                ]}
                            />
                        </CCol>

                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Customer type"
                                label="Customer type"
                                options={[
                                    "Select Customer type",
                                    { label: "Yoga", value: "1" },
                                    { label: "PT", value: "2" },
                                    { label: "TTC", value: "3" },
                                ]}
                            />
                        </CCol>
                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Enquiry Type"
                                label="Enquiry Type"
                                options={[
                                    "Select Enquiry Type",
                                    { label: "Yoga", value: "1" },
                                    { label: "PT", value: "2" },
                                    { label: "TTC", value: "3" },
                                ]}
                            />
                        </CCol>
                    </CRow>

                    <CRow>
                        <CCardTitle>Member Manager</CCardTitle>
                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Assign Staff"
                                label="Assign Staff"
                                options={[
                                    "Select Assign Staff",
                                    { label: "Yoga", value: "1" },
                                    { label: "PT", value: "2" },
                                    { label: "TTC", value: "3" },
                                ]}
                            />
                        </CCol>

                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Member Manager"
                                label="Member Manager"
                                options={[
                                    "Select Member Manager",
                                    { label: "Yoga", value: "1" },
                                    { label: "PT", value: "2" },
                                    { label: "TTC", value: "3" },
                                ]}
                            />
                        </CCol>
                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Batch"
                                label="Batch"
                                options={[
                                    "Select Batch",
                                    { label: "Yoga", value: "1" },
                                    { label: "PT", value: "2" },
                                    { label: "TTC", value: "3" },
                                ]}
                            />
                        </CCol>
                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select General Trainer"
                                label="General Trainer"
                                options={[
                                    "Select General Trainer",
                                    { label: "Yoga", value: "1" },
                                    { label: "PT", value: "2" },
                                    { label: "TTC", value: "3" },
                                ]}
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCardTitle>IDs</CCardTitle>
                        <CCol xs={6}>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                label="Attendance ID"
                                placeholder="Enter Attendance ID"
                            />
                        </CCol>
                        <CCol xs={6}>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                label="Club ID"
                                placeholder="Enter Club ID"
                            />
                        </CCol>
                        <CCol xs={6}>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                label="National ID"
                                placeholder="Enter National ID"
                            />
                        </CCol>
                        <CCol xs={6}>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                label="Locker Key No"
                                placeholder="Enter Locker Key No"
                            />
                        </CCol>
                        <CCol xs={6}>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                label="PAN"
                                placeholder="Enter PAN"
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCardTitle>Apparel and Shoes</CCardTitle>
                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select T-Shirt Size"
                                label="T-Shirt Size"
                                options={[
                                    "Select T-Shirt Size",
                                    { label: "Yoga", value: "1" },
                                    { label: "PT", value: "2" },
                                    { label: "TTC", value: "3" },
                                ]}
                            />
                        </CCol>

                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Shoes Size"
                                label="Shoes Size"
                                options={[
                                    "Select Shoes Size",
                                    { label: "Yoga", value: "1" },
                                    { label: "PT", value: "2" },
                                    { label: "TTC", value: "3" },
                                ]}
                            />
                        </CCol>
                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Shorts Size"
                                label="Shorts Size"
                                options={[
                                    "Select Shorts Size",
                                    { label: "Yoga", value: "1" },
                                    { label: "PT", value: "2" },
                                    { label: "TTC", value: "3" },
                                ]}
                            />
                        </CCol>
                    </CRow>
                </CCol>
            </CRow>
            <CRow className="mt-2">
                <CCardTitle className="mb-2">Injuries and conditions</CCardTitle>
                <CCol>
                    <CListGroup>
                        <CListGroupItem>
                            <CFormCheck label="Asthma/COPD" />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="Back Pain" />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="Bone Fracture" />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="Carpal Tunnel" />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="Diabetes" />
                        </CListGroupItem>
                    </CListGroup>
                </CCol>
                <CCol>
                    <CListGroup>
                        <CListGroupItem>
                            <CFormCheck label="Digestive Disorder" />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="Epilepsy" />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="Foot Pain" />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="Glaucoma" />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="Heart Disease/Condition" />
                        </CListGroupItem>
                    </CListGroup>
                </CCol>

                <CCol>
                    <CListGroup>
                        <CListGroupItem>
                            <CFormCheck label="Hernia/Diastasis Recti" />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="eart Disease/Condition" />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="Hernia/Diastasis Recti" />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="High Blood Pressure" />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="Other" />
                        </CListGroupItem>
                    </CListGroup>
                </CCol>
            </CRow>
            <CButton className="mt-2">Save</CButton>
        </CForm>
    );
};

export default ProfessionalDetails;