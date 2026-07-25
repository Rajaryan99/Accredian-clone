'use client'


import { useState } from 'react'

const testimonials = [
  {
    company: 'ADP',
    logo: '📋',
    quote: 'We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.',
    author: 'Corporate Team'
  },
  {
    company: 'Bayer',
    logo: '🧪',
    quote: 'Accredian\'s commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.',
    author: 'HR Department'
  },
  {
    company: 'Reliance',
    logo: '🏢',
    quote: 'Exceptional training programs with measurable results. Accredian understands our business needs and delivers solutions that drive real impact across our organization.',
    author: 'Learning & Development'
  },
  {
    company: 'HCL',
    logo: '💻',
    quote: 'The expertise and professionalism of the Accredian team is outstanding. We have consistently benefited from their innovative approach to corporate training.',
    author: 'Talent Management'
  },
  {
    company: 'IBM',
    logo: '🖥️',
    quote: 'Our partnership with Accredian has been instrumental in developing our workforce. Their programs are well-designed and have resulted in significant skill improvements.',
    author: 'Corporate University'
  },
  {
    company: 'CRISIL',
    logo: '📊',
    quote: 'Accredian provides industry-leading training solutions. Their facilitators are knowledgeable and their curriculum is current and relevant to our industry.',
    author: 'Professional Development'
  }
]

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div id="testimonials" className="w-full scroll-mt-24">
      <div className=" ">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 text-center">
              Testimonials from <span className="text-blue-600">Our Partners</span>
            </h1>
            <p className="text-center text-xl text-gray-600 mb-16">
              What Our Clients Are Saying
            </p>

            {/* Featured Testimonial Carousel */}
            <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center text-4xl shadow-md">
                    {testimonials[currentIndex].logo}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-lg text-gray-700 mb-4 italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <p className="font-semibold text-gray-900">{testimonials[currentIndex].company}</p>
                  <p className="text-gray-600">{testimonials[currentIndex].author}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  ← Previous
                </button>
                <span className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  {currentIndex + 1} / {testimonials.length}
                </span>
                <button
                  onClick={next}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* All Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center text-2xl flex-shrink-0">
                      {testimonial.logo}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.company}</h3>
                      <p className="text-sm text-gray-600">{testimonial.author}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 line-clamp-3">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Satisfaction</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
                  <p className="text-gray-700">Client Satisfaction Rate</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">100+</div>
                  <p className="text-gray-700">Enterprise Clients</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">50K+</div>
                  <p className="text-gray-700">Professionals Trained</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
