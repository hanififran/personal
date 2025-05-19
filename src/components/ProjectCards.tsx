import React from "react";
import BeanApp from "../assets/BeanApp.webp";
import KurbanApp from "../assets/KurbanApp.webp";
import MusaApp from "../assets/MusaApp.webp";
import PungutApp from "../assets/PungutApp.webp";
import FruitApp from "../assets/FruitApp.webp";
import Separator from "./Separator";

const imageMap: Record<string, string> = {
  BeanApp,
  KurbanApp,
  MusaApp,
  PungutApp,
  FruitApp,
};

type ProjectCardsProps = {
  data: {
    id: string;
    title: string;
    description: string;
    image: string;
    tools: string;
  }[];
};

export default function ProjectCards({ data }: ProjectCardsProps) {
  const [flipped, setFlipped] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const currentProject = data[currentIndex];

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setFlipped(false);
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 300);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setFlipped(false);
      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
      }, 300);
    }
  };

  return (
    <div className="flex flex-col self-start gap-2 w-full">
      <div className="border p-2 rounded-lg">
        <div className="flex gap-2 justify-between items-center mx-2">
          <button
            onClick={handleBack}
            type="button"
            className={`title text-sm text-gray-600 hover:text-black ${
              currentIndex == 0 && `text-white hover:text-white`
            }`}
          >
            Back
          </button>
          <button className="title text-sm hover:text-black">
            Project {currentProject.id}
          </button>
          <button
            onClick={handleNext}
            type="button"
            className={`title text-sm text-gray-600 hover:text-black ${
              currentIndex >= data.length - 1 && `text-white hover:text-white`
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <div
        className="w-full h-[450px] lg:h-[250px] perspective"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front Side */}
          <div className="flex flex-col justify-between absolute w-full h-full backface-hidden bg-white border rounded-lg p-4">
            <p className="title">{currentProject.title}</p>
            <Separator />
            <div className="mt-2 text-justify text-sm/6">
              {currentProject.description}
            </div>
            <div className="mt-auto flex flex-col lg:flex-row gap-2 justify-between items-center pt-10">
              <p className="title text-sm">{currentProject.tools}</p>
              <div className="flex gap-2 items-center">
              <p className="text-sm">Click Anywhere in this card to flip </p>
              <p className="text-xl">↺</p>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white border rounded-lg p-4 flex items-center justify-center">
            <img
              src={`${imageMap[currentProject.image]}`}
              alt="Project Screenshot"
              className="object-contain max-h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
