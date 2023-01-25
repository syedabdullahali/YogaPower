import { cilInfo } from "@coreui/icons";
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
    CFormTextarea,
    CInputGroup,
    CNav,
    CNavItem,
    CNavLink,
    CRow,
    CTabContent,
    CTabPane,
} from "@coreui/react";
import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";

import DataTable from "src/components/DataTable";
import ClothesProduct from "./ClothesProduct";
import AyurvedaMedicine from "./AyurvedaMedicine";
import FitnessProduct from "./FitnessProduct";
import FoodsProduct from "./FoodsProduct";

const StockListing = () => {
    const [action, setAction] = useState(false)
    const [activeKey, setActiveKey] = useState(1)


    const header = [

        /* 
        value: keyword for normal value passing
        btn: keyword for button
        btn1 to btn4: keyword for component passing
        lebel: keyword for anchor tag
        Note: please don't pass empty values or perameters
        */

        { heading: 'Sr. No', value: 'id' },
        { heading: 'Product Code', value: 'service_name' },
        { heading: 'Product Name', value: 'date_time' },
        { heading: 'Brand Name', value: 'member_name' },
        { heading: 'Category', value: 'mobile' },
        { heading: 'Colour', value: 'service_name' },
        { heading: 'Price', value: 'variation_name' },
        { heading: 'Total Stock', value: 'expiry_date' },
        { heading: 'Sold ', value: 'expiry_date' },
        { heading: 'Avl Stock', value: 'expiry_date' },
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
        <>

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
                                        Clothes Product
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink
                                        style={{ color: "white" }}
                                        href="javascript:void(0);"
                                        active={activeKey === 2}
                                        onClick={() => setActiveKey(2)}
                                    >

                                        Ayurveda Medicine
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink
                                        style={{ color: "white" }}
                                        href="javascript:void(0);"
                                        active={activeKey === 3}
                                        onClick={() => setActiveKey(3)}
                                    >
                                        Fitness Product
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink
                                        style={{ color: "white" }}
                                        href="javascript:void(0);"
                                        active={activeKey === 4}
                                        onClick={() => setActiveKey(4)}
                                    >
                                        Foods Product
                                    </CNavLink>
                                </CNavItem>
                            </CNav>
                        </CCardHeader>
                        <CCardBody>
                            <CTabContent>
                                <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                                    <ClothesProduct />
                                </CTabPane>
                                <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 2}>
                                    <AyurvedaMedicine />
                                </CTabPane>
                                <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 3}>
                                    <FitnessProduct />
                                </CTabPane>
                                <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 4}>
                                    <FoodsProduct />
                                </CTabPane>
                            </CTabContent>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    );
};

export default StockListing;