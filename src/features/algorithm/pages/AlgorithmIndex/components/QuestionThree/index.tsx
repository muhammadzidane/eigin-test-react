// React
import React from "react";

// Components

// Utils
import { countWordsInInput } from "@/features/app/utils";

const QuestionThree: React.FC = () => {
  const input = ["xc", "dz", "bbb", "dz"];
  const quety = ["bbb", "ac", "dz"];

  const output: number[] = countWordsInInput(input, quety);
  console.log("Question 3: ", output); // Output: [1, 0, 2]

  return (
    <div>
      <div className="text-[18px] font-bold">Question 3</div>
      <div className="font-semibold">
        Question nomer 3 bisa di lihat pada console browser.
      </div>
    </div>
  );
};

export default QuestionThree;
