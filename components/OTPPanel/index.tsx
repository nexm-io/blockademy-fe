import React, { useState, useRef, ChangeEvent, useEffect } from "react";

interface OTPPageProps {
  //   onComplete: (otp: string) => void;
  register: any;
  otpDigits: any;
}

const OTPPanel: React.FC<OTPPageProps> = ({ register, otpDigits }) => {
  const [otp, setOTP] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<HTMLInputElement[]>(new Array(6).fill(null));

  useEffect(() => {
    const firstInput = inputRefs.current[0];
    firstInput && firstInput.focus();
  }, []);

  const handleInput = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const newOTP = [...otp];
    const inputValue = event.target.value;

    if (/^\d*$/.test(inputValue)) {
      newOTP[index] = inputValue;

      setOTP(newOTP);

      if (inputValue !== "") {
        otpDigits.current[index] = inputValue;
        if (index < inputRefs.current.length - 1) {
          const nextInput = inputRefs.current[index + 1];
          if (nextInput) {
            nextInput.focus();
          }
        } else {
          //
        }
      }
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="">
      <div className="flex gap-6 justify-center items-center my-4">
        {otp.map((num, index) => (
          <input
            className="border border-gray-600  w-[50px] h-[50px] rounded-lg text-center"
            key={index}
            type="text"
            maxLength={1}
            value={num}
            {...register(`otp-${index}`)}
            onChange={(e) => handleInput(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            inputMode="numeric"
            pattern="\d*"
            ref={(ref) => (inputRefs.current[index] = ref as HTMLInputElement)}
          />
        ))}
      </div>
    </div>
  );
};

export default OTPPanel;
