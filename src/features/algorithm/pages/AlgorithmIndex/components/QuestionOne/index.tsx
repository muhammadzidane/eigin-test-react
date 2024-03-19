// React
import React, { useState } from "react";

// Components
import { Input } from "antd";

// Utils
import { reverseString } from "@/features/app/utils";

const QuestionOne: React.FC = () => {
  const [value, setValue] = useState<string>("NEGIE1");

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(reverseString(event.target.value));
  };

  const displayValue = value !== "NEGIE1" ? value : reverseString(value);

  return (
    <div>
      <div className="text-[18px] font-bold">Question 1</div>
      <Input className="mt-2" defaultValue={value} onChange={onChangeInput} />
      <div className="flex gap-1 mt-2">
        <div>Result:</div>
        <div className="font-bold">{displayValue}</div>
      </div>
    </div>
  );
};

export default QuestionOne;
