import {
  AppProps,
  ErrorBoundary,
  ErrorComponent,
  AuthenticationError,
  AuthorizationError,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
} from "blitz"
import LoginForm from "app/auth/components/LoginForm"
import Nav from "app/core/components/Nav"
import "app/core/styles/main.css"
import { Suspense } from "react"

import { Mumbai, ChainId, Config, DAppProvider, useEthers } from "@usedapp/core"
import { getDefaultProvider } from "ethers"

// declare global {
//   interface Window {
//     ethereum: any
//   }
// }

const config: Config = {
  readOnlyChainId: ChainId.Mumbai, // ChainId.Polygon
  readOnlyUrls: {
    [Mumbai.chainId]: "https://rpc-mumbai.maticvigil.com/", // getDefaultProvider("testnet"),
  },
}

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  const { account } = useEthers()

  return (
    <>
      <Suspense fallback="loading ...">
        <DAppProvider config={config}>
          <Nav />
        </DAppProvider>
      </Suspense>

      <ErrorBoundary
        FallbackComponent={RootErrorFallback}
        onReset={useQueryErrorResetBoundary().reset}
      >
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundary>
    </>
  )
}

function RootErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <LoginForm onSuccess={resetErrorBoundary} />
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
    )
  }
}
