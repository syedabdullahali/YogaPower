import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CNav,
    CNavItem,
    CNavLink,
    CRow,
    CTabContent,
    CTabPane,
} from '@coreui/react'
import React, { useState } from 'react'
import AllSuppilerList from './AllSuppilerList'
import GuestList from './GuestList'
import ImpCallList from './ImpCallList'
const AllCallList = () => {
    const [activeKey, setActiveKey] = useState(1)

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-3 border-success">
                    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                        <CNav variant="pills" role="tablist">
                            <CNavItem>
                                <CNavLink
                                    style={{ color: "white" }}
                                    href="javascript:void(0);"
                                    active={activeKey === 1}
                                    onClick={() => setActiveKey(1)}
                                >
                                    Imp Call List
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    style={{ color: "white" }}
                                    href="javascript:void(0);"
                                    active={activeKey === 2}
                                    onClick={() => setActiveKey(2)}
                                >

                                    All Suppiler List
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    style={{ color: "white" }}
                                    href="javascript:void(0);"
                                    active={activeKey === 3}
                                    onClick={() => setActiveKey(3)}
                                >
                                    Guest List
                                </CNavLink>
                            </CNavItem>
                        </CNav>
                    </CCardHeader>
                    <CCardBody>
                        <CTabContent>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                                <ImpCallList />
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 2}>
                                <AllSuppilerList />
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 3}>
                                <GuestList />
                            </CTabPane>

                        </CTabContent>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}
export default AllCallList
