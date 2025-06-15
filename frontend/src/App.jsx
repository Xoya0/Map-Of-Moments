import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes';
import PageLoader from './components/PageLoader';

function AppContent() {
  const { isNavigating } = useNavigation();
  
  return (
    <>
      {isNavigating && <PageLoader />}
      <Toaster position="top-right" />
      <AppRoutes />
    </>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <NavigationProvider>
          <AppContent />
        </NavigationProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;