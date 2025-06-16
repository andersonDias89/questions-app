"use client";

import { useState } from "react";
import { QuestionModel } from "@/models/questions/question-model";
import { RadioGroup } from "../ui/RadioGroup";
import { ButtonDefault } from "../ui/Buttons/ButtonDefault";
import { AnswerFeedback } from "../ui/Feedbacks/AnswerFeedback";

interface Props {
  question: QuestionModel;
  totalQuestions?: number;
}

export function Question({ question, totalQuestions }: Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    setAnswered(false);
  };

  const handleAnswer = () => {
    if (!selectedOption) return;
    setAnswered(true);
  };

  const isCorrect = selectedOption === question.correctOption;

  return (
    <div className="p-4 flex flex-col shadow-xl bg-gray-900 rounded-md">
      <div className="p-4 flex flex-col gap-3">
        <h2 className="bg-gray-950 p-4 rounded-md text-white text-lg">
          {`${totalQuestions} - ${question.statement}`}
        </h2>
        <RadioGroup
          options={[
            { id: `${question.id}-A`, value: "A", label: question.optionA },
            { id: `${question.id}-B`, value: "B", label: question.optionB },
            { id: `${question.id}-C`, value: "C", label: question.optionC },
            { id: `${question.id}-D`, value: "D", label: question.optionD },
          ]}
          name={`question-${question.id}`}
          defaultValue={selectedOption ?? ""}
          onChange={handleChange}
          selectedOption={selectedOption}
          correctOption={question.correctOption}
          answered={answered}
        />

        {!answered && (
          <ButtonDefault onClick={handleAnswer} disabled={!selectedOption}>
            Responder
          </ButtonDefault>
        )}

        <AnswerFeedback show={answered} isCorrect={isCorrect} />
      </div>
    </div>
  );
}
