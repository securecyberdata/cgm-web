import Link from 'next/link';
import { CheckCircleIcon, ClockIcon, ShieldCheckIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const devices = [
  {
    name: 'Dexcom G7',
    description: 'Latest generation with 10-day wear and improved accuracy',
    features: ['10-day wear', 'Real-time alerts', 'Smartphone app', 'Waterproof'],
  },
  {
    name: 'Dexcom G6',
    description: 'Proven reliability with 10-day wear and no fingerstick calibrations',
    features: ['10-day wear', 'No calibration needed', 'Share feature', 'Waterproof'],
  },
  {
    name: 'FreeStyle Libre 3',
    description: 'Smallest sensor with 14-day wear and continuous monitoring',
    features: ['14-day wear', 'Smallest sensor', 'No scanning needed', 'Waterproof'],
  },
  {
    name: 'FreeStyle Libre 2',
    description: 'Popular choice with 14-day wear and optional alarms',
    features: ['14-day wear', 'Optional alarms', 'No calibration', 'Waterproof'],
  },
];

const faqs = [
  {
    question: 'Do I qualify under Medicare Part B?',
    answer: 'Medicare Part B covers CGM for patients with diabetes who meet specific criteria, including insulin use and frequent blood glucose monitoring. We verify your eligibility and handle all paperwork.',
  },
  {
    question: 'What if my PPO requires prior authorization?',
    answer: 'We handle all prior authorization paperwork for you. Our team works directly with your insurance company and doctor to get approval quickly.',
  },
  {
    question: 'How long does it take to get approved?',
    answer: 'Most approvals are processed within 1-3 business days. We keep you updated throughout the entire process via your patient portal.',
  },
  {
    question: 'What if I\'m not covered by insurance?',
    answer: 'We offer transparent cash-pay options with competitive pricing. HSA/FSA cards are accepted, and payment plans are available.',
  },
  {
    question: 'Do you work with my doctor?',
    answer: 'Yes! We coordinate directly with your healthcare provider to ensure proper prescriptions and medical oversight.',
  },
  {
    question: 'What supplies are included?',
    answer: 'We provide the CGM device, sensors, and all necessary supplies. Replacement sensors are automatically shipped based on your insurance coverage.',
  },
];

export default function CGMPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Continuous Glucose Monitors (CGM)
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Most major CGM brands supported. We confirm eligibility, prior auth, and prescriptions with your clinician.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/check-coverage"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Check Coverage
              </Link>
              <Link
                href="#devices"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                View Devices <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Information */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Coverage & Support
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We handle all the complex insurance work so you can focus on your health
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <ShieldCheckIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Eligibility Verification</h3>
              <p className="mt-2 text-sm text-gray-600">
                We verify your insurance coverage and determine if you qualify for CGM under your plan.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                <ClockIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Prior Authorization</h3>
              <p className="mt-2 text-sm text-gray-600">
                Our team handles all prior authorization paperwork with your insurance company.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                <DevicePhoneMobileIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Doctor Coordination</h3>
              <p className="mt-2 text-sm text-gray-600">
                We work directly with your healthcare provider to ensure proper prescriptions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Supported Devices */}
      <div id="devices" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Supported CGM Devices
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We work with all major CGM manufacturers to provide you with the best options
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {devices.map((device) => (
              <div key={device.name} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">{device.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{device.description}</p>
                <ul className="mt-4 space-y-2">
                  {device.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How We Get You Your CGM
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                    1
                  </div>
                  Verify Coverage
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    We check your insurance benefits and determine CGM eligibility under your specific plan.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                    2
                  </div>
                  Handle Paperwork
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Our team submits all required prior authorizations and coordinates with your doctor.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                    3
                  </div>
                  Ship & Support
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    We ship your CGM device and supplies directly to your door with ongoing support.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-16">
            <dl className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <dt className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </dt>
                  <dd className="text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get your CGM?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Check your coverage in 60 seconds and take control of your diabetes management.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/check-coverage"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Check Coverage Now
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
              >
                View Cash-Pay Options <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
