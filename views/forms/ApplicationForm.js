import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, 
    CForm, CFormInput, CFormSelect, CFormSwitch, CFormTextarea, CImage, CRow} from '@coreui/react'
import React from 'react'
import ProfileIcon from 'src/assets/images/avatars/profile_icon.png'
import { useState } from 'react'

const ApplicationForm = ({shouldEdit,data,editEnquiry}) => {

const [fullName,setFullName] = useState('')
const [contactNumber,setContactNumber] = useState('')
const [emailAddress,setEmailAddress] = useState('')
const [Gender, setGender] = useState('')
const [address,setAddress] = useState('')
const [age,setAge] = useState('')
const [resume, setResume] = useState(null)
const [jobDesignation,setJobDesignation] = useState('')
const [department,setDepartment] = useState('')
const [expSalary,setExpSalary] = useState('')
const [empCategory,setEmpCategory] = useState('')
const [payoutType,setPayouttype] = useState('')
const [Grade,setGrade] = useState('')


    const  formRenderParentObjeact = {  
            minHeight:'100%', 
            width: '98vw',
            background:'rgb(255,255,255,0.5)',
            position:'absolute',
            top:'0',
            left:'0'
            ,zIndex:'10000',
            display:'flex',
            justifyContent:'center',   
    }
    

    const renderOverTheCurrentPage = shouldEdit ?formRenderParentObjeact:{display:'none'}

    const resumeChangeHandler = (e)=>{
        
        setResume(e.target.files[0])
        
    }
     
    const toggaleModel=(e)=>{
        console.log(e)
        if(e.target.className==='card Parent'){
            editEnquiry()
    }
}

    

    

    return (
    <CCard style={renderOverTheCurrentPage} className='Parent' onClick={toggaleModel}>
        <CCard style={ {width:'80%',margin:'10% auto'}}>
            <CCardHeader>
                <CCardTitle>Recruitment Application</CCardTitle>
            </CCardHeader>
            <CCardBody>
                <CForm>
                    <CRow>
                        <CCol lg={3} sm={6} className='mt-2 mb-1' >
                            <CImage className="mb-1" style={{ borderRadius: "100px" }} width={'200px'} src={ProfileIcon} />
                        </CCol>
                        <CCol lg={8} sm={6} className='mt-5'>
                            <CRow>
                                <CButton className="me-3 ms-3" style={{ margin: '5px', width: '200px' }}>Upload Image</CButton>
                            </CRow>
                            <CRow>
                                <CButton className="me-3 ms-3" style={{ margin: '5px', width: '200px' }}>Capture Image</CButton>
                            </CRow>
                        </CCol>
                        <CCol xs={6}>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                label="Full name"
                                placeholder="Enter Name"
                                value={fullName}
                                onChange={(e)=>setFullName(e.target.value)}
                            />
                        </CCol>
                        <CCol xs={6}>
                            <CFormInput
                                className="mb-1"
                                type="number"
                                id="exampleFormControlInput1"
                                label="Contact Number"
                                placeholder="Enter Contact Number"
                                value={contactNumber}
                                onChange={(e)=>setContactNumber(e.target.value)}
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="email"
                                id="exampleFormControlInput1"
                                label="Email address"
                                placeholder="name@example.com"
                                text="Must be 8-20 characters long."
                                aria-describedby="exampleFormControlInputHelpInline"
                                value={emailAddress}
                                onChange={(e)=>setEmailAddress(e.target.value)}
                            />
                        </CCol>
                        <CCol>
                             <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Currency"
                                        value={Gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        label="Gander"
                                    >
                                        <option>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                </CFormSelect>
                        </CCol>
                    </CRow>
                    <CCol>
                        <CFormTextarea
                            id="exampleFormControlTextarea1"
                            label="Address"
                            rows="2"
                            text="Must be 8-20 words long."
                            value={address}
                            onChange={(e)=>setAddress(e.target.value)}
                        ></CFormTextarea>
                    </CCol>
                    <CRow>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="number"
                                id="exampleFormControlInput1"
                                label="Age"
                                placeholder="Enter Your Age"
                                value={age}
                                onChange={(e)=>setAge(e.target.value)}
                            />
                        </CCol>
                        <CCol lg={6} md={6} sm={12}>
                         <CFormInput
                                        className="mb-1"
                                        type="file"
                                        accept='pdf/*'
                                        onChange={(e) => setResume(e.target.files[0])}
                                        id="exampleFormControlInput1"
                                        label="Upload Resume"
                                        placeholder="Enter Upload Resume"
                            />
                     </CCol>
                    </CRow>

                    <CRow>

                        <CCol xs={4}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Job Designation"
                                label="Job Designation"
                                value={jobDesignation}
                                onChange={(e)=>setJobDesignation(e.target.value)}
                                options={[
                                    "Select Job Designation",
                                    { label: "+91", value: "1" },
                                    { label: "Two", value: "2" },
                                    { label: "Three", value: "3" },
                                ]}
                            />
                        </CCol>
                        <CCol xs={4}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Job Designation"
                                label="Department"
                                value={department}
                                onChange={(e)=>setDepartment(e.target.value)}
                                options={[
                                    "Select Department",
                                    { label: "+91", value: "1" },
                                    { label: "Two", value: "2" },
                                    { label: "Three", value: "3" },
                                ]}
                            />
                        </CCol>
                        <CCol xs={4}>
                            <CFormInput
                                className="mb-1"
                                type="number"
                                id="exampleFormControlInput1"
                                label="Exp Salary"
                                placeholder="Enter Exp Salary"
                                value={expSalary}
                                onChange={(e)=>setExpSalary(e.target.value)}
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Employee Category"
                                label="Employee Category"
                                value={empCategory}
                                onChange={(e)=> setEmpCategory(e.target.value)}
                                options={[
                                    "Select Employee Category",
                                    { label: "Employee", value: "1" },
                                    { label: "Consultant", value: "2" },
                                ]}
                            />
                        </CCol>
                        <CCol>

                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Payout Type"
                                label="Source"
                                options={[
                                    "Select Payout Type",
                                    { label: "Employee", value: "1" },
                                    { label: "Consultant", value: "2" },
                                ]}
                                value={payoutType}
                                onClick={(e)=>setPayouttype(e.target.value)}
                            />
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol xs={3}>
                            <CFormSelect
                                className="mb-1"
                                aria-label="Select Grade"
                                label="Grade"
                                options={[
                                    "Select Grade",
                                    { label: "Employee", value: "1" },
                                    { label: "Consultant", value: "2" },
                                ]}
                            />
                        </CCol>
                        <CCol>
                            <CFormInput
                                className="mb-1"
                                type="text"
                                id="exampleFormControlInput1"
                                label="Comments"
                                placeholder="Add Comments"
                            />
                        </CCol>
                    </CRow>

                    <CButton className="mt-2">Save</CButton>
                </CForm>
            </CCardBody>
        </CCard>
    </CCard>
    )
}

export default ApplicationForm
