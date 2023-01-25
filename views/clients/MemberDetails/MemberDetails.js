import { cilArrowCircleBottom, cilArrowCircleTop } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormInput,
    CFormSelect,
    CInputGroup,
    CInputGroupText,
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
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Appointment from './Appointment'
import CallUpdate from './CallUpdate'
import Documents from './Documents'
import Payment from './Payment'
import ProfileDetails from './ProfileDetails'
import Referrals from './Referrals'
import ServiceProfile from './ServiceProfile'
import Teams from './Teams'
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'
const MemberDetails = () => {
    const [activeKey, setActiveKey] = useState(0)
    const { id, i } = useParams()
    console.log(id)
    useEffect(() => {
        if (id !== null) {
            setActiveKey(i)
        }
    }, [])

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-3 border-success">
                    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                        <CNav variant="pills" role="tablist" className='justify-content-between'>
                            {[
                                { id: '1', heading: 'Profile' },
                                { id: '2', heading: 'Services' },
                                { id: '3', heading: 'Payments' },
                                { id: '4', heading: 'Attendance' },
                                { id: '5', heading: 'Appointments' },
                                { id: '6', heading: 'Refers' },
                                { id: '7', heading: 'Shop' },
                                { id: '8', heading: 'Calls' },
                                { id: '9', heading: 'Fitness' },
                                { id: '10', heading: 'Docs' },
                                { id: '11', heading: 'T&C' },
                            ].map((item, index) => (
                                <CNavItem key={index}>
                                    <CNavLink
                                        style={{ color: 'white' }}
                                        href="javascript:void(0);"
                                        active={activeKey - 1 === index}
                                        onClick={() => setActiveKey(index + 1)}
                                    >
                                        {item.heading}
                                    </CNavLink>
                                </CNavItem>
                            ))}
                        </CNav>
                    </CCardHeader>
                    <CCardBody>
                        <CTabContent>
                            {[
                                { id: '1', heading: 'Profile', com: <ProfileDetails ids={id} deleteId={id} /> },
                                { id: '2', heading: 'Services', com: <ServiceProfile id={id} /> },
                                { id: '3', heading: 'Payments', com: <Payment id={id} /> },
                                { id: '4', heading: 'Attendance' },
                                { id: '5', heading: 'Appointments', com: <Appointment id={id} /> },
                                { id: '6', heading: 'Refers', com: <Referrals id={id} /> },
                                { id: '7', heading: 'Shop' },
                                { id: '8', heading: 'Calls', com: <CallUpdate id={id} /> },
                                { id: '9', heading: 'Fitness' },
                                { id: '10', heading: 'Docs', com: <Documents id={id} /> },
                                { id: '11', heading: 'T&C', com: <Teams id={id} /> },

                            ].map((item, index) => (
                                <CTabPane key={index} role="tabpanel" aria-labelledby="home-tab" visible={activeKey - 1 === index}>
                                    {item.com}
                                </CTabPane>
                            ))}
                        </CTabContent>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default MemberDetails
