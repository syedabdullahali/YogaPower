import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilAddressBook, cilCode, cilLockLocked, cilUser } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
const url = 'https://yog-seven.vercel.app'
const url2 = 'https://yog-seven.vercel.app'

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [dashboardAccess, setDashboardAccess] = useState("")
  const navigate = useNavigate()

  function saveData() {
    let data = { username, email, password, dashboardAccess }
    // console.warn(data);
    fetch(`${url}/signup/create`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((resp) => {
      // console.warn("resp",resp);;
      resp.json().then(() => {
        navigate('/login')
      })
    })
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={saveData}>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autoComplete="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      placeholder="Repeat password"
                      autoComplete="new-password"

                    />
                  </CInputGroup>
                  <CInputGroup className="mb-2">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormSelect
                      placeholder="Select"
                      autoComplete="new-password"
                      value={dashboardAccess}
                      onChange={(e) => setDashboardAccess(e.target.value)}
                    >
                      <option>Admin</option>
                      <option>Partner</option>
                      <option>Trainer</option>
                      <option>Employee</option>
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-2">
                    <CInputGroupText>
                      <CIcon icon={cilAddressBook} />
                    </CInputGroupText>
                    <CFormInput
                      type="text"
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      placeholder="Location"
                      autoComplete="new-password"

                    />
                  </CInputGroup>
                  <CInputGroup className="mb-2">
                    <CInputGroupText>
                      <CIcon icon={cilCode} />
                    </CInputGroupText>
                    <CFormInput
                      type="text"
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      placeholder="Center Code"
                      autoComplete="new-password"

                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" type='submit' >Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
