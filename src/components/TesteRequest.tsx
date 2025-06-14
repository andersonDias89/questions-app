"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

type Question = {
  id: string;
  statement: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
};

export function TestRequest() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:3001/questions");
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Erro ao buscar perguntas:", error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <div
        className={clsx(
          "border-4 border-t-transparent border-slate-900 flex flex-col gap-4 p-4"
        )}
      >
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
    </div>
  );
}
