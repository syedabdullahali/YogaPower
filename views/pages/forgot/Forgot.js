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
import axios from 'axios'

const Forgot = () => {
  const [click1, setClick1] = useState(false)
  const [click, setClick] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.clear()
  }, [])

  function updateUser() {

    if (email != '') {
      setClick(true)
      setError(null)
      let data = { email }
      // console.warn(data);
      axios.post(`https://yoga-power-appv0.herokuapp.com/signup/update/${email}`, data
      )
        .then(() => {
          setClick(false)
          setClick1(true)
        })
        .catch((error) => {
          console.error(error)
        })
    } else {
      setClick(false)
      setError('Please Enter Email')
    }
  }

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
                  {!click1 ?
                    <CForm onSubmit={updateUser}>
                      <h1>Forgot</h1>
                      <p>
                        Forgot to your account password
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

                      <CRow>
                        <CCol xs={6}>
                          {!click ?
                            <CButton color="primary" type='submit' className="px-4" active>
                              Submit
                            </CButton> :
                            <CButton disabled>
                              <CSpinner component="span" size="sm" aria-hidden="true" />
                              {"  "}Please wait...
                            </CButton>}
                        </CCol>
                      </CRow>
                    </CForm> :
                    <CForm onSubmit={updateUser}>
                      <h1>Forgot</h1>
                      <p>
                        Forgot to your account password
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

                      <CRow>
                        <CCol xs={6}>
                          {!click ?
                            <CButton color="primary" type='submit' className="px-4" active>
                              Submit
                            </CButton> :
                            <CButton disabled>
                              <CSpinner component="span" size="sm" aria-hidden="true" />
                              {"  "}Please wait...
                            </CButton>}
                        </CCol>
                      </CRow>
                    </CForm>
                  }
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Forgot
