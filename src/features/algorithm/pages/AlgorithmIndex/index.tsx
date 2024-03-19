import React from "react";
import {
  QuestionOne,
  QuestionTwo,
  QuestionThree,
  QuestionFour,
} from "./components";

const AlgorithmIndex: React.FC = () => {
  return (
    <div className="flex-1 py-12 px-16">
      <div className="text-[24px] font-bold mb-4">Test Algorithm</div>

      <div className="flex flex-col gap-8">
        <QuestionOne />
        <QuestionTwo />
        <QuestionThree />
        <QuestionFour />
      </div>
    </div>
  );
};

export default AlgorithmIndex;
