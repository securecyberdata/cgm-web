'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const formSchema = z.object({
  // Insurance Type
  insuranceType: z.enum(['medicare', 'ppo', 'none'], {
    message: 'Please select your insurance type',
  }),
  
  // Medical Info
  diabetesType: z.enum(['type1', 'type2', 'gestational', 'other'], {
    message: 'Please select your diabetes type',
  }),
  currentMonitoring: z.enum(['fingersticks', 'cgm', 'both', 'none'], {
    message: 'Please select your current monitoring method',
  }),
  hypoglycemicEvents: z.boolean(),
  insulinUse: z.boolean(),
  
  // Doctor Info
  hasDoctor: z.boolean(),
  doctorName: z.string().optional(),
  doctorCity: z.string().optional(),
  
  // Insurance Card
  memberId: z.string().min(1, 'Member ID is required'),
  insuranceCardFront: z.any().optional(),
  insuranceCardBack: z.any().optional(),
  
  // Contact & Consent
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  hipaaConsent: z.boolean().refine(val => val === true, 'HIPAA consent is required'),
  tcpaConsent: z.boolean().refine(val => val === true, 'TCPA consent is required'),
  benefitsCheckConsent: z.boolean().refine(val => val === true, 'Benefits check consent is required'),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: 'insurance', title: 'Insurance Type' },
  { id: 'medical', title: 'Medical Info' },
  { id: 'doctor', title: 'Doctor Info' },
  { id: 'card', title: 'Insurance Card' },
  { id: 'contact', title: 'Contact & Consent' },
];

