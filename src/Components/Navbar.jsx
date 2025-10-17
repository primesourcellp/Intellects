import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  // Mobile main menus
  const [open, setOpen] = useState(false)
  const [openMobileCompany, setOpenMobileCompany] = useState(false)
  const [openMobileServices, setOpenMobileServices] = useState(false)

  // Mobile submenus
  const [openMobileResources, setOpenMobileResources] = useState(false)
  const [openSoftware, setOpenSoftware] = useState(false)
  const [openDigital, setOpenDigital] = useState(false)
  const [openHR, setOpenHR] = useState(false)

  const desktopLink = (to, label) => (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        `relative px-1 pb-1 text-base font-medium transition-colors hover:text-blue-600 ${
          isActive ? 'text-blue-600' : 'text-slate-700'
        } after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 after:content-[''] hover:after:w-full`
      }
    >
      {label}
    </NavLink>
  )

  const dropdownItem = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `block rounded px-3 py-2 text-sm transition-colors hover:bg-slate-100 ${
          isActive ? 'text-blue-600' : 'text-slate-700'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-bold text-slate-900">Intellects</Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {desktopLink('/', 'Home')}

          {/* Desktop Company dropdown */}
          <div className="group relative">
            <button className="relative flex items-center gap-1 px-1 pb-1 text-base font-medium text-slate-700 transition-colors hover:text-blue-600 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
              Company
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 w-max min-w-[28rem] rounded-md border border-slate-200 bg-white p-4 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="mb-2 block text-sm font-semibold text-slate-900">Company</span>
                  <div className="flex flex-col">
                    {dropdownItem('/methodology', 'Our Development & Methodology')}
                    {dropdownItem('/career', 'Career & Company Culture')}
                    {dropdownItem('/companycontact', 'Contact Us')}
                  </div>
                </div>
                <div>
                  <span className="mb-2 block text-sm font-semibold text-slate-900">Resources</span>
                  <div className="flex flex-col">
                    {dropdownItem('/blog', 'Blog & Insights')}
                    {dropdownItem('/testimonials', 'Client & Testimonials')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Services dropdown */}
          <div className="group relative">
            <button className="relative flex items-center gap-1 px-1 pb-1 text-base font-medium text-slate-700 transition-colors hover:text-blue-600 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
              Services
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="invisible absolute right-0 top-full w-[44rem] rounded-md border border-slate-200 bg-white p-4 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <span className="mb-2 block text-sm font-semibold text-slate-900">Software Development</span>
                  <div className="flex flex-col">
                    {dropdownItem('/services/softwaredevelopment', 'Custom Software Development')}
                    {dropdownItem('/services/mobileapplication', 'Mobile App Development')}
                    {dropdownItem('/services/webapplication', 'Web Application')}
                    {dropdownItem('/services/websitedevelopment', 'Web Development')}
                  </div>
                </div>
                <div>
                  <span className="mb-2 block text-sm font-semibold text-slate-900">Digital Marketing</span>
                  <div className="flex flex-col">
                    {dropdownItem('/services/seo', 'SEO')}
                    {dropdownItem('/services/sem', 'SEM')}
                    {dropdownItem('/services/smm', 'SMM')}
                    {dropdownItem('/services/email-marketing', 'Email Marketing')}
                    {dropdownItem('/services/content-writing', 'Content Writing')}
                  </div>
                </div>
                <div>
                  <span className="mb-2 block text-sm font-semibold text-slate-900">HR Consulting</span>
                  <div className="flex flex-col">
                    {dropdownItem('/services/global-recruitments', 'Global Recruiter')}
                    {dropdownItem('/services/staffing-services', 'Staff Services')}
                    {dropdownItem('/services/contract-staffing', 'Contract Staffing')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {desktopLink('/contact', 'Contact Us')}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
          onClick={() => setOpen(v => !v)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 0 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-slate-200 bg-white overflow-hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 flex flex-col gap-1">
              {dropdownItem('/', 'Home')}

              {/* Mobile Company */}
              <button
                onClick={() => setOpenMobileCompany(v => !v)}
                className="flex w-full items-center justify-between rounded px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Company
                <span>{openMobileCompany ? '-' : '+'}</span>
              </button>
              <AnimatePresence>
                {openMobileCompany && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-4 flex flex-col gap-1 overflow-hidden"
                  >
                    {dropdownItem('/methodology', 'Our Development & Methodology')}
                    {dropdownItem('/career', 'Career & Company Culture')}
                    {dropdownItem('/companycontact', 'Contact Us')}

                    {/* Resources */}
                    <button
                      onClick={() => setOpenMobileResources(v => !v)}
                      className="flex w-full items-center justify-between rounded px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 mt-1"
                    >
                      Resources
                      <span>{openMobileResources ? '-' : '+'}</span>
                    </button>
                    <AnimatePresence>
                      {openMobileResources && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="ml-4 flex flex-col gap-1 overflow-hidden"
                        >
                          {dropdownItem('/blog', 'Blog & Insights')}
                          {dropdownItem('/testimonials', 'Client & Testimonials')}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Services */}
              <button
                onClick={() => setOpenMobileServices(v => !v)}
                className="flex w-full items-center justify-between rounded px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Services
                <span>{openMobileServices ? '-' : '+'}</span>
              </button>
              <AnimatePresence>
                {openMobileServices && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-4 flex flex-col gap-1 overflow-hidden"
                  >
                    {/* Software */}
                    <button
                      onClick={() => setOpenSoftware(v => !v)}
                      className="flex w-full items-center justify-between rounded px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 mt-1"
                    >
                      Software Development
                      <span>{openSoftware ? '-' : '+'}</span>
                    </button>
                    <AnimatePresence>
                      {openSoftware && (
                        <motion.div className="ml-4 flex flex-col gap-1 overflow-hidden">
                          {dropdownItem('/services/softwaredevelopment', 'Custom Software Development')}
                          {dropdownItem('/services/mobileapplication', 'Mobile App Development')}
                          {dropdownItem('/services/webapplication', 'Web Application')}
                          {dropdownItem('/services/websitedevelopment', 'Web Development')}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Digital */}
                    <button
                      onClick={() => setOpenDigital(v => !v)}
                      className="flex w-full items-center justify-between rounded px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 mt-2"
                    >
                      Digital Marketing
                      <span>{openDigital ? '-' : '+'}</span>
                    </button>
                    <AnimatePresence>
                      {openDigital && (
                        <motion.div className="ml-4 flex flex-col gap-1 overflow-hidden">
                          {dropdownItem('/services/seo', 'SEO')}
                          {dropdownItem('/services/sem', 'SEM')}
                          {dropdownItem('/services/smm', 'SMM')}
                          {dropdownItem('/services/email-marketing', 'Email Marketing')}
                          {dropdownItem('/services/content-writing', 'Content Writing')}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* HR */}
                    <button
                      onClick={() => setOpenHR(v => !v)}
                      className="flex w-full items-center justify-between rounded px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 mt-2"
                    >
                      HR Consulting
                      <span>{openHR ? '-' : '+'}</span>
                    </button>
                    <AnimatePresence>
                      {openHR && (
                        <motion.div className="ml-4 flex flex-col gap-1 overflow-hidden">
                          {dropdownItem('/services/global-recruitments', 'Global Recruiter')}
                          {dropdownItem('/services/staffing-services', 'Staff Services')}
                          {dropdownItem('/services/contract-staffing', 'Contract Staffing')}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>

              {dropdownItem('/contact', 'Contact')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
