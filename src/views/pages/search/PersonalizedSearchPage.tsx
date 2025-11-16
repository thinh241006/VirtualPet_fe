import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Path } from "@/configs/path";

type Question = {
  key: string;
  label: string; // text before the chip
  options: string[];
  suffix?: string; // optional text after the chip for sentence-style prompts
};

const QUESTIONS: Question[] = [
  {
    key: "living",
    label: "I am living",
    options: ["alone", "with family", "?"],
  },
  {
    key: "experience",
    label: "I have previously owned",
    options: ["dog", "cat", "other species", "none"],
  },
  {
    key: "time",
    label: "I can dedicate",
    suffix: "time per day for my pet",
    options: [
      "less than 1 hour",
      "1 to 2 hours",
      "more than 2 hours",
      "not sure yet",
    ],
  },
  {
    key: "budget",
    label: "I",
    suffix: "have enough budget for pet care costs",
    options: ["have", "don't have", "not sure yet"],
  },
  {
    key: "preferSpecies",
    label: "I want to adopt",
    options: ["a dog", "a cat", "other pets"],
  },
  {
    key: "temperament",
    label: "I want my pet to be",
    options: [
      "energetic and playful",
      "calm and quiet",
      "good with children",
      "able to be alone for long periods",
      "low maintenance",
    ],
  },
  {
    key: "reason",
    label: "I want to adopt because",
    options: [
      "I want a companion",
      "I want to teach my family about pet care",
      "I want to rescue a pet in need",
    ],
  },
];

const PersonalizedSearchPage: React.FC = () => {
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string | undefined>>({});
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentQuestion = useMemo(() => QUESTIONS[stepIndex], [stepIndex]);
  const totalSteps = QUESTIONS.length;

  const handleSave = () => {
    // Save current selection (can be undefined if user didn't choose)
    setAnswers((prev) => ({ ...prev, [currentQuestion.key]: selected }));
    // Advance to next step if available
    if (stepIndex < totalSteps - 1) {
      const nextIndex = stepIndex + 1;
      setStepIndex(nextIndex);
      const nextKey = QUESTIONS[nextIndex].key;
      setSelected(answers[nextKey]);
    } else {
      // Finished all questions -> show summary-only view
      setIsCompleted(true);
    }
  };

  const isLastStep = stepIndex === totalSteps - 1;

  return (
    <div className="min-h-screen bg-[#FEF6E1] flex flex-col">
      <div className="flex-1 w-full max-w-4xl mx-auto px-6 py-10">

        {/* Answer chips for finished/previous questions */}
        <div className="space-y-3 mb-4">
          {(isCompleted ? QUESTIONS : QUESTIONS.slice(0, stepIndex + 1)).map((q, idx) => {
            const isCurrentRow = !isCompleted && idx === stepIndex;
            const value = isCurrentRow ? selected ?? "..." : answers[q.key] ?? "...";
            return (
              <div key={q.key} className="flex items-center gap-3 flex-wrap">
                <span className="text-base text-gray-900">{q.label}</span>
                <span className="inline-flex items-center rounded-md bg-white px-3 py-1 text-sm font-medium text-black">
                  {value}
                </span>
                {q.suffix && <span className="text-base text-gray-900">{q.suffix}</span>}
              </div>
            );
          })}
        </div>

        {/* Show options card while in progress; hide on completion */}
        {!isCompleted && (
          <div className="bg-white rounded-xl shadow p-6 relative">
            <span className="absolute right-4 top-3 text-sm text-gray-700">
              {stepIndex + 1}/{totalSteps}
            </span>
            <div className="mb-5 text-sm text-gray-600">choose one option</div>

            <div className="flex flex-col gap-4">
              {currentQuestion.options.map((opt) => {
                const id = `${currentQuestion.key}-${opt}`;
                return (
                  <label key={id} htmlFor={id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      id={id}
                      type="radio"
                      name={currentQuestion.key}
                      className="h-4 w-4 rounded border-gray-300 text-[#F5B349] focus:ring-[#F5B349]"
                      checked={selected === opt}
                      onChange={() => setSelected(opt)}
                    />
                    <span className="text-gray-900 font-medium">{opt}</span>
                  </label>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <Link to={Path.root.index} className="text-gray-700 hover:text-gray-900 inline-flex items-center gap-2">
                <span>←</span>
                <span>Back to Home</span>
              </Link>
              <button
                onClick={handleSave}
                className="bg-[#F5B349] hover:bg-[#f1a025] text-black font-semibold px-5 py-2 rounded-lg"
              >
                {isLastStep ? "Finish" : "Save"}
              </button>
            </div>
          </div>
        )}

        {/* Action bar for completed summary view */}
        {isCompleted && (
          <div className="mt-6 flex items-center justify-between">
            <Link to={Path.root.index} className="text-gray-700 hover:text-gray-900 inline-flex items-center gap-2">
              <span>←</span>
              <span>Back to Home</span>
            </Link>
            <button
              onClick={() => {
                // placeholder finish action; integrate as needed
                console.log("Saved personalized answers", answers);
              }}
              className="bg-[#F5B349] hover:bg-[#f1a025] text-black font-semibold px-5 py-2 rounded-lg"
            >
              Suitable Pets
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalizedSearchPage;


