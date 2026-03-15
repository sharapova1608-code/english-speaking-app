'use client';
import { useState, useRef } from 'react';
import { useAudioRecorder } from '@/hooks/useAudioRecorder';
import EvaluationResult from './EvaluationResult';
import { Evaluation } from '@/types';

interface Message { role: 'ai' | 'user'; text: string; evaluation?: Evaluation; }
interface Props { level: string; topic: string; }

export default function LivePractice({ level, topic }: Props) {
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [speaking, setSpeaking] = useState(false);
  const [evaluating, setEvaluating] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
  const [showEval, setShowEval] = useState<number | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { state, transcript, audioUrl, start, stop, reset } = useAudioRecorder();

  const speakText = async (text: string) => {
    setSpeaking(true);
    try {
      const res = await fetch('/api/speak', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text }) });
      const blob = await res.blob();
      const audio = new Audio(URL.createObjectURL(blob));
      await new Promise<void>(resolve => { audio.onended = () => resolve(); audio.play(); });
    } catch {}
    setSpeaking(false);
  };

  const startConversation = async () => {
    setStarted(true); setMessages([]);
    const res = await fetch('/api/generate-question', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ level, topic }) });
    const data = await res.json();
    setCurrentQuestion(data.question);
    setMessages([{ role: 'ai', text: data.question }]);
    await speakText(data.question);
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const handleSubmit = async () => {
    if (!transcript || !currentQuestion) return;
    const userMsg: Message = { role: 'user', text: transcript };
    setMessages(prev => [...prev, userMsg]); reset(); setEvaluating(true);
    try {
      const evalRes = await fetch('/api/evaluate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ transcript, question: currentQuestion, level, topic }) });
      const evaluation = await evalRes.json();
      setMessages(prev => { const u = [...prev]; u[u.length - 1] = { ...userMsg, evaluation }; return u; });
      setEvaluating(false);
      const followRes = await fetch('/api/followup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ transcript, question: currentQuestion, level, topic, evaluation }) });
      const followData = await followRes.json();
      setMessages(prev => [...prev, { role: 'ai', text: followData.response }]);
      setCurrentQuestion(followData.response);
      await speakText(followData.response);
    } catch { setEvaluating(false); }
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  if (!started) return (
    <div>
      <div style={{ background: 'var(--purple-light)', borderRadius: 16, padding: '18px 20px', marginBottom: 24 }}>
        <p style={{ fontSize: 15, color: 'var(--purple-text)', lineHeight: 1.7, margin: 0, fontWeight: 600 }}>
          🎙️ The AI coach will speak a question out loud. Answer immediately — no preparation, just like a real speaking exam. The conversation continues until you stop it.
        </p>
      </div>
      <button onClick={startConversation} style={{ width: '100%', background: 'var(--yellow)', color: 'var(--yellow-text)', fontWeight: 800, fontSize: 16, padding: '16px', borderRadius: 50, border: 'none', cursor: 'pointer' }}>
        ▶ Begin Conversation
      </button>
    </div>
  );

  return (
    <div>
      <div style={{ maxHeight: 480, overflowY: 'auto', marginBottom: 20 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: 16, display: 'flex', flexDirection: 'column', alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: msg.role === 'ai' ? 'var(--purple)' : 'var(--ink-faint)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {msg.role === 'ai' ? '🤖 Coach' : '🙋 You'}
            </p>
            <div style={{ maxWidth: '85%', background: msg.role === 'ai' ? 'var(--purple-light)' : 'var(--yellow)', borderRadius: msg.role === 'ai' ? '4px 18px 18px 18px' : '18px 4px 18px 18px', padding: '14px 18px' }}>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: msg.role === 'ai' ? 'var(--purple-text)' : 'var(--yellow-text)', margin: 0, fontWeight: 500 }}>{msg.text}</p>
              {msg.evaluation && (
                <button onClick={() => setShowEval(showEval === i ? null : i)} style={{ marginTop: 8, fontSize: 13, color: msg.role === 'ai' ? 'var(--purple)' : 'var(--yellow-text)', background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 700, padding: 0 }}>
                  {showEval === i ? '↑ Hide feedback' : '↓ View feedback'}
                </button>
              )}
              {msg.evaluation && showEval === i && <EvaluationResult evaluation={msg.evaluation} />}
            </div>
          </div>
        ))}

        {speaking && (
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--purple)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>🤖 Coach</p>
            <div style={{ background: 'var(--purple-light)', borderRadius: '4px 18px 18px 18px', padding: '14px 18px', display: 'inline-flex', gap: 4, alignItems: 'flex-end' }}>
              {[1,2,3,4,5].map(i => (
                <div key={i} style={{ width: 4, background: 'var(--purple)', borderRadius: 2, height: `${8 + i * 3}px`, animation: 'bounce 1s ease-in-out infinite', animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
          </div>
        )}
        {evaluating && <p style={{ fontSize: 14, color: 'var(--ink-muted)', textAlign: 'center', padding: '8px 0', fontWeight: 600 }}>✨ Analysing your answer…</p>}
        <div ref={bottomRef} />
      </div>

      {!speaking && !evaluating && currentQuestion && (
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16, marginBottom: 12 }}>
          {state === 'idle' && (
            <button onClick={start} style={{ width: '100%', background: 'var(--yellow)', color: 'var(--yellow-text)', fontWeight: 800, fontSize: 16, padding: '16px', borderRadius: 50, border: 'none', cursor: 'pointer' }}>
              🎙️ Tap to Answer
            </button>
          )}
          {state === 'recording' && (
            <button onClick={stop} style={{ width: '100%', background: 'var(--red)', color: 'white', fontWeight: 800, fontSize: 16, padding: '16px', borderRadius: 50, border: 'none', cursor: 'pointer' }}>
              ⏹ Stop Recording
            </button>
          )}
          {state === 'processing' && (
            <div style={{ textAlign: 'center', color: 'var(--ink-muted)', fontSize: 14, fontWeight: 600, padding: '16px 0' }}>⏳ Transcribing…</div>
          )}
          {state === 'done' && transcript && (
            <div>
              <div style={{ background: 'var(--bg)', borderRadius: 14, padding: '14px 18px', marginBottom: 12 }}>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0 }}>{transcript}</p>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button onClick={reset} style={{ flex: 1, background: 'var(--bg)', color: 'var(--ink-muted)', fontWeight: 700, fontSize: 14, padding: '12px', borderRadius: 50, border: '2px solid var(--border)', cursor: 'pointer' }}>
                  ↺ Redo
                </button>
                <button onClick={handleSubmit} style={{ flex: 2, background: 'var(--purple)', color: 'white', fontWeight: 800, fontSize: 15, padding: '12px', borderRadius: 50, border: 'none', cursor: 'pointer' }}>
                  Send →
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <button onClick={() => { setStarted(false); setMessages([]); setCurrentQuestion(null); reset(); }} style={{ width: '100%', background: 'transparent', color: 'var(--ink-faint)', fontWeight: 600, fontSize: 13, padding: '10px', borderRadius: 50, border: '2px solid var(--border)', cursor: 'pointer' }}>
        End Conversation
      </button>
    </div>
  );
}