import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardText,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  const [click, setClick] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.clear()
  }, [])

  async function login() {
    if (email != '' || password != '') {
      setClick(true)
      setError(null)
      let item = { email, password }

      let result = await fetch("https://yog-seven.vercel.app/login", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
      })
      if (result.status == 400) {
        setClick(false)
        setError('Invalid Details! Please Enter Valid Details')
      }
      result = await result.json()
      localStorage.setItem('user-info', JSON.stringify(result))
      let user = JSON.parse(localStorage.getItem('user-info'))
      console.log(user);
      if (user.user.username != null) {
        navigate('/')
      }
    } else {
      setClick(false)
      setError('Please Enter Details')
    }
  }
  /*  */
  return (
    <div className=" min-vh-100 d-flex flex-row align-items-center" style={{ backgroundColor: '#0B5345' }}>
      <CContainer className="justify-content-center" >
        {error !== null && (
          <CRow className="justify-content-center mb-2">
            <CCol lg={5} md={8}>
              <CCard color='danger'>
                <CCardBody>
                  <CCardText style={{ color: "white" }}>{error}</CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        )}
        <CRow className="justify-content-center">
          <CCol lg={5} md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={login}>
                    <h1>Login</h1>
                    <p>
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type='email'
                        placeholder="Email Address"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        {!click ?
                          <CButton color="primary" type='submit' className="px-4" active>
                            Login
                          </CButton> :
                          <CButton disabled>
                            <CSpinner component="span" size="sm" aria-hidden="true" />
                            {"  "}Please wait...
                          </CButton>}
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0 float-end" onClick={() => navigate(`/forgot`)} >
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
