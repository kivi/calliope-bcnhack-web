import { FunctionComponent, Suspense } from "react"
import { useEthers } from "@usedapp/core"
import Spinner from "./Spinner"
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/solid"
import { classNames } from "app/utils/helper"

export const ConnectWalletButton = ({ ref }) => {
  const { account, activateBrowserWallet, deactivate } = useEthers()

  return (
    <div ref={ref}>
      <Suspense fallback={<Spinner className="text-yellow-500" />}>
        <div className="h-8 w-8 rounded-full " aria-hidden="true">
          <div
            className={classNames(
              account ? "text-green-600" : "text-red-300",
              "h-8 w-8 rounded-full"
            )}
            onClick={account ? () => undefined : activateBrowserWallet} // onClick only to connect
          >
            {account ? <LockOpenIcon /> : <LockClosedIcon />}
          </div>
        </div>
      </Suspense>
    </div>
  )
}
