import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (email === 'admin@example.com' && password === 'admin') {
      const res = NextResponse.json({ ok: true });
      res.cookies.set('pm_auth', '1', { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 });
      return res;
    }

    return NextResponse.json({ ok: false, message: 'Invalid credentials' }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ ok: false, message: 'Bad request' }, { status: 400 });
  }
}
