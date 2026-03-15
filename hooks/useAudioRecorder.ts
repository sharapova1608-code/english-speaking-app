"use client";

import { useState, useRef, useCallback } from "react";

export type RecorderState =
  | "idle"
  | "recording"
  | "processing"
  | "done"
  | "error";

export function useAudioRecorder() {
  const [state, setState] = useState<RecorderState>("idle");
  const [transcript, setTranscript] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [duration, setDuration] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = useCallback(async () => {
    setTranscript(null);
    setAudioUrl(null);
    setDuration(0);
    chunksRef.current = [];

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
    mediaRecorderRef.current = recorder;

    timerRef.current = setInterval(() => setDuration((d) => d + 1), 1000);

    recorder.ondataavailable = (e) => chunksRef.current.push(e.data);
    recorder.onstop = async () => {
      if (timerRef.current) clearInterval(timerRef.current);
      const blob = new Blob(chunksRef.current, { type: "audio/webm" });
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
      setState("processing");

      try {
        const fd = new FormData();
        fd.append("audio", blob, "recording.webm");
        const res = await fetch("/api/transcribe", { method: "POST", body: fd });
        if (!res.ok) throw new Error("Transcription failed");
        const data = await res.json();
        setTranscript(data.transcript);
        setState("done");
      } catch {
        setState("error");
      }

      stream.getTracks().forEach((t) => t.stop());
    };

    recorder.start();
    setState("recording");
  }, []);

  const stop = useCallback(() => {
    mediaRecorderRef.current?.stop();
  }, []);

  const reset = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTranscript(null);
    setAudioUrl(null);
    setDuration(0);
    setState("idle");
  }, []);

  return { state, transcript, audioUrl, duration, start, stop, reset };
}