import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { inMemoryUsers } from '@/lib/inMemoryUsers';

const USERS_FILE = path.join(process.cwd(), 'src', 'lib', 'users.json');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ ok: false, message: 'Missing fields' }, { status: 400 });
    }

    // Try to read existing users from file, fall back to empty
    let users: Array<any> = [];
    try {
      const data = await fs.readFile(USERS_FILE, 'utf-8');
      users = JSON.parse(data || '[]');
    } catch (readErr) {
      // ignore read errors; we'll use empty users and in-memory fallback
    }

    if (users.find((u: any) => u.email === email) || inMemoryUsers.find((u) => u.email === email)) {
      return NextResponse.json({ ok: false, message: 'User already exists' }, { status: 409 });
    }

    users.push({ email, password });

    // Attempt to persist to disk; if that fails (serverless), fall back to in-memory
    try {
      await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), 'utf-8');
    } catch (writeErr) {
      inMemoryUsers.push({ email, password });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set('pm_auth', '1', { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 });
    return res;
  } catch (err) {
    return NextResponse.json({ ok: false, message: 'Server error' }, { status: 500 });
  }
}
