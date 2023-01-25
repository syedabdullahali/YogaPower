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
import axios from 'axios';
import { MdCall, MdDelete, MdEdit, MdMail } from 'react-icons/md';
import { BsPlusCircle, BsWhatsapp } from 'react-icons/bs';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const CallUpdate = ({ id }) => {
    const [visible, setVisible] = useState(false)
    const [edit, setEdit] = useState()
    const [visible1, setVisible1] = useState(false)
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
    const [followForm, setFollowForm] = useState()
    const [callReport, setCallReport] = useState(false)

    const [Name, setName] = useState("");
    const [Contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [ServiceName1, setServiceName1] = useState("");
    const [CallStatus1, setCallStatus1] = useState("");
    const [enquiryStage, setEnquiryStage] = useState('')
    const [FollowupDate, setFollowupDate] = useState("");
    const [appointmentDate, setappointmentDate] = useState("");
    const [appointmentTime, setappointmentTime] = useState("");
    const [TimeFollowp, setTimeFollowp] = useState("");
    const [Discussion, setDiscussion] = useState("");
    const [Counseller, setCounseller] = useState("");
    const [updateItem, setUpdateItem] = useState();

    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;
    const centerCode = user.user.centerCode;
    const [result, setResult] = useState([]);
    const [result1, setResult1] = useState([]);
    const [paging, setPaging] = useState(0);

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

    const saveProspect = () => {
        if (enquiryStage === 'Appointment') {
            const data1 = { appointmentDate, appointmentTime, appointmentfor: 'Appointment', Counseller: Counseller }

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

        } else if (enquiryStage === 'Trial Session') {
            const data1 = { appointmentDate, appointmentTime, appointmentfor: 'Trial Session', Counseller: Counseller }

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
        } else if (enquiryStage === 'Join') {
            handleAdmission(followForm)
            setVisible(false)
        } else if (enquiryStage === 'Prospect') {
            var currentdate = new Date();
            var date = currentdate.getDay() + "-" + currentdate.getMonth()
                + "-" + currentdate.getFullYear();
            var time =
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();
            let data = {
                username: username,
                EnquiryID: followForm, CallDate: date, Time: time,
                Name: Name, Contact: Contact, Email: email, ServiceName: ServiceName1, AppointmentDate: appointmentDate, AppointmentTime: appointmentTime, enquiryStage: enquiryStage, CallStatus: CallStatus1, FollowupDate: FollowupDate, TimeFollowp: TimeFollowp, Counseller: Counseller, Discussion: Discussion,
                status: 'prospect'
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

        }

    }

    const updateProspect = () => {
        var currentdate = new Date();
        var date = currentdate.getDay() + "-" + currentdate.getMonth()
            + "-" + currentdate.getFullYear();
        var time =
            + currentdate.getHours() + ":"
            + currentdate.getMinutes();
        let data = {
            EnquiryID: followForm, CallDate: date, Time: time,
            Name: Name, Contact: Contact, Email: email, ServiceName: ServiceName1, CallStatus: CallStatus1, FollowupDate: FollowupDate, TimeFollowp: TimeFollowp, Counseller: Counseller, Discussion: Discussion,
        }

        fetch(`${url}/prospect/update/${edit}`, {
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
                setVisible(false)
            })
        })

    }


    function getEnquiry() {
        axios.get(`${url}/prospect/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                setResult1(res.data.reverse())
            })
            .catch((error) => {
                console.error(error)
            })
    }

    console.log(result1);

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
    function getUpdate(id) {
        axios.get(`${url}/prospect/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setUpdateItem(res.data)
                setName(res.data.Name)
                setContact(res.data.Contact)
                setServiceName1(res.data.ServiceName)
                setCallStatus1(res.data.CallStatus)
                setEmail(res.data.Email)
                setFollowupDate(moment(res.data.FollowupDate).utc().format('YYYY-MM-DD'))
                setCounseller(res.data.Counseller)
                setDiscussion(res.data.Discussion)
                setVisible1(true)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function deleteProspect(id) {
        if (confirm('Do you want to delete this')) {
            fetch(`${url}/prospect/delete/${id}`, {
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

    const handleCallReport = (id) => {
        setFollowForm(id)
        getCallReport(id)
    }

    const handleFollowup = (id) => {
        setFollowForm(id)
        getProspect(id)
    }
    const navi = useNavigate()
    function handleEnquiry(id) {
        setEdit(id)
        getUpdate(id)
    }
    return (
        <CRow>
            <CCol xs={12}>
                <div className='d-flex justify-content-between mb-2'>
                    <div className='mt-2 ms-2'>
                        <CCardTitle>Call Log </CCardTitle>
                    </div>
                    <div className='justify-content-around'>
                        <CButton style={{ margin: '5px' }}>Inter branch transfer</CButton>
                        <CButton style={{ margin: '5px' }}>Print Profile</CButton>
                        <CButton style={{ margin: '5px' }} onClick={() => navi("/forms/invoice")}>New Invoice</CButton>
                        <CButton style={{ margin: '5px' }} onClick={() => { setCallReport(true), handleCallReport(id) }}>New Call</CButton>
                        <CButton style={{ margin: '5px' }}>New Appointment</CButton>
                    </div>

                </div>
            </CCol>
            <CCol lg={12} sm={12}>
                <div className='d-flex justify-content-between mb-2'>
                    <CInputGroup style={{ width: "500px" }}>

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

                </div>
                <div className='d-flex justify-content-between mb-2'>
                    <div className='d-flex justify-content-between float-end'>
                        <CButtonGroup style={{ fontSize: '11px' }} role="group" aria-label="Basic example">
                            <CButton style={{ fontSize: '11px' }} color="dark" variant="outline">Scheduled: 0</CButton>
                            <CButton style={{ fontSize: '11px' }} color="dark" variant="outline">Attented: 0</CButton>
                            <CButton style={{ fontSize: '11px' }} color="dark" variant="outline">Rescheduled:0</CButton>
                            <CButton style={{ fontSize: '11px' }} color="dark" variant="outline">Prospect: 0</CButton>
                            <CButton style={{ fontSize: '11px' }} color="dark" variant="outline">Missed: 0</CButton>
                        </CButtonGroup>
                    </div>
                </div>
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

                <CModal size='lg' style={{ border: '2px solid #0B5345' }} visible={visible1} color='' onClose={() => setVisible1(false)} >
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
                        <CButton color="secondary" onClick={() => setVisible1(false)}>
                            Close
                        </CButton>
                        <CButton type='submit' color="primary" onClick={() => updateProspect()}>Update Prospect</CButton>
                    </CModalFooter>
                </CModal>
                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow >
                            <CTableHeaderCell>Sr.No</CTableHeaderCell>
                            <CTableHeaderCell>Date</CTableHeaderCell>
                            <CTableHeaderCell>Time</CTableHeaderCell>
                            <CTableHeaderCell>Name</CTableHeaderCell>
                            <CTableHeaderCell>Email</CTableHeaderCell>
                            <CTableHeaderCell>Mobile</CTableHeaderCell>
                            <CTableHeaderCell>Service</CTableHeaderCell>
                            <CTableHeaderCell>Call Status</CTableHeaderCell>
                            <CTableHeaderCell>NextFollowup Date</CTableHeaderCell>
                            <CTableHeaderCell>Time</CTableHeaderCell>
                            <CTableHeaderCell>Discussion</CTableHeaderCell>
                            <CTableHeaderCell>Counseller</CTableHeaderCell>
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
                        </CTableRow>
                        {result1.slice(paging * 10, paging * 10 + 10).filter((list) =>
                            list.username === username && list.status === 'CallReport' && list.EnquiryID === id
                        ).map((item, index) => (
                            <CTableRow key={index}>
                                <CTableDataCell>{index + 1 + (paging * 10)}</CTableDataCell>
                                <CTableDataCell className='text-center'>{moment(item.CallDate).format("DD-MM-YYYY")}</CTableDataCell>
                                <CTableDataCell>{moment(item.Time, "HH:mm").format("hh:mm A")}</CTableDataCell>
                                <CTableDataCell>{item.Name}</CTableDataCell>
                                <CTableDataCell>{item.Email}</CTableDataCell>
                                <CTableDataCell>{item.Contact}</CTableDataCell>
                                <CTableDataCell>{item.ServiceName}</CTableDataCell>
                                <CTableDataCell>{item.CallStatus}</CTableDataCell>
                                <CTableDataCell>{item.FollowupDate && moment(item.FollowupDate).format("DD-MM-YYYY")}</CTableDataCell>
                                <CTableDataCell>{item.TimeFollowp && moment(item.TimeFollowp, "HH:mm").format("hh:mm A")}</CTableDataCell>
                                <CTableDataCell>{item.Discussion}</CTableDataCell>
                                <CTableDataCell>{item.Counseller}</CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>


            </CCol>
        </CRow>
    )
}

export default CallUpdate
