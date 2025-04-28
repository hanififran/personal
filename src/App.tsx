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

function App() {
  return (
    <>
      <ClickSpark
        sparkColor="#000"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="my-12 w-full px-12">
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center w-full lg:w-1/2 gap-5">
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
