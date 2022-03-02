import { Drawer } from "../Drawer/Drawer";
import { Button } from "../Button/Button";
import { useState, useEffect, useContext } from "react";
import {
  connectWallet,
  getCurrentWalletConnected,
} from "../../Utils/walletMainHandler";
import { WalletContext } from "../../context/WalletContext";

const MCFIcon = require("../../assets/Icons/LOGO MF_ICON.png").default;
const Avatar = require("../../assets/Icons/Avatar.png").default;
const HeaderBelt = require("../../assets/Icons/Header_Belt.png").default;
const Arrow = require("../../assets/Icons/Arrow down.png").default;

export const Navbar = () => {
  const { walletAddress, setWalletAddress } = useContext(WalletContext);
  const [, /*status*/ setStatus] = useState("");

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWalletAddress("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://metamask.io/download.html`}
          >
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }
  
  useEffect(() => {
    async function myFunction() {
      const { address, status } = await getCurrentWalletConnected();
      setWalletAddress(() => address);
      setStatus(() => status);
      addWalletListener();
    }
    myFunction();
    
    // eslint-disable-next-line
  }, []);

  const connectWalletPressed = async () => {
    const { status, address } = await connectWallet();
    setStatus(status);
    setWalletAddress(address);
  };

  return (
    <>
      <div className="text-blue-1 my-2.5 flex justify-between items-center w-full py-2 px-2 lg:px-10">
        <div className="flex items-center gap-3">
          <Drawer />
          <Button color="blue" text="Buy" imageSRC={MCFIcon} />
          <label className="font-bold">$14.55</label>
        </div>
        <div className="flex gap-5 items-center">
          <button>Help</button>
          <button
            className="connectWalletButton"
            onClick={connectWalletPressed}
          >
            <span className="shadow"></span>
            <span className="edge"></span>
            {walletAddress.length > 0 ? (
              <span className="front text">
                {"Connected: " +
                  String(walletAddress).substring(0, 6) +
                  "..." +
                  String(walletAddress).substring(38)}
              </span>
            ) : (
              <span className="front text">Connect your wallet</span>
            )}
          </button>
          <div className="flex gap-2 items-center">
            <div
              className="h-10 w-10 bg-no-repeat bg-contain bg-center"
              style={{ backgroundImage: `url("${Avatar}")` }}
            />
            <div className="flex items-center gap-2.5">
              Verr Golden
              <div
                className="h-3 w-3 bg-no-repeat bg-contain bg-center transform rotate-180"
                style={{ backgroundImage: `url("${Arrow}")` }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-5 w-full bg-contain bg-center"
        style={{ backgroundImage: `url("${HeaderBelt}")` }}
      />
    </>
  );
};
