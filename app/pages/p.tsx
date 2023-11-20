import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Player } from "app/core/components/Player"

const P: BlitzPage = () => {
  return (
    <div className="container">
      <span className="inline-block align-top ...">
        <Player />
      </span>
    </div>
  )
}

P.suppressFirstRenderFlicker = true
P.getLayout = (page) => <Layout title="P">{page}</Layout>

export default P
