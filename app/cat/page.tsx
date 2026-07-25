'use client'


export default function CATPage() {
  return (
    <div id="cat" className="w-full scroll-mt-24">
      <div className=" ">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Our Proven Approach to Learning Excellence</h1>
            
            {/* Concept-Application-Tools Framework */}
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Concept',
                    desc: 'Foundational knowledge for deep subject understanding.',
                    icon: '💭'
                  },
                  {
                    title: 'Application',
                    desc: 'Practical implementation through real-world scenarios.',
                    icon: '⚙️'
                  },
                  {
                    title: 'Tools',
                    desc: 'Resources and techniques for effective skill mastery.',
                    icon: '🛠️'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-white p-12 rounded-lg border-l-4 border-blue-600">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Delivery Model</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-blue-600">Online Learning</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Self-paced modules</li>
                      <li>✓ Interactive content</li>
                      <li>✓ 24/7 accessibility</li>
                      <li>✓ Virtual support</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-blue-600">Offline Programs</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ In-person training</li>
                      <li>✓ Interactive workshops</li>
                      <li>✓ Direct mentorship</li>
                      <li>✓ Networking events</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
