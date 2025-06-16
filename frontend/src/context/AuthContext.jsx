import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const response = await api.get('/auth/me');
            setUser(response.data);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const handleError = (error) => {
        if (error.response?.data) {
            const data = error.response.data;
            if (typeof data === 'object') {
                const messages = Object.entries(data)
                    .map(([field, message]) => `${field}: ${message}`)
                    .join('\n');
                toast.error(messages);
            } else {
                toast.error(data);
            }
        } else {
            toast.error('An unexpected error occurred');
        }
        throw error;
    };

    const signup = async (email, password) => {
        try {
            const response = await api.post('/auth/signup', { email, password });
            
            if (response.data && response.data.user) {
                setUser(response.data.user);
                toast.success('Account created successfully!');
                navigate('/');
                return response.data;
            } else {
                throw new Error('Invalid response format');
            }
        } catch (error) {
            handleError(error);
        }
    };

    const login = async (email, password) => {
        try {
            const response = await api.post('/auth/login', { email, password });
            
            if (response.data && response.data.user) {
                setUser(response.data.user);
                toast.success('Logged in successfully!');
                navigate('/');
                return response.data;
            } else {
                throw new Error('Invalid response format');
            }
        } catch (error) {
            handleError(error);
        }
    };

    const logout = async () => {
        try {
            await api.post('/auth/logout');
            setUser(null);
            toast.success('Logged out successfully!');
            navigate('/auth');
        } catch (error) {
            handleError(error);
        }
    };

    const value = {
        user,
        loading,
        isAuthenticated: !!user,
        signup,
        login,
        logout
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext; 