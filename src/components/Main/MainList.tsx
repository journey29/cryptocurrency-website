import CoinBase from 'assets/images/main/logo-01a.png'
import CoinMarket from 'assets/images/main/logo-03.png'
import IndoDax from 'assets/images/main/logo-02.png'
import Benance from 'assets/images/main/logo-04.png'


export const MainList:React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-8 justify-items-center md:grid-cols-2 xl:grid-cols-4">
            <img src={Benance} alt="img" />
            <img src={CoinMarket} alt="img" />
            <img src={IndoDax} alt="img" />
            <img src={CoinBase} alt="img" />
        </div>
    )
}
