import { CButton, CCol, CForm, CFormInput, CFormSelect, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const CallReport = ({ add, clickfun, id }) => {

    const [followForm, setFollowForm] = useState()
    const [Name, setName] = useState("");
    const [Contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [ServiceName1, setServiceName1] = useState("");
    const [CallStatus1, setCallStatus1] = useState("");
    const [FollowupDate, setFollowupDate] = useState("");
    const [TimeFollowp, setTimeFollowp] = useState("");
    const [Discussion, setDiscussion] = useState("");
    const [Counseller, setCounseller] = useState("");


    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;
    const centerCode = user.user.centerCode;
    console.log(token);
    const [result, setResult] = useState([]);
    const [result1, setResult1] = useState([]);
    const [mem, setMem] = useState([]);
    useEffect(() => {
        getSubService()
    }, []);

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
                clickfun
            })
        })
        const data1 = { Counseller }

        fetch(`${url}/enquiryForm/update/${id}`, {
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
                clickfun
            })
        })
    }

    return (
        <CModal size='lg' style={{ border: '2px solid #0B5345' }} visible={add} onClose={clickfun} >
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
                                            <option key={index} value={item.id}>{item.selected_service} {item.sub_Service_Name}</option>
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
                <CButton color="secondary" onClick={clickfun}>
                    Close
                </CButton>
                <CButton type='submit' color="primary" onClick={() => saveCallReport()}>Save Call Report</CButton>
            </CModalFooter>
        </CModal>
    )
}

export default CallReport
