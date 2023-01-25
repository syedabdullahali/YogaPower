import { CButton, CCard, CCardBody, CCardHeader, CCardText, CCardTitle, CCol, CRow } from '@coreui/react'
import React from 'react'
import { FaFileInvoiceDollar, FaImage, FaPowerOff } from 'react-icons/fa'
import { HiCurrencyRupee } from 'react-icons/hi'
import { BsCalendar3, BsFileText } from 'react-icons/bs'
import { AiOutlineForm } from 'react-icons/ai'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CenterSetup = () => {
    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <h4>Center Setup Master</h4>
                <span>Complete the following steps for center setup</span>
            </CCardHeader>
            <CCardBody style={{ padding: '25px' }}>
                {[
                    { color: 'primary', icon: <FaImage style={{ marginLeft: '20px', marginRight: '20px' }} className='ml-2' size='60px' />, title: 'Company Logo Setup', subtitle: 'Brand logo', link: '/master/center-setup/logo-setup' },
                    { color: 'secondary', icon: <BsFileText style={{ marginLeft: '20px', marginRight: '20px' }} className='ml-2' size='60px' />, title: 'Company Profile Setup', subtitle: 'Set Up Branch Profile', link: '/master/center-setup/company-profile' },
                    { color: 'success', icon: <MdOutlineMiscellaneousServices style={{ marginLeft: '20px', marginRight: '20px' }} className='ml-2' size='60px' />, title: 'Services Master', subtitle: 'Set Up Branch Profile', link: '/master/center-setup/service-master' },
                    { color: 'danger', icon: <HiCurrencyRupee style={{ marginLeft: '20px', marginRight: '20px' }} className='ml-2' size='60px' />, title: 'Package Master', subtitle: 'Set Up Branch Profile', link: '/master/center-setup/package-master' },
                    { color: 'warning', icon: <BsCalendar3 style={{ marginLeft: '20px', marginRight: '20px' }} className='ml-2' size='60px' />, title: 'Batch time Master', subtitle: 'Brand logo', link: '/master/center-setup/batch-master' },
                    { color: 'info', icon: <AiOutlineForm style={{ marginLeft: '20px', marginRight: '20px' }} className='ml-2' size='60px' />, title: 'Form Master', subtitle: 'Brand logo', link: '/master/center-setup/form-master' },
                    { color: 'dark', icon: <FaFileInvoiceDollar style={{ marginLeft: '20px', marginRight: '20px' }} className='ml-2' size='60px' />, title: 'Invoice Master', subtitle: 'Brand logo' },
                ].map((item, index) => (
                    <CCard
                        color={item.color}
                        textColor='white'
                        className="mb-3"
                        key={index}
                    >
                        <CCardBody >
                            <CRow>
                                <CCol lg={1} sm={3}>{item.icon}</CCol>
                                <CCol lg={9} sm={6}>
                                    <CCardTitle>{item.title}</CCardTitle>
                                    <CCardText>{item.subtitle}</CCardText>
                                </CCol>
                                <CCol lg={2} sm={3}><Link to={item.link}><CButton className='mt-2' style={{ border: 'none', backgroundColor: 'white', color: 'black' }} tabIndex={-1}><FaPowerOff size='15px' /> Start</CButton></Link></CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>
                ))}
            </CCardBody>
        </CCard>
    )
}

export default CenterSetup
