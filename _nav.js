import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilBook,
  cilCalculator,
  cilCash,
  cilCenterFocus,
  cilChartPie,
  cilChatBubble,
  cilContact,
  cilCursor,
  cilDescription,
  cilDrop,
  cilFolderOpen,
  cilGraph,
  cilGroup,
  cilNotes,
  cilPencil,
  cilPeople,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilUser,
  cilWeightlifitng,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  {
    component: CNavGroup,
    name: 'Employee',
    color: '#fff',
    to: '/employee',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Employee Dashboard',
        to: '/emp-dashboard',
      },
      {
        component: CNavItem,
        name: 'Sales Target',
        to: '/employee/sales-target',
      },
      {
        component: CNavGroup,
        name: 'Daily Task',
        to: '/base',
        items: [
          {
            component: CNavItem,
            name: 'Member Calls',
            to: '/clients/service-call',
          },
          {
            component: CNavItem,
            name: 'Sales Call',
            to: '/base/breadcrumbs',
          },
          {
            component: CNavItem,
            name: 'Calls Report',
            to: '/base/cards',
          },
          {
            component: CNavItem,
            name: 'All Rights',
            to: '/employee/all-right',
          },
        ],
      },
      {
        component: CNavItem,
        name: 'Employee Proformance',
        to: '/employee/pt',
      },

    ],
  },
  {
    component: CNavGroup,
    name: 'Trainer',
    to: '/base',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Trainer Dashboard',
        to: '/trainer-dashboard',
      },
      {
        component: CNavItem,
        name: 'Live Class',
        to: '/base/pt',
        badge: {
          color: 'danger',
          text: 'LIVE',
        },
      },
      {
        component: CNavItem,
        name: 'All Batch',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'CRM',
  },
  {
    component: CNavGroup,
    name: 'Leads',
    to: '/leads',
    icon: <CIcon icon={cilFolderOpen} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Enquires',
        to: '/leads/all-enquires',
      },
      {
        component: CNavItem,
        name: 'Appointment',
        to: '/leads/enquires-appointment',
      },
      {
        component: CNavItem,
        name: 'Trial Updated',
        to: '/leads/trial-updated',
      },
      {
        component: CNavItem,
        name: 'Prospects',
        to: '/leads/followups-scheduling',
      },
      {
        component: CNavItem,
        name: 'Calls Report',
        to: '/leads/followups-call-report',
      },
      {
        component: CNavItem,
        name: 'Cold Enquires',
        to: '/leads/cold-enquires',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Client Management',
    to: '/clients',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Clients',
        to: '/clients/client-management/all-clients',
      },
      {
        component: CNavItem,
        name: 'Active Client',
        to: '/clients/client-management/active-clients',
      },
      {
        component: CNavItem,
        name: 'Renewals Client',
        to: '/clients/client-management/renewals-clients',
      },
      {
        component: CNavItem,
        name: 'Renewed Clients',
        to: '/clients/client-management/renewed-clients',
      },
      {
        component: CNavItem,
        name: 'Left Clients',
        to: '/clients/client-management/left-clients',
      },
      {
        component: CNavItem,
        name: 'Multi Service Clients',
        to: '/client-management/multi-clients',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Marketing',
    to: '/Marketing',
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'E-Mail Marketing',
        to: '/Marketing/email-marketing',
      },
      {
        component: CNavItem,
        name: 'SMS Marketing',
        to: '/Marketing/sms-marketing',
      },
      {
        component: CNavItem,
        name: 'Push Marketing',
        to: '/Marketing/push-marketing',
      },
      {
        component: CNavItem,
        name: 'Offers Master',
        to: '/Marketing/offers-master',
      },
      {
        component: CNavItem,
        name: 'Bulk Mailer Data',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Bulk Calling Data',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Data From App',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Fitness',
    to: '/base',
    icon: <CIcon icon={cilWeightlifitng} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'ERP',
  },
  {
    component: CNavGroup,
    name: 'Task',
    to: '/base',
    icon: <CIcon icon={cilGraph} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Inventory',
    to: '/inventory',
    icon: <CIcon icon={cilGraph} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Call List',
        to: '/inventory/all-call-list',
      },
      {
        component: CNavItem,
        name: 'Stock Listing',
        to: '/inventory/stock-listing',
      },
      {
        component: CNavItem,
        name: 'Stock Report',
        to: '/inventory/stock-report',
      },
      {
        component: CNavItem,
        name: 'Stock Classification',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Purchases',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Recepits',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Stock Assigning',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Stock Alert',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Finance',
    to: '/finance',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: 'Invoices',
        to: '/inventory',
        items: [
          {
            component: CNavItem,
            name: 'Total Invoices',
            to: '/finance/total-invoice',
          },
          {
            component: CNavItem,
            name: 'Paid Invoices',
            to: '/finance/paid-invoice',
          },
          {
            component: CNavItem,
            name: 'Cancelled Invioces',
            to: '/finance/cancel-invoice',
          },
          {
            component: CNavItem,
            name: 'Receipts',
            to: '/base/cards',
          },
          {
            component: CNavItem,
            name: 'Written Off Invoices',
            to: '/base/cards',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Revenues',
        to: '/inventory',
        items: [
          {
            component: CNavItem,
            name: 'Revenue Details',
            to: '/finance/revenue-details',
          },
          {
            component: CNavItem,
            name: 'Services wise Revenue',
            to: '/finance/service-revenue',
          },
          {
            component: CNavItem,
            name: 'Renewls Revenue',
            to: '/finance/revenue-vs-utilization',
          },
          {
            component: CNavItem,
            name: 'New Client Revenue',
            to: '/finance/new-client-revenue',
          },
          {
            component: CNavItem,
            name: 'Lead Report',
            to: '/finance/lead-report',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Payments Report',
        to: '/inventory',
        items: [
          {
            component: CNavItem,
            name: 'Collection Report',
            to: '/base/cards',
          },
          {
            component: CNavItem,
            name: 'Payment Mode',
            to: '/base/cards',
          },
          {
            component: CNavItem,
            name: 'Refund Report',
            to: '/base/cards',
          },
          {
            component: CNavItem,
            name: 'Subscription Balance Payment',
            to: '/base/cards',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Center Expenses',
        to: '/inventory',
        items: [
          {
            component: CNavItem,
            name: 'Center Budget Summary',
            to: '/base/cards',
          },
          {
            component: CNavItem,
            name: 'Consolidated Expense ',
            to: '/base/cards',
          },
          {
            component: CNavItem,
            name: 'Approval Status',
            to: '/base/cards',
          },
          {
            component: CNavItem,
            name: 'Reimbursement ',
            to: '/base/cards',
          },
        ],
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'HR Management',
    to: '/hr',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Recuritment',
        to:'/hr/emp-recruitment'
      },
      {
        component: CNavItem,
        name: 'All Emp Profile',
        to: '/hr/all-emp',
      },
      {
        component: CNavItem,
        name: 'Biometric Staff',
        to: '/hr/biometric-emp',
      },
      {
        component: CNavItem,
        name: 'EMP Attedance Register',
        to: '/hr/attendance-register',
      },
      {
        component: CNavItem,
        name: 'EMP Daily Check Ins',
        to: '/hr/2',
      },
      {
        component: CNavItem,
        name: 'EMP Joining',
        to: '/hr/3',
      },
      {
        component: CNavItem,
        name: 'EMP of Documents',
        to: '/hr/4',
      },
      {
        component: CNavItem,
        name: 'Job Profile',
        to: '/hr/5',
      },
      {
        component: CNavItem,
        name: 'Hr Policy',
        to: '/hr/',
      },
      {
        component: CNavItem,
        name: 'Leave Setup',
        to: '/hr/',
      },
      {
        component: CNavItem,
        name: 'Payrol Setup',
        to: '/hr/emp-payrollSetup',
      },
      {
        component: CNavItem,
        name: 'Salary Sheet',
        to: '/hr/holiday-list',
      },
       {
        component: CNavItem,
        name: 'EMP Salary Slip',
        to: '/hr/',
      },
      {
        component: CNavItem,
        name: 'Trainery Salary Slip',
        to: '/hr/',
      },
      {
        component: CNavItem,
        name: 'All classes Report',
        to: '/base/cards',
      },
     
      {
        component: CNavItem,
        name: 'Shift Timing Managment ',
        to: '/hr/emp-document',
      },
   
      {
        component: CNavItem,
        name: 'All-Rights',
        to: '/hr/attendance-report',
      },
      {
        component: CNavItem,
        name: 'Emp Performance',
        to: '/hr/holiday-list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Courses',
    to: '/base',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Masters',
  },
  {
    component: CNavItem,
    name: 'Center Setup',
    to: '/master/center-setup',
    icon: <CIcon icon={cilCenterFocus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Support',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Marketing',
    to: '/master/marketing',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Lead Sources Master',
        to: '/master/marketing/leadSourceMaster',
      },
      {
        component: CNavItem,
        name: 'Sms, E-mail, Template Master',
        to: '/master/marketing/emailsmsTemplate',
      },
      {
        component: CNavItem,
        name: 'Gallery Master',
        to: '/master/marketing/galleryMaster',
      },
      {
        component: CNavItem,
        name: 'Automated Communication To staff  Master',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Automated Communication To Member  Master',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Clients',
    to: '/master/clients',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Client Transfer Master',
        to: '/master/clients/client-transfer',
      },
      {
        component: CNavItem,
        name: 'Appoinment Page Master',
        to: '/master/clients/appointment-page',
      },
      {
        component: CNavItem,
        name: 'Support & Rights Master',
        to: '/master/clients/support-rights',
      },
      {
        component: CNavItem,
        name: 'Call Setup Master',
        to: '/master/clients/call-setup',
      },
      {
        component: CNavItem,
        name: 'Extension',
        to: '/master/clients/extension',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Fitness',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Body Measurement ',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Fitness Goal',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Fitness Workout',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'HR',
    to: '/master/hr',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Employee Designation',
        to: '/master/hr/designation',
      },
      {
        component: CNavItem,
        name: 'Holidays Master',
        to: '/master/hr/holiday',
      },
      {
        component: CNavItem,
        name: 'Payroll Master',
        to: '/master/hr/ho',
      },
      {
        component: CNavItem,
        name: 'Job Profile  JD Master',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'EMP Documents Check List ',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'HR Policy',
        to: '/master/hr/hrPolicy',
      },
      {
        component: CNavItem,
        name: 'daily Task ( note paid )',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Employee Profile  ',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'All Access Rights Master  ',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Shift Master',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Bio matric',
        to: '/base/cards',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Inverntory',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Produst Listing Master',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'All Product setting Master',
        to: '/base/breadcrumbs',
      },

    ],
  },
  {
    component: CNavGroup,
    name: 'Finance',
    to: '/master/finance',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Expness Category',
        to: '/master/finance/expness',
      },
      {
        component: CNavItem,
        name: 'Budgeting',
        to: '/master/finance/budgeting',
      },
      {
        component: CNavItem,
        name: 'Invoice Setup Master',
        to: '/master/finance/invoice',
      },
      {
        component: CNavItem,
        name: 'Tax Setup Master',
        to: '/master/finance/tax',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Intergartions',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Center Partners',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batches',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'PT',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Classes',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavItem,
    name: 'Colors',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: 'Base',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'Tables',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
