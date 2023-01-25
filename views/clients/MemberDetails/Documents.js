import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CForm,
    CFormInput,
    CFormSelect,
    CFormSwitch,
    CModal,
    CModalBody,
    CModalHeader,
    CModalTitle,
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
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { storage } from "src/firebase";
import { v4 } from "uuid";
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const Documents = ({ id }) => {
    const [action1, setAction1] = useState(false)
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [docName, setDocName] = useState('')
    const [image, setImage] = useState('')
    const [imageUrl, setImageUrl] = useState([])
    const [imageUrls, setImageUrls] = useState([])

    let user = JSON.parse(localStorage.getItem('user-info'))
    const token = user.token;
    const username = user.user.username;
    const [result1, setResult1] = useState([]);
    const [paging, setPaging] = useState(0)
    const headers = {
        'Authorization': `Bearer ${token}`,
        'My-Custom-Header': 'foobar'
    };
    const imagesListRef = ref(storage, "DocumentClient/");
    useEffect(() => {
        getGallery()
        getStaff()
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        });
    }, []);

    const [staff, setStaff] = useState([])
    function getStaff() {
        axios.get(`${url2}/employeeForm/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setStaff(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function getGallery() {
        axios.get(`${url}/Document/all`, {
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

    function createGallery() {
        const imageRef = ref(storage, `images/${image.name + v4()}`);
        uploadBytes(imageRef, image).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrl(url)
                console.log(url);
            });
        });
        if (imageUrl != null) {
            const data = {
                userId: id,
                StaffName: name,
                Documenttype: type,
                UploadDocument: imageUrl,
            }
            axios.post(`${url}/Document/create`, data, { headers })
                .then((resp) => {
                    console.log(resp.data)
                    alert('Successfully Added')
                    getGallery()
                    setAction1(false)
                    setName('')
                    setImageUrls('')
                    setDescription('')
                })
                .catch((error) => console.log(error))
        }

    }
    const handleImage = (e) => {
        if (e.target.files[0]) {
            const image1 = e.target.files[0];
            setImage(image1)
        }
    }

    const navi = useNavigate()
    function deleteData(id) {
        if (confirm('You want to delete this')) {
            fetch(`${url}/Document/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getGallery()
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
                        <CCardTitle>Documents</CCardTitle>
                    </div>
                    <div className='justify-content-around'>
                        <CButton style={{ margin: '5px' }}>Inter branch transfer</CButton>
                        <CButton style={{ margin: '5px' }}>Print Profile</CButton>
                        <CButton style={{ margin: '5px' }} onClick={() => navi("/forms/invoice")}>New Invoice</CButton>
                        <CButton style={{ margin: '5px' }} >New Call</CButton>
                        <CButton style={{ margin: '5px' }}>New Appointment</CButton>
                    </div>
                </div>
            </CCol>
            <CForm className="mb-2">
                <div className="d-flex justify-content-between">
                    <div></div>
                    <div>
                        <CRow>
                            <CCol>
                                <CButton className="ms-1 mt-2" onClick={() => setAction1(!action1)}>{action1 ? 'close' : 'Add Document'}</CButton>
                            </CCol>
                        </CRow>
                    </div>
                </div>
                {action1 &&
                    <div>
                        <CRow className='mt-3'>
                            <CCol lg={6} md={6} sm={12}>
                                <CFormSelect
                                    label="Staff Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                >
                                    <option >Select</option>
                                    {staff.filter((list) => list.username === username && list.selected === 'Select').map((item, index) => (
                                        item.username === username && (
                                            <option key={index}>{item.FullName}</option>
                                        )
                                    ))}
                                </CFormSelect>
                            </CCol>
                            <CCol lg={6} md={6} sm={12}>
                                <CFormSelect
                                    label="Document Type"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <option >Select</option>
                                    <option>Club Agreement</option>
                                    <option>Address Proof</option>
                                    <option>ID Proof</option>
                                    <option>Club Agreement</option>
                                </CFormSelect>
                            </CCol>
                            <CCol lg={12} md={12} sm={12}>
                                <CFormInput
                                    className="mb-1 mr-3"
                                    type="file"
                                    label="Document Choose"
                                    onChange={handleImage}
                                    accept="image/*"
                                />
                            </CCol>
                            <CCol className="mt-2" lg={6} md={6} sm={12}>
                                <CButton className="mt-2" onClick={() => createGallery()}>Save</CButton>
                            </CCol>
                        </CRow>
                    </div>
                }
            </CForm>
            <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                    <CTableRow >
                        <CTableHeaderCell>Sr.No</CTableHeaderCell>
                        <CTableHeaderCell>Date</CTableHeaderCell>
                        <CTableHeaderCell>Name</CTableHeaderCell>
                        <CTableHeaderCell>Document Type</CTableHeaderCell>
                        <CTableHeaderCell>Image</CTableHeaderCell>
                        <CTableHeaderCell>Action</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {result1.filter((list) => list.userId === id).map((item, index) => (
                        <CTableRow key={index}>
                            <CTableDataCell>{index + 1 + (paging * 10)}</CTableDataCell>
                            <CTableDataCell>{moment(item.createdAt).format("MM-DD-YYYY")}</CTableDataCell>
                            <CTableDataCell className="text-center">{item.StaffName}</CTableDataCell>
                            <CTableDataCell>{item.Documenttype}</CTableDataCell>
                            <CTableDataCell>{item.UploadDocument != null &&
                                <img width='100px' src={item.UploadDocument} />
                            }
                            </CTableDataCell>
                            <CTableDataCell><MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteData(item._id)} size='20px' /></CTableDataCell>
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>

        </CRow>
    );
};

export default Documents;