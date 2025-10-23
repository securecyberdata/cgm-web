import Link from 'next/link';
import { CheckCircleIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Get your CGM and diabetic supplies covered by your insurance
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Medicare Part B and select PPOs supported. Check coverage in 60 seconds—no obligation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/check-coverage"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Check Coverage Now
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
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
              Trusted by thousands of patients nationwide
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2 text-blue-600">
                  <ShieldCheckIcon className="h-8 w-8" />
                  <span className="text-2xl font-bold">50k+</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">Patients served</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2 text-green-600">
                  <ClockIcon className="h-8 w-8" />
                  <span className="text-2xl font-bold">1 day</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">Benefits verified</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2 text-purple-600">
                  <CheckCircleIcon className="h-8 w-8" />
                  <span className="text-2xl font-bold">HIPAA</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Step Process */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How it works
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get your supplies covered in three simple steps
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                    1
                  </div>
                  Check coverage
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Complete our quick eligibility quiz to see if your insurance covers CGM and diabetic supplies.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                    2
                  </div>
                  We handle your paperwork
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Our team handles all the insurance paperwork, prior authorizations, and coordination with your doctor.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                    3
                  </div>
                  We coordinate RX & shipping
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    We coordinate with your doctor for prescriptions and ship your supplies directly to your door.
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
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Check your coverage in 60 seconds and take the first step toward better diabetes management.
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
