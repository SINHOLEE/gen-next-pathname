import { GetServerSideProps } from 'next'
import Head from 'next/head'

type Props = {
  userId: string
  postId: string
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const userId = params?.userId as string
  const postId = params?.postId as string
  return {
    props: {
      userId,
      postId
    }
  }
}

export default function UserPostPage({ userId, postId }: Props) {
  return (
    <>
      <Head>
        <title>User {userId}'s Post {postId}</title>
        <meta name="description" content={`View post ${postId} by user ${userId}`} />
      </Head>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">User Post Page</h1>
        <div className="space-y-2">
          <p className="text-gray-300">User ID: {userId}</p>
          <p className="text-gray-300">Post ID: {postId}</p>
        </div>
      </div>
    </>
  )
} 