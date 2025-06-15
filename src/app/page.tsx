import { fetchQuestions } from "@/lib/fetch-questions";
import { Question } from "@/components/QuestionList";

export default async function HomePage() {
  const questions = await fetchQuestions();

  return <Question questions={questions} />;
}
