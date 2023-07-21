import { Breadcrumbs } from 'components/Breadcrumbs'
import { Download } from 'components/Download'
import { Features } from 'components/Features'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Steps } from 'components/Steps'
import { TokeSale } from 'components/TokenSale'


export const TokenPage: React.FC = () => {
    return (
        <>
            <Header />
            <Breadcrumbs title='Token Sale' />
            <TokeSale />
            <Steps/>
            <Features/>
            <Download/>
            <Footer />
        </>
    )
}
