import React, { useState } from "react";
import { links } from "./constant";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChevronCompactDown } from "react-icons/bs";

const Navbar = () => {
  // const [value, setvalue] = useState("");
  const [services, setservices] = useState(false);
  const [order, setorder] = useState(false);
  const [attendance, setattendance] = useState(false);
  // const [signin, setsignin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const nav = [

    {
      name: "Services/Products",
      value: "services",
      funcName: services,
    },
    {
      name: "Order Management",
      value: "order",
      funcName: order,
    },
    {
      name: "Attendance",
      value: "attendance",
      funcName: attendance,
    },
    // {
    //   name: "Sign In / Sign Up",
    //   value: "signin",
    //   funcName: signin,
    // },
    
  ];

  const onCloseNav = (value) => {
     if (value === "services") setservices(false);
    else if (value === "order") setorder(false);
    // else if (value === "signin") setsignin(false);
    else if (value === "attendance") setattendance(false);
  };
  const toggleDropdown = (value) => {
    // sethome(false);
    setservices(false);
    setorder(false);
    setattendance(false);
    // setsignin(false);

    // if (value === "home") sethome(!home);
    // else 
    if (value === "services") setservices(!services);
    else if (value === "order") setorder(!order);
    // else if (value === "signin") setsignin(!signin);
    else if (value === "attendance") setattendance(!attendance);
  };

  return (
   <>
   <div className=" bg-sky-400 w-full h-16 flex-shrink flex justify-start">
   <div className="-mt-6 ml-7">
        <img src="/logo.png" alt="logo" 
         className="w-28 h-28"/>
      </div>
      <div className=" hidden md:flex justify-evenly ml-52 items-center list-none h-full w-800 text-gray-100 font-medium">
        <button>
          <Link to="/">Home</Link>
        </button>
        {nav.map((nav, ind) => (
          <div className="relative " onMouseLeave={() => onCloseNav(nav.value)}>
            <button
              className="flex items-center transition ease-in-out delay-50 duration-300 
              hover:scale-110"
              onMouseEnter={() => toggleDropdown(nav.value)}
              >
              {nav.name}
            </button>
            {nav.funcName && (
              <div className=" absolute left-0  py-2 w-48 bg-black text-white-100 rounded-md shadow-lg z-10">
                {links[ind].map((link) => (
                  <>
                    <Link
                      to={link.link}
                      className="block px-4 py-2 text-sm hover:text-black hover:bg-gray-100"
                    >
                      {link.title}
                    </Link>
                    <div className="w-900 h-px bg-gray-500 flex ml-2"></div>
                  </>
                ))}
              </div>
            )}
          </div>
        ))}
        
        <div className="w-48">

          <input
            type="text"
            className="w-full bg-whitealpha placeholder-gray-800 dark:placeholder-white dark:bg-blackalpha focus:outline-none  rounded-2xl py-2 px-4"
            placeholder="Search"
            />
            </div>
        <div className=" -ml-4">

        <button className="rounded-xl h-8 w-20 bg-white text-sky-400">
          <Link to="/SignUp">SIGNUP</Link>
        </button>
        <button className="ml-3 font-semibold text-lg">
        <Link to="/alumni">LOGIN</Link>
        </button>
        </div>
      </div>

      <div className=" flex justify-between items-center w-full md:hidden ">
        <img
          src={"./logo.png"}
          alt="logo"
          className="inline-block w-24 h-24 rounded-full p-4"
        />
        <div className="text-white p-4">
          <button onClick={toggleMenu}>
            <GiHamburgerMenu className="w-8 h-8" />
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden z-10 absolute top-16 right-0 left-0 bg-white">
          <div className="flex flex-col justify-start items-start bg-white text-black p-4">
            {/* <button className="mb-2">
              <Link to="/">Home</Link>
            </button> */}
            {nav.map((nav, ind) => (
              <div className="w-full">
                <button
                  onClick={() => toggleDropdown(nav.value)}
                  className="flex justify-between w-full"
                >
                  <h1 className="mb-2">{nav.name}</h1>
                  <BsChevronCompactDown />
                </button>
                {nav.funcName && (
                  <div className="pb-4">
                    {links[ind].map((link) => (
                      <>
                        <Link
                          to={link.link}
                          className="block px-4 py-2 text-sm hover:text-black hover:bg-gray-100"
                        >
                          {link.title}
                        </Link>
                        <div className="w-900 h-px bg-gray-500 flex ml-2"></div>
                      </>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* <button className="mb-2">
              <Link to="/contact">Contact</Link>
              </button>
              
              <button className="mb-2">
              <Link to="/gallery">Gallery</Link>
            </button> */}
          </div>
        </div>
      )}
    </div>
      </>
  );
};

export default Navbar;