export default function CheckCoverage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [isEligible, setIsEligible] = useState<boolean | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const validateCurrentStep = (currentStepData: Partial<FormData>): boolean => {
    switch (currentStep) {
      case 0: // Insurance Type
        return !!currentStepData.insuranceType;
      case 1: // Medical Info
        return !!(currentStepData.diabetesType && currentStepData.currentMonitoring);
      case 2: // Doctor Info
        return true; // Doctor info is optional
      case 3: // Insurance Card
        return formData.insuranceType === 'none' || !!currentStepData.memberId;
      case 4: // Contact & Consent
        return !!(currentStepData.firstName && currentStepData.lastName && currentStepData.email && currentStepData.phone && 
                 currentStepData.hipaaConsent && currentStepData.tcpaConsent && currentStepData.benefitsCheckConsent);
      default:
        return true;
    }
  };

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted with data:', data);
    console.log('Current step:', currentStep);
    
    const updatedFormData = { ...formData, ...data };
    setFormData(updatedFormData);

    if (currentStep < steps.length - 1) {
      // Validate current step before moving to next
      const isValid = validateCurrentStep(data);
      console.log('Step validation result:', isValid);
      
      if (isValid) {
        setCurrentStep(currentStep + 1);
        // Don't reset form - keep values for next step
      } else {
        // Show validation error
        alert('Please fill in all required fields before proceeding.');
      }
    } else {
      // Final submission - determine eligibility
      const eligible = determineEligibility(updatedFormData);
      
      try {
        // Submit to API endpoint
        const response = await fetch('/api/submit-coverage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedFormData),
        });
        
        if (response.ok) {
          const result = await response.json();
          console.log('Form submitted successfully:', result);
        } else {
          console.error('Failed to submit form');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        // Fallback to localStorage
        localStorage.setItem('coverageFormData', JSON.stringify(updatedFormData));
      }
      
      setIsEligible(eligible);
    }
  };

  const determineEligibility = (data: Partial<FormData>): boolean => {
    // Basic eligibility logic
    if (data.insuranceType === 'none') return false;
    if (data.diabetesType === 'other') return false;
    if (!data.insulinUse && data.diabetesType === 'type1') return false;
    
    return true;
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isEligible !== null) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {isEligible ? (
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-gray-900">You're likely eligible!</h2>
                <p className="mt-2 text-gray-600">
                  Pending benefits check (under 1 business day). We'll contact you with next steps.
                </p>
                <div className="mt-6">
                  <a
                    href="/patient-portal"
                    className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                  >
                    Access Patient Portal
                  </a>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-gray-900">Not eligible for insurance coverage</h2>
                <p className="mt-2 text-gray-600">
                  Don't worry! We have cash-pay options available.
                </p>
                <div className="mt-6 space-y-4">
                  <a
                    href="/pricing"
                    className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                  >
                    View Cash-Pay Options
                  </a>
                  <a
                    href="/about#contact"
                    className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Talk to Advisor
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg">
          {/* Progress bar */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold text-gray-900">
                Check Coverage - Step {currentStep + 1} of {steps.length}
              </h1>
              <span className="text-sm text-gray-500">
                {Math.round(((currentStep + 1) / steps.length) * 100)}% complete
              </span>
            </div>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="p-6">
            {currentStep === 0 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">What type of insurance do you have?</h2>
                  <div className="space-y-3">
                    {[
                      { value: 'medicare', label: 'Medicare Part B', description: 'Traditional Medicare with Part B coverage' },
                      { value: 'ppo', label: 'PPO Insurance', description: 'Preferred Provider Organization plan' },
                      { value: 'none', label: 'No Insurance / Cash Pay', description: 'I will pay out of pocket' },
                    ].map((option) => (
                      <label key={option.value} className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          value={option.value}
                          {...form.register('insuranceType')}
                          className="mt-1 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{option.label}</div>
                          <div className="text-sm text-gray-500">{option.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                  {form.formState.errors.insuranceType && (
                    <p className="mt-2 text-sm text-red-600">{form.formState.errors.insuranceType.message}</p>
                  )}
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Tell us about your diabetes</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Diabetes Type</label>
                      <select {...form.register('diabetesType')} className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                        <option value="">Select diabetes type</option>
                        <option value="type1">Type 1 Diabetes</option>
                        <option value="type2">Type 2 Diabetes</option>
                        <option value="gestational">Gestational Diabetes</option>
                        <option value="other">Other/Pre-diabetes</option>
                      </select>
                      {form.formState.errors.diabetesType && (
                        <p className="mt-1 text-sm text-red-600">{form.formState.errors.diabetesType.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Monitoring Method</label>
                      <select {...form.register('currentMonitoring')} className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                        <option value="">Select monitoring method</option>
                        <option value="fingersticks">Fingerstick testing only</option>
                        <option value="cgm">CGM (Continuous Glucose Monitor)</option>
                        <option value="both">Both fingersticks and CGM</option>
                        <option value="none">No regular monitoring</option>
                      </select>
                      {form.formState.errors.currentMonitoring && (
                        <p className="mt-1 text-sm text-red-600">{form.formState.errors.currentMonitoring.message}</p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          {...form.register('hypoglycemicEvents')}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">I have had hypoglycemic events in the past 6 months</span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          {...form.register('insulinUse')}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">I currently use insulin</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Doctor Information</h2>
                  
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        {...form.register('hasDoctor')}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">I have a doctor who manages my diabetes</span>
                    </label>

                    {form.watch('hasDoctor') && (
                      <div className="space-y-4 pl-7">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Doctor's Name</label>
                          <input
                            type="text"
                            {...form.register('doctorName')}
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Dr. Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                          <input
                            type="text"
                            {...form.register('doctorCity')}
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="New York"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && formData.insuranceType !== 'none' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Insurance Card Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Member ID</label>
                      <input
                        type="text"
                        {...form.register('memberId')}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter your member ID"
                      />
                      {form.formState.errors.memberId && (
                        <p className="mt-1 text-sm text-red-600">{form.formState.errors.memberId.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Card (Front)</label>
                        <input
                          type="file"
                          accept="image/*"
                          {...form.register('insuranceCardFront')}
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Card (Back)</label>
                        <input
                          type="file"
                          accept="image/*"
                          {...form.register('insuranceCardBack')}
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information & Consent</h2>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          {...form.register('firstName')}
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                        {form.formState.errors.firstName && (
                          <p className="mt-1 text-sm text-red-600">{form.formState.errors.firstName.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          {...form.register('lastName')}
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                        {form.formState.errors.lastName && (
                          <p className="mt-1 text-sm text-red-600">{form.formState.errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        {...form.register('email')}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                      {form.formState.errors.email && (
                        <p className="mt-1 text-sm text-red-600">{form.formState.errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        {...form.register('phone')}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="(555) 123-4567"
                      />
                      {form.formState.errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{form.formState.errors.phone.message}</p>
                      )}
                    </div>

                    <div className="space-y-3 border-t pt-4">
                      <h3 className="text-sm font-medium text-gray-900">Required Consents</h3>
                      
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          {...form.register('hipaaConsent')}
                          className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          I consent to the use and disclosure of my protected health information as described in the HIPAA Notice of Privacy Practices.
                        </span>
                      </label>
                      {form.formState.errors.hipaaConsent && (
                        <p className="text-sm text-red-600">{form.formState.errors.hipaaConsent.message}</p>
                      )}

                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          {...form.register('tcpaConsent')}
                          className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          I consent to receive calls and text messages at the number provided, including via autodialer and prerecorded messages.
                        </span>
                      </label>
                      {form.formState.errors.tcpaConsent && (
                        <p className="text-sm text-red-600">{form.formState.errors.tcpaConsent.message}</p>
                      )}

                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          {...form.register('benefitsCheckConsent')}
                          className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          I authorize CGM Care to check my insurance benefits and coordinate with my healthcare provider.
                        </span>
                      </label>
                      {form.formState.errors.benefitsCheckConsent && (
                        <p className="text-sm text-red-600">{form.formState.errors.benefitsCheckConsent.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={goToPreviousStep}
                disabled={currentStep === 0}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeftIcon className="h-4 w-4 mr-2" />
                Previous
              </button>

              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
                {currentStep < steps.length - 1 && <ChevronRightIcon className="h-4 w-4 ml-2" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
