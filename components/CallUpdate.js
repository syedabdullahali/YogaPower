import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs';
import { MdCall, MdMail } from 'react-icons/md';
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const CallUpdate = ({ add, clickfun, ids }) => {
    const [result1, setResult1] = useState([])
    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    console.log(ids);
    useEffect(() => {
        axios.get(`${url}/prospect/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setResult1(res.data)
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);

    return (
        <CModal size='lg' style={{ border: '2px solid #0B5345' }} visible={add} onClose={clickfun} >
            <CModalHeader  >
                <CModalTitle>Call Update</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow >
                            <CTableHeaderCell>Sr.No</CTableHeaderCell>
                            <CTableHeaderCell>Name</CTableHeaderCell>
                            <CTableHeaderCell>Phone</CTableHeaderCell>
                            <CTableHeaderCell>Call Status</CTableHeaderCell>
                            <CTableHeaderCell>Date</CTableHeaderCell>
                            <CTableHeaderCell>Time</CTableHeaderCell>
                            <CTableDataCell>Discussion</CTableDataCell>
                            <CTableHeaderCell>Counseller</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {result1.filter((list) =>
                            list.EnquiryID === ids
                        ).map((item, index) => (
                            <CTableRow key={index}>
                                <CTableDataCell>{index + 1}</CTableDataCell>
                                <CTableDataCell>{item.Name}</CTableDataCell>
                                <CTableDataCell>{item.Contact}</CTableDataCell>
                                <CTableDataCell>{item.CallStatus}</CTableDataCell>
                                <CTableDataCell>{moment(item.CallDate).format("LL")}</CTableDataCell>
                                <CTableDataCell>{moment(item.Time, "HH:mm").format("hh:mm A")}</CTableDataCell>
                                <CTableDataCell>{item.Discussion}</CTableDataCell>
                                <CTableDataCell>{item.Counseller}</CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={clickfun}>
                    Close
                </CButton>
            </CModalFooter>
        </CModal>
    )
}

export default CallUpdate
