"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('pm_auth') === 'true') {
      router.push('/dashboard');
    }
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push('/dashboard');
      } else {
        const data = await res.json();
        setError(data?.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    }
  }

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 420, background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 6px 18px rgba(0,0,0,0.06)' }}>
        <h1 style={{ fontSize: 28, margin: '0 0 8px' }}>Sign in to Pro Manager</h1>
        <p style={{ margin: '0 0 16px', color: '#6b7280' }}>Enter your email and password to continue.</p>

        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: 8 }}>
            <div style={{ fontSize: 12, color: '#374151', marginBottom: 6 }}>Email</div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: 6, border: '1px solid #e5e7eb' }} placeholder="you@example.com" />
          </label>

          <label style={{ display: 'block', margin: '12px 0 8px' }}>
            <div style={{ fontSize: 12, color: '#374151', marginBottom: 6 }}>Password</div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: 6, border: '1px solid #e5e7eb' }} placeholder="Password" />
          </label>

          {error && <div style={{ color: '#b91c1c', marginTop: 8 }}>{error}</div>}

          <button type="submit" style={{ marginTop: 16, width: '100%', padding: '10px 12px', borderRadius: 6, background: '#111827', color: '#fff', border: 'none' }}>Sign in</button>
        </form>
      </div>

      <a
        href="https://github.com/Mr-Moosa-official"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <img src="/mr-moosa-official-monogram.png" alt="Mr Moosa Official" style={{ height: 56, width: 'auto', display: 'block', margin: '0 auto' }} />
        <div style={{ fontSize: 12, marginTop: 6 }}>made by mr.moosa.official</div>
      </a>
    </main>
  );
}
