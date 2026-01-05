import React, { useState } from 'react';
import Sidebar from '@/components/instructor/Sidebar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const CreateCourse: React.FC = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [resourceFile, setResourceFile] = useState<File | null>(null);

  const handleSaveDraft = () => {
    console.log('Saving draft:', { courseTitle, description, price, videoFile, resourceFile });
    // Here you would typically handle the draft saving logic
  };

  const handlePublish = () => {
    console.log('Publishing course:', { courseTitle, description, price, videoFile, resourceFile });
    // Here you would handle the publishing logic
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-8">Create New Course</h1>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <form className="space-y-6">
            <div>
              <Label htmlFor="course-title" className="text-lg">Course Title</Label>
              <Input id="course-title" value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} placeholder="e.g., Introduction to React" className="mt-2" />
            </div>

            <div>
              <Label htmlFor="description" className="text-lg">Course Description</Label>
              <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your course..." className="mt-2" rows={6} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="video-upload" className="text-lg">Upload Video</Label>
                <Input id="video-upload" type="file" onChange={(e) => setVideoFile(e.target.files ? e.target.files[0] : null)} className="mt-2" />
              </div>
              <div>
                <Label htmlFor="resource-upload" className="text-lg">Upload Resources (PDF, etc.)</Label>
                <Input id="resource-upload" type="file" onChange={(e) => setResourceFile(e.target.files ? e.target.files[0] : null)} className="mt-2" />
              </div>
            </div>

            <div>
              <Label htmlFor="price" className="text-lg">Price (ETB)</Label>
              <Input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="e.g., 500" className="mt-2" />
            </div>

            <div className="flex justify-end space-x-4 mt-8">
              <Button type="button" variant="outline" onClick={handleSaveDraft}>Save as Draft</Button>
              <Button type="button" onClick={handlePublish} className="bg-teal-500 hover:bg-teal-600 text-white">Publish Course</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateCourse;
