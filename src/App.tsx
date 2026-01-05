import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { EducatorOnboardingProvider } from './contexts/EducatorOnboardingContext';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Instructors from './pages/Instructors';
import InstructorDetail from './pages/InstructorDetail';
import EntryGate from './pages/EntryGate';
import AuthPage from './pages/AuthPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';
import PendingVerification from './pages/PendingVerification';
import EducatorWelcome from './pages/educator-onboarding/EducatorWelcome';
import Step1_PersonalInfo from './pages/educator-onboarding/Step1_PersonalInfo';
import Step2_IdentityVerification from './pages/educator-onboarding/Step2_IdentityVerification';
import Step3_Qualification from './pages/educator-onboarding/Step3_Qualification';
import EducatorConfirmation from './pages/educator-onboarding/EducatorConfirmation';

// Instructor Dashboard Pages
import InstructorDashboard from './pages/instructor/Dashboard';
import InstructorCourses from './pages/instructor/Courses';
import CreateCourse from './pages/instructor/CreateCourse';

function App() {
  return (
    <Router>
      <AuthProvider>
        <EducatorOnboardingProvider>
          <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="flex-grow">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<EntryGate />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:id" element={<CourseDetail />} />
                <Route path="/instructors" element={<Instructors />} />
                <Route path="/instructors/:id" element={<InstructorDetail />} />
                
                {/* Educator Onboarding Routes */}
                <Route path="/educator-onboarding/welcome" element={<EducatorWelcome />} />
                <Route path="/educator-onboarding/personal-info" element={<Step1_PersonalInfo />} />
                <Route path="/educator-onboarding/identity-verification" element={<Step2_IdentityVerification />} />
                <Route path="/educator-onboarding/qualification" element={<Step3_Qualification />} />
                <Route path="/educator-onboarding/confirmation" element={<EducatorConfirmation />} />

                {/* --- Protected Routes --- */}
                <Route element={<ProtectedRoute allowedRoles={['educator']} requireVerified={true} />}>
                  <Route path="/instructor-dashboard" element={<Navigate to="/instructor/dashboard" replace />} />
                  <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
                  <Route path="/instructor/courses" element={<InstructorCourses />} />
                  <Route path="/instructor/create-course" element={<CreateCourse />} />
                </Route>

                <Route element={<ProtectedRoute allowedRoles={['educator']} />}>
                  <Route path="/pending-verification" element={<PendingVerification />} />
                </Route>
                
                <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                  <Route path="/admin-dashboard" element={<AdminDashboard />} />
                </Route>

                {/* Fallback Route */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </EducatorOnboardingProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
