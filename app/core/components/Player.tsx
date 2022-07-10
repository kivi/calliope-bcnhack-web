import ReactHowler from "react-howler"
// import SuperfluidClient from "app/utils/SuperfluidClient"

import SuperfluidClient from "app/utils/superfluidcli"

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

const flowRate = 100000
// export const url = "https://eth-goerli.alchemyapi.io/v2/zfWv3pEito9Wi7gDUSLsand11To5VEjN"
// export const customHttpProvider = new providers.JsonRpcProvider(url)

export const Player = () => {
  // const superfluidClient = SuperfluidClient as any
  const client = new SuperfluidClient()

  const [playing, setPlaying] = useState(false)
  const [charging, setCharging] = useState(false)

  const { account, library } = useEthers()

  async function startPaymentStream(account) {
    client.superTokenCreateFlow(
      library,
      "0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f",
      account,
      ourReceiverTestWallet(),
      flowRate
    )
  }

  async function stopPaymentStream(account) {
    client.deleteFlow(library, account, ourReceiverTestWallet(), ourDAIxTestContractAddress)
  }

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
    <div className="overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
      <ReactHowler src={["quedate-8-8.ogg", "quedate-8-8.mp3"]} playing={playing} />

      <span className="relative z-0 inline-flex shadow-sm rounded-md">
        <button type="button" className="player-btn ">
          {/* {"<"} */}
        </button>
        <button
          type="button"
          className="player-btn -ml-px "
          onClick={() => {
            playing ? setPlaying(false) : setPlaying(true)
          }}
        >
          <img className="" src={playing ? "/pause.svg" : "play.svg"} alt="Workflow" />
        </button>
        <button type="button" className="player-btn -ml-px">
          {/* {">"} */}
        </button>
      </span>

      {/* Content goes here */}
      {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
    </div>
  ) : (
    <p>Please Connect</p>
  )
}
