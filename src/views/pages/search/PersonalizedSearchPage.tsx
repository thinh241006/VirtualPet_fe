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
    label: "Tôi đang sống",
    options: ["một mình", "cùng gia đình", "?"],
  },
  {
    key: "experience",
    label: "Tôi đã có kinh nghiệm nuôi",
    options: ["chó", "mèo", "loài khác", "không loài nào"],
  },
  {
    key: "time",
    label: "Tôi có thể dành thời gian",
    suffix: "cho thú cưng",
    options: [
      "dưới 1h/ngày",
      "từ 1h đến 2h/ngày",
      "trên 2h/ngày",
      "chưa chắc chắn",
    ],
  },
  {
    key: "budget",
    label: "Tôi",
    suffix: "chi phí chăm sóc thú cưng",
    options: ["có đủ", "chưa có đủ", "chưa chắc chắn"],
  },
  {
    key: "preferSpecies",
    label: "Tôi muốn nhận nuôi",
    options: ["chó", "mèo", "các thú cưng khác"],
  },
  {
    key: "temperament",
    label: "Tôi mong thú cưng của mình",
    options: [
      "năng động, hoạt bát",
      "trầm tĩnh, điềm tĩnh",
      "phù hợp với trẻ nhỏ",
      "có thể ở một mình thời gian dài",
      "nhu cầu chăm sóc thấp",
    ],
  },
  {
    key: "reason",
    label: "Tôi nhận nuôi vì",
    options: [
      "muốn có một người bạn đồng hành",
      "muốn giáo dục chăm sóc thú cưng cho gia đình",
      "muốn cứu mang thú cưng cần tổ ấm",
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
            <div className="mb-5 text-sm text-gray-600">chọn một lựa chọn</div>

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
                <span>Quay lại màn hình chính</span>
              </Link>
              <button
                onClick={handleSave}
                className="bg-[#F5B349] hover:bg-[#f1a025] text-black font-semibold px-5 py-2 rounded-lg"
              >
                {isLastStep ? "Hoàn tất" : "Lưu"}
              </button>
            </div>
          </div>
        )}

        {/* Action bar for completed summary view */}
        {isCompleted && (
          <div className="mt-6 flex items-center justify-between">
            <Link to={Path.root.index} className="text-gray-700 hover:text-gray-900 inline-flex items-center gap-2">
              <span>←</span>
              <span>Quay lại màn hình chính</span>
            </Link>
            <button
              onClick={() => {
                // placeholder finish action; integrate as needed
                console.log("Saved personalized answers", answers);
              }}
              className="bg-[#F5B349] hover:bg-[#f1a025] text-black font-semibold px-5 py-2 rounded-lg"
            >
              Lưu
            </button>
          </div>
        )}
      </div>
    </div>
  );

import React from 'react';

const PersonalizedSearchPage: React.FC = () => {
  return null;

};

export default PersonalizedSearchPage;


