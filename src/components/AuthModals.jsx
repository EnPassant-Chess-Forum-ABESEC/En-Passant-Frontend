'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { loginSchema, signupSchema } from '../lib/validation/auth';

export default function AuthModals() {
  const { modalState, closeModal, login } = useAuth();
  
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (modalState) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [modalState, closeModal]);

  if (!modalState) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-ep-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-ep-gray hover:text-ep-black transition-colors font-mono text-xl"
        >
          &times;
        </button>
        {modalState === 'login' ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
}

function LoginForm() {
  const { openModal, login } = useAuth();
  const [formData, setFormData] = useState({ identifier: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      const formattedErrors = {};
      result.error.issues.forEach(issue => {
        formattedErrors[issue.path[0]] = issue.message;
      });
      setErrors(formattedErrors);
    } else {
      setErrors({});
      login({ username: formData.identifier });
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-4xl font-serif mb-2 tracking-tight">Log In</h2>
        <p className="text-ep-gray font-mono text-sm tracking-wide">Enter the arena.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <input 
            type="text" 
            placeholder="Username or Email" 
            value={formData.identifier}
            onChange={(e) => setFormData({...formData, identifier: e.target.value})}
            className={`w-full px-4 py-3 rounded-xl bg-ep-bg border ${errors.identifier ? 'border-ep-accent' : 'border-transparent'} focus:border-ep-black focus:outline-none transition-colors font-mono text-sm`}
          />
          {errors.identifier && <p className="text-ep-accent font-mono text-xs mt-1 px-1">{errors.identifier}</p>}
        </div>
        
        <div>
          <input 
            type="password" 
            placeholder="Password" 
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className={`w-full px-4 py-3 rounded-xl bg-ep-bg border ${errors.password ? 'border-ep-accent' : 'border-transparent'} focus:border-ep-black focus:outline-none transition-colors font-mono text-sm`}
          />
          {errors.password && <p className="text-ep-accent font-mono text-xs mt-1 px-1">{errors.password}</p>}
        </div>

        <div className="flex justify-between items-center">
          <a href="#" className="text-ep-gray hover:text-ep-black font-mono text-xs transition-colors" onClick={(e) => e.preventDefault()}>Forgot password?</a>
        </div>

        <button type="submit" className="w-full bg-ep-black text-ep-white py-3 rounded-xl font-mono text-sm hover:bg-ep-accent transition-colors mt-2">
          Log In
        </button>
      </form>

      <div className="text-center mt-2">
        <p className="font-mono text-xs text-ep-gray">
          Don't have an account? <button onClick={() => openModal('signup')} className="text-ep-black hover:text-ep-accent underline">Sign up</button>
        </p>
      </div>
    </div>
  );
}

function SignupForm() {
  const { openModal, login } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    birthdate: '',
    password: '',
    confirmPassword: '',
    chessUsername: ''
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = signupSchema.safeParse(formData);
    if (!result.success) {
      const formattedErrors = {};
      result.error.issues.forEach(issue => {
        formattedErrors[issue.path[0]] = issue.message;
      });
      setErrors(formattedErrors);
    } else {
      setErrors({});
      login({ name: formData.fullName, username: formData.username });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-4xl font-serif mb-2 tracking-tight">Sign Up</h2>
        <p className="text-ep-gray font-mono text-sm tracking-wide">Join the official chess club.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input 
              name="fullName"
              type="text" 
              placeholder="Full Name" 
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-ep-bg border ${errors.fullName ? 'border-ep-accent' : 'border-transparent'} focus:border-ep-black focus:outline-none transition-colors font-mono text-sm`}
            />
            {errors.fullName && <p className="text-ep-accent font-mono text-xs mt-1 px-1">{errors.fullName}</p>}
          </div>
          <div>
            <input 
              name="username"
              type="text" 
              placeholder="Username" 
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-ep-bg border ${errors.username ? 'border-ep-accent' : 'border-transparent'} focus:border-ep-black focus:outline-none transition-colors font-mono text-sm`}
            />
            {errors.username && <p className="text-ep-accent font-mono text-xs mt-1 px-1">{errors.username}</p>}
          </div>
        </div>

        <div>
          <input 
            name="email"
            type="email" 
            placeholder="Email Address" 
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-ep-bg border ${errors.email ? 'border-ep-accent' : 'border-transparent'} focus:border-ep-black focus:outline-none transition-colors font-mono text-sm`}
          />
          {errors.email && <p className="text-ep-accent font-mono text-xs mt-1 px-1">{errors.email}</p>}
        </div>

        <div>
          <input 
            name="birthdate"
            type="date" 
            placeholder="Birthdate" 
            value={formData.birthdate}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-ep-bg border ${errors.birthdate ? 'border-ep-accent' : 'border-transparent'} focus:border-ep-black focus:outline-none transition-colors font-mono text-sm ${!formData.birthdate ? 'text-ep-gray' : ''}`}
          />
          {errors.birthdate && <p className="text-ep-accent font-mono text-xs mt-1 px-1">{errors.birthdate}</p>}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input 
              name="password"
              type="password" 
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-ep-bg border ${errors.password ? 'border-ep-accent' : 'border-transparent'} focus:border-ep-black focus:outline-none transition-colors font-mono text-sm`}
            />
            {errors.password && <p className="text-ep-accent font-mono text-xs mt-1 px-1 leading-tight">{errors.password}</p>}
          </div>
          <div>
            <input 
              name="confirmPassword"
              type="password" 
              placeholder="Confirm Password" 
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-ep-bg border ${errors.confirmPassword ? 'border-ep-accent' : 'border-transparent'} focus:border-ep-black focus:outline-none transition-colors font-mono text-sm`}
            />
            {errors.confirmPassword && <p className="text-ep-accent font-mono text-xs mt-1 px-1 leading-tight">{errors.confirmPassword}</p>}
          </div>
        </div>

        <div>
          <input 
            name="chessUsername"
            type="text" 
            placeholder="Chess.com Username" 
            value={formData.chessUsername}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-ep-bg border ${errors.chessUsername ? 'border-ep-accent' : 'border-transparent'} focus:border-ep-black focus:outline-none transition-colors font-mono text-sm`}
          />
          {errors.chessUsername && <p className="text-ep-accent font-mono text-xs mt-1 px-1">{errors.chessUsername}</p>}
          {!errors.chessUsername && <p className="text-ep-gray font-mono text-xs mt-1 px-1">Used to pull stats for your Community profile.</p>}
        </div>

        <button type="submit" className="w-full bg-ep-black text-ep-white py-3 rounded-xl font-mono text-sm hover:bg-ep-accent transition-colors mt-2">
          Create Account
        </button>
      </form>

      <div className="text-center mt-2">
        <p className="font-mono text-xs text-ep-gray">
          Already have an account? <button onClick={() => openModal('login')} className="text-ep-black hover:text-ep-accent underline">Log in</button>
        </p>
      </div>
    </div>
  );
}
