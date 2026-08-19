import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const USERS_FILE = path.join(process.cwd(), 'src', 'lib', 'users.json');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const data = await fs.readFile(USERS_FILE, 'utf-8');
    const users = JSON.parse(data || '[]');

    const user = users.find((u: any) => u.email === email && u.password === password);
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
