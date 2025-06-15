export const dynamic = "force-dynamic"; // 👈 força renderização dinâmica

import { Question } from "@/components/Question";
import { fetchQuestionById } from "@/lib/fetch-questions";

interface PageProps {
  params: { id: string }; // 👈 aqui está o ID da URL
}

export default async function QuestionsPageId({ params }: PageProps) {
  const question = await fetchQuestionById(params.id);
  return (
    <div>
      <div>
        <div className="w-full">
          <Question question={question} />
        </div>
      </div>
    </div>
  );
}
