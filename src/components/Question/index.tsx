"use client";

import { useState } from "react";
import { QuestionModel } from "@/models/questions/question-model";
import { RadioGroup } from "../ui/RadioGroup";

interface Props {
  question: QuestionModel;
}

export function Question({ question }: Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    setAnswered(false); // limpa a resposta se trocar a opção
  };

  const handleAnswer = () => {
    if (!selectedOption) return;
    setAnswered(true);
  };

  const isCorrect = selectedOption === question.correctOption;

  return (
    <div className="p-4 flex flex-col shadow-xl bg-gray-300">
      <div className="p-4 flex flex-col gap-3">
        <h2 className="bg-gray-300 p-4 rounded-md text-gray-800 font-semibold text-lg">
          {question.statement}
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
          onChange={handleChange} // ✅ agora funciona
        />

        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          onClick={handleAnswer}
          disabled={!selectedOption}
        >
          Responder
        </button>

        {answered && (
          <p
            className={`mt-2 font-bold ${
              isCorrect ? "text-green-600" : "text-red-600"
            }`}
          >
            {isCorrect ? "Resposta correta!" : "Resposta errada!"}
          </p>
        )}
      </div>
    </div>
  );
}
