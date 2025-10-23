import Link from 'next/link';
import { CheckCircleIcon, ShieldCheckIcon, ClockIcon, PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const accreditations = [
  {
    name: 'HIPAA Compliant',
    description: 'Fully compliant with HIPAA privacy and security standards',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Medicare Certified',
    description: 'Certified Medicare Part B supplier for diabetic supplies',
    icon: CheckCircleIcon,
  },
  {
    name: 'State Licensed',
    description: 'Licensed to operate in all 50 states',
    icon: MapPinIcon,
  },
];

const statesServed = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
  'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming'
];

const supportHours = [
  {
    day: 'Monday - Friday',
    hours: '8:00 AM - 8:00 PM EST',
  },
  {
    day: 'Saturday',
    hours: '9:00 AM - 5:00 PM EST',
  },
  {
    day: 'Sunday',
    hours: '10:00 AM - 4:00 PM EST',
  },
];

const contactInfo = [
  {
    type: 'Phone',
    value: '1-800-CGM-CARE',
    icon: PhoneIcon,
    description: 'Call us for immediate assistance',
  },
  {
    type: 'Email',
    value: 'support@cgmcare.com',
    icon: EnvelopeIcon,
    description: 'Email us for non-urgent inquiries',
  },
  {
    type: 'Address',
    value: '123 Healthcare Ave, Suite 100\nMedical City, MC 12345',
    icon: MapPinIcon,
    description: 'Our headquarters location',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About CGM Care
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Trusted by 50k+ patients nationwide. We're committed to making diabetes management easier and more accessible.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/check-coverage"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="#contact"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                Contact Us <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-8">
              Trusted & Accredited
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {accreditations.map((accreditation) => (
                <div key={accreditation.name} className="flex flex-col items-center">
                  <div className="flex items-center space-x-2 text-blue-600">
                    <accreditation.icon className="h-8 w-8" />
                    <span className="text-xl font-bold">{accreditation.name}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 text-center">{accreditation.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              To make diabetes management easier and more accessible by handling the complex insurance work so you can focus on your health.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <CheckCircleIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">50k+ Patients Served</h3>
              <p className="mt-2 text-sm text-gray-600">
                We've helped thousands of patients get the supplies they need to manage their diabetes.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                <ClockIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">1 Day Benefits Verification</h3>
              <p className="mt-2 text-sm text-gray-600">
                We verify your insurance benefits within 1 business day, keeping you informed every step of the way.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                <ShieldCheckIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">HIPAA Compliant</h3>
              <p className="mt-2 text-sm text-gray-600">
                Your privacy and security are our top priorities. We're fully HIPAA compliant and secure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* States Served */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nationwide Coverage
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We serve patients in all 50 states with local support and fast shipping.
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {statesServed.map((state) => (
                <div key={state} className="bg-white rounded-md px-3 py-2 text-center text-sm font-medium text-gray-900 shadow-sm">
                  {state}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Support Hours */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Support Hours
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our dedicated support team is here to help you when you need it most.
            </p>
          </div>
          <div className="mt-16">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
              <div className="space-y-4">
                {supportHours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">{schedule.day}</span>
                    <span className="text-sm text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div id="contact" className="bg-blue-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get in touch with our support team for any questions or assistance.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {contactInfo.map((contact) => (
              <div key={contact.type} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <contact.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{contact.type}</h3>
                <p className="mt-2 text-sm text-gray-600 whitespace-pre-line">{contact.value}</p>
                <p className="mt-1 text-xs text-gray-500">{contact.description}</p>
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
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Join thousands of patients who trust CGM Care for their diabetes management needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/check-coverage"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Check Coverage Now
              </Link>
              <Link
                href="/patient-portal"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
              >
                Patient Portal <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
