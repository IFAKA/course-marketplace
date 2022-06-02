
import Head from 'next/head'
import { Web3Provider } from "@components/providers"
import { Navbar, Footer } from "@components/ui/common"

export default function BaseLayout({children}) {
  return (
    <Web3Provider>
      <Head>
        <title>Growledge</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
        <div className="fit">
          {children}
        </div>
      </div>
      <Footer />
    </Web3Provider>
  )
}
