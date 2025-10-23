import Link from 'next/link';

const navigation = {
  main: [
    { name: 'Coverage', href: '/check-coverage' },
    { name: 'CGM', href: '/cgm' },
    { name: 'Supplies', href: '/supplies' },
    { name: 'Pumps & Sensors', href: '/pumps-sensors' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'For Clinics', href: '/for-clinics' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/compliance#privacy' },
    { name: 'HIPAA Notice', href: '/compliance#hipaa' },
    { name: 'Terms of Service', href: '/compliance#terms' },
    { name: 'Accessibility', href: '/compliance#accessibility' },
  ],
  support: [
    { name: 'Patient Portal', href: '/patient-portal' },
    { name: 'Contact Support', href: '/about#contact' },
    { name: 'FAQ', href: '/cgm#faq' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-bold text-white">CGM Care</span>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                HIPAA-compliant diabetes management platform trusted by 50,000+ patients nationwide.
              </p>
              <div className="text-sm text-gray-400">
                <p className="mb-1">✓ Benefits verified within 1 business day</p>
                <p className="mb-1">✓ Medicare Part B coverage</p>
                <p>✓ 24/7 patient support</p>
              </div>
            </div>

            {/* Main Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support</h3>
              <ul className="space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
              <ul className="space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>
                By clicking 'Check Coverage,' you agree to our Privacy Policy and authorize us and our partners to contact you at the number provided (including via autodialer, prerecorded message, and text). Consent not required for purchase.
              </p>
            </div>
            <div className="text-sm text-gray-400">
              <p>&copy; 2024 CGM Care. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
