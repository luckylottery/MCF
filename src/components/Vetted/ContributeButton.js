import React, { useContext, useState } from 'react'
import { WalletContext } from '../../context/WalletContext';
import { connectWallet } from '../../Utils/walletMainHandler';
import { Spinner } from '../Spinner/Spinner';
import { contractAddress } from "../../Utils/contractAddress";
import idoABI from "../../ABI/idoJson.json";
import Web3 from "web3";


export const ContributeButton = ({ projectInfo }) => {
  const { walletAddress, setWalletAddress } = useContext(WalletContext);
  const [contributeValue, setContributeValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mini, setMini] = useState(false);
  const metaWeb3 = new Web3(window.ethereum);

  const handleContributeChange = (e) => {
    setContributeValue(e.target.value);
    if (contributeValue < 0.01) {
      setMini(true);
    }

  }

  const handleButtonClick = async () => {
    console.log("111, ", contributeValue);
    setIsLoading(true);
    if (walletAddress === "") {
      const { address } = await connectWallet();
      setWalletAddress(address);
      setIsLoading(false);
    }
    else {
      if (2 >= contributeValue && contributeValue >= 0.1) {
        // Do some magic with contributeValue and projectInfo
        const testContract = new metaWeb3.eth.Contract(idoABI, contractAddress);
        testContract.methods._UserDepositPhaseOne().send({ from: walletAddress, value: metaWeb3.utils.toWei(contributeValue, 'ether') }).on('receipt', () => {
          alert(1);
          setIsLoading(false);
        }).on('error', () => {
          setIsLoading(false);
        });
        // setTimeout(() => {
        //   setIsLoading(false);
        // }, 2000);
      }
      else if (contributeValue > 2) { setContributeValue(2); } else if (contributeValue < 0.1) { return; }

    }
  }

  const handleWithdraw = async () => {
    setIsLoading(true);
    if (walletAddress === "") {
      const { address } = await connectWallet();
      setWalletAddress(address);
      setIsLoading(false);
    }
    else {
      // Do some magic with contributeValue and projectInfo
      const testContract = new metaWeb3.eth.Contract(idoABI, contractAddress);
      testContract.methods.withdrawTokens().send({ from: walletAddress }).on('receipt', () => {
        setIsLoading(false);
      }).on('error', () => {
        setIsLoading(false);
      });
    }
  }
  return (
    <div className="mt-4 w-full flex flex-col gap-3 items-center">
      {
        walletAddress !== "" && (
          <input
            disabled={isLoading}
            className={`${isLoading ? "opacity-50 cursor-wait" : ""} border-2 text-blue-3 border-blue-3  font-bold p-2 text-right rounded-sm w-full outline-none`}
            value={contributeValue}
            onChange={handleContributeChange}
          />
        )
      }
      <button
        disabled={isLoading || mini}
        className={`${isLoading ? "opacity-50 cursor-wait" : ""} flex justify-center gap-1.5 border-blue-3 transition duration-300 border-2 text-blue-3  font-bold text-md rounded-sm py-2 w-full`}
        onClick={handleButtonClick}
      >
        {walletAddress === "" ? "CONNECT WALLET TO PARTICIPATE" : "CONTRIBUTE"}
        {isLoading && (
          <Spinner />
        )}
      </button>
      <button
        disabled={isLoading || mini}
        className={`${isLoading ? "opacity-50 cursor-wait" : ""} flex justify-center gap-1.5 border-blue-3 transition duration-300 border-2 text-blue-3  font-bold text-md rounded-sm py-2 w-full`}
        onClick={handleWithdraw}
      >
        {walletAddress === "" ? "CONNECT WALLET TO PARTICIPATE" : "WITHDRAW"}
        {isLoading && (
          <Spinner />
        )}
      </button>
    </div>
  )
}
