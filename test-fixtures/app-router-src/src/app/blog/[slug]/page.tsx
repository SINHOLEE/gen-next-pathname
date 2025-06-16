import { Metadata } from 'next'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `Blog Post: ${slug}`,
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Post: {slug}</h1>
      <p>This is a dynamic blog post page.</p>
    </div>
  )
} 