import { cilArrowCircleBottom, cilArrowCircleTop } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CFormInput,
    CFormSelect,
    CFormSwitch,
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
const AllRight = () => {
    const [activeKey, setActiveKey] = useState(1)

    return (
        <CRow>
            <CCol xs={12}>
                <CCard>
                    <CCardHeader>
                        <CNav variant="pills" role="tablist">
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 1}
                                    onClick={() => setActiveKey(1)}
                                >
                                    Dashboard
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 2}
                                    onClick={() => setActiveKey(2)}
                                >

                                    Lead
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 3}
                                    onClick={() => setActiveKey(3)}
                                >
                                    Clients
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 4}
                                    onClick={() => setActiveKey(4)}
                                >
                                    Marketing & Communication
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 5}
                                    onClick={() => setActiveKey(5)}
                                >
                                    Inventory
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 6}
                                    onClick={() => setActiveKey(6)}
                                >
                                    Finance
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 7}
                                    onClick={() => setActiveKey(7)}
                                >
                                    HR
                                </CNavLink>
                            </CNavItem>

                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 8}
                                    onClick={() => setActiveKey(8)}
                                >
                                    Fitness
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 9}
                                    onClick={() => setActiveKey(9)}
                                >
                                    Export
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === 10}
                                    onClick={() => setActiveKey(10)}
                                >
                                    Master
                                </CNavLink>
                            </CNavItem>
                        </CNav>
                    </CCardHeader>
                    <CCardBody>
                        <CTabContent>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                                <CRow>
                                    <CCol>
                                        <CCardTitle>Dashboard</CCardTitle>
                                        <CFormSwitch size="xl" label="Search" />
                                        <CFormSwitch size="xl" label="Universal Search" />
                                        <CFormSwitch size="xl" label="Summary" />
                                        <CFormSwitch size="xl" label="Sales, Pending Payment and Payment Collected Display" />
                                        <CFormSwitch size="xl" label="Payment mode summary" />
                                        <CFormSwitch size="xl" label="Expense summary" />
                                    </CCol>
                                    <CCol>
                                        <CCardTitle>Follow-ups</CCardTitle>
                                        <CFormSwitch size="xl" label="View all follow-ups" />
                                        <CFormSwitch size="xl" label="View only my follow-ups" />
                                    </CCol>
                                    <CCol>
                                        <CCardTitle>Emplyoee  Dahsbord</CCardTitle>
                                        <CFormSwitch size="xl" label="Sales Target" />
                                        <CFormSwitch size="xl" label="PT Target" />
                                    </CCol>
                                </CRow>
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 2}>
                                <CRow>
                                    <CCol>
                                        <CFormSwitch size="xl" label="Add enquiry, manage enquiries, enquiry archive" />
                                        <CFormSwitch size="xl" label="Convert Enquiry & Add member" />
                                        <CFormSwitch size="xl" label="Delete enquiries" />
                                        <CFormSwitch size="xl" label="Print all enquiries" />
                                        <CFormSwitch size="xl" label="Daily sales (DSR)" />
                                        <CFormSwitch size="xl" label="Revenue" />
                                    </CCol>
                                    <CCol>
                                        <CFormSwitch size="xl" label="Expected Revenue" />
                                        <CFormSwitch size="xl" label="Revenue vs target" />
                                        <CFormSwitch size="xl" label="Revenue month till date" />
                                        <CFormSwitch size="xl" label="Service sale, service type" />
                                        <CFormSwitch size="xl" label="Upgrade and cross-sell (3 reports)" />
                                        <CFormSwitch size="xl" label="Registration fee" />
                                    </CCol>
                                    <CCol>
                                        <CFormSwitch size="xl" label="Not interested" />
                                        <CFormSwitch size="xl" label="PT Sales Report" />
                                        <CFormSwitch size="xl" label="Corporate sales" />
                                    </CCol>
                                </CRow>
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 3}>
                                <CRow>
                                    <CCol>
                                        <CFormSwitch size="xl" label="Add enquiry, manage enquiries, enquiry archive" />
                                        <CFormSwitch size="xl" label="Convert Enquiry & Add member" />
                                        <CFormSwitch size="xl" label="Delete enquiries" />
                                        <CFormSwitch size="xl" label="Print all enquiries" />
                                        <CFormSwitch size="xl" label="Daily sales (DSR)" />
                                        <CFormSwitch size="xl" label="Revenue" />
                                    </CCol>
                                    <CCol>
                                        <CFormSwitch size="xl" label="Expected Revenue" />
                                        <CFormSwitch size="xl" label="Revenue vs target" />
                                        <CFormSwitch size="xl" label="Revenue month till date" />
                                        <CFormSwitch size="xl" label="Service sale, service type" />
                                        <CFormSwitch size="xl" label="Upgrade and cross-sell (3 reports)" />
                                        <CFormSwitch size="xl" label="Registration fee" />
                                    </CCol>
                                    <CCol>
                                        <CFormSwitch size="xl" label="Not interested" />
                                        <CFormSwitch size="xl" label="PT Sales Report" />
                                        <CFormSwitch size="xl" label="Corporate sales" />
                                    </CCol>
                                </CRow>
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
export default AllRight
