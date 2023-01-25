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
import React, { useState } from 'react'
import ProfileDetails from './ProfileDetails'
const EmpDetails = () => {
    const [activeKey, setActiveKey] = useState(1)

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
                                { id: '10', heading: 'Fitness' },
                                { id: '11', heading: 'Docs' },
                                { id: '12', heading: 'T&C' },

                            ].map((item, index) => (
                                <CNavItem key={index}>
                                    <CNavLink
                                        style={{ color: 'white' }}
                                        href="javascript:void(0);"
                                        active={activeKey === item.id}
                                        onClick={() => setActiveKey(item.id)}
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
                                { id: '1', heading: 'Profile', com: <ProfileDetails /> },
                                { id: '2', heading: 'Services', },
                                { id: '3', heading: 'Payments' },
                                { id: '4', heading: 'Attendance' },
                                { id: '5', heading: 'Appointments' },
                                { id: '6', heading: 'Refers' },
                                { id: '7', heading: 'Shop' },
                                { id: '8', heading: 'Calls' },
                                { id: '9', heading: 'Trials' },
                                { id: '10', heading: 'Fitness' },
                                { id: '11', heading: 'Docs' },
                                { id: '12', heading: 'T&C' },

                            ].map((item, index) => (
                                <CTabPane key={index} role="tabpanel" aria-labelledby="home-tab" visible={activeKey === item.id}>
                                    {item.com}
                                </CTabPane>
                            ))}
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 2}>
                                <CRow className='mb-3'>
                                    <CCol xs={2}>
                                        <CInputGroup>
                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Month
                                            </CInputGroupText>
                                            <CFormSelect id="inputGroupSelect01">
                                                <option>Sep</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </CFormSelect>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs={2}>
                                        <CInputGroup>
                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Year
                                            </CInputGroupText>
                                            <CFormSelect id="inputGroupSelect01">
                                                <option>2022</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </CFormSelect>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol>
                                        <CInputGroup className="left">
                                            <CFormInput
                                                placeholder="Staff Name"
                                                aria-label="Recipient's username"
                                                aria-describedby="button-addon2"
                                            />
                                            <CButton type="button" color="primary" id="button-addon2">
                                                Go
                                            </CButton>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol>
                                        <CButtonGroup>
                                            <CButton color="primary">
                                                <CIcon icon={cilArrowCircleBottom} />
                                                Import
                                            </CButton>
                                            <CButton color="primary">
                                                <CIcon icon={cilArrowCircleTop} />
                                                Export
                                            </CButton>
                                        </CButtonGroup>
                                    </CCol>
                                </CRow>
                                <CTable bordered borderColor="primary" responsive>
                                    <CTableHead style={{ backgroundColor: "darkblue", color: "white" }} >
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Counseller</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Target</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Achieved/Collected
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">New Sales</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Renewals</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Balance Collection
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">View</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Achived %</CTableHeaderCell>
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                            <CTableDataCell>Sejal</CTableDataCell>
                                            <CTableDataCell>10000</CTableDataCell>
                                            <CTableDataCell>10000</CTableDataCell>
                                            <CTableDataCell>5000</CTableDataCell>
                                            <CTableDataCell>2000</CTableDataCell>
                                            <CTableDataCell>3000</CTableDataCell>
                                            <CTableDataCell>View</CTableDataCell>
                                            <CTableDataCell>100%</CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                            <CTableDataCell>Sejal</CTableDataCell>
                                            <CTableDataCell>10000</CTableDataCell>
                                            <CTableDataCell>10000</CTableDataCell>
                                            <CTableDataCell>5000</CTableDataCell>
                                            <CTableDataCell>2000</CTableDataCell>
                                            <CTableDataCell>3000</CTableDataCell>
                                            <CTableDataCell>View</CTableDataCell>
                                            <CTableDataCell>100%</CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                            <CTableDataCell>Sejal</CTableDataCell>
                                            <CTableDataCell>10000</CTableDataCell>
                                            <CTableDataCell>10000</CTableDataCell>
                                            <CTableDataCell>5000</CTableDataCell>
                                            <CTableDataCell>2000</CTableDataCell>
                                            <CTableDataCell>3000</CTableDataCell>
                                            <CTableDataCell>View</CTableDataCell>
                                            <CTableDataCell>100%</CTableDataCell>
                                        </CTableRow>
                                    </CTableBody>
                                </CTable>
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 3}>
                                <CRow className='mb-3'>
                                    <CCol xs={2}>
                                        <CInputGroup>
                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Month
                                            </CInputGroupText>
                                            <CFormSelect id="inputGroupSelect01">
                                                <option>Sep</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </CFormSelect>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs={2}>
                                        <CInputGroup>
                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Year
                                            </CInputGroupText>
                                            <CFormSelect id="inputGroupSelect01">
                                                <option>2022</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </CFormSelect>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol>
                                        <CInputGroup className="left">
                                            <CFormInput
                                                placeholder="Staff Name"
                                                aria-label="Recipient's username"
                                                aria-describedby="button-addon2"
                                            />
                                            <CButton type="button" color="primary" id="button-addon2">
                                                Go
                                            </CButton>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol>
                                        <CButtonGroup>
                                            <CButton color="primary">
                                                <CIcon icon={cilArrowCircleBottom} />
                                                Import
                                            </CButton>
                                            <CButton color="primary">
                                                <CIcon icon={cilArrowCircleTop} />
                                                Export
                                            </CButton>
                                        </CButtonGroup>
                                    </CCol>
                                </CRow>
                                <CTable bordered borderColor="primary" responsive>
                                    <CTableHead style={{ backgroundColor: "darkblue", color: "white" }} >
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Counseller</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Target</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Achieved/Collected
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">New Sales</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Renewals</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Balance Collection
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">View</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Achived %</CTableHeaderCell>
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                            <CTableDataCell>Sejal</CTableDataCell>
                                            <CTableDataCell>10000</CTableDataCell>
                                            <CTableDataCell>10000</CTableDataCell>
                                            <CTableDataCell>5000</CTableDataCell>
                                            <CTableDataCell>2000</CTableDataCell>
                                            <CTableDataCell>3000</CTableDataCell>
                                            <CTableDataCell>View</CTableDataCell>
                                            <CTableDataCell>100%</CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                            <CTableDataCell>Sejal</CTableDataCell>
                                            <CTableDataCell>10000</CTableDataCell>
                                            <CTableDataCell>10000</CTableDataCell>
                                            <CTableDataCell>5000</CTableDataCell>
                                            <CTableDataCell>2000</CTableDataCell>
                                            <CTableDataCell>3000</CTableDataCell>
                                            <CTableDataCell>View</CTableDataCell>
                                            <CTableDataCell>100%</CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                            <CTableDataCell>Sejal</CTableDataCell>
                                            <CTableDataCell>10000</CTableDataCell>
                                            <CTableDataCell>10000</CTableDataCell>
                                            <CTableDataCell>5000</CTableDataCell>
                                            <CTableDataCell>2000</CTableDataCell>
                                            <CTableDataCell>3000</CTableDataCell>
                                            <CTableDataCell>View</CTableDataCell>
                                            <CTableDataCell>100%</CTableDataCell>
                                        </CTableRow>
                                    </CTableBody>
                                </CTable>
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 4}>
                                <CRow className='mb-3'>
                                    <CCol xs={2}>
                                        <CInputGroup>
                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Month
                                            </CInputGroupText>
                                            <CFormSelect id="inputGroupSelect01">
                                                <option>Sep</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </CFormSelect>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs={2}>
                                        <CInputGroup>
                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Year
                                            </CInputGroupText>
                                            <CFormSelect id="inputGroupSelect01">
                                                <option>2022</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </CFormSelect>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol>
                                        <CInputGroup className="left">
                                            <CFormInput
                                                placeholder="Staff Name"
                                                aria-label="Recipient's username"
                                                aria-describedby="button-addon2"
                                            />
                                            <CButton type="button" color="primary" id="button-addon2">
                                                Go
                                            </CButton>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol>
                                        <CButtonGroup>
                                            <CButton color="primary">
                                                <CIcon icon={cilArrowCircleBottom} />
                                                Import
                                            </CButton>
                                            <CButton color="primary">
                                                <CIcon icon={cilArrowCircleTop} />
                                                Export
                                            </CButton>
                                        </CButtonGroup>
                                    </CCol>
                                </CRow>
                                <CTable bordered borderColor="primary" responsive>
                                    <CTableHead style={{ backgroundColor: "darkblue", color: "white" }} >
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Counseller</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Target</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Achieved/Collected
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">New Sales</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Renewals</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">
                                                Balance Collection
                                            </CTableHeaderCell>
                                            <CTableHeaderCell scope="col">View</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Achived %</CTableHeaderCell>
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                            <CTableDataCell>Sejal</CTableDataCell>
                                            <CTableDataCell>10000</CTableDataCell>
                                            <CTableDataCell>10000</CTableDataCell>
                                            <CTableDataCell>5000</CTableDataCell>
                                            <CTableDataCell>2000</CTableDataCell>
                                            <CTableDataCell>3000</CTableDataCell>
                                            <CTableDataCell>View</CTableDataCell>
                                            <CTableDataCell>100%</CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                            <CTableDataCell>Sejal</CTableDataCell>
                                            <CTableDataCell>10000</CTableDataCell>
                                            <CTableDataCell>10000</CTableDataCell>
                                            <CTableDataCell>5000</CTableDataCell>
                                            <CTableDataCell>2000</CTableDataCell>
                                            <CTableDataCell>3000</CTableDataCell>
                                            <CTableDataCell>View</CTableDataCell>
                                            <CTableDataCell>100%</CTableDataCell>
                                        </CTableRow>
                                        <CTableRow>
                                            <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                            <CTableDataCell>Sejal</CTableDataCell>
                                            <CTableDataCell>10000</CTableDataCell>
                                            <CTableDataCell>10000</CTableDataCell>
                                            <CTableDataCell>5000</CTableDataCell>
                                            <CTableDataCell>2000</CTableDataCell>
                                            <CTableDataCell>3000</CTableDataCell>
                                            <CTableDataCell>View</CTableDataCell>
                                            <CTableDataCell>100%</CTableDataCell>
                                        </CTableRow>
                                    </CTableBody>
                                </CTable>
                            </CTabPane>
                        </CTabContent>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default EmpDetails
