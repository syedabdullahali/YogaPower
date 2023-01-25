import { cilArrowCircleTop } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
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
    CFormTextarea,
    CPagination,
    CPaginationItem,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from "@coreui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const Referrals = ({ id }) => {
    const [action, setAction] = useState(false)
    const [Title, setTitle] = useState('')
    const [Policy, setPolicy] = useState('')

    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;
    const [result1, setResult1] = useState([]);
    const [paging, setPaging] = useState(0);
    const headers = {
        'Authorization': `Bearer ${token}`,
        'My-Custom-Header': 'foobar'
    };
    useEffect(() => {
        getPolicy()
    }, []);

    function getPolicy() {
        axios.get(`${url}/Referral/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                setResult1(res.data.reverse())
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function createPolicy() {
        if (Title != '' && Policy != '') {
            const data = {
                username: username,
                Title, Policy,
            }
            axios.post(`${url}/Referral/create`, data, { headers })
                .then((resp) => {
                    console.log(resp.data)
                    alert('Successfully Added')
                    getPolicy()
                    setAction(false)
                    setTitle('')
                    setPolicy('')
                })
                .catch((error) => console.log(error))
        } else {
            alert('enter lead Source')
        }
    }
    const navi = useNavigate()
    function deleteData(id) {
        if (confirm('You want to delete this')) {
            fetch(`${url}/Referral/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getPolicy()
                })
            })
        }
        return
    }

    return (
        <CRow>

            <CCol xs={12}>
                <div className='d-flex justify-content-between mb-2'>
                    <div className='mt-2 ms-2'>
                        <CCardTitle>Referrals  </CCardTitle>
                    </div>
                    <div className='justify-content-around'>
                        <CButton style={{ margin: '5px' }}>Inter branch transfer</CButton>
                        <CButton style={{ margin: '5px' }}>Print Profile</CButton>
                        <CButton style={{ margin: '5px' }} onClick={() => navi("/forms/invoice")}>New Invoice</CButton>
                        <CButton style={{ margin: '5px' }}>New Call</CButton>
                        <CButton style={{ margin: '5px' }}>New Appointment</CButton>
                    </div>

                </div>
            </CCol>
            <CCol lg={12} sm={12}>
                <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                    <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                        <CTableRow >
                            <CTableHeaderCell>Sno.</CTableHeaderCell>
                            <CTableHeaderCell>Referral</CTableHeaderCell>
                            <CTableHeaderCell>Name</CTableHeaderCell>
                            <CTableHeaderCell>Number</CTableHeaderCell>
                            <CTableHeaderCell>Email</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>

                        {result1.slice(paging * 10, paging * 10 + 10).filter((list) =>
                            list.userId === id).map((item, index) => (
                                <CTableRow key={index}>
                                    <CTableDataCell>{index + 1 + (paging * 10)}</CTableDataCell>
                                    <CTableDataCell>{item.Title}</CTableDataCell>
                                    <CTableDataCell>{item.Policy}</CTableDataCell>
                                    <CTableDataCell> <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' onClick={() => deleteData(item._id)} /> </CTableDataCell>
                                </CTableRow>

                            ))}
                    </CTableBody>
                </CTable>

            </CCol>
        </CRow>
    )
}

export default Referrals
