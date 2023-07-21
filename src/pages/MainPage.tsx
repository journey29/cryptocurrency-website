import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Main } from 'components/Main'
import { About } from 'components/About'
import { Advantage } from 'components/Advantage'
import { Steps } from 'components/Steps'
import { Vision } from 'components/Vision'
import { Features } from 'components/Features'
import { Exchange } from 'components/Exchange'
import { Platform } from 'components/Platform'
import { SignUp } from 'components/SignUp'

export const MainPage:React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Main />
                <About />
                <Advantage />
                <Steps />
                <Vision />
                <Features />
                <Exchange />
                <Platform />
                <SignUp />
            </main>
            <Footer />
        </>
    )
}
