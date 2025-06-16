import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

export default function HomePage({ timestamp }: Props) {
  return (
    <>
      <Head>
        <title>Next.js Routing Examples</title>
        <meta name="description" content="Examples of Next.js routing patterns" />
      </Head>
      <div className="space-y-8">
        <p className="text-sm text-gray-400">Last updated: {timestamp}</p>

        {/* Dynamic Routes */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Dynamic Routes</h2>
          <div className="space-y-2">
            <Link href="/blog/first-post" className="block text-blue-400 hover:text-blue-300">
              Blog Post: first-post
            </Link>
            <Link href="/blog/second-post" className="block text-blue-400 hover:text-blue-300">
              Blog Post: second-post
            </Link>
          </div>
        </section>

        {/* Optional Catch-all Routes */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Optional Catch-all Routes</h2>
          <div className="space-y-2">
            <Link href="/docs" className="block text-blue-400 hover:text-blue-300">
              Docs Home
            </Link>
            <Link href="/docs/getting-started" className="block text-blue-400 hover:text-blue-300">
              Getting Started
            </Link>
            <Link href="/docs/advanced/features" className="block text-blue-400 hover:text-blue-300">
              Advanced Features
            </Link>
          </div>
        </section>

        {/* Nested Dynamic Routes */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Nested Dynamic Routes</h2>
          <div className="space-y-2">
            <Link href="/users/1/posts/1" className="block text-blue-400 hover:text-blue-300">
              User 1's Post 1
            </Link>
            <Link href="/users/1/posts/2" className="block text-blue-400 hover:text-blue-300">
              User 1's Post 2
            </Link>
            <Link href="/users/2/posts/1" className="block text-blue-400 hover:text-blue-300">
              User 2's Post 1
            </Link>
          </div>
        </section>

        {/* Marketing Group */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Marketing Group</h2>
          <div className="space-y-2">
            <Link href="/marketing/about" className="block text-blue-400 hover:text-blue-300">
              About Us
            </Link>
            <Link href="/marketing/contact" className="block text-blue-400 hover:text-blue-300">
              Contact Us
            </Link>
            <Link href="/marketing/pricing" className="block text-blue-400 hover:text-blue-300">
              Pricing
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
