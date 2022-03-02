import { useEffect, useState } from "react";
import { cryptoOptions } from "../../data/CreateCoinAvailableCryptos";


export const CryptoOptions = ({ selectedCrypto, setSelectedCrypto, routeId }) => {
    const [selectedPage, setSelectedPage] = useState(1)
    const NEXT_PAGE = "nextPage"
    const PREVIOUS_PAGE = "prevousPage"


    useEffect(() => {
        cryptoOptions.forEach((crypto, index) => {
            if (crypto.name === routeId) {
                setSelectedPage(Math.ceil((index + 1) / 10))
            }
        })
    }, [routeId])

    function setPage(action) {
        if (action === NEXT_PAGE) {
            if (selectedPage < Math.ceil(cryptoOptions.length / 10)) {
                setSelectedPage(selectedPage + 1)
            }
        } else if (action === PREVIOUS_PAGE) {
            if (selectedPage > 1) {
                setSelectedPage(selectedPage - 1)
            }
        }

    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center gap-y-5 py-8 px-4 text-sm">
            {cryptoOptions.map((crypto, index) => {
                let minIndex = 0
                if (selectedPage > 1) {
                    for (let i = 1; i < selectedPage; i++) {
                        minIndex += 10
                    }
                }
                if (index >= minIndex && index < Math.ceil(selectedPage * 10)) {
                    return (
                        <button
                            // key={crypto?.name}
                            key={index}
                            className="w-11/12
                    justify-center sm:justify-start
                    flex items-center
                    border-2 border-blue-1
                    py-1 pl-2 md:pl-4 md:py-2 md:mx-4
                    break-words
                    min-w-min
                    break-all
                    text-blue-1
                    bg-blue-light
                    hover:bg-gray-100
                    hover:text-blue-2
                    duration-300
                    rounded
                    " style={{ borderBottom: "4px solid #405cd0", borderRadius: "15px", ...(selectedCrypto?.name === crypto?.name ? { backgroundColor: "#afbeff", color: "black" } : {}) }} onClick={() => setSelectedCrypto(crypto)}>
                            <img src={crypto?.icon} style={{ maxHeight: "20px", objectFit: "cover", maxWidth: "25px" }} alt={"Icon"} className="mr-1" />
                            <p>{crypto?.name}</p>
                        </button>
                    )

                }
                return null
            })
            }
            <div className="xl:col-start-2 xl:col-end-3 justify-self-end w-11/12 flex justify-end">
                <button
                    className="m-1 px-2 rounded text-white bg-blue-1 hover:bg-blue-1 duration-300 font-bold rounded-sm"
                    onClick={() => setPage(PREVIOUS_PAGE)}>{"<"}</button>
                <button
                    className="m-1 px-2 rounded text-white bg-blue-1 hover:bg-blue-1 duration-300 font-bold rounded-sm"
                    onClick={() => setPage(NEXT_PAGE)}>{">"}
                </button>
            </div>


        </div>)
}