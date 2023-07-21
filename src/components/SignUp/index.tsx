import { Description } from "components/Description"
import { Button } from "components/UI/Button"
import CryptoPortal from 'assets/images/Crypto-Portal.png'


export const SignUp: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="container">
        <div className="flex flex-col items-center text-center ml:flex-row ml:gap-20 ml:justify-center">
          <div className="flex flex-col items-center text-center ml:text-end ml:items-end max-w-md">
            <Description text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorp." title="Sign up to learn more" caption="START NOW" />
            <Button>
              Request a Demo
            </Button>
          </div>
          <div className="-order-1">
            <img className="max-w-md w-full" src={CryptoPortal} alt="img" />
          </div>
        </div>
      </div>
    </section>
  )
}
