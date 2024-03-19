// React
import React, { useMemo, useState } from "react";

// Components
import { Input } from "antd";

// Utils
import { longestText } from "@/features/app/utils";

const QuestionTwo: React.FC = () => {
  const initialValue = "Saya sangat senang mengerjakan soal algorithm";
  const [value, setValue] = useState<string>(initialValue);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;
    setValue(
      `${longestText(targetValue).text} ${longestText(targetValue).length}`
    );
  };

  const displayValue = useMemo(() => {
    if (longestText(value).length === 1) {
      return "";
    } else {
      return `${longestText(value).text}: ${longestText(value).length}`;
    }
  }, [value]);

  return (
    <div>
      <div className="text-[18px] font-bold">Question 2</div>

      <Input
        className="mt-2"
        defaultValue={value}
        onChange={onChangeInput}
        width={600}
      />
      <div className="flex gap-1 mt-2">
        <div>Longest text:</div>
        <div className="font-bold">{displayValue}</div>
      </div>
    </div>
  );
};

export default QuestionTwo;
