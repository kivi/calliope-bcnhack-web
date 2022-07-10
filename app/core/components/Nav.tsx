import { Fragment, Suspense, useEffect, useState } from "react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/solid"
import { useEthers } from "@usedapp/core"

import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import Spinner from "./Spinner"
import { classNames } from "app/utils/helper"
import { ConnectWalletButton } from "./ConnectWalletButton"
// import { ConnectWalletButton } from "./ConnectWalletButton"

// import ethers from "ethers"
// import Modal from "./Modal"

// const provider =
//   typeof window !== "undefined"
//     ? new ethers.providers.Web3Provider((window as any).Ethereum)
//     : undefined

// const WalletCard = () => {
//   const [open, setOpen] = useState(true)

//   const [errorMessage, setErrorMessage] = useState(null)
//   const [defaultAccount, setDefaultAccount] = useState(null)
//   const [userBalance, setUserBalance] = useState(null)
//   const connectwalletHandler = () => {
//     if ((window as any).Ethereum) {
//       provider.send("eth_requestAccounts", []).then(async () => {
//         await accountChangedHandler(provider.getSigner())
//       })
//     } else {
//       setOpen(true)
//       return (
//         <Modal
//           open={open}
//           setOpen={setOpen}
//           title="Please Install Metamask!!!"
//           buttonTitle="Ok, thanks."
//           children={<></>}
//         ></Modal>
//       )
//     }
//   }
//   const accountChangedHandler = async (newAccount) => {
//     const address = await newAccount.getAddress()
//     setDefaultAccount(address)
//     const balance = await newAccount.getBalance()
//     setUserBalance((ethers.utils as any).formatEther(balance))
//     await getuserBalance(address)
//   }
//   const getuserBalance = async (address) => {
//     const balance = await provider.getBalance(address, "latest")
//   }

//   return (
//     <div className="WalletCard">
//       <img src={""} className="App-logo" alt="logo" />
//       <h3 className="h4">Welcome to a decentralized Application</h3>

//       <WalletCard />

//       <button
//         type="button"
//         className={classNames(
//           defaultAccount ? "#A5CC82" : "white",
//           "inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
//         )}
//         onClick={connectwalletHandler}
//       >
//         {defaultAccount ? "Connected!!" : "Connect"}
//       </button>
//       <div className="displayAccount">
//         <h4 className="walletAddress">Address:{defaultAccount}</h4>
//         <div className="balanceDisplay">
//           <h3>Wallet Amount: {userBalance}</h3>
//         </div>
//       </div>
//       {errorMessage}
//     </div>
//   )
// }

const navigation = [{ name: "Dashboard", href: "#", current: true }]
const WalletAddress = () => {
  const { account } = useEthers()
  return (
    <div className={classNames("w-20", account ? "text-white" : "text-red-400")}>
      <p className="text-clip overflow-hidden ...">{account ? account : "not connected"}</p>
    </div>
  )
}

// const WalletDropdownItems = ({ account, deactivate }) => {
//   const userNavigation = [
//     { name: "Your Profile", href: "#" },
//     { name: "Sign out", onClick: deactivate },
//   ]

//   return (
//     <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//       {userNavigation.map((item) => (
//         <Menu.Item key={item.name}>
//           !item.onclick ?
//           <a href={item.href} className={classNames("block px-4 py-2 text-sm text-gray-700")}>
//             {item.name}
//           </a>
//           :
//           <button
//             onClick={item.onClick}
//             className={classNames("block px-4 py-2 text-sm text-gray-700")}
//           >
//             {item.name}
//           </button>
//         </Menu.Item>
//       ))}
//     </Menu.Items>
//   )
// }

// const WalletDropdown = ({ isSmall = false }) => {
//   const { account, deactivate } = useEthers()
//   const userNavigation = [
//     { name: "Your Profile", href: "#" },
//     { name: "Sign out", onClick: deactivate },
//   ]

//   return account ? (
//     <Menu as="div" className="ml-3 relative">
//       <div>
//         <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
//           <span className="sr-only">Open user menu</span>
//           <ConnectWalletButton />
//         </Menu.Button>
//       </div>
//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//           {userNavigation.map((item) => (
//             <Menu.Item key={item.name}>
//               <a href={item.href} className={classNames("block px-4 py-2 text-sm text-gray-700")}>
//                 {item.name}
//               </a>
//               ))
//             </Menu.Item>
//           ))}
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   ) : (
//     <></>
//   )
// }

// let signer: ethers.Signer

// async function connect() {
//   // A Web3Provider wraps a standard Web3 provider, which is
//   // what MetaMask injects as window.ethereum into each page
//   const provider = new ethers.providers.Web3Provider(window.ethereum)

//   // MetaMask requires requesting permission to connect users accounts
//   await provider.send("eth_requestAccounts", [])

//   // The MetaMask plugin also allows signing transactions to
//   // send ether and pay to change state within the blockchain.
//   // For this, you need the account signer...
//   signer = provider.getSigner()
// }

// function LogggedInIcon() {
//   const currentUser = useCurrentUser()
//   const loggedIn = !!currentUser?.id

//   return (
//     <div className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
//       <Suspense fallback={<Spinner className="text-yellow-500" />}>
//         <div className="block h-6 w-6 " aria-hidden="true">
//           {loggedIn ? <LockOpenIcon /> : <LockClosedIcon />}
//         </div>
//       </Suspense>
//     </div>
//   )
// }

// import { Mainnet } from "@usedapp/core/modal/chain/ethereum"
// import { useEthers, useEtherBalance } from "@usedapp/core"

// const config = {
//   readOnlyChainId: Mainnet.chainId,
//   readOnlyUrls: {
//     [Mainnet.chainId]: "https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934",
//   },
// }

// const STAKING_CONTRACT = "0x00000000219ab540356cBB839Cbe05303d7705Fa"

// export function Wallet() {
//   const { activateBrowserWallet, deactivate, account } = useEthers()
//   const userBalance = useEtherBalance(account)
//   const stakingBalance = useEtherBalance(STAKING_CONTRACT)

//   return (
//     <DAppProvider config={config}>
//       <div>
//         {!account && <button onClick={activateBrowserWallet}> Connect </button>}
//         {account && <button onClick={deactivate}> Disconnect </button>}
//         {stakingBalance && <p>ETH2 staking balance: {formatEther(stakingBalance)} ETH </p>}
//         {account && <p>Account: {account}</p>}
//         {userBalance && <p>Ether balance: {formatEther(userBalance)} ETH </p>}
//       </div>
//     </DAppProvider>
//   )
// }

export default function Nav() {
  const { account, deactivate } = useEthers()
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Sign out", onClick: deactivate },
  ]

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img className="block lg:hidden h-8 w-auto" src="/favicon.svg" alt="Workflow" />
                  <img className="hidden lg:block h-8 w-auto" src="/logo.svg" alt="Workflow" />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="relative inline-flex items-center mx-4 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                  <span className="sr-only">short wallet address</span>
                  <WalletAddress />
                </div>
              </div>
              <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                {/* Profile dropdown */}
                {!account ? (
                  <ConnectWalletButton />
                ) : (
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <ConnectWalletButton />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                onClick={item.onClick}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
