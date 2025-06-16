import { Metadata } from 'next'
import Link from 'next/link'

type Props = {
  params: {
    slug?: string[]
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = params.slug 
    ? `Docs: ${params.slug.join('/')}`
    : 'Documentation'

  return {
    title,
  }
}

export default function DocsPage({ params }: Props) {
  const title = params.slug 
    ? `Docs: ${params.slug.join('/')}`
    : 'Documentation'

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p>This is an optional catch-all route example in App Router.</p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Available Routes:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>/docs (Root)</li>
          <li>/docs/getting-started</li>
          <li>/docs/advanced/configuration</li>
          <li>/docs/advanced/features/authentication</li>
        </ul>
      </div>
      <section className="border p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Optional Catch-all Routes</h2>
        <div className="space-y-2">
          <Link 
            href="/docs" 
            className="block text-blue-500 hover:underline"
          >
            /docs (Root)
          </Link>
          <Link 
            href="/docs/getting-started" 
            className="block text-blue-500 hover:underline"
          >
            /docs/getting-started
          </Link>
          <Link 
            href="/docs/advanced/configuration" 
            className="block text-blue-500 hover:underline"
          >
            /docs/advanced/configuration
          </Link>
        </div>
      </section>
    </div>
  )
} 