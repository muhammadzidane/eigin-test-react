// React
import React from "react";

// Components

// Utils
import { diagonalDifference } from "@/features/app/utils";

const QuestionFour: React.FC = () => {
  // Contoh penggunaan
  const matrix: number[][] = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const result: number = diagonalDifference(matrix);
  console.log("Question 4: ", result); // Output: 3

  return (
    <div>
      <div className="text-[18px] font-bold">Question 4</div>
      <div className="font-semibold">
        Question nomer 4 bisa di lihat pada console browser.
      </div>
    </div>
  );
};

export default QuestionFour;
