import { FunctionComponent, Suspense } from "react"
import { useEthers } from "@usedapp/core"
import Spinner from "./Spinner"
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/solid"
import { classNames } from "app/utils/helper"

export const ConnectWalletButton = () => {
  const { account, activateBrowserWallet } = useEthers()

  return (
    <Suspense fallback={<Spinner className="text-yellow-500" />}>
      <div
        className={classNames(
          // "h-8 w-8 rounded-full"
          "btn rounded-full"
        )}
        onClick={account ? () => undefined : activateBrowserWallet} // onClick only to connect
      >
        {account ? "Wallet" : "Connect"}
      </div>
    </Suspense>
  )
}

// export const ConnectWalletButton = () => {
//   const { account, activateBrowserWallet, deactivate } = useEthers()

//   return (
//     <div>
//       <Suspense fallback={<Spinner className="text-yellow-500" />}>
//         <div className="h-8 w-8 rounded-full " aria-hidden="true">
//           <div
//             className={classNames(
//               account ? "text-green-600" : "text-red-300",
//               // "h-8 w-8 rounded-full"
//               "btn rounded-full"
//             )}
//             onClick={account ? () => undefined : activateBrowserWallet} // onClick only to connect
//           >
//             {/* {account ? <LockOpenIcon /> : <LockClosedIcon />} */}
//             {account ? "Wallet" : "Connect"}
//           </div>
//         </div>
//       </Suspense>
//     </div>
//   )
// }
