import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem, CBadge, CButton, CCard, CCardBody, CCardHeader, CCardImage, CCardText, CCardTitle, CCol, CForm, CFormInput, CFormSelect, CFormSwitch, CFormTextarea, CImage, CInputGroup, CListGroup, CListGroupItem, CPopover, CRow, CSpinner, CWidgetStatsD } from '@coreui/react'
import React, { useState } from 'react'
import Profile from 'src/assets/images/avatars/img_avatar.png'
import EventImage from 'src/assets/images/avatars/eventImage.jpg'
import { CChartLine } from '@coreui/react-chartjs'
import { cibFacebook } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const Event = () => {
    const [liveClass, setLiveClass] = useState(false)
    const [pass, setPass] = useState(false)
    const [paid, setPaid] = useState(false)

    const handleToggle1 = () => {
        setLiveClass(!liveClass)
        setPass(false)
    }
    const handleToggle2 = () => {
        setLiveClass(false)
        setPass(!pass)
    }

    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <CCardTitle>Event</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm>
                    <CRow>
                        <CCol xs={9}>
                            {liveClass && (
                                <CCard className="mt-2 border-success">
                                    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                                        Add Event Details
                                    </CCardHeader>
                                    <CCardBody>
                                        <CRow>
                                            <CCol xs={3}>
                                                <CFormInput
                                                    className="mb-1"
                                                    type="text"
                                                    id="exampleFormControlInput1"
                                                    label="Event Name"
                                                    placeholder="Enter Name"
                                                />
                                            </CCol>
                                            <CCol xs={3}>
                                                <CFormInput
                                                    className="mb-1"
                                                    type="file"
                                                    id="exampleFormControlInput1"
                                                    label="Event Banner "
                                                    placeholder="Enter Name"
                                                />
                                            </CCol>
                                            <CCol xs={3}>
                                                <CFormInput
                                                    className="mb-1"
                                                    type="text"
                                                    id="exampleFormControlInput1"
                                                    label="Host Name"
                                                    placeholder="Enter Name"
                                                />
                                            </CCol>
                                            <CCol xs={3}>
                                                <CFormSelect
                                                    className="mb-1"
                                                    aria-label="Select Service"
                                                    label="Service"
                                                    options={[
                                                        "Select Service",
                                                        { label: "One", value: "1" },
                                                        { label: "Two", value: "2" },
                                                        { label: "Three", value: "3" },
                                                    ]}
                                                />
                                            </CCol>

                                            <CCol xs={12}>
                                                <CFormTextarea
                                                    id="exampleFormControlTextarea1"
                                                    label="Comments"
                                                    rows="2"
                                                    text="Must be 8-20 words long."
                                                ></CFormTextarea>
                                            </CCol>
                                            <CCol xs={3}>
                                                <CFormSelect
                                                    className="mb-1"
                                                    aria-label="Select Service"
                                                    label="Event Type"
                                                    options={[
                                                        "Select Event Type",
                                                        { label: "Online Event", value: "1" },
                                                        { label: "Center Offline Event", value: "2" },
                                                        { label: "Three", value: "3" },
                                                    ]}
                                                />
                                            </CCol>
                                            <CCol xs={3}>
                                                <CFormInput
                                                    className="mb-1"
                                                    type="date"
                                                    id="exampleFormControlInput1"
                                                    label="Event Start Date"
                                                    placeholder="Enter date"
                                                />
                                            </CCol>
                                            <CCol xs={3}>
                                                <CFormInput
                                                    className="mb-1"
                                                    type="date"
                                                    id="exampleFormControlInput1"
                                                    label="Event End Date"
                                                    placeholder="Enter date"
                                                />
                                            </CCol>
                                            <CCol xs={3}>
                                                <CFormInput
                                                    className="mb-1"
                                                    type="time"
                                                    id="exampleFormControlInput1"
                                                    label="Event Time"
                                                    placeholder="Enter date"
                                                />
                                            </CCol>
                                            <CCol xs={3}>
                                                <CFormSelect
                                                    className="mb-1"
                                                    aria-label="Select Duration"
                                                    label="Duration"
                                                    options={[
                                                        "Select Duration",
                                                        { label: "One", value: "1" },
                                                        { label: "Two", value: "2" },
                                                        { label: "Three", value: "3" },
                                                    ]}
                                                />
                                            </CCol>
                                            <CCol xs={3}>
                                                <CFormSelect
                                                    className="mb-1"
                                                    aria-label="Select Duration"
                                                    label="Client Limit"
                                                    options={[
                                                        "Select Limit",
                                                        { label: "100", value: "1" },
                                                        { label: "200", value: "2" },
                                                        { label: "300", value: "3" },
                                                        { label: "No Limit", value: "3" },
                                                    ]}
                                                />
                                            </CCol>
                                            {paid && (
                                                <CCol xs={3}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="number"
                                                        id="exampleFormControlInput1"
                                                        label="Fess"
                                                        placeholder="Enter Fees"
                                                    />
                                                </CCol>
                                            )}
                                            <CCol className='mt-4' xs={3}>
                                                <CFormSwitch label="Paid" value={paid} onClick={() => setPaid(!paid)} />
                                            </CCol>
                                            <CCol className='mt-4' xs={3}>
                                                <CFormSwitch label="Event Active" id="formSwitchCheckDefault" />
                                            </CCol>
                                            <CCol className='mt-4'>
                                                <CButton className='float-end' onClick={() => setLiveClass(false)}>
                                                    Save
                                                </CButton>
                                            </CCol>
                                        </CRow>
                                    </CCardBody>
                                </CCard>
                            )}
                            {pass && (
                                <CCard className="mt-2 border-success">
                                    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                                        Create Pass
                                    </CCardHeader>
                                    <CCardBody>
                                        <CRow>
                                            <CCol xs={4}>
                                                <CFormInput
                                                    className="mb-1"
                                                    type="text"
                                                    id="exampleFormControlInput1"
                                                    label="Pass Name"
                                                    placeholder="Enter Pass Name"
                                                />
                                            </CCol>
                                            <CCol xs={4}>
                                                <CFormInput
                                                    className="mb-1"
                                                    type="file"
                                                    id="exampleFormControlInput1"
                                                    label="Pass Image "
                                                    placeholder="Enter Name"
                                                />
                                            </CCol>
                                            <CCol xs={4}>
                                                <CFormSelect
                                                    className="mb-1"
                                                    aria-label="Select Service"
                                                    label="Event"
                                                    options={[
                                                        "Select Event",
                                                        { label: "Navratri Event", value: "1" },
                                                        { label: "Two", value: "2" },
                                                        { label: "Three", value: "3" },
                                                    ]}
                                                />
                                            </CCol>
                                            <CCol xs={1} className='mt-2'>
                                                <CButton onClick={() => setLiveClass(false)}>
                                                    Save
                                                </CButton>
                                            </CCol>
                                        </CRow>
                                    </CCardBody>
                                </CCard>
                            )}
                        </CCol>
                        <CCol xs={3}>
                            <CButton className="mt-2 float-end me-3 " onClick={handleToggle2} >{!pass ? 'Create Pass' : 'Close'}</CButton>
                            <CButton className="mt-2 float-end me-3 " onClick={handleToggle1} >{!liveClass ? 'Add Event' : 'Close'}</CButton>
                        </CCol>
                    </CRow>
                </CForm>
                <CCard className="mt-3 border-success">
                    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                        Current Event Update
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol lg={4} sm={12} className='mt-1'>
                                <CCard className="mb-3">
                                    <CCardImage orientation="top" src={EventImage} />
                                    <CCardBody>
                                        <CCardTitle>Navratri Event <CBadge color="success float-end">Active</CBadge></CCardTitle>
                                        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
                                        <CCardText><small className="text-medium-emphasis" style={{ fontWeight: 'bold' }}>Start Date : 30-09-2022</small><small className="text-medium-emphasis float-end mt-1" style={{ fontWeight: 'bold' }}>End Date : 30-09-2022</small>
                                            <br /><small className="text-medium-emphasis" style={{ fontWeight: 'bold' }}>Registered Clients: 100 </small></CCardText>
                                        <CCardText><small className="text-medium-emphasis" style={{ fontWeight: 'bold' }}>Event Time: 4PM </small><small className="text-medium-emphasis float-end mt-1" style={{ fontWeight: 'bold' }}>Duration: 2Hr </small></CCardText>
                                    </CCardBody>
                                </CCard>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>

                <CCard className="mt-3 border-success">
                    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                        Event Pass
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol xs={6}>
                                <CCard>
                                    <CCardHeader>
                                        <CRow>
                                            <CCol xs={4}>
                                                <CImage src={EventImage} width='100%' />
                                            </CCol>
                                            <CCol>
                                                <CCardTitle className='mt-2'>Navratri Pass <CBadge color="success float-end">Active</CBadge></CCardTitle>
                                                <CCardText><small className="text-medium-emphasis" style={{ fontWeight: 'bold' }}>Start Date : 30-09-2022</small><small className="text-medium-emphasis float-end " style={{ fontWeight: 'bold' }}>End Date : 30-09-2022</small>
                                                    <br /><small className="text-medium-emphasis" style={{ fontWeight: 'bold' }}>Event Name : Navratri Event</small></CCardText>
                                                <CCardText><small className="text-medium-emphasis" style={{ fontWeight: 'bold' }}>Event Time: 4PM </small><small className="text-medium-emphasis float-end mt-1" style={{ fontWeight: 'bold' }}>Duration: 2Hr </small></CCardText>
                                            </CCol>
                                        </CRow>
                                    </CCardHeader>
                                    <CCardBody style={{ backgroundColor: 'rgba(255,255,255,.1)', padding: '0' }}>
                                        <CAccordion activeItemKey={2}>
                                            <CAccordionItem itemKey={1}>
                                                <CAccordionHeader>
                                                    <CCardTitle>Participants</CCardTitle>
                                                </CAccordionHeader>
                                                <CAccordionBody style={{ padding: '0' }}>
                                                    <CListGroup>
                                                        <CListGroupItem component="a" href="#" >
                                                            <CRow>
                                                                <CCol>Sr. No</CCol>
                                                                <CCol>PASS ID</CCol>
                                                                <CCol>Client Name</CCol>
                                                                <CCol>Details</CCol>
                                                            </CRow>
                                                        </CListGroupItem>
                                                        <CListGroupItem component="a" href="#" >
                                                            <CRow>
                                                                <CCol>1</CCol>
                                                                <CCol>25-10-2022</CCol>
                                                                <CCol>NAV202201</CCol>
                                                                <CCol>Sejal</CCol>
                                                                <CCol>11 pm</CCol>
                                                                <CCol>P</CCol>
                                                                <CCol>
                                                                    <CButton>View</CButton>
                                                                </CCol>
                                                            </CRow>
                                                        </CListGroupItem>
                                                        <CListGroupItem component="a" href="#" >
                                                            <CRow>
                                                                <CCol>2</CCol>
                                                                <CCol>25-10-2022</CCol>
                                                                <CCol>CLIENT456</CCol>
                                                                <CCol>Sejal</CCol>
                                                                <CCol>11 pm</CCol>
                                                                <CCol>P</CCol>
                                                                <CCol>
                                                                    <CButton>View</CButton>
                                                                </CCol>
                                                            </CRow>
                                                        </CListGroupItem>
                                                        <CListGroupItem component="a" href="#" >
                                                            <CRow>
                                                                <CCol>3</CCol>
                                                                <CCol>25-10-2022</CCol>
                                                                <CCol>CLIENT456</CCol>
                                                                <CCol>Sejal</CCol>
                                                                <CCol>11 pm</CCol>
                                                                <CCol>P</CCol>
                                                                <CCol>
                                                                    <CButton>View</CButton>
                                                                </CCol>
                                                            </CRow>
                                                        </CListGroupItem>
                                                    </CListGroup>
                                                </CAccordionBody>
                                            </CAccordionItem>
                                        </CAccordion>
                                    </CCardBody>
                                </CCard>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>

                <CCard className='mt-3'>
                    <CCardHeader>
                        Past Event
                    </CCardHeader>
                    <CCardBody>
                        <CForm>

                            <CCard>
                                <CCardBody>
                                    <CRow>
                                        <CCol>
                                            <CInputGroup style={{ height: "38px" }}>
                                                <CFormSelect
                                                    id="inputGroupSelect04"
                                                    aria-label="Example select with button addon"
                                                >
                                                    <option>Trainer Name</option>
                                                    <option value="1">Service</option>
                                                </CFormSelect>
                                                <CFormInput
                                                    placeholder="Search"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="button-addon2"
                                                />
                                                <CFormInput
                                                    type='date'
                                                    placeholder="Search"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="button-addon2"
                                                />
                                                <CFormInput
                                                    type='time'
                                                    placeholder="Search"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="button-addon2"
                                                />
                                                <CButton type="button" color="primary">
                                                    Search
                                                </CButton>
                                            </CInputGroup>
                                        </CCol>
                                    </CRow>
                                </CCardBody>
                            </CCard>
                        </CForm>
                        <CRow>
                            <CCol lg={12} sm={12} className='mt-1'>
                                <CAccordion activeItemKey={2}>
                                    <CAccordionItem itemKey={1}>
                                        <CAccordionHeader>
                                            <CRow>
                                                <label>Date: 30/09/2022</label>
                                                <CCol xs={4}>
                                                    <label style={{ fontWeight: 'bold' }}>Trainer Name : Prabha Yadav</label>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span style={{ fontWeight: 'bold' }}>Service : Yoga</span>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span>Duration: 30 min</span>
                                                </CCol>
                                                <CCol xs={2}>
                                                    <span>
                                                        <CPopover
                                                            title="Reason"
                                                            content="Trainer Not Well!"
                                                            placement="left"
                                                        >
                                                            <CButton color="warning">
                                                                Cancelled
                                                            </CButton>
                                                        </CPopover>
                                                    </span>
                                                </CCol>
                                                <CCol xs={4}>
                                                    <span>Batch Timing: 12 clock afternoon</span>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span>Registered User : 45</span>
                                                </CCol>
                                            </CRow>
                                        </CAccordionHeader>
                                        <CAccordionBody>
                                            <CListGroup>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>Sr. No</CCol>
                                                        <CCol>Date</CCol>
                                                        <CCol>Attendance ID</CCol>
                                                        <CCol>Client Name</CCol>
                                                        <CCol>Joining time</CCol>
                                                        <CCol>Attendance</CCol>
                                                        <CCol>Details</CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>1</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>2</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>3</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CAccordionBody>
                                    </CAccordionItem>
                                </CAccordion>
                            </CCol>
                            <CCol lg={12} sm={12} className='mt-1'>
                                <CAccordion activeItemKey={2}>
                                    <CAccordionItem itemKey={1}>
                                        <CAccordionHeader>
                                            <CRow>
                                                <label>Date: 30/09/2022</label>
                                                <CCol xs={4}>
                                                    <label style={{ fontWeight: 'bold' }}>Trainer Name : Prabha Yadav</label>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span style={{ fontWeight: 'bold' }}>Service : Yoga</span>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span>Duration: 30 min</span>
                                                </CCol>
                                                <CCol xs={2}>
                                                    <span>
                                                        <CButton color="success">
                                                            Complated
                                                        </CButton>
                                                    </span>
                                                </CCol>
                                                <CCol xs={4}>
                                                    <span>Batch Timing: 12 clock afternoon</span>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span>Registered User : 45</span>
                                                </CCol>
                                            </CRow>
                                        </CAccordionHeader>
                                        <CAccordionBody>
                                            <CListGroup>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>Sr. No</CCol>
                                                        <CCol>Date</CCol>
                                                        <CCol>Attendance ID</CCol>
                                                        <CCol>Client Name</CCol>
                                                        <CCol>Joining time</CCol>
                                                        <CCol>Attendance</CCol>
                                                        <CCol>Details</CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>1</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>2</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>3</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CAccordionBody>
                                    </CAccordionItem>
                                </CAccordion>
                            </CCol>
                            <CCol lg={12} sm={12} className='mt-1'>
                                <CAccordion activeItemKey={2}>
                                    <CAccordionItem itemKey={1}>
                                        <CAccordionHeader>
                                            <CRow>
                                                <label>Date: 30/09/2022</label>
                                                <CCol xs={4}>
                                                    <label style={{ fontWeight: 'bold' }}>Trainer Name : Prabha Yadav</label>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span style={{ fontWeight: 'bold' }}>Service : Yoga</span>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span>Duration: 30 min</span>
                                                </CCol>
                                                <CCol xs={2}>
                                                    <span>
                                                        <CButton color="success">
                                                            Complated
                                                        </CButton>
                                                    </span>
                                                </CCol>
                                                <CCol xs={4}>
                                                    <span>Batch Timing: 12 clock afternoon</span>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span>Registered User : 45</span>
                                                </CCol>
                                            </CRow>
                                        </CAccordionHeader>
                                        <CAccordionBody>
                                            <CListGroup>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>Sr. No</CCol>
                                                        <CCol>Date</CCol>
                                                        <CCol>Attendance ID</CCol>
                                                        <CCol>Client Name</CCol>
                                                        <CCol>Joining time</CCol>
                                                        <CCol>Attendance</CCol>
                                                        <CCol>Details</CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>1</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>2</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>3</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CAccordionBody>
                                    </CAccordionItem>
                                </CAccordion>
                            </CCol>
                            <CCol lg={12} sm={12} className='mt-1'>
                                <CAccordion activeItemKey={2}>
                                    <CAccordionItem itemKey={1}>
                                        <CAccordionHeader>
                                            <CRow>
                                                <label>Date: 30/09/2022</label>
                                                <CCol xs={4}>
                                                    <label style={{ fontWeight: 'bold' }}>Trainer Name : Prabha Yadav</label>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span style={{ fontWeight: 'bold' }}>Service : Yoga</span>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span>Duration: 30 min</span>
                                                </CCol>
                                                <CCol xs={2}>
                                                    <span>
                                                        <CPopover
                                                            title="Reason"
                                                            content="Trainer Not Well!"
                                                            placement="left"
                                                        >
                                                            <CButton color="warning">
                                                                Cancelled
                                                            </CButton>
                                                        </CPopover>
                                                    </span>
                                                </CCol>
                                                <CCol xs={4}>
                                                    <span>Batch Timing: 12 clock afternoon</span>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span>Registered User : 45</span>
                                                </CCol>
                                            </CRow>
                                        </CAccordionHeader>
                                        <CAccordionBody>
                                            <CListGroup>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>Sr. No</CCol>
                                                        <CCol>Date</CCol>
                                                        <CCol>Attendance ID</CCol>
                                                        <CCol>Client Name</CCol>
                                                        <CCol>Joining time</CCol>
                                                        <CCol>Attendance</CCol>
                                                        <CCol>Details</CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>1</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>2</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>3</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CAccordionBody>
                                    </CAccordionItem>
                                </CAccordion>
                            </CCol><CCol lg={12} sm={12} className='mt-1'>
                                <CAccordion activeItemKey={2}>
                                    <CAccordionItem itemKey={1}>
                                        <CAccordionHeader>
                                            <CRow>
                                                <label>Date: 30/09/2022</label>
                                                <CCol xs={4}>
                                                    <label style={{ fontWeight: 'bold' }}>Trainer Name : Prabha Yadav</label>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span style={{ fontWeight: 'bold' }}>Service : Yoga</span>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span>Duration: 30 min</span>
                                                </CCol>
                                                <CCol xs={2}>
                                                    <span>
                                                        <CPopover
                                                            title="Reason"
                                                            content="Trainer Not Well!"
                                                            placement="left"
                                                        >
                                                            <CButton color="warning">
                                                                Cancelled
                                                            </CButton>
                                                        </CPopover>
                                                    </span>
                                                </CCol>
                                                <CCol xs={4}>
                                                    <span>Batch Timing: 12 clock afternoon</span>
                                                </CCol>
                                                <CCol xs={3}>
                                                    <span>Registered User : 45</span>
                                                </CCol>
                                            </CRow>
                                        </CAccordionHeader>
                                        <CAccordionBody>
                                            <CListGroup>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>Sr. No</CCol>
                                                        <CCol>Date</CCol>
                                                        <CCol>Attendance ID</CCol>
                                                        <CCol>Client Name</CCol>
                                                        <CCol>Joining time</CCol>
                                                        <CCol>Attendance</CCol>
                                                        <CCol>Details</CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>1</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>2</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                                <CListGroupItem component="a" href="#" >
                                                    <CRow>
                                                        <CCol>3</CCol>
                                                        <CCol>25-10-2022</CCol>
                                                        <CCol>CLIENT456</CCol>
                                                        <CCol>Sejal</CCol>
                                                        <CCol>11 pm</CCol>
                                                        <CCol>P</CCol>
                                                        <CCol>
                                                            <CButton>View</CButton>
                                                        </CCol>
                                                    </CRow>
                                                </CListGroupItem>
                                            </CListGroup>
                                        </CAccordionBody>
                                    </CAccordionItem>
                                </CAccordion>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCardBody>
        </CCard>
    )
}

export default Event
