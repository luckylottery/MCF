import { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const burgerMenuIcon = require("../../assets/Icons/Burger Menu.png").default;
const MCFIcon = require("../../assets/Icons/LOGO MF_ICON.png").default;
const MCFFrontIcon = require("../../assets/Icons/coin frontface.png").default;

export const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="h-14 w-14 bg-no-repeat bg-contain bg-center lg:hidden"
        style={{
          backgroundImage: `url("${burgerMenuIcon}")`,
        }}
        onClick={() => setIsOpen(true)}
      />
      <div
        className={`${isOpen ? "w-screen h-screen" : "w-0 h-0"
          } fixed transition top-0 left-0 z-0 drawer-container z-10 lg:hidden`}
      >
        <div
          className={`${isOpen ? "w-11/12 sm:w-1/2 p-5 bg-red-300" : "w-0"
            } fixed text-blue-1 duration-300 top-0 left-0 h-full bg-white`}
        >
          <div
            className={`${isOpen ? "flex" : "hidden"
              } flex-col justify-start gap-5 h-full`}
          >
            <div className="flex justify-between items-center">
              <div
                className="h-20 w-20 bg-no-repeat bg-contain bg-center"
                style={{ backgroundImage: `url("${MCFIcon}")` }}
              />
              <button
                className="text-xl rounded p-2 font-bold"
                onClick={() => setIsOpen(false)}
              >
                CLOSE
              </button>
            </div>
            <nav className="flex flex-col text-2xl">
              {routes.map(({ link, name, children, icon, collapsable }, index) => (
                <div
                  // key={`${link ? link : name}_drawer`}
                  key={index}
                  className={`${isOpen ? "py-3" : "py-1"
                    } flex flex-col px-5 transition-all	duration-700 cursor-pointer`}
                >
                  {!collapsable ? (
                    <Link className="flex gap-5 items-center" to={link}>
                      <div
                        className="h-5 w-5 bg-no-repeat bg-center bg-contain"
                        style={{
                          backgroundImage: `url("${icon}")`,
                        }}
                      />
                      <h1 className={`${isOpen ? "block" : "hidden"} text-2xl`}>
                        {name}
                      </h1>
                    </Link>
                  ) : (
                    <div className="flex gap-5 items-center">
                      <div
                        className="h-5 w-5 bg-no-repeat bg-center bg-contain"
                        style={{
                          backgroundImage: `url("${icon}")`,
                        }}
                      />
                      <h1 className={`${isOpen ? "block" : "hidden"} text-2xl`}>
                        {name}
                      </h1>
                    </div>
                  )}
                  <div className={`${isOpen ? "block" : "hidden"}`}>
                    {children && (
                      <div className="ml-10">
                        {children.map(({ link, name }, index) => (
                          <h2
                            //key={link}
                            key={index}
                            className="rounded py-1 px-2 transition-all	duration-700 text-xl"
                          >
                            {name}
                          </h2>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </nav>
            <div className="px-5 my-10 text-blue-1 font-bold">
              <div className="bg-blue-1 w-full h-1 rounded mb-5" />
              <div className="flex items-center justify-center gap-5 mb-3">
                <div
                  className="h-9 w-9 bg-no-repeat bg-center bg-contain"
                  style={{
                    backgroundImage: `url("${MCFFrontIcon}")`,
                  }}
                />
                <label>$0,00034</label>
              </div>
              <div className="flex justify-center gap-5">
                <h3>Poocoin</h3>
                <h3>Dextools</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
