import { Head, BlitzLayout } from "blitz"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "calliope"}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      {children}
    </>
  )
}

export default Layout
