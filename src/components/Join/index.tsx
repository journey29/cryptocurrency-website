import { Description } from "components/Description"
import { Button } from "components/UI/Button"
import CryptoCurrency from 'assets/images/cryptocurrency-and-business-2021-12-14-19-36-06-utc.jpg'


export const Join: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <Description title="Join Our Team" caption="Join Us" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leonatoque penatibu." />
          <Button>
            Explore Career
          </Button>
          <div>
            <img className="max-w-md w-full" src={CryptoCurrency} alt="img" />
          </div>
        </div>
      </div>
    </section>
  )
}
