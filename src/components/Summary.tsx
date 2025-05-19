import Profile from "../assets/profile.jpeg";

const Summary = () => {
  return (
    <div className="flex flex-col items-center mx-auto gap-2 lg:grid lg:grid-cols-2">
      <img
        src={Profile}
        alt="Profile"
        className="flex place-self-center w-42 h-42 object-cover rounded-lg"
      />
      <div className="flex flex-col gap-2">
        <p className="title mt-5 lg:mt-2">Hanif Ifran Antoni</p>
        <p className="text-justify text-sm/6">
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
