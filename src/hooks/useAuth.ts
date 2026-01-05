import { useContext } from 'react';
import { AuthContext, UserRole, VerificationStatus } from '@/contexts/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export type { UserRole, VerificationStatus };