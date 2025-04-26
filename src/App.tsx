import ListItem from "./components/ListItem";
import Navbar from "./components/Navbar";
import Separator from "./components/Separator";
import Summary from "./components/Summary";
import experiences from "./data/experiences.json";
import educations from "./data/educations.json";
import ClickSpark from "./components/animation/ClickSpark";
import TechStacks from "./components/TechStacks";

function App() {
  const menus: string[] = ["About Me", "Projects", "Call Me"];

  return (
    <>
      <ClickSpark
        sparkColor="#000"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="mt-12 w-screen">
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center w-1/2 gap-5">
              <Summary />
              <Separator />
              <ListItem data={experiences} />
              <Separator />
              <ListItem data={educations} />
              <Separator />
              <TechStacks />
              <div className="flex self-end items-end mt-5 mb-1 text-slate-600 text-sm font-semibold">
                Hanif @2025
              </div>
            </div>
          </div>
        </div>
      </ClickSpark>
    </>
  );
}

export default App;
