import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Trash2, Video } from 'lucide-react';

export default function Step2_CourseCreation() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Instructor Onboarding</h2>
          <p className="text-teal-500 font-semibold">Step 2: Course Content & Curriculum</p>
        </div>

        <form className="space-y-8">
          {/* Course Details */}
          <div>
            <h3 className="font-semibold text-lg mb-4 border-b pb-2">Course Information</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="courseTitle">Course Title</Label>
                <Input id="courseTitle" placeholder="e.g., The Complete Guide to Modern JavaScript" />
              </div>
              <div>
                <Label htmlFor="courseDescription">Course Description</Label>
                <Textarea id="courseDescription" placeholder="Describe what students will learn in your course." />
              </div>
               <div>
                <Label htmlFor="courseImage">Course Thumbnail Image</Label>
                 <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Video className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="text-sm text-gray-600">Upload a 16:9 image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Curriculum Builder */}
          <div>
            <h3 className="font-semibold text-lg mb-4 border-b pb-2">Curriculum Builder</h3>
            <div className="space-y-4 bg-gray-50 p-4 rounded-md">
              {/* Example Section */}
              <div className="bg-white p-4 border rounded-lg">
                <Input placeholder="Section 1: Introduction" className="font-bold text-md mb-2" />
                {/* Example Lesson */}
                <div className="flex items-center gap-2 pl-4 py-2 border-l-2 border-teal-500">
                  <Video className="w-5 h-5 text-gray-500" />
                  <Input placeholder="Lesson 1: What is JavaScript?" />
                  <Input type="text" placeholder="15 min" className="w-24" />
                  <Button variant="ghost" size="icon"><Trash2 className="w-4 h-4 text-red-500" /></Button>
                </div>
                <Button variant="outline" size="sm" className="mt-2 ml-4"><PlusCircle className="w-4 h-4 mr-2"/>Add Lesson</Button>
              </div>
            </div>
            <Button variant="secondary" className="mt-4"><PlusCircle className="w-4 h-4 mr-2"/>Add Section</Button>
          </div>

          <div className="flex justify-between items-center pt-6 border-t">
            <Link to="/instructor-onboarding/verification" className="text-sm text-gray-600 hover:text-teal-500">Back</Link>
            <Link to="/instructor-onboarding/pricing">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white">Save & Continue</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}