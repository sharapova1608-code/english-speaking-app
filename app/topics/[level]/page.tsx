import Link from 'next/link';
import { topics } from '@/lib/data/topics';
import { CEFRLevel } from '@/types';

export default async function TopicsPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  const cefrLevel = level as CEFRLevel;
  const levelTopics = topics[cefrLevel] ?? [];

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <header style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🗣️</div>
            <span style={{ fontWeight: 800, fontSize: 17, color: 'var(--ink)' }}>SpeakUp</span>
          </Link>
          <Link href="/levels" style={{ fontSize: 14, color: 'var(--ink-muted)', textDecoration: 'none', fontWeight: 600 }}>← Back</Link>
        </div>
      </header>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 32px' }}>
        <p style={{ fontSize: 14, color: 'var(--ink-muted)', fontWeight: 600, marginBottom: 8 }}>Step 2 of 2 · Level {cefrLevel}</p>
        <h1 style={{ fontWeight: 900, fontSize: 36, color: 'var(--ink)', marginBottom: 8 }}>Choose a Topic</h1>
        <p style={{ fontSize: 16, color: 'var(--ink-muted)', marginBottom: 32, lineHeight: 1.6 }}>
          Pick what you want to talk about today.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {levelTopics.map((t) => (
            <div key={t.id} style={{ background: 'var(--card)', borderRadius: 20, padding: '24px', border: '2px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <span style={{ fontSize: 28 }}>{t.emoji}</span>
                <div>
                  <h2 style={{ fontWeight: 800, fontSize: 19, color: 'var(--ink)', margin: 0 }}>{t.label}</h2>
                  <p style={{ fontSize: 14, color: 'var(--ink-muted)', margin: 0, marginTop: 2 }}>{t.description}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link href={`/practice/${cefrLevel}/${t.id}?mode=prep`} style={{
                  flex: 1, textAlign: 'center', background: 'var(--yellow)', color: 'var(--yellow-text)',
                  fontWeight: 700, fontSize: 14, padding: '12px', borderRadius: 50, textDecoration: 'none'
                }}>
                  📋 With Prep
                </Link>
                <Link href={`/practice/${cefrLevel}/${t.id}?mode=live`} style={{
                  flex: 1, textAlign: 'center', background: 'var(--purple-light)', color: 'var(--purple-text)',
                  fontWeight: 700, fontSize: 14, padding: '12px', borderRadius: 50, textDecoration: 'none'
                }}>
                  🎙️ Live
                </Link>
                <Link href={`/vocabulary/${cefrLevel}/${t.id}`} style={{
                  flex: 1, textAlign: 'center', background: 'var(--green-light)', color: 'var(--green)',
                  fontWeight: 700, fontSize: 14, padding: '12px', borderRadius: 50, textDecoration: 'none'
                }}>
                  📚 Vocabulary
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}