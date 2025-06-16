import { Metadata } from 'next'

type Props = {
  params: Promise<{
    userId: string
    postId: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { userId, postId } = await params
  return {
    title: `User ${userId}'s Post ${postId}`,
    description: `View post ${postId} by user ${userId}`
  }
}

export default async function UserPostPage({ params }: Props) {
  const { userId, postId } = await params
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Post Page</h1>
      <div className="space-y-2">
        <p>User ID: {userId}</p>
        <p>Post ID: {postId}</p>
      </div>
    </div>
  )
} 