import Profile from "../assets/profile.jpeg"

const Summary = () => {
  return (
    <div className="grid grid-cols-2">
        <img src={Profile} alt="Profile" className="flex place-self-center w-34 h-34 object-fill rounded-full" />
      {/* <div className="flex place-self-center w-24 h-24 rounded-full bg-slate-300"></div> */}
      <div className="flex flex-col gap-2">
        <p className="font-bold">Hanif Ifran Antoni</p>
        <p className="text-justify text-sm">
          Passionate Software Developer with 2+ years of experience in
          full-stack web development. Proven expertise in building ERP systems
          using React (TypeScript) for frontend and Laravel/Frappe for backend.
          Skilled in modern web technologies with experience in mentoring
          students and working on scalable enterprise applications. Eager to
          take on complex challenges and deliver high-quality solutions.
        </p>
      </div>
    </div>
  );
};

export default Summary;
