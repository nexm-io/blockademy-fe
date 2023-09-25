"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
const labels = [
  "1m",
  "10m",
  "20m",
  "30m",
  "40m",
  "50m",
  "60m",
  "",
  "",
  "",
  "",
  "∞",
];

interface DoubleRangeSlider {
  time?: number[];
  setTime?: React.Dispatch<React.SetStateAction<number[]>>;
  sliderOneValue: number;
  setSliderOneValue?: React.Dispatch<React.SetStateAction<number>>;
  sliderTwoValue: number;
  setSliderTwoValue?: React.Dispatch<React.SetStateAction<number>>;
}

const DoubleRangeSlider: React.FC<DoubleRangeSlider> = ({
  setTime,
  time,
  sliderOneValue,
  setSliderOneValue = () => {},
  sliderTwoValue,
  setSliderTwoValue = () => {},
}) => {
  const [sliderValues, setSliderValues] = useState([3, 15]);

  const handleSliderChange = (event: any) => {
    const index = event.target.dataset.index;
    const newValue = parseInt(event.target.value);
    const newValues = [...sliderValues];
    newValues[index] = newValue;
    setSliderValues(newValues);
  };
  const sliderOneRef = useRef<HTMLInputElement | null>(null);
  const sliderTwoRef = useRef<HTMLInputElement | null>(null);
  const sliderTrackRef = useRef<HTMLDivElement | null>(null);
  // const [sliderOneValue, setSliderOneValue] = useState(0);
  // const [sliderTwoValue, setSliderTwoValue] = useState(30);
  const sliderMaxValue = 100;
  const minGap = 0;
  const fillColor = useCallback(() => {
    const percent1 = (sliderOneValue / sliderMaxValue) * 100;
    const percent2 = (sliderTwoValue / sliderMaxValue) * 100;
    if (sliderTrackRef.current) {
      sliderTrackRef.current.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #000000 ${percent1}% , #000000 ${percent2}%, #dadae5 ${percent2}%)`;
    }
  }, [sliderOneValue, sliderTwoValue]);

  const slideOne = useCallback(() => {
    if (sliderTwoValue - sliderOneValue <= minGap) {
      setSliderOneValue(sliderTwoValue - minGap);
    }
    fillColor();
  }, [fillColor, sliderOneValue, sliderTwoValue, setSliderOneValue]);

  const slideTwo = useCallback(() => {
    if (sliderTwoValue - sliderOneValue <= minGap) {
      setSliderTwoValue(sliderOneValue + minGap);
    }
    if (sliderTwoValue > 60) {
      setSliderTwoValue(minGap + 1000);
    }
    fillColor();
  }, [fillColor, sliderOneValue, sliderTwoValue, setSliderTwoValue]);

  const updateParentTime = useCallback(() => {
    if (setTime) {
      if (sliderTwoValue > 60) {
        setTime([sliderOneValue, sliderTwoValue + 1000]);
      }
      setTime([sliderOneValue, sliderTwoValue]);
    }
  }, [setTime, sliderOneValue, sliderTwoValue]);

  useEffect(() => {
    slideOne();
    slideTwo();
    updateParentTime();
  }, [slideOne, slideTwo, updateParentTime]);

  return (
    <>
      <div className="relative w-full h-[10px] mt-12">
        <div ref={sliderTrackRef} className="slider-track"></div>
        <div>
          <input
            type="range"
            min="0"
            step="1"
            max={sliderMaxValue}
            value={sliderOneValue}
            id="slider-1"
            ref={sliderOneRef}
            onChange={(e) => setSliderOneValue(Number(e.target.value))}
            onInput={slideOne}
          />
          <span
            className={`${sliderOneValue === 0 ? "hidden" : "range-slider-1"} `}
            style={{ left: `${(sliderOneValue / sliderMaxValue) * 100}%` }}
          >
            {sliderOneValue}
          </span>
        </div>

        <div>
          <input
            type="range"
            min="0"
            step="1"
            max={sliderMaxValue}
            value={sliderTwoValue}
            id="slider-2"
            ref={sliderTwoRef}
            onChange={(e) => setSliderTwoValue(Number(e.target.value))}
            onInput={slideTwo}
          />
          <span
            className={`${sliderTwoValue > 60 ? "hidden" : "range-slider-2"}`}
            style={{ left: `${(sliderTwoValue / sliderMaxValue) * 100}%` }}
          >
            {sliderTwoValue}
          </span>
        </div>
      </div>
      <div className="labels md:flex ">
        {labels.map((label, index) => (
          <label key={index} className={`label-${label}`}>
            {label}
          </label>
        ))}
      </div>
    </>
  );
};

export default DoubleRangeSlider;
