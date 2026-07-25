'use client'

import { useState } from 'react'

const faqData = [
  {
    category: 'About the Course',
    questions: [
      {
        q: 'What types of corporate training programs does Accredian offer?',
        a: 'We offer customized programs including leadership development, technical skills, innovation workshops, and domain-specific training across multiple industries.'
      },
      {
        q: 'How long do your training programs typically last?',
        a: 'Program duration varies based on content and organizational needs, ranging from half-day workshops to multi-month certification programs.'
      },
      {
        q: 'Can programs be customized for our specific industry?',
        a: 'Absolutely! All our programs can be tailored to match your industry, organizational structure, and specific business challenges.'
      }
    ]
  },
  {
    category: 'About the Delivery',
    questions: [
      {
        q: 'Do you offer both online and offline training?',
        a: 'Yes, we provide flexible delivery options including online learning, in-person training, and blended approaches to suit your needs.'
      },
      {
        q: 'What is your learning management system (LMS)?',
        a: 'We use state-of-the-art LMS technology that supports interactive content, progress tracking, and seamless learning experiences.'
      },
      {
        q: 'How do you ensure engagement in virtual training sessions?',
        a: 'Our virtual programs include interactive elements, live facilitation, breakout sessions, and regular assessments to maintain engagement.'
      }
    ]
  },
  {
    category: 'Miscellaneous',
    questions: [
      {
        q: 'What kind of support do you provide post-training?',
        a: 'We offer ongoing support including access to resources, alumni networks, and follow-up consultation sessions.'
      },
      {
        q: 'How do you measure training effectiveness?',
        a: 'We use comprehensive assessment methods including knowledge tests, practical assignments, and organizational impact metrics.'
      },
      {
        q: 'Can we track employee progress?',
        a: 'Yes, our LMS provides detailed reporting and analytics to track individual and team progress throughout the program.'
      }
    ]
  }
]

interface ExpandedState {
  [key: string]: boolean;
}

export default function FAQsPage() {
  const [expanded, setExpanded] = useState<ExpandedState>({})

  const toggleExpand = (key: string) => {
    setExpanded(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div id="faqs" className="w-full scroll-mt-24">
      <div className="">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="space-y-3 sticky top-24">
                  {/* {faqData ((section) => (
                    <a
                      key={section.category}
                      href={`#${section.category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block p-3 text-gray-700 hover:text-blue-600 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      {section.category}
                    </a>
                  ))} */}
                </div>
              </div>

              <div className="lg:col-span-3 space-y-8">
                {faqData.map((section) => (
                  <div
                    key={section.category}
                    id={section.category.toLowerCase().replace(/\s+/g, '-')}
                    className="space-y-4"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h2>
                    <div className="space-y-4">
                      {section.questions.map((item, idx) => {
                        const key = `${section.category}-${idx}`
                        return (
                          <div
                            key={key}
                            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                          >
                            <button
                              onClick={() => toggleExpand(key)}
                              className="w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                            >
                              <h3 className="font-semibold text-gray-900">{item.q}</h3>
                              <span
                                className={`ml-2 transform transition-transform ${
                                  expanded[key] ? 'rotate-180' : ''
                                }`}
                              >
                                ▼
                              </span>
                            </button>
                            {expanded[key] && (
                              <div className="p-4 bg-gray-50 border-t border-gray-200">
                                <p className="text-gray-700 leading-relaxed">{item.a}</p>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
