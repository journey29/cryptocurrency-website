import { MainPage } from "pages/MainPage"
import { AboutPage } from "pages/AboutPage"
import { Routes, Route } from "react-router"
import { OurApp } from "pages/OurApp"
import { ProductsPage } from "pages/Products"
import { CareersPage } from "pages/CareersPage"
import { CareerOverview } from "pages/CareerOverview"
import { TeamPage } from "pages/TeamPage"
import { Faqs } from "pages/Faqs"
import { ContactPage } from "pages/ContactPage"
import { TokenPage } from "pages/TokenPage"

export const Navigation: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/our-app" element={<OurApp />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/career-overview" element={<CareerOverview />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/token-sale" element={<TokenPage />} />
        </Routes>
    )
}
