import Link from 'next/link';
import { CheckCircleIcon, ClockIcon, DocumentTextIcon, UserGroupIcon, PhoneIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Same-Day Eligibility',
    description: 'Get instant eligibility verification for your patients',
    icon: ClockIcon,
  },
  {
    title: 'E-Fax Prescriptions',
    description: 'Send prescriptions directly through our secure e-fax system',
    icon: DocumentTextIcon,
  },
  {
    title: 'Patient Portal',
    description: 'Track patient status and manage referrals in real-time',
    icon: UserGroupIcon,
  },
  {
    title: 'Dedicated Support',
    description: 'Get dedicated support for your practice and patients',
    icon: PhoneIcon,
  },
];

const benefits = [
  'Keep your staff focused on patient care',
  'Reduce administrative burden',
  'Improve patient satisfaction',
  'Streamline referral process',
  'Real-time status updates',
  'HIPAA-compliant platform',
];

const referralKit = [
  {
    name: 'Provider Referral Form',
    description: 'Streamlined form for patient referrals',
    type: 'PDF',
  },
  {
    name: 'Insurance Coverage Guide',
    description: 'Quick reference for coverage requirements',
    type: 'PDF',
  },
  {
    name: 'Patient Education Materials',
    description: 'Educational resources for your patients',
    type: 'PDF',
  },
  {
    name: 'E-Fax Cover Sheet',
    description: 'Secure prescription transmission template',
    type: 'PDF',
  },
];

const portalFeatures = [
  {
    title: 'Patient Management',
    description: 'View all your referred patients in one dashboard',
    features: ['Patient status tracking', 'Insurance verification status', 'Document upload status', 'Communication history'],
  },
  {
    title: 'Prescription Management',
    description: 'Send and track prescriptions securely',
    features: ['E-fax integration', 'Prescription templates', 'Status tracking', 'Automated reminders'],
  },
  {
    title: 'Reporting & Analytics',
    description: 'Track your referral success and patient outcomes',
    features: ['Referral statistics', 'Success rates', 'Patient satisfaction', 'Performance metrics'],
  },
];

export default function ForClinicsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              For Healthcare Providers
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Same-day eligibility; e-fax RX; portal for status. Keep your staff focused on care—let us handle benefits & paperwork.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#demo"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Request Portal Demo
              </Link>
              <Link
                href="#referral-kit"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                Download Referral Kit <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Streamline Your Practice
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Let us handle the complex insurance work so you can focus on patient care
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose CGM Care?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We make it easy for healthcare providers to get their patients the supplies they need
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Referral Kit */}
      <div id="referral-kit" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Referral Kit Download
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Everything you need to start referring patients to CGM Care
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {referralKit.map((item) => (
              <div key={item.name} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                    {item.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <button className="w-full inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors">
                  <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portal Demo */}
      <div id="demo" className="bg-blue-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Portal Demo Request
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See how our provider portal can streamline your practice workflow
            </p>
          </div>
          <div className="mt-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="practice" className="block text-sm font-medium text-gray-700">
                    Practice Name
                  </label>
                  <input
                    type="text"
                    name="practice"
                    id="practice"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Tell us about your practice and how we can help..."
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                  >
                    Request Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Portal Features */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Provider Portal Features
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive tools to manage your patient referrals and streamline your workflow
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {portalFeatures.map((feature) => (
              <div key={feature.title} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to streamline your practice?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Join hundreds of healthcare providers who trust CGM Care to handle their patient referrals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#demo"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Request Demo
              </Link>
              <Link
                href="#referral-kit"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
              >
                Download Referral Kit <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
