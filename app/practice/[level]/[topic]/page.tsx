import Link from 'next/link';
import { topics, questions } from '@/lib/data/topics';
import { CEFRLevel } from '@/types';
import QuestionList from '@/components/practice/QuestionList';
import LivePractice from '@/components/practice/LivePractice';

export default async function PracticePage({ params, searchParams }: {
  params: Promise<{ level: string; topic: string }>;
  searchParams: Promise<{ mode?: string }>;
}) {
  const { level, topic } = await params;
  const { mode } = await searchParams;
  const cefrLevel = level as CEFRLevel;
  const topicData = topics[cefrLevel]?.find((t) => t.id === topic);
  const qs = questions[topic] ?? [];
  const isLive = mode === 'live';

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <header style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🗣️</div>
            <span style={{ fontWeight: 800, fontSize: 17, color: 'var(--ink)' }}>SpeakUp</span>
          </Link>
          <Link href={`/topics/${cefrLevel}`} style={{ fontSize: 14, color: 'var(--ink-muted)', textDecoration: 'none', fontWeight: 600 }}>← Back</Link>
        </div>
      </header>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 32px' }}>
        {/* Topic header card */}
        <div style={{ background: 'var(--card)', borderRadius: 20, padding: 28, marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
            <span style={{ fontSize: 36 }}>{topicData?.emoji}</span>
            <div>
              <h1 style={{ fontWeight: 900, fontSize: 28, color: 'var(--ink)', margin: 0 }}>{topicData?.label}</h1>
              <p style={{ fontSize: 14, color: 'var(--ink-muted)', margin: 0, marginTop: 4 }}>{topicData?.description}</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ background: '#fffbe6', color: 'var(--yellow-text)', fontWeight: 700, fontSize: 13, padding: '4px 14px', borderRadius: 50 }}>
              {cefrLevel}
            </span>
            <span style={{ background: isLive ? 'var(--purple-light)' : 'var(--green-light)', color: isLive ? 'var(--purple-text)' : 'var(--green)', fontWeight: 700, fontSize: 13, padding: '4px 14px', borderRadius: 50 }}>
              {isLive ? '🎙️ Live' : '📋 With Prep'}
            </span>
          </div>
        </div>

        {/* Practice area */}
        <div style={{ background: 'var(--card)', borderRadius: 20, padding: 28 }}>
          {isLive
            ? <LivePractice level={cefrLevel} topic={topic} />
            : <QuestionList questions={qs} level={cefrLevel} topic={topic} />
          }
        </div>
      </div>
    </main>
  );
}