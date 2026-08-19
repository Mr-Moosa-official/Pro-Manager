export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 40, margin: 0 }}>Welcome to Pro Manager</h1>
        <p style={{ marginTop: 12, color: '#6b7280' }}>Manage projects, tasks, and teams.</p>
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
        <img
          src="/mr-moosa-official-monogram.png"
          alt="Mr Moosa Official"
          style={{ height: 72, width: 'auto', display: 'block', margin: '0 auto' }}
        />
        <div style={{ fontSize: 12, marginTop: 6 }}>made by mr.moosa.official</div>
      </a>
    </main>
  );
}
