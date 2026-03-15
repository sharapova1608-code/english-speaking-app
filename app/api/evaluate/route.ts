import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { createSupabaseServerClient } from '@/lib/supabase/server';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPT = `You are an expert CEFR English language examiner.
Evaluate the student's spoken English answer and return ONLY valid JSON in this exact shape:
{
  "cefr_level": "B1",
  "fluency_score": 72,
  "grammar_score": 65,
  "vocabulary_score": 80,
  "corrected_version": "...",
  "mistakes": [
    { "original": "...", "correction": "...", "explanation": "..." }
  ]
}
Scores are integers 0–100. Be honest and constructive.`;

export async function POST(req: NextRequest) {
  const { transcript, question, level, topic } = await req.json();

  if (!transcript || !question) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      {
        role: 'user',
        content: `Question: "${question}"\n\nStudent's answer: "${transcript}"\n\nExpected level: ${level}`,
      },
    ],
    response_format: { type: 'json_object' },
  });

  const evaluation = JSON.parse(completion.choices[0].message.content!);

  const supabase = await createSupabaseServerClient();
  await supabase.from('sessions').insert({
    level, topic, question, transcript,
    cefr_level: evaluation.cefr_level,
    fluency_score: evaluation.fluency_score,
    grammar_score: evaluation.grammar_score,
    vocabulary_score: evaluation.vocabulary_score,
    corrected_version: evaluation.corrected_version,
    mistakes: evaluation.mistakes,
  });

  return NextResponse.json(evaluation);
}