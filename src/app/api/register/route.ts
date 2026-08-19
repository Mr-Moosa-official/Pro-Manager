import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const USERS_FILE = path.join(process.cwd(), 'src', 'lib', 'users.json');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ ok: false, message: 'Missing fields' }, { status: 400 });
    }

    const data = await fs.readFile(USERS_FILE, 'utf-8');
    const users = JSON.parse(data || '[]');

    if (users.find((u: any) => u.email === email)) {
      return NextResponse.json({ ok: false, message: 'User already exists' }, { status: 409 });
    }

    users.push({ email, password });
    await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), 'utf-8');

    const res = NextResponse.json({ ok: true });
    res.cookies.set('pm_auth', '1', { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 });
    return res;
  } catch (err) {
    return NextResponse.json({ ok: false, message: 'Server error' }, { status: 500 });
  }
}
