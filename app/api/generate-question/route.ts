import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  const { level, topic } = await req.json();

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'You are an English speaking exam question generator. Return ONLY the question, nothing else. No quotes, no numbering, no explanation.',
      },
      {
        role: 'user',
        content: `Generate a single spoken English question about "${topic}" for a ${level} CEFR level student. Make it open-ended and natural.`,
      },
    ],
  });

  const question = completion.choices[0].message.content?.trim();
  return NextResponse.json({ question });
}