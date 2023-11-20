import { Suspense } from "react"
import { useEthers } from "@usedapp/core"
import { classNames } from "app/utils/helper"

export const BigLoginButton = () => {
  const { account, activateBrowserWallet } = useEthers()

  return (
    <div
      className={classNames(
        // "h-8 w-8 rounded-full"
        "btn rounded-full"
      )}
      onClick={account ? () => undefined : activateBrowserWallet} // onClick only to connect
    >
      <img className="lg:block h-8 w-auto" src="/metamask.svg" alt="Workflow" />
      {account ? "Wallet" : <button className="btn">connect your wallet</button>}
    </div>
  )
}
