import RMCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "../Image/Image";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const Carousel = () => {
  return (
    <div className="overflow-hidden mx-auto my-10 h-72 w-full md:w-11/12 text-center">
      <RMCarousel
        responsive={responsive}
        autoPlay={true}
        arrows={true}
        infinite={true}
        className="rounded z-0 overflow-visible"
      >
        <div className="relative">
          <Image
            src="https://www.esports.net/wp-content/uploads/2021/08/Crypto-Pop.jpg"
            className="w-11/12 h-40 mx-auto rounded-3xl"
          />
          <div className="absolute -bottom-24 text-left px-5 h-20 text-blue-1 w-full">
            <h1 className="font-bold">CoinMarketCap</h1>
            <p className="text-sm"> tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://www.esports.net/wp-content/uploads/2021/08/Crypto-Pop.jpg"
            className="w-11/12 h-40 mx-auto rounded-3xl"
          />
          <div className="absolute -bottom-24 text-left px-5 h-20 text-blue-1 w-full">
            <h1 className="font-bold">CoinMarketCap</h1>
            <p className="text-sm"> tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://www.esports.net/wp-content/uploads/2021/08/Crypto-Pop.jpg"
            className="w-11/12 h-40 mx-auto rounded-3xl"
          />
          <div className="absolute -bottom-24 text-left px-5 h-20 text-blue-1 w-full">
            <h1 className="font-bold">CoinMarketCap</h1>
            <p className="text-sm"> tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://www.esports.net/wp-content/uploads/2021/08/Crypto-Pop.jpg"
            className="w-11/12 h-40 mx-auto rounded-3xl"
          />
          <div className="absolute -bottom-24 text-left px-5 h-20 text-blue-1 w-full">
            <h1 className="font-bold">CoinMarketCap</h1>
            <p className="text-sm"> tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://www.esports.net/wp-content/uploads/2021/08/Crypto-Pop.jpg"
            className="w-11/12 h-40 mx-auto rounded-3xl"
          />
          <div className="absolute -bottom-24 text-left px-5 h-20 text-blue-1 w-full">
            <h1 className="font-bold">CoinMarketCap</h1>
            <p className="text-sm"> tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://www.esports.net/wp-content/uploads/2021/08/Crypto-Pop.jpg"
            className="w-11/12 h-40 mx-auto rounded-3xl"
          />
          <div className="absolute -bottom-24 text-left px-5 h-20 text-blue-1 w-full">
            <h1 className="font-bold">CoinMarketCap</h1>
            <p className="text-sm"> tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://www.esports.net/wp-content/uploads/2021/08/Crypto-Pop.jpg"
            className="w-11/12 h-40 mx-auto rounded-3xl"
          />
          <div className="absolute -bottom-24 text-left px-5 h-20 text-blue-1 w-full">
            <h1 className="font-bold">CoinMarketCap</h1>
            <p className="text-sm"> tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://www.esports.net/wp-content/uploads/2021/08/Crypto-Pop.jpg"
            className="w-11/12 h-40 mx-auto rounded-3xl"
          />
          <div className="absolute -bottom-24 text-left px-5 h-20 text-blue-1 w-full">
            <h1 className="font-bold">CoinMarketCap</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
      </RMCarousel>
    </div>
  )
}
