import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about our company',
}

export default function AboutPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p>This is a page within the marketing route group.</p>
    </div>
  )
} 