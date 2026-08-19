import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { inMemoryUsers } from '@/lib/inMemoryUsers';

const USERS_FILE = path.join(process.cwd(), 'src', 'lib', 'users.json');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    let users: Array<any> = [];
    try {
      const data = await fs.readFile(USERS_FILE, 'utf-8');
      users = JSON.parse(data || '[]');
    } catch (readErr) {
      // ignore read errors; we'll check in-memory users too
    }

    const user = users.find((u: any) => u.email === email && u.password === password) || inMemoryUsers.find((u) => u.email === email && u.password === password);
    if (user) {
      const res = NextResponse.json({ ok: true });
      res.cookies.set('pm_auth', '1', { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 });
      return res;
    }

    return NextResponse.json({ ok: false, message: 'Invalid credentials' }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ ok: false, message: 'Bad request' }, { status: 400 });
  }
}
