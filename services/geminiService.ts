
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const generateLoveLetter = async (traits: string): Promise<string> => {
  if (!API_KEY) return "My love, you make my world brighter every day.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Write a short, heart-touching, and romantic Valentine's Day love letter. 
    Incorporate these personality traits: ${traits}. 
    Make it sweet, poetic, and use a mix of English and a touch of Hindi (like 'Jaanu', 'Humdum', or 'Sathiya') to make it feel special. 
    Keep it under 100 words.`,
    config: {
      temperature: 0.9,
      topP: 0.95,
      topK: 40,
    }
  });

  return response.text || "You are the beat of my heart and the peace of my soul.";
};
