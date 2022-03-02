import "react-multi-carousel/lib/styles.css";
import { Carousel } from "../components/Carousel/Carousel";

const pattern = require('../assets/patterns/Pattern.png').default;
const weeklyPrize = require('../assets/images/weeklyprize.png').default;
const launchpad = require('../assets/images/Launchpad_Rocket.png').default;
const scratchies = require('../assets/images/Scratchies Coupon.png').default;
const createAndManage = require('../assets/images/Control.png').default;
const coinCreation = require('../assets/images/Coin machine.png').default;
const coinMakerRobot = require('../assets/images/Coon Maker Robot.png').default;
const flappyDevs = require('../assets/images/Flappy Devs.png').default;
const kekman = require('../assets/images/Kekman.png').default;
const spaceInvaders = require('../assets/images/Space Invaders.png').default;

const coinGecko = require('../assets/partners/Vector Smart Object-4.png').default;
const coinMarketCap = require('../assets/partners/Vector Smart Object-3.png').default;
const nomics = require('../assets/partners/Nomics_1.png').default;
const crypto = require('../assets/partners/Vector Smart Object-2.png').default;
const coinbase = require('../assets/partners/Vector Smart Object.png').default;

export const HomePage = () => {
  return (
    <div className="box-border">
      <Carousel />
      <div
        className="relative w-full h-96 mb-10 bg-center bg-contain bg-no-repeat mx-auto"
        style={{
          backgroundImage: `url("${weeklyPrize}")`
        }}
      >
      </div>
      <div
        className="w-full py-10 bg-cover pg-no-repeat"
        style={{
          backgroundImage: `url("${pattern}")`
        }}
      >
        <div className="flex flex-col gap-10 w-11/12 md:w-7/12 xl:w-10/12 mx-auto font-bold">
          <div className="flex flex-col xl:flex-row justify-center gap-10">
            <div className="flex w-full gap-5 justify-center items-center bg-white py-5 px-10 border-2 border-blue-4 rounded-3xl">
              <label className="text-blue-1">Launchpad</label>
              <div className="h-60 w-72 bg-center bg-contain bg-no-repeat"
                style={{
                  backgroundImage: `url("${launchpad}")`
                }}
              />
            </div>
            <div className="w-full flex gap-5 justify-center items-center bg-white py-5 px-10 border-2 border-blue-4 rounded-3xl">
              <label className="text-blue-1">Scratchies</label>
              <div className="h-60 w-72 bg-center bg-contain bg-no-repeat"
                style={{
                  backgroundImage: `url("${scratchies}")`
                }}
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center gap-10">
            <div className="flex w-full xl:w-1/2 flex-col gap-10">
              <div className="flex gap-5 justify-center items-center bg-white py-5 px-10 border-2 border-blue-4 rounded-3xl">
                <label className="text-blue-1">Create & Manage</label>
                <div className="h-48 w-full xl:w-72 bg-center bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: `url("${createAndManage}")`
                  }}
                />
              </div>
              <div className="flex gap-5 justify-center items-center bg-white py-5 px-10 border-2 border-blue-4 rounded-3xl">
                <label className="text-blue-1">Coin Creation</label>
                <div className="h-48 w-full xl:w-72 bg-center bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: `url("${coinCreation}")`
                  }}
                />
              </div>
            </div>
            <div className="w-full h-48 xl:h-96 xl:w-1/2 bg-center bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url("${coinMakerRobot}")`
              }}
            />
          </div>
          <div className="mx-auto w-full">
            <h1 className="text-center text-blue-1 text-4xl">Arcade</h1>
            <div className="flex justify-center gap-10 flex-wrap mt-10 text-white">
              <div className="cursor-pointer transition duration-300 border border-pink relative h-40 w-72 bg-center bg-contain bg-no-repeat rounded-3xl overflow-hidden transform hover:scale-105"
                style={{
                  backgroundImage: `url("${flappyDevs}")`
                }}
              >
                <div className="z-10 absolute bottom-0 w-full h-12 blur transition duration-300 rounded-3xl bg-blue-3" />
                <label className="z-20 absolute bottom-2.5 text-center w-full">Flappy Devs</label>
              </div>
              <div className="cursor-pointer transition duration-300 border border-pink relative h-40 w-72 bg-center bg-contain bg-no-repeat rounded-3xl overflow-hidden transform hover:scale-105"
                style={{
                  backgroundImage: `url("${kekman}")`
                }}
              >
                <div className="z-10 absolute bottom-0 w-full h-12 blur transition duration-300 rounded-3xl bg-blue-3" />
                <label className="z-20 absolute bottom-2.5 text-center w-full">Kekman</label>
              </div>
              <div className="cursor-pointer transition duration-300 border border-pink relative h-40 w-72 bg-center bg-contain bg-no-repeat rounded-3xl overflow-hidden transform hover:scale-105"
                style={{
                  backgroundImage: `url("${spaceInvaders}")`
                }}
              >
                <div className="z-10 absolute bottom-0 w-full h-12 blur transition duration-300 rounded-3xl bg-blue-3" />
                <label className="z-20 absolute bottom-2.5 text-center w-full">Personal Space Invaders</label>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-center mb-5 text-blue-2">Featured on</h1>
            <div className="flex gap-5 flex-wrap justify-center">
              <div className="h-10 w-40 bg-center bg-contain bg-no-repeat"
                style={{
                  backgroundImage: `url("${coinGecko}")`
                }}
              />
              <div className="h-10 w-40 bg-center bg-contain bg-no-repeat"
                style={{
                  backgroundImage: `url("${coinMarketCap}")`
                }}
              />
              <div className="h-10 w-40 bg-center bg-contain bg-no-repeat"
                style={{
                  backgroundImage: `url("${nomics}")`
                }}
              />
              <div className="h-10 w-40 bg-center bg-contain bg-no-repeat"
                style={{
                  backgroundImage: `url("${crypto}")`
                }}
              />
              <div className="h-10 w-40 bg-center bg-contain bg-no-repeat"
                style={{
                  backgroundImage: `url("${coinbase}")`
                }}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
