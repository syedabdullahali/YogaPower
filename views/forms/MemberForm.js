import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CForm,
    CFormCheck,
    CFormInput,
    CFormSelect,
    CFormSwitch,
    CFormTextarea,
    CImage,
    CInputGroup,
    CInputGroupText,
    CListGroup,
    CListGroupItem,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CNav,
    CNavItem,
    CNavLink,
    CRow,
    CTabContent,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CTabPane,
} from "@coreui/react";
import React, { useEffect, useRef, useState } from "react";
import { CountryList } from "src/components/CountryList";
import ProfileIcon from 'src/assets/images/avatars/profile_icon.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { listAll, ref, uploadBytes } from "firebase/storage";
import { storage } from "src/firebase";
import logo from 'src/assets/images/avatars/icon.png'
import { v4 } from "uuid";
import { useReactToPrint } from 'react-to-print'
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const MemberForm = () => {

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'yog-power',
        onAfterPrint: () => alert('print success')
    })

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
    const [serviceVaration, setserviceVariation] = useState('')
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

    var currentdate = new Date();
    var datetime = currentdate.getDay() + "/" + currentdate.getMonth()
        + "/" + currentdate.getFullYear();
    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;
    const centerCode = user.user.centerCode;
    const [result, setResult] = useState([]);
    const [result1, setResult1] = useState([]);
    const [visi, setVisi] = useState(false);
    const [mem, setMem] = useState([]);
    const [packageArr, setPackageArr] = useState([]);
    useEffect(() => {
        getBatch()
        getMem()
        getSubService()
        getPackage()
        getStaff()
        getImage()
        getLeadSource()
    }, []);
    const [leadArr, setLeadArr] = useState([]);
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
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error)
            })
    }
    function getPackage() {
        axios.get(`${url}/Package/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                setPackageArr(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

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

    const saveMember = () => {
        let data = {
            username: username,
            image: imageUrl,
            Fullname, CountryCode, ContactNumber, WhatsappNumber, Email, Gender, DateofBirth, Anniversarydate, Address, Area, city, pincode, state, BloodGroup,
            FacebookID, sms, mail, pushnotification,
            Name, CountryCode1, ContactNumber1, Relationship,
            serviceName, serviceVariation: serviceVaration, Customertype, EnquiryType, AssignStaff, MemberManager, Batch, GeneralTrainer, AttendanceID, CenterID, LockerKeyNo, PAN,
            BackPain, BoneFracture, CarpalTunnel, AsthmaCOPD, DigestiveDisorder, Diabetes, Epilepsy, FootPain, Glaucoma, HeartDiseaseCondition, HerniaDiastasisRecti,
            HighBloodPressure, Other: OtherText, Weight, Height, fitnessLevel, fitnessGoal, idealWeight, suggestion, comments, plan: true, status: 'active',
        }


        const headers = {
            'Authorization': `Bearer ${token}`,
            'My-Custom-Header': 'foobar'
        };
        axios.post(`${url}/memberForm/create`, data, { headers },
        )
            .then((resp) => {
                setMemberId(resp.data._id);
                alert("successfully submitted")
                console.log("refresh prevented");
                setVisi(true)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const [visi1, setVisi1] = useState('')
    const [MemberId, setMemberId] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [tax, settax] = useState(0)
    const [total, setTotal] = useState(0)
    const [paidAmount, setpaidAmount] = useState('')
    const [discount, setDiscount] = useState()
    const [dis1, setDis1] = useState()
    const [pendingAmount, setPendingAmount] = useState('')
    const [paymode, setPayMode] = useState('')
    const [finalTotal, setFinalTotal] = useState('')
    const [ser1, setSer1] = useState('')
    const [ser2, setSer2] = useState('')
    const [ser3, setSer3] = useState('')
    const [ser4, setSer4] = useState('')
    const [ser5, setSer5] = useState('')
    const [ser6, setSer6] = useState('')
    const [invId, setInvId] = useState('')
    const saveInvoice = () => {
        let data = {
            username: username,
            date: datetime,
            centerName: centerCode,
            InvoiceNo: `${centerCode}Inv-${mem.length}`,
            MemberId: MemberId, MemberName: Fullname, ServiceName: serviceName, ServiceVariation: ser4, PackageName: ser6, duration: ser2, fees: ser3, startDate, endDate,
            counseller: ser5, trainer: GeneralTrainer, amount: total, tax, discount, totalAmount: finalTotal, paidAmount, pendingAmount, paymode, status: 'active'
        }

        const headers = {
            'Authorization': `Bearer ${token}`,
            'My-Custom-Header': 'foobar'
        };
        axios.post(`${url}/invoice/create`, data, { headers },
        )
            .then((resp) => {
                setInvId(resp.data._id);
                console.log(resp.data._id);
                let data1 = { invoiceId: resp.data._id, invoiceNum: resp.data.InvoiceNo, startDate, endDate, }
                axios.post(`${url}/memberForm/update/${MemberId}`, data1, { headers },
                )

                    .then(() => {
                        console.log(resp.data._id);
                        alert("successfully submitted")
                        console.log("refresh prevented");
                        setVisi1(true)
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            })
            .catch((error) => {
                console.error(error)
            })

    }


    const handleTaxTotal = (e) => {
        settax(e.target.value)
        let total = ser3 / 100 * e.target.value;
        if (total >= 0) {
            setTotal(Number(total) + Number(ser3))
        } else {
            setTotal(ser3)
        }
    }

    const handleDiscount = (e) => {
        let total = ser3 / 100 * tax;

        if (dis1 == 'R') {
            if (total >= 0) {
                setTotal(Number(total) + Number(ser3) - e.target.value)
            } else {
                setTotal(ser3 - e.target.value)
            }
        } else {
            let dis = ser3 / 100 * e.target.value;
            if (total >= 0) {
                setTotal(Number(total) + Number(ser3) - dis)
            } else {
                setTotal(ser3 - dis)
            }
        }
        setDiscount(e.target.value)
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
    return (
        <CCard>
            <CCardHeader>Member Form</CCardHeader>
            <CCardBody>
                <CCard className="mb-3 border-success">
                    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                        <CNav variant="pills" role="tablist" className='d-flex'>
                            <CNavItem >
                                <CNavLink
                                    style={{ color: 'white' }}
                                    href="javascript:void(0);"
                                    active={activeKey === 1}
                                    onClick={() => setActiveKey(1)}
                                >
                                    Personal Information
                                </CNavLink>
                            </CNavItem>
                            <CNavItem >
                                <CNavLink
                                    style={{ color: 'white' }}
                                    href="javascript:void(0);"
                                    active={activeKey === 2}
                                    onClick={() => setActiveKey(2)}
                                >
                                    Fitness Profile
                                </CNavLink>
                            </CNavItem>
                        </CNav>
                    </CCardHeader>
                    <CCardBody>
                        <CTabContent>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
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
                                                        {staff.filter((list) => list.username === username && list.Department.toLowerCase() === 'sales' && list.selected === 'Select').map((item, index) => (
                                                            item.username === username && (
                                                                <option key={index}>{item.FullName}</option>
                                                            )
                                                        ))}</CFormSelect>
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
                                                        <option>{centerCode}CL{mem.length + 1}</option>
                                                    </CFormSelect>
                                                </CCol>
                                                <CCol xs={6}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        type="text"
                                                        id="exampleFormControlInput1"
                                                        value={CenterID}
                                                        onChange={(e) => setCenterID(e.target.value)}
                                                        label="Center Code">
                                                        <option>Select Center Code</option>
                                                        <option>{centerCode}</option>
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
                            </CTabPane>
                            <CTabPane role="tabpane2" aria-labelledby="second-tab" visible={activeKey === 2}>
                                <CForm>
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
                                                    { label: "Weight loss", value: "Weight loss" },
                                                    { label: "Inch loss", value: "Inch loss" },
                                                    { label: "Fitness", value: "Fitness" },
                                                    { label: "Staminess", value: "Staminess" },
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

                                    <CButton className='mt-2' onClick={() => saveMember()}>Next</CButton>
                                </CForm>
                            </CTabPane>
                        </CTabContent>

                        <CModal size="xl" alignment="center" scrollable visible={visi} onClose={() => setVisi(false)}>
                            <CModalHeader>
                                <CModalTitle>Invoice</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                <CRow>
                                    <CCol lg={12} className='text-center'><CImage src={logo} width="100px" height='100px' /></CCol>
                                    <CCol lg={12} className='text-center mt-2'><h5>Yog Power International</h5></CCol>

                                </CRow>
                                <CRow className="mt-2">
                                    <CCol style={{ marginLeft: '5px' }}>
                                        <h6>Client Name: {Fullname}</h6>
                                        <div>Client Number: {ContactNumber}</div>
                                        Customer ID : {AttendanceID}<br />
                                        Email-Id : {Email}<br />
                                    </CCol>
                                    <CCol lg={4} className='text-center mt-4'><h4>Invoice</h4></CCol>
                                    <CCol >
                                        Date : {datetime}<br />
                                        Invoice No : {centerCode}INV{result1.length} <br />
                                        <CRow>
                                            <CCol lg={9}>
                                                <CInputGroup>
                                                    <CInputGroupText
                                                        component="label"
                                                        htmlFor="inputGroupSelect01"
                                                    >
                                                        Counseller :
                                                    </CInputGroupText>
                                                    <CFormInput
                                                        type="text"
                                                        value={ser5}
                                                        onChange={(e) => setSer5(e.target.value)}
                                                        style={{ minWidth: "100px" }}
                                                        aria-describedby="exampleFormControlInputHelpInline"
                                                    />
                                                </CInputGroup>
                                            </CCol>
                                        </CRow>
                                    </CCol>
                                </CRow>
                                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} responsive>
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
                                            <CTableDataCell>
                                                <CRow>
                                                    <CCol>
                                                        <CFormSelect
                                                            className="mb-1"
                                                            aria-label="Select Service Name"
                                                            value={ser1}
                                                            onChange={(e) => setSer1(e.target.value)}
                                                            label='Service Name'
                                                        >
                                                            <option>Select Service</option>
                                                            {result1.filter((list) =>
                                                                list.username === username &&
                                                                list.status === true).map((item, index) => (
                                                                    <option key={index} value={item.selected_service}> {item.selected_service}</option>
                                                                ))}
                                                        </CFormSelect>
                                                    </CCol>
                                                    <CCol>
                                                        <CFormSelect
                                                            className="mb-1"
                                                            aria-label="Select Service Name"
                                                            value={ser6}
                                                            label='Service Variation'
                                                            onChange={(e) => setSer6(e.target.value)}
                                                        >
                                                            <option>Select Variation</option>
                                                            {result1.filter((list) =>
                                                                list.username === username && list.selected_service === ser1 &&
                                                                list.status === true).map((item, index) => (
                                                                    <option key={index} value={item.sub_Service_Name}> {item.sub_Service_Name}</option>
                                                                ))}
                                                        </CFormSelect>
                                                    </CCol>
                                                    <CCol>
                                                        <CFormSelect
                                                            className="mb-1"
                                                            aria-label="Select Package"
                                                            value={ser4}
                                                            onChange={(e) => setSer4(e.target.value)}
                                                            label='Package'
                                                        >
                                                            <option>Select Package</option>
                                                            {result1.filter((list) =>
                                                                list.username === username && list.sub_Service_Name === ser6 &&
                                                                list.status === true).map((item, index) => (
                                                                    <option key={index} value={item.packages}> {item.packages}</option>
                                                                ))}
                                                        </CFormSelect>
                                                    </CCol>
                                                </CRow>
                                                <CRow>
                                                    <CCol>
                                                        <CInputGroup>
                                                            <CInputGroupText
                                                                component="label"
                                                                htmlFor="inputGroupSelect01"
                                                            >
                                                                Start Date :
                                                            </CInputGroupText>
                                                            <CFormInput
                                                                type="date"
                                                                value={startDate}
                                                                onChange={(e) => setStartDate(e.target.value)}
                                                                style={{ minWidth: "100px" }}
                                                                aria-describedby="exampleFormControlInputHelpInline"
                                                            />
                                                        </CInputGroup>
                                                    </CCol>
                                                    <CCol>
                                                        <CInputGroup>
                                                            <CInputGroupText
                                                                component="label"
                                                                htmlFor="inputGroupSelect01"
                                                            >
                                                                End Date :
                                                            </CInputGroupText>
                                                            <CFormInput
                                                                type="date"
                                                                value={endDate}
                                                                onChange={(e) => setEndDate(e.target.value)}
                                                                style={{ minWidth: "100px" }}
                                                                aria-describedby="exampleFormControlInputHelpInline"
                                                            />
                                                        </CInputGroup>
                                                    </CCol>
                                                </CRow>

                                            </CTableDataCell>
                                            <CTableDataCell>

                                                <CFormSelect
                                                    className="mb-1"
                                                    aria-label="Select Service Name"
                                                    value={ser2}
                                                    onChange={(e) => setSer2(e.target.value)}
                                                >
                                                    <option>Select Duration</option>
                                                    {result1.filter((list) =>
                                                        list.username === username &&
                                                        list.status === true && list.duration !== '' && list.sub_Service_Name === ser6).map((item, index) => (
                                                            <option key={index} value={item.duration}>{item.duration}</option>
                                                        ))}
                                                </CFormSelect>


                                            </CTableDataCell>
                                            <CTableDataCell>
                                                <CFormSelect
                                                    className="mb-1"
                                                    aria-label="Select Service Name"
                                                    value={ser3}
                                                    onChange={(e) => setSer3(e.target.value)}
                                                >
                                                    <option>Select Fees</option>
                                                    {result1.filter((list) =>
                                                        list.username === username &&
                                                        list.status === true && list.duration.includes(ser2)).map((item, index) => (
                                                            <option key={index} value={item.fees}>{item.fees}</option>
                                                        ))}
                                                </CFormSelect>
                                            </CTableDataCell>
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
                                                                    style={{ minWidth: "100px" }}
                                                                    aria-describedby="exampleFormControlInputHelpInline"
                                                                    value={ser3}

                                                                />
                                                            </CTableDataCell>
                                                        </CTableRow>

                                                        <CTableRow>
                                                            <CTableDataCell>
                                                                <CRow>
                                                                    <CCol>
                                                                        Discount
                                                                    </CCol>
                                                                    <CCol>
                                                                        <CFormSelect
                                                                            className="mb-1"
                                                                            aria-label="Select"
                                                                            value={dis1}
                                                                            onChange={(e) => { setDis1(e.target.value), setDiscount(0) }}
                                                                            options={[
                                                                                { label: "select", value: "" },
                                                                                { label: "%", value: "P" },
                                                                                { label: "₹", value: "R" },
                                                                            ]}
                                                                        />
                                                                    </CCol>
                                                                </CRow>
                                                            </CTableDataCell>
                                                            <CTableDataCell>
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    value={discount}
                                                                    onChange={(e) => handleDiscount(e)}
                                                                    type="number"
                                                                    aria-describedby="exampleFormControlInputHelpInline"
                                                                />
                                                            </CTableDataCell>
                                                        </CTableRow>
                                                        <CTableRow>
                                                            <CTableDataCell>
                                                                <CRow>
                                                                    <CCol lg={4}>Tax </CCol>
                                                                    <CCol>
                                                                        <CFormSelect
                                                                            className="mb-1"
                                                                            value={tax}
                                                                            onChange={(e) => handleTaxTotal(e)}
                                                                            aria-label="Select"
                                                                            options={[
                                                                                { label: "Select", value: "0" },
                                                                                { label: "GST", value: "18" },
                                                                                { label: "IGST", value: "18" },
                                                                                { label: "CGST", value: "18" },
                                                                                { label: "TDS", value: "18" },
                                                                            ]}
                                                                        /></CCol>
                                                                </CRow>
                                                            </CTableDataCell>
                                                            <CTableDataCell className="mt-2">
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    style={{ minWidth: "100px" }}
                                                                    aria-describedby="exampleFormControlInputHelpInline"
                                                                    value={ser3 / 100 * tax}
                                                                />
                                                            </CTableDataCell>
                                                        </CTableRow>
                                                        <CTableRow>
                                                            <CTableDataCell>Total Amount</CTableDataCell>
                                                            <CTableDataCell>
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="number"
                                                                    value={total}
                                                                    style={{ minWidth: "100px" }}
                                                                    aria-describedby="exampleFormControlInputHelpInline"
                                                                />
                                                            </CTableDataCell>
                                                        </CTableRow>

                                                        <CTableRow>
                                                            <CTableDataCell>Paid Amount</CTableDataCell>
                                                            <CTableDataCell>
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="number"
                                                                    value={paidAmount}
                                                                    onChange={(e) => { setpaidAmount(e.target.value), setPendingAmount(total - e.target.value), setFinalTotal(e.target.value) }}
                                                                    style={{ minWidth: "100px" }}
                                                                    aria-describedby="exampleFormControlInputHelpInline"
                                                                />
                                                            </CTableDataCell>
                                                        </CTableRow>
                                                        <CTableRow>
                                                            <CTableDataCell>Balance Amount</CTableDataCell>
                                                            <CTableDataCell>
                                                                <CFormInput
                                                                    className="mb-1"
                                                                    type="number"
                                                                    value={pendingAmount}
                                                                    onChange={(e) => { setPendingAmount(e.target.value), setpaidAmount(total - e.target.value), setFinalTotal(total - e.target.value) }}
                                                                    style={{ minWidth: "100px" }}
                                                                    aria-describedby="exampleFormControlInputHelpInline"
                                                                />
                                                            </CTableDataCell>
                                                        </CTableRow>

                                                        <CTableRow>
                                                            <CTableDataCell>Mode of Payment</CTableDataCell>

                                                            <CTableDataCell>
                                                                <CFormSelect
                                                                    className="mb-1"
                                                                    aria-label="Select Call Status"
                                                                    value={paymode}
                                                                    onChange={(e) => { setPayMode(e.target.value) }}
                                                                    style={{ minWidth: "100px" }}
                                                                    options={[
                                                                        "Select",
                                                                        { label: "Cash", value: "Cash" },
                                                                        { label: "Debit Card", value: "Debit Card" },
                                                                        { label: "Credit Card", value: "Credit Card" },
                                                                        { label: "Cheque", value: "Cheque" },
                                                                        { label: "Draft", value: "Draft" },
                                                                        { label: "Paytm", value: "Paytm" },
                                                                        { label: "GPay", value: "GPay" },
                                                                        { label: "PhonePe", value: "PhonePe" },
                                                                        { label: "Account Pay", value: "Account Pay" },
                                                                    ]}
                                                                />
                                                            </CTableDataCell>
                                                        </CTableRow>
                                                        <CTableRow>
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
                                                    value={finalTotal}
                                                    onChange={(e) => setFinalTotal(e.target.value)}
                                                    style={{ minWidth: "100px" }}
                                                    aria-describedby="exampleFormControlInputHelpInline"
                                                />
                                            </CTableDataCell>
                                        </CTableRow>
                                        <CTableRow style={{ backgroundColor: "#0B5345", color: "white" }}>
                                            <CTableDataCell colSpan={4}>
                                                <h5>TERMS AND CONDITIONS</h5>
                                            </CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableDataCell colSpan={4}>
                                                <div>Fee once paid is not refundable, Non transferable & no package extension, lapsed sessions has to be adjusted within the expiry date. Instructors & timings are subject to change. All packages would be on hourly basis in a day. If a person wishes to workout more than an hour in a day, kindly upgrade your package accordingly. follow guidelines for better result</div>
                                            </CTableDataCell>
                                        </CTableRow>

                                        <CTableRow>
                                            <CTableDataCell colSpan={4}>
                                                <div style={{ fontWeight: 'bold' }}>Address: Shop 24/25, 2nd Floor, V Mall, Thakur Complex, Kandivali East, Mumbai 400 101. India.</div>
                                                <label style={{ fontWeight: 'bold' }}>Email: info@yogpowerint.com</label>
                                                <label style={{ fontWeight: 'bold', marginLeft: '10px' }}>Phone: +91 9819 1232 91</label>
                                                <div style={{ fontWeight: 'bold' }}>Website: https://yogpowerint.com</div>
                                            </CTableDataCell>
                                        </CTableRow>
                                    </CTableBody>
                                </CTable>

                            </CModalBody>
                            <CModalFooter>
                                <CButton color="secondary" onClick={() => setVisi(false)}>
                                    Close
                                </CButton>
                                <CButton color="primary" onClick={() => saveInvoice()}>Submit</CButton>
                            </CModalFooter>
                        </CModal>

                        <CModal size="xl" alignment="center" scrollable visible={visi1} onClose={() => setVisi1(false)}>
                            <CModalHeader>
                                <CModalTitle>Invoice Preview</CModalTitle>
                            </CModalHeader>
                            <CModalBody ref={componentRef} style={{ padding: '25px' }}>
                                <CRow>
                                    <CCol lg={12} className='text-center'><CImage src={logo} width="100px" height='100px' /></CCol>
                                    <CCol lg={12} className='text-center mt-2'><h5>Yog Power International</h5></CCol>
                                    <CCol className='mt-2' style={{ marginLeft: '10px' }}>
                                        <h6>Client Name: {Fullname}</h6>
                                        <div>Client Number: {ContactNumber}</div>
                                        Customer ID : {AttendanceID}<br />
                                        Email-Id : {Email}<br />
                                    </CCol>
                                    <CCol className='mt-2' style={{ marginRight: '30px' }}>
                                        <div className='float-end'>
                                            Date : {datetime}<br />
                                            Invoice No : {centerCode}INV{result1.length} <br />
                                            Counseller : {ser5}
                                        </div>
                                    </CCol>
                                    <CCol lg={12} className='text-center mt-2'><h4>Invoice</h4></CCol>
                                </CRow>

                                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} responsive>
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
                                            <CTableDataCell>
                                                <CRow>
                                                    <CCol lg={6}>
                                                        <div style={{ fontWeight: 'bold' }}>Service Name: {ser1}</div>
                                                    </CCol>
                                                    <CCol lg={6}>
                                                        <div style={{ fontWeight: 'bold' }}>Service Variation: {ser6}</div>
                                                    </CCol>
                                                    <CCol lg={12}>
                                                        <div style={{ fontWeight: 'bold' }}>Package : {ser4}</div>
                                                    </CCol>
                                                </CRow>
                                                <CRow>
                                                    <CCol>
                                                        <div>Start Date: {startDate}</div>
                                                    </CCol>
                                                    <CCol>
                                                        <div >End Date: {endDate}</div>
                                                    </CCol>
                                                </CRow>

                                            </CTableDataCell>
                                            <CTableDataCell>
                                                <div style={{ fontWeight: 'bold' }}>{ser2}</div>

                                            </CTableDataCell>
                                            <CTableDataCell>
                                                <div style={{ fontWeight: 'bold' }}>{ser3}</div>
                                            </CTableDataCell>
                                        </CTableRow>

                                        <CTableRow>
                                            <CTableDataCell colSpan={2}></CTableDataCell>
                                            <CTableDataCell colSpan={2}>
                                                <CTable bordered style={{ margin: '0', padding: '0' }} responsive>
                                                    <CTableBody>
                                                        <CTableRow>
                                                            <CTableDataCell>Sub Total</CTableDataCell>
                                                            <CTableDataCell>
                                                                <div style={{ fontWeight: 'bold' }}>{ser3}</div>

                                                            </CTableDataCell>
                                                        </CTableRow>

                                                        <CTableRow>
                                                            <CTableDataCell>

                                                                Discount

                                                            </CTableDataCell>
                                                            <CTableDataCell>
                                                                <div style={{ fontWeight: 'bold' }}>{discount}{dis1 === 'P' ? '%' : 'Rs'}</div>
                                                            </CTableDataCell>
                                                        </CTableRow>
                                                        <CTableRow>
                                                            <CTableDataCell>
                                                                Tax
                                                            </CTableDataCell>
                                                            <CTableDataCell className="mt-2">
                                                                <div style={{ fontWeight: 'bold' }}>{ser3 / 100 * tax}</div>
                                                            </CTableDataCell>
                                                        </CTableRow>
                                                        <CTableRow>
                                                            <CTableDataCell>Total Amount</CTableDataCell>
                                                            <CTableDataCell>
                                                                <div style={{ fontWeight: 'bold' }}>{total}</div>

                                                            </CTableDataCell>
                                                        </CTableRow>

                                                        <CTableRow>
                                                            <CTableDataCell>Paid Amount</CTableDataCell>
                                                            <CTableDataCell>
                                                                <div style={{ fontWeight: 'bold' }}>{paidAmount}</div>

                                                            </CTableDataCell>
                                                        </CTableRow>
                                                        <CTableRow>
                                                            <CTableDataCell>Balance Amount</CTableDataCell>
                                                            <CTableDataCell>
                                                                <div style={{ fontWeight: 'bold' }}>{pendingAmount}</div>
                                                            </CTableDataCell>
                                                        </CTableRow>

                                                        <CTableRow>
                                                            <CTableDataCell>Mode of Payment</CTableDataCell>

                                                            <CTableDataCell>
                                                                <div style={{ fontWeight: 'bold' }}>{paymode}</div>

                                                            </CTableDataCell>
                                                        </CTableRow>
                                                        <CTableRow>
                                                        </CTableRow>
                                                    </CTableBody>
                                                </CTable>
                                            </CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableDataCell colSpan={3}>Total</CTableDataCell>
                                            <CTableDataCell>
                                                <div style={{ fontWeight: 'bold' }}>{finalTotal}</div>
                                            </CTableDataCell>
                                        </CTableRow>
                                        <CTableRow style={{ backgroundColor: "#0B5345", color: "white" }}>
                                            <CTableDataCell colSpan={4}>
                                                <h5>TERMS AND CONDITIONS</h5>
                                            </CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableDataCell colSpan={4}>
                                                <div>Fee once paid is not refundable, Non transferable & no package extension, lapsed sessions has to be adjusted within the expiry date. Instructors & timings are subject to change. All packages would be on hourly basis in a day. If a person wishes to workout more than an hour in a day, kindly upgrade your package accordingly. follow guidelines for better result</div>
                                            </CTableDataCell>
                                        </CTableRow>

                                        <CTableRow>
                                            <CTableDataCell colSpan={4}>
                                                <div style={{ fontWeight: 'bold' }}>Address: Shop 24/25, 2nd Floor, V Mall, Thakur Complex, Kandivali East, Mumbai 400 101. India.</div>
                                                <label style={{ fontWeight: 'bold' }}>Email: info@yogpowerint.com</label>
                                                <label style={{ fontWeight: 'bold', marginLeft: '10px' }}>Phone: +91 9819 1232 91</label>
                                                <div style={{ fontWeight: 'bold' }}>Website: https://yogpowerint.com</div>
                                            </CTableDataCell>
                                        </CTableRow>
                                    </CTableBody>
                                </CTable>
                            </CModalBody>
                            <CModalFooter>
                                <CButton color="primary" onClick={handlePrint}>Print</CButton>
                            </CModalFooter>
                        </CModal>
                    </CCardBody>
                </CCard>
            </CCardBody >
        </CCard >
    );
};

export default MemberForm;