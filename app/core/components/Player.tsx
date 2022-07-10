import ReactHowler from "react-howler"
import SuperfluidClient from "app/utils/SuperfluidClient"
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

const flowRate = 100

// const superfluidClient = SuperfluidClient as any
const client = new SuperfluidClient()

async function startPaymentStream(account) {
  client.superTokenCreateFlow(
    getMumbaiTestnetProvider(),
    ourDAIxTestContractAddress(),
    account,
    ourReceiverTestWallet(),
    flowRate
  )
}

async function stopPaymentStream(account) {
  client.deleteFlow(
    getMumbaiTestnetProvider(),
    account,
    ourReceiverTestWallet(),
    ourDAIxTestContractAddress
  )
}

export const Player = () => {
  const [playing, setPlaying] = useState(false)
  const [charging, setCharging] = useState(false)

  const { account } = useEthers()

  useEffect(() => {
    setPlaying(true)
  }, [])

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
    <ReactHowler src={["quedate-8-8.ogg", "quedate-8-8.mp3"]} playing={playing} />
  ) : (
    <p>Please Connect</p>
  )
}
