import ReactHowler from "react-howler"
import SuperfluidClient from "app/utils/SuperfluidClient"

// import SuperfluidClient from "app/utils/superfluidcli"

import { ethers } from "ethers"
import { FunctionComponent, Suspense, useEffect, useState } from "react"
import { useEthers } from "@usedapp/core"
import Spinner from "./Spinner"
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/solid"
import {
  classNames,
  getMumbaiTestnetProvider,
  ourDAIxTestContractAddress,
  ourReceiverTestWallet,
} from "app/utils/helper"

import { getDefaultProvider, providers } from "ethers"

const flowRate = 100
export const url = "https://eth-goerli.alchemyapi.io/v2/zfWv3pEito9Wi7gDUSLsand11To5VEjN"
export const customHttpProvider = new providers.JsonRpcProvider(url)

// const superfluidClient = SuperfluidClient as any
const client = new SuperfluidClient()

async function startPaymentStream(account) {
  client.superTokenCreateFlow(
    customHttpProvider,
    ourDAIxTestContractAddress(),
    account,
    ourReceiverTestWallet(),
    flowRate
  )
}

async function stopPaymentStream(account) {
  client.deleteFlow(
    customHttpProvider,
    account,
    ourReceiverTestWallet(),
    ourDAIxTestContractAddress
  )
}

export const Player = () => {
  const [playing, setPlaying] = useState(false)
  const [charging, setCharging] = useState(false)

  const { account } = useEthers()

  // useEffect(() => {
  //   setPlaying(true)
  // }, [])

  useEffect(() => {
    if (playing && !charging) {
      startPaymentStream(account)
      setCharging(true)
    } else if (!playing && charging) {
      stopPaymentStream(account)
      setCharging(false)
    }
  }, [playing])

  return account ? (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      <div className="bg-gray-50 px-4 py-4 sm:px-6">
        <ReactHowler src={["quedate-8-8.ogg", "quedate-8-8.mp3"]} playing={playing} />

        <span className="relative z-0 inline-flex shadow-sm rounded-md">
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {"<"}
          </button>
          <button
            type="button"
            className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            onClick={() => {
              playing ? setPlaying(false) : setPlaying(true)
            }}
          >
            <img
              className="bg-black h-8 w-auto"
              src={playing ? "/pause.svg" : "play.svg"}
              alt="Workflow"
            />
          </button>
          <button
            type="button"
            className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {">"}
          </button>
        </span>

        {/* Content goes here */}
        {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
      </div>
    </div>
  ) : (
    <p>Please Connect</p>
  )
}
