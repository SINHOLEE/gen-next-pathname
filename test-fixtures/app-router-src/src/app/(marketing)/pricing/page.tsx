import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Choose the right plan for your needs',
}

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Pricing Plans</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Basic</h2>
          <p className="text-3xl font-bold mb-4">$9<span className="text-lg text-gray-500">/month</span></p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Feature 1
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Feature 2
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Feature 3
            </li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="border rounded-lg p-6 shadow-sm border-blue-500">
          <h2 className="text-xl font-semibold mb-4">Pro</h2>
          <p className="text-3xl font-bold mb-4">$29<span className="text-lg text-gray-500">/month</span></p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Everything in Basic
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Pro Feature 1
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Pro Feature 2
            </li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Enterprise</h2>
          <p className="text-3xl font-bold mb-4">$99<span className="text-lg text-gray-500">/month</span></p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Everything in Pro
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Enterprise Feature 1
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Enterprise Feature 2
            </li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Contact Sales
          </button>
        </div>
      </div>

      <section className="border p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Route Groups</h2>
        <div className="space-y-2">
          <Link 
            href="/about" 
            className="block text-blue-500 hover:underline"
          >
            /about (Marketing Group)
          </Link>
          <Link 
            href="/contact" 
            className="block text-blue-500 hover:underline"
          >
            /contact (Marketing Group)
          </Link>
          <Link 
            href="/pricing" 
            className="block text-blue-500 hover:underline"
          >
            /pricing (Marketing Group)
          </Link>
        </div>
      </section>
    </div>
  )
} 