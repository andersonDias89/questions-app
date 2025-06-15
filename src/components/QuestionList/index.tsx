import { QuestionModel } from "@/models/questions/question-model";

interface Props {
  questions: QuestionModel[];
}

export function Question({ questions }: Props) {
  return (
    <div className="p-4 flex flex-col gap-4 border-4 border-t-transparent border-slate-900">
      {questions.map((question) => (
        <div key={question.id}>
          <h2>{question.statement}</h2>
          <div className="flex gap-2">
            <span>A -</span> <p>{question.optionA}</p>
          </div>
          <div className="flex gap-2">
            <span>B -</span> <p>{question.optionB}</p>
          </div>
          <div className="flex gap-2">
            <span>C -</span> <p>{question.optionC}</p>
          </div>
          <div className="flex gap-2">
            <span>D -</span> <p>{question.optionD}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
