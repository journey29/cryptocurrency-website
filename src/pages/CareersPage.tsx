import { AboutCareers } from "components/AboutCareers"
import { Apply } from "components/Apply"
import { Breadcrumbs } from "components/Breadcrumbs"
import { Clients } from "components/Clients"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { JobList } from "components/JobList"
import { Testimonials } from "components/Testimonials"

export const CareersPage:React.FC = () => {
  return (
    <>
    <Header/>
    <Breadcrumbs title="Careers"/>
    <AboutCareers/>
    <JobList/>
    <Testimonials/>
    <Apply/>
    <Clients/>
    <Footer/>
    </>
  )
}
