import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Step3_Pricing() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Instructor Onboarding</h2>
          <p className="text-teal-500 font-semibold">Step 3: Pricing & Access</p>
        </div>

        <form className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-4 border-b pb-2">Set Your Course Price</h3>
            <div className="relative">
              <Label htmlFor="price">Price</Label>
              <Input id="price" type="number" placeholder="e.g., 3000" className="pl-12" />
              <span className="absolute left-3 bottom-2 text-gray-500">ETB</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">Qene's platform fee is 15%. You will receive 85% of this price for each sale.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 border-b pb-2">Set Access Duration</h3>
            <p className="text-sm text-gray-500 mb-2">Choose how long students can access the course after purchase. This allows you to run courses in batches or terms.</p>
            <div>
              <Label htmlFor="accessType">Access Model</Label>
              <Select>
                <SelectTrigger id="accessType">
                  <SelectValue placeholder="Select an access model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="term">Term-Based (e.g., 3 months, 6 months)</SelectItem>
                  <SelectItem value="date">Fixed Date Range (e.g., Jan 1 - Jun 30)</SelectItem>
                  <SelectItem value="lifetime">Lifetime Access</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div className="mt-4">
                <Label htmlFor="duration">Duration Description</Label>
                <Input id="duration" placeholder="e.g., 'Access until Dec 2024' or '3 Month Access'" />
                 <p className="text-xs text-gray-500 mt-1">This text will be shown to students on the course page.</p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-6 border-t">
            <Link to="/instructor-onboarding/course-creation" className="text-sm text-gray-600 hover:text-teal-500">Back</Link>
            <Link to="/instructor-onboarding/confirmation">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white">Submit for Review</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}