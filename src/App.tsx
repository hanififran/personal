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
        <div className="my-12 w-full">
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center w-full mx-12 lg:mx-0 lg:w-1/2 gap-5">
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
    </>
  );
}

export default App;
