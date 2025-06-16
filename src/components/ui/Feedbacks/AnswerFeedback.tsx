import { CheckCircle, XCircle } from "lucide-react";

interface AnswerFeedbackProps {
  show: boolean;
  isCorrect: boolean;
  correctText?: string;
  wrongText?: string;
  className?: string;
}

export function AnswerFeedback({
  show,
  isCorrect,
  correctText = "Resposta correta!",
  wrongText = "Resposta errada!",
  className = "",
}: AnswerFeedbackProps) {
  if (!show) return null;

  const Icon = isCorrect ? CheckCircle : XCircle;
  const colorClass = isCorrect ? "text-green-700" : "text-red-600";

  return (
    <div
      className={`mt-4 flex items-center gap-2 text-lg font-bold ${className}`}
    >
      <Icon className={colorClass} size={22} />
      <span>{isCorrect ? correctText : wrongText}</span>
    </div>
  );
}
