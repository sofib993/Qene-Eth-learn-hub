export type Role = 'learner' | 'educator';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

// Mock authentication functions
export const loginWithEmailAndPassword = async (email: string, pass: string): Promise<User> => {
  console.log(email, pass);
  // In a real app, you'd call your backend.
  // Here we'll just return a mock user.
  const role = localStorage.getItem('role') as Role || 'learner';
  return { id: '1', name: 'Test Educator', email, role };
};

export const signupWithEmailAndPassword = async (name: string, email: string, pass: string): Promise<User> => {
    console.log(name, email, pass);
    // In a real app, you'd call your backend.
    const role = localStorage.getItem('role') as Role || 'learner';
    return { id: '1', name, email, role };
};
