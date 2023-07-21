import { Breadcrumbs } from 'components/Breadcrumbs'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Form } from 'components/Form'
import { Offices } from 'components/Offices'
import { Questions } from 'components/Questions'
import { Vision } from 'components/Vision'
import { Join } from 'components/Join'


export const ContactPage:React.FC = () => {
    return (
        <>
            <Header />
            <Breadcrumbs title='Contact Us' />
            <Form/>
            <Offices/>
            <Questions/>
            <Vision/>
            <Join/>
            <Footer />
        </>
    )
}
