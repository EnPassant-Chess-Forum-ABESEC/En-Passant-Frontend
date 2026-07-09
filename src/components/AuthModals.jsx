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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ep-bg/80 backdrop-blur-md transition-opacity">
      <div 
        className="bg-ep-bg border border-ep-border shadow-2xl w-full max-w-md p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={closeModal}
          className="absolute top-6 right-6 text-ep-gray hover:text-ep-white transition-colors font-mono text-xs uppercase tracking-widest"
        >
          [ CLOSE ]
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
    <div className="flex flex-col gap-8 mt-4">
      <div>
        <h2 className="text-3xl font-mono uppercase tracking-tight text-ep-black mb-2">Log In</h2>
        <p className="text-ep-gray font-mono text-xs tracking-widest uppercase">Enter the arena.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <input 
            type="text" 
            placeholder="USERNAME OR EMAIL" 
            value={formData.identifier}
            onChange={(e) => setFormData({...formData, identifier: e.target.value})}
            className={`w-full px-4 py-3 bg-ep-bg border-b ${errors.identifier ? 'border-ep-white text-ep-white' : 'border-ep-border text-ep-gray'} focus:border-ep-white focus:text-ep-white focus:outline-none transition-colors font-mono text-xs tracking-widest uppercase`}
          />
          {errors.identifier && <p className="text-ep-white font-mono text-[10px] uppercase tracking-widest mt-2">{errors.identifier}</p>}
        </div>
        
        <div>
          <input 
            type="password" 
            placeholder="PASSWORD" 
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className={`w-full px-4 py-3 bg-ep-bg border-b ${errors.password ? 'border-ep-white text-ep-white' : 'border-ep-border text-ep-gray'} focus:border-ep-white focus:text-ep-white focus:outline-none transition-colors font-mono text-xs tracking-widest uppercase`}
          />
          {errors.password && <p className="text-ep-white font-mono text-[10px] uppercase tracking-widest mt-2">{errors.password}</p>}
        </div>

        <div className="flex justify-end items-center">
          <a href="#" className="text-ep-gray hover:text-ep-white font-mono text-[10px] uppercase tracking-widest transition-colors" onClick={(e) => e.preventDefault()}>FORGOT PASSWORD?</a>
        </div>

        <button type="submit" className="w-full bg-ep-white text-ep-black py-4 font-mono text-xs uppercase tracking-widest hover:bg-ep-black hover:text-ep-white border border-ep-white transition-all mt-4">
          LOG IN
        </button>
      </form>

      <div className="text-center mt-4 border-t border-ep-border pt-6">
        <p className="font-mono text-[10px] uppercase tracking-widest text-ep-gray">
          Don't have an account? <button onClick={() => openModal('signup')} className="text-ep-white hover:text-ep-gray underline transition-colors ml-2">SIGN UP</button>
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
    <div className="flex flex-col gap-8 mt-4">
      <div>
        <h2 className="text-3xl font-mono uppercase tracking-tight text-ep-black mb-2">Sign Up</h2>
        <p className="text-ep-gray font-mono text-xs tracking-widest uppercase">Join the official forum.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input 
              name="fullName"
              type="text" 
              placeholder="FULL NAME" 
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-ep-bg border-b ${errors.fullName ? 'border-ep-white text-ep-white' : 'border-ep-border text-ep-gray'} focus:border-ep-white focus:text-ep-white focus:outline-none transition-colors font-mono text-xs tracking-widest uppercase`}
            />
            {errors.fullName && <p className="text-ep-white font-mono text-[10px] uppercase tracking-widest mt-2">{errors.fullName}</p>}
          </div>
          <div>
            <input 
              name="username"
              type="text" 
              placeholder="USERNAME" 
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-ep-bg border-b ${errors.username ? 'border-ep-white text-ep-white' : 'border-ep-border text-ep-gray'} focus:border-ep-white focus:text-ep-white focus:outline-none transition-colors font-mono text-xs tracking-widest uppercase`}
            />
            {errors.username && <p className="text-ep-white font-mono text-[10px] uppercase tracking-widest mt-2">{errors.username}</p>}
          </div>
        </div>

        <div>
          <input 
            name="email"
            type="email" 
            placeholder="EMAIL ADDRESS" 
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-ep-bg border-b ${errors.email ? 'border-ep-white text-ep-white' : 'border-ep-border text-ep-gray'} focus:border-ep-white focus:text-ep-white focus:outline-none transition-colors font-mono text-xs tracking-widest uppercase`}
          />
          {errors.email && <p className="text-ep-white font-mono text-[10px] uppercase tracking-widest mt-2">{errors.email}</p>}
        </div>

        <div>
          <input 
            name="birthdate"
            type="date" 
            placeholder="BIRTHDATE" 
            value={formData.birthdate}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-ep-bg border-b ${errors.birthdate ? 'border-ep-white text-ep-white' : 'border-ep-border text-ep-gray'} focus:border-ep-white focus:text-ep-white focus:outline-none transition-colors font-mono text-xs tracking-widest uppercase ${!formData.birthdate ? 'text-ep-gray/50' : ''}`}
          />
          {errors.birthdate && <p className="text-ep-white font-mono text-[10px] uppercase tracking-widest mt-2">{errors.birthdate}</p>}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input 
              name="password"
              type="password" 
              placeholder="PASSWORD" 
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-ep-bg border-b ${errors.password ? 'border-ep-white text-ep-white' : 'border-ep-border text-ep-gray'} focus:border-ep-white focus:text-ep-white focus:outline-none transition-colors font-mono text-xs tracking-widest uppercase`}
            />
            {errors.password && <p className="text-ep-white font-mono text-[10px] uppercase tracking-widest mt-2 leading-tight">{errors.password}</p>}
          </div>
          <div>
            <input 
              name="confirmPassword"
              type="password" 
              placeholder="CONFIRM PASSWORD" 
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-ep-bg border-b ${errors.confirmPassword ? 'border-ep-white text-ep-white' : 'border-ep-border text-ep-gray'} focus:border-ep-white focus:text-ep-white focus:outline-none transition-colors font-mono text-xs tracking-widest uppercase`}
            />
            {errors.confirmPassword && <p className="text-ep-white font-mono text-[10px] uppercase tracking-widest mt-2 leading-tight">{errors.confirmPassword}</p>}
          </div>
        </div>

        <div>
          <input 
            name="chessUsername"
            type="text" 
            placeholder="CHESS.COM USERNAME" 
            value={formData.chessUsername}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-ep-bg border-b ${errors.chessUsername ? 'border-ep-white text-ep-white' : 'border-ep-border text-ep-gray'} focus:border-ep-white focus:text-ep-white focus:outline-none transition-colors font-mono text-xs tracking-widest uppercase`}
          />
          {errors.chessUsername && <p className="text-ep-white font-mono text-[10px] uppercase tracking-widest mt-2">{errors.chessUsername}</p>}
          {!errors.chessUsername && <p className="text-ep-gray font-mono text-[9px] uppercase tracking-widest mt-2">USED FOR COMMUNITY STATS.</p>}
        </div>

        <button type="submit" className="w-full bg-ep-white text-ep-black py-4 font-mono text-xs uppercase tracking-widest hover:bg-ep-black hover:text-ep-white border border-ep-white transition-all mt-4">
          CREATE ACCOUNT
        </button>
      </form>

      <div className="text-center mt-2 border-t border-ep-border pt-6">
        <p className="font-mono text-[10px] uppercase tracking-widest text-ep-gray">
          Already have an account? <button onClick={() => openModal('login')} className="text-ep-white hover:text-ep-gray underline transition-colors ml-2">LOG IN</button>
        </p>
      </div>
    </div>
  );
}
