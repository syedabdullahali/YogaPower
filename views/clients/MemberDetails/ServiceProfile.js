import { CButton, CCard, CCardTitle, CCol, CFormSelect, CImage, CRow } from '@coreui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProfileIcon from 'src/assets/images/avatars/profile_icon.png'
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const ServiceProfile = ({ id }) => {
    const [result, setResult] = useState()


    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;
    const centerCode = user.user.centerCode;

    useEffect(() => {
        getDetails(id)
    }, [])

    function getDetails(id) {
        const headers = {
            'Authorization': `Bearer ${token}`,
            'My-Custom-Header': 'foobar'
        };
        axios.get(`${url}/invoice/${id}`, { headers },
        )
            .then((resp) => {
                setResult(resp.data.filter((list) => list.MemberId === id))
                console.log(resp.data.filter((list) => list.MemberId === id))
            })
            .catch((error) => {
                console.error(error)
            })
    }
    console.log(result);
    return (
        <CRow>
            <CCol xs={12}>
                <div className='d-flex justify-content-between mb-2'>
                    <div className='mt-2 ms-2'>
                        <CCardTitle>Service Card - {result?.MemberName}</CCardTitle>
                    </div>
                    <div className='justify-content-around'>
                        <CButton style={{ margin: '5px' }}>Inter branch transfer</CButton>
                        <CButton style={{ margin: '5px' }}>Print Profile</CButton>
                        <CButton style={{ margin: '5px' }}>New Invoice</CButton>
                        <CButton style={{ margin: '5px' }}>New Call</CButton>
                        <CButton style={{ margin: '5px' }}>New Appointment</CButton>
                    </div>

                </div>
            </CCol>
            <CCol xs={9} lg={9} sm={9}>
                <CRow>
                    <CCol xs={4} lg={4} sm={4}>Current Membership status</CCol>
                    <CCol xs={4} lg={4} sm={4}>{result?.status}</CCol>
                    <CCol xs={4} lg={4} sm={4}>Member Id : {result?.centerName}</CCol>
                    <CCol xs={4} lg={4} sm={4}>Relationship since</CCol>
                    <CCol xs={4} lg={4} sm={4}>25-11-2022</CCol>
                    <CCol xs={4} lg={4} sm={4}>Attendance ID : {result?.AttendanceID}</CCol>
                    <CCol xs={4} lg={4} sm={4}>Total Bookings (1)</CCol>
                    <CCol xs={4} lg={4} sm={4}>Total Booking value : {result?.amount}</CCol>
                    <CCol xs={4} lg={4} sm={4}>Total Loyalty Points</CCol>
                    <CCol xs={4} lg={4} sm={4}>Total Referrals (0)</CCol>
                    <CCol xs={4} lg={4} sm={4}>Total Referral value : 0</CCol>
                    <CCol xs={4} lg={4} sm={4}>0</CCol>
                    <CCol xs={4} lg={4} sm={4}>Total Product purchased : 0</CCol>
                    <CCol xs={4} lg={4} sm={4}>Total Product value : 0</CCol>
                    <CCol xs={4} lg={4} sm={4}><CButton>Add/View Loyalty Points</CButton></CCol>
                    <CCol xs={4} lg={4} sm={4}>Total Pending payment (0)</CCol>

                </CRow>
            </CCol>
            <CCol xs={3} lg={3} sm={3}>
                <CImage className="mb-1" style={{ borderRadius: "50px" }} width={'200px'} src={ProfileIcon} />
            </CCol>
            <CCol xs={12}>
                <CRow>
                    <CCol xs={2}>
                        <CButton className='ml-2'>Resync To Device</CButton></CCol>
                    <CCol xs={2}>
                        <CButton className='ml-2'>Delete Member</CButton></CCol>
                    <CCol xs={2}>
                        <CFormSelect style={{ width: '190px' }}
                            className="ml-2"
                            aria-label="Select Currency"
                        >
                            <option>Select</option>
                        </CFormSelect></CCol>
                    <CCol xs={2}>
                        <CButton className='ml-2'>Add Fingerprint</CButton></CCol>

                </CRow>
            </CCol>
            <CCol xs={12}>
                <CCard style={{ padding: '15px' }} className='mt-2'>
                    <CRow>
                        <CCol>
                            Service Name : {result?.ServiceName}
                        </CCol>
                        <CCol>
                            Service Variation Name : {result?.ServiceVariation}
                        </CCol>
                        <CCol>
                            Service Id : 2068115
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>Duration: {result?.PackageName}</CCol>
                    </CRow>
                    <CRow><CCol>PT Staff: {result?.counseller}</CCol></CRow>
                    <CRow><CCol>Sessions : Not Applicable</CCol></CRow>
                    <CRow>
                        <CCol>Status : {result?.status}</CCol>
                        <CCol>Last visited on : - <CButton>Attendance</CButton></CCol>
                        <CCol></CCol>
                    </CRow>
                    <CRow>
                        <CCol>

                            <div className='d-flex justify-content-between mb-2'>
                                <div className='justify-content-around'>
                                    <CButton style={{ margin: '5px' }}>Upgrade</CButton>
                                    <CButton style={{ margin: '5px' }}>Suspend</CButton>
                                    <CButton style={{ margin: '5px' }}>Staff Update</CButton>
                                    <CButton style={{ margin: '5px' }}>Add Appointment</CButton>
                                    <CButton style={{ margin: '5px' }}>Cancel/Refund</CButton>
                                </div>
                            </div>
                        </CCol>
                    </CRow>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default ServiceProfile