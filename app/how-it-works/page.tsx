'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function HowItWorksPage() {
  return (
    <div id="how-it-works" className="w-full scroll-mt-24">
      <div className="">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">
              How We <span className="text-blue-600">Deliver Results That Matter?</span>
            </h1>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">1</div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">Skill Gap Analysis</h2>
                  <p className="text-lg text-gray-600">
                    We assess your team&apos;s current capabilities and identify skill gaps. Our comprehensive analysis helps us understand your organization&apos;s unique needs and challenges.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">2</div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">Customized Training Plan</h2>
                  <p className="text-lg text-gray-600">
                    Based on our analysis, we create a tailored roadmap that addresses your organizational goals. Every program is designed with your success in mind.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">3</div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">Flexible Program Delivery</h2>
                  <p className="text-lg text-gray-600">
                    We deliver adaptable programs aligned with your specific needs, whether online, offline, or blended. Our expert facilitators ensure optimal learning outcomes.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-blue-50 p-12 rounded-lg mt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Approach?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Personalized attention to organizational goals',
                    'Expert-led training with real-world insights',
                    'Flexible delivery options',
                    'Measurable learning outcomes',
                    'Ongoing support and feedback',
                    'Scalable solutions for growth'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-blue-600 text-xl">✓</div>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
