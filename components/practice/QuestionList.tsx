'use client';
import { useState, useEffect } from 'react';
import { Question } from '@/types';
import VoiceRecorder from './VoiceRecorder';

interface Props { questions: Question[]; level: string; topic: string; }

export default function QuestionList({ questions: initial, level, topic }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Array.isArray(initial) && initial.length > 0) {
      setQuestions(initial);
    }
  }, [initial]);

  const regenerate = async () => {
    setLoading(true);
    setActiveId(null);
    try {
      const res = await fetch('/api/generate-questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ level, topic }),
      });
      const data = await res.json();
      setQuestions(Array.isArray(data.questions) ? data.questions : []);
    } catch {
      alert('Failed. Try again.');
    }
    setLoading(false);
  };

  return (
    <div>
      {questions.length === 0 ? (
        <p style={{ fontSize: 15, color: 'var(--ink-muted)', marginBottom: 20 }}>
          No questions yet — generate some below.
        </p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
          {questions.map((q, i) => (
            <div key={q.id} style={{
              background: 'var(--bg)',
              borderRadius: 16,
              border: `2px solid ${activeId === q.id ? 'var(--yellow)' : 'var(--border)'}`,
              overflow: 'hidden',
              transition: 'border 0.15s'
            }}>
              <button
                onClick={() => setActiveId(activeId === q.id ? null : q.id)}
                style={{ width: '100%', display: 'flex', alignItems: 'flex-start', gap: 14, padding: '18px 20px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                <span style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--yellow)', color: 'var(--yellow-text)', fontWeight: 800, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {i + 1}
                </span>
                <span style={{ fontSize: 16, color: 'var(--ink)', lineHeight: 1.5, flex: 1, fontWeight: 600 }}>{q.text}</span>
                <span style={{ color: 'var(--ink-faint)', fontSize: 18, marginTop: 2, transform: activeId === q.id ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}>›</span>
              </button>
              {activeId === q.id && (
                <div style={{ padding: '4px 20px 20px 20px', borderTop: '1px solid var(--border)' }}>
                  <VoiceRecorder question={q.text} level={level} topic={topic} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <button
        onClick={regenerate}
        disabled={loading}
        style={{ width: '100%', background: 'var(--purple-light)', color: 'var(--purple-text)', fontWeight: 700, fontSize: 14, padding: '14px', borderRadius: 50, border: 'none', cursor: 'pointer', opacity: loading ? 0.6 : 1 }}
      >
        {loading ? '⏳ Generating…' : '🔄 Generate New Questions'}
      </button>
    </div>
  );
}