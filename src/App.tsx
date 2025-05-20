import ListItem from "./components/ListItem";
import Separator from "./components/Separator";
import Summary from "./components/Summary";
import experiences from "./data/experiences.json";
import educations from "./data/educations.json";
import projects from "./data/projects.json";
import ClickSpark from "./components/animation/ClickSpark";
import TechStacks from "./components/TechStacks";
import ProjectCards from "./components/ProjectCards";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/react"
import React from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";


function App() {
  const [isDark, setIsDark] = React.useState(false);

  const handleMode = () => {
    document.documentElement.classList.toggle("dark")
    setIsDark(()=> !isDark);
  }
  return (
    <>
      <ClickSpark
        sparkColor="#000"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="py-12 w-full px-12 bg-white dark:bg-black">
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center w-full lg:w-[45dvw] gap-5">
              <button type="submit" className="dark:text-white flex self-end" onClick={handleMode}>
                {isDark ? (<MdOutlineLightMode className="text-2xl" />) : (<MdDarkMode className="text-2xl"/>) }
              </button>
              <Summary />
              <Separator />
              <ListItem data={experiences} />
              <Separator />
              <ListItem data={educations} />
              <Separator />
              <ProjectCards data={projects} />
              <Separator />
              <TechStacks />
              <Separator />
              <Contact />
            </div>
          </div>
        </div>
      </ClickSpark>
      <Analytics />
    </>
  );
}

export default App;
