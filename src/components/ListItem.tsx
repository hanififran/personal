type ExperiencesProps = {
  data: {
    company: string;
    role: string;
    description: string[];
  }[];
};

const ListItem = ({ data }: ExperiencesProps) => {
  return (
    <div className="flex flex-col self-start gap-5">
      {data.map((item, idx) => (
        <div className="grid grid-cols-1" key={idx}>
          <p className="title">{item.company}</p>
          <p className="text-sm">{item.role}</p>
          {item.description.map((item, idx) => (
            <p
              className="text-justify text-sm/6 mt-2"
              key={idx}
            >
             {item}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ListItem;
