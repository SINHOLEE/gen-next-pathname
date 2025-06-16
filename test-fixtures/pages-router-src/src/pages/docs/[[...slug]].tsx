import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

type Props = {
  slug: string[]
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const slug = params?.slug as string[] || []
  return {
    props: {
      slug
    }
  }
}

export default function DocsPage({ slug }: Props) {
  const router = useRouter()    
  const path = slug.join('/')

  return (
    <>
      <Head>
        <title>Documentation: {path || 'Home'}</title>
        <meta name="description" content={`Documentation for ${path || 'home page'}`} />
      </Head>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Documentation</h1>
        <div className="space-y-2">
          <p className="text-gray-300">Current path: {path || 'home'}</p>
          <p className="text-gray-300">This is an optional catch-all route example.</p>
        </div>
      </div>
    </>
  )
} 