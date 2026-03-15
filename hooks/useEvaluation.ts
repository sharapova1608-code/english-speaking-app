"use client";

import { useState, useCallback } from "react";
import { Evaluation } from "@/types";

export type EvalState = "idle" | "loading" | "done" | "error";

export function useEvaluation() {
  const [state, setState] = useState<EvalState>("idle");
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);

  const evaluate = useCallback(
    async (
      transcript: string,
      question: string,
      level: string,
      topic: string
    ) => {
      setState("loading");
      try {
        const res = await fetch("/api/evaluate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ transcript, question, level, topic }),
        });
        if (!res.ok) throw new Error("Evaluation failed");
        const data = await res.json();
        setEvaluation(data);
        setState("done");
      } catch {
        setState("error");
      }
    },
    []
  );

  const reset = useCallback(() => {
    setEvaluation(null);
    setState("idle");
  }, []);

  return { state, evaluation, evaluate, reset };
}