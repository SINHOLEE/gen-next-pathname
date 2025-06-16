import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  timestamp: string
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      timestamp: new Date().toISOString()
    }
  }
}

export default function PricingPage({ timestamp }: Props) {
  return (
    <>
      <Head>
        <title>Pricing</title>
        <meta name="description" content="View our pricing plans" />
      </Head>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Pricing</h1>
        <div className="space-y-4">
          <p className="text-gray-300">This is the pricing page in the marketing group.</p>
          <p className="text-sm text-gray-400">Last updated: {timestamp}</p>
          <div className="flex space-x-4">
            <Link href="/marketing/about" className="text-blue-400 hover:text-blue-300">
              About Us
            </Link>
            <Link href="/marketing/contact" className="text-blue-400 hover:text-blue-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
} 