import React, { createContext, useContext, useState, ReactNode } from 'react';

interface IOnboardingContext {
  formData: any;
  updateFormData: (data: any) => void;
}

const EducatorOnboardingContext = createContext<IOnboardingContext | undefined>(undefined);

export const EducatorOnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState({});

  const updateFormData = (data: any) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  return (
    <EducatorOnboardingContext.Provider value={{ formData, updateFormData }}>
      {children}
    </EducatorOnboardingContext.Provider>
  );
};

export const useEducatorOnboarding = () => {
  const context = useContext(EducatorOnboardingContext);
  if (!context) {
    throw new Error('useEducatorOnboarding must be used within an EducatorOnboardingProvider');
  }
  return context;
};
