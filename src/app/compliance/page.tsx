import Link from 'next/link';
import { ShieldCheckIcon, DocumentTextIcon, LockClosedIcon, EyeIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const complianceSections = [
  {
    id: 'hipaa',
    title: 'HIPAA Notice of Privacy Practices',
    icon: ShieldCheckIcon,
    content: {
      overview: 'We are committed to protecting the privacy and security of your protected health information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA).',
      keyPoints: [
        'We use and disclose PHI only as necessary for treatment, payment, and healthcare operations',
        'You have the right to access, amend, and request restrictions on your PHI',
        'We maintain administrative, physical, and technical safeguards to protect your information',
        'We will notify you of any breach of unsecured PHI',
        'You may file a complaint with us or the Department of Health and Human Services',
      ],
      contact: 'For questions about our privacy practices, contact our Privacy Officer at privacy@cgmcare.com or 1-800-CGM-CARE.',
    },
  },
  {
    id: 'tcpa',
    title: 'TCPA Disclosure',
    icon: DocumentTextIcon,
    content: {
      overview: 'By providing your phone number and checking the consent box, you agree to receive calls and text messages from CGM Care and our partners.',
      keyPoints: [
        'Calls may be made using automated dialing systems and prerecorded messages',
        'Text messages may be sent to the number you provide',
        'You may opt out at any time by replying STOP to text messages or calling us',
        'Message and data rates may apply',
        'Consent is not required as a condition of purchase',
      ],
      contact: 'To opt out of communications, call 1-800-CGM-CARE or email optout@cgmcare.com.',
    },
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    icon: LockClosedIcon,
    content: {
      overview: 'This privacy policy describes how we collect, use, and protect your personal information when you use our services.',
      keyPoints: [
        'We collect information you provide directly to us and through your use of our services',
        'We use cookies and similar technologies to improve your experience',
        'We may share information with service providers and business partners',
        'We implement appropriate security measures to protect your information',
        'We may update this policy from time to time',
      ],
      contact: 'For privacy questions, contact us at privacy@cgmcare.com.',
    },
  },
  {
    id: 'cookies',
    title: 'Cookie Policy',
    icon: EyeIcon,
    content: {
      overview: 'We use cookies and similar technologies to enhance your browsing experience and analyze website traffic.',
      keyPoints: [
        'Essential cookies are necessary for the website to function properly',
        'Analytics cookies help us understand how visitors use our website',
        'Marketing cookies are used to deliver relevant advertisements',
        'You can control cookie settings through your browser preferences',
        'Disabling cookies may affect website functionality',
      ],
      contact: 'For cookie-related questions, contact us at privacy@cgmcare.com.',
    },
  },
  {
    id: 'accessibility',
    title: 'Accessibility Statement',
    icon: ExclamationTriangleIcon,
    content: {
      overview: 'We are committed to ensuring digital accessibility for people with disabilities and strive to provide an accessible user experience.',
      keyPoints: [
        'We follow WCAG 2.2 AA guidelines for web accessibility',
        'Our website is designed to be compatible with assistive technologies',
        'We provide alternative text for images and proper heading structure',
        'We ensure sufficient color contrast and keyboard navigation support',
        'We welcome feedback on accessibility issues',
      ],
      contact: 'For accessibility concerns, contact us at accessibility@cgmcare.com or 1-800-CGM-CARE.',
    },
  },
];

const legalDocuments = [
  {
    name: 'Terms of Service',
    description: 'Terms and conditions for using our services',
    lastUpdated: 'December 1, 2024',
  },
  {
    name: 'Privacy Policy',
    description: 'How we collect, use, and protect your information',
    lastUpdated: 'December 1, 2024',
  },
  {
    name: 'HIPAA Notice',
    description: 'Your rights regarding protected health information',
    lastUpdated: 'December 1, 2024',
  },
  {
    name: 'Cookie Policy',
    description: 'Information about our use of cookies and tracking',
    lastUpdated: 'December 1, 2024',
  },
];

export default function CompliancePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Compliance & Legal
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your privacy and security are our top priorities. Learn about our compliance with HIPAA, TCPA, and other regulations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#hipaa"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                View HIPAA Notice
              </Link>
              <Link
                href="#privacy"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                Privacy Policy <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Sections */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {complianceSections.map((section) => (
              <div key={section.id} id={section.id} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  <section.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-600 mb-6">{section.content.overview}</p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Points:</h3>
                  <ul className="space-y-2 mb-6">
                    {section.content.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      <strong>Contact:</strong> {section.content.contact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legal Documents */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Legal Documents
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Download our legal documents and policies
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {legalDocuments.map((document) => (
              <div key={document.name} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{document.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{document.description}</p>
                <p className="text-xs text-gray-500 mb-4">Last updated: {document.lastUpdated}</p>
                <button className="w-full inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors">
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Security */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Data Security & Protection
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We implement industry-standard security measures to protect your information
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <LockClosedIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Encryption</h3>
              <p className="mt-2 text-sm text-gray-600">
                All data is encrypted in transit and at rest using industry-standard encryption protocols.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                <ShieldCheckIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Access Controls</h3>
              <p className="mt-2 text-sm text-gray-600">
                Strict access controls ensure only authorized personnel can access your information.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                <EyeIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Audit Logs</h3>
              <p className="mt-2 text-sm text-gray-600">
                Comprehensive audit logs track all access and modifications to your data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact for Compliance */}
      <div className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Questions About Compliance?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our compliance team is here to answer any questions about our policies and practices.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Link
                href="mailto:compliance@cgmcare.com"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Email Compliance Team
              </Link>
              <Link
                href="tel:1-800-CGM-CARE"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                Call 1-800-CGM-CARE <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Your privacy and security are protected. Check your coverage with confidence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/check-coverage"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Check Coverage Now
              </Link>
              <Link
                href="/about#contact"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
              >
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
