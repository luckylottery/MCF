import { useEffect, useState } from "react";
import { CryptoOptions } from "../components/CreateCoinPage/CryptoOptions";
import { CreateCoinForm } from "../components/CreateCoinPage/CreateCoinForm";
import { cryptoOptions } from "../data/CreateCoinAvailableCryptos";

const coinMachineLogo = require("../images/Coin machine.png").default;

export const CreateCoinPage = ({ selectedCrypto: selectedCryptoFromProps, match }) => {
  const [selectedCrypto, setSelectedCrypto] = useState(selectedCryptoFromProps ? selectedCryptoFromProps : cryptoOptions.filter((crypto) => crypto?.default)[0])
  const [routeId, setRouteId] = useState(null)
  useEffect(() => {
    if (match?.params?.crypto) {
      setRouteId(match.params.crypto)
      const defaultCrypto = cryptoOptions.filter((crypto) =>
        crypto.name === match.params.crypto
      )
      if (defaultCrypto[0]) {
        setSelectedCrypto(defaultCrypto[0])
      }

    }
  }, [match.params.crypto])

  return (
    <div>
      <div className="grid grid-cols-6" style={{ margin: '50px 0 20px 0' }}>
        <h1 className="col-start-2 col-end-4 text-right self-center pr-8 text-blue-1 font-bold" style={{ fontSize: '30px' }}>Coin Creation</h1>
        <img src={coinMachineLogo} style={{ height: '120px', objectFit: 'contain' }} alt="coin machine logo" />
      </div>
      <div className="grid grid-cols-6 py-6 mb-5" style={{ minHeight: 'calc(100vh - 64px - 234px)' }}>
        <div className="grid grid-cols-7 col-start-2 col-end-6 grid-rows-formContainer sm:grid-rows-1 border-2 rounded-coin-form-border shadow-coin-form-shadow">
          <div className="bg-yellow col-start-1 col-end-8 rounded-t-coin-form sm:rounded-tr-none sm:col-start-1 sm:col-end-4 sm:rounded-l-coin-form">
            <CryptoOptions selectedCrypto={selectedCrypto} setSelectedCrypto={setSelectedCrypto}
              routeId={routeId} />
          </div>
          <div className="rounded-b-coin-form bg-white col-start-1 col-end-8 sm:col-start-4 sm:col-end-8 sm:rounded-r-coin-form py-4">
            <CreateCoinForm selectedCrypto={selectedCrypto} />
          </div>
        </div>
      </div>
    </div>)
}