import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const EmployeeDashboard = React.lazy(() => import('./views/dashboard/EmployeeDashboard'))
const TrainerDashboard = React.lazy(() => import('./views/dashboard/TrainerDashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))
//Empolyee
const PTTarget = React.lazy(() => import('./views/dashboard/PTTarget'))
const SalesTarget = React.lazy(() => import('./views/dashboard/SalesTarget'))
const CorporateTarget = React.lazy(() => import('./views/dashboard/CorporateTarget'))
const AllRight = React.lazy(() => import('./views/Master/AllRight'))
//Leads
const AllEnquires = React.lazy(() => import('./views/leads/AllEnquires'))
const EnquireAppoitment = React.lazy(() => import('./views/leads/EnquireAppointment'))
const TrialUpdated = React.lazy(() => import('./views/leads/TrialEnquires'))
const FollowupScheduling = React.lazy(() => import('./views/leads/FollowupScheduling'))
const FollowupCallReport = React.lazy(() => import('./views/leads/FollowupsCallReport'))
const ColdEnquires = React.lazy(() => import('./views/leads/ColdEnquires'))

//Clients
const AllClients = React.lazy(() => import('./views/clients/AllClients'))
const ActiveClients = React.lazy(() => import('./views/clients/ActiveClients'))
const RenewalsClients = React.lazy(() => import('./views/clients/Renewals'))
const RenewedClients = React.lazy(() => import('./views/clients/Renewed'))
const LeftClients = React.lazy(() => import('./views/clients/LeftClients'))
const ServiceCall = React.lazy(() => import('./views/clients/serviceCall/ServiceCall'))
const AllService = React.lazy(() => import('./views/clients/allService/AllService'))
const MemberDetails = React.lazy(() => import('./views/clients/MemberDetails/MemberDetails'))

//Marketing
const EmailMarketing = React.lazy(() => import('./views/marketing/EmailMarketing'))
const SMSMarketing = React.lazy(() => import('./views/marketing/SMSMarketing'))
const PushMarketing = React.lazy(() => import('./views/marketing/PushMarketing'))
const OfferMaster = React.lazy(() => import('./views/marketing/OfferMarketing'))

// Inventory
const AllCallList = React.lazy(() => import('./views/Inventory/AllCallList'))
const ImpCallList = React.lazy(() => import('./views/Inventory/ImpCallList'))
const AllSuppilerList = React.lazy(() => import('./views/Inventory/AllSuppilerList'))
const GuestList = React.lazy(() => import('./views/Inventory/GuestList'))
const StockListing = React.lazy(() => import('./views/Inventory/StockListing'))
const StockReport = React.lazy(() => import('./views/Inventory/StockReport'))

//finance
const TotalInvoices = React.lazy(() => import('./views/finance/TotalInvoice'))
const PaidInvoices = React.lazy(() => import('./views/finance/PaidInvoice'))
const CancelInvoices = React.lazy(() => import('./views/finance/CancelInvoice'))
const RevenueDetails = React.lazy(() => import('./views/finance/RevenueDetails'))
const ServiceRevenue = React.lazy(()=>import('./views/finance/ServiceRevenue'))
const RevenueVSUtilization = React.lazy(()=>import('./views/finance/RevenueVSUtilization'))
const NewClientRevenue = React.lazy(()=>import('./views/finance/NewClientRevenue'))
const LeadReport = React.lazy(()=>import('./views/finance/LeadReport'))
// Hr
const AllEmpProfile = React.lazy(() => import('./views/hr/AllEmpProfile'))
const CreateEmployee = React.lazy(() => import('./views/hr/EmpRecruitment'))
const AttendanceRegister = React.lazy(() => import('./views/hr/AttendanceRegister'))
const AttendanceReport = React.lazy(() => import('./views/hr/AttendanceReport'))
const BiometricEmp = React.lazy(() => import('./views/hr/BiometricEmp'))
const EMPPayrolSetup = React.lazy(() => import('./views/hr/EMPPayrolSetup'))
const EmpDocuments = React.lazy(() => import('./views/hr/EmpDocuments'))
const HolidaysList = React.lazy(() => import('./views/hr/HolidaysList'))
const StaffCheckIns = React.lazy(() => import('./views/hr/StaffCheckIns'))

//Master
const CenterSetup = React.lazy(() => import('./views/Master/centerSetup/CenterSetup'))
const LogoSetup = React.lazy(() => import('./views/Master/centerSetup/LogoSetup'))
const CompanyProfile = React.lazy(() => import('./views/Master/centerSetup/CompanyProfile'))
const ServiceMaster = React.lazy(() => import('./views/Master/centerSetup/ServiceMaster'))
const PackageMaster = React.lazy(() => import('./views/Master/centerSetup/PackageMaster'))
const BatchMaster = React.lazy(() => import('./views/Master/centerSetup/BatchMaster'))
const FormMaster = React.lazy(() => import('./views/Master/centerSetup/FormMaster'))
const Designation = React.lazy(() => import('./views/Master/HRMaster/Designation'))
const HolidayListMaster = React.lazy(() => import('./views/Master/HRMaster/HolidaysListMaster'))
const HRPolicyMaster = React.lazy(() => import('./views/Master/HRMaster/HRPolicy'))
const EmailSMSMaster = React.lazy(() => import('./views/Master/marketing/EmailSmsMaster'))
const GalleryMaster = React.lazy(() => import('./views/Master/marketing/GalleryMaster'))
const LeadSourceMaster = React.lazy(() => import('./views/Master/marketing/LeadSourceMaster'))
const BudgetingMaster = React.lazy(() => import('./views/Master/finance/BudgetingMaster'))
const ExpressCategoryMaster = React.lazy(() => import('./views/Master/finance/ExpressCategoryMaster'))
const InvoiceMaster = React.lazy(() => import('./views/Master/finance/InvoiceMaster'))
const TaxSetupMaster = React.lazy(() => import('./views/Master/finance/TaxSetupMaster'))
const ClientTransferMaster = React.lazy(() => import('./views/Master/client/ClientTransferMaster'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() =>
  import('./views/base/list-groups/ListGroups')
)
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() =>
  import('./views/base/paginations/Paginations')
)
const Placeholders = React.lazy(() =>
  import('./views/base/placeholders/Placeholders')
)
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() =>
  import('./views/buttons/button-groups/ButtonGroups')
)
const Dropdowns = React.lazy(() =>
  import('./views/buttons/dropdowns/Dropdowns')
)

//Forms
const EnquiryForm = React.lazy(() => import('./views/forms/EnquiryForm'))
const MemberForm = React.lazy(() => import('./views/forms/MemberForm'))
const StaffForm = React.lazy(() => import('./views/forms/Recruitment'))
const InvoiceForm = React.lazy(() => import('./components/MakeInvoice'))
const LiveClass = React.lazy(() => import('./views/forms/LiveClass'))
const OfflineClass = React.lazy(() => import('./views/forms/OfflineClass'))
const TTC = React.lazy(() => import('./views/forms/TTC'))
const EventCom = React.lazy(() => import('./views/forms/Event'))
const PTClass = React.lazy(() => import('./views/forms/PTClass'))
const ClientCheckin = React.lazy(() => import('./views/forms/ClientCheckin'))
const StaffCheckIn = React.lazy(() => import('./views/forms/StaffCheckIn'))
const Appointment = React.lazy(() => import('./views/forms/Appointment'))
const ChecksRadios = React.lazy(() =>
  import('./views/forms/checks-radios/ChecksRadios')
)
const FloatingLabels = React.lazy(() =>
  import('./views/forms/floating-labels/FloatingLabels')
)
const FormControl = React.lazy(() =>
  import('./views/forms/form-control/FormControl')
)
const InputGroup = React.lazy(() =>
  import('./views/forms/input-group/InputGroup')
)
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() =>
  import('./views/forms/validation/Validation')
)

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() =>
  import('./views/icons/coreui-icons/CoreUIIcons')
)
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Login Page' },
  { path: '/login', name: 'Login', element: Login },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  {
    path: '/emp-dashboard',
    name: 'Employee Dashboard',
    element: EmployeeDashboard,
  },
  {
    path: '/trainer-dashboard',
    name: 'Trainer Dashboard',
    element: TrainerDashboard,
  },
  //Employee

  { path: '/employee', name: 'Employee', element: Tables, exact: true },
  { path: '/employee/pt', name: 'PT Target', element: PTTarget },
  { path: '/employee/all-right', name: 'All Right', element: AllRight },
  {
    path: '/employee/sales-target',
    name: 'Sales Target',
    element: SalesTarget,
  },
  {
    path: '/employee/corporate-target',
    name: 'Corporate Target',
    element: CorporateTarget,
  },

  //Leads
  { path: '/leads', name: 'Leads', element: AllEnquires, exact: true },
  { path: '/leads/all-enquires', name: 'All Enquires', element: AllEnquires },
  { path: '/leads/enquires-appointment', name: 'Enquiry Appointment', element: EnquireAppoitment },
  { path: '/leads/trial-updated', name: 'Trial Updated', element: TrialUpdated },
  { path: '/leads/followups-scheduling', name: 'Prospect', element: FollowupScheduling },
  { path: '/leads/followups-call-report', name: 'Calls Report', element: FollowupCallReport },
  { path: '/leads/cold-enquires', name: 'Cold Enquires', element: ColdEnquires },

  //Clients
  { path: '/clients', name: 'Clients', element: ServiceCall, exact: true },
  { path: '/clients/client-management', name: 'Client Management', element: AllClients, exact: true },
  { path: '/clients/client-management/active-clients', name: 'Active Clients', element: ActiveClients },
  { path: '/clients/client-management/all-clients', name: 'All Clients', element: AllClients },
  { path: '/clients/client-management/renewals-clients', name: 'Renewals Clients', element: RenewalsClients },
  { path: '/clients/client-management/renewed-clients', name: 'Renewed Clients', element: RenewedClients },
  { path: '/clients/client-management/left-clients', name: 'Left Clients', element: LeftClients },
  { path: '/clients/service-call', name: 'Service Calls', element: ServiceCall },
  { path: '/clients/all-service', name: 'All Service', element: AllService },
  { path: '/clients/member-details/:id/:i', name: 'Member Details', element: MemberDetails },


  //Marketing
  { path: '/Marketing', name: 'Marketing', element: EmailMarketing, exact: true },
  { path: '/Marketing/email-marketing', name: 'Email Marketing', element: EmailMarketing },
  { path: '/Marketing/sms-marketing', name: 'SMS Marketing', element: SMSMarketing },
  { path: '/Marketing/push-marketing', name: 'App Notification', element: PushMarketing },
  { path: '/Marketing/offers-master', name: 'Offer Master', element: OfferMaster },

  //Inventory
  { path: '/inventory', name: 'Inventory', element: ImpCallList, exact: true },
  { path: '/inventory/all-call-list', name: 'All Call List', element: AllCallList },
  { path: '/inventory/imp-call', name: 'Imp Call List', element: ImpCallList },
  { path: '/inventory/all-suppiler', name: 'All Suppiler List', element: AllSuppilerList },
  { path: '/inventory/guest-list', name: 'Guest List', element: GuestList },
  { path: '/inventory/stock-listing', name: 'Stock Listing', element: StockListing },
  { path: '/inventory/stock-report', name: 'Stock Report', element: StockReport },

  //Finance
  { path: '/finance', name: 'Finance', element: TotalInvoices, exact: true },
  { path: '/finance/total-invoice', name: 'Total Invoice', element: TotalInvoices },
  { path: '/finance/paid-invoice', name: 'Paid Invoice', element: PaidInvoices },
  { path: '/finance/cancel-invoice', name: 'cancel Invoice', element: CancelInvoices },
  { path: '/finance/revenue-details', name: 'Revenue details', element: RevenueDetails },
  { path:'/finance/service-revenue',name:'Service Revenue',element:ServiceRevenue},
  { path:'/finance/revenue-vs-utilization',name:'Service Revenue',element:RevenueVSUtilization},
  { path:'/finance/new-client-revenue',name:'New Client Revenue',element:NewClientRevenue},
  { path:'/finance/lead-report',name:'Lead Report',element:LeadReport},


  

  //HR
  { path: '/hr', name: 'HR Management', element: AllEmpProfile, exact: true },
  { path: '/hr/all-emp', name: 'All Employee Profile', element: AllEmpProfile, exact: true },
  { path: '/hr/emp-recruitment', name: 'Recruitment', element: CreateEmployee, exact: true },
  { path: '/hr/attendance-register', name: 'Attendance Register', element: AttendanceRegister, exact: true },
  { path: '/hr/attendance-report', name: 'Attendance Report', element: AttendanceReport, exact: true },
  { path: '/hr/biometric-emp', name: 'Biometric Staff', element: BiometricEmp, exact: true },
  { path: '/hr/emp-document', name: 'Employee Document', element: EmpDocuments, exact: true },
  { path: '/hr/emp-payrollSetup', name: 'Employee Payroll Setup', element: EMPPayrolSetup, exact: true },
  { path: '/hr/holiday-list', name: 'Holiday List', element: HolidaysList, exact: true },
  { path: '/hr/staff-checkin', name: 'Staff CheckIn', element: StaffCheckIns, exact: true },

  //Master
  { path: '/master', name: 'Master', element: CenterSetup, exact: true },
  { path: '/master/center-setup', name: 'Center Setup', element: CenterSetup, exact: true },
  { path: '/master/center-setup/company-profile', name: 'Company Profile', element: CompanyProfile, exact: true },
  { path: '/master/center-setup/logo-setup', name: 'Logo Setup', element: LogoSetup, exact: true },
  { path: '/master/center-setup/service-master', name: 'Service Master', element: ServiceMaster, exact: true },
  { path: '/master/center-setup/package-master', name: 'Package Master', element: PackageMaster, exact: true },
  { path: '/master/center-setup/batch-master', name: 'Batch Master', element: BatchMaster, exact: true },
  { path: '/master/center-setup/form-master', name: 'Form Master', element: FormMaster, exact: true },


  { path: '/master/clients', name: 'Marketing Master', element: Designation, exact: true },
  { path: '/master/clients/client-transfer', name: 'Client Tranfer', element: ClientTransferMaster, exact: true },

  { path: '/master/marketing', name: 'Marketing Master', element: Designation, exact: true },
  { path: '/master/marketing/emailsmsTemplate', name: 'Template', element: EmailSMSMaster, exact: true },
  { path: '/master/marketing/galleryMaster', name: 'Gallery Master', element: GalleryMaster, exact: true },
  { path: '/master/marketing/leadSourceMaster', name: 'Lead Source Master', element: LeadSourceMaster, exact: true },

  { path: '/master/hr', name: 'HR Master', element: Designation, exact: true },
  { path: '/master/hr/designation', name: 'Employee Designation', element: Designation, exact: true },
  { path: '/master/hr/holiday', name: 'Holidays List', element: HolidayListMaster, exact: true },
  { path: '/master/hr/hrPolicy', name: 'HR Policy', element: HRPolicyMaster, exact: true },

  { path: '/master/finance', name: 'Finance Master', element: Designation, exact: true },
  { path: '/master/finance/expness', name: 'Express Category', element: ExpressCategoryMaster, exact: true },
  { path: '/master/finance/budgeting', name: 'Budgeting', element: BudgetingMaster, exact: true },
  { path: '/master/finance/invoice', name: 'Invoice', element: InvoiceMaster, exact: true },
  { path: '/master/finance/tax', name: 'Tax', element: TaxSetupMaster, exact: true },

  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  {
    path: '/buttons/button-groups',
    name: 'Button Groups',
    element: ButtonGroups,
  },
  { path: '/charts', name: 'Charts', element: Charts },

  //Form
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/enquiry-form', name: 'Enquiry Form', element: EnquiryForm },
  { path: '/forms/staff-form', name: 'Employee Form', element: StaffForm },
  { path: '/forms/member-form', name: 'Member Form', element: MemberForm },
  { path: '/forms/invoice', name: 'Invoice', element: InvoiceForm },
  { path: '/forms/live-class', name: 'Live Class', element: LiveClass },
  { path: '/forms/offline-class', name: 'Offline Class', element: OfflineClass },
  { path: '/forms/pt-class', name: 'PT Class', element: PTClass },
  { path: '/forms/ttc', name: 'TTC', element: TTC },
  { path: '/forms/event', name: 'Event', element: EventCom },
  { path: '/forms/client-checkin', name: 'Client CheckIn', element: ClientCheckin },
  { path: '/forms/staff-checkin', name: 'Staff CheckIn', element: StaffCheckIn },
  { path: '/forms/appointment', name: 'Appointment', element: Appointment },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  {
    path: '/forms/checks-radios',
    name: 'Checks & Radios',
    element: ChecksRadios,
  },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  {
    path: '/forms/floating-labels',
    name: 'Floating Labels',
    element: FloatingLabels,
  },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  {
    path: '/notifications',
    name: 'Notifications',
    element: Alerts,
    exact: true,
  },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
