import { Description } from "components/Description"
import CoinBase from 'assets/images/main/logo-01a.png'
import CoinMarket from 'assets/images/main/logo-03.png'
import IndoDax from 'assets/images/main/logo-02.png'
import Benance from 'assets/images/main/logo-04.png'

export const Clients: React.FC = () => {

  return (
    <section className="mb-16">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <Description title="Big companies who believe in us" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leonatoque penatibu." caption="CLIENTS" textCenter={true} />
        </div>
        <div className="grid grid-cols-1 gap-9 justify-items-center mt-16 md:grid-cols-2 xl:grid-cols-3">
          <img className="w-52" src={Benance} alt="img" />
          <img className="w-52" src={CoinBase} alt="img" />
          <img className="w-52" src={CoinMarket} alt="img" />
          <img className="w-52" src={IndoDax} alt="img" />
          <img className="w-52" src={CoinBase} alt="img" />
          <img className="w-52" src={CoinMarket} alt="img" />
          <img className="w-52" src={IndoDax} alt="img" />
          <img className="w-52" src={Benance} alt="img" />
        </div>
      </div>
    </section>
  )
}
