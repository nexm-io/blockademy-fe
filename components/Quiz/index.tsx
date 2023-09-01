import React, { useState } from "react";
import Button from "../Common/Button";

const QuizArray = [
  { id: "a", text: "Through the use of hash functions" },
  { id: "b", text: "Through the use of a private network" },
  { id: "c", text: "They are connected by the blockchain administrators" },
  { id: "d", text: "Through centralized servers" },
  { id: "e", text: "None of the above" },
];

const Quiz = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleOptionClick = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((option) => option !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className="bg-gray-200 py-10 px-7 rounded-[8px]">
      <div>
        <h2 className="text-black-100 font-bold text-[22px] leading-6">
          How does a block connect to another?
        </h2>
        <div className="mt-4 flex flex-col gap-4">
          {QuizArray.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOptionClick(item.id)}
              className={`border  px-4 py-3 rounded-[8px]  cursor-pointer select-none ${
                selected.includes(item.id)
                  ? "bg-blue-200 border-blue-100 text-blue-100"
                  : "border-gray-400 bg-transparent"
              }`}
            >
              <p>
                {item.id}&#41; <span>{item.text}</span>
              </p>
            </div>
          ))}
          <div className="flex gap-3">
            <Button
              disabled={selected.length === 0}
              className={`${
                selected.length ? "bg-blue-100" : "bg-gray-500"
              } w-[180px] px-2`}
            >
              Submit
            </Button>
            <Button className="w-[180px] px-2">Next Module</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
