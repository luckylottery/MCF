const belt = require('../../assets/images/Belt.png').default;
const blueBlox = require('../../assets/images/boxes/box blue.png').default;
const originalBox = require('../../assets/images/boxes/box original.png').default;
const redBox = require('../../assets/images/boxes/box red.png').default;
const yellowBox = require('../../assets/images/boxes/box yellow.png').default;
const greenBox = require('../../assets/images/boxes/box green.png').default;

const memecoinLogo = require('../../assets/Icons/Memefactory Logo L.png').default;

const discord = require('../../assets/Icons/social/Discord.png').default;
const facebook = require('../../assets/Icons/social/Facebook.png').default;
const reddit = require('../../assets/Icons/social/Reddit.png').default;
const telegram = require('../../assets/Icons/social/Telegram.png').default;
const twitter = require('../../assets/Icons/social/Twitter.png').default;

export const Footer = () => {
  return (
    <footer className="w-full bg-blue-3 box-content text-white mt-10">
      <div
        className="relative w-full h-7 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("${belt}")`
        }}
      >
        <div className="absolute w-full flex justify-evenly -top-10">
          <div
            className="w-10 h-10 bg-cover rounded-t"
            style={{
              backgroundImage: `url("${redBox}")`
            }}
          />
          <div
            className="w-10 h-10 bg-cover rounded-t"
            style={{
              backgroundImage: `url("${blueBlox}")`
            }}
          />
          <div
            className="w-10 h-10 bg-cover rounded-t"
            style={{
              backgroundImage: `url("${originalBox}")`
            }}
          />
          <div
            className="w-10 h-10 bg-cover rounded-t"
            style={{
              backgroundImage: `url("${yellowBox}")`
            }}
          />
          <div
            className="w-10 h-10 bg-cover rounded-t"
            style={{
              backgroundImage: `url("${greenBox}")`
            }}
          />
          <div
            className="w-10 h-10 bg-cover rounded-t hidden sm:block"
            style={{
              backgroundImage: `url("${redBox}")`
            }}
          />
          <div
            className="w-10 h-10 bg-cover rounded-t hidden sm:block"
            style={{
              backgroundImage: `url("${yellowBox}")`
            }}
          />
        </div>
      </div>
      <div className="flex justify-center flex-col lg:flex-row lg:gap-10 p-10">
        <div className="flex justify-center gap-10">
          <div
            className="w-28 h-20 bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url("${memecoinLogo}")`
            }}
          />
          <div className="flex flex-col text-xs">
            <label>&copy; {new Date().getFullYear()} by Memecoin Factory</label>
            <label>Proudly created by MCF</label>
          </div>
        </div>
        <div className="text-center">
          <label>Follow our Socials</label>
          <div className="flex gap-5 justify-center my-5">
            <a href="https://www.google.com" rel="noreferrer" target="_blank" className="flex-shrink-0">
              <img src={facebook} alt="facebook" className="w-7 h-7 rounded-full" />
            </a>
            <a href="https://www.google.com" rel="noreferrer" target="_blank" className="flex-shrink-0">
              <img src={telegram} alt="telegram" className="w-7 h-7 rounded-full" />
            </a>
            <a href="https://www.google.com" rel="noreferrer" target="_blank" className="flex-shrink-0">
              <img src={discord} alt="discord" className="w-7 h-7 rounded-full" />
            </a>
            <a href="https://www.google.com" rel="noreferrer" target="_blank" className="flex-shrink-0">
              <img src={twitter} alt="twitter" className="w-7 h-7 rounded-full" />
            </a>
            <a href="https://www.google.com" rel="noreferrer" target="_blank" className="flex-shrink-0">
              <img src={reddit} alt="reddit" className="w-7 h-7 rounded-full" />
            </a>
          </div>
        </div>
        <div className="flex gap-5 justify-center font-bold text-center">
          <label>CONTACT</label>
          <label>COMMUNITY</label>
          <label>BETTING RULES & TERMS</label>
        </div>
      </div>
    </footer>
  )
}
