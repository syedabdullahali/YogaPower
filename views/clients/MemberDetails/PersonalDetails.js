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
    CImage,
    CListGroup,
    CListGroupItem,
    CRow,
} from "@coreui/react";
import ProfileIcon from 'src/assets/images/avatars/profile_icon.png'
import React, { useEffect } from "react";
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const PersonalDetails = ({ id }) => {

    useEffect(() => {
        getDetails(id)
    }, [])
    function getDetails(id) {
        const headers = {
            'Authorization': `Bearer ${token}`,
            'My-Custom-Header': 'foobar'
        };
        axios.get(`${url}/memberForm/${id}`, { headers },
        )
            .then((resp) => {
                setFullname(resp.Fullname)
                setEmail(resp.Emailaddress)
                setCountryCode(resp.CountryCode)
                setContactNumber(resp.ContactNumber)
                setWhatsappNumber(resp.ContactNumber)
                setGender(resp.Gander)
                setDateofBirth(resp.DateofBirth)
                setAddress(resp.address)
                setArea(resp.Area)
                setCity(resp.city)
                setName(resp.person_Name)
                setRelationship(resp.Relation)
                setCountryCode1(resp.CountryCode2)
                setContactNumber1(resp.ContactNumber2)
                setserviceName(resp.ServiceName)
                setserviceVariation(resp.ServiceVariation)
                setAssignStaff(resp.StaffName)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <CForm>
            <CRow>
                <CCol lg={6} sm={12}>
                    <CCardTitle>Personal Details</CCardTitle>
                    <CRow>
                        <CCol xs={4} className='mt-2 mb-1' >
                            <CImage ref={imgRef} className="mb-1" style={{ borderRadius: "50px" }} width={'160px'} src={ProfileIcon} />
                        </CCol>
                        <CCol xs={7} className='mt-3'>

                            <CFormInput
                                className="mb-1 mr-3"
                                type="file"
                                onChange={handleImage}
                                accept="image/*"
                            />
                            <CButton onClick={UploadImage}>Upload Image</CButton>

                        </CCol>
                        <CCol xs={6}>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                label="Full name"
                                value={Fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                placeholder="Enter Name"
                            />
                        </CCol>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="email"
                                id="exampleFormControlInput1"
                                label="Email address"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={CountryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                            >{CountryList.map((item, index) => (
                                <option key={index} value={item.dial_code}>{item.name} {item.dial_code}</option>
                            ))}
                            </CFormSelect>
                        </CCol>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="number"
                                id="exampleFormControlInput1"
                                label="Contact Number"
                                value={ContactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
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
                                value={WhatsappNumber}
                                onChange={(e) => setWhatsappNumber(e.target.value)}
                                label="Whatsapp Number"
                                placeholder="Enter Number"
                            />
                        </CCol>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="date"
                                id="exampleFormControlInput1"
                                value={DateofBirth}
                                onChange={(e) => setDateofBirth(e.target.value)}
                                label="Date of Birth"
                                placeholder="Enter Date"
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="date"
                                id="exampleFormControlInput1"
                                value={Anniversarydate}
                                onChange={(e) => setAnniversarydate(e.target.value)}
                                label='Anniversary Date'
                                placeholder="Enter Anniversary Date"
                            />
                        </CCol>
                        <CCol>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Currency"
                                value={Gender}
                                onChange={(e) => setGender(e.target.value)}
                                label="Gender"
                                options={[
                                    "Select Gender",
                                    { label: "Male", value: "Male" },
                                    { label: "Female", value: "Female" },
                                    { label: "Other", value: "Other" },
                                ]}
                            />
                        </CCol>
                    </CRow>
                    <CCol>

                        <CFormTextarea
                            id="exampleFormControlTextarea1"
                            label="Address"
                            value={Address}
                            onChange={(e) => setAddress(e.target.value)}
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
                                value={Area}
                                onChange={(e) => setArea(e.target.value)}
                                label="Area"
                                placeholder="Enter Locality"
                            />
                        </CCol>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
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
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)}
                                label="Pin Code"
                                placeholder="Enter Pin Code"
                            />
                        </CCol>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
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
                                value={FacebookID}
                                onChange={(e) => setFacebookID(e.target.value)}
                                label="Facebook Id"
                                placeholder="Enter Facebook id"
                            />
                        </CCol>
                        <CCol>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Blood Group"
                                value={BloodGroup}
                                onChange={(e) => setBloodGroup(e.target.value)}
                                label="Blood Group"
                                options={[
                                    "Select Blood Group",
                                    { label: "A+", value: "A+" },
                                    { label: "A-", value: "A-" },
                                    { label: "B+", value: "B+" },
                                    { label: "B-", value: "B-" },
                                    { label: "O+", value: "O+" },
                                    { label: "O-", value: "O-" },
                                    { label: "AB+", value: "AB+" },
                                    { label: "AB-", value: "AB-" },
                                ]}
                            />
                        </CCol>
                    </CRow>
                    <CCardTitle>Communication Preference Settings</CCardTitle>
                    <CRow>
                        <CCol xs={4}>
                            <CFormSwitch size="xl" label="SMS"
                                checked={sms}
                                onChange={() => setsms(!sms)} />
                        </CCol>
                        <CCol xs={4}>
                            <CFormSwitch size="xl" label="Mail"
                                checked={mail}
                                onChange={() => setmail(!mail)} />
                        </CCol>
                        <CCol xs={4}>
                            <CFormSwitch size="xl" label="Push Notification"
                                checked={pushnotification}
                                onChange={() => setpushnotification(!pushnotification)} />
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
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                                label="Name"
                                placeholder="Enter Name"
                            />
                        </CCol>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                value={Relationship}
                                onChange={(e) => setRelationship(e.target.value)}
                                id="exampleFormControlInput1"
                                label="Relationship"
                                placeholder="Enter Relationship"
                            />
                        </CCol>

                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Working Days"
                                value={CountryCode1}
                                onChange={(e) => setCountryCode1(e.target.value)}
                                label="Country Code"
                            >{CountryList.map((item, index) => (
                                <option key={index} value={item.dial_code}>{item.name} {item.dial_code}</option>
                            ))}</CFormSelect>
                        </CCol>
                        <CCol xs={6}>
                            <CFormInput
                                className="mb-1"
                                type="number"
                                id="exampleFormControlInput1"
                                value={ContactNumber1}
                                onChange={(e) => setContactNumber1(e.target.value)}
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
                                value={serviceName}
                                onChange={(e) => setserviceName(e.target.value)}
                                label="Service Name"
                            >
                                <option>Select Service</option>
                                {result1.map((item, index) => (
                                    item.username === username && (
                                        item.status === true && (
                                            <option key={index}>{item.selected_service}</option>
                                        )
                                    )
                                ))}</CFormSelect>
                        </CCol>
                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Service Name"
                                value={serviceVaration}
                                onChange={(e) => setserviceVariation(e.target.value)}
                                label="Service Variation"
                            >
                                <option>Select Service</option>
                                {result1.filter((list) => list.selected_service === serviceName).map((item, index) => (
                                    item.username === username && (
                                        item.status === true && (
                                            <option key={index}>{item.sub_Service_Name}</option>
                                        )
                                    )
                                ))}</CFormSelect>
                        </CCol>

                        <CCol xs={6}>
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
                        <CCol xs={6}>

                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Assign Staff"
                                value={EnquiryType}
                                onChange={(e) => setEnquiryType(e.target.value)}
                                label="Enquiry Type"

                            >
                                <option>Select Enquiry Type</option>
                                {leadArr.filter((list) => list.username === username).map((item, index) => (
                                    item.username === username && (
                                        <option key={index}>{item.LeadSource}</option>
                                    )
                                ))}</CFormSelect>
                        </CCol>
                    </CRow>

                    <CRow>
                        <CCardTitle>Member Manager</CCardTitle>
                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Assign Staff"
                                value={AssignStaff}
                                onChange={(e) => setAssignStaff(e.target.value)}
                                label="Assign Staff"
                            >
                                <option>Select Assign Staff</option>
                                {staff.filter((list) => list.username === username && list.Department === 'Sales').map((item, index) => (
                                    <option key={index}>{item.FullName}</option>
                                ))}
                            </CFormSelect>
                        </CCol>
                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Member Manager"
                                value={MemberManager}
                                onChange={(e) => setMemberManager(e.target.value)}
                                label="Member Manager"
                                options={[
                                    "Select Member Manager",
                                    { label: "prabha", value: "prabha" },
                                    { label: "sejal", value: "sejal" },
                                    { label: "sonali", value: "sonali" },
                                    { label: "None", value: "None" },
                                ]}
                            />
                        </CCol>
                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Batch"
                                value={Batch}
                                onChange={(e) => setBatch(e.target.value)}
                                label="Batch"
                            ><option>Select Batch</option>
                                {result.map((item, index) => (
                                    item.username === username && (
                                        <option key={index} value={item.batch_timing}>{item.batch_timing} {item.Batch_Duration}</option>
                                    )
                                ))}</CFormSelect>
                        </CCol>
                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select General Trainer"
                                value={GeneralTrainer}
                                onChange={(e) => setGeneralTrainer(e.target.value)}
                                label="General Trainer"
                                options={[
                                    "Select General Trainer",
                                    { label: "None", value: "None" },
                                ]}
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCardTitle>IDs</CCardTitle>
                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                value={AttendanceID}
                                onChange={(e) => setAttendanceID(e.target.value)}
                                label="Attendance ID"
                            >
                                <option>Select Attendance ID</option>
                                <option>CLIENT{mem.length + 1}</option>
                            </CFormSelect>
                        </CCol>
                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                value={CenterID}
                                onChange={(e) => setCenterID(e.target.value)}
                                label="Center ID">
                                <option>Select Center ID</option>
                                <option>{username}</option>
                            </CFormSelect>
                        </CCol>
                        <CCol xs={6}>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                value={LockerKeyNo}
                                onChange={(e) => setLockerKeyNo(e.target.value)}
                                label="Locker Key No"
                                placeholder="Enter Locker Key No"
                            />
                        </CCol>
                        <CCol xs={6}>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                value={PAN}
                                onChange={(e) => setPAN(e.target.value)}
                                label="PAN"
                                placeholder="Enter PAN"
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
                            <CFormCheck label="Back Pain"
                                checked={BackPain}
                                onChange={() => setBackPain(!BackPain)} />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="Bone Fracture"
                                checked={BoneFracture}
                                onChange={() => setBoneFracture(!BoneFracture)} />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="Carpal Tunnel"
                                checked={CarpalTunnel}
                                onChange={() => setCarpalTunnel(!CarpalTunnel)} />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="Diabetes"
                                checked={Diabetes}
                                onChange={() => setDiabetes(!Diabetes)}
                            />
                        </CListGroupItem>
                    </CListGroup>
                </CCol>
                <CCol>
                    <CListGroup>
                        <CListGroupItem>
                            <CFormCheck label="Pregnancy"
                                checked={HeartDiseaseCondition}
                                onChange={() => setHeartDiseaseCondition(!HeartDiseaseCondition)} />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="Shoulder Pain"
                                checked={Epilepsy}
                                onChange={() => setEpilepsy(!Epilepsy)} />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="Foot Pain"
                                checked={FootPain}
                                onChange={() => setFootPain(!FootPain)} />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="Knee Replacement"
                                checked={Glaucoma}
                                onChange={() => setGlaucoma(!Glaucoma)} />
                        </CListGroupItem>
                    </CListGroup>
                </CCol>

                <CCol>
                    <CListGroup>
                        <CListGroupItem>
                            <CFormCheck label="Joint Pain"
                                checked={AsthmaCOPD}
                                onChange={() => setAsthmaCOPD(!AsthmaCOPD)} />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="Surgery"
                                checked={HerniaDiastasisRecti}
                                onChange={() => setHerniaDiastasisRecti(!HerniaDiastasisRecti)} />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="High Blood Pressure"
                                checked={HighBloodPressure}
                                onChange={() => setHighBloodPressure(!HighBloodPressure)} />
                        </CListGroupItem>
                        <CListGroupItem>
                            <CFormCheck label="Other"
                                checked={Other}
                                onChange={() => setOther(!Other)} />
                        </CListGroupItem>
                    </CListGroup>
                </CCol>
                {Other && (
                    <CCol lg={12}>
                        <CFormInput
                            className="mb-1"
                            type="text"
                            id="exampleFormControlInput1"
                            value={OtherText}
                            onChange={(e) => setOtherText(e.target.value)}
                            label="Other Reason"
                            placeholder="Enter Other Reason"
                        />
                    </CCol>
                )}
            </CRow>
            <CButton className='mt-2' onClick={() => saveMember()}>Next</CButton>
        </CForm>
    );
};

export default PersonalDetails;