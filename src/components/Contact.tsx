import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  const contacts = [
    {
      icon: <MdOutlineMail />,
      label: "hanifantoni2@gmail.com",
      type: "email",
      href: "mailto:hanifantoni2@gmail.com",
    },
    {
      icon: <FaLinkedin />,
      label: "hanif-ifran-a",
      type: "linkedin",
      href: "https://www.linkedin.com/in/hanif-ifran-antoni-18684528a/",
    },
    {
      icon: <FaGithub />,
      label: "fumusGeek",
      type: "github",
      href: "https://github.com/fumusGeek",
    },
    {
      icon: <FaGithub />,
      label: "hanififran",
      type: "github",
      href: "https://github.com/hanififran",
    },
  ];

  return (
    <div className="flex flex-col self-start">
      <p className="title">Contact Me</p>
      <div className="mt-2 flex gap-2 ">
        {contacts.map((contact, index) => (
          <a  href={contact.href} target="_blank" key={index} className="text-2xl">
            {contact.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
