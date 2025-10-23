import { ClockIcon, UserGroupIcon, DocumentTextIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function PatientPortal() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Patient Portal</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Content */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
            <ClockIcon className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Coming Soon
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We're working hard to bring you a comprehensive patient portal experience.
          </p>
          <p className="mt-2 text-base text-gray-500">
            Stay tuned for updates on when this feature will be available.
          </p>
        </div>

        {/* Features Preview */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <DocumentTextIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Document Management</h3>
              <p className="mt-2 text-sm text-gray-600">
                Upload and manage your insurance documents, prescriptions, and lab results.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <ChartBarIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Application Tracking</h3>
              <p className="mt-2 text-sm text-gray-600">
                Track your coverage application status and see real-time updates.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <UserGroupIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Profile Management</h3>
              <p className="mt-2 text-sm text-gray-600">
                Update your personal information and manage your account settings.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <ClockIcon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Activity History</h3>
              <p className="mt-2 text-sm text-gray-600">
                View your complete activity history and communication timeline.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-white rounded-lg shadow p-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Need Help in the Meantime?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to assist you with your coverage application and any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-555-123-4567"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Call Us: (555) 123-4567
              </a>
              <a
                href="mailto:support@example.com"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
