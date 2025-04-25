type ExperiencesProps = {
    data: {
        company: string;
        role: string;
        description: string[];
    }[];
}

const ListItem = ({data}: ExperiencesProps) => {
  return (
    <div className="flex flex-col self-start gap-5">
      {data.map((item, idx) => (
        <div className="grid grid-cols-1" key={idx}>
          <p className="font-bold">{item.company}</p>
          <p className="text-sm">{item.role}</p>
          {item.description.map((item, idx) => (
            <ul className="list-disc ml-12 text-sm mt-2" key={idx}>
              <li>{item}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ListItem;
