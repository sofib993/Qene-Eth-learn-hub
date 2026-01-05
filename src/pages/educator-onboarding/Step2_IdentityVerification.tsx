import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEducatorOnboarding } from '@/contexts/EducatorOnboardingContext';

const Step2_IdentityVerification = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { updateFormData } = useEducatorOnboarding();

  const onSubmit = (data: any) => {
    updateFormData(data);
    navigate('/educator-onboarding/qualification');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Step 2: Identity Verification</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">Document Type</label>
            <select
              id="documentType"
              {...register('documentType', { required: 'Document type is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            >
              <option value="">Select a document</option>
              <option value="passport">Passport</option>
              <option value="national_id">National ID</option>
              <option value="drivers_license">Driver's License</option>
            </select>
            {errors.documentType && <p className="text-red-500 text-xs mt-1">{errors.documentType.message as string}</p>}
          </div>
          <div>
            <label htmlFor="documentUpload" className="block text-sm font-medium text-gray-700">Upload Document</label>
            <input
              id="documentUpload"
              type="file"
              {...register('documentUpload', { required: 'Document upload is required' })}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
            />
            {errors.documentUpload && <p className="text-red-500 text-xs mt-1">{errors.documentUpload.message as string}</p>}
          </div>
          <div className="flex justify-between">
             <button
              type="button"
              onClick={() => navigate('/educator-onboarding/personal-info')}
              className="bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Back
            </button>
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

export default Step2_IdentityVerification;