import { cilInfo } from "@coreui/icons";
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CFormInput,
    CFormSelect,
    CInputGroup,
    CRow,
} from "@coreui/react";
import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";

import DataTable from "src/components/DataTable";

const StockReport = () => {
    const [action, setAction] = useState(false)


    const header = [

        /* 
        value: keyword for normal value passing
        btn: keyword for button
        btn1 to btn4: keyword for component passing
        lebel: keyword for anchor tag
        Note: please don't pass empty values or perameters
        */

        { heading: 'Sr. No', value: 'id' },
        { heading: 'Name', value: 'service_name' },
        { heading: 'Mobile', value: 'date_time' },
        { heading: 'E-mail Id', value: 'member_name' },
        { heading: 'Address', value: 'mobile' },
        { heading: 'Category', value: 'service_name' },
        { heading: 'Company Name', value: 'variation_name' },
        { heading: 'Expiry Date', value: 'expiry_date' },
        { heading: 'Info', iconBtn: cilInfo },
        { heading: 'Renew', btn: 'renew' },
        { heading: 'Action', com: (<> <FaBeer size='20px' /></>) },
    ]


    const Users = [
        {
            id: 1,
            date_time: "25-08-2022 03:00 PM",
            member_name: "Nayana Nagrecha",
            mobile: "9136123476",
            service_name: "Yoga",
            variation_name: "3 Months",
            expiry_date: "31-08-2022",
            sales_rep: "Sejal Ganatra",
            pt_trainer: "-",
            trainer: "Prabha Yadav",
            staff_name: "Sejal Ganatra",
        },
        {
            id: 2,
            date_time: "25-08-2022 03:00 PM",
            member_name: "Nayana Nagrecha",
            mobile: "9136123476",
            service_name: "Yoga",
            variation_name: "3 Months",
            expiry_date: "31-08-2022",
            sales_rep: "Sejal Ganatra",
            pt_trainer: "-",
            trainer: "Prabha Yadav",
            staff_name: "Sejal Ganatra",
        },
    ];

    return (
        <CCard className="mb-3 border-success">
            <CCardHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                <CCardTitle>Stock Listing</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CRow className='d-flex mb-2'>
                    <CCol lg={6} sm={6} className='mb-2'>
                        <CInputGroup style={{ height: "38px" }}>
                            <CFormSelect
                                id="inputGroupSelect04"
                                aria-label="Example select with button addon"
                            >
                                <option>Name</option>
                                <option value="1">Mobile</option>
                                <option value="2">Email</option>
                                <option value="3">Company Name</option>
                            </CFormSelect>
                            <CFormInput
                                placeholder="Search"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                            />
                            <CButton type="button" color="primary">
                                Search
                            </CButton>
                        </CInputGroup>
                    </CCol>
                </CRow>
                <DataTable className='mt-2' heading={header} data={Users} />
                <DataTable className='mt-2' heading={header} data={Users} />
            </CCardBody>
        </CCard>
    );
};

export default StockPu;