import { CModal, CModalBody, CModalHeader, CModalTitle, } from '@coreui/react'
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
import React, { useState } from "react";
import { CountryList } from "src/components/CountryList";
import ProfileIcon from 'src/assets/images/avatars/profile_icon.png'
const url = 'https://yoga-power-node-api.herokuapp.com'

const admissionForm = (props) => {
    const [activeKey, setActiveKey] = useState(1)
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [Fullname, setFullname] = useState('')
    const [CountryCode, setCountryCode] = useState('')
    const [ContactNumber, setContactNumber] = useState('')
    const [WhatsappNumber, setWhatsappNumber] = useState('')
    const [Email, setEmail] = useState('')
    const [Gender, setGender] = useState('')
    const [Anniversarydate, setAnniversarydate] = useState('')
    const [DateofBirth, setDateofBirth] = useState('')
    const [Address, setAddress] = useState('')
    const [Area, setArea] = useState('')
    const [city, setCity] = useState('')
    const [pincode, setPincode] = useState('')
    const [state, setState] = useState('')
    const [BloodGroup, setBloodGroup] = useState('')
    const [FacebookID, setFacebookID] = useState('')
    const [sms, setsms] = useState(true)
    const [mail, setmail] = useState(true)
    const [pushnotification, setpushnotification] = useState(true)
    const [Name, setName] = useState('')
    const [CountryCode1, setCountryCode1] = useState('')
    const [ContactNumber1, setContactNumber1] = useState('')
    const [Relationship, setRelationship] = useState('')
    const [Customertype, setCustomertype] = useState('')
    const [serviceName, setserviceName] = useState('')
    const [EnquiryType, setEnquiryType] = useState('')
    const [AssignStaff, setAssignStaff] = useState('')
    const [MemberManager, setMemberManager] = useState('')
    const [Batch, setBatch] = useState('')
    const [GeneralTrainer, setGeneralTrainer] = useState('')
    const [AttendanceID, setAttendanceID] = useState('')
    const [CenterID, setCenterID] = useState('')
    const [LockerKeyNo, setLockerKeyNo] = useState('')
    const [PAN, setPAN] = useState('')
    const [AsthmaCOPD, setAsthmaCOPD] = useState(false)
    const [BackPain, setBackPain] = useState(false)
    const [BoneFracture, setBoneFracture] = useState(false)
    const [CarpalTunnel, setCarpalTunnel] = useState(false)
    const [Diabetes, setDiabetes] = useState(false)
    const [DigestiveDisorder, setDigestiveDisorder] = useState(false)
    const [Epilepsy, setEpilepsy] = useState(false)
    const [FootPain, setFootPain] = useState(false)
    const [Glaucoma, setGlaucoma] = useState(false)
    const [HeartDiseaseCondition, setHeartDiseaseCondition] = useState(false)
    const [HerniaDiastasisRecti, setHerniaDiastasisRecti] = useState(false)
    const [HighBloodPressure, setHighBloodPressure] = useState(false)
    const [Other, setOther] = useState(false)
    const [OtherText, setOtherText] = useState('')
    const [Weight, setWeight] = useState('')
    const [Height, setHeight] = useState('')
    const [fitnessLevel, setfitnessLevel] = useState('')
    const [fitnessGoal, setfitnessGoal] = useState('')
    const [idealWeight, setidealWeight] = useState('')
    const [suggestion, setsuggestion] = useState('')
    const [comments, setcomments] = useState('')

    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;
    const [result, setResult] = useState([]);
    const [result1, setResult1] = useState([]);
    const [mem, setMem] = useState([]);
    useEffect(() => {
        getBatch()
        getMem()
        getSubService()
        getImage()
    }, []);

    function getImage() {
        listAll(imagesListRef).then((response) => {
            console.log(response);
        })
    }
    function getSubService() {
        axios.get(`${url}/subservice/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setResult1(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    function getMem() {
        axios.get(`${url}/memberForm/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setMem(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    function getBatch() {
        axios.get(`${url}/Batch/all`, {
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
    }

    const saveMember = (e) => {
        let data = {
            username: username,
            image: imageUrl,
            Fullname, CountryCode, ContactNumber, WhatsappNumber, Email, Gender, DateofBirth, Anniversarydate, Address, Area, city, pincode, state, BloodGroup,
            FacebookID, sms, mail, pushnotification,
            Name, CountryCode1, ContactNumber1, Relationship,
            serviceName, Customertype, EnquiryType, AssignStaff, MemberManager, Batch, GeneralTrainer, AttendanceID, CenterID, LockerKeyNo, PAN,
            BackPain, BoneFracture, CarpalTunnel, AsthmaCOPD, DigestiveDisorder, Diabetes, Epilepsy, FootPain, Glaucoma, HeartDiseaseCondition, HerniaDiastasisRecti,
            HighBloodPressure, Other: OtherText, Weight, Height, fitnessLevel, fitnessGoal, idealWeight, suggestion, comments, plan: true, status: 'active',
        }

        fetch(`${url}/memberForm/create`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then(() => {
                alert("successfully submitted")
                e.preventDefault();
                console.log("refresh prevented");
                navigate('/forms/member-form')
            })
        })
    }

    const imgRef = useRef(null)
    const handleImage = (e) => {
        setImage(e.target.files[0])
        const file = e.target.files[0]
        if (!file.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            imgRef.current.src = e.target.result
        }
        reader.readAsDataURL(file)
        console.log(file, image);
    }


    const imagesListRef = ref(storage, "images/");
    const UploadImage = () => {
        if (image == null) return;
        const imageRef = ref(storage, `images/${image.name + v4()}`)
        console.log(imageRef.fullPath);
        setImageUrl(imageRef.fullPath)

        uploadBytes(imageRef, image).then(() => {
            alert('image uploaded')
        })
    }
    console.log(imageUrl);

    return (
        <CModal size='lg' style={{ border: '2px solid #0B5345' }} visible={props.add} onClose={props.clickfun} >
            <CModalHeader  >
                <CModalTitle>Admission Form</CModalTitle>
            </CModalHeader>
            <CModalBody>
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
                                        label="Gander"
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
                                                    <option key={index}>{item.selected_service} {item.sub_Service_Name}</option>
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
                                        aria-label="Select Enquiry Type"
                                        value={EnquiryType}
                                        onChange={(e) => setEnquiryType(e.target.value)}
                                        label="Enquiry Type"
                                        options={[
                                            "Select Enquiry Type",
                                            { label: "Walk-In", value: "Walk-In" },
                                            { label: "E-mail", value: "E-mail" },
                                            { label: "Social Media", value: "Social Media" },
                                            { label: "Website", value: "Website" },
                                            { label: "Call Enquiry", value: "Call Enquiry" },
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
                                        value={AssignStaff}
                                        onChange={(e) => setAssignStaff(e.target.value)}
                                        label="Assign Staff"
                                        options={[
                                            "Select Assign Staff",
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
                    <CRow>
                        <CCol xs={6}>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                value={Height}
                                onChange={(e) => setHeight(e.target.value)}
                                label="Height"
                                placeholder="Enter height"
                            />
                        </CCol>
                        <CCol xs={6}>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                value={Weight}
                                onChange={(e) => setWeight(e.target.value)}
                                label="Weight"
                                placeholder="Enter Weight"
                            />
                        </CCol>
                        <CCardTitle>Fitness Goals</CCardTitle>

                        <CCol xs={6}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Currency"
                                value={fitnessLevel}
                                onChange={(e) => setfitnessLevel(e.target.value)}
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
                                value={fitnessGoal}
                                onChange={(e) => setfitnessGoal(e.target.value)}
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
                                value={idealWeight}
                                onChange={(e) => setidealWeight(e.target.value)}
                                type="text"
                                id="exampleFormControlInput1"
                                label="Ideal Weight"
                                placeholder="Enter Ideal Weight"
                            />
                        </CCol>
                        <CCol>
                            <CFormTextarea
                                id="exampleFormControlTextarea1"
                                value={suggestion}
                                onChange={(e) => setsuggestion(e.target.value)}
                                label="Suggestion"
                                rows="2"
                                text="Must be 8-20 words long."
                            ></CFormTextarea>
                        </CCol>
                        <CCol>

                            <CFormTextarea
                                id="exampleFormControlTextarea1"
                                value={comments}
                                onChange={(e) => setcomments(e.target.value)}
                                label="Comments"
                                rows="2"
                                text="Must be 8-20 words long."
                            ></CFormTextarea>
                        </CCol>
                    </CRow>
                    <CButton className='mt-2' onClick={() => saveMember()}>Save</CButton>
                </CForm>
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={props.clickfun}>
                    Close
                </CButton>
                <CButton type='submit' color="primary" onClick={() => saveCallReport()}>Save Call Report</CButton>
            </CModalFooter>
        </CModal>
    )
}

export default admissionForm
