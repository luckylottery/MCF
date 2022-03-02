import {cryptoOptions} from "./data/CreateCoinAvailableCryptos";

export const routes = [
  {
    link: "/home",
    name: "Home",
    icon: require("./assets/Icons/Home.png").default,
  },
  {
    link: "/factory",
    name: "Factory",
    icon: require("./assets/Icons/Factory.png").default,
  },
  {
    name: "Launchpad",
    icon: require("./assets/Icons/Launchpad.png").default,
    collapsable: true,
    children: [
      {
        link: "/vetted",
        name: "Vetted"
      }
      // {
      //   link: "/dashboard",
      //   name: "Dashboard",
      // },
      // {
      //   link: "/create-manage",
      //   name: "Create & Manage",
      // },
      // {
      //   link: "/coin-creation",
      //   name: "Coin Creation",
      // },
    ]
  },
  {
    link: "/lottery",
    name: "Lottery",
    icon: require("./assets/Icons/Lottery.png").default,
  },
  {
    link: "/casino",
    name: "Casino",
    icon: require("./assets/Icons/Casino.png").default,
  },
  {
    link: "/farming",
    name: "Farming",
    icon: require("./assets/Icons/Claw.png").default,
  },
  {
    link: "/arcade",
    name: "Arcade",
    icon: require("./assets/Icons/Arcade.png").default,
  },
  {
    name: "Create Coin",
    collapsable: true,
    children: cryptoOptions?.slice(0, 3)
  }
]
