import { CCard, CCardBody, CCardHeader, CCardTitle, CCol, CFormSwitch, CNav, CNavItem, CNavLink, CRow } from '@coreui/react'
import React, { useState } from 'react'

const FormMaster = () => {
    const [activeKey, setActiveKey] = useState(1)
    return (
        <CCard>
            <CCardHeader>
                <CCardTitle>Form Master</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CCard className="mb-3 border-success">
                    <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                        <CNav variant="pills" role="tablist" className='justify-content-around'>
                            {[
                                { id: '1', heading: 'Enquiry Form' },
                                { id: '2', heading: 'Member Form' },
                                { id: '3', heading: 'Additional Details' },
                                { id: '4', heading: 'Fitness Profile' },
                                { id: '5', heading: 'Apparel and Shoes' },
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
                        <CRow>
                            {[
                                {
                                    id: '1', heading: 'Enquiry Form',
                                    content: {

                                    }
                                },
                                { id: '2', heading: 'Member Form' },
                                { id: '3', heading: 'Additional Details' },
                                { id: '4', heading: 'Fitness Profile' },
                                { id: '5', heading: 'Apparel and Shoes' },
                            ].map((item, index) => (
                                <CCol>
                                    {activeKey === item.id && (
                                        <CFormSwitch key={index} size="xl" className="mt-2" label="Status" style={{ defaultChecked: 'false' }} />

                                    )}
                                </CCol>
                            ))}
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCardBody>
        </CCard>
    )
}

export default FormMaster
