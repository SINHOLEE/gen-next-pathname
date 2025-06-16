import { Metadata } from 'next'

type Props = {
  params: {
    userId: string
    postId: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `User ${params.userId}'s Post ${params.postId}`,
  }
}

export default function UserPost({ params }: Props) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        User {params.userId}&apos;s Post {params.postId}
      </h1>
      <p>This is a nested dynamic route example.</p>
    </div>
  )
} 