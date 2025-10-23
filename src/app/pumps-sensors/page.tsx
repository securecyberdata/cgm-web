import Link from 'next/link';
import { CheckCircleIcon, HeartIcon, WrenchScrewdriverIcon, BeakerIcon } from '@heroicons/react/24/outline';

const pumpTypes = [
  {
    name: 'Insulin Pumps',
    description: 'Advanced insulin delivery systems for precise diabetes management',
    icon: WrenchScrewdriverIcon,
    features: [
      'Continuous insulin delivery',
      'Programmable basal rates',
      'Bolus calculations',
      'Integration with CGM',
    ],
    brands: ['Medtronic', 'Tandem', 'Omnipod', 'Insulet'],
  },
  {
    name: 'CGM Sensors',
    description: 'Continuous glucose monitoring sensors for real-time blood sugar tracking',
    icon: BeakerIcon,
    features: [
      'Real-time glucose readings',
      'Trend analysis',
      'Alert systems',
      'Data sharing capabilities',
    ],
    brands: ['Dexcom', 'FreeStyle Libre', 'Medtronic', 'Eversense'],
  },
  {
    name: 'Hybrid Systems',
    description: 'Integrated pump and sensor systems for automated diabetes management',
    icon: HeartIcon,
    features: [
      'Automated insulin delivery',
      'Smart algorithms',
      'Reduced manual intervention',
      'Improved glucose control',
    ],
    brands: ['Tandem Control-IQ', 'Medtronic MiniMed', 'Omnipod 5'],
  },
];

const coordinationSteps = [
  {
    step: 1,
    title: 'Medical Assessment',
    description: 'We coordinate with your doctor to assess your diabetes management needs and determine the best device for you.',
  },
  {
    step: 2,
    title: 'Insurance Verification',
    description: 'Our team verifies your insurance coverage and handles all prior authorization requirements.',
  },
  {
    step: 3,
    title: 'Device Selection',
    description: 'We work with you and your doctor to select the most appropriate pump or sensor system.',
  },
  {
    step: 4,
    title: 'Training & Setup',
    description: 'We coordinate training sessions and ensure proper setup with ongoing support.',
  },
];

const benefits = [
  {
    title: 'Improved Glucose Control',
    description: 'Better A1C levels and reduced glucose variability',
    icon: CheckCircleIcon,
  },
  {
    title: 'Reduced Hypoglycemia',
    description: 'Fewer low blood sugar episodes with advanced monitoring',
    icon: HeartIcon,
  },
  {
    title: 'Better Quality of Life',
    description: 'More flexibility and less daily diabetes management burden',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Data Insights',
    description: 'Comprehensive glucose data to optimize your diabetes care',
    icon: BeakerIcon,
  },
];

export default function PumpsSensorsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Insulin Pumps & Sensors
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Advanced diabetes management devices with comprehensive coordination support. We'll coordinate with your doctor to find the best solution for you.
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

      {/* Device Types */}
      <div id="devices" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Available Devices
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Advanced insulin delivery and monitoring systems for comprehensive diabetes management
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pumpTypes.map((type) => (
              <div key={type.name} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <type.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">{type.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Supported Brands:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.brands.map((brand) => (
                      <span key={brand} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Benefits of Advanced Devices
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              How insulin pumps and CGM sensors can improve your diabetes management
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coordination Process */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How We Coordinate With Your Doctor
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We work closely with your healthcare team to ensure the best diabetes management solution
            </p>
          </div>
          <div className="mt-16">
            <div className="space-y-8">
              {coordinationSteps.map((step) => (
                <div key={step.step} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Doctor Coordination CTA */}
      <div className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Ready to discuss advanced diabetes management?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We'll coordinate with your doctor to determine if insulin pumps or advanced sensors are right for you.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Link
                href="/check-coverage"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Start Assessment
              </Link>
              <Link
                href="/for-clinics"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                For Healthcare Providers <span aria-hidden="true">→</span>
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
              Take control of your diabetes
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let us coordinate with your doctor to find the best advanced diabetes management solution for you.
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
