import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  const { transcript, question, level, topic, evaluation } = await req.json();

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: `You are a friendly English speaking coach having a conversation with a ${level} level student about "${topic}".
Your job is to:
1. Give ONE brief encouraging comment on their answer (1 sentence)
2. Then ask ONE natural follow-up question related to what they said
Keep it conversational and warm. Total response: 2-3 sentences max.
Do NOT give scores or formal feedback — just be a natural conversation partner.`,
      },
      {
        role: 'user',
        content: `Question asked: "${question}"
Student answered: "${transcript}"
CEFR level detected: ${evaluation?.cefr_level ?? level}

Respond naturally and ask a follow-up question.`,
      },
    ],
  });

  const response = completion.choices[0].message.content?.trim();
  return NextResponse.json({ response });
}