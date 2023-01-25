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
    CInputGroup,
    CInputGroupText,
    CRow,
} from "@coreui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountryList } from "src/components/CountryList";
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const CompanyProfile = () => {
    const [profileId, setProfileId] = useState("")
    const [brandName, setBrandName] = useState("")
    const [brandNumber, setBrandNumber] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [areaSequerFit, setAreaSequerFit] = useState("")
    const [currency, setCurrency] = useState("")
    const [businessCategory, setBusinessCategory] = useState("")
    const [brandFullAddress, setBrandFullAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [openingTime, setOpeningTime] = useState("")
    const [closingTime, setClosingTime] = useState("")
    const [workingDays, setWorkingDays] = useState("")
    const [halfDay, setHalfDay] = useState("")
    const [holidays, setHolidays] = useState("")



    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const username = user.user.username;
    const token = user.token;
    const [result, setResult] = useState();
    useEffect(() => {
        fetch(`${url}/Companyprofile/all`, {
            method: "get",
            headers: { "Authorization": `Bearer ${token}` }
        }).then(res => res.json()).then(json => setResult(json));
        setProfileId(username)
    }, []);

    const saveProfile = () => {
        let data = { username: username, profileId, brandName, brandNumber, emailAddress, areaSequerFit, currency, businessCategory, brandFullAddress, city, state, openingTime, closingTime, workingDays, halfDay, holidays }
        // console.warn(data);
        fetch(`${url}/Companyprofile/create`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            // console.warn("resp",resp);;
            resp.json().then(() => {
                alert("successfully submitted")
                navigate('/master/center-setup')
            })
        })
    }

    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <CCardTitle>Company Profile</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm onSubmit={saveProfile}>
                    <CRow>
                        <CCol lg={6} sm={12}>
                            <CRow>
                                <CCol xs={6}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Brand Name"
                                        value={brandName}
                                        onChange={(e) => setBrandName(e.target.value)}
                                        placeholder="Enter Brand Name"
                                    />
                                </CCol>
                                <CCol>
                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        id="exampleFormControlInput1"
                                        label="Brand Number"
                                        value={brandNumber}
                                        onChange={(e) => setBrandNumber(e.target.value)}
                                        placeholder="Enter Brand Number"
                                    />
                                </CCol>
                            </CRow>

                            <CFormInput
                                className="mb-1"
                                type="email"
                                id="exampleFormControlInput1"
                                label="Email address"
                                placeholder="name@example.com"

                                value={emailAddress}
                                onChange={(e) => setEmailAddress(e.target.value)}
                                text="Must be 8-20 characters long."
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                            <CRow>
                                <CCol>
                                    <label className="mb-2">Area Sequer Fit:</label>
                                    <CInputGroup>
                                        <CFormInput type="number" placeholder="Sqft"
                                            value={areaSequerFit}
                                            onChange={(e) => setAreaSequerFit(e.target.value)} />
                                        <CInputGroupText>sq. ft.</CInputGroupText>
                                    </CInputGroup>
                                </CCol>
                                <CCol>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Currency"
                                        value={currency}
                                        onChange={(e) => setCurrency(e.target.value)}
                                        label="Currency"
                                        options={[
                                            "Select Currency",
                                            { label: "One", value: "1" },
                                            { label: "Two", value: "2" },
                                            { label: "Three", value: "3" },
                                        ]}
                                    />
                                </CCol>
                            </CRow>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Currency"
                                value={businessCategory}
                                onChange={(e) => setBusinessCategory(e.target.value)}
                                label="Business Category"
                                options={[
                                    "Select Business Category",
                                    { label: "One", value: "1" },
                                    { label: "Two", value: "2" },
                                    { label: "Three", value: "3" },
                                ]}
                            />
                            <CFormTextarea
                                id="exampleFormControlTextarea1"
                                label="Branch Full Address"
                                value={brandFullAddress}
                                onChange={(e) => setBrandFullAddress(e.target.value)}
                                rows="3"
                                text="Must be 8-20 words long."
                            ></CFormTextarea>
                            <CRow>
                                <CCol xs={6}>
                                    <CFormSelect
                                        className="mb-1"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        aria-label="Select City"
                                        label="City"
                                        options={[
                                            "Select City",
                                            { label: "One", value: "1" },
                                            { label: "Two", value: "2" },
                                            { label: "Three", value: "3" },
                                        ]}
                                    />
                                </CCol>
                                <CCol>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Country Name"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        label="Country Name"
                                    >{CountryList.map((item, index) => (
                                        <option key={index}>{item.name}</option>
                                    ))}
                                    </CFormSelect>
                                </CCol>
                            </CRow>
                        </CCol>

                        <CCol lg={6} sm={12}>
                            <CRow>
                                <CCol xs={6}>
                                    <CFormInput
                                        className="mb-1"
                                        type="time"
                                        id="exampleFormControlInput1"
                                        value={openingTime}
                                        onChange={(e) => setOpeningTime(e.target.value)}
                                        label="Opening Time"
                                        placeholder="Enter Brand Name"
                                    />
                                </CCol>
                                <CCol>
                                    <CFormInput
                                        className="mb-1"
                                        type="time"
                                        id="exampleFormControlInput1"
                                        value={closingTime}
                                        onChange={(e) => setClosingTime(e.target.value)}
                                        label="Closing Time"
                                        placeholder="Enter Brand Number"
                                    />
                                </CCol>

                                <CCol xs={4}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Working Days"
                                        value={workingDays}
                                        onChange={(e) => setWorkingDays(e.target.value)}
                                        label="Working Days"
                                        options={[
                                            "Select Working Days",
                                            { label: "One Day", value: "One Day" },
                                            { label: "Two Day", value: "Two Day" },
                                            { label: "Three Day", value: "Three Day" },
                                            { label: "Four Day", value: "Four Day" },
                                            { label: "Five Day", value: "Five Day" },
                                            { label: "Six Day", value: "Six Day" },
                                            { label: "Sever Day", value: "Sever Day" },
                                        ]}
                                    />
                                </CCol>
                                <CCol xs={4}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Half Day"
                                        value={halfDay}
                                        onChange={(e) => setHalfDay(e.target.value)}
                                        label="Half Day"
                                        options={[
                                            "Select Half Day",
                                            { label: "Monday", value: "Monday" },
                                            { label: "Tuesday", value: "Tuesday" },
                                            { label: "Wednesday", value: "Wednesday" },
                                            { label: "Thursday", value: "Thursday" },
                                            { label: "Friday", value: "Friday" },
                                            { label: "Saturday", value: "Saturday" },
                                            { label: "Sunday", value: "Sunday" },
                                        ]}
                                    />
                                </CCol>
                                <CCol xs={4}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Holidays"
                                        value={holidays}
                                        onChange={(e) => setHolidays(e.target.value)}
                                        label="Holidays"
                                        options={[
                                            "Select Holidays",
                                            { label: "Monday", value: "Monday" },
                                            { label: "Tuesday", value: "Tuesday" },
                                            { label: "Wednesday", value: "Wednesday" },
                                            { label: "Thursday", value: "Thursday" },
                                            { label: "Friday", value: "Friday" },
                                            { label: "Saturday", value: "Saturday" },
                                            { label: "Sunday", value: "Sunday" },
                                        ]}
                                    />
                                </CCol>
                            </CRow>
                        </CCol>
                    </CRow>
                    <CButton className="ms-1 mt-2" type="submit">Save</CButton>
                    <CButton className="ms-2 mt-2" onClick={() => navigate('/master/center-setup')}>Cancel</CButton>
                </CForm>
            </CCardBody>
        </CCard>
    );
};

export default CompanyProfile;