import { QuestionModel } from "@/models/questions/question-model";
import { Question } from "../Question";

interface Props {
  questions: QuestionModel[];
}

export function QuestionsList({ questions }: Props) {
  return (
    <div className="p-4 flex flex-col gap-6">
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
}
