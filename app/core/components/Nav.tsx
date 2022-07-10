import { Fragment, Suspense, useEffect, useState } from "react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/solid"
import { useEthers } from "@usedapp/core"

import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import Spinner from "./Spinner"
import { classNames } from "app/utils/helper"
import { ConnectWalletButton } from "./ConnectWalletButton"

const navigation = [{ name: "Dashboard", href: "#", current: true }]

// const WalletAddress = () => {
//   const { account } = useEthers()
//   return (
//     <div className={classNames("w-20", account ? "text-white" : "text-red-400")}>
//       <p className="text-clip overflow-hidden ...">{account ? account : "not connected"}</p>
//     </div>
//   )
// }

export default function Nav() {
  const { account, deactivate } = useEthers()
  const userNavigation = [
    {
      name: `Your address: ${(account || "").substring(0, 5) + "..."}`,
      title: account,
      href: "#",
    },
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
                  <img
                    className="sm:hidden block lg:hidden h-8 w-auto"
                    src="/favicon.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="">
                  <img
                    className="text-gray-600 lg:block h-6 w-auto"
                    src="/minimizer.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <img className="hidden lg:block h-8 w-auto" src="/logo.svg" alt="Workflow" />

                    {/* <img
                      className="hidden lg:block h-8 w-auto"
                      src="/minimizer.svg"
                      alt="Workflow"
                    /> */}

                    {/* {navigation.map((item) => (
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
                    ))} */}
                  </div>
                </div>
              </div>

              <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                {/* Profile dropdown */}
                {!account ? (
                  <ConnectWalletButton />
                ) : (
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="flex btn focus:outline-none">
                        <span className="sr-only">Open user menu</span>
                        {account ? "Wallet" : "Connect"}
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
                                title={item.title}
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
          <div className="sm:hidden">
            <img className="hidden lg:block h-8 w-auto" src="/minimizer.svg" alt="Workflow" />
          </div>
          {/* <Disclosure.Panel className="sm:hidden">
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
          </Disclosure.Panel> */}
        </>
      )}
    </Disclosure>
  )
}
