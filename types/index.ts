export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1";

export interface Topic {
  id: string;
  label: string;
  description: string;
  emoji: string;
}

export interface Question {
  id: string;
  text: string;
}

export interface Mistake {
  original: string;
  correction: string;
  explanation: string;
}

export interface Evaluation {
  cefr_level: CEFRLevel;
  fluency_score: number;
  grammar_score: number;
  vocabulary_score: number;
  corrected_version: string;
  mistakes: Mistake[];
}

export interface Session {
  id: string;
  level: CEFRLevel;
  topic: string;
  question: string;
  transcript: string;
  evaluation: Evaluation;
  created_at: string;
}