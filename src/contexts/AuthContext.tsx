import { createContext, useState, useEffect, ReactNode, FC } from 'react';
import { User, Role } from '../lib/auth';

export type VerificationStatus = 'Pending' | 'Verified' | 'Rejected' | null;

interface AuthContextType {
  user: User | null;
  role: Role | null;
  verificationStatus: VerificationStatus;
  login: (userData: User) => void;
  logout: () => void;
  setRole: (role: Role) => void;
  updateVerificationStatus: (status: VerificationStatus) => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRoleState] = useState<Role | null>(null);
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const storedUser = localStorage.getItem('user');
    const storedRole = localStorage.getItem('role') as Role | null;
    if (storedUser && storedRole) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setRoleState(storedRole);
      if (storedRole === 'educator') {
        const storedStatus = localStorage.getItem('verificationStatus') as VerificationStatus;
        setVerificationStatus(storedStatus || 'Pending');
      }
    }
    setLoading(false);
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    const roleToSet = localStorage.getItem('role') as Role
    if (roleToSet) {
      userData.role = roleToSet;
      setRoleState(roleToSet);
      if (roleToSet === 'educator') {
        const initialStatus = localStorage.getItem('verificationStatus') as VerificationStatus || 'Pending';
        setVerificationStatus(initialStatus);
        localStorage.setItem('verificationStatus', initialStatus);
      }
    }
  };

  const logout = () => {
    setUser(null);
    setRoleState(null);
    setVerificationStatus(null);
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('verificationStatus');
    window.location.href = '/'; // Redirect to entry gate on logout
  };

  const setRole = (selectedRole: Role) => {
    setRoleState(selectedRole);
    localStorage.setItem('role', selectedRole);
  };

  const updateVerificationStatus = (status: VerificationStatus) => {
    setVerificationStatus(status);
    if (status) {
      localStorage.setItem('verificationStatus', status);
    } else {
      localStorage.removeItem('verificationStatus');
    }
  };

  return (
    <AuthContext.Provider value={{ user, role, verificationStatus, login, logout, setRole, updateVerificationStatus, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
