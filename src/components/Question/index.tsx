import { QuestionModel } from "@/models/questions/question-model";
import { RadioGroup } from "../ui/RadioGroup";

interface Props {
  question: QuestionModel;
}

export function Question({ question }: Props) {
  return (
    <div className="p-4 flex flex-col ">
      <div className="p-4 flex flex-col ">
        <h2>{question.statement}</h2>
        <RadioGroup
          options={[
            { id: `${question.id}-A`, value: "A", label: question.optionA },
            { id: `${question.id}-B`, value: "B", label: question.optionB },
            { id: `${question.id}-C`, value: "C", label: question.optionC },
            { id: `${question.id}-D`, value: "D", label: question.optionD },
          ]}
          name="layout"
        />
      </div>
    </div>
  );
}
