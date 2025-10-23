import Link from 'next/link';
import { CheckCircleIcon, CreditCardIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/outline';

const cgmDevices = [
  {
    name: 'Dexcom G7',
    description: 'Latest generation with 10-day wear',
    price: '$299',
    monthly: '$89/month',
    features: ['10-day wear', 'Real-time alerts', 'Smartphone app', 'Waterproof'],
    popular: true,
  },
  {
    name: 'Dexcom G6',
    description: 'Proven reliability with 10-day wear',
    price: '$249',
    monthly: '$79/month',
    features: ['10-day wear', 'No calibration needed', 'Share feature', 'Waterproof'],
    popular: false,
  },
  {
    name: 'FreeStyle Libre 3',
    description: 'Smallest sensor with 14-day wear',
    price: '$199',
    monthly: '$69/month',
    features: ['14-day wear', 'Smallest sensor', 'No scanning needed', 'Waterproof'],
    popular: false,
  },
  {
    name: 'FreeStyle Libre 2',
    description: 'Popular choice with 14-day wear',
    price: '$179',
    monthly: '$59/month',
    features: ['14-day wear', 'Optional alarms', 'No calibration', 'Waterproof'],
    popular: false,
  },
];

const supplies = [
  {
    category: 'Test Strips',
    items: [
      { name: 'OneTouch Verio Test Strips', price: '$0.50/strip', qty: '100 strips' },
      { name: 'Accu-Chek Guide Test Strips', price: '$0.45/strip', qty: '100 strips' },
      { name: 'FreeStyle Lite Test Strips', price: '$0.40/strip', qty: '100 strips' },
    ],
  },
  {
    category: 'Lancets',
    items: [
      { name: 'OneTouch Delica Lancets', price: '$0.10/lancet', qty: '100 lancets' },
      { name: 'Accu-Chek Softclix Lancets', price: '$0.08/lancet', qty: '100 lancets' },
      { name: 'FreeStyle Lancets', price: '$0.06/lancet', qty: '100 lancets' },
    ],
  },
  {
    category: 'Diabetic Shoes',
    items: [
      { name: 'Custom Diabetic Shoes', price: '$150-300', qty: 'per pair' },
      { name: 'Extra-Depth Shoes', price: '$80-150', qty: 'per pair' },
      { name: 'Orthotic Inserts', price: '$50-100', qty: 'per pair' },
    ],
  },
  {
    category: 'Monitors & Accessories',
    items: [
      { name: 'Blood Glucose Monitor', price: '$25-50', qty: 'per device' },
      { name: 'Carrying Case', price: '$15-25', qty: 'per case' },
      { name: 'Control Solution', price: '$8-12', qty: 'per bottle' },
    ],
  },
];

const paymentOptions = [
  {
    title: 'HSA/FSA Accepted',
    description: 'Use your Health Savings Account or Flexible Spending Account',
    icon: CreditCardIcon,
  },
  {
    title: 'Payment Plans Available',
    description: 'Flexible payment options to fit your budget',
    icon: ClockIcon,
  },
  {
    title: 'Secure Payments',
    description: 'All payments processed securely with encryption',
    icon: ShieldCheckIcon,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transparent Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Clear, upfront pricing for all our CGM devices and diabetic supplies. HSA/FSA accepted. Payment plans available.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/check-coverage"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Check Insurance Coverage
              </Link>
              <Link
                href="#devices"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                View Pricing <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CGM Devices */}
      <div id="devices" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              CGM Device Pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              One-time device cost plus monthly sensor subscriptions
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {cgmDevices.map((device) => (
              <div
                key={device.name}
                className={`relative rounded-lg shadow-lg p-6 border-2 ${
                  device.popular ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white'
                }`}
              >
                {device.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900">{device.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{device.description}</p>
                <div className="mt-4">
                  <div className="text-2xl font-bold text-gray-900">{device.price}</div>
                  <div className="text-sm text-gray-600">One-time device cost</div>
                </div>
                <div className="mt-2">
                  <div className="text-lg font-semibold text-blue-600">{device.monthly}</div>
                  <div className="text-sm text-gray-600">Monthly sensors</div>
                </div>
                <ul className="mt-6 space-y-2">
                  {device.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button
                    className={`w-full rounded-md px-4 py-2 text-sm font-semibold ${
                      device.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    } transition-colors`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Supplies Pricing */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Diabetic Supplies Pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transparent pricing for all your diabetic supply needs
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {supplies.map((category) => (
              <div key={category.category} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between border-b border-gray-200 pb-3">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.qty}</div>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Options */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Payment Options
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Flexible payment options to make diabetes management affordable
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {paymentOptions.map((option) => (
              <div key={option.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <option.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{option.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insurance vs Cash Pay */}
      <div className="bg-blue-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Insurance vs. Cash Pay
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We help you understand your options and find the most cost-effective solution
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">With Insurance</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Lower out-of-pocket costs
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  We handle all paperwork
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Prior authorization included
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Automatic reorders
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/check-coverage"
                  className="w-full inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
                >
                  Check Your Coverage
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cash Pay</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  No insurance paperwork
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Immediate availability
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  HSA/FSA accepted
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Payment plans available
                </li>
              </ul>
              <div className="mt-6">
                <button className="w-full inline-flex items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 transition-colors">
                  Start Shopping
                </button>
              </div>
            </div>
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
              Check your insurance coverage first, or start shopping with our transparent cash-pay options.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/check-coverage"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Check Coverage First
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
