'use client';
import { useAudioRecorder } from '@/hooks/useAudioRecorder';
import { useEvaluation } from '@/hooks/useEvaluation';
import EvaluationResult from './EvaluationResult';

interface Props { question: string; level: string; topic: string; }

export default function VoiceRecorder({ question, level, topic }: Props) {
  const { state, transcript, audioUrl, start, stop, reset } = useAudioRecorder();
  const { state: evalState, evaluation, evaluate, reset: resetEval } = useEvaluation();

  return (
    <div style={{ paddingTop: 16 }}>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
        {state === 'idle' && (
          <button onClick={start} style={{ background: 'var(--yellow)', color: 'var(--yellow-text)', fontWeight: 700, fontSize: 15, padding: '12px 28px', borderRadius: 50, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            🎙️ Record Answer
          </button>
        )}
        {state === 'recording' && (
          <button onClick={stop} style={{ background: 'var(--red)', color: 'white', fontWeight: 700, fontSize: 15, padding: '12px 28px', borderRadius: 50, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            ⏹ Stop Recording
          </button>
        )}
        {state === 'processing' && (
          <div style={{ background: 'var(--blue-light)', color: 'var(--blue)', fontWeight: 600, fontSize: 14, padding: '12px 24px', borderRadius: 50 }}>
            ⏳ Transcribing…
          </div>
        )}
        {state === 'done' && (
          <button onClick={() => { reset(); resetEval(); }} style={{ background: 'var(--bg)', color: 'var(--ink-muted)', fontWeight: 600, fontSize: 14, padding: '12px 24px', borderRadius: 50, border: '2px solid var(--border)', cursor: 'pointer' }}>
            ↺ Record Again
          </button>
        )}
        {state === 'error' && <p style={{ fontSize: 14, color: 'var(--red)', fontWeight: 600 }}>Something went wrong. Try again.</p>}
      </div>

      {audioUrl && <audio controls src={audioUrl} style={{ width: '100%', marginBottom: 16, borderRadius: 12 }} />}

      {transcript && (
        <div style={{ background: 'var(--bg)', borderRadius: 14, padding: '14px 18px', marginBottom: 16 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink-faint)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Transcript</p>
          <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.7, margin: 0 }}>{transcript}</p>
        </div>
      )}

      {transcript && evalState === 'idle' && (
        <button onClick={() => evaluate(transcript, question, level, topic)} style={{ width: '100%', background: 'var(--purple)', color: 'white', fontWeight: 700, fontSize: 15, padding: '14px', borderRadius: 50, border: 'none', cursor: 'pointer' }}>
          ✨ Evaluate My Answer
        </button>
      )}
      {evalState === 'loading' && (
        <div style={{ textAlign: 'center', color: 'var(--ink-muted)', fontSize: 14, fontWeight: 600, padding: '16px 0' }}>
          Analysing your English…
        </div>
      )}
      {evalState === 'done' && evaluation && <EvaluationResult evaluation={evaluation} />}
    </div>
  );
}