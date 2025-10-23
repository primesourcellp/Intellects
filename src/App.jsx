import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar.jsx'
import ScrollToTop from './Components/Layout/ScrollToTop.jsx'
import Home from './Components/Pages/Home.jsx'
import MethodologyPage from './Components/Company/methodology.jsx'
import CareerCulturePage from './Components/Company/CareerCulture.jsx'
import ContactUsPage from './Components/Company/CompanyContact.jsx' 
import CustomSoftware from './Components/Services/Software/CustomSoftware.jsx'
 
import Contact from './Components/Pages/Contact.jsx'
import Footer from './Components/Layout/Footer.jsx'
import ClientsTestimonialsPage from './Components/Company/Testimonial.jsx'
import WebsiteDevelopment from './Components/Services/Software/WebsiteDevelopment.jsx'
import WebAppDevelopment from './Components/Services/Software/WebAppDevelopment.jsx'
import MobileAppDevelopment from './Components/Services/Software/Mobileapplication.jsx'
import SEO from './Components/Services/Digital/Seo.jsx'
import SEM from './Components/Services/Digital/Sem.jsx'
import SMM from './Components/Services/Digital/Smm.jsx'
import ContentMarketing from './Components/Services/Digital/ContentMarketing.jsx'
import EmailMarketing from './Components/Services/Digital/EmailMarketing.jsx'
import GlobalRecruitments from './Components/Services/Hiring/Recruiter.jsx'
import ContractStaffing from './Components/Services/Hiring/Staffing.jsx'
import StaffingServices from './Components/Services/Hiring/StaffServices.jsx'
export default function App() {
  return (
    <BrowserRouter basename="/Intellects">
      <ScrollToTop />
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/methodology" element={<MethodologyPage/>} />
         <Route path='/career' element={<CareerCulturePage/>}/>
        <Route path='/companycontact' element={<ContactUsPage/>} />
        <Route path="/testimonials" element={<ClientsTestimonialsPage />} />
        <Route path='/services/softwaredevelopment' element={< CustomSoftware/>} />
        <Route path='/services/websitedevelopment' element={< WebsiteDevelopment/>} />
        <Route path='/services/webapplication' element={< WebAppDevelopment/>} />
        <Route path='/services/mobileapplication' element={<MobileAppDevelopment/>} />
        <Route path='/services/seo' element={<SEO/>} />
        <Route path='/services/sem' element={<SEM/>} />
        <Route path='/services/smm' element={<SMM/>} />
        <Route path='/services/smm' element={<SMM/>} />
        <Route path='/services/content-writing' element={<ContentMarketing/>} />
        <Route path='/services/email-marketing' element={<EmailMarketing />} />
        <Route path='/services/global-recruitments' element={<GlobalRecruitments />} />
        <Route path='/services/contract-staffing' element={<ContractStaffing />} />
        <Route path='/services/staffing-services' element={<StaffingServices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}