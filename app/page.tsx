import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* Header */}
      <header style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🗣️</div>
            <span style={{ fontWeight: 800, fontSize: 18, color: 'var(--ink)' }}>SpeakUp</span>
          </div>
          <Link href="/levels" style={{ background: 'var(--yellow)', color: 'var(--yellow-text)', fontWeight: 700, fontSize: 15, padding: '10px 24px', borderRadius: 50, textDecoration: 'none' }}>
            Start Practising
          </Link>
        </div>
      </header>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 32px' }}>

        {/* Hero card */}
        <div style={{ background: 'var(--card)', borderRadius: 24, padding: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', marginBottom: 32 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--purple-light)', color: 'var(--purple-text)', borderRadius: 50, padding: '4px 14px', fontSize: 13, fontWeight: 700, marginBottom: 16 }}>
              ✨ AI-Powered Feedback
            </div>
            <h1 style={{ fontWeight: 900, fontSize: 42, lineHeight: 1.15, color: 'var(--ink)', marginBottom: 16 }}>
              Practise Speaking English — and Actually Improve
            </h1>
            <p style={{ fontSize: 17, color: 'var(--ink-muted)', lineHeight: 1.7, marginBottom: 32 }}>
              Record your answers, get instant feedback on fluency, grammar and vocabulary. Choose your level and topic — just like a real exam.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/levels" style={{ background: 'var(--yellow)', color: 'var(--yellow-text)', fontWeight: 800, fontSize: 16, padding: '14px 32px', borderRadius: 50, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                ▶ Start Now
              </Link>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { emoji: '🎯', label: '5 Levels', desc: 'A1 to C1', color: 'var(--yellow)', bg: '#fffbe6' },
              { emoji: '💬', label: '15 Topics', desc: 'Varied subjects', color: 'var(--purple)', bg: 'var(--purple-light)' },
              { emoji: '🎙️', label: 'Live Mode', desc: 'No prep needed', color: 'var(--red)', bg: 'var(--red-light)' },
              { emoji: '📊', label: 'AI Scores', desc: 'Instant feedback', color: 'var(--green)', bg: 'var(--green-light)' },
            ].map(({ emoji, label, desc, color, bg }) => (
              <div key={label} style={{ background: bg, borderRadius: 16, padding: 20 }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{emoji}</div>
                <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--ink)' }}>{label}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-muted)', marginTop: 2 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div style={{ background: 'var(--card)', borderRadius: 24, padding: 40 }}>
          <h2 style={{ fontWeight: 900, fontSize: 26, marginBottom: 32, color: 'var(--ink)' }}>How it works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { step: '01', title: 'Choose your level & topic', desc: 'Pick from A1 to C1 and select a topic you want to talk about.', color: 'var(--yellow)', bg: '#fffbe6' },
              { step: '02', title: 'Record your answer', desc: 'Speak freely — with preparation or live without any notes.', color: 'var(--purple)', bg: 'var(--purple-light)' },
              { step: '03', title: 'Get instant feedback', desc: 'AI scores your fluency, grammar, and vocabulary in seconds.', color: 'var(--green)', bg: 'var(--green-light)' },
            ].map(({ step, title, desc, color, bg }) => (
              <div key={step} style={{ background: bg, borderRadius: 16, padding: 24 }}>
                <div style={{ fontWeight: 900, fontSize: 32, color, marginBottom: 12 }}>{step}</div>
                <div style={{ fontWeight: 800, fontSize: 17, color: 'var(--ink)', marginBottom: 8 }}>{title}</div>
                <div style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}