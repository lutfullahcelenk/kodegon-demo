import React from "react";
import { routes } from "../../constants/routes";

type INavbar = {
  selected: any,
  setSelected: any,
}

const Navbar = ({selected, setSelected}:INavbar) => {

  return (
    <div className="bg-white shadow-lg px-5 sm:px-16 overflow-x-auto">
      <div className="w-full  flex space-x-9">
        {routes.map((item: any) => (
          <nav
            key={item.id}
            className={`cursor-pointer font-medium text-sm pt-7 pb-4 hover:text-orangeRed transition duration-300 capitalize
                  ${
                    selected !== item.name
                      ? "text-gray-400"
                      : "text-black border-b-4 border-orangeRed"
                  }`}
            onClick={() => {
              setSelected(item.name);
            }}
          >
            {item.name}
          </nav>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
