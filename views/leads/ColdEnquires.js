import React, { useEffect, useState } from 'react'
import {
    CButton,
    CButtonGroup,
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
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CPagination,
    CPaginationItem,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleBottom, cilArrowCircleTop } from '@coreui/icons'
import axios from 'axios'
import { MdCall, MdDelete, MdEdit, MdMail } from 'react-icons/md'
import { BsPlusCircle, BsWhatsapp } from 'react-icons/bs'
import moment from 'moment/moment'
import AdmissionForm1 from 'src/components/AdmissionForm1'
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const ColdEnquires = () => {
    var currentdate = new Date();
    var day = currentdate.getDate() + '-' + (currentdate.getMonth() + 1) + '-' + currentdate.getFullYear();
    var month = currentdate.getMonth() + '-' + currentdate.getFullYear();
    var year = currentdate.getFullYear();

    console.log(month + 1);
    console.log(day);
    const [select, setSelect] = useState('')
    const [followForm, setFollowForm] = useState()
    const [edit, setEdit] = useState()
    const [callReport, setCallReport] = useState(false)
    const [visible, setVisible] = useState(false)
    const [visible1, setVisible1] = useState(false)
    const [admissionForm, setAdmissionForm] = useState(false)
    const [Search1, setSearch1] = useState('')
    const [Search2, setSearch2] = useState('')
    const [Search3, setSearch3] = useState('')
    const [Search4, setSearch4] = useState('')
    const [Search5, setSearch5] = useState('')
    const [Search6, setSearch6] = useState('')
    const [Search7, setSearch7] = useState('')
    const [Search8, setSearch8] = useState('')
    const [Search9, setSearch9] = useState('')
    const [Search10, setSearch10] = useState('')

    const [filter1, setfilter1] = useState("Select");
    const [filter2, setfilter2] = useState("Select");
    const [filter3, setfilter3] = useState("Select");
    const [filter4, setfilter4] = useState("Select");

    const [Name, setName] = useState("");
    const [Contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [ServiceName1, setServiceName1] = useState("");
    const [CallStatus1, setCallStatus1] = useState("");
    const [FollowupDate, setFollowupDate] = useState("");
    const [enquiryStage, setEnquiryStage] = useState('')
    const [TimeFollowp, setTimeFollowp] = useState("");
    const [Discussion, setDiscussion] = useState("");
    const [Counseller, setCounseller] = useState("");

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
    const [Customertype, setCustomertype] = useState("");
    const [enquirytype, setEnquirytype] = useState("");
    const [appointmentDate, setappointmentDate] = useState("");
    const [appointmentTime, setappointmentTime] = useState("");
    const [appointmentfor, setappointmentfor] = useState("");
    const [trialDate, setTrialDate] = useState("");


    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;
    const centerCode = user.user.centerCode;

    const dashboardAccess = user.user.dashboardAccess;
    const [result1, setResult1] = useState([]);
    console.log(token);
    const [result, setResult] = useState([]);
    const [paging, setPaging] = useState(0);
    const [updateItem, setUpdateItem] = useState([]);

    const [pros, setPros] = useState([])
    useEffect(() => {
        getEnquiry()
        getStaff()
        axios.get(`${url}/prospect/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.warn(res.data.filter((list) => list.status === "prospect"))
                setPros(res.data.filter((list) => list.status === "prospect"))
            })
            .catch((error) => {
                console.error(error)
            })
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
    }, []);
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
    function addForm(id) {
        localStorage.setItem('adId', JSON.stringify(id))
    }
    function handleAdmission(id) {
        console.log(id)
        console.log(edit)
        setEdit(null)
        if (id != null) {
            axios.get(`${url}/enquiryForm/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                console.log(res.data)
                setEdit(res.data)

                if (edit != null && res.data != null) {
                    setAdmissionForm(true)
                }
            })
                .catch((error) => {
                    console.error(error)
                })
        }
    }
    const saveEnquiry = () => {
        let data = {
            username: username,
            Fullname, Emailaddress, ContactNumber, Gander, DateofBirth, address, Area, city, Profession,
            StaffName, CenterName, CallStatus, Message,
            person_Name, Relation, ContactNumber2: ContactNumber2,
            EnquiryDate, ServiceName, Customertype, enquirytype, appointmentDate, appointmentTime, appointmentfor: appointmentfor, Counseller: Counseller, trialDate: trialDate, status: "all_enquiry",
        }

        fetch(`${url}/enquiryForm/update/${edit}`, {
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
                setVisible1(false)
            })
        })
    }

    const [ogList, setOgList] = useState([])
    const saveProspect = () => {
        var currentdate = new Date();
        var date = currentdate.getDay() + "-" + currentdate.getMonth()
            + "-" + currentdate.getFullYear();
        var time =
            + currentdate.getHours() + ":"
            + currentdate.getMinutes();

        if (enquiryStage === 'Appointment') {
            const data1 = { appointmentDate, appointmentTime, appointmentfor: 'Appointment', Counseller: Counseller }
            let data2 = {
                username: username,
                EnquiryID: followForm, CallDate: date, Time: time,
                Name: Name, Contact: Contact, Email: email, ServiceName: ServiceName1, AppointmentDate: appointmentDate, AppointmentTime: appointmentTime, enquiryStage: enquiryStage, CallStatus: CallStatus1, FollowupDate: FollowupDate, TimeFollowp: TimeFollowp, Counseller: Counseller, Discussion: Discussion,
                status: 'CallReport'
            }

            fetch(`${url}/enquiryForm/update/${followForm}`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data1)
            }).then((resp) => {
                resp.json().then(() => {
                    alert("successfully submitted")
                    setVisible(false)
                })
            })


            fetch(`${url}/prospect/create`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data2)
            }).then((resp) => {
                resp.json().then(() => {
                    setCallReport(false)
                })
            })

        } else if (enquiryStage === 'Trial Session') {
            const data1 = { appointmentDate, appointmentTime, appointmentfor: 'Trial Session', Counseller: Counseller }
            let data2 = {
                username: username,
                EnquiryID: followForm, CallDate: date, Time: time,
                Name: Name, Contact: Contact, Email: email, ServiceName: ServiceName1, AppointmentDate: appointmentDate, AppointmentTime: appointmentTime, enquiryStage: enquiryStage, CallStatus: CallStatus1, FollowupDate: FollowupDate, TimeFollowp: TimeFollowp, Counseller: Counseller, Discussion: Discussion,
                status: 'CallReport'
            }

            fetch(`${url}/enquiryForm/update/${followForm}`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data1)
            }).then((resp) => {
                resp.json().then(() => {
                    alert("successfully submitted")
                    setVisible(false)
                })
            })

            fetch(`${url}/prospect/create`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data2)
            }).then((resp) => {
                resp.json().then(() => {
                    setCallReport(false)
                })
            })
        } else if (enquiryStage === 'Join') {
            handleAdmission(followForm)
            setVisible(false)

            let data2 = {
                username: username,
                EnquiryID: followForm, CallDate: date, Time: time,
                Name: Name, Contact: Contact, Email: email, ServiceName: ServiceName1, AppointmentDate: appointmentDate, AppointmentTime: appointmentTime, enquiryStage: enquiryStage, CallStatus: CallStatus1, FollowupDate: FollowupDate, TimeFollowp: TimeFollowp, Counseller: Counseller, Discussion: Discussion,
                status: 'CallReport'
            }
            fetch(`${url}/prospect/create`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data2)
            }).then((resp) => {
                resp.json().then(() => {
                    setCallReport(false)
                })
            })
        } else if (enquiryStage === 'Prospect') {
            let data = {
                username: username,
                EnquiryID: followForm, CallDate: date, Time: time,
                Name: Name, Contact: Contact, Email: email, ServiceName: ServiceName1, AppointmentDate: appointmentDate, AppointmentTime: appointmentTime, enquiryStage: enquiryStage, CallStatus: CallStatus1, FollowupDate: FollowupDate, TimeFollowp: TimeFollowp, Counseller: Counseller, Discussion: Discussion,
                status: 'prospect'
            }
            let data2 = {
                username: username,
                EnquiryID: followForm, CallDate: date, Time: time,
                Name: Name, Contact: Contact, Email: email, ServiceName: ServiceName1, AppointmentDate: appointmentDate, AppointmentTime: appointmentTime, enquiryStage: enquiryStage, CallStatus: CallStatus1, FollowupDate: FollowupDate, TimeFollowp: TimeFollowp, Counseller: Counseller, Discussion: Discussion,
                status: 'CallReport'
            }
            if (pros.filter((list) => list.EnquiryID === followForm).length > 0) {
                const found = pros.filter((list) => list.EnquiryID === followForm).map((element, index) => {
                    return index === 0 && element._id;
                });
                fetch(`${url}/prospect/update/${found[0]}`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }).then((resp) => {
                    resp.json().then(() => {
                        setVisible(false)
                    })
                })

                const data1 = { Counseller, CallStatus: CallStatus1 }

                fetch(`${url}/enquiryForm/update/${followForm}`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data1)
                }).then((resp) => {
                    resp.json().then(() => {
                        alert("successfully submitted")
                        setVisible(false)
                    })
                })
            } else {
                fetch(`${url}/prospect/create`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }).then((resp) => {
                    resp.json().then(() => {
                        setVisible(false)
                    })
                })

                const data1 = { Counseller, CallStatus: CallStatus1 }

                fetch(`${url}/enquiryForm/update/${followForm}`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data1)
                }).then((resp) => {
                    resp.json().then(() => {
                        alert("successfully submitted")
                        setVisible(false)
                    })
                })
            }
            fetch(`${url}/prospect/create`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data2)
            }).then((resp) => {
                resp.json().then(() => {
                    setCallReport(false)
                })
            })

        }

    }

    const saveCallReport = () => {
        var currentdate = new Date();
        var date = currentdate.getDay() + "-" + currentdate.getMonth()
            + "-" + currentdate.getFullYear();
        var time =
            + currentdate.getHours() + ":"
            + currentdate.getMinutes();
        let data = {
            username: username,
            EnquiryID: followForm, CallDate: date, Time: time,
            Name: Name, Contact: Contact, Email: email, ServiceName: ServiceName1, CallStatus: CallStatus1, FollowupDate: FollowupDate, TimeFollowp: TimeFollowp, Counseller: Counseller, Discussion: Discussion,
            status: 'CallReport'
        }

        fetch(`${url}/prospect/create`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then(() => {
                setVisible(false)
            })
        })
        const data1 = { Counseller }

        fetch(`${url}/enquiryForm/update/${followForm}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1)
        }).then((resp) => {
            resp.json().then(() => {
                alert("successfully submitted")
                setVisible(false)
            })
        })
    }
    function getEnquiry() {
        axios.get(`${url}/enquiryForm/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setResult1(res.data.filter((list) => list.username === username).reverse())
                setOgList(res.data.filter((list) => list.username === username).reverse())
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error)
            })
    }
    function getUpdate(id) {
        axios.get(`${url}/enquiryForm/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setUpdateItem(res.data)
                setFullName(res.data.Fullname)
                setEmailAddress(res.data.Emailaddress)
                setCountryCode(+res.data.CountryCode)
                setContactNumber(res.data.ContactNumber)
                setGander(res.data.Gander)
                setDateofBirth(moment(res.data.DateofBirth).utc().format('YYYY-MM-DD'))
                setAddress(res.data.address)
                setArea(res.data.Area)
                setCity(res.data.city)
                setProfession(res.data.Profession)
                setStaffName(res.data.StaffName)
                setCenterName(res.data.CenterName)
                setCallStatus(res.data.CallStatus)
                setMessage(res.data.Message)
                setperson_Name(res.data.person_Name)
                setRelation(res.data.Relation)
                setCountryCode2(res.data.CountryCode2)
                setContactNumber2(res.data.ContactNumber2)
                setEnquiryDate(res.data.EnquiryDate)
                setServiceName(res.data.ServiceName)
                setCustomertype(res.data.Customertype)
                setEnquirytype(res.data.enquirytype)
                setappointmentDate(moment(res.data.appointmentDate).utc().format('YYYY-MM-DD'))
                setappointmentTime(res.data.appointmentDate)
                setappointmentfor(res.data.appointmentfor)
                setVisible1(true)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    function getProspect(id) {
        axios.get(`${url}/enquiryForm/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setUpdateItem(res.data)
                setName(res.data.Fullname)
                setContact(res.data.ContactNumber)
                setServiceName1(res.data.ServiceName)
                setCallStatus1(res.data.CallStatus)
                setEmail(res.data.Emailaddress)
                setVisible(true)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function getCallReport(id) {
        axios.get(`${url}/enquiryForm/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setUpdateItem(res.data)
                setName(res.data.Fullname)
                setContact(res.data.ContactNumber)
                setServiceName1(res.data.ServiceName)
                setCallStatus1(res.data.CallStatus)
                setEmail(res.data.Emailaddress)
                setCallReport(true)
            })
            .catch((error) => {
                console.error(error)
            })
    }


    function deleteEnquiry(id) {

        if (confirm('Do you want to delete this')) {
            fetch(`${url}/enquiryForm/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getEnquiry()
                })
            })
        }
    }
    const [filterBy, setFilterBy] = useState('')
    const [subFilter, setSubFilter] = useState('')
    const [arr, setArr] = useState([])
    function getUnique(arr, index) {
        const unique = arr
            .map(e => e[index])
            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)
            // eliminate the dead keys & store unique objects
            .filter(e => arr[e]).map(e => arr[e]);
        return unique;
    }
    const handleFollowup = (id) => {
        setFollowForm(id)
        getProspect(id)
    }

    const handleCallReport = (id) => {
        setFollowForm(id)
        getCallReport(id)
    }

    function handleEnquiry(id) {
        setEdit(id)
        getUpdate(id)
    }
    function filterArr(og, v) {
        if (v === '')
            setResult1(og)
        else
            setResult1(og.filter((list) => list[filterBy] === v))
    }
    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>
                    <CCardHeader>
                        <strong className="mt-2">Cold Enquires <span className='float-end'>Total Cold Enquires : {result1.filter((list) => list.username === username && list.CallStatus === 'Cold').length}</span></strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow className='d-flex justify-content-between'>
                            <CCol lg={4} sm={6} md={6}>
                                <CInputGroup className='mb-2'>
                                    <CFormSelect
                                        id="inputGroupSelect04"
                                        aria-label="Example select with button addon"
                                        value={select}
                                        onChange={(e) => setSelect(e.target.value)}
                                    >
                                        <option value={day}>Today</option>
                                        <option value={month}>Last Month</option>
                                        <option value={year}>This Year</option>
                                        {/* <option>Last Week</option>
                                        <option>Custom Date</option> */}
                                    </CFormSelect>
                                    {select === 'Custom Date' && (
                                        <CInputGroup className='mt-2 mb-2' >

                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Form
                                            </CInputGroupText>
                                            <CFormInput
                                                type="date"
                                                required
                                            /><CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                To
                                            </CInputGroupText>
                                            <CFormInput
                                                type="date"
                                                required
                                            />
                                            <CButton type="button" color="primary">
                                                Go
                                            </CButton>
                                        </CInputGroup>

                                    )}

                                </CInputGroup>
                            </CCol>
                            <CCol lg={6} sm={6} md={6}>
                                <CButtonGroup className=' mb-2 float-end'>
                                    <CButton color="primary">
                                        <CIcon icon={cilArrowCircleBottom} />
                                        {' '}Import
                                    </CButton>
                                    <CButton color="primary">
                                        <CIcon icon={cilArrowCircleTop} />
                                        {' '}Export
                                    </CButton>
                                </CButtonGroup>
                            </CCol>
                            <CCol xs={3}>
                                <CFormSelect
                                    className="mb-1"
                                    aria-label="Select Service Name"
                                    value={filterBy}
                                    onChange={(e) => { setFilterBy(e.target.value); setArr(getUnique(ogList, e.target.value)) }}
                                    label="Filter By"

                                >
                                    <option value=''>Select</option>
                                    <option value='Counseller'>Counseller </option>
                                    <option value='enquirytype'>Lead Sources </option>
                                    <option value='appointmentfor'>Enquiry Stage </option>
                                    <option value='Message'>Last Call Status </option>
                                    <option value='ServiceName'>Services Name </option>
                                    <option value='Customertype'>Customer Type </option>
                                    <option value='Enquiry type'>Enquiry type </option>
                                    <option value='CallStatus'>Call Tag </option>
                                    <option value='Gander'>Gender</option>
                                </CFormSelect>
                            </CCol>
                            <CCol xs={3}>
                                <CFormSelect
                                    className="mb-1"
                                    aria-label="Select Service Name"
                                    value={subFilter}
                                    onChange={(e) => { setSubFilter(e.target.value); filterArr(ogList, e.target.value) }}
                                    label="Sub-filter"

                                >
                                    <option value=''>Select</option>
                                    {arr.filter((list) => list[filterBy] != '').map((item, index) => (
                                        item.username === username && (
                                            <option key={index} value={item.id}>{item[filterBy]}</option>
                                        )
                                    ))}
                                </CFormSelect>
                            </CCol>
                            <CCol></CCol>
                        </CRow>

                        <CModal size='lg' style={{ border: '2px solid #0B5345' }} visible={callReport} color='' onClose={() => setCallReport(false)} >
                            <CModalHeader  >
                                <CModalTitle>Call Report</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                <CForm >
                                    <CRow>
                                        <CCol lg={4} md={6} sm={12}>
                                            <CFormInput
                                                className="mb-1"
                                                type="text"
                                                id="exampleFormControlInput1"
                                                label="Name"
                                                value={Name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Enter Name"
                                            />
                                        </CCol>
                                        <CCol lg={4} md={6} sm={12}>
                                            <CFormInput
                                                className="mb-1"
                                                type="email"
                                                id="exampleFormControlInput1"
                                                label="Email Address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="name@example.com"
                                                aria-describedby="exampleFormControlInputHelpInline"
                                            />
                                        </CCol>

                                        <CCol lg={4} md={6} sm={12}>
                                            <CFormInput
                                                className="mb-1"
                                                type="number"
                                                value={Contact}
                                                onChange={(e) => setContact(e.target.value)}
                                                id="exampleFormControlInput1"
                                                label="Contact No"
                                                placeholder="Enter Number"
                                            />
                                        </CCol>
                                        <CCol lg={6} md={6} sm={12}>
                                            <CFormSelect
                                                className="mb-1"
                                                aria-label="Select Service Name"
                                                value={ServiceName1}
                                                onChange={(e) => setServiceName1(e.target.value)}
                                                label="Service Name"

                                            >
                                                <option>Select Service</option>
                                                {result.map((item, index) => (
                                                    item.username === username && (
                                                        item.status === true && (
                                                            <option key={index} value={item.id}>{item.selected_service}</option>
                                                        )
                                                    )
                                                ))}
                                            </CFormSelect>
                                        </CCol>
                                        <CCol lg={6} md={6} sm={12}>
                                            <CFormInput
                                                className="mb-1"
                                                type="text"
                                                value={Counseller}
                                                onChange={(e) => setCounseller(e.target.value)}
                                                id="exampleFormControlInput1"
                                                label="Counseller"
                                                placeholder="Enter Counseller Name"
                                            />
                                        </CCol>

                                        <CCol lg={4} md={6} sm={12}>
                                            <CFormSelect
                                                className="mb-1"
                                                aria-label="Select Call Status"
                                                value={CallStatus1}
                                                onChange={(e) => setCallStatus1(e.target.value)}
                                                label="Call Status"
                                                options={[
                                                    "Select",
                                                    { label: "Cold", value: "Cold" },
                                                    { label: "Warm", value: "Warm" },
                                                    { label: "Hot", value: "Hot" },
                                                ]}
                                            />
                                        </CCol>
                                        <CCol lg={4} md={6} sm={12}>
                                            <CFormInput
                                                className="mb-1"
                                                label="FollowUp Date"
                                                type="date"
                                                value={FollowupDate}
                                                onChange={(e) => setFollowupDate(e.target.value)}
                                                id="exampleFormControlInput1"
                                            />
                                        </CCol>
                                        <CCol lg={4} md={6} sm={12}>
                                            <CFormInput
                                                className="mb-1"
                                                label="FollowUp Time"
                                                type="time"
                                                id="exampleFormControlInput1"
                                                value={TimeFollowp}
                                                onChange={(e) => setTimeFollowp(e.target.value)}

                                            />
                                        </CCol>
                                        <CCol>
                                            <CFormTextarea
                                                id="exampleFormControlTextarea1"
                                                label="Discussion"
                                                value={Discussion}
                                                onChange={(e) => setDiscussion(e.target.value)}
                                                rows="2"
                                                text="Must be 8-20 words long."
                                            ></CFormTextarea>
                                        </CCol>
                                    </CRow>
                                </CForm>
                            </CModalBody>
                            <CModalFooter>
                                <CButton color="secondary" onClick={() => setCallReport(false)}>
                                    Close
                                </CButton>
                                <CButton type='submit' color="primary" onClick={() => saveCallReport()}>Save Call Report</CButton>
                            </CModalFooter>
                        </CModal>

                        <CModal size='lg' style={{ border: '2px solid #0B5345' }} visible={visible} color='' onClose={() => setVisible(false)} >
                            <CModalHeader  >
                                <CModalTitle>Prospect Form</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                <CForm >
                                    <CRow>
                                        <CCol lg={4} md={6} sm={12}>
                                            <CFormInput
                                                className="mb-1"
                                                type="text"
                                                id="exampleFormControlInput1"
                                                label="Name"
                                                value={Name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Enter Name"
                                            />
                                        </CCol>
                                        <CCol lg={4} md={6} sm={12}>
                                            <CFormInput
                                                className="mb-1"
                                                type="email"
                                                id="exampleFormControlInput1"
                                                label="Email Address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="name@example.com"
                                                aria-describedby="exampleFormControlInputHelpInline"
                                            />
                                        </CCol>

                                        <CCol lg={4} md={6} sm={12}>
                                            <CFormInput
                                                className="mb-1"
                                                type="number"
                                                value={Contact}
                                                onChange={(e) => setContact(e.target.value)}
                                                id="exampleFormControlInput1"
                                                label="Contact No"
                                                placeholder="Enter Number"
                                            />
                                        </CCol>
                                        <CCol lg={4} md={6} sm={12}>
                                            <CFormSelect
                                                className="mb-1"
                                                aria-label="Select Service Name"
                                                value={ServiceName1}
                                                onChange={(e) => setServiceName1(e.target.value)}
                                                label="Service Name"

                                            >
                                                <option>Select Service</option>
                                                {result.map((item, index) => (
                                                    item.username === username && (
                                                        item.status === true && (
                                                            <option key={index} value={item.id}>{item.selected_service}</option>
                                                        )
                                                    )
                                                ))}
                                            </CFormSelect>
                                        </CCol>
                                        <CCol lg={4} md={6} sm={12}>

                                            <CFormSelect
                                                className="mb-1"
                                                aria-label="Select Assign Staff"
                                                value={Counseller}
                                                onChange={(e) => setCounseller(e.target.value)}
                                                label='Counseller'
                                            >
                                                <option>Select Counseller</option>
                                                {staff.filter((list) => list.username === username && list.selected === 'Select').map((item, index) => (
                                                    item.username === username && (
                                                        <option key={index}>{item.FullName}</option>
                                                    )
                                                ))}</CFormSelect>
                                        </CCol>
                                        <CCol lg={4} md={6} sm={12}>
                                            <CFormSelect
                                                className="mb-1"
                                                aria-label="Select Call Status"
                                                value={enquiryStage}
                                                onChange={(e) => setEnquiryStage(e.target.value)}
                                                label="Prospect Stage"
                                                options={[
                                                    "Select",
                                                    { label: "Appointment", value: "Appointment" },
                                                    { label: "Trial Session", value: "Trial Session" },
                                                    { label: "Join", value: "Join" },
                                                    { label: 'Prospect', value: 'Prospect' }
                                                ]}
                                            />
                                        </CCol>

                                        {(enquiryStage === 'Appointment') &&
                                            <>
                                                <CCol lg={4} md={6} sm={12}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        label="Appointment Date"
                                                        type="date"
                                                        value={appointmentDate}
                                                        onChange={(e) => setappointmentDate(e.target.value)}
                                                        id="exampleFormControlInput1"
                                                    />
                                                </CCol>
                                                <CCol lg={4} md={6} sm={12}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        label="Appointment Time"
                                                        type="time"
                                                        id="exampleFormControlInput1"
                                                        value={appointmentTime}
                                                        onChange={(e) => setappointmentTime(e.target.value)}

                                                    />
                                                </CCol>
                                            </>
                                        }
                                        {(enquiryStage === 'Trial Session') &&
                                            <>
                                                <CCol lg={4} md={6} sm={12}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        label="Trial Date"
                                                        type="date"
                                                        value={appointmentDate}
                                                        onChange={(e) => setappointmentDate(e.target.value)}
                                                        id="exampleFormControlInput1"
                                                    />
                                                </CCol>
                                                <CCol lg={4} md={6} sm={12}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        label="Trial Time"
                                                        type="time"
                                                        id="exampleFormControlInput1"
                                                        value={appointmentTime}
                                                        onChange={(e) => setappointmentTime(e.target.value)}

                                                    />
                                                </CCol>
                                            </>
                                        }
                                        {enquiryStage != 'Join' &&

                                            <CCol lg={4} md={6} sm={12}>
                                                <CFormSelect
                                                    className="mb-1"
                                                    aria-label="Select Call Status"
                                                    value={CallStatus1}
                                                    onChange={(e) => setCallStatus1(e.target.value)}
                                                    label="Call Status"
                                                    options={[
                                                        "Select",
                                                        { label: "Cold", value: "Cold" },
                                                        { label: "Warm", value: "Warm" },
                                                        { label: "Hot", value: "Hot" },
                                                    ]}
                                                />
                                            </CCol>
                                        }
                                        {(enquiryStage === 'Prospect') &&
                                            <>

                                                <CCol lg={4} md={6} sm={12}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        label="FollowUp Date"
                                                        type="date"
                                                        value={FollowupDate}
                                                        onChange={(e) => setFollowupDate(e.target.value)}
                                                        id="exampleFormControlInput1"
                                                    />
                                                </CCol>
                                                <CCol lg={4} md={6} sm={12}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        label="FollowUp Time"
                                                        type="time"
                                                        id="exampleFormControlInput1"
                                                        value={TimeFollowp}
                                                        onChange={(e) => setTimeFollowp(e.target.value)}

                                                    />
                                                </CCol>
                                            </>
                                        }
                                        {enquiryStage === 'Prospect' &&
                                            <CCol lg={12} md={12} sm={12}>
                                                <CFormTextarea
                                                    id="exampleFormControlTextarea1"
                                                    label="Discussion"
                                                    value={Discussion}
                                                    onChange={(e) => setDiscussion(e.target.value)}
                                                    rows="2"
                                                    text="Must be 8-20 words long."
                                                ></CFormTextarea>
                                            </CCol>
                                        }
                                    </CRow>
                                </CForm>
                            </CModalBody>
                            <CModalFooter>
                                <CButton color="secondary" onClick={() => setVisible(false)}>
                                    Close
                                </CButton>
                                <CButton type='submit' color="primary" onClick={() => saveProspect()}>{enquiryStage === 'Join' ? 'Open Admission Form' : 'Save Prospect'}</CButton>
                            </CModalFooter>
                        </CModal>

                        <CModal size="xl" scrollable alignment="center" visible={visible1} onClose={() => setVisible1(false)}>
                            <CModalHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                                <CModalTitle>Enquiry Form</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                <CForm >
                                    <CRow>
                                        <CCol lg={6} sm={12}>
                                            <CCardTitle>Personal Details</CCardTitle>
                                            <CRow>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="text"
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
                                                <CCol lg={12} md={6} sm={12}>
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
                                                        options={[
                                                            "Select Staff Name",
                                                            { label: "prabha", value: "prabha" },
                                                            { label: "sejal", value: "sejal" },
                                                            { label: "sonali", value: "sonali" },
                                                            { label: "None", value: "None" },
                                                        ]}
                                                    />
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

                                                <CCol lg={12} md={6} sm={12}>

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
                                                                    <option key={index} value={item.id}>{item.selected_service}</option>
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
                                                        aria-label="Select Enquiry Type"
                                                        value={enquirytype}
                                                        onChange={(e) => setEnquirytype(e.target.value)}
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
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        label="Appointment Date"
                                                        type="date"
                                                        value={appointmentDate}
                                                        onChange={(e) => setappointmentDate(e.target.value)}
                                                        id="exampleFormControlInput1"
                                                    />
                                                </CCol>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        label="Appointment Time"
                                                        type="time"
                                                        id="exampleFormControlInput1"
                                                        value={appointmentTime}
                                                        onChange={(e) => setappointmentTime(e.target.value)}

                                                    />
                                                </CCol>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select"
                                                        label="Enquiry For"
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
                                                        value={Counseller}
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

                                </CForm>

                            </CModalBody>

                            <CModalFooter>
                                <CButton color="secondary" onClick={() => setVisible1(false)}>
                                    Close
                                </CButton>
                                <CButton type='submit' color="primary" onClick={() => saveEnquiry()}>Update changes</CButton>
                            </CModalFooter>
                        </CModal>

                        {edit &&
                            <AdmissionForm1 add={admissionForm} clickfun={() => { setAdmissionForm(false) }} ids={edit} />
                        }
                        <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                <CTableRow >
                                    <CTableHeaderCell>Sr.No</CTableHeaderCell>
                                    <CTableHeaderCell>Enquiry ID</CTableHeaderCell>
                                    <CTableHeaderCell>Date</CTableHeaderCell>
                                    <CTableHeaderCell>Time</CTableHeaderCell>
                                    <CTableHeaderCell>Name</CTableHeaderCell>
                                    <CTableHeaderCell>Mobile</CTableHeaderCell>
                                    <CTableHeaderCell>Service</CTableHeaderCell>
                                    <CTableHeaderCell>Source</CTableHeaderCell>
                                    <CTableHeaderCell>Enquiry stage</CTableHeaderCell>
                                    <CTableHeaderCell>Call Status</CTableHeaderCell>
                                    <CTableHeaderCell>Last Call</CTableHeaderCell>
                                    <CTableHeaderCell>Add</CTableHeaderCell>
                                    <CTableHeaderCell>Assigned by</CTableHeaderCell>
                                    <CTableHeaderCell>Counseller</CTableHeaderCell>
                                    <CTableHeaderCell>Action</CTableHeaderCell>
                                    <CTableHeaderCell>Edit</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "60px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "120px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "120px" }}
                                            disabled
                                            value={Search1}
                                            onChange={(e) => setSearch1(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "90px" }}
                                            disabled
                                            value={Search2}
                                            onChange={(e) => setSearch2(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "120px" }}
                                            value={Search3}
                                            onChange={(e) => setSearch3(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "120px" }}
                                            value={Search4}
                                            disabled
                                            onChange={(e) => setSearch4(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            value={Search5}
                                            onChange={(e) => setSearch5(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "80px" }}
                                            value={Search6}
                                            onChange={(e) => setSearch6(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "100px" }}
                                            value={Search7}
                                            onChange={(e) => setSearch7(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "100px" }}
                                            value={Search8}
                                            onChange={(e) => setSearch8(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "100px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "100px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            style={{ minWidth: "100px" }}
                                            value={Search9}
                                            onChange={(e) => setSearch9(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="text"
                                            value={Search10}
                                            style={{ minWidth: "100px" }}
                                            disabled
                                            onChange={(e) => setSearch10(e.target.value)}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "100px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            style={{ minWidth: "100px" }}
                                            type="text"
                                            disabled
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                </CTableRow>
                                {result1.slice(paging * 10, paging * 10 + 10).filter((list) =>
                                    list.username === username && moment(list.createdAt).format("MM-DD-YYYY").includes(select) && list.CallStatus === 'Cold' && list.Fullname.toLowerCase().includes(Search3.toLowerCase()) &&
                                    list.ServiceName.toLowerCase().includes(Search5.toLowerCase()) && list.enquirytype.toLowerCase().includes(Search6.toLowerCase()) && list.CallStatus.toLowerCase().includes(Search8.toLowerCase())
                                    && list.StaffName.toLowerCase().includes(Search9.toLowerCase())
                                ).map((item, index) => (
                                    item.username === username && (
                                        <CTableRow key={index}>
                                            <CTableDataCell>{index + 1 + (paging * 10)}</CTableDataCell>
                                            <CTableDataCell>{item.EnquiryId}</CTableDataCell>
                                            <CTableDataCell className='text-center'>{moment(item.createdAt).format("DD-MM-YYYY")}</CTableDataCell>
                                            <CTableDataCell>{moment(item.createdAt, "HH:mm").format("hh:mm A")}</CTableDataCell>
                                            <CTableDataCell>{item.Fullname}</CTableDataCell>
                                            <CTableDataCell>{item.ContactNumber}</CTableDataCell>
                                            <CTableDataCell>{item.ServiceName}</CTableDataCell>
                                            <CTableDataCell>{item.enquirytype}</CTableDataCell>
                                            <CTableDataCell>{item.appointmentfor}</CTableDataCell>
                                            <CTableDataCell>{item.CallStatus}</CTableDataCell>
                                            <CTableDataCell>{item.Message}</CTableDataCell>
                                            <CTableDataCell><BsPlusCircle id={item._id} style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} onClick={() => { addForm(item._id), setEdit(item._id), handleAdmission(item._id) }} /></CTableDataCell>
                                            <CTableDataCell>{item.StaffName}</CTableDataCell>
                                            <CTableDataCell>{item.Counseller}</CTableDataCell>
                                            <CTableDataCell className='text-center'><a href={`tel:+${item.CountryCode}${item.ContactNumber}`} target="_black"><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => { setCallReport(true), handleCallReport(item._id) }} size='20px' /></a><a href={`https://wa.me/${item.ContactNumber}`} target="_black"><BsWhatsapp style={{ marginLeft: "4px", cursor: 'pointer', markerStart: '10px' }} onClick={() => { setCallReport(true), handleCallReport(item._id) }} size='20px' /></a><a href={`mailto: ${item.Emailaddress}`} target="_black"> <MdMail style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} onClick={() => { setCallReport(true), handleCallReport(item._id) }} size='20px' /></a> <BsPlusCircle id={item._id} style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "4px" }} onClick={() => handleFollowup(item._id)} /></CTableDataCell>
                                            <CTableDataCell className='text-center'><MdEdit id={item._id} style={{ fontSize: '35px', cursor: 'pointer', markerStart: '10px' }} onClick={() => handleEnquiry(item._id)} size='20px' /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px', marginLeft: "5px" }} onClick={() => deleteEnquiry(item._id)} size='20px' /></CTableDataCell>
                                        </CTableRow>

                                    )
                                ))}
                            </CTableBody>
                        </CTable>
                    </CCardBody>

                    <CPagination aria-label="Page navigation example" align="center" className='mt-2'>
                        <CPaginationItem aria-label="Previous" disabled={paging != 0 ? false : true} onClick={() => paging > 0 && setPaging(paging - 1)}>
                            <span aria-hidden="true">&laquo;</span>
                        </CPaginationItem>
                        <CPaginationItem active onClick={() => setPaging(0)}>{paging + 1}</CPaginationItem>
                        {result1.filter((list) =>
                            list.username === username && moment(list.createdAt).format("MM-DD-YYYY").includes(select) && list.CallStatus === 'Cold' && list.Fullname.toLowerCase().includes(Search3.toLowerCase()) &&
                            list.ServiceName.toLowerCase().includes(Search5.toLowerCase()) && list.enquirytype.toLowerCase().includes(Search6.toLowerCase()) && list.CallStatus.toLowerCase().includes(Search8.toLowerCase())
                            && list.StaffName.toLowerCase().includes(Search9.toLowerCase())
                        ).length > (paging + 1) * 10 && <CPaginationItem onClick={() => setPaging(paging + 1)} >{paging + 2}</CPaginationItem>}

                        {result1.filter((list) =>
                            list.username === username && moment(list.createdAt).format("MM-DD-YYYY").includes(select) && list.CallStatus === 'Cold' && list.Fullname.toLowerCase().includes(Search3.toLowerCase()) &&
                            list.ServiceName.toLowerCase().includes(Search5.toLowerCase()) && list.enquirytype.toLowerCase().includes(Search6.toLowerCase()) && list.CallStatus.toLowerCase().includes(Search8.toLowerCase())
                            && list.StaffName.toLowerCase().includes(Search9.toLowerCase())
                        ).length > (paging + 2) * 10 && <CPaginationItem onClick={() => setPaging(paging + 2)}>{paging + 3}</CPaginationItem>}
                        {result1.filter((list) =>
                            list.username === username && moment(list.createdAt).format("MM-DD-YYYY").includes(select) && list.CallStatus === 'Cold' && list.Fullname.toLowerCase().includes(Search3.toLowerCase()) &&
                            list.ServiceName.toLowerCase().includes(Search5.toLowerCase()) && list.enquirytype.toLowerCase().includes(Search6.toLowerCase()) && list.CallStatus.toLowerCase().includes(Search8.toLowerCase())
                            && list.StaffName.toLowerCase().includes(Search9.toLowerCase())
                        ).length > (paging + 1) * 10 ?
                            <CPaginationItem aria-label="Next" onClick={() => setPaging(paging + 1)}>
                                <span aria-hidden="true">&raquo;</span>
                            </CPaginationItem>
                            : <CPaginationItem disabled aria-label="Next" onClick={() => setPaging(paging + 1)}>
                                <span aria-hidden="true">&raquo;</span>
                            </CPaginationItem>
                        }
                    </CPagination>
                </CCard>
            </CCol >
        </CRow >
    )
}

export default ColdEnquires