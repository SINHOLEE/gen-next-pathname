import { GetServerSideProps } from 'next'
import Head from 'next/head'

type Props = {
  slug: string
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const slug = params?.slug as string
  return {
    props: {
      slug
    }
  }
}

export default function BlogPost({ slug }: Props) {
  return (
    <>
      <Head>
        <title>Blog Post: {slug}</title>
        <meta name="description" content={`Read our blog post about ${slug}`} />
      </Head>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Blog Post: {slug}</h1>
        <p className="text-gray-300">This is a dynamic route example for blog posts.</p>
      </div>
    </>
  )
} 