"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
const labels = ["1m", "3m", "5m", "10m", "15m", "20m", "25m", "∞"];

const DoubleRangeSlider = () => {
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
  const [sliderOneValue, setSliderOneValue] = useState(30);
  const [sliderTwoValue, setSliderTwoValue] = useState(70);
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
  }, [fillColor, sliderOneValue, sliderTwoValue]);

  const slideTwo = useCallback(() => {
    if (sliderTwoValue - sliderOneValue <= minGap) {
      setSliderTwoValue(sliderOneValue + minGap);
    }
    fillColor();
  }, [fillColor, sliderOneValue, sliderTwoValue]);

  useEffect(() => {
    slideOne();
    slideTwo();
  }, [slideOne, slideTwo]);

  return (
    <>
      <div className="container">
        <div ref={sliderTrackRef} className="slider-track"></div>
        <input
          type="range"
          min="0"
          step="5"
          max={sliderMaxValue}
          value={sliderOneValue}
          id="slider-1"
          ref={sliderOneRef}
          onChange={(e) => setSliderOneValue(Number(e.target.value))}
          onInput={slideOne}
        />
        <input
          type="range"
          min="0"
          step="5"
          max={sliderMaxValue}
          value={sliderTwoValue}
          id="slider-2"
          ref={sliderTwoRef}
          onChange={(e) => setSliderTwoValue(Number(e.target.value))}
          onInput={slideTwo}
        />
      </div>
      <div className="labels">
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
