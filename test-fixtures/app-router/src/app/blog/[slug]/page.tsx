import { Metadata } from 'next'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Blog Post: ${params.slug}`,
  }
}

export default function BlogPost({ params }: Props) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Post: {params.slug}</h1>
      <p>This is a dynamic blog post page.</p>
    </div>
  )
} 