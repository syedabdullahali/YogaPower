import { CButton, CCard, CCardBody, CCol, CFormInput, CFormSelect, CImage, CInputGroup, CInputGroupText, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import axios from 'axios'
import logo from 'src/assets/images/avatars/icon.png'
import { useReactToPrint } from 'react-to-print'
const url = 'https://yog-api.herokuapp.com'
import React, { useEffect, useRef, useState } from 'react'
import moment from 'moment'
import ViewInvoice from './ViewInvoice'

const MakeInvoice = () => {

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'yog-power',
        onAfterPrint: () => alert('print success')
    })
    const [Fullname, setFullname] = useState('')
    const [serviceName, setserviceName] = useState('')
    const [GeneralTrainer, setGeneralTrainer] = useState('')
    const [visi1, setVisi1] = useState('')
    const [MemberId, setMemberId] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [tax, settax] = useState(0)
    const [total, setTotal] = useState(0)
    const [paidAmount, setpaidAmount] = useState('')
    const [discount, setDiscount] = useState()
    const [dis1, setDis1] = useState()
    const [pendingAmount, setPendingAmount] = useState('')
    const [paymode, setPayMode] = useState('')
    const [finalTotal, setFinalTotal] = useState('')
    const [ser1, setSer1] = useState('')
    const [ser2, setSer2] = useState('')
    const [ser3, setSer3] = useState('')
    const [ser4, setSer4] = useState('')
    const [ser5, setSer5] = useState('')
    const [ser6, setSer6] = useState('')
    const [invId, setInvId] = useState('')
    const [search, setSearch] = useState('')
    const [searchType, setSearchType] = useState('')
    const [clientArr, setclientArr] = useState([])


    var currentdate = new Date();
    var datetime = currentdate.getDay() + "/" + currentdate.getMonth()
        + "/" + currentdate.getFullYear();

    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;
    const centerCode = user.user.centerCode;
    const [result, setResult] = useState([]);
    const [result1, setResult1] = useState([]);
    const [visi, setVisi] = useState(false);
    const [mem, setMem] = useState([]);
    const [viewInvoice, setViewInvoice] = useState('')

    useEffect(() => {
        searchData()
        getSubService()

        getMem()
        getSubService()
        getPackage()
    }, [])
    function getPackage() {
        axios.get(`${url}/Package/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                setPackageArr(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function getImage() {
        listAll(imagesListRef).then((response) => {
            console.log(response);
        })
    }
    function getSubService() {
        axios.get(`${url}/subservice/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setResult1(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    function getMem() {
        axios.get(`${url}/memberForm/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setMem(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    function getBatch() {
        axios.get(`${url}/Batch/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                setResult(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function getSubService() {
        axios.get(`${url}/subservice/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setResult1(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const saveInvoice = () => {
        let data = {
            username: username,
            date: datetime,
            centerName: centerCode,
            InvoiceNo: `${centerCode}Inv-${mem.length}`,
            MemberId: MemberId, MemberName: Fullname, ServiceName: serviceName, ServiceVariation: ser4, PackageName: ser6, duration: ser2, fees: ser3, startDate, endDate,
            counseller: ser5, amount: total, tax, discount, totalAmount: finalTotal, paidAmount, pendingAmount, paymode, status: 'active'
        }

        const headers = {
            'Authorization': `Bearer ${token}`,
            'My-Custom-Header': 'foobar'
        };
        axios.post(`${url}/invoice/create`, data, { headers },
        )
            .then((resp) => {
                setInvId(resp.data._id);
                console.log(resp.data._id);
                let data1 = { invoiceId: resp.data._id, invoiceNum: resp.data.InvoiceNo, startDate, endDate, }
                axios.post(`${url}/memberForm/update/${MemberId}`, data1, { headers },
                )
                    .then(() => {
                        console.log(resp.data._id);
                        alert("successfully submitted")
                        console.log("refresh prevented");

                        setVisi1(true)
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            })
            .catch((error) => {
                console.error(error)
            })

    }


    const handleTaxTotal = (e) => {
        settax(e.target.value)
        let total = ser3 / 100 * e.target.value;
        if (total >= 0) {
            setTotal(Number(total) + Number(ser3))
        } else {
            setTotal(ser3)
        }
    }

    const handleDiscount = (e) => {
        let total = ser3 / 100 * tax;

        if (dis1 == 'R') {
            if (total >= 0) {
                setTotal(Number(total) + Number(ser3) - e.target.value)
            } else {
                setTotal(ser3 - e.target.value)
            }
        } else {
            let dis = ser3 / 100 * e.target.value;
            if (total >= 0) {
                setTotal(Number(total) + Number(ser3) - dis)
            } else {
                setTotal(ser3 - dis)
            }
        }
        setDiscount(e.target.value)
    }

    function searchData() {
        const headers = {
            'Authorization': `Bearer ${token}`,
            'My-Custom-Header': 'foobar'
        };
        axios.get(`${url}/memberForm/all`, { headers },
        ).then((resp) => {
            console.log(resp.data);
            setclientArr(resp.data);

        })
            .catch((error) => {
                console.error(error)
            })

    }

    const [ContactNumber, setContactNumber] = useState('')
    const [AttendanceID, setAttendanceID] = useState('')
    const [Email, setEmail] = useState('')
    const [invoiceView, setInvoiceView] = useState(false)
    function searchSingle(id) {
        const headers = {
            'Authorization': `Bearer ${token}`,
            'My-Custom-Header': 'foobar'
        };
        axios.get(`${url}/memberForm/${id}`, { headers },
        ).then((resp) => {
            console.log(resp.data);
            setMemberId(resp.data._id)
            setFullname(resp.data.Fullname)
            setserviceName(resp.data.serviceName)
            setSer4(resp.data.ServiceVariation)
            setAttendanceID(resp.data.AttendanceID)
            setEmail(resp.data.Email)
            setContactNumber(resp.data.ContactNumber)
            setInvoiceView(true)
            setserviceName('')
            setSer1('')
            setSer2('')
            setSer3('')
            setSer4('')
            setSer5('')
            setSer6('')
            setTotal('')
            settax('')
            setDiscount('')
            setDis1('')
            setpaidAmount('')
            setPendingAmount('')
            setStartDate('')
            setEndDate('')
            setFinalTotal('')
            setPayMode('')
        })
            .catch((error) => {
                console.error(error)
            })

    }
    console.log(clientArr);

    return (
        <>
            <CCard className='mb-2'>
                <CCardBody>
                    <CRow>
                        <CCol>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Service Name"
                                value={searchType}
                                onChange={(e) => setSearchType(e.target.value)}
                            >
                                <option>Select</option>
                                <option value='Fullname'>Name</option>
                                <option value='ContactNumber'>Mobile</option>
                            </CFormSelect>
                        </CCol>
                        <CCol>
                            <CFormInput
                                type={searchType === 'Fullname' ? 'text' : 'number'}
                                value={search}
                                onChange={(e) => { setSearch(e.target.value), setInvoiceView(false) }}
                                style={{ minWidth: "100px" }}
                                aria-describedby="exampleFormControlInputHelpInline"
                            />
                        </CCol>
                        <CCol>
                            <CButton onClick={() => searchData()}>Search</CButton>
                        </CCol>
                    </CRow >

                    {!invoiceView &&
                        <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                <CTableRow >
                                    <CTableHeaderCell>Client Name</CTableHeaderCell>
                                    <CTableHeaderCell>Number</CTableHeaderCell>
                                    <CTableHeaderCell>Action</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {clientArr.filter((list) => list.username === username && (searchType === 'Fullname' ? list.Fullname.toLowerCase().includes(search.toLowerCase()) : list.ContactNumber.toString().includes(search.toString()))).map((item, index) => (
                                    item.username === username && (
                                        search != '' && (
                                            <CTableRow key={index}>
                                                <CTableDataCell>{item.Fullname}</CTableDataCell>
                                                <CTableDataCell>{item.ContactNumber}</CTableDataCell>
                                                <CTableDataCell><label style={{ color: 'blue', cursor: 'pointer' }} onClick={() => searchSingle(item._id)}>Select</label></CTableDataCell>
                                            </CTableRow>
                                        )
                                    )
                                ))}
                            </CTableBody>
                        </CTable>
                    }
                </CCardBody>
            </CCard>
            {invoiceView &&
                <CCard>
                    <CCardBody>
                        <CRow>
                            <CCol lg={12} className='text-center'><CImage src={logo} width="80px" height='80px' /></CCol>
                            <CCol lg={12} className='text-center mt-2'><h5>Yog Power International</h5></CCol>
                            <CCol className='mt-2' style={{ marginLeft: '10px' }}>
                                <h6>Client Name: {Fullname}</h6>
                                <div>Client Number: {ContactNumber}</div>
                                Customer ID : {AttendanceID}<br />
                                Email-Id : {Email}<br />
                            </CCol>
                            <CCol className='mt-2' style={{ marginRight: '30px' }}>
                                <div className='float-end'>
                                    Date : {datetime}<br />
                                    Invoice No : {centerCode}INV{clientArr.length} <br />
                                    <CRow>
                                        <CCol lg={9}>
                                            <CInputGroup>
                                                <CInputGroupText
                                                    component="label"
                                                    htmlFor="inputGroupSelect01"
                                                >
                                                    Counseller :
                                                </CInputGroupText>
                                                <CFormInput
                                                    type="text"
                                                    value={ser5}
                                                    onChange={(e) => setSer5(e.target.value)}
                                                    style={{ minWidth: "100px" }}
                                                    aria-describedby="exampleFormControlInputHelpInline"
                                                />
                                            </CInputGroup>
                                        </CCol>
                                    </CRow>
                                </div>
                            </CCol>
                            <CCol lg={12} className='text-center mt-2'><h4>Invoice</h4></CCol>
                        </CRow>

                        <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                <CTableRow >
                                    <CTableHeaderCell>Sr.No</CTableHeaderCell>
                                    <CTableHeaderCell>DESCRIPTION</CTableHeaderCell>
                                    <CTableHeaderCell>DURATION</CTableHeaderCell>
                                    <CTableHeaderCell>SERVICE FEE</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableDataCell>1</CTableDataCell>
                                    <CTableDataCell>
                                        <CRow>
                                            <CCol>
                                                <CFormSelect
                                                    className="mb-1"
                                                    aria-label="Select Service Name"
                                                    value={ser1}
                                                    onChange={(e) => setSer1(e.target.value)}
                                                    label='Service Name'
                                                >
                                                    <option>Select Service</option>
                                                    {result1.filter((list) =>
                                                        list.username === username &&
                                                        list.status === true).map((item, index) => (
                                                            <option key={index} value={item.selected_service}> {item.selected_service}</option>
                                                        ))}
                                                </CFormSelect>
                                            </CCol>
                                            <CCol>
                                                <CFormSelect
                                                    className="mb-1"
                                                    aria-label="Select Service Name"
                                                    value={ser6}
                                                    label='Service Variation'
                                                    onChange={(e) => setSer6(e.target.value)}
                                                >
                                                    <option>Select Variation</option>
                                                    {result1.filter((list) =>
                                                        list.username === username && list.selected_service === ser1 &&
                                                        list.status === true).map((item, index) => (
                                                            <option key={index} value={item.sub_Service_Name}> {item.sub_Service_Name}</option>
                                                        ))}
                                                </CFormSelect>
                                            </CCol>
                                            <CCol>
                                                <CFormSelect
                                                    className="mb-1"
                                                    aria-label="Select Package"
                                                    value={ser4}
                                                    onChange={(e) => setSer4(e.target.value)}
                                                    label='Package'
                                                >
                                                    <option>Select Package</option>
                                                    {result1.filter((list) =>
                                                        list.username === username && list.sub_Service_Name === ser6 &&
                                                        list.status === true).map((item, index) => (
                                                            <option key={index} value={item.packages}> {item.packages}</option>
                                                        ))}
                                                </CFormSelect>
                                            </CCol>
                                        </CRow>
                                        <CRow>
                                            <CCol>
                                                <CFormInput
                                                    type="date"
                                                    label="Start Date"
                                                    value={startDate}
                                                    onChange={(e) => setStartDate(e.target.value)}
                                                    style={{ minWidth: "100px" }}
                                                    aria-describedby="exampleFormControlInputHelpInline"
                                                />
                                            </CCol>
                                            <CCol>
                                                <CFormInput
                                                    type="date"
                                                    label="End Date"
                                                    value={endDate}
                                                    onChange={(e) => setEndDate(e.target.value)}
                                                    style={{ minWidth: "100px" }}
                                                    aria-describedby="exampleFormControlInputHelpInline"
                                                />
                                            </CCol>
                                        </CRow>

                                    </CTableDataCell>
                                    <CTableDataCell>

                                        <CFormSelect
                                            className="mb-1"
                                            aria-label="Select Service Name"
                                            value={ser2}
                                            onChange={(e) => setSer2(e.target.value)}
                                        >
                                            <option>Select Duration</option>
                                            {result1.filter((list) =>
                                                list.username === username &&
                                                list.status === true && list.duration !== '' && list.sub_Service_Name === ser6).map((item, index) => (
                                                    <option key={index} value={item.duration}>{item.duration}</option>
                                                ))}
                                        </CFormSelect>


                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CFormSelect
                                            className="mb-1"
                                            aria-label="Select Service Name"
                                            value={ser3}
                                            onChange={(e) => setSer3(e.target.value)}
                                        >
                                            <option>Select Fees</option>
                                            {result1.filter((list) =>
                                                list.username === username &&
                                                list.status === true && list.duration.includes(ser2)).map((item, index) => (
                                                    <option key={index} value={item.fees}>{item.fees}</option>
                                                ))}
                                        </CFormSelect>
                                    </CTableDataCell>
                                </CTableRow>

                                <CTableRow>
                                    <CTableDataCell colSpan={2}></CTableDataCell>
                                    <CTableDataCell colSpan={2}>
                                        <CTable bordered style={{ margin: '0', padding: '0' }} responsive>
                                            <CTableBody>
                                                <CTableRow>
                                                    <CTableDataCell>Sub Total</CTableDataCell>
                                                    <CTableDataCell>
                                                        <CFormInput
                                                            className="mb-1"
                                                            style={{ minWidth: "100px" }}
                                                            aria-describedby="exampleFormControlInputHelpInline"
                                                            value={ser3}

                                                        />
                                                    </CTableDataCell>
                                                </CTableRow>

                                                <CTableRow>
                                                    <CTableDataCell>
                                                        <CRow>
                                                            <CCol>
                                                                Discount
                                                            </CCol>
                                                            <CCol>
                                                                <CFormSelect
                                                                    className="mb-1"
                                                                    aria-label="Select"
                                                                    value={dis1}
                                                                    onChange={(e) => { setDis1(e.target.value), setDiscount(0) }}
                                                                    options={[
                                                                        { label: "select", value: "" },
                                                                        { label: "%", value: "P" },
                                                                        { label: "₹", value: "R" },
                                                                    ]}
                                                                />
                                                            </CCol>
                                                        </CRow>
                                                    </CTableDataCell>
                                                    <CTableDataCell>
                                                        <CFormInput
                                                            className="mb-1"
                                                            value={discount}
                                                            onChange={(e) => handleDiscount(e)}
                                                            type="number"
                                                            aria-describedby="exampleFormControlInputHelpInline"
                                                        />
                                                    </CTableDataCell>
                                                </CTableRow>
                                                <CTableRow>
                                                    <CTableDataCell>
                                                        <CRow>
                                                            <CCol lg={4}>Tax </CCol>
                                                            <CCol>
                                                                <CFormSelect
                                                                    className="mb-1"
                                                                    value={tax}
                                                                    onChange={(e) => handleTaxTotal(e)}
                                                                    aria-label="Select"
                                                                    options={[
                                                                        { label: "Select", value: "0" },
                                                                        { label: "GST", value: "18" },
                                                                        { label: "IGST", value: "9" },
                                                                        { label: "CGST", value: "9" },
                                                                        { label: "TDS", value: "18" },
                                                                    ]}
                                                                /></CCol>
                                                        </CRow>
                                                    </CTableDataCell>
                                                    <CTableDataCell className="mt-2">
                                                        <CFormInput
                                                            className="mb-1"
                                                            style={{ minWidth: "100px" }}
                                                            aria-describedby="exampleFormControlInputHelpInline"
                                                            value={ser3 / 100 * tax}
                                                        />
                                                    </CTableDataCell>
                                                </CTableRow>
                                                <CTableRow>
                                                    <CTableDataCell>Total Amount</CTableDataCell>
                                                    <CTableDataCell>
                                                        <CFormInput
                                                            className="mb-1"
                                                            type="number"
                                                            value={total - discount}
                                                            style={{ minWidth: "100px" }}
                                                            aria-describedby="exampleFormControlInputHelpInline"
                                                        />
                                                    </CTableDataCell>
                                                </CTableRow>

                                                <CTableRow>
                                                    <CTableDataCell>Paid Amount</CTableDataCell>
                                                    <CTableDataCell>
                                                        <CFormInput
                                                            className="mb-1"
                                                            type="number"
                                                            value={paidAmount}
                                                            onChange={(e) => { setpaidAmount(e.target.value), setPendingAmount(total - e.target.value - discount), setFinalTotal(e.target.value) }}
                                                            style={{ minWidth: "100px" }}
                                                            aria-describedby="exampleFormControlInputHelpInline"
                                                        />
                                                    </CTableDataCell>
                                                </CTableRow>
                                                <CTableRow>
                                                    <CTableDataCell>Balance Amount</CTableDataCell>
                                                    <CTableDataCell>
                                                        <CFormInput
                                                            className="mb-1"
                                                            type="number"
                                                            value={pendingAmount}
                                                            onChange={(e) => { setPendingAmount(e.target.value), setpaidAmount(total - e.target.value - discount), setFinalTotal(total - e.target.value - discount) }}
                                                            style={{ minWidth: "100px" }}
                                                            aria-describedby="exampleFormControlInputHelpInline"
                                                        />
                                                    </CTableDataCell>
                                                </CTableRow>

                                                <CTableRow>
                                                    <CTableDataCell>Mode of Payment</CTableDataCell>

                                                    <CTableDataCell>
                                                        <CFormSelect
                                                            className="mb-1"
                                                            aria-label="Select Call Status"
                                                            value={paymode}
                                                            onChange={(e) => { setPayMode(e.target.value) }}
                                                            style={{ minWidth: "100px" }}
                                                            options={[
                                                                "Select",
                                                                { label: "Cash", value: "Cash" },
                                                                { label: "Debit Card", value: "Debit Card" },
                                                                { label: "Credit Card", value: "Credit Card" },
                                                                { label: "Cheque", value: "Cheque" },
                                                                { label: "Draft", value: "Draft" },
                                                                { label: "Paytm", value: "Paytm" },
                                                                { label: "GPay", value: "GPay" },
                                                                { label: "PhonePe", value: "PhonePe" },
                                                                { label: "Account Pay", value: "Account Pay" },
                                                            ]}
                                                        />
                                                    </CTableDataCell>
                                                </CTableRow>
                                                <CTableRow>
                                                </CTableRow>
                                            </CTableBody>
                                        </CTable>
                                    </CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableDataCell colSpan={3}>Total</CTableDataCell>
                                    <CTableDataCell>
                                        <CFormInput
                                            className="mb-1"
                                            type="number"
                                            value={finalTotal}
                                            onChange={(e) => setFinalTotal(e.target.value)}
                                            style={{ minWidth: "100px" }}
                                            aria-describedby="exampleFormControlInputHelpInline"
                                        />
                                    </CTableDataCell>
                                </CTableRow>
                                <CTableRow style={{ backgroundColor: "#0B5345", color: "white" }}>
                                    <CTableDataCell colSpan={4}>
                                        <h5>TERMS AND CONDITIONS</h5>
                                    </CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableDataCell colSpan={4}>
                                        <div>Fee once paid is not refundable, Non transferable & no package extension, lapsed sessions has to be adjusted within the expiry date. Instructors & timings are subject to change. All packages would be on hourly basis in a day. If a person wishes to workout more than an hour in a day, kindly upgrade your package accordingly. follow guidelines for better result</div>
                                    </CTableDataCell>
                                </CTableRow>

                                <CTableRow>
                                    <CTableDataCell colSpan={4}>
                                        <div style={{ fontWeight: 'bold' }}>Address: Shop 24/25, 2nd Floor, V Mall, Thakur Complex, Kandivali East, Mumbai 400 101. India.</div>
                                        <label style={{ fontWeight: 'bold' }}>Email: info@yogpowerint.com</label>
                                        <label style={{ fontWeight: 'bold', marginLeft: '10px' }}>Phone: +91 9819 1232 91</label>
                                        <div style={{ fontWeight: 'bold' }}>Website: https://yogpowerint.com</div>
                                    </CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                        </CTable>

                        <CButton color="primary" onClick={() => saveInvoice()}>Submit</CButton>
                    </CCardBody>
                </CCard>
            }
            <CModal size="xl" alignment="center" scrollable visible={visi1} onClose={() => setVisi1(false)}>
                <CModalHeader>
                    <CModalTitle>Invoice Preview</CModalTitle>
                </CModalHeader>
                <CModalBody ref={componentRef} style={{ padding: '25px' }}>
                    <CRow>
                        <CCol lg={12} className='text-center'><CImage src={logo} width="100px" height='100px' /></CCol>
                        <CCol lg={12} className='text-center mt-2'><h5>Yog Power International</h5></CCol>
                        <CCol className='mt-2' style={{ marginLeft: '10px' }}>
                            <h6>Client Name: {Fullname}</h6>
                            <div>Client Number: {ContactNumber}</div>
                            Customer ID : {AttendanceID}<br />
                            Email-Id : {Email}<br />
                        </CCol>
                        <CCol className='mt-2' style={{ marginRight: '30px' }}>
                            <div className='float-end'>
                                Date : {datetime}<br />
                                Invoice No : {centerCode}INV{result1.length} <br />
                                Counseller : {ser5}
                            </div>
                        </CCol>
                        <CCol lg={12} className='text-center mt-2'><h4>Invoice</h4></CCol>
                    </CRow>

                    <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} responsive>
                        <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                            <CTableRow >
                                <CTableHeaderCell>Sr.No</CTableHeaderCell>
                                <CTableHeaderCell>DESCRIPTION</CTableHeaderCell>
                                <CTableHeaderCell>DURATION</CTableHeaderCell>
                                <CTableHeaderCell>SERVICE FEE</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            <CTableRow>
                                <CTableDataCell>1</CTableDataCell>
                                <CTableDataCell>
                                    <CRow>
                                        <CCol lg={6}>
                                            <div style={{ fontWeight: 'bold' }}>Service Name: {ser1}</div>
                                        </CCol>
                                        <CCol lg={6}>
                                            <div style={{ fontWeight: 'bold' }}>Service Variation: {ser6}</div>
                                        </CCol>
                                        <CCol lg={12}>
                                            <div style={{ fontWeight: 'bold' }}>Package : {ser4}</div>
                                        </CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol>
                                            <div>Start Date: {startDate}</div>
                                        </CCol>
                                        <CCol>
                                            <div >End Date: {endDate}</div>
                                        </CCol>
                                    </CRow>

                                </CTableDataCell>
                                <CTableDataCell>
                                    <div style={{ fontWeight: 'bold' }}>{ser2}</div>

                                </CTableDataCell>
                                <CTableDataCell>
                                    <div style={{ fontWeight: 'bold' }}>{ser3}</div>
                                </CTableDataCell>
                            </CTableRow>

                            <CTableRow>
                                <CTableDataCell colSpan={2}></CTableDataCell>
                                <CTableDataCell colSpan={2}>
                                    <CTable bordered style={{ margin: '0', padding: '0' }} responsive>
                                        <CTableBody>
                                            <CTableRow>
                                                <CTableDataCell>Sub Total</CTableDataCell>
                                                <CTableDataCell>
                                                    <div style={{ fontWeight: 'bold' }}>{ser3}</div>

                                                </CTableDataCell>
                                            </CTableRow>

                                            <CTableRow>
                                                <CTableDataCell>

                                                    Discount

                                                </CTableDataCell>
                                                <CTableDataCell>
                                                    <div style={{ fontWeight: 'bold' }}>{discount}{dis1 === 'P' ? '%' : 'Rs'}</div>
                                                </CTableDataCell>
                                            </CTableRow>
                                            <CTableRow>
                                                <CTableDataCell>
                                                    Tax
                                                </CTableDataCell>
                                                <CTableDataCell className="mt-2">
                                                    <div style={{ fontWeight: 'bold' }}>{ser3 / 100 * tax}</div>
                                                </CTableDataCell>
                                            </CTableRow>
                                            <CTableRow>
                                                <CTableDataCell>Total Amount</CTableDataCell>
                                                <CTableDataCell>
                                                    <div style={{ fontWeight: 'bold' }}>{total}</div>

                                                </CTableDataCell>
                                            </CTableRow>

                                            <CTableRow>
                                                <CTableDataCell>Paid Amount</CTableDataCell>
                                                <CTableDataCell>
                                                    <div style={{ fontWeight: 'bold' }}>{paidAmount}</div>

                                                </CTableDataCell>
                                            </CTableRow>
                                            <CTableRow>
                                                <CTableDataCell>Balance Amount</CTableDataCell>
                                                <CTableDataCell>
                                                    <div style={{ fontWeight: 'bold' }}>{pendingAmount}</div>
                                                </CTableDataCell>
                                            </CTableRow>

                                            <CTableRow>
                                                <CTableDataCell>Mode of Payment</CTableDataCell>

                                                <CTableDataCell>
                                                    <div style={{ fontWeight: 'bold' }}>{paymode}</div>

                                                </CTableDataCell>
                                            </CTableRow>
                                            <CTableRow>
                                            </CTableRow>
                                        </CTableBody>
                                    </CTable>
                                </CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableDataCell colSpan={3}>Total</CTableDataCell>
                                <CTableDataCell>
                                    <div style={{ fontWeight: 'bold' }}>{finalTotal}</div>
                                </CTableDataCell>
                            </CTableRow>
                            <CTableRow style={{ backgroundColor: "#0B5345", color: "white" }}>
                                <CTableDataCell colSpan={4}>
                                    <h5>TERMS AND CONDITIONS</h5>
                                </CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableDataCell colSpan={4}>
                                    <div>Fee once paid is not refundable, Non transferable & no package extension, lapsed sessions has to be adjusted within the expiry date. Instructors & timings are subject to change. All packages would be on hourly basis in a day. If a person wishes to workout more than an hour in a day, kindly upgrade your package accordingly. follow guidelines for better result</div>
                                </CTableDataCell>
                            </CTableRow>

                            <CTableRow>
                                <CTableDataCell colSpan={4}>
                                    <div style={{ fontWeight: 'bold' }}>Address: Shop 24/25, 2nd Floor, V Mall, Thakur Complex, Kandivali East, Mumbai 400 101. India.</div>
                                    <label style={{ fontWeight: 'bold' }}>Email: info@yogpowerint.com</label>
                                    <label style={{ fontWeight: 'bold', marginLeft: '10px' }}>Phone: +91 9819 1232 91</label>
                                    <div style={{ fontWeight: 'bold' }}>Website: https://yogpowerint.com</div>
                                </CTableDataCell>
                            </CTableRow>
                        </CTableBody>
                    </CTable>
                </CModalBody>
                <CModalFooter>
                    <CButton color="primary" onClick={handlePrint}>Print</CButton>
                </CModalFooter>
            </CModal>

        </>
    )
}

export default MakeInvoice
