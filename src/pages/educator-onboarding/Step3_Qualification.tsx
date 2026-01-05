import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEducatorOnboarding } from '@/contexts/EducatorOnboardingContext';
import { useAuth } from '@/hooks/useAuth';

const Step3_Qualification = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { updateFormData, formData } = useEducatorOnboarding();
  const { login } = useAuth();

  const onSubmit = (data: any) => {
    updateFormData(data);
    const finalData = { ...formData, ...data };
    console.log('Final form data:', finalData);

    login('educator', 'pending'); 

    navigate('/educator-onboarding/confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Step 3: Qualifications</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="qualificationType" className="block text-sm font-medium text-gray-700">Qualification Type</label>
            <input
              id="qualificationType"
              type="text"
              placeholder="e.g., PhD in Computer Science"
              {...register('qualificationType', { required: 'Qualification type is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
            {errors.qualificationType && <p className="text-red-500 text-xs mt-1">{errors.qualificationType.message as string}</p>}
          </div>
          <div>
            <label htmlFor="institution" className="block text-sm font-medium text-gray-700">Issuing Institution</label>
            <input
              id="institution"
              type="text"
              placeholder="e.g., University of Nairobi"
              {...register('institution', { required: 'Issuing institution is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
            {errors.institution && <p className="text-red-500 text-xs mt-1">{errors.institution.message as string}</p>}
          </div>
          <div>
            <label htmlFor="qualificationUpload" className="block text-sm font-medium text-gray-700">Upload Certificate</label>
            <input
              id="qualificationUpload"
              type="file"
              {...register('qualificationUpload', { required: 'Certificate upload is required' })}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
            />
            {errors.qualificationUpload && <p className="text-red-500 text-xs mt-1">{errors.qualificationUpload.message as string}</p>}
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate('/educator-onboarding/identity-verification')}
              className="bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-teal-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-600 transition duration-300"
            >
              Submit for Verification
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step3_Qualification;