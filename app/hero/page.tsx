'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Next-Gen <span className="text-blue-600">Expertise</span> For Your <span className="text-blue-600">Enterprise</span>
              </h1>
              <p className="text-xl text-gray-600">
                Cultivate high-performance teams through expert learning.
              </p>
            </div>

            <div className="space-y-3">
              {[
                'Tailored Solutions',
                'Industry Insights',
                'Expert Guidance'
              ].map((benefit) => (
                <div key={benefit} className="flex items-center space-x-3">
                  <span className="w-5 h-5 text-green-500 font-bold">✓</span>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-fit"
            >
              Enquire Now
            </Link>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-200 to-blue-100 rounded-xl aspect-square flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl">👥</span>
                </div>
                <p className="text-gray-700 font-semibold">Professional Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
