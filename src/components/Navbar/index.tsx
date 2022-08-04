import React from "react";
import { routes } from "../../constants/routes";

type INavbar = {
  selected: any,
  setSelected: any,
}

const Navbar = ({selected, setSelected}:INavbar) => {

  return (
    <div className="bg-white shadow-lg px-5 sm:px-16 w-full flex space-x-9 overflow-x-auto">
        {routes.map((item: any) => (
          <div
            key={item.id}
            className={`cursor-pointer font-medium text-sm pt-7 pb-4 hover:text-orangeRed transition duration-300 capitalize sm:w-max flex flex-nowrap min-w-max
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
          </div>
        ))}
      </div>
  );
};

export default Navbar;
