import { fetchQuestions } from "@/lib/fetch-questions";
import { QuestionsList } from "@/components/QuestionList";

export default async function QuestionsListPage() {
  const questions = await fetchQuestions();

  return (
    <div>
      <QuestionsList questions={questions} />;
    </div>
  );
}
