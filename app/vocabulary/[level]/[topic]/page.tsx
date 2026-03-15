import Link from 'next/link';
import { vocabulary } from '@/lib/vocabulary';
import { topics } from '@/lib/data/topics';
import { CEFRLevel } from '@/types';

export default async function VocabularyPage({ params }: { params: Promise<{ level: string; topic: string }> }) {
  const { level, topic } = await params;
  const cefrLevel = level as CEFRLevel;
  const topicData = topics[cefrLevel]?.find(t => t.id === topic)
    ?? Object.values(topics).flat().find(t => t.id === topic);
  const sections = vocabulary[topic]?.[cefrLevel] ?? [];

  const typeColors: Record<string, { bg: string; color: string }> = {
    noun:      { bg: '#e8f4ff', color: '#1a5fa0' },
    verb:      { bg: '#e6faf3', color: '#1a6b3a' },
    adjective: { bg: '#fffbe6', color: '#7a5f00' },
    phrase:    { bg: 'var(--purple-light)', color: 'var(--purple-text)' },
  };

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <header style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🗣️</div>
            <span style={{ fontWeight: 800, fontSize: 17, color: 'var(--ink)' }}>SpeakUp</span>
          </Link>
          <Link href={`/practice/${cefrLevel}/${topic}?mode=prep`} style={{ fontSize: 14, color: 'var(--ink-muted)', textDecoration: 'none', fontWeight: 600 }}>← Back to Practice</Link>
        </div>
      </header>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 32px' }}>

        {/* Header */}
        <div style={{ background: 'var(--card)', borderRadius: 20, padding: 28, marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
            <span style={{ fontSize: 36 }}>{topicData?.emoji ?? '📖'}</span>
            <div>
              <h1 style={{ fontWeight: 900, fontSize: 28, color: 'var(--ink)', margin: 0 }}>
                {topicData?.label ?? topic} — Vocabulary
              </h1>
              <p style={{ fontSize: 14, color: 'var(--ink-muted)', margin: 0, marginTop: 4 }}>
                Key words and phrases for this topic
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ background: '#fffbe6', color: 'var(--yellow-text)', fontWeight: 700, fontSize: 13, padding: '4px 14px', borderRadius: 50 }}>
              {cefrLevel}
            </span>
            <span style={{ background: 'var(--purple-light)', color: 'var(--purple-text)', fontWeight: 700, fontSize: 13, padding: '4px 14px', borderRadius: 50 }}>
              {sections.reduce((acc, s) => acc + s.words.length, 0)} words
            </span>
          </div>
        </div>

        {sections.length === 0 ? (
          <div style={{ background: 'var(--card)', borderRadius: 20, padding: 40, textAlign: 'center' }}>
            <p style={{ fontSize: 16, color: 'var(--ink-muted)' }}>No vocabulary available for this level yet.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {sections.map((section) => (
              <div key={section.category} style={{ background: 'var(--card)', borderRadius: 20, padding: 24 }}>
                <h2 style={{ fontWeight: 800, fontSize: 18, color: 'var(--ink)', marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--border)' }}>
                  {section.category}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {section.words.map((w) => {
                    const tc = typeColors[w.type] ?? { bg: 'var(--bg)', color: 'var(--ink-muted)' };
                    return (
                      <div key={w.word} style={{ background: 'var(--bg)', borderRadius: 14, padding: '16px 18px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                          <span style={{ fontWeight: 800, fontSize: 17, color: 'var(--ink)' }}>{w.word}</span>
                          <span style={{ background: tc.bg, color: tc.color, fontWeight: 700, fontSize: 12, padding: '2px 10px', borderRadius: 50 }}>
                            {w.type}
                          </span>
                        </div>
                        <p style={{ fontSize: 14, color: 'var(--ink-muted)', margin: 0, marginBottom: 6, lineHeight: 1.5 }}>
                          {w.definition}
                        </p>
                        <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: 0, fontStyle: 'italic', borderLeft: '3px solid var(--yellow)', paddingLeft: 10 }}>
                          "{w.example}"
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Link to practice */}
        <div style={{ marginTop: 24, background: 'var(--card)', borderRadius: 20, padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontWeight: 800, fontSize: 16, color: 'var(--ink)', margin: 0 }}>Ready to practise?</p>
            <p style={{ fontSize: 14, color: 'var(--ink-muted)', margin: 0, marginTop: 4 }}>Use these words in your speaking practice.</p>
          </div>
          <Link href={`/practice/${cefrLevel}/${topic}?mode=prep`} style={{ background: 'var(--yellow)', color: 'var(--yellow-text)', fontWeight: 700, fontSize: 14, padding: '12px 24px', borderRadius: 50, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Start Practice →
          </Link>
        </div>
      </div>
    </main>
  );
}