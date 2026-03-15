'use client';
import Link from 'next/link';

const LEVELS = [
  { id: 'A1', label: 'Beginner', desc: 'Basic phrases and everyday expressions.', emoji: '🌱', color: '#e6faf3', accent: 'var(--green)' },
  { id: 'A2', label: 'Elementary', desc: 'Simple communication on familiar topics.', emoji: '📗', color: '#e8f4ff', accent: 'var(--blue)' },
  { id: 'B1', label: 'Intermediate', desc: 'Clear speech on work, travel, and events.', emoji: '⭐', color: '#fffbe6', accent: 'var(--yellow-dark)' },
  { id: 'B2', label: 'Upper-Intermediate', desc: 'Fluent interaction with native speakers.', emoji: '🚀', color: 'var(--purple-light)', accent: 'var(--purple)' },
  { id: 'C1', label: 'Advanced', desc: 'Flexible, nuanced, and effective expression.', emoji: '🏆', color: 'var(--red-light)', accent: 'var(--red)' },
];

export default function LevelsPage() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <header style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🗣️</div>
            <span style={{ fontWeight: 800, fontSize: 17, color: 'var(--ink)' }}>SpeakUp</span>
          </Link>
        </div>
      </header>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 32px' }}>
        <p style={{ fontSize: 14, color: 'var(--ink-muted)', fontWeight: 600, marginBottom: 8 }}>Step 1 of 2</p>
        <h1 style={{ fontWeight: 900, fontSize: 36, color: 'var(--ink)', marginBottom: 8 }}>Choose Your Level</h1>
        <p style={{ fontSize: 16, color: 'var(--ink-muted)', marginBottom: 32, lineHeight: 1.6 }}>
          Select the CEFR level that matches your current English ability.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {LEVELS.map((l) => (
            <Link key={l.id} href={`/topics/${l.id}`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--card)', borderRadius: 20, padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 20, border: '2px solid transparent', transition: 'border 0.15s', cursor: 'pointer' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--yellow)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: l.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>
                  {l.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <span style={{ fontWeight: 800, fontSize: 17, color: 'var(--ink)' }}>{l.label}</span>
                    <span style={{ background: l.color, color: l.accent, fontWeight: 700, fontSize: 12, padding: '2px 10px', borderRadius: 50 }}>{l.id}</span>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--ink-muted)', margin: 0 }}>{l.desc}</p>
                </div>
                <span style={{ color: 'var(--ink-faint)', fontSize: 20 }}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}