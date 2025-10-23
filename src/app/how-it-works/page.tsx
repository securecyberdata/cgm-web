import Link from 'next/link';
import { CheckCircleIcon, ClockIcon, DocumentTextIcon, TruckIcon, UserGroupIcon, PhoneIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    step: 1,
    title: 'Check Coverage',
    description: 'Complete our quick eligibility quiz to see if your insurance covers CGM and diabetic supplies.',
    details: [
      '60-second online assessment',
      'Insurance verification',
      'Eligibility determination',
      'No obligation required',
    ],
    timeline: 'Immediate',
    icon: CheckCircleIcon,
  },
  {
    step: 2,
    title: 'We Handle Your Paperwork',
    description: 'Our team handles all the insurance paperwork, prior authorizations, and coordination with your doctor.',
    details: [
      'Prior authorization submission',
      'Insurance coordination',
      'Doctor communication',
      'Documentation management',
    ],
    timeline: '1-3 business days',
    icon: DocumentTextIcon,
  },
  {
    step: 3,
    title: 'We Coordinate RX & Shipping',
    description: 'We coordinate with your doctor for prescriptions and ship your supplies directly to your door.',
    details: [
      'Prescription coordination',
      'Device setup',
      'Direct shipping',
      'Ongoing support',
    ],
    timeline: '3-7 business days',
    icon: TruckIcon,
  },
];

const whatYouNeed = [
  {
    category: 'Insurance Information',
    items: [
      'Insurance card (front and back)',
      'Member ID number',
      'Group number (if applicable)',
      'Primary care physician information',
    ],
    icon: DocumentTextIcon,
  },
  {
    category: 'Medical Information',
    items: [
      'Diabetes type and diagnosis date',
      'Current medications',
      'Recent lab results (A1C)',
      'Current monitoring method',
    ],
    icon: UserGroupIcon,
  },
  {
    category: 'Contact Information',
    items: [
      'Full name and date of birth',
      'Phone number and email',
      'Shipping address',
      'Emergency contact information',
    ],
    icon: PhoneIcon,
  },
];

const timelines = [
  {
    phase: 'Initial Assessment',
    duration: 'Same day',
    description: 'Complete eligibility quiz and submit required documents',
  },
  {
    phase: 'Insurance Verification',
    duration: '1-2 business days',
    description: 'We verify your coverage and determine benefits',
  },
  {
    phase: 'Prior Authorization',
    duration: '2-5 business days',
    description: 'Submit and track prior authorization with your insurance',
  },
  {
    phase: 'Prescription Coordination',
    duration: '1-2 business days',
    description: 'Work with your doctor to obtain proper prescriptions',
  },
  {
    phase: 'Device Shipping',
    duration: '3-7 business days',
    description: 'Ship your CGM device and supplies to your door',
  },
  {
    phase: 'Setup & Training',
    duration: '1-2 business days',
    description: 'Coordinate device setup and provide training support',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              How It Works
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get your supplies covered in three simple steps. We handle all the complex insurance work so you can focus on your health.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/check-coverage"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Get Started Now
              </Link>
              <Link
                href="#steps"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                Learn More <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Steps */}
      <div id="steps" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our 3-Step Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Simple, transparent, and designed to get you the supplies you need quickly
            </p>
          </div>
          <div className="mt-16">
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600 text-white">
                        <step.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="ml-8">
                      <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                      <p className="mt-2 text-lg text-gray-600">{step.description}</p>
                      <div className="mt-4">
                        <ul className="space-y-2">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-center text-sm text-gray-600">
                              <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 flex items-center text-sm text-blue-600">
                        <ClockIcon className="h-4 w-4 mr-2" />
                        Timeline: {step.timeline}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-16 h-8 w-0.5 bg-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What You Need */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Information You'll Need
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Gather these items to make the process as smooth as possible
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {whatYouNeed.map((category) => (
              <div key={category.category} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <category.icon className="h-8 w-8 text-blue-600" />
                  <h3 className="ml-3 text-lg font-semibold text-gray-900">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item) => (
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

      {/* Detailed Timeline */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Detailed Timeline
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              What to expect at each stage of the process
            </p>
          </div>
          <div className="mt-16">
            <div className="space-y-8">
              {timelines.map((timeline, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="flex items-center">
                      <h3 className="text-lg font-semibold text-gray-900">{timeline.phase}</h3>
                      <span className="ml-4 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                        {timeline.duration}
                      </span>
                    </div>
                    <p className="mt-1 text-gray-600">{timeline.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Need Help Along the Way?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our dedicated support team is here to guide you through every step of the process.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Link
                href="/about#contact"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/patient-portal"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                Patient Portal <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Take the first step toward better diabetes management. Check your coverage in 60 seconds.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/check-coverage"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Check Coverage Now
              </Link>
              <Link
                href="/for-clinics"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
              >
                For Healthcare Providers <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
