type NavbarProps = {
  menus: string[];
};

const Navbar = ({ menus }: NavbarProps) => {
  return (
    <div className="flex w-full justify-center items-center my-5">
      <div className="flex items-center justify-center gap-5 border-b pt-2 px-2">
        {menus.map((menu, idx) => (
          <div key={idx}>
            <p className="font-bold hover:text-gray-600 cursor-pointer">
              {menu}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
