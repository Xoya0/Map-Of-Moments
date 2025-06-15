import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigationType, useLocation } from 'react-router-dom';

const NavigationContext = createContext(null);

export const NavigationProvider = ({ children }) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const navigationType = useNavigationType();
  const location = useLocation();

  useEffect(() => {
    // Show loader when navigation starts
    setIsNavigating(true);

    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 500); // Minimum loading time

    return () => clearTimeout(timer);
  }, [location.pathname, navigationType]);

  return (
    <NavigationContext.Provider value={{ isNavigating }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export default NavigationContext; 