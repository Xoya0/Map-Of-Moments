import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './index.css';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const { login, signup, error } = useAuth();

  const validateForm = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const success = isLogin 
        ? await login(email, password)
        : await signup(email, password);
      
      if (success) {
        navigate('/');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-2 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-4 sm:p-8 md:p-10 rounded-2xl auth-container shadow-2xl flex flex-col items-center">
        <div className="w-full flex flex-col items-center mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center">
            {isLogin ? 'Welcome Back!' : 'Join Map Of Moments'}
          </h2>
          <p className="mt-2 text-center text-sm sm:text-base text-gray-300">
            {isLogin ? 'Sign in to continue your journey' : 'Create an account to get started'}
          </p>
        </div>

        {error && (
          <div className="error-message bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg w-full mb-2" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form className="w-full space-y-6" onSubmit={handleSubmit} autoComplete="off">
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-300 mb-1">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="auth-input appearance-none block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {formErrors.email && (
                <p className="mt-1 text-xs sm:text-sm text-red-400">{formErrors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="auth-input appearance-none block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {formErrors.password && (
                <p className="mt-1 text-xs sm:text-sm text-red-400">{formErrors.password}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              disabled={isLoading}
              className="auth-button group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {isLoading ? (
                <div className="loading-spinner" />
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="auth-toggle text-sm sm:text-base text-blue-300 hover:text-white transition"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="auth-button group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-semibold rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition"
            >
              Back to Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;