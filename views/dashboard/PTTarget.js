import React from 'react'
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

const PTTarget = () => {
    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard>
                    <CCardHeader>
                        <CRow>
                            <CCol xs={3}>
                                <strong className="mt-2">PT Target</strong>
                            </CCol>
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
                            <CCol xs={2}>
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
                            <CCol xs={3}>
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
                    </CCardHeader>
                    <CCardBody>
                        <CTable bordered borderColor="primary" responsive>
                            <CTableHead color="dark">
                                <CTableRow>
                                    <CTableHeaderCell scope="col">Sr No</CTableHeaderCell>
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
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default PTTarget
