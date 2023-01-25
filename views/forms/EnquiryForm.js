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
    CFormTextarea,
    CRow,
} from "@coreui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CountryList } from "src/components/CountryList";
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'


const EnquiryForm = () => {
    const [Fullname, setFullName] = useState("");
    const [Emailaddress, setEmailAddress] = useState("");
    const [CountryCode, setCountryCode] = useState("");
    const [ContactNumber, setContactNumber] = useState("");
    const [Gander, setGander] = useState("");
    const [DateofBirth, setDateofBirth] = useState("");
    const [address, setAddress] = useState("");
    const [Area, setArea] = useState("");
    const [city, setCity] = useState("");
    const [Profession, setProfession] = useState("");
    const [StaffName, setStaffName] = useState("");
    const [CenterName, setCenterName] = useState("");
    const [CallStatus, setCallStatus] = useState("");
    const [Message, setMessage] = useState("");
    const [person_Name, setperson_Name] = useState("");
    const [Relation, setRelation] = useState("");
    const [CountryCode2, setCountryCode2] = useState("");
    const [ContactNumber2, setContactNumber2] = useState("");
    const [EnquiryDate, setEnquiryDate] = useState("");
    const [ServiceName, setServiceName] = useState("");
    const [ServiceVariation, setServiceVariation] = useState("");
    const [Customertype, setCustomertype] = useState("");
    const [enquirytype, setEnquirytype] = useState("");
    const [trialDate, setTrialDate] = useState("");
    const [appointmentDate, setappointmentDate] = useState("");
    const [appointmentTime, setappointmentTime] = useState("");
    const [appointmentfor, setappointmentfor] = useState("");
    const [counseller, setCounseller] = useState("");

    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;
    const centerCode = user.user.centerCode;
    const [result, setResult] = useState([]);
    const [serviceArr, setServiceArr] = useState([]);
    const [result1, setResult1] = useState([]);
    const [leadArr, setLeadArr] = useState([]);
    const [mem, setMem] = useState([]);
    useEffect(() => {
        getStaff()
        getLeadSource()
        axios.get(`${url}/subservice/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                setResult(res.data)
            })
            .catch((error) => {
                console.error(error)
            })

        axios.get(`${url}/enquiryForm/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                setResult1(res.data)
            })
            .catch((error) => {
                console.error(error)
            })

    }, []);

    function getLeadSource() {
        axios.get(`${url}/leadSourceMaster/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                setLeadArr(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    const [staff, setStaff] = useState([])
    function getStaff() {
        axios.get(`${url2}/employeeForm/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setStaff(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const saveEnquiry = () => {
        let enqId = centerCode + 'Q' + (result1.length + 1);

        let data = {
            username: username,
            EnquiryId: enqId,
            Fullname, Emailaddress, CountryCode, ContactNumber, Gander, DateofBirth, address, Area, city, Profession,
            StaffName, CenterName, CallStatus, Message,
            person_Name, Relation, CountryCode2: CountryCode2, ContactNumber2: ContactNumber2,
            EnquiryDate, ServiceName, ServiceVariation, Customertype, enquirytype, appointmentDate, appointmentTime, appointmentfor: appointmentfor, Counseller: counseller, trialDate: trialDate, status: "all_enquiry",
        }

        const headers = {
            'Authorization': `Bearer ${token}`,
            'My-Custom-Header': 'foobar'
        }

        axios.post(`${url}/enquiryForm/create`, data, { headers })
            .then((resp) => {
                console.log(resp)
                alert("successfully submitted")
                console.log("refresh prevented");
                setEmailAddress('')
                setFullName('')
                setCountryCode('')
                setContactNumber('')
                setArea('')
                setCity('')
                setProfession('')
                setStaffName('')
                setCenterName('')
                setCallStatus('')
                setMessage('')
                setRelation('')
                setGander('')
                setCountryCode2('')
                setContactNumber2('')
                setappointmentDate('')
                setappointmentTime('')
                setappointmentfor('')
                setCounseller('')
                setAddress('')
            })
            .catch((error) =>
                console.error(error)
            )

    }

    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <CCardTitle>Enquiry Form</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm>
                    <CRow>
                        <CCol lg={6} sm={12}>
                            <CCardTitle>Personal Details</CCardTitle>
                            <CRow>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        name="name"
                                        id="exampleFormControlInput1"
                                        label="Full name"
                                        value={Fullname}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="Enter Name"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="email"
                                        id="exampleFormControlInput1"
                                        label="Email address"
                                        value={Emailaddress}
                                        onChange={(e) => setEmailAddress(e.target.value)}
                                        placeholder="name@example.com"
                                        text="Must be 8-20 characters long."
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Currency"
                                        label="Country Code"
                                        value={CountryCode}
                                        onChange={(e) => setCountryCode(e.target.value)}

                                    >{CountryList.map((item, index) => (
                                        <option key={index} value={item.dial_code}>{item.name} {item.dial_code}</option>
                                    ))}
                                    </CFormSelect>
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        value={ContactNumber}
                                        onChange={(e) => setContactNumber(e.target.value)}
                                        id="exampleFormControlInput1"
                                        label="Contact Number"
                                        placeholder="Enter Number"
                                    />
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Currency"
                                        value={Gander}
                                        onChange={(e) => setGander(e.target.value)}
                                        label="Gander"
                                        options={[
                                            "Select Gender",
                                            { label: "Male", value: "Male" },
                                            { label: "Female", value: "Female" },
                                            { label: "Other", value: "Other" },
                                        ]}
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="date"
                                        format="MM-dd-yyyy"
                                        value={DateofBirth}
                                        onChange={(e) => setDateofBirth(e.target.value)}
                                        id="exampleFormControlInput1"
                                        label="Date of Birth"
                                        placeholder="Enter Date"
                                    />
                                </CCol>
                            </CRow>

                            <CFormTextarea
                                id="exampleFormControlTextarea1"
                                label="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                rows="2"
                                text="Must be 8-20 words long."
                            ></CFormTextarea>
                            <CRow>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        value={Area}
                                        onChange={(e) => setArea(e.target.value)}
                                        id="exampleFormControlInput1"
                                        label="Area"
                                        placeholder="Enter Locality"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        id="exampleFormControlInput1"
                                        label="City"
                                        placeholder="Enter City"
                                    />
                                </CCol>
                            </CRow>

                            <CFormInput
                                className="mb-1"
                                type="text"
                                value={Profession}
                                onChange={(e) => setProfession(e.target.value)}
                                id="exampleFormControlInput1"
                                label="Profession"
                                placeholder="Enter Profession"
                            />

                            <CCardTitle>Schedule enquiry follow-up</CCardTitle>
                            <CRow>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Staff Name"
                                        label="Staff Name"
                                        value={StaffName}
                                        onChange={(e) => setStaffName(e.target.value)}
                                    >
                                        <option>Select Staff Name</option>
                                        {staff.filter((list) => list.username === username && list.selected === 'Select').map((item, index) => (
                                            item.username === username && (
                                                <option key={index}>{item.FullName}</option>
                                            )
                                        ))}
                                    </CFormSelect>
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Staff Name"
                                        value={CenterName}
                                        onChange={(e) => setCenterName(e.target.value)}
                                        label="Center Name"
                                        options={[
                                            "Select Center",
                                            { label: "V-mall Thakur Complex", value: "V-mall Thakur Complex" },
                                            { label: "Station Kandivali East", value: "Station Kandivali East" },
                                        ]}
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Call Status"
                                        value={CallStatus}
                                        onChange={(e) => setCallStatus(e.target.value)}
                                        label="Call Status"
                                        options={[
                                            "Select Call Status",
                                            { label: "Cold", value: "Cold" },
                                            { label: "Warm", value: "Warm" },
                                            { label: "Hot", value: "Hot" },
                                        ]}
                                    />
                                </CCol>
                            </CRow>
                            <CFormTextarea
                                id="exampleFormControlTextarea1"
                                label="Message"
                                value={Message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows="2"
                                text="Must be 8-20 words long."
                            ></CFormTextarea>
                        </CCol>

                        <CCol lg={6} sm={12}>
                            <CRow>
                                <CCardTitle>Emergency contact</CCardTitle>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Name"
                                        value={person_Name}
                                        onChange={(e) => setperson_Name(e.target.value)}
                                        placeholder="Enter Name"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Relationship"
                                        value={Relation}
                                        onChange={(e) => setRelation(e.target.value)}
                                        placeholder="Enter Relationship"
                                    />
                                </CCol>

                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Working Days"
                                        value={CountryCode2}
                                        onChange={(e) => setCountryCode2(e.target.value)}
                                        label="Country Code"
                                    >{CountryList.map((item, index) => (
                                        <option key={index} value={item.dial_code}>{item.name} {item.dial_code}</option>
                                    ))}
                                    </CFormSelect>
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>

                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        value={ContactNumber2}
                                        onChange={(e) => setContactNumber2(e.target.value)}
                                        id="exampleFormControlInput1"
                                        label="Contact Number"
                                        placeholder="Enter Number"
                                    />
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCardTitle>Lead Information</CCardTitle>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        name="enquiry_date"
                                        type="date"
                                        id="exampleFormControlInput1"
                                        value={EnquiryDate}
                                        onChange={(e) => setEnquiryDate(e.target.value)}
                                        label="Enquiry Date"
                                        placeholder="Enter date"
                                    />
                                </CCol>

                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Service Name"
                                        value={ServiceName}
                                        onChange={(e) => setServiceName(e.target.value)}
                                        label="Service Name"

                                    >
                                        <option>Select Service</option>
                                        {result.map((item, index) => (
                                            item.username === username && (
                                                item.status === true && (
                                                    <option key={index}>{item.selected_service}</option>
                                                )
                                            )
                                        ))}
                                    </CFormSelect>
                                </CCol>

                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Service Name"
                                        value={ServiceVariation}
                                        onChange={(e) => setServiceVariation(e.target.value)}
                                        label="Service Variation"

                                    >
                                        <option>Select Variation</option>
                                        {result.filter((list) =>
                                            list.selected_service === ServiceName
                                        ).map((item, index) => (
                                            item.username === username && (
                                                item.status === true && (
                                                    <option key={index}>{item.sub_Service_Name}</option>
                                                )
                                            )
                                        ))}
                                    </CFormSelect>
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Customer type"
                                        value={Customertype}
                                        onChange={(e) => setCustomertype(e.target.value)}
                                        label="Customer type"
                                        options={[
                                            "Select Customer type",
                                            { label: "Self", value: "Self" },
                                            { label: "Group", value: "Group" },
                                            { label: "Couple", value: "Couple" },
                                            { label: "Youth", value: "Touth" },
                                            { label: "Kids", value: "Kids" },
                                        ]}
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>


                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Assign Staff"
                                        value={enquirytype}
                                        onChange={(e) => setEnquirytype(e.target.value)}
                                        label="Enquiry Source"
                                    >
                                        <option>Select Enquiry source</option>
                                        {leadArr.filter((list) => list.username === username).map((item, index) => (
                                            item.username === username && (
                                                <option key={index}>{item.LeadSource}</option>
                                            )
                                        ))}</CFormSelect>
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        label='Appointment Date'
                                        type="date"
                                        value={appointmentDate}
                                        onChange={(e) => setappointmentDate(e.target.value)}
                                        id="exampleFormControlInput1"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        label='Appointment Time'
                                        type="time"
                                        id="exampleFormControlInput1"
                                        value={appointmentTime}
                                        onChange={(e) => setappointmentTime(e.target.value)}

                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormSelect
                                        className="mb-1"
                                        label='Enquiry Stage'
                                        aria-label="Select"
                                        value={appointmentfor}
                                        onChange={(e) => setappointmentfor(e.target.value)}
                                        options={[
                                            "Select",
                                            { label: "Appointment", value: "Appointment" },
                                            { label: "Trial Session", value: "Trial Session" },
                                            { label: "Join", value: "Join" },
                                            { label: "Enquiry", value: "Enquiry" },
                                        ]}
                                    />
                                </CCol>
                                {appointmentfor === 'Trial Session' && (
                                    <CCol lg={6} md={6} sm={12}>
                                        <CFormInput
                                            className="mb-1"
                                            label='Trial Date'
                                            type="date"
                                            value={trialDate}
                                            onChange={(e) => setTrialDate(e.target.value)}
                                            id="exampleFormControlInput1"
                                        />
                                    </CCol>
                                )}
                                <CCol lg={6} md={6} sm={12}>

                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Assign Staff"
                                        value={counseller}
                                        onChange={(e) => setCounseller(e.target.value)}
                                        label='Counseller'
                                    >
                                        <option>Select Counseller</option>
                                        {staff.filter((list) => list.username === username && list.Department.toLowerCase() === 'sales' && list.selected === 'Select').map((item, index) => (
                                            item.username === username && (
                                                <option key={index}>{item.FullName}</option>
                                            )
                                        ))}</CFormSelect>
                                </CCol>
                            </CRow>
                        </CCol>
                    </CRow>
                    <CButton className="mt-2" onClick={() => saveEnquiry()}>Save</CButton>
                </CForm>
            </CCardBody>
        </CCard>
    );
};

export default EnquiryForm;