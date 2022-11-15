import { Bars3Icon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../Assets/logo/logo_white.png";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user)

  const [open, setOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(true);

  const signOutHandler = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <nav className="p-5 bg-green-700 text-white shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center ">
        <Link to="/" className="text-2xl font-[Poppins] cursor-pointer">
          <img className="h-12 w-28 inline" src={logo} alt="Navbar" />
        </Link>

        <span className="text-3xl cursor-pointer mx-2 md:hidden block">
          <Bars3Icon
            onClick={() => setOpen(!open)}
            className="w-10 text-white"
            name="menu"
          ></Bars3Icon>
        </span>
      </div>

      <ul
        className={` ${
          open && "absolute opacity-0 top-[-400px]"
        }  md:flex md:items-center z-[-1] md:z-auto md:static  w-full mx-auto left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 transition-all ease-in duration-500`}
      >
        <li className="mx-4 my-6 md:my-0">
          <NavLink
            to="/"
            className="text-md font-bold hover:text-cyan-300 duration-500"
          >
            Home
          </NavLink>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <NavLink
            to="/services"
            className="text-md font-bold hover:text-cyan-300 duration-500"
          >
            Services
          </NavLink>
        </li>

        {user?.email && (
          <>
            <li className="mx-4 my-6 md:my-0">
              <NavLink
                to="/addMyService"
                className="text-md font-bold hover:text-cyan-300 duration-500"
              >
                Add Services
              </NavLink>
            </li>

            <li className="mx-4 my-6 md:my-0">
              <NavLink
                to="myReviews"
                className="text-md font-bold hover:text-cyan-300 duration-500"
              >
                My Reviews
              </NavLink>
            </li>
          </>
        )}

        <li className="mx-4 my-6 md:my-0">
          <NavLink
            to="/blog"
            className="text-md font-bold hover:text-cyan-300 duration-500"
          >
            Blog
          </NavLink>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <NavLink
            to="/contact"
            className="text-md font-bold hover:text-cyan-300 duration-500"
          >
            Contact Us
          </NavLink>
        </li>

        {user?.email ? (
          <div className="flex  items-center">
            <div>
              <button
                onClick={signOutHandler}
                className="group relative inline-block overflow-hidden border border-orange-600 px-8 py-3 focus:outline-none focus:ring "
              >
                <span className="absolute inset-y-0 left-0 w-[2px] bg-orange-600 transition-all group-hover:w-full group-active:bg-orange-500"></span>

                <span className="relative text-sm font-medium text-orange-100 transition-colors group-hover:text-white">
                  LogOut
                </span>
              </button>
            </div>

            {/* profile  */}
            <div className="ml-3 relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="inline-flex  text-gray-600 "
              >
                <img
                  className="w-12  rounded-full  border-2 hover:border-gray-900 border-white"
                  src={user?.photoURL}
                  alt=""
                />
              </button>

              {/* Dropdown menus */}
              <div class={` ${profileOpen ? "hidden" : '' } `}>
                <div
                  class="absolute block right-0 z-10 mt-4 w-56 origin-top-right rounded-md border border-gray-100 bg-green-100 shadow-lg"
                  role="menu"
                >
                  <div class="p-2">
                    <Link
                      to="/profile"
                      class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem"
                    >
                      View profile
                    </Link>

                    <Link
                      to="/addMyService"
                      class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem"
                    >
                      Add Services
                    </Link>
                  </div>
                </div>
              </div>

              {/* Dropdown Menus End  */}
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button className="group relative inline-block overflow-hidden border border-orange-600 px-8 py-3 focus:outline-none focus:ring ">
              <span className="absolute inset-y-0 left-0 w-[2px] bg-orange-600 transition-all group-hover:w-full group-active:bg-orange-500"></span>

              <span className="relative text-sm font-medium text-orange-100 transition-colors group-hover:text-white">
                Login
              </span>
            </button>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Header;
