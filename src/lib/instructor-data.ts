export interface Course {
  id: number;
  title: string;
  thumbnailUrl: string;
  students: number;
  price: number;
  status: 'Published' | 'Draft';
}

export const publishedCourses: Course[] = [
  {
    id: 1,
    title: 'Advanced Amharic for Professionals',
    thumbnailUrl: 'https://via.placeholder.com/150/14B8A6/FFFFFF?text=Amharic',
    students: 350,
    price: 1200,
    status: 'Published',
  },
  {
    id: 2,
    title: 'The Art of Ethiopian Coffee Ceremony',
    thumbnailUrl: 'https://via.placeholder.com/150/14B8A6/FFFFFF?text=Coffee',
    students: 500,
    price: 800,
    status: 'Published',
  },
];

export const draftCourses: Course[] = [
  {
    id: 3,
    title: 'Introduction to Ge\'ez Script',
    thumbnailUrl: 'https://via.placeholder.com/150/FBBF24/FFFFFF?text=Ge\'ez',
    students: 0,
    price: 1500,
    status: 'Draft',
  },
];
