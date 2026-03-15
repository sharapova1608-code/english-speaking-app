import { Evaluation } from '@/types';

interface Props { evaluation: Evaluation; }

function ScoreBar({ label, score }: { label: string; score: number }) {
  const color = score >= 80 ? 'var(--green)' : score >= 55 ? '#f59e0b' : 'var(--red)';
  const bg = score >= 80 ? 'var(--green-light)' : score >= 55 ? '#fffbe6' : 'var(--red-light)';
  return (
    <div style={{ background: bg, borderRadius: 14, padding: '14px 18px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink-soft)' }}>{label}</span>
        <span style={{ fontWeight: 800, fontSize: 14, color }}>{score}/100</span>
      </div>
      <div style={{ height: 6, background: 'rgba(0,0,0,0.08)', borderRadius: 99 }}>
        <div style={{ height: '100%', width: `${score}%`, background: color, borderRadius: 99, transition: 'width 0.7s ease' }} />
      </div>
    </div>
  );
}

export default function EvaluationResult({ evaluation }: Props) {
  const { cefr_level, fluency_score, grammar_score, vocabulary_score, corrected_version, mistakes } = evaluation;

  return (
    <div style={{ marginTop: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <h3 style={{ fontWeight: 900, fontSize: 20, color: 'var(--ink)', margin: 0 }}>Your Feedback</h3>
        <span style={{ background: 'var(--yellow)', color: 'var(--yellow-text)', fontWeight: 800, fontSize: 14, padding: '4px 16px', borderRadius: 50 }}>
          {cefr_level}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
        <ScoreBar label="Fluency" score={fluency_score} />
        <ScoreBar label="Grammar" score={grammar_score} />
        <ScoreBar label="Vocabulary" score={vocabulary_score} />
      </div>

      <div style={{ background: 'var(--green-light)', borderRadius: 14, padding: '16px 18px', marginBottom: 16 }}>
        <p style={{ fontWeight: 700, fontSize: 13, color: 'var(--green)', marginBottom: 8 }}>✅ Corrected Version</p>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-soft)', margin: 0 }}>{corrected_version}</p>
      </div>

      {mistakes.length > 0 && (
        <div>
          <p style={{ fontWeight: 700, fontSize: 13, color: 'var(--red)', marginBottom: 10 }}>❌ Mistakes to Fix</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {mistakes.map((m, i) => (
              <div key={i} style={{ background: 'var(--red-light)', borderRadius: 14, padding: '14px 18px' }}>
                <p style={{ fontSize: 14, margin: 0, marginBottom: 4 }}>
                  <span style={{ textDecoration: 'line-through', color: 'var(--red)', fontWeight: 600 }}>{m.original}</span>
                  <span style={{ color: 'var(--ink-faint)' }}> → </span>
                  <span style={{ fontWeight: 700, color: 'var(--green)' }}>{m.correction}</span>
                </p>
                <p style={{ fontSize: 13, color: 'var(--ink-muted)', margin: 0, lineHeight: 1.5 }}>{m.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}