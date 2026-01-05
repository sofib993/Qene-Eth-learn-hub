import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses, instructors } from '@/lib/data';
import { Star, Users, BookOpen, Clock, X, CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import SecureContentWrapper from '@/components/SecureContentWrapper';
import { simulateTelebirrPayment, simulateCbePayment } from '@/lib/utils';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));
  const instructor = course ? instructors.find((i) => i.id === course.instructorId) : null;

  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentStep, setPaymentStep] = useState('selection'); // selection, processing, success, failure
  const [paymentResult, setPaymentResult] = useState(null);

  if (!course || !instructor) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Course not found</h1>
        <Link to="/courses" className="text-teal-600 hover:underline mt-4 inline-block">Back to Courses</Link>
      </div>
    );
  }

  const handlePayment = async (method: 'telebirr' | 'cbe') => {
    setPaymentStep('processing');
    const price = 4999; // Using monthly price for simulation
    const paymentFunction = method === 'telebirr' ? simulateTelebirrPayment : simulateCbePayment;
    const result = await paymentFunction(price);
    setPaymentResult(result);
    if (result.status === 'success') {
      setPaymentStep('success');
    } else {
      setPaymentStep('failure');
    }
  };

  const resetPaymentFlow = () => {
    setPaymentStep('selection');
    setPaymentResult(null);
  };

  const closePaymentModal = () => {
    resetPaymentFlow();
    setPaymentModalOpen(false);
  };

  const categoryThemes = {
    "Web Development": "from-blue-50 to-blue-100",
    "Data Science": "from-purple-50 to-purple-100",
    "UI/UX Design": "from-pink-50 to-pink-100",
    "Mobile Development": "from-green-50 to-green-100",
    "Digital Marketing": "from-yellow-50 to-yellow-100",
  };

  const theme = categoryThemes[course.category] || "from-gray-50 to-gray-100";

  const renderPaymentContent = () => {
    switch (paymentStep) {
      case 'processing':
        return (
          <div className="text-center flex flex-col items-center justify-center h-64">
            <Loader2 className="w-16 h-16 text-teal-600 animate-spin mb-4" />
            <h3 className="text-2xl font-bold">Processing Payment...</h3>
            <p className="text-gray-500">Please wait, do not close this window.</p>
          </div>
        );
      case 'success':
        return (
          <div className="text-center p-4">
            <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful!</h3>
            <p className="text-gray-600 mb-6">You now have full access to "{course.title}".</p>
            <div className="bg-gray-50 rounded-lg p-4 text-left space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-500">Transaction ID:</span>
                <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">{paymentResult?.transactionId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-500">Payment Method:</span>
                <span className="font-semibold text-gray-700">{paymentResult?.method}</span>
              </div>
              <div className="border-t my-2"></div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Platform Fee (20%):</span>
                <span className="text-gray-700">{paymentResult?.commission.platform} ETB</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Instructor Payout:</span>
                <span className="text-gray-700">{paymentResult?.commission.instructor} ETB</span>
              </div>
            </div>
            <button onClick={closePaymentModal} className="mt-8 w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition">Start Learning</button>
          </div>
        );
      case 'failure':
        return (
          <div className="text-center p-4">
            <XCircle className="w-20 h-20 text-red-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">Payment Failed</h3>
            <p className="text-gray-600 mb-8">{paymentResult?.message || 'An unexpected error occurred.'}</p>
            <button onClick={resetPaymentFlow} className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition">Try Again</button>
          </div>
        );
      case 'selection':
      default:
        return (
          <div>
            <h3 className="text-2xl font-bold text-center mb-2">Complete Your Enrollment</h3>
            <p className='text-center text-gray-500 mb-8'>Select a payment method to purchase "{course.title}".</p>
            <div className="space-y-4">
              <button onClick={() => handlePayment('telebirr')} className="w-full flex items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Telebirr_Logo.png" alt="Telebirr Logo" className="w-24 h-auto"/>
              </button>
              <button onClick={() => handlePayment('cbe')} className="w-full flex items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Commercial_Bank_of_Ethiopia.svg/2560px-Commercial_Bank_of_Ethiopia.svg.png" alt="CBE Logo" className="w-28 h-auto"/>
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <div className={`bg-gradient-to-b ${theme}`}>
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SecureContentWrapper>
                <img src={course.imageUrl} alt={course.title} className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-2xl mb-8"/>
                <p className="text-teal-600 font-semibold">{course.category.toUpperCase()}</p>
                <h1 className="text-4xl lg:text-5xl font-bold my-3 text-gray-900">{course.title}</h1>
                <p className="text-xl text-gray-600 mb-8">{course.description}</p>
                
                <div className="flex items-center space-x-6 mb-12">
                    <div className="flex items-center space-x-2">
                        <Star className="text-yellow-500" />
                        <span className="font-bold text-lg">{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Clock className="text-gray-500" />
                        <span className="text-lg">{course.duration}</span>
                    </div>
                </div>

                <h2 className="text-3xl font-bold mb-6">About the Instructor</h2>
                <div className="flex items-center bg-white p-6 rounded-xl shadow-lg">
                  <img src={instructor.avatarUrl} alt={instructor.name} className="w-24 h-24 rounded-full shadow-md" />
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold hover:text-teal-600"><Link to={`/instructors/${instructor.id}`}>{instructor.name}</Link></h3>
                    <div className="flex items-center space-x-6 text-gray-600 mt-2">
                        <div className="flex items-center space-x-1">
                            <Star className="w-5 h-5 text-yellow-500" /> <span>{instructor.rating} Rating</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Users className="w-5 h-5 text-blue-500" /> <span>{instructor.studentCount.toLocaleString()} Students</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <BookOpen className="w-5 h-5 text-green-500" /> <span>{instructor.courseCount} Courses</span>
                        </div>
                    </div>
                  </div>
                </div>
              </SecureContentWrapper>
            </div>

            <div className="lg:sticky top-28 h-fit">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-2xl font-bold mb-2">Subscribe to Qene</h2>
                <p className="text-gray-600 mb-6">Get unlimited access to this course and 100+ more.</p>
                <div className="space-y-4 mb-8">
                  <div className="border p-4 rounded-lg">
                      <p className="font-bold">Monthly Access</p>
                      <p className="text-2xl font-extrabold text-teal-600">4,999 ETB<span className="text-base font-normal text-gray-500">/month</span></p>
                  </div>
                  <div className="border-2 border-teal-500 p-4 rounded-lg relative bg-teal-50">
                      <div className="absolute top-0 right-4 -mt-3 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded">BEST VALUE</div>
                      <p className="font-bold">Annual Access</p>
                      <p className="text-2xl font-extrabold text-teal-600">39,999 ETB<span className="text-base font-normal text-gray-500">/year</span></p>
                      <p className="text-sm text-teal-700 font-semibold">Save 30%</p>
                  </div>
                </div>
                <button onClick={() => setPaymentModalOpen(true)} className="w-full bg-teal-600 text-white font-bold py-4 rounded-lg text-lg hover:bg-teal-700 transition-transform hover:scale-105">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative transform transition-all">
            <button onClick={closePaymentModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
            <div className="p-8">
              {renderPaymentContent()}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetail;
