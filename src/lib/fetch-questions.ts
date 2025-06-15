import { QuestionModel } from "@/models/questions/question-model";

export async function fetchQuestions(): Promise<QuestionModel[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/questions`, {
    next: { revalidate: 60 }, // ou cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar perguntas");
  }

  return await response.json();
}
