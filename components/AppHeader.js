import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CInputGroup,
  CFormInput,
  CButton,
  CAvatar,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilBasket,
  cilCalendar,
  cilCalendarCheck,
  cilClock,
  cilFingerprint,
  cilLinkAlt,
  cilMenu,
} from '@coreui/icons'
import { AppBreadcrumb } from './index'
import { AppHeaderDropdown, AppHeaderDropdownForm } from './header/index'
import logo from 'src/assets/images/avatars/YPI-Logo-2022.png'
import { AppHeaderDropdownBook, AppHeaderDropdownCheckIn, AppHeaderDropdownLink } from './header/AppHeaderDropdown'
import { Link } from 'react-router-dom'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CAvatar src={logo} style={{ width: '170px' }} />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CInputGroup className="ml-3">
              <CFormInput
                placeholder="Search.."
                aria-label="Recipients username"
                aria-describedby="button-addon2"
              />
              <CButton type="button" color="primary" id="button-addon2">
                Search
              </CButton>
            </CInputGroup>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href='#'>
              <AppHeaderDropdownForm />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <AppHeaderDropdownBook />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <Link style={{ textDecoration: 'none' }} to="/forms/appointment">
                <CIcon icon={cilCalendarCheck} size="lg" />
              </Link>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <AppHeaderDropdownCheckIn />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBasket} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <AppHeaderDropdownLink />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
