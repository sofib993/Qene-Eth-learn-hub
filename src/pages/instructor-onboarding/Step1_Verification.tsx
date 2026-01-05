import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Camera } from 'lucide-react';

export default function Step1_Verification() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Instructor Onboarding</h2>
          <p className="text-teal-500 font-semibold">Step 1: Identity & Credential Verification</p>
        </div>
        
        <form className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-4 border-b pb-2">Your Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="e.g., Abebe Bikila" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
            </div>
             <div className="mt-4">
                <Label htmlFor="bio">Professional Title & Short Bio</Label>
                <Textarea id="bio" placeholder="e.g., Senior Software Engineer with 10 years of experience specializing in cloud computing..." />
              </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 border-b pb-2">Verification Documents</h3>
            <p className="text-sm text-gray-500 mb-4">To maintain a high standard of quality, we require verification of your expertise. Please upload relevant documents.</p>
            <div className="space-y-4">
              <div>
                <Label htmlFor="idCard">National ID or Passport</Label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Camera className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="text-sm text-gray-600">Drag & drop or click to upload</p>
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="credentials">Credentials (e.g., University Degree, Professional Certificate)</Label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Camera className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="text-sm text-gray-600">Upload proof of expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-6 border-t">
            <Link to="/instructor-onboarding" className="text-sm text-gray-600 hover:text-teal-500">Back</Link>
            <Link to="/instructor-onboarding/course-creation">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white">Save & Continue</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}