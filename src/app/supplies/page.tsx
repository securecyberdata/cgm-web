import Link from 'next/link';
import { CheckCircleIcon, HeartIcon, WrenchScrewdriverIcon, BeakerIcon } from '@heroicons/react/24/outline';

const supplyCategories = [
  {
    name: 'Diabetic Shoes',
    description: 'Specialized footwear designed to reduce pressure and prevent foot complications',
    icon: HeartIcon,
    items: [
      'Custom diabetic shoes',
      'Extra-depth shoes',
      'Orthotic inserts',
      'Compression socks',
    ],
    coverage: 'Covered under Medicare Part B with proper documentation',
  },
  {
    name: 'Blood Glucose Monitors',
    description: 'Essential devices for daily blood sugar monitoring',
    icon: BeakerIcon,
    items: [
      'Glucometers',
      'Test strips',
      'Lancets',
      'Lancing devices',
    ],
    coverage: 'Covered by most insurance plans with prescription',
  },
  {
    name: 'Smart Watches & Monitors',
    description: 'Advanced monitoring devices for comprehensive diabetes management',
    icon: WrenchScrewdriverIcon,
    items: [
      'Smart insulin pens',
      'Continuous glucose monitors',
      'Insulin pumps',
      'Mobile health apps',
    ],
    coverage: 'Coverage varies by plan and medical necessity',
  },
  {
    name: 'Testing Supplies',
    description: 'Daily essentials for blood glucose monitoring',
    icon: CheckCircleIcon,
    items: [
      'Test strips (various brands)',
      'Lancets (various gauges)',
      'Control solutions',
      'Carrying cases',
    ],
    coverage: 'Covered by most insurance with prescription',
  },
];

const coverageRules = [
  {
    plan: 'Medicare Part B',
    rules: [
      'Diabetic shoes: Covered with proper documentation from podiatrist',
      'Test strips: Up to 100 per month with prescription',
      'Lancets: Up to 100 per month with prescription',
      'Glucometer: One per year with prescription',
    ],
  },
  {
    plan: 'PPO Insurance',
    rules: [
      'Coverage varies by specific plan',
      'Prior authorization may be required',
      'Copays and deductibles apply',
      'Quantity limits may apply',
    ],
  },
  {
    plan: 'Cash Pay',
    rules: [
      'Transparent pricing available',
      'HSA/FSA cards accepted',
      'Payment plans available',
      'No insurance paperwork required',
    ],
  },
];

export default function SuppliesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Diabetic Supplies
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Shoes, watches/monitors, strips, lancets - we help you get all your diabetic supplies covered by insurance.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/check-coverage"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Check Coverage
              </Link>
              <Link
                href="#categories"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                View Supplies <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Supply Categories */}
      <div id="categories" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Available Supplies
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive diabetic supplies with insurance coverage support
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {supplyCategories.map((category) => (
              <div key={category.name} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <category.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-gray-900">{category.name}</h3>
                </div>
                <p className="mt-4 text-sm text-gray-600">{category.description}</p>
                <ul className="mt-4 space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded-md">
                  <p className="text-xs text-blue-800 font-medium">{category.coverage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coverage Rules */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Coverage Rules Summary
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Understanding your insurance coverage for diabetic supplies
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {coverageRules.map((plan) => (
              <div key={plan.plan} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{plan.plan}</h3>
                <ul className="space-y-3">
                  {plan.rules.map((rule, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How We Get You Your Supplies
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
                    We check your insurance benefits for each type of supply and determine coverage limits.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                    2
                  </div>
                  Get Prescriptions
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    We coordinate with your doctor to ensure all supplies are properly prescribed and documented.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                    3
                  </div>
                  Ship & Reorder
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    We ship your supplies and set up automatic reorders based on your insurance coverage.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get your supplies covered
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let us handle the insurance paperwork while you focus on your health.
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
