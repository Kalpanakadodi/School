import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, User, Eye, EyeOff, ShieldCheck, ArrowLeft } from 'lucide-react';
import Logo from '../components/common/Logo';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }

    setLoading(true);
    setError('');

    const res = await login(username, password);
    setLoading(false);

    if (res.success) {
      navigate('/admin');
    } else {
      setError(res.message || 'Invalid username or password.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="inline-block bg-white p-3 rounded-2xl shadow-card border border-[#E5E7EB] mb-4">
          <Logo size="md" showText={false} />
        </div>
        <h2 className="text-2xl font-bold font-serif text-[#222222]">
          Staff & Administration Portal
        </h2>
        <p className="mt-1 text-xs text-[#666666]">
          Augustine English Medium HPS & HS, Hallikhed (B)
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 sm:px-10 rounded-2xl shadow-card border border-[#E5E7EB] space-y-6">
          {error && (
            <div className="p-3 text-xs bg-red-50 border border-red-200 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                Admin Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-white border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333]"
                  placeholder="Enter username"
                  required
                />
                <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-10 py-2.5 text-sm bg-white border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333]"
                  placeholder="Enter password"
                  required
                />
                <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Test Credentials Helper Card */}
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] p-3 rounded-md text-xs text-[#555555]">
              <span className="font-bold text-[#333333] block">Default Admin Credentials:</span>
              <p className="mt-0.5">Username: <code className="bg-gray-200 px-1 py-0.5 rounded text-[#111111] font-mono">admin</code></p>
              <p>Password: <code className="bg-gray-200 px-1 py-0.5 rounded text-[#111111] font-mono">admin123</code></p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#333333] hover:bg-black rounded-md shadow-sm transition-all duration-150 disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
            </button>
          </form>

          <div className="pt-4 border-t border-gray-100 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs text-[#666666] hover:text-[#222222] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Website</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
