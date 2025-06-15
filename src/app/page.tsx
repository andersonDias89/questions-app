import { fetchQuestions } from "@/lib/fetch-questions";
import { QuestionsList } from "@/components/QuestionList";

export default async function HomePage() {
  const questions = await fetchQuestions();

  return <QuestionsList questions={questions} />;
}
