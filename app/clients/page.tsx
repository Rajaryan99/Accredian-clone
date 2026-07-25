'use client'



export default function ClientsPage() {
  return (
    <div id="clients" className="w-full scroll-mt-24">
   
      <div className="">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Trusted Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Enterprise Solutions</h3>
                <p className="text-gray-600 mb-4">
                  We partner with leading enterprises to deliver tailored training solutions that drive organizational growth and employee development.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Customized program design</li>
                  <li>✓ Dedicated support team</li>
                  <li>✓ Measurable ROI</li>
                  <li>✓ Scalable solutions</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Long-term Relationships</h3>
                <p className="text-gray-600 mb-4">
                  Our clients trust us for ongoing training needs because of our commitment to excellence and innovation in corporate education.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Industry expertise</li>
                  <li>✓ Continuous improvement</li>
                  <li>✓ Advanced technology</li>
                  <li>✓ Expert facilitation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
