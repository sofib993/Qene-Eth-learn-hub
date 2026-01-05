import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEducatorOnboarding } from '@/contexts/EducatorOnboardingContext';

const Step1_PersonalInfo = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { updateFormData } = useEducatorOnboarding();

  const onSubmit = (data: any) => {
    updateFormData(data);
    navigate('/educator-onboarding/identity-verification');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Step 1: Personal Information</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="fullName"
              type="text"
              {...register('fullName', { required: 'Full name is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message as string}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              id="email"
              type="email"
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              id="phone"
              type="tel"
              {...register('phone', { required: 'Phone number is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message as string}</p>}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-teal-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-600 transition duration-300"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1_PersonalInfo;