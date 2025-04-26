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
      href: "https://linkedin.com/in/hanif-ifran-a-18684528a",
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
      <div className="mt-2">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center gap-2">
            {contact.icon}
            <a
              href={contact.href}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
