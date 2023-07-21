import { Breadcrumbs } from "components/Breadcrumbs"
import { Exchange } from "components/Exchange"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import { Platform } from "components/Platform"
import { Products } from "components/Products"
import { SignUp } from "components/SignUp"

export const ProductsPage:React.FC = () => {
  return (
    <>
    <Header/>
    <Breadcrumbs title="Our Products"/>
    <Products/>
    <Exchange/>
    <Platform/>
    <SignUp/>
    <Footer/>
    </>
  )
}
