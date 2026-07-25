'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="font-bold text-gray-900">accredian</span>
            </div>
            <p className="text-sm text-gray-600">Credentials that matter</p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              {['facebook', 'linkedin', 'twitter', 'instagram', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Accredian</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Blog</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Why Accredian</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-sm text-gray-600 mb-2">
              Email us: <a href="mailto:enterprise@accredian.com" className="text-blue-600 hover:underline">enterprise@accredian.com</a>
            </p>
            <p className="text-sm text-gray-600">
              Office Address: 4th Floor, 250, Phase IV,<br />Udyog Vihar, Sector 18, Gurugram, Haryana
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>© 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
