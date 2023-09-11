import React, { useState } from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  options: string[];
  children?: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ options, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      className={`dropdown relative cursor-pointer rounded-lg inline-flex items-center justify-between py-[6px] px-3 flex-shrink-0 border border-white-300 w-[200px]`}
    >
      <div
        className={`selectedOption flex items-center justify-between gap-5 rounded-lg`}
        onClick={toggleDropdown}
      >
        {selectedOption} {children}
      </div>
      {isOpen && (
        <ul className={`optionList z-30`}>
          {options.map((option) => (
            <li
              key={option}
              className={`option`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
