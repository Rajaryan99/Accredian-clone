'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function StatsPage() {
  return (
    <div id="stats" className="w-full scroll-mt-24">
     
      <div className="">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why These Numbers Matter</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-blue-600">Quality Training</h3>
                <p className="text-gray-600">
                  Our metrics reflect the quality and impact of our training programs. We focus on delivering measurable results for every organization we partner with.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-blue-600">Proven Success</h3>
                <p className="text-gray-600">
                  The growing number of professionals trained and engaged learners demonstrates our commitment to excellence and continuous improvement in corporate education.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
